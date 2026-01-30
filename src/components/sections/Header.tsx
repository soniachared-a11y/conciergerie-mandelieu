"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#", label: "Accueil" },
  { href: "#vehicules", label: "Nos Véhicules" },
  { href: "#fonctionnement", label: "Comment Ça Marche" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b ${
          scrolled
            ? "bg-background/85 shadow-lg border-foreground/10"
            : "bg-background/60 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <Link
            href="#"
            className="group flex items-center shrink-0 min-h-[2.5rem] transition-all duration-300"
          >
            <span className="text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors leading-none">
              RIVIERA CONCIERGERIE
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            <nav className="flex items-center gap-8 bg-background/80 backdrop-blur-md border border-primary/20 rounded-full px-8 py-3 shadow-lg h-12 box-border">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors leading-tight whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="tel:0132345465"
              title="01.32.34.54.65"
              aria-label="Appeler le 01.32.34.54.65"
              className="relative flex items-center justify-center shrink-0 w-10 h-10 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary rounded-lg transition-all duration-300"
            >
              <span className="absolute inset-0 rounded-lg bg-primary/30 opacity-75 animate-ping" aria-hidden />
              <Phone className="relative w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center shrink-0 w-10 h-10 text-foreground hover:text-primary transition-colors"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex items-center justify-center"
          >
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-foreground/80 hover:text-foreground bg-background/80 p-2 rounded-full border border-primary/20 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <div className="w-full max-w-md px-6 flex flex-col items-center">
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full mb-10" />
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full max-w-xs mb-4 rounded-2xl bg-background/80 hover:bg-background border border-primary/20 hover:border-primary/40 backdrop-blur-md py-4 px-6 text-center transition-all duration-300"
                >
                  <span className="text-lg font-medium text-foreground">
                    {link.label}
                  </span>
                </Link>
              ))}
              <a
                href="tel:0132345465"
                onClick={() => setMobileOpen(false)}
                className="w-full max-w-xs mt-4 rounded-2xl bg-primary hover:bg-primary/90 border border-primary/50 backdrop-blur-md py-4 px-6 text-center transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-background" strokeWidth={1.5} />
                <span className="text-lg font-semibold text-background">
                  01.32.34.54.65
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
