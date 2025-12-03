/**
 * PRATHAMONE OFFICIAL SOURCE FILE (COMPLETE SCAFFOLD)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Project: PrathamOne Press — Complete Dev Scaffold
 */

import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseServerClient';

export async function GET() {
  const { data } = await supabaseAdmin.from('books').select('*').order('created_at',{ascending:false});
  return NextResponse.json(data);
}
