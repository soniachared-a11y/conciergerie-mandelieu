"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, UserCheck, Car, Wifi, Lock } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section className="py-24 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground tracking-tight mb-4">
            L&apos;Excellence en Détail
          </h2>
          <p className="text-foreground/80 font-light">
            Une approche moderne du transport privé sur la Riviera.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
          <motion.div
            className="md:col-span-2 rounded-3xl p-8 relative overflow-hidden border border-primary/20 bg-background/80 hover:border-primary/40 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4 border border-primary/30">
                <Clock className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground tracking-tight mb-2">
                  Disponibilité 24/7
                </h3>
                <p className="text-foreground/80 font-light max-w-sm">
                  De jour comme de nuit, dimanche et jours fériés, nous assurons
                  vos déplacements sans interruption de Mandelieu à Monaco.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:row-span-2 rounded-3xl p-8 relative overflow-hidden border border-primary/30 bg-background/80 hover:border-primary/50 transition-all duration-500 flex flex-col items-center text-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6 border border-primary/30">
              <ShieldCheck className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-foreground tracking-tight mb-2">
              Paiement SumUp Sécurisé
            </h3>
            <p className="text-foreground/80 font-light text-sm mb-8">
              Technologie bancaire de pointe pour protéger vos données.
            </p>
            <div className="relative w-full h-32 flex items-center justify-center overflow-hidden">
              <div className="relative w-48 h-28 max-w-full mx-auto bg-background/80 border border-primary/30 rounded-xl flex flex-col p-4 justify-between">
                <div className="flex justify-between items-start">
                  <div className="w-8 h-6 rounded bg-primary/40" />
                  <Wifi className="w-5 h-5 text-foreground/30 rotate-90" strokeWidth={1.5} />
                </div>
                <div className="flex gap-2 opacity-40 mt-auto">
                  <div className="w-8 h-1.5 bg-foreground rounded-full" />
                  <div className="w-4 h-1.5 bg-foreground rounded-full" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-background border border-primary text-primary rounded-full flex items-center justify-center shadow-xl z-20">
                  <Lock className="w-5 h-5" strokeWidth={2} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-3xl p-6 border border-primary/20 bg-background/80 hover:border-primary/40 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <UserCheck className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-foreground tracking-tight">
              Chauffeurs Agréés
            </h3>
            <p className="text-foreground/70 text-sm font-light mt-1">
              Professionnels VTC vérifiés.
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl p-6 border border-primary/20 bg-background/80 hover:border-primary/40 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Car className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-semibold text-foreground tracking-tight">
              Véhicules Récents
            </h3>
            <p className="text-foreground/70 text-sm font-light mt-1">
              Flotte &lt; 3 ans d&apos;ancienneté.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
