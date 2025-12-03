/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: components/BookCard.jsx
  Description: Card for displaying a book in the catalogue.
*/
import Link from 'next/link';

export default function BookCard({ book }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className={`h-48 w-full ${book.coverColor} flex items-center justify-center text-white text-xl font-bold p-4 text-center`}>
        {book.title}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{book.title}</h3>
        <p className="text-sm text-indigo-600 mb-2">{book.author}</p>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{book.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">{book.price}</span>
          <Link href={`/books/${book.id}`} className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-indigo-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
