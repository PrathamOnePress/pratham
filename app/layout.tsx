"use client";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "@/components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <AnimatePresence mode="wait">
          <motion.div
            key={typeof window !== "undefined" ? window.location.pathname : "root"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>

        <a
          href="/author-program"
          className="fixed bottom-6 right-6 bg-brand-primary text-white px-5 py-3 rounded-full shadow-hard hover:scale-105 transition"
        >
          Start Your Book →
        </a>
      </body>
    </html>
  );
}