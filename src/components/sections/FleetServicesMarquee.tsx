"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type VehicleCategory = "all" | "SUV" | "Berline" | "Van";

// Services de conciergerie — chauffeurs à disposition (bande fond noir)
const chauffeurVehicles = [
  {
    image: "/assets/images/service-cannes-lions.png",
    title: "Événements & Festivals",
    subtitle: "Cannes Lions",
    description: "Chauffeur privé pour le Cannes Lions et les grands festivals. Prise en charge et dépose sur site, discrétion et ponctualité.",
  },
  {
    image: "/assets/images/service-grand-prix-monaco.png",
    title: "Grand Prix de Monaco",
    subtitle: "Formule E & F1",
    description: "Transferts VIP pour le Grand Prix et les événements motorsport à Monaco. Accès et logistique sur mesure.",
  },
  {
    image: "/assets/images/chauffeur-prive-cote-azur.png",
    title: "Chauffeur privé Côte d'Azur",
    subtitle: "Business & Transferts",
    description: "Transferts aéroport Nice, gares, rendez-vous professionnels. Berlines et véhicules haut de gamme, 24h/7.",
  },
  {
    image: "/assets/images/tourisme-riviera.png",
    title: "Tourisme",
    subtitle: "Côte d'Azur",
    description: "Découvrez tous les endroits pittoresques de la plus belle région de France.",
  },
  {
    image: "/assets/images/shopping-bonnes-adresses.png",
    title: "Shopping",
    subtitle: "Bonnes adresses",
    description: "Nos chauffeurs et ses bonnes adresses que vous ne trouverez nulle part sur Google.",
  },
];

// À louer (Services) — bande fond blanc
const locationVehicles: Array<{
  image: string;
  title: string;
  subtitle: string;
  description: string;
  category: VehicleCategory;
}> = [
  {
    image: "/assets/images/urus-yellow.png",
    title: "Lamborghini Urus",
    subtitle: "SUV Prestige",
    description: "Le SUV super sport de Lamborghini. Puissance, luxe et présence sur la Côte d'Azur.",
    category: "SUV",
  },
  {
    image: "/assets/images/vehicles/range-rover-sport.png",
    title: "Range Rover Sport",
    subtitle: "Sport",
    description: "Luxe digne des berlines de luxe et le charme des supercars. Prestige et praticité sur la Côte d'Azur.",
    category: "SUV",
  },
  {
    image: "/assets/images/vehicles/mercedes-g63-brabus.png",
    title: "Mercedes G63 Brabus",
    subtitle: "G63 Brabus",
    description: "Luxe et puissance pour sillonner les Alpes avec élégance. Une expérience inoubliable.",
    category: "SUV",
  },
  {
    image: "/assets/images/vehicles/defender-110.png",
    title: "Range Rover Defender 110",
    subtitle: "Défenseur",
    description: "Performance et confiance maximale. Tout-terrain et carrosserie pensés pour l'exception.",
    category: "SUV",
  },
  {
    image: "/assets/images/vehicles/mercedes-s-class.png",
    title: "Mercedes Classe S",
    subtitle: "Prestige",
    description: "Berline de prestige en location. Confort, silence et élégance pour vos déplacements sur la Côte d'Azur.",
    category: "Berline",
  },
  {
    image: "/assets/images/vehicles/mercedes-e-class.png",
    title: "Mercedes Classe E",
    subtitle: "Executive",
    description: "Berline executive à louer. Confort et discrétion pour vos trajets professionnels ou personnels.",
    category: "Berline",
  },
  {
    image: "/assets/images/vehicles/mercedes-v-class.png",
    title: "Mercedes V-Class",
    subtitle: "Van Premium",
    description: "Van premium à louer pour groupes et familles. Spacieux, confortable et vitres teintées.",
    category: "Van",
  },
];

const VEHICLE_FILTERS: { value: VehicleCategory; label: string }[] = [
  { value: "all", label: "Tous" },
  { value: "SUV", label: "SUV" },
  { value: "Berline", label: "Berline" },
  { value: "Van", label: "Van" },
];

export default function FleetServicesMarquee() {
  const [vehicleFilter, setVehicleFilter] = useState<VehicleCategory>("all");
  const filteredVehicles =
    vehicleFilter === "all"
      ? locationVehicles
      : locationVehicles.filter((v) => v.category === vehicleFilter);
  const vehiclesToShow = filteredVehicles.length > 0 ? filteredVehicles : locationVehicles;

  return (
    <section id="vehicules" className="relative z-20" data-section="fleet-services">
      {/* Bande 1 : Nos chauffeurs à disposition — fond sombre */}
      <div className="py-12 sm:py-14 bg-background overflow-hidden">
        <div className="mb-6 px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight font-display">
            Nos chauffeurs à disposition
          </h2>
          <p className="text-foreground/50 text-xs sm:text-sm mt-1 font-light">
            Services de conciergerie — événements, Grand Prix, transferts
          </p>
        </div>
        <div className="relative flex overflow-hidden mask-linear-fade">
          <div className="flex items-stretch gap-6 animate-scroll-marquee-slow px-6" style={{ width: "max-content" }}>
            {[...chauffeurVehicles, ...chauffeurVehicles].map((v, i) => (
              <article
                key={`chauffeur-${i}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden border border-primary/20 bg-background/80 shadow-xl hover:border-primary/40 transition-colors"
              >
                <div className="relative h-[140px] bg-foreground/10">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <div className="p-4 min-h-[124px] flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                  <span className="inline-block w-fit font-display text-[11px] font-medium uppercase tracking-[0.15em] mt-1 mb-1.5 text-primary/90 whitespace-nowrap">
                    {v.subtitle}
                  </span>
                  <p className="text-foreground/60 text-sm line-clamp-2 font-light flex-1">{v.description}</p>
                  <Link
                    href="#reservation"
                    className="mt-3 inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
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

      {/* Bande 2 : À louer — fond blanc, bordure de séparation */}
      <div className="py-12 sm:py-14 bg-white overflow-hidden border-t border-gray-200/80">
        <div className="mb-6 px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E1E1E] tracking-tight font-display">
            À louer
          </h2>
          <p className="text-[#1E1E1E]/50 text-xs sm:text-sm mt-1 font-light">
            Location de véhicules haut de gamme sur la Côte d&apos;Azur
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {VEHICLE_FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setVehicleFilter(f.value)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  vehicleFilter === f.value
                    ? "bg-primary text-background"
                    : "bg-[#1E1E1E]/10 text-[#1E1E1E]/80 hover:bg-[#1E1E1E]/20"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="relative flex overflow-hidden mask-linear-fade">
          <div className="flex items-stretch gap-6 animate-scroll-marquee-reverse px-6" style={{ width: "max-content" }}>
            {[...vehiclesToShow, ...vehiclesToShow].map((v, i) => (
              <article
                key={`location-${i}`}
                className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-[140px] bg-gray-100">
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    className="object-contain object-center p-3"
                    sizes="320px"
                  />
                </div>
                <div className="p-4 min-h-[124px] flex flex-col">
                  <h3 className="text-base font-semibold text-[#1E1E1E]">{v.title}</h3>
                  <span className="inline-block w-fit font-display text-[11px] font-medium uppercase tracking-[0.15em] mt-1 mb-1.5 text-[#1E1E1E]/70 whitespace-nowrap">
                    {v.subtitle}
                  </span>
                  <p className="text-[#1E1E1E]/60 text-sm line-clamp-2 font-light flex-1">{v.description}</p>
                  <Link
                    href="#reservation"
                    className="mt-3 inline-flex items-center gap-2 text-[#1a1a1a] font-medium text-sm hover:underline"
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
