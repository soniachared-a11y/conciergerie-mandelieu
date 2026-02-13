"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CARDS = [
  {
    id: "chauffeurs",
    title: "Chauffeurs d'élite",
    text: "Sélectionnés pour leur expérience, discrétion et connaissance parfaite de la Côte d'Azur.",
    size: "large",
    image: "/assets/images/chauffeur-prive.png",
  },
  {
    id: "flotte",
    title: "Flotte impeccable",
    text: "Véhicules entretenus quotidiennement. Intérieur cuir, WiFi haut débit, chargeurs inclus.",
    size: "wide",
    picto: "car",
  },
  {
    id: "tarif",
    title: "Tarif fixe transparent",
    text: "Pas de compteur qui défile. Prix annoncé à l'avance, pas de surprise à l'arrivée.",
    size: "default",
    picto: "price",
  },
  {
    id: "paiement",
    title: "Paiement instantané",
    text: "Lien sécurisé par SMS. Payez en 30 secondes, reçu immédiat pour votre comptabilité.",
    size: "default",
    picto: "card",
  },
  {
    id: "dispo",
    title: "Disponibilité 24/7",
    text: "Un humain décroche, pas un bot. Réservation de dernière minute acceptée.",
    size: "default",
    picto: "clock",
  },
  {
    id: "confort",
    title: "Confort premium",
    text: "WiFi illimité, eau fraîche, presse du jour, chargeurs iOS/Android dans chaque véhicule.",
    size: "wide",
    picto: "wifi",
  },
];

function Picto({ type }: { type: string }) {
  const base = "transition-transform duration-300 group-hover:scale-110";
  switch (type) {
    case "car":
      return (
        <div className={`w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center ${base}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-6 h-6 text-primary">
            <path d="M5 17h14v-5H5v5zm0-7h14l-1.5-4.5h-11L5 10z" />
            <circle cx="7.5" cy="17" r="1.5" />
            <circle cx="16.5" cy="17" r="1.5" />
          </svg>
        </div>
      );
    case "price":
      return (
        <div className={`w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center ${base}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
      );
    case "card":
      return (
        <div className={`w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center ${base}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 10h20" />
          </svg>
        </div>
      );
    case "clock":
      return (
        <div className={`w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center ${base}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
      );
    case "wifi":
      return (
        <div className={`w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center ${base}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-primary">
            <path d="M5 12.55a11 11 0 0 1 14.08 0M8.5 16.429a5 5 0 0 1 7 0M12 20h.01" />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

export default function WhyUs() {
  return (
    <section className="relative py-20 sm:py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-light text-foreground text-center mb-4 tracking-tight"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Pourquoi Choisir Call Riviera ?
        </motion.h2>
        <motion.div
          className="w-16 h-0.5 bg-primary/60 mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {CARDS.map((card, i) => (
            <motion.article
              key={card.id}
              className={`group relative rounded-2xl overflow-hidden border border-foreground/10 bg-foreground/[0.04] hover:bg-foreground/[0.07] hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col
                ${card.size === "large" ? "lg:col-span-2 lg:row-span-2 min-h-[280px]" : ""}
                ${card.size === "wide" ? "lg:col-span-2" : ""}
                min-h-[200px]
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
            >
              {card.image ? (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    className="object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-300"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>
              ) : null}
              <div className={`relative z-10 flex flex-col p-6 ${card.size === "large" ? "justify-end min-h-[280px]" : "flex-1"}`}>
                {card.picto && (
                  <div className="mb-4">
                    <Picto type={card.picto} />
                  </div>
                )}
                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
