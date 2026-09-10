// Creates all tables from schema.sql against the live DB, then seeds
// site_content with the bundled defaults (only for sections that don't
// already have a row, so admin edits are never overwritten). Idempotent.
const fs = require('fs');
const path = require('path');
const pool = require('./db');
const defaults = require('./defaults');

async function main() {
  const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  const statements = sql
    .replace(/^--.*$/gm, '')
    .split(/;\s*(?:\r?\n|$)/)
    .map((s) => s.trim())
    .filter(Boolean);
  for (const stmt of statements) {
    const m = stmt.match(/CREATE TABLE IF NOT EXISTS\s+(\w+)/i);
    await pool.query(stmt);
    console.log(`ok: ${m ? m[1] : stmt.slice(0, 40)}`);
  }

  for (const [section, content] of Object.entries(defaults)) {
    const [res] = await pool.query(
      'INSERT IGNORE INTO site_content (section, content) VALUES (?, ?)',
      [section, JSON.stringify(content)]
    );
    console.log(res.affectedRows ? `seeded content: ${section}` : `kept existing content: ${section}`);
  }

  const [rows] = await pool.query('SHOW TABLES');
  console.log(`\n${rows.length} tables in ${process.env.DB_NAME}:`);
  rows.forEach((r) => console.log(' -', Object.values(r)[0]));
  await pool.end();
}

main().catch((err) => {
  console.error('setup failed:', err.message);
  process.exit(1);
});
