"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Send } from "lucide-react";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 bg-background relative overflow-hidden"
      data-section="faq"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold uppercase tracking-wider text-primary">
              Support
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-foreground/80 font-light">
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
                  className="flex items-center justify-between w-full py-6 text-left focus:outline-none group"
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
                      <div className="pb-6 text-foreground/80 font-light leading-relaxed pr-8">
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
          className="relative w-full bg-primary/5 rounded-3xl border border-primary/20 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(153,255,204,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(153,255,204,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="relative z-10 p-8">
            <h3 className="text-xl font-semibold text-foreground tracking-tight mb-6">
              Réserver une course
            </h3>
            <form
              className="space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="res-nom" className="block text-sm font-medium text-foreground/90 mb-1.5">
                  Nom
                </label>
                <input
                  id="res-nom"
                  type="text"
                  name="nom"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="res-numero" className="block text-sm font-medium text-foreground/90 mb-1.5">
                  Numéro de téléphone
                </label>
                <input
                  id="res-numero"
                  type="tel"
                  name="numero"
                  required
                  placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="res-depart" className="block text-sm font-medium text-foreground/90 mb-1.5">
                  Lieu de départ
                </label>
                <input
                  id="res-depart"
                  type="text"
                  name="depart"
                  required
                  placeholder="Adresse ou lieu (ex. Mandelieu, Cannes...)"
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="res-arrivee" className="block text-sm font-medium text-foreground/90 mb-1.5">
                  Lieu d&apos;arrivée
                </label>
                <input
                  id="res-arrivee"
                  type="text"
                  name="arrivee"
                  required
                  placeholder="Adresse ou lieu (ex. Nice, Monaco...)"
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="res-date" className="block text-sm font-medium text-foreground/90 mb-1.5">
                    Date
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    name="date"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/80 border border-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="res-heure" className="block text-sm font-medium text-foreground/90 mb-1.5">
                    Heure
                  </label>
                  <input
                    id="res-heure"
                    type="time"
                    name="heure"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background/80 border border-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="res-especes" className="block text-sm font-medium text-foreground/90 mb-1.5">
                  Paiement
                </label>
                <select
                  id="res-especes"
                  name="paiement"
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-colors"
                >
                  <option value="lien">Lien SumUp (CB)</option>
                  <option value="especes">Espèces à bord</option>
                </select>
              </div>
              <div>
                <label htmlFor="res-instructions" className="block text-sm font-medium text-foreground/90 mb-1.5">
                  Instructions supplémentaires <span className="text-foreground/50 font-normal">(facultatif)</span>
                </label>
                <textarea
                  id="res-instructions"
                  name="instructions"
                  rows={3}
                  placeholder="Bagages, nombre de passagers, animaux, etc."
                  className="w-full px-4 py-3 rounded-lg bg-background/80 border border-primary/20 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background font-semibold py-3.5 rounded-lg transition-colors shadow-lg shadow-primary/20"
              >
                <Send className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                Envoyer la demande
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
