import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { project_id, user_uuid } = body || {};
    if (!project_id || !user_uuid) return NextResponse.json({error:'missing'}, {status:400});
    const cert = { project_id, owner_uuid: user_uuid, data: { issued:'now' } };
    const { data, error } = await supabaseAdmin.from('certificates').insert([cert]).select().single();
    if (error) return NextResponse.json({error:error.message},{status:500});
    return NextResponse.json({ok:true, data});
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}
