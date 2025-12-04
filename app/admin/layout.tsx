/**
 * Admin Layout
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

import "@/app/globals.css";
import { AdminSidebar } from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-pr_dark text-white flex">
      <AdminSidebar />
      <main className="flex-1">
        <div className="border-b border-pr_silver/20 bg-black/60 px-6 py-4">
          <div className="text-xs tracking-[0.25em] text-pr_silver uppercase">
            PrathamOne Admin
          </div>
          <div className="text-sm text-pr_silver/80">
            Internal dashboard for leads, projects, and portfolio.
          </div>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
