"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  User,
  MapPin,
  Clock,
  Route,
  ArrowRight,
  Navigation,
  Wifi,
} from "lucide-react";

export default function BentoFeatures() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.6, 1, 1]);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Votre course en direct
          </h2>
          <p className="text-foreground/80 font-light">
            Dashboard passager — comme si vous étiez à bord.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto rounded-3xl border border-primary/20 bg-background/95 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5"
          style={{ y, opacity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {/* Barre supérieure : heure, date, statut */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-b border-primary/10 bg-foreground/[0.03]">
            <div className="flex items-center gap-6">
              <div>
                <p className="text-3xl font-semibold text-foreground tabular-nums tracking-tight">
                  14:27
                </p>
                <p className="text-sm text-foreground/60 flex items-center gap-2 mt-0.5">
                  <span>Mardi 15 mars 2024</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary font-medium">Riviera Conciergerie</span>
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-primary/20">
                <Wifi className="w-4 h-4 text-primary" strokeWidth={1.5} />
                <span className="text-sm text-foreground/90">Connecté</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                <User className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Nom du passager</p>
                <p className="text-xs text-foreground/60">Sophie L.</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 p-6">
            {/* Carte / itinéraire (grande zone) */}
            <div className="lg:col-span-2 relative h-64 lg:h-72 rounded-2xl overflow-hidden border border-primary/20 bg-foreground/5">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                alt="Itinéraire"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-primary/20">
                  <Navigation className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-foreground">Navigation</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="rounded-xl p-4 bg-background/90 backdrop-blur-md border border-primary/20">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    <span className="text-sm font-medium">
                      Dans 800 m, tournez à droite — Promenade des Anglais
                    </span>
                  </div>
                  <p className="text-xs text-foreground/70 pl-6">
                    Puis continuez 2,3 km et gardez la gauche
                  </p>
                </div>
              </div>
            </div>

            {/* Bloc arrivée : adresse, temps restant, distance, heure */}
            <div className="space-y-4">
              <div className="rounded-2xl p-5 border border-primary/20 bg-background/80 backdrop-blur-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground/60 uppercase tracking-wider mb-0.5">
                      Adresse d&apos;arrivée
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      Casino de Monte-Carlo
                    </p>
                    <p className="text-sm text-foreground/70">
                      Place du Casino, 98000 Monaco
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-primary/10 flex items-end justify-between">
                  <div>
                    <p className="text-2xl lg:text-3xl font-semibold text-primary tabular-nums">
                      14:35
                    </p>
                    <p className="text-xs text-foreground/60">Heure d&apos;arrivée</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl p-4 border border-primary/20 bg-background/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-foreground tabular-nums">8 min</p>
                    <p className="text-xs text-foreground/60">Temps restant</p>
                  </div>
                </div>
                <div className="rounded-xl p-4 border border-primary/20 bg-background/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Route className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-foreground tabular-nums">3,2 km</p>
                    <p className="text-xs text-foreground/60">Distance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compteur / statut course */}
          <div className="px-6 pb-6">
            <div className="rounded-xl px-5 py-4 border border-primary/20 bg-primary/5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-lg font-bold text-primary tabular-nums">08</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Temps restant</p>
                  <p className="text-xs text-foreground/60">Mise à jour en direct</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span className="flex items-center gap-1.5 text-foreground/80">
                  <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="tabular-nums">14:35</span> arrivée
                </span>
                <span className="flex items-center gap-1.5 text-foreground/80">
                  <Route className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="tabular-nums">3,2</span> km
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
