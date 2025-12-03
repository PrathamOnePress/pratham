import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../../lib/getProfileFromToken';

export async function GET(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
  try {
    const profile = await getProfileFromToken(token);
    if (!profile) return NextResponse.json({error:'Unauthorized'},{status:401});
    const { data } = await supabaseAdmin.from('manuscripts').select('id,filename,storage_path,created_at,book_id').eq('owner_uuid', profile.id).order('created_at',{ascending:false}).limit(200);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}
