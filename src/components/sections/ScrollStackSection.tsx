"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Images libres de droit (Unsplash)
const IMG_LOCATION =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop";
const IMG_CHAUFFEUR =
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop";
const IMG_LIVRAISON =
  "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop";

const cards = [
  {
    image: IMG_LOCATION,
    alt: "Location de véhicules haut de gamme — Call Riviera",
    title: "Location haut de gamme",
    description:
      "Véhicules de prestige à votre disposition sur la Côte d'Azur : SUV, berlines et sport. Réservez le vôtre pour vos trajets entre Mandelieu et Monaco.",
  },
  {
    image: IMG_CHAUFFEUR,
    alt: "Chauffeur privé — Call Riviera",
    title: "Chauffeur privé à disposition",
    description:
      "Tranquillité et discrétion : un chauffeur professionnel vous accompagne partout, en véhicules électriques et silencieux, 24h/24.",
  },
  {
    image: IMG_LIVRAISON,
    alt: "Livraison 24/24 — champagne, cigares, eau — Call Riviera",
    title: "Livraison 24/24 — ce que vous voulez, quand vous voulez",
    description:
      "Champagne, cigares, eau, mets… Faites-vous livrer sur la Riviera à toute heure. Un service conciergerie à la demande.",
  },
];

export default function ScrollStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Chaque carte : scale et y qui évoluent au scroll pour effet "pile qui s'imbrique"
  const card1Scale = useTransform(sectionProgress, [0.05, 0.25, 0.45], [0.9, 1, 0.88]);
  const card1Y = useTransform(sectionProgress, [0.25, 0.45], [0, -80]);
  const card1Opacity = useTransform(sectionProgress, [0, 0.15], [0, 1]);

  const card2Scale = useTransform(sectionProgress, [0.35, 0.55, 0.75], [0.9, 1, 0.88]);
  const card2Y = useTransform(sectionProgress, [0.55, 0.75], [0, -80]);
  const card2Opacity = useTransform(sectionProgress, [0.25, 0.4], [0, 1]);

  const card3Scale = useTransform(sectionProgress, [0.65, 0.85, 1], [0.9, 1, 0.88]);
  const card3Y = useTransform(sectionProgress, [0.85, 1], [0, -80]);
  const card3Opacity = useTransform(sectionProgress, [0.5, 0.65], [0, 1]);

  const scales = [card1Scale, card2Scale, card3Scale];
  const ys = [card1Y, card2Y, card3Y];
  const opacities = [card1Opacity, card2Opacity, card3Opacity];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 bg-background border-b border-primary/10"
      data-section="scroll-stack"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Texte de présentation du service */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground mb-4">
            Nos services à la carte
          </h2>
          <p className="text-foreground/85 text-base sm:text-lg leading-relaxed">
            Call Riviera met à votre disposition trois piliers sur la Côte d&apos;Azur : la{" "}
            <strong className="text-primary font-medium">location de véhicules haut de gamme</strong>, un{" "}
            <strong className="text-primary font-medium">chauffeur privé</strong> à votre service 24h/24, et une{" "}
            <strong className="text-primary font-medium">livraison à la demande</strong> — champagne, cigares, mets — pour combler vos envies à toute heure. Découvrez ci-dessous chaque offre.
          </p>
        </motion.div>

        {/* Cartes qui s'imbriquent au scroll */}
        <div className="relative flex flex-col gap-6 sm:gap-8" style={{ paddingBottom: "40vh" }}>
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              className="relative w-full min-h-[20rem] sm:min-h-[24rem] rounded-2xl overflow-hidden shadow-2xl border border-white/10 origin-top"
              style={{
                scale: scales[i],
                y: ys[i],
                opacity: opacities[i],
              }}
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-foreground/90 text-sm sm:text-base max-w-xl">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
