/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v3)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Fully Fixed Version — force-dynamic applied to ALL API routes.
 */

export const dynamic="force-dynamic";
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServerClient';
export async function GET(){
 const {data}=await supabaseAdmin.from('releases').select('*');
 return NextResponse.json(data);
}
