
import Link from 'next/link'

export default function Header(){
  return (
    <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-md bg-[#1C2A57]"></div>
          <div>
            <div className="font-semibold text-lg">PrathamOne</div>
            <div className="text-xs text-gray-500">We Build. We Write. We Deliver.</div>
          </div>
        </div>
      </Link>

      <nav className="hidden md:flex gap-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/authors">Author Program</Link>
        <Link href="/contact" className="font-medium text-[#1C2A57]">Contact</Link>
      </nav>
    </header>
  )
}
