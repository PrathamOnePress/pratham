/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
export default async function Books(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : ''}/api/books`, { cache: 'no-store' });
  const books = await res.json() || [];
  return (
    <div className="container">
      <h2>Books</h2>
      <div className="grid grid-3" style={{marginTop:12}}>
        {books.map((b:any)=>(
          <div className="card" key={b.id}>
            <h3>{b.title}</h3>
            <p className="small">{b.subtitle}</p>
            <a className="btn" href={`/api/press-kit?bookId=${b.id}`} style={{marginTop:12,display:'inline-block'}}>Download Press Kit</a>
          </div>
        ))}
      </div>
    </div>
  );
}
