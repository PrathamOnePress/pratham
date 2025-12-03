import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';
import { getProfileFromToken } from '../../../../lib/getProfileFromToken';

const allowedStyles = ['hybrid', 'classic', 'modern'];

export async function POST(req) {
  const auth = req.headers.get('authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const profile = await getProfileFromToken(token);
    if (!profile) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const { id, name, content, public: is_public = true } = body || {};

    // validation
    if (!content || typeof content !== 'object')
      return NextResponse.json({ error: 'Invalid content' }, { status: 400 });

    if (!('pages' in content) || typeof content.pages !== 'number' || content.pages < 1)
      return NextResponse.json({ error: 'pages must be a positive integer' }, { status: 400 });

    if (!('style' in content) || !allowedStyles.includes(content.style))
      return NextResponse.json({ error: 'style must be one of: ' + allowedStyles.join(',') }, { status: 400 });

    // update existing
    if (id) {
      const { data, error } = await supabaseAdmin
        .from('templates')
        .update({ name, content, public: is_public })
        .eq('id', id)
        .select()
        .single();

      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      return NextResponse.json({ ok: true, data });
    }

    // insert new
    const { data, error } = await supabaseAdmin
      .from('templates')
      .insert([{ name, content, public: is_public, owner_uuid: profile.id }])
      .select()
      .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json({ ok: true, data });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
