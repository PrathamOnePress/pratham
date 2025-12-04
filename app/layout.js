import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = { title: "PrathamOne Starter" };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='p-6'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}