import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../../lib/getProfileFromToken';
import { logInfo, logError } from '../../../../lib/logger';
import { checkRate } from '../../_lib/rateLimit';

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const rate = checkRate(ip + ':admin_approve', 30, 60);
    if (!rate.allowed) return NextResponse.json({error:'Rate limit exceeded'},{status:429});

    const auth = req.headers.get('authorization') || '';
    const token = auth.replace('Bearer ', '');
    if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
    const profile = await getProfileFromToken(token);
    if (!profile || profile.role !== 'admin') return NextResponse.json({error:'Forbidden'},{status:403});
    const body = await req.json();
    const { id, action } = body || {};
    if (!id) return NextResponse.json({error:'id required'}, {status:400});
    const { data, error } = await supabaseAdmin.from('projects').update({ status: action }).eq('id', id);
    if (error) {
      logError('admin.approve', 'update failed', { id, action, error: error.message });
      return NextResponse.json({error: error.message}, {status:500});
    }
    // insert audit log
    await supabaseAdmin.from('audit_logs').insert([{ actor_uuid: profile.id, action: 'approve_project', target: { project_id: id }, meta: { action } }]);
    logInfo('admin.approve', 'project approved', { actor: profile.id, project: id, action });
    return NextResponse.json({ok:true, data});
  } catch (err) {
    logError('admin.approve', String(err));
    return NextResponse.json({error: String(err)}, {status:500});
  }
}
