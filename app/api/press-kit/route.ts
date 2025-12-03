/**
 * PRATHAMONE OFFICIAL SOURCE FILE (COMPLETE SCAFFOLD)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Project: PrathamOne Press — Complete Dev Scaffold
 */

import { NextResponse } from 'next/server';
import archiver from 'archiver';
import fetch from 'node-fetch';
import { supabaseAdmin } from '@/lib/supabaseServerClient';

// Returns a streaming zip of assets related to a bookId (or all)
export async function GET(request: Request) {
  const url = new URL(request.url);
  const bookId = url.searchParams.get('bookId');

  // fetch asset list from DB using service role
  let assetsQuery = supabaseAdmin.from('assets').select('*');
  if(bookId) assetsQuery = assetsQuery.eq('meta->>bookId', bookId); // optional meta filter
  const { data: assets, error } = await assetsQuery;
  if(error) return NextResponse.json({ error: error.message }, { status: 500 });

  // create a zip using archiver and fetch asset URLs
  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = new ReadableStream({
    start(controller) {
      archive.on('data', (chunk) => controller.enqueue(chunk));
      archive.on('end', () => controller.close());
    }
  });

  // append assets (by URL) - fetch each and append
  for(const a of (assets || [])) {
    try {
      const urlToFetch = a.url.startsWith('/') ? (process.env.NEXT_PUBLIC_SUPABASE_URL || '') + a.url : a.url;
      const res = await fetch(urlToFetch);
      if(!res.ok) continue;
      const buffer = await res.arrayBuffer();
      archive.append(Buffer.from(buffer), { name: a.name || 'asset' });
    } catch(e) {
      // skip
    }
  }

  archive.finalize();
  return new Response(stream, {
    headers: { 'Content-Type': 'application/zip', 'Content-Disposition': 'attachment; filename="press-kit.zip"' }
  });
}
