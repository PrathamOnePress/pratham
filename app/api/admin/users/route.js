import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../../../lib/supabaseServer';

export async function GET(req) {
  // return list of users from auth.users via supabase admin
  try {
    const { data, error } = await supabaseAdmin.rpc('list_users') .catch(()=>({data:null,error:'rpc not available'}));
    // If rpc not available, fallback to empty
    return NextResponse.json({ok:true, data: data || []});
  } catch (err) {
    return NextResponse.json({ok:false, error: String(err)});
  }
}
