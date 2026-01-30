"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Chauffeurs à disposition (Fleet) — bande fond noir
const chauffeurVehicles = [
  {
    image: "/assets/images/vehicles/chauffeur-privee.png",
    title: "Tesla Model Y",
    subtitle: "Business",
    description: "L'élégance technologique pour vos trajets vers Sophia Antipolis ou l'Aéroport de Nice.",
  },
  {
    image: "/assets/images/vehicles/haut-de-gamme.png",
    title: "Rolls-Royce & Bentley",
    subtitle: "First-Class",
    description: "Le prestige ultime pour vos arrivées au Casino de Monte-Carlo ou au Palais des Festivals.",
  },
  {
    image: "/assets/images/vehicles/Sport.png",
    title: "Vans XL Premium",
    subtitle: "Logistique",
    description: "Confort salon pour les équipages et groupes VIP sur toute la Riviera.",
  },
];

// À louer (Services) — bande fond blanc
const locationVehicles = [
  {
    image: "/assets/images/vehicles/range-rover-sport.png",
    title: "Range Rover Sport",
    subtitle: "Sport",
    description: "Luxe digne des berlines de luxe et le charme des supercars. Prestige et praticité sur la Côte d'Azur.",
  },
  {
    image: "/assets/images/vehicles/mercedes-g63-brabus.png",
    title: "Mercedes G63 Brabus",
    subtitle: "G63 Brabus",
    description: "Luxe et puissance pour sillonner les Alpes avec élégance. Une expérience inoubliable.",
  },
  {
    image: "/assets/images/vehicles/defender-110.png",
    title: "Range Rover Defender 110",
    subtitle: "Défenseur",
    description: "Performance et confiance maximale. Tout-terrain et carrosserie pensés pour l'exception.",
  },
];

export default function FleetServicesMarquee() {
  return (
    <section id="vehicules" className="relative z-20" data-section="fleet-services">
      {/* Bande 1 : Nos chauffeurs à disposition — fond noir, défile droite → gauche */}
      <div className="py-12 sm:py-14 bg-background overflow-hidden">
        <div className="mb-6 px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight font-display">
            Nos chauffeurs à disposition
          </h2>
          <p className="text-foreground/50 text-xs sm:text-sm mt-1 font-light">
            Véhicules avec chauffeur — Business, First-Class, Logistique
          </p>
        </div>
        <div className="relative flex overflow-hidden mask-linear-fade">
          <div className="flex items-stretch gap-6 animate-scroll-infinite px-6" style={{ width: "max-content" }}>
            {[...chauffeurVehicles, ...chauffeurVehicles].map((v, i) => (
              <article
                key={`chauffeur-${i}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden border border-primary/20 bg-background/80 shadow-xl hover:border-primary/40 transition-colors"
              >
                <div className="relative h-[180px] bg-foreground/10">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <p className="absolute bottom-2 left-3 text-xs font-semibold text-primary uppercase tracking-wider">
                    {v.subtitle}
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="text-foreground/60 text-sm mt-1 line-clamp-3 font-light">{v.description}</p>
                  <Link
                    href="#reservation"
                    className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                  >
                    Réserver
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Bande 2 : À louer — fond blanc, défile droite → gauche */}
      <div className="py-12 sm:py-14 bg-white overflow-hidden border-t border-gray-200/80">
        <div className="mb-6 px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E1E1E] tracking-tight font-display">
            À louer
          </h2>
          <p className="text-[#1E1E1E]/50 text-xs sm:text-sm mt-1 font-light">
            Location de véhicules haut de gamme sur la Côte d&apos;Azur
          </p>
        </div>
        <div className="relative flex overflow-hidden mask-linear-fade">
          <div className="flex items-stretch gap-6 animate-scroll-infinite-reverse px-6" style={{ width: "max-content" }}>
            {[...locationVehicles, ...locationVehicles].map((v, i) => (
              <article
                key={`location-${i}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[180px] bg-gray-100">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-contain object-center p-3"
                    sizes="320px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1E1E1E]">{v.title}</h3>
                  <p className="text-primary/80 text-xs font-medium uppercase tracking-wider mt-0.5">{v.subtitle}</p>
                  <p className="text-[#1E1E1E]/60 text-sm mt-2 line-clamp-3 font-light">{v.description}</p>
                  <Link
                    href="#reservation"
                    className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                  >
                    Plus d&apos;infos
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
