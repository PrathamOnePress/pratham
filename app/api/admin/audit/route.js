import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../../../lib/getProfileFromToken';

export async function GET(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
  const profile = await getProfileFromToken(token);
  if (!profile || profile.role !== 'admin') return NextResponse.json({error:'Forbidden'},{status:403});
  const { data, error } = await supabaseAdmin.from('audit_logs').select('*').order('created_at',{ascending:false}).limit(200);
  if (error) return NextResponse.json({error:error.message},{status:500});
  return NextResponse.json(data);
}
