/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
export default function Branding(){ return (
  <div className="container">
    <h1 style={{fontSize:28}}>Branding & High‑Res Assets</h1>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:12}}>
      <div className="card"><img src="/branding/prathamone-logo.png" alt="logo" style={{width:'100%'}} /><p className="small">PNG Logo</p></div>
      <div className="card"><img src="/branding/author-highres.jpg" alt="author" style={{width:'100%'}} /><p className="small">Author Photo</p></div>
      <div className="card"><img src="/branding/book-cover.jpg" alt="cover" style={{width:'100%'}} /><p className="small">Book Cover</p></div>
    </div>
  </div>
)}