"use client";
export default function ServiceCard({ title, desc, icon }) {
  return (
    <div className="bg-bg-card p-6 rounded-xl border border-border shadow-soft hover:shadow-hard transition-all hover:-translate-y-1">
      <div className="text-brand-primary text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-text-muted mt-2">{desc}</p>
    </div>
  );
}