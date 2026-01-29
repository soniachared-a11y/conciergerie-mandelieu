"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-start md:justify-start">
        <div className="max-w-2xl pt-10 flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold uppercase tracking-wider mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Disponible 24h/7j
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-[1.1] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Riviera Conciergerie&nbsp;: l&apos;excellence de Mandelieu à Monaco.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-lg lg:text-xl text-foreground font-light leading-relaxed mb-10 max-w-lg space-y-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
          >
            <p>
              <strong className="font-medium text-primary">Véhicules à louer</strong> — Location haut de gamme sur la Côte d&apos;Azur.
            </p>
            <p>
              <strong className="font-medium text-primary">Chauffeur privé</strong> — Transport en véhicules électriques, silence et tranquillité de Mandelieu à Monaco.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link
              href="#reservation"
              className="inline-flex justify-center items-center gap-3 bg-primary hover:bg-primary/90 text-background px-8 py-4 rounded-lg text-base font-semibold transition-all transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 shadow-lg"
            >
              <span>Réserver mon Expérience Riviera</span>
              <ArrowRight className="w-5 h-5 shrink-0" strokeWidth={1.5} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start [text-shadow:0_2px_6px_rgba(0,0,0,0.9)]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background/90 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-foreground">
                Paiement Sécurisé
                <br />
                SumUp
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-background/90 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-foreground">
                Devis
                <br />
                Instantané
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
