/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  Company: Prathamone
  Email: jawahar.mallah@gmail.com
  File: components/Footer.jsx
  Description: Site footer.
*/
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Prathamone Publications</h3>
            <p className="text-gray-400 text-sm">Bridging the gap between technology and human storytelling.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/books" className="hover:text-white">Book Catalogue</Link></li>
              <li><Link href="/newsletter" className="hover:text-white">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <p className="text-gray-400 text-sm mb-2">jawahar.mallah@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Prathamone Publications — Official Publishing Imprint of Author Jawahar R. Mallah
          </p>
        </div>
      </div>
    </footer>
  );
}
