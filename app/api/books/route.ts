/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
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
