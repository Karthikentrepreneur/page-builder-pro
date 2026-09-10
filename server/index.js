const path = require('path');
const fs = require('fs');

// Try loading server/.env, .env, or root .env
const envPaths = [
  path.join(__dirname, '.env'),
  path.join(__dirname, '..', 'server', '.env'),
  path.join(process.cwd(), 'server', '.env'),
  path.join(process.cwd(), '.env'),
];
for (const p of envPaths) {
  if (fs.existsSync(p)) {
    require('dotenv').config({ path: p });
    break;
  }
}

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const pool = require('./db');
const { execute } = require('./queryEngine');

const app = express();

const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'd7cf8f9eb01db83b0db55334f9831d4edb3d40d07c65db61';

const allowedOrigins = (process.env.CORS_ORIGINS || 'https://orangeot.com,https://www.orangeot.com,http://localhost:8080')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    // Same-origin/non-browser requests (curl, health checks) send no Origin header.
    if (!origin) return callback(null, true);
    if (process.env.NODE_ENV !== 'production') return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) return callback(null, true);
    if (/^https?:\/\/.*\.app\.github\.dev$/.test(origin)) return callback(null, true);
    if (/^https?:\/\/.*\.vercel\.app$/.test(origin)) return callback(null, true);
    callback(null, true); // Allow requests to API
  },
}));
app.use(express.json({ limit: '10mb' }));

const UPLOADS_DIR = path.join(process.env.TMPDIR || __dirname, 'uploads');
try { fs.mkdirSync(UPLOADS_DIR, { recursive: true }); } catch (_) {}

// Gate on every write endpoint (content edits, uploads, article/career mutations).
// Reads stay open since the public site needs them without logging in.
function requireAdminKey(req, res, next) {
  if (req.header('x-admin-key') !== ADMIN_API_KEY) {
    return res.status(401).json({ error: { message: 'Not authenticated' } });
  }
  next();
}

// --- health ---
app.get('/api/health', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 AS ok');
    res.json({ ok: rows[0].ok === 1, db: process.env.DB_NAME });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// --- generic query endpoint used by the supabase-js shim ---
app.post('/api/db', async (req, res) => {
  try {
    if (req.body.action !== 'select' && req.header('x-admin-key') !== process.env.ADMIN_API_KEY) {
      return res.status(401).json({ error: { message: 'Not authenticated' } });
    }
    const result = await execute(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: { message: err.message } });
  }
});

// --- page content: JSON blob per section, edited from the admin panel ---
function parseContent(row) {
  return typeof row.content === 'string' ? JSON.parse(row.content) : row.content;
}

app.get('/api/content', async (_req, res) => {
  try {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    const [rows] = await pool.query('SELECT section, content FROM site_content');
    const out = {};
    for (const row of rows) out[row.section] = parseContent(row);
    res.json(out);
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
});

app.get('/api/content/:section', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    const [rows] = await pool.query('SELECT content FROM site_content WHERE section = ?', [req.params.section]);
    if (!rows.length) return res.status(404).json({ error: { message: 'Section not found' } });
    res.json(parseContent(rows[0]));
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
});

async function saveContentHandler(req, res) {
  try {
    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({ error: { message: 'Body must be a JSON object' } });
    }
    await pool.query(
      'INSERT INTO site_content (section, content) VALUES (?, ?) ON DUPLICATE KEY UPDATE content = VALUES(content)',
      [req.params.section, JSON.stringify(req.body)]
    );
    res.json({ ok: true, section: req.params.section });
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
}

app.put('/api/content/:section', requireAdminKey, saveContentHandler);
app.post('/api/content/:section', requireAdminKey, saveContentHandler);

// --- storage: uploads land in MySQL storage_files and cached in tmpdir ---
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 } });

function safeRelPath(p) {
  const norm = path.posix.normalize(String(p).replace(/\\/g, '/')).replace(/^\/+/, '');
  if (norm.startsWith('..')) throw new Error('Invalid path');
  return norm;
}

app.post('/api/upload', requireAdminKey, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: { message: 'No file uploaded' } });
    }
    const bucket = safeRelPath(req.body.bucket || 'default');
    const relPath = safeRelPath(req.body.path || req.file.originalname);
    const mimeType = req.file.mimetype || 'application/octet-stream';
    const buffer = req.file.buffer;

    // 1. Store persistently in MySQL storage_files table
    await pool.query(
      'INSERT INTO storage_files (bucket, path, mime_type, data) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE mime_type = VALUES(mime_type), data = VALUES(data)',
      [bucket, relPath, mimeType, buffer]
    );

    // 2. Also try to cache on local disk / tmpdir (non-blocking)
    try {
      const dest = path.join(UPLOADS_DIR, bucket, relPath);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, buffer);
    } catch (_) {}

    res.json({ data: { path: relPath, fullPath: `${bucket}/${relPath}` } });
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
});

// Storage GET endpoint to serve files from local disk or MySQL database
app.get('/storage/:bucket/:path(*)', async (req, res) => {
  try {
    const bucket = safeRelPath(req.params.bucket);
    const relPath = safeRelPath(req.params.path);

    // Try local file cache first
    const localFile = path.join(UPLOADS_DIR, bucket, relPath);
    if (fs.existsSync(localFile)) {
      return res.sendFile(localFile);
    }

    // Otherwise fetch from database
    const [rows] = await pool.query(
      'SELECT mime_type, data FROM storage_files WHERE bucket = ? AND path = ?',
      [bucket, relPath]
    );

    if (rows.length && rows[0].data) {
      res.set('Content-Type', rows[0].mime_type || 'image/jpeg');
      res.set('Cache-Control', 'public, max-age=31536000, immutable');
      return res.send(rows[0].data);
    }

    res.status(404).send('File not found');
  } catch (err) {
    res.status(500).send('Error retrieving file');
  }
});

app.post('/api/storage-remove', requireAdminKey, async (req, res) => {
  try {
    const bucket = safeRelPath(req.body.bucket || 'default');
    const paths = Array.isArray(req.body.paths) ? req.body.paths : [];
    for (const p of paths) {
      const safeP = safeRelPath(p);
      await pool.query('DELETE FROM storage_files WHERE bucket = ? AND path = ?', [bucket, safeP]);
      try {
        const f = path.join(UPLOADS_DIR, bucket, safeP);
        if (fs.existsSync(f)) fs.unlinkSync(f);
      } catch (_) {}
    }
    res.json({ data: paths });
  } catch (err) {
    res.status(400).json({ error: { message: err.message } });
  }
});

module.exports = app;

if (require.main === module) {
  // Hostinger's Node.js App hosting (Passenger) assigns the port via process.env.PORT.
  const port = Number(process.env.PORT || process.env.API_PORT || 3010);
  const server = app.listen(port, () => {
    console.log(`Shipsoft Solutions API listening on http://localhost:${port} (db ${process.env.DB_NAME || 'u546576758_oot'})`);
  });
  // Exit cleanly if another instance already owns the port (e.g. started separately).
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} already in use — assuming an OOT API is already running.`);
      process.exit(0);
    }
    throw err;
  });
}
