"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const ROWS = [
  { label: "Prix Fixe Garanti", us: "Oui, garanti", others: "Variable" },
  { label: "Paiement Sécurisé", us: "SumUp / Lien", others: "Incertain" },
  { label: "Attente Gratuite (15min)", us: "Incluse", others: "Payante" },
  { label: "Véhicules Premium", us: "Berline & Van", others: "Aléatoire" },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Le Choix de l&apos;Excellence
          </h2>
          <p className="text-foreground/80 font-light">
            Pourquoi nos clients ne reviennent pas en arrière.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl overflow-hidden border border-primary/20 shadow-2xl bg-background/90 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="hidden md:block bg-foreground/[0.03] p-6 border-r border-primary/10">
              <div className="h-16 flex items-center text-foreground/60 font-medium text-sm uppercase tracking-wider">
                Services
              </div>
              {ROWS.map((r) => (
                <div
                  key={r.label}
                  className="h-16 flex items-center text-foreground/80 font-light border-t border-primary/10"
                >
                  {r.label}
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 border-r border-primary/10 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              <div className="h-16 flex items-center text-primary font-bold text-lg tracking-tight">
                RIVIERA CONCIERGERIE
              </div>
              {ROWS.map((r) => (
                <div
                  key={r.label}
                  className="h-16 flex items-center border-t border-primary/10"
                >
                  <span className="md:hidden text-foreground/60 text-xs mr-auto">
                    {r.label}
                  </span>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary fill-primary/20" strokeWidth={1.5} />
                    <span>{r.us}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background/50 p-6 text-foreground/50">
              <div className="h-16 flex items-center font-medium">Autres Apps / Taxis</div>
              {ROWS.map((r, i) => (
                <div
                  key={r.label}
                  className="h-16 flex items-center border-t border-primary/10 group"
                >
                  <span className="md:hidden text-foreground/60 text-xs mr-auto">
                    {r.label}
                  </span>
                  <div className="flex items-center gap-2 group-hover:text-red-400/80 transition-colors">
                    {i === 0 || i === 2 ? (
                      <XCircle className="w-5 h-5" strokeWidth={1.5} />
                    ) : (
                      <AlertCircle className="w-5 h-5" strokeWidth={1.5} />
                    )}
                    <span>{r.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
