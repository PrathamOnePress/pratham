import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../lib/getProfileFromToken';

export async function GET(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json([], {status:401});
  try {
    const profile = await getProfileFromToken(token);
    if (!profile) return NextResponse.json([], {status:401});
    if (profile.role === 'admin') {
      const { data } = await supabaseAdmin.from('books').select('*').order('created_at',{ascending:false}).limit(200);
      return NextResponse.json(data);
    } else {
      const { data } = await supabaseAdmin.from('books').select('*').eq('owner_uuid', profile.id).order('created_at',{ascending:false}).limit(200);
      return NextResponse.json(data);
    }
  } catch (err) {
    return NextResponse.json([], {status:500});
  }
}

export async function POST(req) {
  try {
    const auth = req.headers.get('authorization') || '';
    const token = auth.replace('Bearer ', '');
    if (!token) return NextResponse.json({error:'Unauthorized'},{status:401});
    const profile = await getProfileFromToken(token);
    if (!profile) return NextResponse.json({error:'Unauthorized'},{status:401});
    const body = await req.json();
    const title = body.title || 'Untitled';
    const { data: book, error: be } = await supabaseAdmin.from('books').insert([{ title, status:'draft', owner_uuid: profile.id }]).select().single();
    if (be) return NextResponse.json({error:be.message},{status:500});
    // create project linked to book
    const { data: proj, error: pe } = await supabaseAdmin.from('projects').insert([{ title: 'Project for ' + title, owner_uuid: profile.id, type: 'book', payload: jsonb_build_object('book_id', book.id) }]).select().single().catch(()=>({data:null, error:null}));
    // Note: if RPC jsonb_build_object not allowed via admin client, we insert plain payload
    if (!proj) {
      await supabaseAdmin.from('projects').insert([{ title: 'Project for ' + title, owner_uuid: profile.id, type: 'book', payload: { book_id: book.id } }]);
    }
    return NextResponse.json(book);
  } catch (err) {
    return NextResponse.json({error:String(err)},{status:500});
  }
}
