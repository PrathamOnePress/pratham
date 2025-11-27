/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v5 - FULL THEME)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: Full restored theme, runtime-safe API routes, migrations + seed, admin UI, branding.
 */
import '../styles/theme.css';
export const metadata = { title: 'PrathamOne Press' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div className="brand">
              <div className="mark">P</div>
              <div>
                <div>PRATHAMONE</div>
                <div style={{fontSize:12,color:'#777'}}>AI Technology & Development Lab</div>
              </div>
            </div>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/releases">Releases</a>
              <a href="/books">Books</a>
              <a href="/branding">Branding</a>
              <a href="/admin/dashboard">Admin</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">© PrathamOne • AITDL • press.prathamone.com</div>
        </footer>
      </body>
    </html>
  );
}
