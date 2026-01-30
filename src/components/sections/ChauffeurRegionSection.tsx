"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Check, Info, ChevronDown } from "lucide-react";

const COVERAGE_BG = "/assets/images/coverage-map-bg.png";

// Points lumineux : Mandelieu → Cannes → Nice → Monaco
const ROUTE_POINTS = [
  { label: "Mandelieu", top: "48%", left: "18%" },
  { label: "Cannes", top: "46%", left: "28%" },
  { label: "Nice", top: "38%", left: "52%" },
  { label: "Monaco", top: "32%", left: "72%" },
];

const ROUTE_PATH = "M 18 48 L 28 46 L 52 38 L 72 32";

const comparisons = [
  { label: "Prix", option1: "Fixe & Transparent", option2: "Sur devis", icon2: "info" as const },
  { label: "Liberté", option1: "Autonomie", option2: "Sérénité", icon2: "check" as const },
  { label: "Dispo.", option1: "24/7", option2: "Sur résa", icon2: "info" as const },
  { label: "Véhicules", option1: "Premium", option2: "Berlines & Van", icon2: "check" as const },
];

function FormuleCardContent() {
  return (
    <>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground/70 mb-1.5">Votre formule</p>
      <div className="grid grid-cols-2 gap-1 mb-1.5 pb-1.5 border-b border-primary/15">
        <span className="text-[9px] font-semibold text-primary uppercase tracking-wider leading-tight">Location</span>
        <span className="text-[9px] font-semibold text-foreground/70 uppercase tracking-wider leading-tight">Chauffeur</span>
      </div>
      <div className="space-y-1">
        {comparisons.map((item) => (
          <div key={item.label} className="grid grid-cols-2 gap-1 text-[10px]">
            <div className="flex items-center gap-1">
              <span className="flex-shrink-0 w-3 h-3 rounded-full border border-primary flex items-center justify-center">
                <Check className="w-1.5 h-1.5 text-primary" strokeWidth={2.5} />
              </span>
              <span className="text-foreground/90 font-light leading-tight truncate">{item.option1}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="flex-shrink-0 w-3 h-3 rounded-full border border-primary/50 flex items-center justify-center">
                {item.icon2 === "check" ? (
                  <Check className="w-1.5 h-1.5 text-primary" strokeWidth={2.5} />
                ) : (
                  <Info className="w-1.5 h-1.5 text-primary/80" strokeWidth={2} />
                )}
              </span>
              <span className="text-foreground/75 font-light leading-tight truncate">{item.option2}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ChauffeurRegionSection() {
  const [formuleOpen, setFormuleOpen] = useState(false);

  return (
    <section
      className="relative min-h-[85vh] w-full overflow-hidden bg-background border-b border-primary/10"
      data-section="chauffeur-region"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Gauche : titre + paragraphe (L'Excellence à Votre Service) + mockup + tableau de comparaison */}
        <div className="relative flex flex-col items-center justify-center p-6 lg:p-10 order-2 lg:order-1 min-h-0 sm:min-h-[420px] lg:min-h-[85vh]">
          <div className="relative flex flex-col items-center w-full max-w-[280px] sm:max-w-none">
            {/* Titre et paragraphe — L'Excellence à Votre Service */}
            <motion.div
              className="text-center mb-6 w-full"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl lg:text-3xl font-light text-foreground tracking-tight mb-3 font-display">
                L&apos;Excellence à Votre Service
              </h2>
              <p className="text-foreground/85 text-sm lg:text-base font-light leading-relaxed">
                Deux solutions premium pour votre expérience sur la Côte d&apos;Azur : la{" "}
                <strong className="font-light font-display text-primary/95">location de véhicules prestige</strong> pour une liberté totale, ou notre{" "}
                <strong className="font-light font-display text-primary/95">chauffeur privé</strong> pour une sérénité absolue. Quel que soit votre choix, nous garantissons tarifs transparents, véhicules haut de gamme et un paiement sécurisé instantané via SumUp — sans surprise, sans attente.
              </p>
            </motion.div>

            {/* Mockup téléphone */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium uppercase tracking-wider border border-primary/30 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Technologie SumUp
              </span>
              <p className="text-foreground/80 text-xs sm:text-sm font-light mb-4 text-center">
                Paiement sécurisé — réglez en toute confiance.
              </p>
              <div className="relative w-[200px] h-[360px] sm:w-[220px] sm:h-[400px] bg-background border-4 border-primary/30 rounded-[1.4rem] shadow-2xl shadow-primary/10 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 w-full h-4 bg-background z-20 flex items-center justify-center pt-1">
                  <span className="text-[9px] text-foreground font-bold">9:41</span>
                </div>
                <div className="w-full h-full pt-5 px-3 flex flex-col items-center relative overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={COVERAGE_BG}
                      alt="Côte d'Azur — Mandelieu à Monaco"
                      fill
                      className="object-cover object-center"
                      sizes="260px"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-background/85" />
                  </div>
                  <motion.div
                    className="relative z-10 flex flex-col items-center mb-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={{
                      visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
                      hidden: {},
                    }}
                  >
                    <motion.div
                      className="relative w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center mb-1"
                      variants={{
                        hidden: { scale: 0, opacity: 0 },
                        visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 22 } },
                      }}
                    >
                      <Check className="w-4 h-4 text-primary" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                    </motion.div>
                    <motion.span className="relative z-10 text-foreground text-xs font-semibold mb-0.5" variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}>
                      Paiement Réussi
                    </motion.span>
                    <motion.span className="relative z-10 text-foreground/60 text-[10px] mb-0.5" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                      Transaction #83921
                    </motion.span>
                    <motion.span className="relative z-10 text-lg font-bold text-foreground" variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}>
                      55,00 €
                    </motion.span>
                  </motion.div>
                  <span className="relative z-10 text-foreground/60 text-[10px] mb-3 text-center">Riviera Conciergerie - Course</span>
                  <div className="relative z-10 w-full py-1.5 border-t border-primary/20 flex justify-between text-[10px]">
                    <span className="text-foreground/70">Paiement</span>
                    <span className="text-foreground flex items-center gap-1">
                      <CreditCard className="w-2.5 h-2.5" strokeWidth={1.5} />
                      Visa •••• 4242
                    </span>
                  </div>
                  <button
                    type="button"
                    className="relative z-10 mt-auto mb-3 w-full bg-primary text-background py-1.5 rounded-lg font-medium text-[10px]"
                  >
                    Télécharger le reçu
                  </button>
                </div>
              </div>
              <Link href="tel:0132345465" className="text-primary font-medium text-xs hover:underline mt-3">
                Essayez maintenant
              </Link>
            </motion.div>

            {/* Mobile : tableau comparaison en menu déroulant */}
            <div className="sm:hidden relative mt-4 w-full max-w-[200px] mx-auto">
              <button
                type="button"
                onClick={() => setFormuleOpen((o) => !o)}
                className="w-full flex items-center justify-between gap-2 rounded-xl border border-primary/25 bg-background/98 backdrop-blur-md shadow-lg shadow-primary/10 px-3 py-2.5 text-left"
                aria-expanded={formuleOpen}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/70">Votre formule</span>
                <ChevronDown className={`w-4 h-4 text-foreground/70 flex-shrink-0 transition-transform duration-200 ${formuleOpen ? "rotate-180" : ""}`} strokeWidth={2} />
              </button>
              <AnimatePresence>
                {formuleOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-b-xl border border-t-0 border-primary/25 bg-background/98 backdrop-blur-md shadow-lg shadow-primary/10 p-2.5 -mt-px">
                      <FormuleCardContent />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop : tableau comparaison en carte (popup) */}
            <motion.div
              className="hidden sm:block absolute right-0 bottom-0 lg:right-4 lg:bottom-4 w-[200px] rounded-xl border border-primary/25 bg-background/98 backdrop-blur-md shadow-lg shadow-primary/10 p-3 z-10"
              initial={{ opacity: 0, scale: 0.92, y: 4 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.35, delay: 0.2 }}
            >
              <FormuleCardContent />
            </motion.div>
          </div>
        </div>

        {/* Droite : image région (Riviera / Monaco) + points lumineux Mandelieu → Monaco */}
        <div className="relative w-full min-h-[50vh] lg:min-h-[85vh] order-1 lg:order-2">
          <Image
            src={COVERAGE_BG}
            alt="Riviera — Mandelieu à Monaco, lieux emblématiques"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent lg:from-background/70 lg:via-transparent lg:to-transparent" />

          <svg
            className="absolute inset-0 w-full h-full z-10 pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="chauffeur-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="blur" />
                <feFlood floodColor="var(--primary)" floodOpacity="0.8" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="chauffeur-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                <stop offset="50%" stopColor="var(--primary)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path
              className="route-line-neon"
              d={ROUTE_PATH}
              fill="none"
              stroke="url(#chauffeur-line-gradient)"
              strokeWidth="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#chauffeur-neon-glow)"
            />
          </svg>

          {ROUTE_POINTS.map((p) => (
            <div
              key={p.label}
              className="absolute z-20 flex flex-col items-center"
              style={{ top: p.top, left: p.left, transform: "translate(-50%, -50%)" }}
            >
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-20 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-[0_0_16px_var(--primary)]" />
              <span className="absolute top-6 whitespace-nowrap text-[10px] font-bold tracking-widest text-primary uppercase drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
