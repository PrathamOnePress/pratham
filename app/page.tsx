/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v4 - AUTO DB)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: This build includes an auto DB initializer script (scripts/init-db.js).
 * Provide SUPABASE_DB_URL (Postgres connection string) in .env.local and run `node scripts/init-db.js`.
 */
export default function Home(){ return (<div className="container"><h1>PrathamOne Press — Stable v4</h1><p>Use `npm run init-db` after filling .env.local to create DB automatically.</p></div>); }
