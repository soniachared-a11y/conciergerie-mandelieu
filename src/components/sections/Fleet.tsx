"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Zap, Users } from "lucide-react";

const vehicles = [
  {
    image: "/assets/images/vehicles/chauffeur-privee.png",
    title: "Tesla Model Y",
    subtitle: "Business",
    text: "L'élégance technologique pour vos trajets vers Sophia Antipolis ou l'Aéroport de Nice.",
    cta: "Réserver Business",
    icon: ChevronRight,
  },
  {
    image: "/assets/images/vehicles/haut-de-gamme.png",
    title: "Rolls-Royce & Bentley",
    subtitle: "First-Class",
    text: "Le prestige ultime pour vos arrivées au Casino de Monte-Carlo ou au Palais des Festivals.",
    cta: "Réserver First-Class",
    icon: Zap,
    highlight: true,
  },
  {
    image: "/assets/images/vehicles/Sport.png",
    title: "Vans XL Premium",
    subtitle: "Logistique",
    text: "Confort salon pour les équipages et groupes VIP sur toute la Riviera.",
    cta: "Réserver Logistique",
    icon: Users,
  },
];

export default function Fleet() {
  return (
    <section
      id="vehicules"
      className="py-24 bg-background/95 relative z-20"
      data-section="fleet"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Découvrez Nos Véhicules d&apos;Exception
          </h2>
          <p className="text-lg text-foreground/80 font-light">
            Une flotte premium adaptée à tous vos besoins sur la Côte d&apos;Azur.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {vehicles.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-2xl overflow-hidden bg-background/80 border border-primary/20 shadow-lg transition-all duration-500 hover:shadow-xl hover:border-primary/40 ${
                v.highlight ? "md:-translate-y-4 shadow-2xl shadow-primary/20 border-primary/40" : ""
              }`}
            >
              {v.highlight && (
                <div className="absolute top-4 right-4 bg-primary text-background text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide z-10 shadow-lg">
                  Premium
                </div>
              )}
              <div className="aspect-[16/10] bg-foreground/10 relative overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col">
                <h3 className="text-2xl font-semibold text-foreground mb-1">
                  {v.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3 uppercase tracking-wide">
                  {v.subtitle}
                </p>
                <p className="text-foreground/80 mb-8 min-h-[3rem] font-light flex-1">
                  {v.text}
                </p>
                <Link
                  href="#reservation"
                  className="w-full flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 text-background py-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
                >
                  {v.cta}
                  <v.icon className="w-4 h-4" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
