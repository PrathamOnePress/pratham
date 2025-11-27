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

export default async function Assets(){
  const { data } = await supabase.from('assets').select('*').order('created_at', {ascending:false});
  const assets = data || [];
  return (
    <div className="container">
      <h1 className="section-title">Brand Assets</h1>
      <div style={{display:'grid', gap:12, marginTop:12}}>
        {assets.map((a:any)=>(
          <div key={a.id} className="card">
            <strong>{a.name}</strong>
            <div style={{marginTop:8}}><a href={a.url} target="_blank" rel="noreferrer">Download</a></div>
          </div>
        ))}
      </div>
    </div>
  )
}
