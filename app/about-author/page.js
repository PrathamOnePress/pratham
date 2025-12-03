/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/about-author/page.js
  Description: About the author.
*/
import AuthorCard from '../../components/AuthorCard';

export const metadata = { title: 'About Jawahar R. Mallah | Prathamone' };

export default function AboutAuthor() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900">The Author</h1>
        </div>
        <AuthorCard />
      </div>
    </div>
  );
}
