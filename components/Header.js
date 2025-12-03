
import Link from 'next/link'

const BRAND = {
  blue: '#1C2A57',
  silver: '#C8CCD4',
  charcoal: '#111111'
}

export default function Header(){
  return (
    <header className="border-b" style={{borderColor:'#eef2f6'}}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 no-underline">
            <div className="w-12 h-12 rounded-md flex items-center justify-center" style={{background:BRAND.blue}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <div className="text-lg font-semibold" style={{color:BRAND.charcoal}}>PrathamOne</div>
              <div className="text-xs text-gray-500">We Build. We Write. We Deliver.</div>
            </div>
          </a>
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          <Link href="/"><a className="hover:underline">Home</a></Link>
          <Link href="/books"><a className="hover:underline">Books</a></Link>
          <Link href="/publisher"><a className="hover:underline">Publisher</a></Link>
          <Link href="/about-author"><a className="hover:underline">About</a></Link>
          <Link href="/contact"><a className="font-medium" style={{color:BRAND.blue}}>Contact</a></Link>
        </nav>

        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-full border" style={{borderColor:BRAND.silver}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="#1C2A57" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </header>
  )
}
