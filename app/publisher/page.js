/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/publisher/page.js
  Description: Publisher page.
*/
export const metadata = { title: 'About the Publisher | Prathamone' };

export default function Publisher() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">About Prathamone</h2>
        <p className="mt-4 text-lg text-gray-500">Tech × Human Writing</p>
        <p className="mt-5 text-base text-gray-500">
          Our mission is to publish books that bridge the gap between complex technology and human understanding.
        </p>
      </div>
    </div>
  );
}
