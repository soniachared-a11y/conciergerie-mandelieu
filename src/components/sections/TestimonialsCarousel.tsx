"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    initials: "SL",
    name: "Sophie L.",
    role: "CEO Tech",
    text: "Service impeccable pour mes trajets Cannes–Monaco. Le WiFi à bord est un vrai plus pour travailler.",
    rating: 5,
  },
  {
    initials: "MD",
    name: "Marc D.",
    role: "Touriste",
    text: "Visite de la Riviera inoubliable. Le chauffeur connaissait tous les ports et l'histoire de la région. Petit bémol : trop confortable, j'ai failli m'endormir !",
    rating: 5,
  },
  {
    initials: "TG",
    name: "Thomas G.",
    role: "Entrepreneur",
    text: "Facture instantanée et TVA récupérable. Très efficace pour mes rendez-vous à Sophia Antipolis.",
    rating: 5,
  },
  {
    initials: "CL",
    name: "Claire M.",
    role: "Directrice Événementiel",
    text: "Transferts pour un mariage à Saint-Jean-Cap-Ferrat. Ponctualité au top, sauf une fois 5 min de retard (mais prévenue par SMS).",
    rating: 5,
  },
  {
    initials: "PB",
    name: "Pierre B.",
    role: "Avocat",
    text: "Location Urus pour une semaine. Véhicule nickel, process de réservation fluide.",
    rating: 5,
  },
  {
    initials: "AF",
    name: "Anne F.",
    role: "Consultante",
    text: "Trajet aéroport Nice–Mandelieu en pleine nuit. Accueil souriant, voiture propre. Sérénité totale.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-24 bg-white border-t border-primary/10 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-20 pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 mb-16 relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold text-[#1a1a1a] tracking-tight mb-4">
          Ce que nos Clients Disent
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full opacity-70 mb-6" />
        <p className="text-[#1a1a1a]/80 font-light max-w-2xl mx-auto mb-6">
          La satisfaction de nos passagers est notre meilleure publicité.
        </p>
        {/* Badge Google Reviews */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#f8f9fa] border border-[#dadce0] shadow-sm">
          <span className="flex gap-0.5" aria-hidden>
            <span className="text-[#4285F4] font-bold text-sm">G</span>
            <span className="text-[#EA4335] font-bold text-sm">o</span>
            <span className="text-[#FBBC05] font-bold text-sm">o</span>
            <span className="text-[#4285F4] font-bold text-sm">g</span>
            <span className="text-[#34A853] font-bold text-sm">l</span>
            <span className="text-[#EA4335] font-bold text-sm">e</span>
          </span>
          <span className="text-[#1a1a1a] text-sm font-semibold">4,9/5 sur Google</span>
          <span className="flex gap-0.5 text-[#FBBC05]">
            {[1, 2, 3, 4, 5].map((_) => (
              <Star key={_} className="w-4 h-4 fill-current" strokeWidth={1.5} />
            ))}
          </span>
          <span className="text-[#5f6368] text-sm">• 200+ avis vérifiés</span>
        </div>
      </motion.div>

      <div className="relative w-full mask-linear-fade">
        <div className="flex gap-8 w-max animate-scroll-twice">
          {duplicated.map((t, i) => (
            <div
              key={`${t.initials}-${i}`}
              className="w-[350px] md:w-[420px] shrink-0 p-8 rounded-3xl border border-primary/15 bg-white shadow-sm flex flex-col gap-5 group transition-transform duration-500 hover:scale-[1.02] hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full p-[2px] bg-[conic-gradient(from_0deg,#4285F4,#EA4335,#FBBC05,#34A853,#4285F4)]">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[#5f6368] font-bold text-sm">
                    {t.initials}
                  </div>
                </div>
                <div>
                  <div className="text-[#1a1a1a] font-semibold">{t.name}</div>
                  <div className="text-xs text-primary uppercase tracking-wide">
                    {t.role}
                  </div>
                </div>
              </div>
              <p className="text-[#1a1a1a]/80 font-light leading-relaxed italic flex-1">
                &quot;{t.text}&quot;
              </p>
              <div className="flex gap-1 text-[#FBBC05] mt-auto">
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
