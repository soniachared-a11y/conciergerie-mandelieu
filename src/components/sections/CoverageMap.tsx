"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

// Ordre de l'itinéraire : Mandelieu → Cannes → Nice → Monaco (côte)
const POINTS = [
  { label: "Mandelieu", top: "48%", left: "18%" },
  { label: "Cannes", top: "46%", left: "28%" },
  { label: "Nice", top: "38%", left: "52%" },
  { label: "Monaco", top: "32%", left: "72%" },
];

// Path SVG : Mandelieu → Cannes → Nice → Monaco (en % viewBox 0 0 100 100)
const ROUTE_PATH = "M 18 48 L 28 46 L 52 38 L 72 32";

export default function CoverageMap() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden bg-background border-b border-primary/10">
      {/* Carte réelle de la région Mandelieu–Monaco (Alpes-Maritimes) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Carte_Alpes-Maritimes.png/1200px-Carte_Alpes-Maritimes.png"
          alt="Carte Mandelieu - Monaco, Côte d'Azur"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent z-[1]" />
      </div>

      {/* Ligne animée type néon : fil fluide entre les points */}
      <svg
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
            <feFlood floodColor="#99ffcc" floodOpacity="0.8" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#99ffcc" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#99ffcc" stopOpacity="1" />
            <stop offset="100%" stopColor="#99ffcc" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Fil néon fluide : Mandelieu → Cannes → Nice → Monaco */}
        <path
          className="route-line-neon"
          d={ROUTE_PATH}
          fill="none"
          stroke="url(#line-gradient)"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#neon-glow)"
        />
      </svg>

      {/* Points avec effet néon */}
      {POINTS.map((p) => (
        <div
          key={p.label}
          className="absolute z-20 flex flex-col items-center"
          style={{
            top: p.top,
            left: p.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-20 animate-ping" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_20px_rgba(153,255,204,0.6)]" />
          <span className="absolute top-6 whitespace-nowrap text-[10px] font-bold tracking-widest text-primary uppercase drop-shadow-[0_0_8px_rgba(153,255,204,0.8)]">
            {p.label}
          </span>
        </div>
      ))}

      <motion.div
        className="absolute bottom-12 left-6 right-6 md:left-auto md:right-12 md:bottom-12 md:max-w-md z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl p-6 border-l-4 border-l-primary flex items-start gap-4 shadow-2xl bg-background/90 backdrop-blur-md border border-primary/20">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-foreground font-semibold text-lg">
              Zone d&apos;Intervention
            </h3>
            <p className="text-foreground/80 text-sm font-light mt-1">
              Couverture 24/7 de Mandelieu à la frontière italienne. Transferts
              aéroport Nice Côte d&apos;Azur, ports de La Napoule, Beaulieu et
              Port Hercule assurés.
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
