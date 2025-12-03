"use client";
export default function PortfolioCard({ title, category, year }) {
  return (
    <article className="bg-bg-card rounded-lg overflow-hidden border border-border shadow-soft">
      <div className="h-48 bg-gradient-to-br from-slate-800 to-bg-card flex items-end p-4">
        <div>
          <h5 className="text-lg font-semibold">{title}</h5>
          <p className="text-text-muted text-sm">{category} • {year}</p>
        </div>
      </div>
      <div className="p-4">
        <a href="#" className="text-brand-primary">View details</a>
      </div>
    </article>
  );
}