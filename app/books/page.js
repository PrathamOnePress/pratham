/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/books/page.js
  Description: Books listing page.
*/
import { books } from '../../data/books';
import BookCard from '../../components/BookCard';

export const metadata = { title: 'Catalogue | Prathamone' };

export default function Books() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Catalogue</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    </div>
  );
}
