// ServiceCard.tsx — PrathamOne UI v2
"use client";

export default function ServiceCard({ title, desc, icon }) {
  return (
    <div className="p-6 bg-blue-950 text-gray-200 rounded-xl border border-blue-800 shadow-md hover:shadow-lg transition-all">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}
