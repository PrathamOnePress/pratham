/**
 * AdminSidebar Component
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/portfolio", label: "Portfolio" }
];

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-60 border-r border-pr_silver/20 bg-black/40 px-4 py-6 hidden md:block">
      <div className="text-[11px] font-semibold tracking-[0.25em] text-pr_silver uppercase mb-6">
        Admin Panel
      </div>
      <nav className="space-y-1 text-sm">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-xl px-3 py-2 transition ${
                active
                  ? "bg-pr_blue/80 text-white"
                  : "text-pr_silver hover:bg-pr_blue/40 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
