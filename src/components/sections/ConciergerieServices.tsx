"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const IMAGE_URUS = "/assets/images/urus-location.png";
const IMAGE_CHAUFFEUR = "/assets/images/chauffeur-prive.png";

export default function ConciergerieServices() {
  return (
    <section
      className="relative py-0 bg-white overflow-hidden"
      data-section="conciergerie-services"
    >
      {/* Grille 2x2 : effet d'apparition au scroll (view) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 max-w-7xl mx-auto">
        {/* Ligne 1 – Gauche : bloc texte */}
        <motion.div
          className="flex flex-col justify-center px-6 py-16 lg:py-20 lg:pr-10 order-1"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px", amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="font-display text-primary text-xs uppercase tracking-[0.25em] mb-4 text-background/80">
            À propos de nous
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-background leading-tight mb-6">
            Découvrez un confort et un style inégalés
          </h2>
          <p className="text-background/80 text-base lg:text-lg leading-relaxed max-w-xl">
            Fondée sur la passion de l&apos;excellence, Riviera Conciergerie redéfinit le voyage de luxe sur la Côte d&apos;Azur. Notre aventure a commencé avec un objectif simple : vous offrir deux expériences distinctes — la{" "}
            <strong className="font-semibold text-primary">location de voitures haut de gamme</strong> et le{" "}
            <strong className="font-semibold text-primary">chauffeur privé</strong> pour une tranquillité absolue, de Mandelieu à Monaco.
          </p>
        </motion.div>

        {/* Ligne 1 – Droite : image Urus */}
        <motion.div
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[320px] order-2"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px", amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="absolute inset-0">
            <Image
              src={IMAGE_URUS}
              alt="Location de voiture haut de gamme — Riviera Conciergerie"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Ligne 2 – Gauche : image chauffeur */}
        <motion.div
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[320px] order-3"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px", amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="absolute inset-0">
            <Image
              src={IMAGE_CHAUFFEUR}
              alt="Chauffeur privé — tranquillité et discrétion sur la Riviera"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </motion.div>

        {/* Ligne 2 – Droite : bloc texte */}
        <motion.div
          className="flex flex-col justify-center px-6 py-16 lg:py-20 lg:pl-10 order-4"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px", amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <p className="text-background/80 text-base lg:text-lg leading-relaxed max-w-xl">
            Que vous ayez besoin d&apos;un <strong className="font-semibold text-primary">véhicule de prestige en location</strong> ou d&apos;un <strong className="font-semibold text-primary">chauffeur privé</strong> pour un événement d&apos;entreprise, une occasion spéciale ou une soirée en ville, notre équipe est là pour vous offrir une expérience irréprochable. Confort, discrétion et élégance de Mandelieu à Monaco.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
