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

export default async function Releases(){
  const { data } = await supabase.from('releases').select('*').order('published_at', { ascending: false });
  const releases = data || [];
  return (
    <div className="container">
      <h1 className="section-title">Press Releases</h1>
      <div style={{display:'grid', gap:18, marginTop:18}}>
        {releases.map((r:any)=> (
          <a key={r.id} href={`/releases/${r.slug}`} className="card" style={{display:'block', textDecoration:'none', color:'inherit'}}>
            <h3 style={{marginBottom:6}}>{r.title}</h3>
            <p style={{margin:0}} className="small">{r.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
