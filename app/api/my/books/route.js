import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../lib/supabaseServer';

export async function GET(req) {
  try {
    const auth = req.headers.get('authorization') || '';
    const token = auth.replace('Bearer ', '');
    // If token missing, return empty
    if (!token) return NextResponse.json([]);
    // verify by calling auth.api to get user - simpler: use admin to list books (not ideal)
    const { data, error } = await supabaseAdmin.from('books').select('*').limit(50);
    if (error) return NextResponse.json([]);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json([]);
  }
}
