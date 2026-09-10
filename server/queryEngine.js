// Generic whitelisted query engine backing the supabase-js shim.
// Accepts one JSON payload per request:
// { table, action, columns, values, filters:[{type,column,value,op}], order:{column,ascending},
//   limit, single, maybeSingle, count, head, onConflict }
const crypto = require('crypto');
const pool = require('./db');

const TABLES = {
  articles: { pk: 'uuid', json: [] },
  career_opportunities: { pk: 'uuid', json: [] },
  contact_submissions: { pk: 'uuid', json: [] },
};

const IDENT = /^[a-zA-Z_][a-zA-Z0-9_]*$/;

function q(ident) {
  if (!IDENT.test(ident)) throw new Error(`Invalid identifier: ${ident}`);
  return '`' + ident + '`';
}

function normalizeValue(table, column, value) {
  const meta = TABLES[table];
  if (value === undefined) return null;
  if (meta.json.includes(column) && value !== null && typeof value !== 'string') {
    return JSON.stringify(value);
  }
  if (typeof value === 'boolean') return value ? 1 : 0;
  // MySQL rejects ISO-8601 'T'/'Z' datetimes — normalize.
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(value)) {
    const d = new Date(value);
    if (!isNaN(d)) return d.toISOString().slice(0, 19).replace('T', ' ');
  }
  return value;
}

function rowOut(table, row) {
  if (!row) return row;
  const meta = TABLES[table];
  const out = {};
  for (const [k, v] of Object.entries(row)) {
    if (v instanceof Date) {
      out[k] = v.toISOString();
    } else if (meta.json.includes(k) && typeof v === 'string') {
      try { out[k] = JSON.parse(v); } catch { out[k] = v; }
    } else {
      out[k] = v;
    }
  }
  return out;
}

function buildWhere(table, filters, params) {
  if (!filters || !filters.length) return '';
  const clauses = filters.map((f) => {
    switch (f.type) {
      case 'eq':
        if (f.value === null) return `${q(f.column)} IS NULL`;
        params.push(normalizeValue(table, f.column, f.value));
        return `${q(f.column)} = ?`;
      case 'neq':
        params.push(normalizeValue(table, f.column, f.value));
        return `${q(f.column)} <> ?`;
      case 'in': {
        const vals = Array.isArray(f.value) ? f.value : [];
        if (!vals.length) return '1=0';
        vals.forEach((v) => params.push(normalizeValue(table, f.column, v)));
        return `${q(f.column)} IN (${vals.map(() => '?').join(',')})`;
      }
      default:
        throw new Error(`Unsupported filter type: ${f.type}`);
    }
  });
  return ' WHERE ' + clauses.join(' AND ');
}

function parseColumns(columnsStr) {
  if (!columnsStr || columnsStr.trim() === '*') return { cols: [], star: true };
  const cols = columnsStr.split(',').map((x) => x.trim()).filter(Boolean);
  return { cols, star: cols.length === 0 };
}

async function execute(payload) {
  const { table, action } = payload || {};
  if (!TABLES[table]) throw new Error(`Table not allowed: ${table}`);
  const meta = TABLES[table];

  if (action === 'select') {
    const params = [];
    const parsed = parseColumns(payload.columns);

    if (payload.count === 'exact' && payload.head) {
      let sql = `SELECT COUNT(*) AS cnt FROM ${q(table)}`;
      sql += buildWhere(table, payload.filters, params);
      const [rows] = await pool.query(sql, params);
      return { data: null, count: rows[0].cnt };
    }

    const selectList = parsed.star ? '*' : parsed.cols.map(q).join(', ');
    let sql = `SELECT ${selectList} FROM ${q(table)}`;
    sql += buildWhere(table, payload.filters, params);

    if (payload.order && payload.order.column) {
      sql += ` ORDER BY ${q(payload.order.column)} ${payload.order.ascending === false ? 'DESC' : 'ASC'}`;
    }
    if (payload.limit) sql += ` LIMIT ${Number(payload.limit)}`;
    else if (payload.single || payload.maybeSingle) sql += ' LIMIT 2';

    const [rows] = await pool.query(sql, params);
    const data = rows.map((r) => rowOut(table, r));

    if (payload.single || payload.maybeSingle) {
      if (data.length === 0) {
        if (payload.maybeSingle) return { data: null };
        return { error: { code: 'PGRST116', message: 'JSON object requested, multiple (or no) rows returned' } };
      }
      return { data: data[0] };
    }
    return { data };
  }

  if (action === 'insert' || action === 'upsert') {
    const rows = Array.isArray(payload.values) ? payload.values : [payload.values];
    const inserted = [];
    for (const row of rows) {
      const r = { ...row };
      if (meta.pk === 'uuid' && (r.id === undefined || r.id === null || r.id === '')) {
        r.id = crypto.randomUUID();
      }
      const cols = Object.keys(r).filter((k) => r[k] !== undefined);
      const vals = cols.map((c) => normalizeValue(table, c, r[c]));
      let sql = `INSERT INTO ${q(table)} (${cols.map(q).join(',')}) VALUES (${cols.map(() => '?').join(',')})`;
      const params = [...vals];
      if (action === 'upsert') {
        const updatable = cols.filter((c) => c !== 'id' && c !== (payload.onConflict || ''));
        const updates = updatable.length
          ? updatable.map((c) => `${q(c)} = VALUES(${q(c)})`).join(', ')
          : `${q(cols[0])} = VALUES(${q(cols[0])})`;
        sql += ` ON DUPLICATE KEY UPDATE ${updates}`;
      }
      await pool.query(sql, params);
      inserted.push(r);
    }
    return { data: inserted };
  }

  if (action === 'update') {
    const r = { ...payload.values };
    delete r.id;
    const cols = Object.keys(r).filter((k) => r[k] !== undefined);
    if (!cols.length) return { data: [] };
    const params = cols.map((c) => normalizeValue(table, c, r[c]));
    let sql = `UPDATE ${q(table)} SET ${cols.map((c) => `${q(c)} = ?`).join(', ')}`;
    const whereParams = [];
    const where = buildWhere(table, payload.filters, whereParams);
    if (!where) throw new Error('update requires at least one filter');
    sql += where;
    params.push(...whereParams);
    await pool.query(sql, params);
    return { data: [] };
  }

  if (action === 'delete') {
    const params = [];
    const where = buildWhere(table, payload.filters, params);
    if (!where) throw new Error('delete requires at least one filter');
    await pool.query(`DELETE FROM ${q(table)}${where}`, params);
    return { data: [] };
  }

  throw new Error(`Unsupported action: ${action}`);
}

module.exports = { execute, TABLES };
