// Premium Nav Component v2
"use client";
import Link from "next/link";
export default function Nav(){
  return (
    <nav className="p-4 bg-blue-900 text-white flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/services">Services</Link>
      <Link href="/portfolio">Books</Link>
      <Link href="/author-program">Author Program</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}