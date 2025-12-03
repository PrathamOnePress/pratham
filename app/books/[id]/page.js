/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/books/[id]/page.js
  Description: Book detail page (dynamic route).
*/
import { books } from '../../../data/books';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BookDetail({ params }) {
  const book = books.find(b => b.id === params.id);
  if (!book) notFound();

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className={`w-full h-96 rounded-lg ${book.coverColor} flex items-center justify-center text-white text-4xl font-bold`}>
           {book.title}
        </div>
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold text-gray-900">{book.title}</h1>
          <p className="text-3xl text-gray-900 mt-3">{book.price}</p>
          <p className="text-base text-gray-700 mt-6">{book.description}</p>
          <div className="mt-10">
            <Link href="/contact" className="w-full bg-primary border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700">Inquire to Buy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
