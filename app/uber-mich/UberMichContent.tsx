"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UberMichContent() {
  return (
    <section className="relative w-full min-h-screen bg-hero-radial">
      {/* ── Header: Uniformbild (oben) ─────────────────────────────── */}
      <div className="relative h-[38vh] md:h-[44vh]">
        <Image
          src="/images/hero-ana-uniform.jpg"
          alt="Berufskleidung – Ana Casarotti"
          fill
          className="object-cover"
          priority
        />
        {/* dezentes Vignette/Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/0" />
      </div>

      {/* ── Content: grüner Bereich mit überlappendem Portrait ─────── */}
      <div className="relative px-4 pb-24">
        {/* Portrait-Kreis, überlappt die Trennkante */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: -32, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="
            absolute left-1/2 -translate-x-1/2 -top-16
            h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56
            rounded-full shadow-card overflow-hidden ring-4 ring-white/30
          "
          aria-hidden
        >
          <Image
            src="/images/ana-portrait.jpg"
            alt="Portrait von Ana Casarotti"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Textblock */}
        <div
          className="
            relative z-10 max-w-3xl mx-auto
            pt-28 sm:pt-32 md:pt-36
            text-center
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="
              font-serif text-[44px] sm:text-5xl md:text-[64px]
              leading-tight text-[var(--ana-cream)]
            "
          >
            Über mich
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/90"
          >
            Mein Name ist Ana Casarotti und ich bin mobile medizinische
            Fußpflegerin aus Leidenschaft. Meine Arbeit verbindet für mich
            Präzision, Wohlbefinden und Fürsorge – denn gepflegte Füße
            bedeuten nicht nur ein schönes Gefühl, sondern auch Lebensqualität.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/85"
          >
            Ich komme zu Ihnen nach Hause, damit Sie Ihre Behandlung in einer
            vertrauten und entspannten Umgebung erleben können. Besonders für
            ältere Menschen, Diabetiker:innen oder Kund:innen mit
            Bewegungseinschränkungen ist dieser Service ideal.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/85"
          >
            Hygienestandards, hochwertige Produkte und eine ruhige, angenehme
            Atmosphäre stehen bei mir im Mittelpunkt. Jeder Termin wird
            individuell auf Ihre Bedürfnisse abgestimmt.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="/kontakt"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.32 }}
            className="
              mt-8 inline-flex items-center justify-center
              rounded-full px-10 py-3
              text-sm sm:text-base font-semibold
              bg-[var(--ana-cream)] text-[var(--ana-green-dark)]
              shadow-card hover:bg-[var(--ana-cream)]/90 transition
            "
          >
            Termin vereinbaren
          </motion.a>
        </div>
      </div>
    </section>
  );
}
