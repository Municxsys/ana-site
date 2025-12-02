"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full min-h-screen
        bg-hero-radial
        px-4 pt-8 md:pt-12 pb-16
        flex items-center
      "
    >
      {/* Weiches Overlay */}
      <div className="absolute inset-0 bg-black/5 z-0 pointer-events-none" />

      {/* Content Wrapper */}
      <motion.div
        className="
          relative z-10 w-full max-w-6xl mx-auto
          flex flex-col md:flex-row items-center
          gap-12 md:gap-20
        "
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* -------------------------------------------------------------------- */}
        {/* LINKS – Logo, Wortmarke, Button, Text */}
        {/* -------------------------------------------------------------------- */}
        <div
          className="
            flex-1 flex flex-col
            items-center md:items-start
            text-center md:text-left
            gap-4
          "
        >
          {/* Screenreader-H1 */}
          <h1 className="sr-only">
            Ana Casarotti – Medizinische Fußpflege, Maniküre & Pediküre Köln
          </h1>

          {/* Logo Icon – jetzt präzise skaliert */}
          <motion.div
            className="relative w-[68px] sm:w-[80px] md:w-[88px] drop-shadow-lg"
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
              className="w-full h-auto object-contain select-none"
            />
          </motion.div>

          {/* Wortmarke – optimiert */}
          <motion.div
            className="relative w-[260px] sm:w-[340px] md:w-[420px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/images/ana-logo-wordmark.png"
              alt="Ana Casarotti – Fußpflege & Kosmetik"
              width={420}
              height={240}
              priority
              className="w-full h-auto select-none"
            />
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="/kontakt"
            className="
              mt-3 inline-flex items-center justify-center
              rounded-full px-10 py-3
              text-sm sm:text-base font-semibold
              bg-[var(--ana-cream)] text-[var(--ana-green-dark)]
              shadow-card hover:bg-[var(--ana-cream)]/90
              transition
            "
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          >
            Jetzt Termin vereinbaren
          </motion.a>

          {/* Unterzeile */}
          <motion.p
            className="
              mt-2 text-xs sm:text-sm
              text-[var(--ana-cream)]/90
              max-w-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Mobile medizinische Fußpflege, Maniküre & Pediküre in Köln und Umgebung.
          </motion.p>
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* RECHTS – ZWEI BILDER IM CANVA-LOOK (Uniform + Wellness) */}
        {/* -------------------------------------------------------------------- */}
        <motion.div
          className="
            flex-1 w-full max-w-md
            flex gap-4 sm:gap-6 md:gap-8
            justify-center
          "
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: 'easeOut' }}
        >
          {/* Hauptbild: Uniform */}
          <div
            className="
              relative flex-1
              aspect-[3/4]
              rounded-3xl overflow-hidden shadow-card
              bg-[var(--ana-green-soft)]/40
            "
          >
            <Image
              src="/images/hero-ana-uniform.jpg"
              alt="Ana Casarotti in Berufsbekleidung"
              fill
              className="object-cover"
            />
          </div>

          {/* Zweites Bild – versetzt (wie im Canva-Spa-Design) */}
          <div
            className="
              relative hidden sm:block flex-1
              aspect-[3/4]
              rounded-3xl overflow-hidden shadow-card
              bg-[var(--ana-green-soft)]/35
              translate-y-6
            "
          >
            <Image
              src="/images/wellness.jpg"
              alt="Wellness Detail – Handtuch & Atmosphäre"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
