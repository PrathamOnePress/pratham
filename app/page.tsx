/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>PrathamOne Press</h1>
        <p className="lead">News, media assets, press releases and resources from AITDL & PrathamOne.</p>
        <div style={{marginTop:18}}>
          <a className="btn" href="/press-kit" style={{marginRight:12}}>Download Press Kit</a>
          <a href="/releases">Latest Releases</a>
        </div>
      </section>

      <section style={{marginTop:28}} className="grid grid-3">
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
