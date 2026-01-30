"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, User, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider text-primary bg-primary/15 border border-primary/25 mb-4">
            Nous contacter
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-foreground tracking-tight mb-3">
            Une question ? Écrivez-nous
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto">
            Réponse sous 24h. Pour une réservation immédiate, utilisez le formulaire de réservation ou appelez-nous.
          </p>
        </motion.div>

        <motion.form
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-nom" className="block text-xs font-medium text-foreground/90 mb-1.5">
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" strokeWidth={1.5} />
                <input
                  id="contact-nom"
                  type="text"
                  name="nom"
                  required
                  placeholder="Votre nom"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-foreground/5 border border-foreground/15 text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-foreground/90 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" strokeWidth={1.5} />
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="vous@exemple.fr"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-foreground/5 border border-foreground/15 text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="contact-tel" className="block text-xs font-medium text-foreground/90 mb-1.5">
              Téléphone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" strokeWidth={1.5} />
              <input
                id="contact-tel"
                type="tel"
                name="tel"
                placeholder="06 12 34 56 78"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-foreground/5 border border-foreground/15 text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-colors"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-xs font-medium text-foreground/90 mb-1.5">
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-foreground/40" strokeWidth={1.5} />
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="Décrivez votre demande : trajet, date, nombre de passagers..."
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-foreground/5 border border-foreground/15 text-foreground text-sm placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-colors resize-none"
              />
            </div>
          </div>
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-background font-medium py-3 rounded-lg text-sm transition-colors shadow-md shadow-primary/20"
            >
              <Send className="w-4 h-4" strokeWidth={1.5} />
              Envoyer le message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
