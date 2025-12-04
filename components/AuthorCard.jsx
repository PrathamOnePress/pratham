/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: components/AuthorCard.jsx
  Description: Author profile card.
*/
export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
      <div className="md:w-1/3 bg-gray-200 flex items-center justify-center min-h-[250px]">
        <span className="text-gray-500 font-medium">Photo Placeholder</span>
      </div>
      <div className="p-8 md:w-2/3">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Founder & Author</div>
        <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">Jawahar R. Mallah</h2>
        <p className="mt-4 text-gray-500">
          Jawahar is a visionary writer and technologist dedicated to exploring the intersection of modern automation and traditional storytelling.
        </p>
        <div className="mt-6">
          <a href="/contact" className="text-primary hover:text-indigo-800 font-medium">Contact Author &rarr;</a>
        </div>
      </div>
    </div>
  );
}
