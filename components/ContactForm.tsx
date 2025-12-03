"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const { error } = await supabase.from("contacts").insert([{ name, email, project }]);
    setSending(false);
    if (!error) {
      setDone(true);
      setName(""); setEmail(""); setProject("");
    } else {
      alert("Error: " + error.message);
    }
  }

  if (done) {
    return <div className="p-6 bg-bg-card rounded">Thanks! We'll reach out shortly.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-bg-card p-6 rounded-lg border border-border">
      <label className="block text-sm">Name</label>
      <input required value={name} onChange={e=>setName(e.target.value)} className="w-full mt-1 mb-3 p-2 rounded border border-border bg-bg-secondary" />
      <label className="block text-sm">Email</label>
      <input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full mt-1 mb-3 p-2 rounded border border-border bg-bg-secondary" />
      <label className="block text-sm">Project</label>
      <textarea required value={project} onChange={e=>setProject(e.target.value)} className="w-full mt-1 mb-3 p-2 rounded border border-border bg-bg-secondary" />
      <button type="submit" disabled={sending} className="bg-brand-primary text-text-primary px-4 py-2 rounded-md">
        {sending ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}