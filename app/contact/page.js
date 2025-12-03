/*
  Project: Prathamone Publications
  Author: Jawahar R. Mallah
  File: app/contact/page.js
  Description: Contact page with client form.
*/
'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) { setStatus('success'); setFormData({ name: '', email: '', message: '' }); } else { setStatus('error'); }
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Contact Us</h2>
        <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 gap-y-6">
          <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="py-3 px-4 block w-full border border-gray-300 rounded-md" />
          <input type="email" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="py-3 px-4 block w-full border border-gray-300 rounded-md" />
          <textarea rows="4" placeholder="Message" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="py-3 px-4 block w-full border border-gray-300 rounded-md"></textarea>
          <button type="submit" disabled={status === 'submitting'} className="w-full py-3 border border-transparent rounded-md text-white bg-primary hover:bg-indigo-700">Send Message</button>
        </form>
        {status === 'success' && <p className="mt-4 text-green-600 text-center">Message sent!</p>}
      </div>
    </div>
  );
}
