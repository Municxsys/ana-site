"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-hero-radial px-4 pt-24 pb-16 flex items-center"
    >
      {/* leichtes Overlay */}
      <div className="absolute inset-0 bg-black/8 z-0 pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* LINKS – Logo, Wortmarke, Button, Text */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          {/* SEO-H1 nur für Screenreader */}
          <h1 className="sr-only">
            Ana Casarotti – Maniküre, Pediküre &amp; Medizinische Fußpflege in
            Köln und Umgebung
          </h1>

          {/* Icon */}
          <motion.div
            className="relative w-[64px] sm:w-[78px] md:w-[86px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src="/images/ana-logo-icon.png"
              alt="Ana Casarotti Icon"
              width={90}
              height={90}
              priority
              className="w-full h-auto select-none"
            />
          </motion.div>

          {/* Wortmarke + Unterzeile */}
          <motion.div
            className="relative w-[250px] sm:w-[340px] md:w-[400px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/images/ana-logo-wordmark.png"
              alt="Ana Casarotti – Maniküre, Pediküre & Medizinische Fußpflege"
              width={420}
              height={240}
              priority
              className="w-full h-auto select-none"
            />
          </motion.div>

          {/* Button */}
          <motion.a
            href="/kontakt"
            className="mt-3 inline-flex items-center justify-center rounded-full px-10 py-3 text-sm sm:text-base font-semibold bg-[var(--ana-cream)] text-[var(--ana-green-dark)] shadow-card hover:bg-[var(--ana-cream)]/90 transition"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          >
            Jetzt Termin vereinbaren
          </motion.a>

          {/* Unterzeile */}
          <motion.p
            className="mt-2 text-xs sm:text-sm text-[var(--ana-cream)]/90 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Mobile medizinische Fußpflege, Maniküre &amp; Pediküre in Köln und
            Umgebung.
          </motion.p>
        </div>

        {/* RECHTS – Bilder (Uniform + Wellness) */}
        <motion.div
          className="flex-1 w-full max-w-md flex gap-5 md:gap-8 justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
        >
          {/* Uniform */}
          <div className="relative flex-1 aspect-[3/4] rounded-3xl overflow-hidden shadow-card bg-[var(--ana-green-soft)]/40">
            <Image
              src="/images/hero-ana-uniform.jpg"
              alt="Ana Casarotti in Berufsbekleidung"
              fill
              className="object-cover"
            />
          </div>

          {/* Wellness – ab sm sichtbar, leicht nach unten versetzt */}
          <div className="relative hidden sm:block flex-1 aspect-[3/4] rounded-3xl overflow-hidden shadow-card bg-[var(--ana-green-soft)]/35 translate-y-6">
            <Image
              src="/images/hero-wellness.jpg"
              alt="Wellness Atmosphäre mit Handtüchern und Kerzen"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
