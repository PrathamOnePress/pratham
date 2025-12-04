'use client';
/**
 * Navbar Component
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/author-services", label: "Author Services" },
  { href: "/school", label: "School/Coaching" },
  { href: "/launch-system", label: "Launch System" },
  { href: "/author-journey", label: "Author Journey" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-pr_silver/20 bg-pr_dark/80 backdrop-blur">
      <div className="container-main flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-pr_gold to-pr_silver" />
          <div className="leading-tight">
            <div className="text-xs tracking-[0.3em] text-pr_silver">
              PRATHAMONE
            </div>
            <div className="text-sm font-semibold text-white">
              PRESS
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-pr_gold ${
                pathname === item.href ? "text-pr_gold" : "text-pr_silver"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-pr_gold px-4 py-2 text-xs font-semibold text-black hover:bg-yellow-400 transition"
          >
            Start Your Book
          </Link>
        </nav>

        <button
          className="md:hidden rounded-full border border-pr_silver/40 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="h-0.5 w-5 bg-pr_silver mb-1" />
          <div className="h-0.5 w-5 bg-pr_silver mb-1" />
          <div className="h-0.5 w-5 bg-pr_silver" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-pr_silver/20 bg-pr_dark">
          <nav className="container-main flex flex-col gap-2 py-4 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition hover:text-pr_gold ${
                  pathname === item.href ? "text-pr_gold" : "text-pr_silver"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-pr_gold px-4 py-2 text-xs font-semibold text-black text-center hover:bg-yellow-400 transition"
            >
              Start Your Book
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
