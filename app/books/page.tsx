/**
 * ---------------------------------------------------------------
 *  PRATHAMONE OFFICIAL SOURCE CODE FILE
 * ---------------------------------------------------------------
 *  Author      : Jawahar R. Mallah
 *  Company     : AITDL (AI Technology & Development Lab)
 *  Website     : https://press.prathamone.com
 *  Project     : PrathamOne Press • Next.js + Supabase (Fresh)
 *
 *  About Author:
 *  - Codes, writes, publishes, panics, then codes again.
 *
 *  About This File:
 *  - Keep it safe. Be kind to future-you.
 *
 * ---------------------------------------------------------------
 */
import { supabase } from '@/lib/supabaseClient';

export default async function Books(){
  const { data } = await supabase.from('books').select('*').order('created_at', {ascending:false});
  const books = data || [];
  return (
    <div className="container">
      <h1 className="section-title">Books</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:18, marginTop:18}}>
        {books.map((b:any)=>(
          <div key={b.id} className="card">
            <h3>{b.title}</h3>
            <p className="small">{b.subtitle}</p>
            <a href="#" className="btn-primary" style={{marginTop:12, display:'inline-block'}}>Download Press Kit</a>
          </div>
        ))}
      </div>
    </div>
  )
}
