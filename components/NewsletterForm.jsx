/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: components/NewsletterForm.jsx
  Description: Client-side newsletter subscription form.
*/
'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); } else { setStatus('error'); }
    } catch (error) { setStatus('error'); }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 sm:flex sm:max-w-md mx-auto">
      <input type="email" required className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-gray-900" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button type="submit" disabled={status === 'submitting'} className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700">
          {status === 'submitting' ? '...' : 'Subscribe'}
        </button>
      </div>
      {status === 'success' && <p className="mt-2 text-green-600 text-sm">Subscribed!</p>}
    </form>
);
}
