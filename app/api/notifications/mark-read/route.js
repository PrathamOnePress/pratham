import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';
import { verifySupabaseJwt } from '../../../../lib/jwtVerify';

export async function POST(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
  try {
    const payload = await verifySupabaseJwt(token);
    const { id } = await req.json();
    if (!id) return NextResponse.json({error:'id required'},{status:400});
    const { data, error } = await supabaseAdmin.from('notifications').update({read:true}).eq('id', id).eq('user_uuid', payload.sub);
    if (error) return NextResponse.json({error:error.message},{status:500});
    return NextResponse.json({ok:true, data});
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}
