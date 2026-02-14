"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CheminVersExcellence() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [80, 0, 0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-[100vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
        <div className="relative w-full max-w-[400px] h-full bg-foreground/5 border-x border-primary/20 shadow-2xl z-10 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/asphalt-dark.png')",
            }}
          />
          {/* Ligne centrale qui défile sur toute la hauteur (transform pour boucle continue) */}
          <div className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none">
            <div
              className="road-line w-1 shrink-0"
              style={{
                minHeight: "calc(100% + 100px)",
                backgroundImage:
                  "linear-gradient(to bottom, transparent 50%, rgba(153,255,204,0.6) 50%)",
                backgroundSize: "1px 100px",
                backgroundRepeat: "repeat-y",
              }}
            />
          </div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background/80 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background/80 to-transparent" />
        </div>

        <div className="absolute z-20 drop-shadow-[0_30px_30px_rgba(0,0,0,0.9)] scale-110 md:scale-125">
          <img
            src="/assets/images/tesla-prestige.png"
            alt="Tesla Model 3 — véhicule prestige Call Riviera"
            className="object-contain brightness-75 contrast-125 grayscale-[20%] w-24 md:w-32 h-auto"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none z-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 pointer-events-none z-30" />
      </div>

      <motion.div
        className="absolute top-[25%] left-0 right-0 w-full text-center z-40 pointer-events-none px-6"
        style={{ y: titleY, opacity: titleOpacity }}
      >
        <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight drop-shadow-lg font-display">
          Le Chemin Vers l&apos;Excellence.
        </h2>
      </motion.div>
      <div className="absolute top-[70%] left-0 right-0 w-full text-center z-40 pointer-events-none px-6">
        <p className="text-lg md:text-2xl text-foreground/90 font-light md:inline-block md:px-8 md:py-3 md:rounded-full md:bg-background/80 md:backdrop-blur-md md:border md:border-primary/20 md:shadow-2xl">
          Détendez-vous.{" "}
          <span className="font-display text-primary font-semibold tracking-tight">Call Riviera</span>{" "}
          s&apos;occupe de tout.
        </p>
      </div>
    </section>
  );
}
