"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const metadata = {
  title: "Über mich",
  description:
    "Erfahren Sie mehr über Ana Casarotti – mobile medizinische Fußpflege, Maniküre und Pediküre in Köln.",
};

export default function UberMichPage() {
  return (
    <section
      className="
        relative w-full min-h-screen
        bg-hero-radial
        px-4 pt-32 pb-24
        flex items-center
      "
    >
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-black/10 z-0" />

      <div
        className="
          relative z-10 w-full max-w-6xl mx-auto
          grid md:grid-cols-2 gap-16 items-center
        "
      >
        {/* TEXTBLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h1
            className="
              heading-serif text-4xl sm:text-5xl font-semibold
              text-[var(--ana-cream)]
            "
          >
            Über mich
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/90">
            Mein Name ist Ana Casarotti und ich bin mobile medizinische
            Fußpflegerin aus Leidenschaft. Meine Arbeit verbindet für mich
            Präzision, Wohlbefinden und Fürsorge – denn gepflegte Füße bedeuten
            nicht nur ein schönes Gefühl, sondern auch Lebensqualität.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/85">
            Ich komme zu Ihnen nach Hause, damit Sie Ihre Behandlung in einer
            vertrauten und entspannten Umgebung erleben können. Besonders für
            ältere Menschen, Diabetiker:innen oder Kund:innen mit
            Bewegungseinschränkungen ist dieser Service ideal.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--ana-cream)]/85">
            Hygienestandards, hochwertige Produkte und eine ruhige, angenehme
            Atmosphäre stehen bei mir im Mittelpunkt. Jeder Termin wird
            individuell auf Ihre Bedürfnisse abgestimmt.
          </p>

          <motion.a
            href="/kontakt"
            className="
              mt-4 inline-flex items-center justify-center
              rounded-full px-10 py-3
              text-sm sm:text-base font-semibold
              bg-[var(--ana-cream)] text-[var(--ana-green-dark)]
              shadow-card hover:bg-[var(--ana-cream)]/90 transition
            "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Termin vereinbaren
          </motion.a>
        </motion.div>

        {/* PORTRAIT */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="
            relative w-full aspect-[4/5] rounded-3xl overflow-hidden
            shadow-card bg-[var(--ana-green-soft)]/30
            max-w-sm mx-auto
          "
        >
          <Image
            src="/images/ana-portrait.jpg"
            alt="Ana Casarotti Portrait"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
