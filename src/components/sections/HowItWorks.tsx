"use client";

import { motion } from "framer-motion";
import { Phone, Calculator, Link2 } from "lucide-react";

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
      className="py-24 bg-background/95 border-y border-primary/10 relative z-20"
      data-section="fonctionnement"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90 mb-4 block">
            Simplicité Absolue
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-foreground tracking-tight mb-6">
            Votre Réservation en 3 Étapes
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent -z-10" />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-24 h-24 mx-auto bg-background/80 border border-foreground/15 rounded-full flex items-center justify-center mb-8 shadow-lg z-10 relative group-hover:border-primary/30 transition-colors duration-500">
                <step.icon
                  className="w-10 h-10 text-primary/90"
                  strokeWidth={1.5}
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-background border border-foreground/20 rounded-full flex items-center justify-center text-foreground font-display font-light text-sm shadow-md">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display text-xl font-light text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-foreground/70 max-w-xs mx-auto font-light text-[15px] leading-relaxed">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
