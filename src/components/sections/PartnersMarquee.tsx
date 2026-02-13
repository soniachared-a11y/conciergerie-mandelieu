"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  "HOTEL RITZ",
  "SumUp",
  "AIRFRANCE",
  "AMEX",
  "FOUR SEASONS",
  "MICHELIN",
  "PLAZA ATHÉNÉE",
];

export default function PartnersMarquee() {
  return (
    <section className="py-10 bg-background/80 backdrop-blur-md border-b border-primary/10 overflow-hidden z-20 relative">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <motion.span
          className="text-xs font-semibold tracking-widest text-foreground/60 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Nos Partenaires de Confiance
        </motion.span>
      </div>
      <div className="relative flex overflow-hidden mask-linear-fade">
        <div className="flex items-center gap-16 animate-scroll-infinite whitespace-nowrap px-8">
          {[...PARTNERS, ...PARTNERS].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-xl font-bold text-foreground/80 opacity-70 hover:opacity-100 transition-opacity shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
