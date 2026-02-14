"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Calculator, Link2, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Phone,
    title: "L'Appel Essentiel",
    text: "Contactez-nous au 01.32.34.54.65. Décrivez votre trajet, vos besoins et vos préférences.",
  },
  {
    icon: Calculator,
    title: "Devis Personnalisé",
    text: "Nous calculons votre tarif fixe exact en temps réel. Pas de compteur, pas de stress.",
  },
  {
    icon: Link2,
    title: "Paiement SumUp",
    text: "Vous recevez un lien de paiement sécurisé par SMS. Confirmez votre course en toute sécurité.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="fonctionnement"
      className="py-24 bg-white border-y border-neutral-200 relative z-20"
      data-section="fonctionnement"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-900 mb-4 px-4 py-2 rounded-full bg-neutral-100">
            Simplicité Absolue
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-neutral-900 tracking-tight mb-6">
            Votre Réservation en 3 Étapes
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-12">
          {/* Fil conducteur animé (1 → 2 → 3, chronologique) */}
          <motion.div
            className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px overflow-hidden -z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="h-full w-full bg-neutral-400 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            />
          </motion.div>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 }}
            >
              <div className="w-24 h-24 mx-auto bg-white border border-black rounded-full flex items-center justify-center mb-8 shadow-lg z-10 relative group-hover:border-neutral-800 transition-colors duration-500">
                <step.icon
                  className="w-10 h-10 text-primary"
                  strokeWidth={1.5}
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border border-primary rounded-full flex items-center justify-center text-neutral-900 font-display font-light text-sm shadow-md">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display text-xl font-light text-neutral-900 mb-3 inline-block border-b-2 border-primary pb-1">
                {step.title}
              </h3>
              <p className="text-neutral-600 max-w-xs mx-auto font-light text-[15px] leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <Link
            href="#reservation"
            className="group/link relative inline-flex items-center gap-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-neutral-900 hover:text-primary transition-colors duration-300 pb-0.5"
          >
            <span className="relative">
              Réserver maintenant
              <span
                className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"
                aria-hidden
              />
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-primary opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all duration-300" strokeWidth={2} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
