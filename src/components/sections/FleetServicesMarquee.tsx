"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const chauffeurServices = [
  {
    image: "/assets/images/service-cannes-lions.jpg",
    title: "Festival de Cannes",
    category: "ÉVÉNEMENTS",
    description: "Tapis rouge, projections privées et transferts VIP pendant le festival",
  },
  {
    image: "/assets/images/service-grand-prix-monaco.png",
    title: "Grand Prix de Monaco",
    category: "FORMULE 1",
    description: "Accès circuits, zones réservées et logistique dédiée pour l'événement",
  },
  {
    image: "/assets/images/chauffeur-prive-cote-azur.png",
    title: "Transferts Business",
    category: "PROFESSIONNEL",
    description: "Aéroports, gares TGV et rendez-vous d'affaires 24h/24 sur la Riviera",
  },
  {
    image: "/assets/images/tourisme-riviera.png",
    title: "Découverte Riviera",
    category: "TOURISME",
    description: "Villages perchés, caps et routes panoramiques avec chauffeur guide",
  },
  {
    image: "/assets/images/shopping-bonnes-adresses.jpg",
    title: "Shopping Prestige",
    category: "LUXE",
    description: "Boutiques confidentielles et showrooms avec service conciergerie",
  },
];

const locationVehicles = [
  {
    image: "/assets/images/urus-yellow.png",
    title: "Lamborghini Urus",
    category: "SUV",
    description: "Le SUV super sport de Lamborghini pour dominer la Côte d'Azur",
  },
  {
    image: "/assets/images/vehicles/range-rover-sport.png",
    title: "Range Rover Sport",
    category: "SUV",
    description: "Luxe des berlines et dynamique des supercars en un seul véhicule",
  },
  {
    image: "/assets/images/vehicles/mercedes-g63-brabus.png",
    title: "Mercedes G63 Brabus",
    category: "SUV",
    description: "Puissance Brabus et finitions exclusives pour les Alpes et la Riviera",
  },
  {
    image: "/assets/images/vehicles/defender-110.png",
    title: "Range Rover Defender 110",
    category: "SUV",
    description: "Performance tout-terrain et élégance britannique pour l'arrière-pays",
  },
  {
    image: "/assets/images/vehicles/mercedes-s-class.png",
    title: "Mercedes Classe S",
    category: "BERLINE",
    description: "Berline de prestige pour vos déplacements en toute élégance",
  },
  {
    image: "/assets/images/vehicles/mercedes-e-class.png",
    title: "Mercedes Classe E",
    category: "BERLINE",
    description: "Équilibre parfait entre confort executive et sophistication",
  },
  {
    image: "/assets/images/vehicles/mercedes-v-class.png",
    title: "Mercedes V-Class",
    category: "VAN",
    description: "Van premium spacieux pour groupes et familles jusqu'à 7 passagers",
  },
];

export default function FleetServicesMarquee() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const vehiclesRef = useRef<HTMLDivElement>(null);
  const titleEnRef = useRef<HTMLSpanElement>(null);
  const titleLocationRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const onVousRef = useRef<HTMLSpanElement>(null);
  const emmeneRef = useRef<HTMLSpanElement>(null);
  const vivezRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!servicesRef.current || !vehiclesRef.current || !titleEnRef.current || !titleLocationRef.current || !subtitleRef.current || !onVousRef.current || !emmeneRef.current || !vivezRef.current) return;

    const ctx = gsap.context(() => {
      // Animation "ON VOUS EMMÈNE" reveal horizontal (rideau qui s'ouvre)
      const tlExperiences = gsap.timeline({
        scrollTrigger: {
          trigger: onVousRef.current,
          start: "top 80%",
        },
      });

      tlExperiences
        .fromTo(
          onVousRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
        .fromTo(
          emmeneRef.current,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.75"
        )
        .fromTo(
          vivezRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "+=0.3"
        );

      // Animation "EN LOCATION" drop avec bounce
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleLocationRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        titleEnRef.current,
        {
          y: -300,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "bounce.out",
        }
      )
        .to(
          titleLocationRef.current,
          {
            scaleY: 0.85,
            duration: 0.15,
            ease: "power2.out",
          },
          0.6
        )
        .to(
          titleLocationRef.current,
          {
            scaleY: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          0.75
        )
        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "+=0.3"
        );

      // Services cards reveal
      const serviceCards = servicesRef.current?.querySelectorAll(".service-card");
      serviceCards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: i * 0.15,
          }
        );

        // Text stagger
        const textElements = card.querySelectorAll(".card-text");
        gsap.fromTo(
          textElements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: i * 0.15 + 0.3,
          }
        );
      });

      // Vehicles cards reveal
      const vehicleCards = vehiclesRef.current?.querySelectorAll(".vehicle-card");
      vehicleCards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: i * 0.15,
          }
        );

        // Text stagger
        const textElements = card.querySelectorAll(".card-text");
        gsap.fromTo(
          textElements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            delay: i * 0.15 + 0.3,
          }
        );
      });

      // Title animations
      const titles = document.querySelectorAll(".section-title-word");
      gsap.fromTo(
        titles,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titles[0],
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="vehicules" className="relative z-20" data-section="fleet-services">
      {/* Section Services Chauffeurs */}
      <div ref={servicesRef} className="py-16 sm:py-20 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white font-display mb-3">
              <span className="section-title-word inline-block">Vos</span>{" "}
              <span className="section-title-word inline-block">Expériences</span>
            </h2>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50 font-light">
              Conciergerie privée sur la Côte d&apos;Azur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chauffeurServices.slice(0, 3).map((service, i) => (
              <Link
                key={i}
                href="#reservation"
                className="service-card group relative block aspect-[4/5] overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 will-change-transform">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  <p className="card-text text-[10px] uppercase tracking-[0.2em] text-[#99ffcc] mb-2 font-medium">
                    {service.category}
                  </p>
                  <h3 className="card-text text-2xl lg:text-3xl font-light text-white font-display mb-3">
                    {service.title}
                  </h3>
                  <p className="card-text text-sm text-white/70 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="card-text flex items-center gap-2 text-white/90 text-sm font-medium group-hover:gap-4 transition-all duration-300">
                    Découvrir l&apos;expérience
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Rangée 2 : 2 cards + bloc titre */}
            {chauffeurServices.slice(3, 5).map((service, i) => (
              <Link
                key={i + 3}
                href="#reservation"
                className="service-card group relative block aspect-[4/5] overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 will-change-transform">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  <p className="card-text text-[10px] uppercase tracking-[0.2em] text-[#99ffcc] mb-2 font-medium">
                    {service.category}
                  </p>
                  <h3 className="card-text text-2xl lg:text-3xl font-light text-white font-display mb-3">
                    {service.title}
                  </h3>
                  <p className="card-text text-sm text-white/70 font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="card-text flex items-center gap-2 text-white/90 text-sm font-medium group-hover:gap-4 transition-all duration-300">
                    Découvrir l&apos;expérience
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Bloc titre animé */}
            <div className="relative aspect-[4/5] rounded-lg bg-[#050505] border border-white/5 flex flex-col justify-center items-center p-6">
              <div className="text-center overflow-hidden">
                <div className="overflow-hidden">
                  <span
                    ref={onVousRef}
                    className="block text-4xl sm:text-5xl lg:text-6xl font-light text-[#99ffcc] font-display leading-tight"
                  >
                    ON VOUS
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span
                    ref={emmeneRef}
                    className="block text-4xl sm:text-5xl lg:text-6xl font-light text-[#99ffcc] font-display leading-tight"
                  >
                    EMMÈNE
                  </span>
                </div>
                <p
                  ref={vivezRef}
                  className="mt-6 text-2xl sm:text-3xl text-white font-display italic font-light"
                >
                  Vivez la Riviera
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Véhicules Location */}
      <div ref={vehiclesRef} className="py-16 sm:py-20 bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationVehicles.map((vehicle, i) => (
              <Link
                key={i}
                href="#reservation"
                className="vehicle-card group relative block aspect-[4/5] overflow-hidden rounded-lg shadow-xl shadow-[#99ffcc]/5 hover:shadow-[#99ffcc]/15 transition-shadow duration-500"
              >
                <div className="absolute inset-0 will-change-transform">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105 p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                </div>

                <div className="relative h-full flex flex-col justify-end p-6 z-10">
                  <p className="card-text text-[10px] uppercase tracking-[0.2em] text-[#99ffcc] mb-2 font-medium">
                    {vehicle.category}
                  </p>
                  <h3 className="card-text text-2xl lg:text-3xl font-light text-white font-display mb-3">
                    {vehicle.title}
                  </h3>
                  <p className="card-text text-sm text-white/70 font-light leading-relaxed mb-4">
                    {vehicle.description}
                  </p>
                  <div className="card-text flex items-center gap-2 text-white/90 text-sm font-medium group-hover:gap-4 transition-all duration-300">
                    Découvrir
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}

            {/* Titre intégré en bas à droite - occupe 2 colonnes */}
            <div className="lg:col-span-2 flex flex-col justify-center items-end text-right relative">
              <div className="relative text-center w-full">
                <div className="relative inline-block">
                  <span
                    ref={titleEnRef}
                    className="block text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold font-display leading-none bg-gradient-to-r from-[#99ffcc] via-[#0d9488] to-[#99ffcc] bg-clip-text text-transparent"
                  >
                    EN
                  </span>
                  <span
                    ref={titleLocationRef}
                    className="block text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold font-display leading-none bg-gradient-to-r from-[#99ffcc] via-[#0d9488] to-[#99ffcc] bg-clip-text text-transparent"
                    style={{ transformOrigin: 'center bottom' }}
                  >
                    LOCATION
                  </span>
                </div>
              </div>
              <p ref={subtitleRef} className="text-base sm:text-lg text-white/60 mt-4 font-light w-full text-right">
                Location de véhicules de prestige sans chauffeur sur la Côte d&apos;Azur
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
