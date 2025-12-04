/**
 * Home Page
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-pr_silver/20 bg-gradient-to-b from-pr_dark via-pr_dark to-black/60">
        <div className="container-main flex flex-col gap-10 py-16 md:flex-row md:items-center">
          <div className="flex-1">
            <p className="text-[10px] uppercase tracking-[0.3em] text-pr_silver mb-2">
              PrathamOne Press
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Clarity. Systems.{" "}
              <span className="text-pr_gold">Publishing.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-pr_silver">
              A dual-division publishing ecosystem for authors, schools, and
              modern creators. Structure-driven writing, corporate-grade
              formatting, and imprint-level publishing — powered by PrathamOne.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-pr_gold px-5 py-2 text-xs font-semibold text-black hover:bg-yellow-400 transition"
              >
                Start Your Book
              </Link>
              <Link
                href="/school"
                className="rounded-full border border-pr_silver/40 px-5 py-2 text-xs font-semibold text-pr_silver hover:border-pr_gold hover:text-pr_gold transition"
              >
                School Content System
              </Link>
            </div>
            <div className="mt-6 text-[11px] text-pr_silver/80">
              Trusted across Amazon, Google Play Books, and modern digital
              platforms.
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto h-60 w-full max-w-md rounded-3xl border border-pr_silver/30 bg-gradient-to-br from-pr_blue via-black to-pr_gold/40 p-6">
              <div className="text-xs text-pr_silver mb-2">System Snapshot</div>
              <ul className="space-y-2 text-[11px] text-pr_silver/90">
                <li>• Author Systems — from idea to imprint.</li>
                <li>• School Content Engine — monthly academic workflows.</li>
                <li>• Launch Kits — posters, reels, and SEO-ready listings.</li>
                <li>• Supabase-backed dashboards for admin & clients.</li>
              </ul>
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-pr_silver/30 bg-black/40 p-3 text-[10px] text-pr_silver/80">
                PrathamOne Press is designed as a lean, scalable publishing
                OS — with clarity-first, system-first operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-main py-12">
        <h2 className="text-lg font-semibold">What we build</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4 text-sm">
          {[
            [
              "Writing & Editing Systems",
              "Non-fiction, guides, academic material, and scripts — built on clear templates.",
            ],
            [
              "Publishing Pipelines",
              "Amazon KDP and Google Play Books publishing with metadata and SEO.",
            ],
            [
              "School Content Engine",
              "Notes, workbooks, tests, and revision material on subscription.",
            ],
            [
              "Launch & Maintenance",
              "Launch kits, updates, and long-term book maintenance services.",
            ],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-pr_silver/20 bg-black/40 p-4"
            >
              <div className="text-xs font-semibold text-pr_gold uppercase tracking-wide">
                {title}
              </div>
              <p className="mt-2 text-[11px] text-pr_silver">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
