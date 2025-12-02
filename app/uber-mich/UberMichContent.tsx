"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UberMichContent() {
  return (
    <section className="relative w-full min-h-screen bg-hero-radial pt-24">
      {/* OBERER BLOCK – Uniform-Hintergrund */}
      <div className="relative w-full max-w-5xl mx-auto h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden">
        <Image
          src="/images/hero-ana-uniform.jpg"
          alt="Berufskleidung – Ana Casarotti"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/0" />
      </div>

      {/* GRÜNER BEREICH + PORTRAIT + TEXT */}
      <div className="relative w-full max-w-5xl mx-auto px-4 pb-24">
        {/* Portrait-Kreis, zentriert mit Flexbox */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              -mt-20 sm:-mt-24
              h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56
              rounded-full overflow-hidden shadow-card
              ring-4 ring-white/40
            "
          >
            <Image
              src="/images/ana-portrait.jpg"
              alt="Portrait von Ana Casarotti"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* TEXTBLOCK – wie auf deinem Beispiel */}
        <div className="mt-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              font-serif
              text-[40px] sm:text-[48px] md:text-[56px]
              leading-tight
              text-[var(--ana-cream)]
            "
          >
            Über mich
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/90"
          >
            Mein Name ist Ana Casarotti und ich bin mobile medizinische
            Fußpflegerin aus Leidenschaft. Meine Arbeit verbindet für mich
            Präzision, Wohlbefinden und Fürsorge – denn gepflegte Füße
            bedeuten nicht nur ein schönes Gefühl, sondern auch
            Lebensqualität.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/85"
          >
            Ich komme zu Ihnen nach Hause, damit Sie Ihre Behandlung in einer
            vertrauten und entspannten Umgebung erleben können. Besonders für
            ältere Menschen, Diabetiker:innen oder Kund:innen mit
            Bewegungseinschränkungen ist dieser Service ideal.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/85"
          >
            Hygienestandards, hochwertige Produkte und eine ruhige, angenehme
            Atmosphäre stehen bei mir im Mittelpunkt. Jeder Termin wird
            individuell auf Ihre Bedürfnisse abgestimmt.
          </motion.p>

          <motion.a
            href="/kontakt"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
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
