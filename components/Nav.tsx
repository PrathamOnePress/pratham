// Nav component
"use client";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";
export default function Nav() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="w-full bg-bg-primary/95 text-text-primary shadow-soft">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">PrathamOne Press</Link>
        <nav className="hidden md:flex gap-4">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Books</Link>
          <Link href="/author-program">Author Program</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button 
          onClick={()=>setTheme(theme==="deep-blue-silver"?"minimal-grey":"deep-blue-silver")}
          className="px-3 py-1 border border-border rounded"
        >
          Theme
        </button>
      </div>
    </header>
  );
}