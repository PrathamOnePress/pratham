import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';
import { verifySupabaseJwt } from '../../../../lib/jwtVerify';

export async function POST(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
  try {
    const payload = await verifySupabaseJwt(token);
    const { bucket='manuscripts', prefix='' } = await req.json();
    // only allow owners or admin - listing is admin-only for now
    if (payload?.role !== 'admin') return NextResponse.json({error:'Forbidden'},{status:403});
    const { data, error } = await supabaseAdmin.storage.from(bucket).list(prefix, { limit:100 });
    if (error) return NextResponse.json({error:error.message},{status:500});
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}
