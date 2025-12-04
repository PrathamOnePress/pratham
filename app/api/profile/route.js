import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../lib/getProfileFromToken';

export async function GET(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
  try {
    const profile = await getProfileFromToken(token);
    if (!profile) return NextResponse.json({error:'Not found'},{status:404});
    return NextResponse.json(profile);
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}

export async function PATCH(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
  try {
    const profile = await getProfileFromToken(token);
    if (!profile) return NextResponse.json({error:'Not found'},{status:404});
    const body = await req.json();
    const updates = {};
    if (body.full_name) updates.full_name = body.full_name;
    if (body.email) updates.email = body.email;
    const { data, error } = await supabaseAdmin.from('profiles').update(updates).eq('id', profile.id).select().single();
    if (error) return NextResponse.json({error:error.message},{status:500});
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}
