import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { bucket='manuscripts', path } = body || {};
    if (!path) return NextResponse.json({error:'path required'}, {status:400});
    // Using admin client to create presigned URL
    const { data, error } = await supabaseAdmin.storage.from(bucket).createSignedUploadUrl(path, 3600);
    if (error) return NextResponse.json({error: error.message}, {status:500});
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({error: String(err)}, {status:500});
  }
}
