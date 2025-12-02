"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function UberMichContent() {
  return (
    <section className="relative w-full bg-hero-radial overflow-hidden pt-20">

      {/* ─────────────────────────────────── */}
      {/* OBERER BEREICH: FULL-WIDTH UNIFORM  */}
      {/* ─────────────────────────────────── */}
      <div className="relative w-full h-[42vh] sm:h-[48vh] md:h-[52vh]">
        <Image
          src="/images/hero-ana-uniform.jpg"
          alt="Ana Casarotti Berufsbild"
          fill
          priority
          className="object-cover"
        />

        {/* Sehr leichte Abdunklung – genau wie im Beispiel */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* ─────────────────────────────────── */}
      {/* UNTERER BEREICH: GRÜNER GRADIENT    */}
      {/* ─────────────────────────────────── */}
      <div className="relative w-full px-4 pb-24">

        {/* Portrait Kreis – EXAKTE Position wie im Beispiel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            absolute left-1/2 -translate-x-1/2 
            -top-24
            h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56
            rounded-full overflow-hidden shadow-card
            ring-4 ring-white/40
            z-20
          "
        >
          <Image
            src="/images/ana-portrait.jpg"
            alt="Portrait Ana Casarotti"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* CONTENTBLOCK */}
        <div
          className="
            relative z-10 max-w-3xl mx-auto 
            pt-40 sm:pt-48 md:pt-56
            text-center
          "
        >
          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              font-serif text-[42px] sm:text-5xl md:text-[64px] 
              text-[var(--ana-cream)] leading-tight
            "
          >
            Über mich
          </motion.h1>

          {/* Text Absatz 1 */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              mt-6 text-base sm:text-lg
              text-[var(--ana-cream)]/90
              leading-relaxed
            "
          >
            Mein Name ist Ana Casarotti und ich bin mobile medizinische
            Fußpflegerin aus Leidenschaft. Meine Arbeit verbindet für mich
            Präzision, Wohlbefinden und Fürsorge – denn gepflegte Füße bedeuten
            nicht nur ein schönes Gefühl, sondern auch Lebensqualität.
          </motion.p>

          {/* Text Absatz 2 */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="
              mt-5 text-base sm:text-lg
              text-[var(--ana-cream)]/85
              leading-relaxed
            "
          >
            Ich komme zu Ihnen nach Hause, damit Sie Ihre Behandlung in einer
            vertrauten und entspannten Umgebung erleben können. Besonders für
            ältere Menschen, Diabetiker:innen oder Kund:innen mit
            Bewegungseinschränkungen ist dieser Service ideal.
          </motion.p>

          {/* Text Absatz 3 */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="
              mt-5 text-base sm:text-lg
              text-[var(--ana-cream)]/85
              leading-relaxed
            "
          >
            Hygienestandards, hochwertige Produkte und eine ruhige, angenehme
            Atmosphäre stehen bei mir im Mittelpunkt. Jeder Termin wird
            individuell auf Ihre Bedürfnisse abgestimmt.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/kontakt"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.33 }}
            className="
              mt-10 inline-flex justify-center items-center
              px-10 py-3 rounded-full
              bg-[var(--ana-cream)]
              text-[var(--ana-green-dark)] font-semibold
              shadow-card hover:bg-[var(--ana-cream)]/90 
              transition
              text-sm sm:text-base
            "
          >
            Termin vereinbaren
          </motion.a>
        </div>
      </div>
    </section>
  );
          }
