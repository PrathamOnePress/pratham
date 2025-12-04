/**
 * PRATHAMONE OFFICIAL SOURCE FILE (COMPLETE SCAFFOLD)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Project: PrathamOne Press — Complete Dev Scaffold
 */

import '../styles/theme.css';

export const metadata = { title: 'PrathamOne Press' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div style={{fontWeight:700}}>PRATHAMONE</div>
            <nav className="nav">
              <a href="/">Home</a>
              <a href="/releases" style={{marginLeft:16}}>Releases</a>
              <a href="/books" style={{marginLeft:16}}>Books</a>
              <a href="/assets" style={{marginLeft:16}}>Assets</a>
              <a href="/branding" style={{marginLeft:16}}>Branding</a>
              <a href="/admin/dashboard" style={{marginLeft:16}}>Admin</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">© PrathamOne • AITDL • press.prathamone.com</footer>
      </body>
    </html>
  );
}
