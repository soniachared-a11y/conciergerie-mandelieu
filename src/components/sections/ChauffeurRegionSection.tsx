"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Car } from "lucide-react";

const COVERAGE_BG = "/assets/images/coverage-map-bg.png";

export default function ChauffeurRegionSection() {
  return (
    <section
      className="relative min-h-[85vh] w-full overflow-hidden bg-background border-b border-primary/10"
      data-section="chauffeur-region"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Gauche : carte avec titre, sous-titre, texte, CTA */}
        <div className="relative flex items-center justify-center p-8 lg:p-12 order-2 lg:order-1">
          <motion.div
            className="w-full max-w-lg rounded-2xl p-8 lg:p-10 border-l-4 border-l-primary shadow-2xl bg-background/95 backdrop-blur-md border border-primary/20"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center mb-6">
              <Car className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-foreground tracking-tight mb-3">
              Chauffeur privé à votre disposition
            </h2>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
              Découvrez les lieux emblématiques de la région
            </p>
            <p className="text-foreground/85 text-base lg:text-lg leading-relaxed mb-8">
              Optez pour un chauffeur privé et parcourez la Côte d&apos;Azur en toute sérénité. De Mandelieu à Monaco, Cannes, Nice ou les ports de la Riviera : confort, discrétion et véhicules électriques pour découvrir les endroits les plus emblématiques sans vous soucier de la route.
            </p>
            <Link
              href="#reservation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-background font-semibold transition-all shadow-lg hover:shadow-primary/30"
            >
              Demandez votre devis
              <MapPin className="w-5 h-5" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>

        {/* Droite : image région (Riviera / Monaco) */}
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
        </div>
      </div>
    </section>
  );
}
