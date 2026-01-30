"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, CreditCard, Check } from "lucide-react";
import Link from "next/link";

const COVERAGE_BG = "/assets/images/coverage-map-bg.png";

export default function PaymentDemo() {
  return (
    <section className="py-24 bg-background/95 border-y border-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium uppercase tracking-wider mb-6 border border-primary/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Technologie SumUp
            </div>
            <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Reçois ton lien,
              <br />
              <span className="text-foreground/60">clique, paie.</span>
            </h2>
            <p className="text-foreground/80 text-lg font-light leading-relaxed mb-8">
              Fini le besoin d&apos;espèces ou la recherche d&apos;un
              distributeur. Recevez un lien SMS sécurisé instantanément. Vous
              validez le paiement sur votre téléphone en quelques secondes.
            </p>
            <ul className="space-y-4 mb-8 text-left inline-block">
              {[
                "Lien chiffré unique par course",
                "Compatible Apple Pay & Google Pay",
                "Reçu automatique par email",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="tel:0132345465"
              className="inline-block bg-primary hover:bg-primary/90 text-background px-6 py-3 rounded-full font-medium transition-colors shadow-md"
            >
              Essayer Maintenant
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative w-[280px] h-[520px] bg-background border-4 border-primary/30 rounded-[2rem] shadow-2xl shadow-primary/10 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="absolute top-0 w-full h-6 bg-background z-20 flex justify-between px-6 items-center pt-2">
                <div className="text-[10px] text-foreground font-bold">9:41</div>
              </div>
              <div className="w-full h-full pt-12 px-6 flex flex-col items-center relative overflow-hidden">
                {/* Fond écran : Côte d'Azur, itinéraire Mandelieu → Monaco */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={COVERAGE_BG}
                    alt="Côte d'Azur — Mandelieu à Monaco"
                    fill
                    className="object-cover object-center"
                    sizes="280px"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-background/85" />
                </div>
                {/* Animation Paiement réussi : icône + texte en séquence */}
                <motion.div
                  className="relative z-10 flex flex-col items-center mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20%" }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.1,
                      },
                    },
                    hidden: {},
                  }}
                >
                  <motion.div
                    className="relative w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      },
                    }}
                  >
                    {/* Cercle qui s'étend (effet succès) */}
                    <motion.span
                      className="absolute inset-0 rounded-lg border-2 border-primary/50 pointer-events-none"
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{
                        scale: [0.8, 1.5, 1.5],
                        opacity: [0.8, 0, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        delay: 0.4,
                        ease: "easeOut",
                      }}
                    />
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-primary/20"
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.1, 1] }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15,
                        ease: [0.22, 0.61, 0.36, 1],
                      }}
                    />
                    <motion.span
                      className="relative z-10 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.35 }}
                    >
                      <Check className="w-8 h-8 text-primary" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                    </motion.span>
                  </motion.div>
                  <motion.h3
                    className="relative z-10 text-foreground text-xl font-semibold mb-1 text-center"
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                    }}
                  >
                    Paiement Réussi
                  </motion.h3>
                  <motion.p
                    className="relative z-10 text-foreground/60 text-sm mb-2 text-center"
                    variants={{
                      hidden: { opacity: 0, y: 6 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    Transaction #83921
                  </motion.p>
                  <motion.div
                    className="relative z-10 text-4xl font-bold text-foreground"
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.35, type: "spring", stiffness: 200 } },
                    }}
                  >
                    55,00 €
                  </motion.div>
                </motion.div>
                <div className="relative z-10 text-foreground/60 text-sm mb-12">
                  Riviera Conciergerie - Course
                </div>
                <div className="relative z-10 w-full py-4 border-t border-primary/20 flex justify-between text-sm">
                  <span className="text-foreground/70">Moyen de paiement</span>
                  <span className="text-foreground flex items-center gap-2">
                    <CreditCard className="w-3 h-3" strokeWidth={1.5} />
                    Visa •••• 4242
                  </span>
                </div>
                <button
                  type="button"
                  className="relative z-10 mt-auto mb-8 w-full bg-primary text-background py-3 rounded-lg font-medium text-sm transition-colors"
                >
                  Télécharger le reçu
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
