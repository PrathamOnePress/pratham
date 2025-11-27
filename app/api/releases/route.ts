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

export async function GET(request: Request) {
  const url = new URL(request.url);
  const parts = url.pathname.split('/').filter(Boolean);
  const maybeId = parts[parts.length-1];
  if(maybeId && maybeId !== 'releases') {
    const { data } = await supabaseAdmin.from('releases').select('*').eq('id', maybeId).single();
    return NextResponse.json(data);
  }
  const { data } = await supabaseAdmin.from('releases').select('*').order('published_at', { ascending: false });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const payload = { title: body.title, excerpt: body.excerpt || null, slug: (body.title||'').toLowerCase().replace(/[^a-z0-9]+/g,'-') };
  const { data, error } = await supabaseAdmin.from('releases').insert(payload).select().single();
  if(error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
