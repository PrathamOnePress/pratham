/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
import { supabase } from '../../lib/supabaseClient';
export default async function Assets(){
  const { data } = await supabase.from('assets').select('*').order('created_at',{ascending:false});
  const assets = data || [];
  return (
    <div className="container">
      <h1 style={{fontSize:32}}>Brand Assets</h1>
      <div style={{display:'grid',gap:12,marginTop:12}}>
        {assets.map((a:any)=>(
          <div className="card" key={a.id}>
            <strong>{a.name}</strong>
            <div style={{marginTop:8}}><a href={a.url} target="_blank" rel="noreferrer">Download</a></div>
          </div>
        ))}
      </div>
    </div>
  );
}