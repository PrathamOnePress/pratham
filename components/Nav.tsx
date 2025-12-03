"use client";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

export default function Nav() {
  const { theme, setTheme } = useTheme();

  const links = [
    { name: "Home", href: "/" },
    { name: "Releases", href: "/releases" },
    { name: "Books", href: "/portfolio" },
    { name: "Assets", href: "/assets" },
    { name: "Branding", href: "/branding" },
    { name: "Admin", href: "/admin" },
  ];

  return (
    <header className="backdrop-blur bg-bg-primary/80 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-wide">
          PRATHAMONE
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              className="relative group"
            >
              {l.name}
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full transition-all h-[2px] bg-brand-primary"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setTheme(theme === "deep-blue-silver" ? "minimal-grey" : "deep-blue-silver")
            }
            className="px-3 py-2 text-xs border border-border rounded-md hover:bg-bg-secondary"
          >
            Theme
          </button>
          <Link href="/dashboard" className="px-3 py-2 bg-brand-primary text-text-primary rounded-md text-sm">
            Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
}