import './globals.css';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';

export const metadata = { title: 'PrathamOne' };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Nav />
        <div className='container mx-auto p-4 flex gap-4'>
          <Sidebar />
          <main style={{flex:1}}>{children}</main>
        </div>
      </body>
    </html>
  );
}
