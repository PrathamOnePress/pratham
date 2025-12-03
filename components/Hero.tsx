"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-bg-primary text-text-primary py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/12 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Publishing Made <span className="text-brand-primary">Precise.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-text-secondary max-w-xl"
        >
          PrathamOne Press builds world-class books & publishing systems with premium design and intelligent workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <a href="/author-program" className="px-6 py-3 rounded-md bg-brand-primary shadow-soft">
            Start Your Book
          </a>
          <a href="/services" className="px-6 py-3 rounded-md border border-border">
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
}