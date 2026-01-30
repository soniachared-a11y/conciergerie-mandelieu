"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const VIDEO_SRC = "/assets/videos/hero/Tesla_Model_Y_Côte_d_Azur_Sunset.mp4";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover min-w-full min-h-full"
          aria-hidden
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-start">
        <div className="max-w-xl pt-6 flex flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-foreground/80 mb-6"
          >
            Disponible 24h/7
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-light text-foreground tracking-tight leading-[1.15] mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          >
            Riviera Conciergerie&nbsp;: l&apos;excellence de Mandelieu à Monaco.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="font-display text-base lg:text-lg text-foreground/90 font-light leading-relaxed mb-12 max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            <span className="font-light font-display text-primary/95">Véhicules à louer</span> et{" "}
            <span className="font-light font-display text-primary/95">chauffeur privé</span> sur la Côte d&apos;Azur — sérénité et discrétion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <Link
              href="#reservation"
              className="group inline-flex items-center gap-2 text-foreground border border-foreground/40 hover:border-foreground/70 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-colors duration-300"
            >
              <span>Réserver</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
            </Link>
            <span className="text-xs text-foreground/60 tracking-wide">
              Paiement SumUp · Devis instantané
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
