"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#", label: "Accueil" },
  { href: "#vehicules", label: "Nos Véhicules" },
  { href: "#fonctionnement", label: "Comment Ça Marche" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-background/60 backdrop-blur-md border-b border-transparent">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="#"
            className="group flex items-center px-2 py-1 transition-all duration-300"
          >
            <span className="text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">
              RIVIERA CONCIERGERIE
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 bg-background/80 backdrop-blur-md border border-primary/20 rounded-full px-8 py-3 shadow-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:0132345465"
            className="hidden md:flex items-center gap-2.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-primary px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
          >
            <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
            <span className="tracking-tight">01.32.34.54.65</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
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
