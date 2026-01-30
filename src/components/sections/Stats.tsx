"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { target: 5000, label: "Courses Réalisées +", suffix: "+" },
  { target: 98, label: "% Ponctualité", suffix: "%" },
  { target: 15, label: "Min Attente Moy.", suffix: "" },
  { target: 100, label: "% Prix Fixe", suffix: "%" },
];

function AnimatedCounter({
  target,
  suffix = "",
  trigger,
}: {
  target: number;
  suffix?: string;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);
  const duration = 2000;
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    startRef.current = null;
    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-12 border-y border-primary/20 bg-background relative z-20 overflow-hidden"
      data-section="stats"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center text-center"
            >
              <span className="text-4xl md:text-5xl font-light font-display text-primary/95 tracking-tight tabular-nums">
                <AnimatedCounter
                  target={s.target}
                  suffix={s.suffix}
                  trigger={inView}
                />
              </span>
              <span className="text-xs md:text-sm text-foreground/70 mt-2 uppercase tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
