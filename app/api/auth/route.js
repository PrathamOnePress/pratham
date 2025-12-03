import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';

export async function GET(request) {
  return NextResponse.json({ok:true, message:'Auth route active. Use Supabase for auth.'});
}
