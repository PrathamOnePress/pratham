/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
export default function Branding(){
  return (
    <div className="container">
      <h2>Branding & High‑Res Assets</h2>
      <div className="grid grid-3" style={{marginTop:12}}>
        <div className="card"><img src="/branding/prathamone-logo.png" alt="logo" style={{width:'100%'}}/><p className="small">PNG Logo</p></div>
        <div className="card"><img src="/branding/author-highres.jpg" alt="author" style={{width:'100%'}}/><p className="small">Author Photo</p></div>
        <div className="card"><img src="/branding/book-cover.jpg" alt="cover" style={{width:'100%'}}/><p className="small">Book Cover</p></div>
      </div>
    </div>
  );
}
