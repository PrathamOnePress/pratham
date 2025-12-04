/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/page.js
  Description: Home page.
*/
import Link from 'next/link';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

export default function Home() {
  const featuredBook = books[0];
  return (
    <div className="bg-white">
      <div className="relative bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Stories that inspire</span>{' '}
                  <span className="block text-indigo-200">the future.</span>
                </h1>
                <p className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Prathamone Publications is the official imprint of Jawahar R. Mallah.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/books" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg">Browse Books</Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="lg:text-center mb-10">
                <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Featured</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900">Latest from Prathamone</p>
            </div>
            <div className="max-w-md mx-auto">
                <BookCard book={featuredBook} />
            </div>
        </div>
      </div>
    </div>
);
}
