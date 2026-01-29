"use client";

import { motion } from "framer-motion";
import { Star, Tag, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui";

const cards = [
  {
    icon: Star,
    title: "Prestige",
    text: "Présence stratégique de Mandelieu à Monaco. Transferts VIP vers les ports de la Napoule, Beaulieu et le Port Hercule.",
  },
  {
    icon: Tag,
    title: "Transparence",
    text: "Tarification fixe garantie. Votre tarif vers Monaco ou Nice est validé à la commande, sans supplément lié au trafic.",
  },
  {
    icon: ShieldCheck,
    title: "Sérénité",
    text: "Paiement SumUp sécurisé. Validation instantanée par SMS, que vous soyez à bord ou en escale sur votre yacht.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-background relative z-20" data-section="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-primary">
            Pourquoi Choisir Riviera Conciergerie ?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full opacity-70" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-8 border-primary/20 hover:border-primary/40 transition-all duration-500 h-full flex flex-col group">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 border border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                  <item.icon
                    className="w-7 h-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed font-light flex-1">
                  {item.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
