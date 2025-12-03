import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';

export async function GET() {
  const { data, error } = await supabaseAdmin.from('notifications').select('*').limit(50).order('created_at', {ascending:false});
  if (error) return NextResponse.json([]);
  return NextResponse.json(data);
}
