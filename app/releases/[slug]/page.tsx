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

export default async function Release({ params }: { params: { slug: string } }){
  const { data } = await supabase.from('releases').select('*').eq('slug', params.slug).single();
  const r:any = data || null;
  if(!r) return <div className="container"><p>Release not found.</p></div>;
  return (
    <div className="container">
      <h1 style={{fontSize:36}}>{r.title}</h1>
      <p style={{color:'#777'}}>{r.published_at}</p>
      {r.hero_url && <img src={r.hero_url} alt="" style={{width:'100%', marginTop:18, borderRadius:8}} />}
      <article style={{marginTop:18}} dangerouslySetInnerHTML={{__html: r.content}} />
    </div>
  )
}
