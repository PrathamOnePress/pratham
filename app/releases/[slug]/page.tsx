/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
import { supabase } from '../../../lib/supabaseClient';
export default async function Release({ params }: { params:{ slug:string } }){
  const { data } = await supabase.from('releases').select('*').eq('slug',params.slug).single();
  if(!data) return <div className="container"><p>Not found.</p></div>;
  return (
    <div className="container">
      <h1>{data.title}</h1>
      <p className="small">{data.published_at}</p>
      {data.hero_url && <img src={data.hero_url} style={{width:'100%',marginTop:20,borderRadius:8}} />}
      <article dangerouslySetInnerHTML={{__html:data.content}} style={{marginTop:20}} />
    </div>
  );
}
