/**
 * PRATHAMONE OFFICIAL SOURCE FILE (COMPLETE SCAFFOLD)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Project: PrathamOne Press — Complete Dev Scaffold
 */

import { supabase } from '@/lib/supabaseClient';

export default async function Books(){
  const { data } = await supabase.from('books').select('*').order('created_at',{ascending:false});
  const books = data || [];
  return (
    <div className="container">
      <h1 className="section-title">Books</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:12}}>
        {books.map((b:any)=>(
          <div className="card" key={b.id}>
            <h3>{b.title}</h3>
            <p className="small">{b.subtitle}</p>
            <a className="btn-primary" href={`/api/press-kit?bookId=${b.id}`} style={{marginTop:12,display:'inline-block'}}>Download Press Kit</a>
          </div>
        ))}
      </div>
    </div>
  );
}
