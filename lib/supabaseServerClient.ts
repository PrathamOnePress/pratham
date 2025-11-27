/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v4 - AUTO DB)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: This build includes an auto DB initializer script (scripts/init-db.js).
 * Provide SUPABASE_DB_URL (Postgres connection string) in .env.local and run `node scripts/init-db.js`.
 */
import { createClient } from '@supabase/supabase-js';
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL||'',
  process.env.SUPABASE_SERVICE_ROLE_KEY||'',
  { auth: { persistSession: false } }
);
