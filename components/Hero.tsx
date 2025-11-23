"use client";

import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center
        bg-gradient-to-b from-neutral-sand to-green-vitality
        md:bg-gradient-to-br md:from-green-serenity md:via-green-harmony md:to-green-vitality
        text-ink
      "
    >
      {/* leichtes Overlay für besseren Kontrast */}
      <div className="absolute inset-0 bg-neutral-sand/10 md:bg-transparent" />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 md:px-8 flex flex-col md:flex-row md:items-center gap-10"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Linke Seite: Logo + Text */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-3 rounded-full bg-neutral-sand/70 px-4 py-2 shadow-soft mb-6">
            <div className="h-8 w-8 rounded-full bg-green-harmony/90 flex items-center justify-center">
              <Logo />
            </div>
            <p className="text-xs sm:text-sm font-medium text-green-harmony">
              Mobile medizinische Fußpflege &amp; Kosmetik in Köln und Umgebung
            </p>
          </div>

          <motion.h1
            className="
              font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              text-green-dark leading-tight
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
          >
            Sanfte Fußpflege
            <br />
            mit Herz &amp; Fachkompetenz.
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg text-green-harmony max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          >
            Ich komme als mobile Fußpflegerin zu Ihnen nach Hause in Köln und
            Umgebung – für gesunde, gepflegte Füße und echte Wohlfühlmomente.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
          > 
           <a
  href="#kontakt"
  className="
    inline-flex items-center justify-center
    rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold
    bg-green-harmony text-neutral-sand shadow-soft
    hover:bg-green-vitality transition
  "
>
  Termin anfragen
</a>
             
            <a
              href="https://wa.me/4915755598937"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-sand md:text-base underline underline-offset-4 decoration-neutral-sand/70 hover:decoration-neutral-sand"
            >
              Oder per WhatsApp Kontakt aufnehmen
            </a>
          </motion.div>

          <motion.p
            className="mt-4 text-xs sm:text-sm text-neutral-sand/90 max-w-md"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          >
            Hausbesuche möglich · Besonders geeignet für Diabetiker:innen ·
            Sorgfältige, hygienische Behandlung.
          </motion.p>
        </div>

        {/* Rechte Seite: kleine „Karte“ im Flyer-Stil */}
        <motion.div
          className="
            flex-1 max-w-md mx-auto md:mx-0
            rounded-3xl bg-neutral-sand/80 backdrop-blur
            shadow-card p-6 sm:p-8 border border-neutral-sand/70
          "
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-serif text-xl sm:text-2xl text-green-vitality mb-4">
            Medizinische Fußpflege &amp; mehr
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-green-harmony">
            <li>• Medizinische Fußpflege und Behandlung von Problemnägeln</li>
            <li>• Wellness-Pediküre &amp; Maniküre</li>
            <li>• Diabetische Fußpflege</li>
            <li>• B/S-Spange bei eingewachsenen Nägeln</li>
            <li>• Hausbesuche in Köln &amp; Umgebung</li>
          </ul>

          <div className="mt-6 rounded-2xl bg-green-harmony text-neutral-sand px-4 py-3 text-sm sm:text-base font-medium">
            Jetzt Termin vereinbaren und Ihren Füßen eine wohltuende Auszeit
            schenken.
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
