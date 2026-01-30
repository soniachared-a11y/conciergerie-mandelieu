"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Send } from "lucide-react";

const FAQ_BG = "/assets/images/footer-fleet.png";

const faqItems = [
  {
    question: "Le prix peut-il changer avec les bouchons ?",
    answer:
      "Non. Le tarif est figé à la commande. Que vous alliez de Mandelieu à Monaco en 45 minutes ou en 1h30 à cause du trafic, vous payez le prix annoncé. Tarification fixe garantie sur toute la Riviera.",
  },
  {
    question: "Comment payer ma course ?",
    answer:
      "Nous privilégions le paiement par lien sécurisé SumUp envoyé par SMS. Validation instantanée, que vous soyez à bord ou en escale. Vous pouvez également payer en espèces à bord.",
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer:
      "Couverture 24/7 de Mandelieu jusqu'à la frontière italienne : Cannes, Nice, Beaulieu-sur-Mer, Cap d'Ail, Monaco, Menton. Transferts aéroports Nice Côte d'Azur et ports (La Napoule, Beaulieu, Port Hercule) assurés.",
  },
  {
    question: "Acceptez-vous les animaux ?",
    answer:
      "Oui, sur demande en gamme Van XL pour garantir le confort de tous les passagers. Précisez-le lors de votre réservation.",
  },
];

const RESA_TITLES = [
  { text: "Réserver une course", className: "text-foreground" },
  { text: "Réserver votre chauffeur", className: "text-primary" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [resaTitleIndex, setResaTitleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setResaTitleIndex((i) => (i + 1) % RESA_TITLES.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="py-12 lg:py-16 relative overflow-hidden"
      data-section="faq"
    >
      {/* Image de fond — flotte prestige */}
      <div className="absolute inset-0 z-0">
        <Image
          src={FAQ_BG}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold uppercase tracking-wider text-primary">
              Support
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Questions Fréquentes
            </h2>
            <p className="text-base text-foreground/80 font-light">
              Tout ce que vous devez savoir sur votre trajet sur la Riviera.
            </p>
          </div>

          <div className="flex flex-col border-t border-primary/20 divide-y divide-primary/20">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer transition-colors duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex items-center justify-between w-full py-4 text-left focus:outline-none group"
                >
                  <span
                    className={`text-lg font-medium transition-colors duration-300 ${
                      openIndex === i
                        ? "text-foreground"
                        : "text-foreground/80 group-hover:text-foreground"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                      openIndex === i
                        ? "bg-primary text-background"
                        : "bg-primary/20 text-foreground/80 group-hover:bg-primary/30"
                    }`}
                  >
                    <Plus
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openIndex === i ? "rotate-45" : ""
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 text-foreground/80 font-light leading-relaxed pr-6">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          id="reservation"
          className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto lg:mr-0 bg-background/60 backdrop-blur-sm rounded-xl border border-primary/20 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative z-10 p-4 lg:p-5">
            <h3 className="text-base font-semibold tracking-tight mb-3 min-h-[1.5rem] flex items-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={resaTitleIndex}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className={RESA_TITLES[resaTitleIndex].className}
                >
                  {RESA_TITLES[resaTitleIndex].text}
                </motion.span>
              </AnimatePresence>
            </h3>
            <form
              className="space-y-2.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="res-nom" className="block text-[11px] font-medium text-foreground/90 mb-0.5">Nom</label>
                  <input
                    id="res-nom"
                    type="text"
                    name="nom"
                    required
                    placeholder="Votre nom"
                    className="w-full px-2.5 py-2 rounded-md bg-background/90 border border-primary/20 text-foreground text-xs placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="res-numero" className="block text-[11px] font-medium text-foreground/90 mb-0.5">Tél</label>
                  <input
                    id="res-numero"
                    type="tel"
                    name="numero"
                    required
                    placeholder="06 12 34 56 78"
                    className="w-full px-2.5 py-2 rounded-md bg-background/90 border border-primary/20 text-foreground text-xs placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-depart" className="block text-[11px] font-medium text-foreground/90 mb-0.5">Départ</label>
                <input
                  id="res-depart"
                  type="text"
                  name="depart"
                  required
                  placeholder="Mandelieu, Cannes..."
                  className="w-full px-2.5 py-2 rounded-md bg-background/90 border border-primary/20 text-foreground text-xs placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="res-arrivee" className="block text-[11px] font-medium text-foreground/90 mb-0.5">Arrivée</label>
                <input
                  id="res-arrivee"
                  type="text"
                  name="arrivee"
                  required
                  placeholder="Nice, Monaco..."
                  className="w-full px-2.5 py-2 rounded-md bg-background/90 border border-primary/20 text-foreground text-xs placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="res-date" className="block text-[11px] font-medium text-foreground/90 mb-0.5">Date</label>
                  <input
                    id="res-date"
                    type="date"
                    name="date"
                    required
                    className="w-full px-2.5 py-2 rounded-md bg-background/90 border border-primary/20 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="res-heure" className="block text-[11px] font-medium text-foreground/90 mb-0.5">Heure</label>
                  <input
                    id="res-heure"
                    type="time"
                    name="heure"
                    required
                    className="w-full px-2.5 py-2 rounded-md bg-background/90 border border-primary/20 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-especes" className="block text-[11px] font-medium text-foreground/90 mb-0.5">Paiement</label>
                <select
                  id="res-especes"
                  name="paiement"
                  className="w-full px-2.5 py-2 rounded-md bg-background/90 border border-primary/20 text-foreground text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                >
                  <option value="lien">Lien SumUp (CB)</option>
                  <option value="especes">Espèces à bord</option>
                </select>
              </div>
              <div>
                <label htmlFor="res-instructions" className="block text-[11px] font-medium text-foreground/90 mb-0.5">Instructions <span className="text-foreground/50">(opt.)</span></label>
                <textarea
                  id="res-instructions"
                  name="instructions"
                  rows={1}
                  placeholder="Bagages, passagers..."
                  className="w-full px-2.5 py-2 rounded-md bg-background/90 border border-primary/20 text-foreground text-xs placeholder:text-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background font-medium py-2.5 rounded-lg text-xs transition-colors shadow-md shadow-primary/20"
              >
                <Send className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                Envoyer la demande
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
