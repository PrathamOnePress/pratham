/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
import { supabase } from '../../lib/supabaseClient';
export default async function Releases(){
  const { data } = await supabase.from('releases').select('*').order('published_at',{ascending:false});
  const list = data || [];
  return (
    <div className="container">
      <h1 style={{fontSize:32}}>Press Releases</h1>
      <div style={{display:'grid',gap:16,marginTop:12}}>
        {list.map((r:any)=>(
          <a key={r.id} href={`/releases/${r.slug}`} className="card" style={{textDecoration:'none',color:'inherit'}}>
            <h3>{r.title}</h3>
            <p className="small">{r.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  );
}