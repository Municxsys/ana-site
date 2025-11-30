"use client";

import { motion } from "framer-motion";
import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full
        flex items-center justify-center
        bg-gradient-to-b from-green-serenity via-green-harmony/40 to-green-vitality
        px-4
      "
    >
      {/* ganz leichtes Overlay für weichen, soften Look */}
      <div className="absolute inset-0 bg-neutral-sand/10" />

      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Nur für Screenreader – visuell macht das Logo die Überschrift */}
        <h1 className="sr-only">
          Ana Casarotti – Maniküre, Pediküre &amp; Medizinische Fußpflege in Köln
        </h1>

        {/* Logo wie in deiner PNG-Vorlage */}
        <Logo />

        {/* Button wie im Design: heller, runder CTA */}
        <motion.a
          href="/kontakt"
          className="
            mt-2 inline-flex items-center justify-center
            rounded-full px-10 py-3
            text-sm sm:text-base font-semibold
            bg-neutral-sand text-green-vitality
            shadow-card hover:bg-neutral-sand/90 transition
          "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        >
          Jetzt Termin vereinbaren
        </motion.a>

        {/* Optional: kleiner Zusatz unter dem Button */}
        <motion.p
          className="mt-3 text-xs sm:text-sm text-neutral-sand/90 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          Mobile medizinische Fußpflege, Maniküre &amp; Pediküre in Köln und Umgebung.
        </motion.p>
      </motion.div>
    </section>
  );
}
