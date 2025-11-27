/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
export default async function Books(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL ? process.env.NEXT_PUBLIC_VERCEL_URL : ''}/api/books`, { cache: 'no-store' });
  const books = await res.json() || [];
  return (
    <div className="container">
      <h1 style={{fontSize:32}}>Books</h1>
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