"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useLayoutEffect,
  type ReactNode,
} from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

const HEADER_OFFSET_PX = 96; // 6rem pour scroll-padding / ancres

function usePrefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type SmoothScrollProviderProps = { children: ReactNode };

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 1,
      lerp: 0.14,
      syncTouch: true,
      syncTouchLerp: 0.12,
      infinite: false,
      anchors: {
        offset: HEADER_OFFSET_PX,
        duration: 0.9,
      },
      autoRaf: false,
    });

    setLenisInstance(lenis);

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    document.documentElement.classList.add("lenis");

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      setLenisInstance(null);
      document.documentElement.classList.remove("lenis");
    };
  }, [reducedMotion]);

  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
}
