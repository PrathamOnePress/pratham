// PortfolioCard.tsx — PrathamOne UI v2
"use client";

export default function PortfolioCard({ title, category, year }) {
  return (
    <div className="rounded-xl overflow-hidden border border-blue-900 bg-blue-950 shadow-md hover:shadow-xl transition-all">
      <div className="h-40 bg-gradient-to-br from-blue-800 to-blue-950 p-4 flex items-end">
        <div>
          <h4 className="text-lg text-white font-semibold">{title}</h4>
          <p className="text-gray-400 text-sm">{category} • {year}</p>
        </div>
      </div>
      <div className="p-4">
        <a href="#" className="text-blue-400 text-sm">View Details →</a>
      </div>
    </div>
  );
}
