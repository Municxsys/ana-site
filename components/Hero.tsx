"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full min-h-screen
        flex items-center justify-center
        bg-hero-radial
        px-4
      "
    >
      {/* weiches Overlay */}
      <div className="absolute inset-0 bg-neutral-sand/10 z-0 pointer-events-none" />

      <motion.div
        className="
          relative z-10 w-full max-w-4xl mx-auto
          flex flex-col items-center gap-6 text-center
        "
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* SEO-H1 nur für Screenreader */}
        <h1 className="sr-only">
          Ana Casarotti – Maniküre, Pediküre &amp; Medizinische Fußpflege in Köln
          und Umgebung
        </h1>

      {/* ICON wie im Canva-Flyer – kleines PNG ohne Kreis */}
<motion.div
  className="relative w-[90px] sm:w-[110px] md:w-[130px]"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
>
  <Image
    src="/images/ana-logo-icon.png"
    alt="Ana Casarotti Icon"
    width={130}
    height={130}
    priority
    className="w-full h-auto select-none object-contain"
  />
</motion.div>


        {/* Wortmarke + Unterzeile als PNG */}
        <motion.div
          className="relative w-[260px] sm:w-[360px] md:w-[420px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
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
          className="
            mt-4 inline-flex items-center justify-center
            rounded-full px-10 py-3
            text-sm sm:text-base font-semibold
            bg-neutral-sand text-green-vitality
            shadow-card hover:bg-neutral-sand/90 transition
          "
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
        >
          Jetzt Termin vereinbaren
        </motion.a>

        {/* Unterzeile */}
        <motion.p
          className="mt-3 text-xs sm:text-sm text-neutral-sand/90 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          Mobile medizinische Fußpflege, Maniküre &amp; Pediküre in Köln und
          Umgebung.
        </motion.p>
      </motion.div>
    </section>
  );
}
