"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Instagram, Facebook, Linkedin, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/10 relative z-20 overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/assets/images/view-point-cote-azur.png"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          sizes="100vw"
          priority={false}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <Link
              href="#"
              className="group flex items-center gap-3 mb-6 w-fit"
            >
              <span className="text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">
                RIVIERA CONCIERGERIE
              </span>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-light">
              Conciergerie de luxe sur la Côte d&apos;Azur. Transport privé
              24/7 de Mandelieu à Monaco. Discrétion et confort inégalés.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div>
              <h4 className="text-foreground font-medium mb-6">
                Liens Rapides
              </h4>
              <ul className="space-y-4 text-sm text-foreground/70 font-light">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="#vehicules" className="hover:text-primary transition-colors">
                    Nos Véhicules
                  </Link>
                </li>
                <li>
                  <Link href="#fonctionnement" className="hover:text-primary transition-colors">
                    Comment Ça Marche
                  </Link>
                </li>
                <li>
                  <Link href="#reservation" className="hover:text-primary transition-colors">
                    Réserver
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-medium mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-foreground/70 font-light">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                  <a href="tel:0132345465" className="hover:text-primary">
                    01.32.34.54.65
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                  <span>Mandelieu à Monaco · Côte d&apos;Azur</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div
          className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/50 text-xs font-light">
            © {new Date().getFullYear()} Riviera Conciergerie. Tous droits réservés.
            <span className="mx-2">·</span>
            Créé par <span className="text-primary/80 font-medium">Pertinentia</span>
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-xs text-foreground/60 font-light">
            <Link href="#" className="hover:text-foreground/80">
              Mentions Légales
            </Link>
            <Link href="#" className="hover:text-foreground/80">
              Confidentialité
            </Link>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-foreground/10 rounded-full border border-primary/20">
              <Lock className="w-3 h-3 text-primary" strokeWidth={1.5} />
              <span>
                Paiement sécurisé par <strong>SumUp</strong>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
