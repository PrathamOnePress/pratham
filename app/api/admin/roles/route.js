import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../../../lib/getProfileFromToken';
import { logInfo, logError } from '../../../../../lib/logger';
import { checkRate } from '../../../_lib/rateLimit';

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rate = checkRate(ip + ':admin_roles', 20, 60);
    if (!rate.allowed) return NextResponse.json({error:'Rate limit exceeded'},{status:429});

    const auth = req.headers.get('authorization') || '';
    const token = auth.replace('Bearer ', '');
    if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
    const profile = await getProfileFromToken(token);
    if (!profile || profile.role !== 'admin') return NextResponse.json({error:'Forbidden'},{status:403});
    const { profile_id, role } = await req.json();
    if (!profile_id || !role) return NextResponse.json({error:'missing'}, {status:400});
    const { data, error } = await supabaseAdmin.from('profiles').update({ role }).eq('id', profile_id).select().single();
    if (error) {
      logError('admin.roles', 'update failed', { profile_id, role, error: error.message });
      return NextResponse.json({error:error.message},{status:500});
    }
    await supabaseAdmin.from('audit_logs').insert([{ actor_uuid: profile.id, action: 'change_role', target: { profile_id }, meta: { new_role: role } }]);
    logInfo('admin.roles', 'role changed', { actor: profile.id, profile_id, role });
    return NextResponse.json({ok:true, data});
  } catch (err) {
    logError('admin.roles', String(err));
    return NextResponse.json({error:String(err)},{status:500});
  }
}
