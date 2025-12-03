/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/layout.js
  Description: Root layout with global styles and header/footer.
*/
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Prathamone Publications | Jawahar R. Mallah',
  description: 'Official website of Prathamone Publications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
