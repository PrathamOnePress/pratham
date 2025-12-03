import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../lib/getProfileFromToken';

export async function GET(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json([], {status:401});
  try {
    const profile = await getProfileFromToken(token);
    if (!profile) return NextResponse.json([], {status:401});
    if (profile.role === 'admin') {
      const { data } = await supabaseAdmin.from('manuscripts').select('*').order('created_at',{ascending:false}).limit(200);
      return NextResponse.json(data);
    } else {
      const { data } = await supabaseAdmin.from('manuscripts').select('*').eq('owner_uuid', profile.id).order('created_at',{ascending:false}).limit(200);
      return NextResponse.json(data);
    }
  } catch (err) {
    return NextResponse.json([], {status:500});
  }
}

export async function POST(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
  try {
    const profile = await getProfileFromToken(token);
    if (!profile) return NextResponse.json({error:'Unauthorized'},{status:401});
    const body = await req.json();
    const { path, book_id } = body || {};
    if (!path) return NextResponse.json({error:'path required'},{status:400});
    const insert = { storage_path: path, status:'uploaded', owner_uuid: profile.id, book_id: book_id || null };
    const { data, error } = await supabaseAdmin.from('manuscripts').insert([insert]).select().single();
    if (error) return NextResponse.json({error:error.message},{status:500});
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}
