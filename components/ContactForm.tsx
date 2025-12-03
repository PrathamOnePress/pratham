// ContactForm.tsx — PrathamOne UI v2
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function submitForm(e) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="p-6 bg-blue-950 text-gray-300 rounded-xl border border-blue-900">
        Thank you! We will contact you soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={submitForm}
      className="p-6 bg-blue-950 text-gray-200 rounded-xl border border-blue-900 shadow-md"
    >
      <label className="block text-sm mb-1">Name</label>
      <input
        required
        value={form.name}
        onChange={(e) => updateField("name", e.target.value)}
        className="w-full mb-4 p-2 rounded bg-blue-900 border border-blue-800 text-white"
      />

      <label className="block text-sm mb-1">Email</label>
      <input
        required
        type="email"
        value={form.email}
        onChange={(e) => updateField("email", e.target.value)}
        className="w-full mb-4 p-2 rounded bg-blue-900 border border-blue-800 text-white"
      />

      <label className="block text-sm mb-1">Message</label>
      <textarea
        required
        value={form.message}
        onChange={(e) => updateField("message", e.target.value)}
        className="w-full mb-4 p-2 rounded bg-blue-900 border border-blue-800 text-white"
        rows={4}
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
      >
        Send Request
      </button>
    </form>
  );
}
