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
      {/* Grille 2x2 comme le screenshot : 50/50, positionnement identique */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 max-w-7xl mx-auto">
        {/* Ligne 1 – Gauche : bloc texte (À propos + titre + paragraphe) */}
        <div className="flex flex-col justify-center px-6 py-16 lg:py-20 lg:pr-10 order-1">
          <motion.p
            className="font-display text-primary text-xs uppercase tracking-[0.25em] mb-4 text-background/80"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            À propos de nous
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-background leading-tight mb-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Découvrez un confort et un style inégalés
          </motion.h2>
          <motion.p
            className="text-background/80 text-base lg:text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Fondée sur la passion de l&apos;excellence, Riviera Conciergerie redéfinit le voyage de luxe sur la Côte d&apos;Azur. Notre aventure a commencé avec un objectif simple : vous offrir deux expériences distinctes — la{" "}
            <strong className="font-semibold text-primary">location de voitures haut de gamme</strong> et le{" "}
            <strong className="font-semibold text-primary">chauffeur privé</strong> pour une tranquillité absolue, de Mandelieu à Monaco.
          </motion.p>
        </div>

        {/* Ligne 1 – Droite : grande image (location haut de gamme – Urus) */}
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[320px] order-2">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={IMAGE_URUS}
              alt="Location de voiture haut de gamme — Riviera Conciergerie"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

        {/* Ligne 2 – Gauche : image (chauffeur privé) */}
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[320px] order-3 lg:order-3">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Image
              src={IMAGE_CHAUFFEUR}
              alt="Chauffeur privé — tranquillité et discrétion sur la Riviera"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </motion.div>
        </div>

        {/* Ligne 2 – Droite : bloc texte */}
        <div className="flex flex-col justify-center px-6 py-16 lg:py-20 lg:pl-10 order-4">
          <motion.p
            className="text-background/80 text-base lg:text-lg leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Que vous ayez besoin d&apos;un <strong className="font-semibold text-primary">véhicule de prestige en location</strong> ou d&apos;un <strong className="font-semibold text-primary">chauffeur privé</strong> pour un événement d&apos;entreprise, une occasion spéciale ou une soirée en ville, notre équipe est là pour vous offrir une expérience irréprochable. Confort, discrétion et élégance de Mandelieu à Monaco.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
