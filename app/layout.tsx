/**
 * PRATHAMONE OFFICIAL SOURCE FILE (STABLE v4 - AUTO DB)
 * Author: Jawahar R. Mallah
 * Website: https://press.prathamone.com
 * Notes: This build includes an auto DB initializer script (scripts/init-db.js).
 * Provide SUPABASE_DB_URL (Postgres connection string) in .env.local and run `node scripts/init-db.js`.
 */
import '../styles/theme.css';
export const metadata = { title: 'PrathamOne Press' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header"><div className="container" style={{display:'flex',justifyContent:'space-between'}}><div style={{fontWeight:700}}>PRATHAMONE</div></div></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
