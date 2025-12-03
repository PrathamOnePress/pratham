/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  Company: Prathamone
  Email: jawahar.mallah@gmail.com
  File: components/Header.jsx
  Description: Site header with navigation.
*/
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">Prathamone</Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md font-medium">Home</Link>
            <Link href="/about-author" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md font-medium">Author</Link>
            <Link href="/publisher" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md font-medium">Publisher</Link>
            <Link href="/books" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md font-medium">Books</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md font-medium">Contact</Link>
          </nav>
          <div className="md:hidden">
            <Link href="/books" className="text-primary font-medium">Menu</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
