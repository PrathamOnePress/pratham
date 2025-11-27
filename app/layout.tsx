/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v2)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Note: All imports are RELATIVE. node-fetch removed. Uses Next.js built-in fetch.
 */
import '../styles/theme.css';
export const metadata = { title: 'PrathamOne Press' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{padding:'20px 0',borderBottom:'1px solid #eee'}}>
          <div className="container" style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{fontWeight:700}}>PRATHAMONE</div>
            <nav>
              <a href="/">Home</a>
              <a style={{marginLeft:16}} href="/releases">Releases</a>
              <a style={{marginLeft:16}} href="/books">Books</a>
              <a style={{marginLeft:16}} href="/assets">Assets</a>
              <a style={{marginLeft:16}} href="/branding">Branding</a>
              <a style={{marginLeft:16}} href="/admin/dashboard">Admin</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">© PrathamOne • AITDL • press.prathamone.com</footer>
      </body>
    </html>
  );
}
