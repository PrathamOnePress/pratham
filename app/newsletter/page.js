/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/newsletter/page.js
  Description: Newsletter signup page.
*/
import NewsletterForm from '../../components/NewsletterForm';

export const metadata = { title: 'Newsletter | Prathamone' };

export default function Newsletter() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl lg:max-w-7xl">
        <div className="rounded-2xl px-6 py-10 bg-primary shadow-xl text-center">
          <h2 className="text-3xl font-extrabold text-white">Get notified when we publish.</h2>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
