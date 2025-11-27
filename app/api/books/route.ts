/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServerClient';

export async function GET() {
  const { data } = await supabaseAdmin.from('books').select('*').order('created_at',{ascending:false});
  return NextResponse.json(data);
}
