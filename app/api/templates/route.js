import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';

export async function GET() {
  const { data, error } = await supabaseAdmin.from('templates').select('*').limit(50);
  if (error) return NextResponse.json([]);
  return NextResponse.json(data);
}
