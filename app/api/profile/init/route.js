import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { id, email, name } = body || {};
    if (!id || !email) return NextResponse.json({error:'id and email required'},{status:400});
    const { data, error } = await supabaseAdmin.from('profiles').insert([{ id, email, full_name: name || null, role: 'author' }]).select().single();
    if (error) {
      // if already exists, return existing
      const existing = await supabaseAdmin.from('profiles').select('*').eq('id', id).single();
      return NextResponse.json(existing.data || {}, {status:200});
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}
