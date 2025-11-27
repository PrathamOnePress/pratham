/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
import { supabase } from '../../lib/supabaseClient';
export default async function Releases(){
  const { data } = await supabase.from('releases').select('*').order('published_at',{ascending:false});
  const list = data || [];
  return (
    <div className="container">
      <h2>Press Releases</h2>
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
