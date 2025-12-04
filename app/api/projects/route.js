import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseServer';

export async function GET(request) {
  try {
    const { data, error } = await supabaseAdmin.from('projects').select('*').limit(5);
    if (error) {
      return NextResponse.json([{id:1,title:'Sample Project',status:'draft'}]);
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json([{id:1,title:'Sample Project',status:'draft'}]);
  }
}
