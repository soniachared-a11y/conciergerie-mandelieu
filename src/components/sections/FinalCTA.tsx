"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
          Prêt à Vivre le Voyage Idéal ?
        </h2>
        <p className="text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light">
          Appelez-nous dès maintenant pour un service premium et un prix
          garanti sur toute la Riviera. Votre chauffeur est prêt.
        </p>
        <Link
          href="tel:0132345465"
          className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-background px-10 py-5 rounded-lg text-lg font-bold transition-all shadow-xl shadow-primary/30 transform hover:-translate-y-0.5"
        >
          <span>Réserver mon Expérience Riviera</span>
          <PhoneCall className="w-5 h-5 shrink-0" strokeWidth={1.5} />
        </Link>
      </motion.div>
    </section>
  );
}
