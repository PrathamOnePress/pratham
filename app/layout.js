
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'PrathamOne — We Build. We Write. We Deliver.',
  description: 'PrathamOne — Corporate publishing studio. Fast, precise, trustworthy.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
