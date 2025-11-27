/**
 * ---------------------------------------------------------------
 *  PRATHAMONE OFFICIAL SOURCE CODE FILE
 * ---------------------------------------------------------------
 *  Author      : Jawahar R. Mallah
 *  Company     : AITDL (AI Technology & Development Lab)
 *  Website     : https://press.prathamone.com
 *  Project     : PrathamOne Press • Next.js + Supabase (Fresh)
 *
 *  About Author:
 *  - Codes, writes, publishes, panics, then codes again.
 *
 *  About This File:
 *  - Keep it safe. Be kind to future-you.
 *
 * ---------------------------------------------------------------
 */
export default function Home(){
  return (
    <div className="container">
      <section style={{paddingTop:24}}>
        <h1 style={{fontSize:42, margin:0}}>PrathamOne Press</h1>
        <p style={{marginTop:8, color:'#444'}}>News, media assets, and press resources from AITDL & PrathamOne.</p>
        <div style={{marginTop:18}}>
          <a className="btn-primary" href="/press-kit" style={{marginRight:12}}>Download Press Kit</a>
          <a href="/releases">Latest Releases</a>
        </div>
      </section>
    </div>
  )
}
