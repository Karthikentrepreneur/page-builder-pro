// supabase-js compatible shim over the MySQL backend (POST /api/db).
// No callsite edits required: implements the query-builder / auth / storage
// surface actually used in this codebase.
import { ADMIN_API_KEY } from '@/lib/adminKey';

const ADMIN_EMAIL = 'admin@orangeot.com';
const ADMIN_PASSWORD = 'Admin@OOT';
const SESSION_KEY = 'orangeot-auth-session';

type Filter = { type: string; column?: string; value?: unknown; op?: string };

async function callDb(payload: Record<string, unknown>) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (payload.action && payload.action !== 'select') headers['x-admin-key'] = ADMIN_API_KEY;
  try {
    const res = await fetch('/api/db', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      cache: 'no-store',
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok && !body.error) {
      if (res.status === 405) {
        return {
          data: null,
          error: {
            message: 'API error 405 (Method Not Allowed): The request to /api/db reached a static web server instead of the Node.js API. Please verify the Node server is running and /api reverse proxy is configured.',
          },
          count: null,
        };
      }
      return { data: null, error: { message: `API error ${res.status}` }, count: null };
    }
    return { data: body.data ?? null, error: body.error ?? null, count: body.count ?? null };
  } catch (err: any) {
    return { data: null, error: { message: err?.message || 'Network error' }, count: null };
  }
}

class QueryBuilder {
  private payload: Record<string, unknown>;
  private filters: Filter[] = [];

  constructor(table: string) {
    this.payload = { table };
  }

  select(columns = '*', opts?: { count?: string; head?: boolean }) {
    if (!this.payload.action) this.payload.action = 'select';
    if (this.payload.action === 'select') {
      this.payload.columns = columns;
      if (opts?.count) this.payload.count = opts.count;
      if (opts?.head) this.payload.head = true;
    }
    return this;
  }

  insert(values: unknown) {
    this.payload.action = 'insert';
    this.payload.values = values;
    return this;
  }

  update(values: unknown) {
    this.payload.action = 'update';
    this.payload.values = values;
    return this;
  }

  delete() {
    this.payload.action = 'delete';
    return this;
  }

  eq(column: string, value: unknown) { this.filters.push({ type: 'eq', column, value }); return this; }
  neq(column: string, value: unknown) { this.filters.push({ type: 'neq', column, value }); return this; }
  in(column: string, value: unknown[]) { this.filters.push({ type: 'in', column, value }); return this; }

  order(column: string, opts?: { ascending?: boolean }) {
    this.payload.order = { column, ascending: opts?.ascending !== false };
    return this;
  }

  limit(n: number) { this.payload.limit = n; return this; }
  single() { this.payload.single = true; return this; }
  maybeSingle() { this.payload.maybeSingle = true; return this; }

  private async run() {
    if (!this.payload.action) this.payload.action = 'select';
    return callDb({ ...this.payload, filters: this.filters });
  }

  then(onfulfilled?: (v: any) => any, onrejected?: (e: any) => any) {
    return this.run().then(onfulfilled, onrejected);
  }
  catch(onrejected?: (e: any) => any) { return this.run().catch(onrejected); }
  finally(onfinally?: () => void) { return this.run().finally(onfinally); }
}

// ---------------- auth (local mock — single hardcoded admin account) ----------------

type AuthUser = { id: string; email: string };
type AuthSession = { user: AuthUser; access_token: string };
type AuthCallback = (event: string, session: AuthSession | null) => void;

const authListeners = new Set<AuthCallback>();

function readSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as AuthSession) : null;
  } catch {
    return null;
  }
}

function writeSession(session: AuthSession | null, event: string) {
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(SESSION_KEY);
  authListeners.forEach((cb) => {
    try { cb(event, session); } catch { /* listener errors are not ours */ }
  });
}

const auth = {
  async getSession() {
    return { data: { session: readSession() }, error: null };
  },

  async getUser() {
    const s = readSession();
    return { data: { user: s?.user ?? null }, error: null };
  },

  onAuthStateChange(callback: AuthCallback) {
    authListeners.add(callback);
    // Fire asynchronously with the current state, like supabase-js does.
    setTimeout(() => callback('INITIAL_SESSION', readSession()), 0);
    return {
      data: {
        subscription: { unsubscribe: () => authListeners.delete(callback) },
      },
    };
  },

  async signInWithPassword({ email, password }: { email: string; password: string }) {
    if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const session: AuthSession = {
        user: { id: 'admin-orangeot', email: ADMIN_EMAIL },
        access_token: 'local-admin',
      };
      writeSession(session, 'SIGNED_IN');
      return { data: { session, user: session.user }, error: null };
    }
    return { data: { session: null, user: null }, error: { message: 'Invalid login credentials' } };
  },

  async signOut() {
    writeSession(null, 'SIGNED_OUT');
    return { error: null };
  },
};

// ---------------- storage (files stored under the API's /storage) ----------------

const storage = {
  from(bucket: string) {
    return {
      async upload(path: string, file: File | Blob, _opts?: unknown) {
        const form = new FormData();
        form.append('bucket', bucket);
        form.append('path', path);
        form.append('file', file);
        const res = await fetch('/api/upload', { method: 'POST', headers: { 'x-admin-key': ADMIN_API_KEY }, body: form });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) return { data: null, error: body.error || { message: `Upload failed (${res.status})` } };
        return { data: body.data, error: null };
      },
      getPublicUrl(path: string) {
        return { data: { publicUrl: `/storage/${bucket}/${path}` } };
      },
      async remove(paths: string[]) {
        const res = await fetch('/api/storage-remove', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_API_KEY },
          body: JSON.stringify({ bucket, paths }),
        });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) return { data: null, error: body.error || { message: 'Remove failed' } };
        return { data: body.data, error: null };
      },
    };
  },
};

// Typed as `any` so callsites written against the real supabase-js types
// (User/Session imports, generated Database generics) keep compiling.
export const supabase: any = {
  from: (table: string) => new QueryBuilder(table),
  auth,
  storage,
};
