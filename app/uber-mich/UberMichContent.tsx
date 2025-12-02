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
        {/* Portrait zentriert */}
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease:
        "easeOut" }}
        className="w-full flex justify-center
        -mt-20" 
>
  <div className="h-40 w-40 rounded-full overflow-hidden shadow-card ring-4 ring-white/30">
    <Image
      src="/images/ana-portrait.jpg"
      alt="Ana Casarotti Portrait"
      fill
      className="object-cover"
      priority
    />
  </div>
</motion.div>

        {/* Textblock */}
        <div
          className="
            relative z-10 max-w-3xl mx-auto
            pt-40 sm:pt-48 md:pt-56
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
