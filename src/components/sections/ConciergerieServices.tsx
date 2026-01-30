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
        {/* Ligne 1 – Gauche : bloc texte (fond sombre pour contraste) */}
        <motion.div
          className="flex flex-col justify-center px-6 py-16 lg:py-20 lg:pr-10 order-1 bg-background"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px", amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="inline-block w-fit font-display text-[11px] font-medium uppercase tracking-[0.15em] mb-4 px-2.5 py-1 rounded-md bg-primary/20 text-primary border border-primary/30 shadow-sm whitespace-nowrap">
            À propos de nous
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
            Découvrez un confort et un style inégalés
          </h2>
          <p className="text-foreground/85 text-base lg:text-lg leading-relaxed max-w-xl mb-4">
            En 2019, après 15 ans dans l&apos;hôtellerie de luxe à Monaco, j&apos;ai créé Riviera Conciergerie avec une obsession : que mes clients vivent la Côte d&apos;Azur comme je la vis.
          </p>
          <p className="text-foreground/85 text-base lg:text-lg leading-relaxed max-w-xl mb-4">
            Pas de stress. Pas d&apos;imprévu. Pas de compteur qui défile pendant que vous admirez le coucher de soleil sur la baie de Villefranche.
          </p>
          <p className="text-foreground/85 text-base lg:text-lg leading-relaxed max-w-xl">
            Juste vous, la route et la Méditerranée. Deux expériences : la{" "}
            <strong className="font-light font-display text-primary/95">location de véhicules prestige</strong> pour une liberté totale, ou notre{" "}
            <strong className="font-light font-display text-primary/95">chauffeur privé</strong> pour une sérénité absolue, de Mandelieu à Monaco.
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

        {/* Ligne 2 – Gauche : image chauffeur — mobile : après le texte (order-4) */}
        <motion.div
          className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[320px] order-4 lg:order-3"
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

        {/* Ligne 2 – Droite : bloc texte fond blanc — même hiérarchie que le bloc du haut (label + titre sans boîte) */}
        <motion.div
          className="flex flex-col justify-center px-6 py-16 lg:py-20 lg:pl-10 order-3 lg:order-4"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px", amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="inline-block w-fit font-display text-[11px] font-medium uppercase tracking-[0.15em] mb-4 px-2.5 py-1 rounded-md bg-primary/15 text-background border border-primary/25 shadow-sm whitespace-nowrap">
            Nos prestations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-background leading-tight mb-6">
            Votre expérience sur mesure
          </h2>
          <p className="text-background/80 text-base lg:text-lg leading-relaxed max-w-xl">
            Que vous ayez besoin d&apos;un <strong className="font-light font-display text-primary/95">véhicule de prestige en location</strong> ou d&apos;un <strong className="font-light font-display text-primary/95">chauffeur privé</strong> pour un événement d&apos;entreprise, une occasion spéciale ou une soirée en ville, notre équipe est là pour vous offrir une expérience irréprochable. Confort, discrétion et élégance de Mandelieu à Monaco.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
