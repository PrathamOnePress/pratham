
import { supabaseAdmin } from '../../../lib/supabaseAdmin'

export async function POST(req){
  try{
    const body = await req.json()
    const { name, email, message } = body
    const { data, error } = await supabaseAdmin.from('contacts').insert([{ name, email, message }])
    if(error) return new Response(JSON.stringify({ success:false, message: error.message }), { status:500 })
    return new Response(JSON.stringify({ success:true, message:'Saved' }), { status:200 })
  }catch(e){
    return new Response(JSON.stringify({ success:false, message: e.message }), { status:500 })
  }
}
