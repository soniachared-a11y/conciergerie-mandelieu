"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    initials: "SL",
    name: "Sophie L.",
    role: "CEO Tech",
    text: "Service impeccable. Le WiFi à bord est un vrai plus pour travailler pendant mes trajets Cannes–Monaco.",
  },
  {
    initials: "MD",
    name: "Marc D.",
    role: "Touriste",
    text: "Visite de la Riviera inoubliable. Le chauffeur connaissait tous les ports et l'histoire de la Côte d'Azur.",
  },
  {
    initials: "TG",
    name: "Thomas G.",
    role: "Entrepreneur",
    text: "Facture instantanée et TVA récupérable. Service très pro, efficace pour le business à Sophia Antipolis.",
  },
];

export default function TestimonialsCarousel() {
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-background border-t border-primary/10 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30 pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-4">
          Ce que nos Clients Disent
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full opacity-70 mb-6" />
        <p className="text-foreground/80 font-light max-w-2xl mx-auto">
          La satisfaction de nos passagers est notre meilleure publicité.
        </p>
      </motion.div>

      <div className="relative w-full mask-linear-fade">
        <div className="flex gap-8 w-max pause-on-hover animate-scroll-infinite-slow">
          {duplicated.map((t, i) => (
            <div
              key={`${t.initials}-${i}`}
              className="w-[350px] md:w-[420px] shrink-0 p-8 rounded-3xl border border-primary/20 bg-background/80 backdrop-blur-md flex flex-col gap-5 group transition-transform duration-500 hover:scale-[1.02] hover:border-primary/40"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-primary/60 p-[2px]">
                  <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-foreground font-bold text-sm">
                    {t.initials}
                  </div>
                </div>
                <div>
                  <div className="text-foreground font-semibold">{t.name}</div>
                  <div className="text-xs text-primary uppercase tracking-wide">
                    {t.role}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 font-light leading-relaxed italic flex-1">
                &quot;{t.text}&quot;
              </p>
              <div className="flex gap-1 text-primary mt-auto">
                {[1, 2, 3, 4, 5].map((_) => (
                  <Star key={_} className="w-4 h-4 fill-current" strokeWidth={1.5} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
