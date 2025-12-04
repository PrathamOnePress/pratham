'use client';
/**
 * ContactForm Component
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

import { useState } from "react";
import { supabase } from "@/lib/supabase-client";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const { error } = await supabase.from("contact_requests").insert({
        name: form.name,
        email: form.email,
        message: form.message,
      });
      if (error) throw error;
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-pr_silver/20 bg-black/40 p-6"
    >
      <div>
        <label className="block text-xs text-pr_silver mb-1">Name</label>
        <input
          required
          className="w-full rounded-xl border border-pr_silver/30 bg-black/60 px-3 py-2 text-sm outline-none focus:border-pr_gold"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-xs text-pr_silver mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full rounded-xl border border-pr_silver/30 bg-black/60 px-3 py-2 text-sm outline-none focus:border-pr_gold"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-xs text-pr_silver mb-1">Message</label>
        <textarea
          required
          rows={4}
          className="w-full rounded-xl border border-pr_silver/30 bg-black/60 px-3 py-2 text-sm outline-none focus:border-pr_gold resize-none"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-pr_gold px-4 py-2 text-xs font-semibold text-black hover:bg-yellow-400 transition disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-xs text-green-400">
          Thank you — your message has been received.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
