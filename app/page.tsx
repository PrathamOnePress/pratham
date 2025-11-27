/**
 * PRATHAMONE OFFICIAL SOURCE FILE (COMPLETE SCAFFOLD)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Project: PrathamOne Press — Complete Dev Scaffold
 */

export default function Home(){
  return (
    <div className="container debug-border">
      <h1 style={{fontSize:42,margin:0}}>PrathamOne Press</h1>
      <p style={{color:'#555',marginTop:8}}>Official News, Media Assets & Press Resources.</p>
      <div style={{marginTop:20}}>
        <a className="btn-primary" href="/press-kit" style={{marginRight:12}}>Download Press Kit</a>
        <a href="/releases">Latest Releases</a>
      </div>

      <section style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:28}}>
        <div className="card">
          <h3>Latest Book</h3>
          <p className="small">Coder who fears before Ai — preview and assets.</p>
        </div>
        <div className="card">
          <h3>Upcoming Event</h3>
          <p className="small">Launch details & media invite.</p>
        </div>
        <div className="card">
          <h3>Media Contact</h3>
          <p className="small">jawahar.mallah@gmail.com</p>
        </div>
      </section>
    </div>
  );
}
