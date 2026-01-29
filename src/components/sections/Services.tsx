"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const vehicles = [
  {
    image: "/assets/images/vehicles/range-rover-sport.png",
    title: "RANGE ROVER SPORT",
    subtitle: "SPORT",
    description:
      "Le Range Rover Sport offre un luxe digne des berlines de luxe et le charme irrésistible des supercars, tout en étant un SUV puissant. En louer un sur la Côte d'Azur, c'est allier prestige et praticité pour des voyages en famille ou un moment de détente personnel.",
  },
  {
    image: "/assets/images/vehicles/mercedes-g63-brabus.png",
    title: "MERCEDES BENZ G63 BRABUS",
    subtitle: "G63 BRABUS",
    description:
      "Découvrez la Côte d'Azur comme jamais auparavant à bord du Mercedes G63 Brabus. Alliant luxe et puissance incomparables, il est idéal pour sillonner les Alpes avec élégance. Réservez le vôtre dès aujourd'hui et vivez une expérience inoubliable.",
  },
  {
    image: "/assets/images/vehicles/defender-110.png",
    title: "RANGE ROVER DEFENDER 110",
    subtitle: "DÉFENSEUR",
    description:
      "Chaque Defender a le même objectif fondamental : la performance. Avec une confiance maximale. C'est pourquoi le moteur, la transmission, la suspension, les systèmes tout-terrain et la conception de la carrosserie sont pensés pour une seule chose : des performances exceptionnelles.",
  },
];

export default function Services() {
  return (
    <section
      className="py-24 bg-white relative z-20"
      data-section="services"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-center text-3xl lg:text-4xl font-semibold tracking-tight text-[#1E1E1E] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          Dernières voitures à louer
        </motion.h2>
        <motion.div
          className="w-20 h-1 bg-primary mx-auto rounded-full opacity-80 mb-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {vehicles.map((vehicle, i) => (
            <motion.article
              key={vehicle.title}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: 0.08 + i * 0.12,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-contain object-center p-4"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <h3 className="text-lg lg:text-xl font-bold text-[#1E1E1E] tracking-tight mb-1">
                  {vehicle.title}
                </h3>
                <p className="text-sm font-medium text-primary/90 uppercase tracking-wider mb-4">
                  {vehicle.subtitle}
                </p>
                <p className="text-[#1E1E1E]/80 text-sm leading-relaxed font-light flex-1 mb-6">
                  {vehicle.description}
                </p>
                <Link
                  href="#reservation"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg border-2 border-primary text-primary bg-white font-medium text-sm hover:bg-primary hover:text-[#1E1E1E] transition-colors duration-200"
                >
                  Plus d&apos;infos
                  <ChevronRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
