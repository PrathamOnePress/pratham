/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
import { supabase } from '../../../lib/supabaseClient';
export default async function Release({ params }: { params:{ slug:string } }){
  const { data } = await supabase.from('releases').select('*').eq('slug',params.slug).single();
  if(!data) return <div className="container"><p>Not found.</p></div>;
  return (
    <div className="container">
      <h1 style={{fontSize:36}}>{data.title}</h1>
      <p style={{color:'#777'}}>{data.published_at}</p>
      {data.hero_url && <img src={data.hero_url} style={{width:'100%',marginTop:20,borderRadius:8}} />}
      <article style={{marginTop:20}} dangerouslySetInnerHTML={{__html:data.content}} />
    </div>
  );
}