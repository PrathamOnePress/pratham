import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../../lib/getProfileFromToken';
import { logInfo, logError } from '../../../../lib/logger';
import { checkRate } from '../../_lib/rateLimit';

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rate = checkRate(ip + ':admin_impersonate', 10, 60);
    if (!rate.allowed) return NextResponse.json({error:'Rate limit exceeded'},{status:429});

    const auth = req.headers.get('authorization') || '';
    const token = auth.replace('Bearer ', '');
    if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
    const profile = await getProfileFromToken(token);
    if (!profile || profile.role !== 'admin') return NextResponse.json({error:'Forbidden'},{status:403});
    const { target_id } = await req.json();
    if (!target_id) return NextResponse.json({error:'target_id required'},{status:400});
    const { data, error } = await supabaseAdmin.from('profiles').select('*').eq('id', target_id).single();
    if (error) {
      logError('admin.impersonate', 'lookup failed', { target_id, error: error.message });
      return NextResponse.json({error:error.message},{status:500});
    }
    await supabaseAdmin.from('audit_logs').insert([{ actor_uuid: profile.id, action: 'impersonation_view', target: { target_id }, meta: {} }]);
    logInfo('admin.impersonate', 'impersonation inspected', { actor: profile.id, target: target_id });
    return NextResponse.json({ok:true, profile: data});
  } catch (err) {
    logError('admin.impersonate', String(err));
    return NextResponse.json({error:String(err)},{status:500});
  }
}
