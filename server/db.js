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

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || '193.203.184.173',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'u546576758_oot',
  password: process.env.DB_PASSWORD || 'Admin@2026@#',
  database: process.env.DB_NAME || 'u546576758_oot',
  waitForConnections: true,
  connectionLimit: 5,
  // Keep DATETIME round-trips in UTC — without this, values written as UTC
  // read back shifted by the local offset.
  timezone: 'Z',
});

module.exports = pool;
