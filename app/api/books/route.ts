/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v4 - AUTO DB)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: This build includes an auto DB initializer script (scripts/init-db.js).
 * Provide SUPABASE_DB_URL (Postgres connection string) in .env.local and run `node scripts/init-db.js`.
 */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const fetchCache = "force-no-store";

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServerClient';

export async function GET() {
  const { data } = await supabaseAdmin.from('books').select('*').order('created_at', { ascending: false });
  return NextResponse.json(data);
}
