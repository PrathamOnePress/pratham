import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../../lib/getProfileFromToken';
import { logInfo, logError } from '../../../../lib/logger';
import { checkRate } from '../../../_lib/rateLimit';

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  const rate = checkRate(ip + ':storage_delete', 20, 60);
  if (!rate.allowed) return NextResponse.json({error:'Rate limit exceeded'},{status:429});

  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
  try {
    const profile = await getProfileFromToken(token);
    if (!profile || profile.role !== 'admin') return NextResponse.json({error:'Forbidden'},{status:403});
    const { bucket='manuscripts', path } = await req.json();
    if (!path) return NextResponse.json({error:'path required'},{status:400});
    const { data, error } = await supabaseAdmin.storage.from(bucket).remove([path]);
    if (error) {
      logError('storage.delete', 'remove failed', { bucket, path, error: error.message });
      return NextResponse.json({error:error.message},{status:500});
    }
    await supabaseAdmin.from('audit_logs').insert([{ actor_uuid: profile.id, action: 'delete_storage', target: { bucket, path }, meta: {} }]);
    logInfo('storage.delete', 'file removed', { actor: profile.id, bucket, path });
    return NextResponse.json({ok:true, data});
  } catch (err) {
    logError('storage.delete', String(err));
    return NextResponse.json({error:String(err)},{status:500});
  }
}
