/**
 * Footer Component
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-pr_silver/20 bg-black/40 mt-16">
      <div className="container-main py-10 text-xs text-pr_silver flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="tracking-[0.3em] uppercase text-[10px] text-pr_silver">
            PrathamOne Press
          </div>
          <div className="text-[11px] text-pr_silver/80">
            Publishing Systems &amp; Book Creation • Mumbai, India
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {[
            ["Home", "/"],
            ["Services", "/author-services"],
            ["Portfolio", "/portfolio"],
            ["Author Program", "/author-journey"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-pr_gold transition"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="text-[11px] text-right">
          <div>Email: contact@prathamone.com</div>
          <div>© 2025 PrathamOne Press. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
