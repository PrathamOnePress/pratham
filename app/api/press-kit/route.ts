/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
import { NextResponse } from 'next/server';
import archiver from 'archiver';
import { supabaseAdmin } from '../../../lib/supabaseServerClient';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const bookId = url.searchParams.get('bookId');

  let assetsQuery = supabaseAdmin.from('assets').select('*');
  if(bookId) assetsQuery = assetsQuery.eq("meta->>bookId", bookId);
  const { data: assets, error } = await assetsQuery;
  if(error) return NextResponse.json({ error: error.message }, { status: 500 });

  const archive = archiver('zip', { zlib: { level: 9 } });
  // create a stream for Response
  const stream = new ReadableStream({
    start(controller) {
      archive.on('data', (chunk) => controller.enqueue(chunk));
      archive.on('end', () => controller.close());
      archive.on('error', () => controller.close());
    }
  });

  // append assets by fetching their URLs with built-in fetch
  for(const a of (assets || [])) {
    try {
      const urlToFetch = a.url.startsWith('/') ? (process.env.NEXT_PUBLIC_SUPABASE_URL || '') + a.url : a.url;
      const res = await fetch(urlToFetch);
      if(!res.ok) continue;
      const buffer = await res.arrayBuffer();
      archive.append(Buffer.from(buffer), { name: a.name || 'asset' });
    } catch(e) {
      // skip on error
    }
  }

  archive.finalize();
  return new Response(stream, {
    headers: { 'Content-Type': 'application/zip', 'Content-Disposition': 'attachment; filename="press-kit.zip"' }
  });
}