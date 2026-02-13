"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Check, Info, ChevronDown } from "lucide-react";
import Link from "next/link";

const COVERAGE_BG = "/assets/images/coverage-map-bg.png";

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

export default function ComparisonPaymentSection() {
  const [formuleOpen, setFormuleOpen] = useState(false);

  return (
    <section className="py-8 lg:py-10 bg-background border-y border-primary/10 overflow-hidden">
      {/* Section réduite : max-width + padding serré pour moins d'espace sur les côtés */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Bloc titre + paragraphe uniquement — aucun élément à côté */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-light text-foreground tracking-tight mb-3 font-display">
            L&apos;Excellence à Votre Service
          </h2>
          <p className="text-foreground/85 text-sm lg:text-base font-light leading-relaxed">
            Deux solutions premium pour votre expérience sur la Côte d&apos;Azur : la{" "}
            <strong className="font-medium text-primary">location de véhicules prestige</strong> pour une liberté totale, ou notre{" "}
            <strong className="font-medium text-primary">chauffeur privé</strong> pour une sérénité absolue. Quel que soit votre choix, nous garantissons tarifs transparents, véhicules haut de gamme et un paiement sécurisé instantané via SumUp — sans surprise, sans attente.
          </p>
        </motion.div>

        {/* Zone téléphone + popup : sur mobile popup sous le mockup, sur sm+ popup en bas à droite */}
        <div className="relative flex flex-col items-center min-h-0 sm:min-h-[420px] sm:min-h-[460px]">
          {/* Mockup téléphone — centré, directement sous le titre et paragraphe */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium uppercase tracking-wider border border-primary/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Technologie SumUp
            </span>
            <p className="text-foreground/80 text-sm font-light mb-4 text-center">
              Paiement sécurisé instantané — réglez votre prestation en toute confiance.
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
                <span className="relative z-10 text-foreground/60 text-[10px] mb-3 text-center">Call Riviera - Course</span>
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

          {/* Mobile : menu déroulant (même design, prend peu de place quand fermé) */}
          <div className="sm:hidden relative mt-4 w-full max-w-[200px] mx-auto">
            <button
              type="button"
              onClick={() => setFormuleOpen((o) => !o)}
              className="w-full flex items-center justify-between gap-2 rounded-xl border border-primary/25 bg-background/98 backdrop-blur-md shadow-lg shadow-primary/10 px-3 py-2.5 text-left"
              aria-expanded={formuleOpen}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/70">
                Votre formule
              </span>
              <ChevronDown
                className={`w-4 h-4 text-foreground/70 flex-shrink-0 transition-transform duration-200 ${formuleOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
              />
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

          {/* Desktop : popup en bas à droite (inchangé) */}
          <motion.div
            className="hidden sm:block absolute right-0 bottom-0 w-[200px] rounded-xl border border-primary/25 bg-background/98 backdrop-blur-md shadow-lg shadow-primary/10 p-3 z-10"
            initial={{ opacity: 0, scale: 0.92, y: 4 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            <FormuleCardContent />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
