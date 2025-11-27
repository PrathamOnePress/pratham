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
import '../styles/theme.css';

export const metadata = { title: 'PrathamOne Press' };

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en"><body>
      <header className="header"><div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{fontWeight:700}}>PRATHAMONE</div>
        <nav className="nav"><a href="/">Home</a><a href="/releases" style={{marginLeft:16}}>Releases</a><a href="/books" style={{marginLeft:16}}>Books</a><a href="/assets" style={{marginLeft:16}}>Assets</a></nav>
      </div></header>
      <main>{children}</main>
      <footer className="footer">© PrathamOne • AITDL • press.prathamone.com</footer>
    </body></html>
  )
}
