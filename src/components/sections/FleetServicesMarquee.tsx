"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type VehicleCategory = "all" | "SUV" | "Berline" | "Van";

// Services de conciergerie — chauffeurs à disposition (bande fond noir)
const chauffeurVehicles = [
  {
    image: "/assets/images/service-cannes-lions.jpg",
    title: "Événements & Festivals",
    subtitle: "Cannes Lions",
    description:
      "Chauffeur privé pour le Cannes Lions, le Festival de Cannes, MIPCOM et tous les grands festivals de la Côte d'Azur. Prise en charge à l'hôtel ou en villa, dépose sur le tapis rouge, attente sur site pendant les projections et cérémonies. Véhicules prestige (berlines, SUV), discrétion absolue et ponctualité. Devis sur mesure selon vos déplacements et la durée de présence.",
  },
  {
    image: "/assets/images/service-grand-prix-monaco.png",
    title: "Grand Prix de Monaco",
    subtitle: "Formule E & F1",
    description:
      "Transferts VIP pour le Grand Prix de Monaco, la Formule E et tous les événements motorsport de la Principauté. Prise en charge aéroport ou hébergement, accès aux zones réservées, logistique sur mesure (horaires, parkings, passes). Hébergement des bagages et effets personnels à bord. Une expérience 100 % circuits, sans stress ni attente.",
  },
  {
    image: "/assets/images/chauffeur-prive-cote-azur.png",
    title: "Chauffeur privé Côte d'Azur",
    subtitle: "Business & Transferts",
    description:
      "Transferts aéroport Nice Côte d'Azur, gares TGV (Nice, Cannes, Antibes), rendez-vous professionnels et séminaires d'entreprise. Berlines et véhicules haut de gamme, disponible 24h/24 et 7j/7. Tarifs fixes communiqués à la réservation, sans surprise. Idéal pour cadres, dirigeants et équipes en déplacement sur la Riviera.",
  },
  {
    image: "/assets/images/tourisme-riviera.png",
    title: "Tourisme",
    subtitle: "Côte d'Azur",
    description:
      "Découvrez la Riviera avec un chauffeur dédié : villages perchés (Eze, Saint-Paul-de-Vence), caps et criques (Saint-Jean-Cap-Ferrat, Menton), calanques et routes des Alpes. Itinéraires sur mesure, commentaires sur les lieux et pauses photo à volonté. La plus belle région de France, en toute sérénité.",
  },
  {
    image: "/assets/images/shopping-bonnes-adresses.png",
    title: "Shopping",
    subtitle: "Bonnes adresses",
    description:
      "Shopping sur la Côte d'Azur avec un chauffeur qui connaît les bonnes adresses : boutiques discrètes, showrooms automobile et luxe, antiquaires et galeries. Livraisons et emballages gérés, cabine d'essayage à bord si besoin. Un vrai service conciergerie à la demande, sur une demi-journée ou une journée.",
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
    description:
      "Le SUV super sport de Lamborghini en location sur la Côte d'Azur. Moteur V8 biturbo, lignes agressives et intérieur cuir. Idéal pour les événements, le Grand Prix ou les déplacements prestige. Puissance, luxe et présence garantis. Livraison possible à l'hôtel ou en villa.",
    category: "SUV",
  },
  {
    image: "/assets/images/vehicles/range-rover-sport.png",
    title: "Range Rover Sport",
    subtitle: "Sport",
    description:
      "Luxe digne des berlines et charme des supercars. Le Range Rover Sport allie prestige, praticité et conduite sportive. Parfait pour la Riviera : villas en hauteur, calanques, sorties entre amis. Intérieur raffiné, technologies de pointe. Location à la journée ou à la semaine.",
    category: "SUV",
  },
  {
    image: "/assets/images/vehicles/mercedes-g63-brabus.png",
    title: "Mercedes G63 Brabus",
    subtitle: "G63 Brabus",
    description:
      "Luxe et puissance pour sillonner les Alpes et la Côte d'Azur avec élégance. Version Brabus : performances rehaussées, finitions exclusives. Une expérience inoubliable, en ville comme sur les routes de montagne. Idéal pour les amateurs de 4x4 haut de gamme.",
    category: "SUV",
  },
  {
    image: "/assets/images/vehicles/defender-110.png",
    title: "Range Rover Defender 110",
    subtitle: "Défenseur",
    description:
      "Performance et confiance maximale. Le Defender 110 allie tout-terrain sérieux et carrosserie pensée pour l'exception. Sept places possibles, coffre volumineux. Parfait pour les familles ou les escapades aventure sur la Riviera et l'arrière-pays. Location flexible.",
    category: "SUV",
  },
  {
    image: "/assets/images/vehicles/mercedes-s-class.png",
    title: "Mercedes Classe S",
    subtitle: "Prestige",
    description:
      "Berline de prestige en location. Confort, silence de roulement et élégance pour vos déplacements sur la Côte d'Azur. Sièges massants, climatisation multic zones, équipements de sécurité de pointe. Idéale pour les transferts aéroport, séminaires ou sorties officielles.",
    category: "Berline",
  },
  {
    image: "/assets/images/vehicles/mercedes-e-class.png",
    title: "Mercedes Classe E",
    subtitle: "Executive",
    description:
      "Berline executive à louer. Confort et discrétion pour vos trajets professionnels ou personnels. Équilibre parfait entre standing et usage quotidien. Idéale pour les cadres en déplacement ou les familles exigeantes. Tarifs à la journée ou forfaits semaine.",
    category: "Berline",
  },
  {
    image: "/assets/images/vehicles/mercedes-v-class.png",
    title: "Mercedes V-Class",
    subtitle: "Van Premium",
    description:
      "Van premium à louer pour groupes et familles. Spacieux, confortable, vitres teintées et finitions haut de gamme. Idéal pour mariages, séminaires, transferts groupe ou sorties en famille sur la Riviera. Jusqu'à 7 passagers dans des conditions luxueuses.",
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
  const [expandedChauffeurIndex, setExpandedChauffeurIndex] = useState<number | null>(null);
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
            {[...chauffeurVehicles, ...chauffeurVehicles].map((v, i) => {
              const isExpanded = expandedChauffeurIndex === i;
              return (
                <article
                  key={`chauffeur-${i}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-2xl overflow-hidden border border-primary/20 bg-background/80 shadow-xl hover:border-primary/40 transition-colors flex flex-col"
                >
                  <div className="relative h-[140px] bg-foreground/10 shrink-0">
                    <Image
                      src={v.image}
                      alt={v.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  </div>
                  <div className="p-4 min-h-[124px] flex flex-col flex-1">
                    <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                    <span className="inline-block w-fit font-display text-[11px] font-medium uppercase tracking-[0.15em] mt-1 mb-1.5 text-primary/90 whitespace-nowrap">
                      {v.subtitle}
                    </span>
                    <p
                      className={`text-foreground/60 text-sm font-light flex-1 ${isExpanded ? "" : "line-clamp-2"}`}
                    >
                      {v.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setExpandedChauffeurIndex(isExpanded ? null : i)}
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
                      >
                        {isExpanded ? "Voir moins" : "Lire la suite"}
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-[-90deg]" : ""}`}
                          strokeWidth={1.5}
                        />
                      </button>
                      {isExpanded && (
                        <Link
                          href="#reservation"
                          className="inline-flex items-center gap-2 text-primary/80 font-medium text-sm hover:underline hover:text-primary"
                        >
                          Réserver
                          <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
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
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-4 border-b border-[#1E1E1E]/10">
            {VEHICLE_FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setVehicleFilter(f.value)}
                className={`relative pb-3 text-xs font-medium tracking-wide transition-colors ${
                  vehicleFilter === f.value
                    ? "text-[#1E1E1E] border-b-2 border-primary -mb-px"
                    : "text-[#1E1E1E]/60 hover:text-[#1E1E1E]/90"
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
