"use client";

import { motion } from "framer-motion";
import { Wifi } from "lucide-react";
import Link from "next/link";

export default function ExperienceOnBoard() {
  return (
    <section className="relative w-full min-h-[85vh] bg-fixed bg-cover bg-center flex items-center justify-center border-b border-primary/10 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562141970-d8687ba85750?q=80&w=2072&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] z-[1]" />
      <motion.div
        className="relative z-10 p-6 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-3xl p-10 md:p-16 text-center shadow-2xl border border-primary/20 bg-background/90 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-8 border border-primary/30">
            <Wifi className="w-8 h-8" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Le Silence est le Nouveau Luxe.
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Wi-Fi à bord, bouteilles d&apos;eau, chargeurs et insonorisation
            totale. Profitez du voyage dans un cocon de sérénité absolue sur
            toute la Riviera.
          </p>
          <Link
            href="tel:0132345465"
            className="inline-block px-8 py-3 bg-primary/20 hover:bg-primary/30 border border-primary/40 text-primary rounded-full font-medium transition-all backdrop-blur-md"
          >
            Réserver ce confort
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
