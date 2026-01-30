"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:pl-4 lg:pr-12 w-full flex justify-start">
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
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link
              href="#reservation"
              className="group inline-flex items-center gap-2.5 bg-foreground/10 hover:bg-foreground/20 border border-foreground/40 hover:border-foreground/60 text-foreground px-6 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-300"
            >
              <span>Découvrir</span>
              <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
            </Link>
            <span className="text-xs text-primary/90 tracking-wide">
              Paiement SumUp · Devis instantané
            </span>
          </motion.div>
        </div>
      </div>

      {/* Module résa format ligne — bas à droite (compact mobile, plus à droite bureau) */}
      <motion.div
        className="absolute bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-2 lg:right-2 xl:right-4 z-10 w-full max-w-[260px] sm:max-w-none sm:w-[380px]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="bg-foreground/10 backdrop-blur-sm rounded-lg sm:rounded-xl border border-foreground/25 shadow-lg sm:shadow-xl p-2 sm:p-3">
          <p className="text-[9px] sm:text-xs font-medium text-foreground/90 uppercase tracking-wider mb-1 sm:mb-2 flex items-center gap-1 sm:gap-1.5">
            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" strokeWidth={1.5} />
            Réserver une course
          </p>
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
            <input
              type="text"
              placeholder="Départ"
              className="flex-1 min-w-0 px-2 py-1.5 rounded-md sm:rounded-lg bg-background/80 border border-foreground/20 text-foreground text-[11px] sm:text-xs placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/40 focus:border-foreground/30 transition-colors"
              aria-label="Lieu de départ"
            />
            <input
              type="text"
              placeholder="Arrivée"
              className="flex-1 min-w-0 px-2 py-1.5 rounded-md sm:rounded-lg bg-background/80 border border-foreground/20 text-foreground text-[11px] sm:text-xs placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-foreground/40 focus:border-foreground/30 transition-colors"
              aria-label="Lieu d'arrivée"
            />
            <input
              type="date"
              className="w-full sm:w-24 shrink-0 px-2 py-1.5 rounded-md sm:rounded-lg bg-background/80 border border-foreground/20 text-foreground text-[11px] sm:text-xs focus:outline-none focus:ring-1 focus:ring-foreground/40 focus:border-foreground/30 transition-colors"
              aria-label="Date"
            />
            <Link
              href="#reservation"
              className="inline-flex items-center justify-center gap-1 sm:gap-1.5 bg-primary/20 hover:bg-primary/30 border border-primary/40 hover:border-primary/60 text-primary px-3 sm:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap shrink-0"
            >
              Devis
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
