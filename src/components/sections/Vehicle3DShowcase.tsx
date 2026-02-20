"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Chargement dynamique du composant 3D pour optimiser le bundle
const VehicleShowcase3D = dynamic(
  () => import("@/components/3d/VehicleShowcase3D"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-foreground/60 text-sm font-light">Chargement de l&apos;expérience 3D...</p>
        </div>
      </div>
    ),
  }
);

export default function Vehicle3DShowcaseSection() {
  return (
    <section
      className="relative py-24 bg-background overflow-hidden border-y border-primary/10"
      data-section="vehicle-3d-showcase"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* En-tête de section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="inline-block font-display text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            Expérience Immersive
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-light text-foreground tracking-tight mb-6">
            Découvrez Notre Flotte en <span className="text-primary">3D</span>
          </h2>
          <p className="text-foreground/60 text-base lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Une expérience interactive pour explorer nos véhicules de prestige.
            Faites pivoter, zoomez et admirez chaque détail de nos SUV haut de gamme.
          </p>
        </motion.div>

        {/* Container 3D */}
        <motion.div
          className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center bg-background">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                  <p className="text-foreground/60 text-sm font-light">Chargement...</p>
                </div>
              </div>
            }
          >
            <VehicleShowcase3D />
          </Suspense>

          {/* Badge interactif */}
          <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-md border border-primary/30 rounded-xl px-4 py-3 shadow-lg">
            <p className="text-foreground text-xs font-medium mb-1">
              🖱️ Interactif
            </p>
            <p className="text-foreground/60 text-[10px] font-light">
              Cliquez et faites glisser pour faire pivoter
            </p>
          </div>

          {/* Badge véhicule */}
          <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-md border border-primary/30 rounded-xl px-4 py-3 shadow-lg">
            <p className="text-primary text-xs font-bold mb-0.5 font-display uppercase tracking-wider">
              SUV Prestige
            </p>
            <p className="text-foreground/60 text-[10px] font-light">
              Modèle de démonstration
            </p>
          </div>
        </motion.div>

        {/* Features 3D */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
        >
          {[
            {
              icon: "🎨",
              title: "Rendu Réaliste",
              description: "Matériaux premium avec reflets et ombres dynamiques",
            },
            {
              icon: "✨",
              title: "Effets Premium",
              description: "Particules lumineuses et environnement HDR",
            },
            {
              icon: "🔄",
              title: "Rotation Automatique",
              description: "Animation fluide à 60 FPS pour une expérience immersive",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-background/50 border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-foreground font-display text-lg font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-foreground/60 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Effet de fond lumineux */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
