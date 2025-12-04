/**
 * Root Layout
 * Project: PrathamOne Website
 * Company: Prathamone
 * Author: Jawahar R. Mallah
 */

import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "PrathamOne Press — Publishing Systems & Book Creation",
  description: "PrathamOne Press builds structured publishing systems for authors, educators, and businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
