"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="ueber-mich"
      className="relative w-full py-16 md:py-20 px-4 bg-neutral-sand/10"
    >
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1.4fr_minmax(0,1fr)] gap-10 md:gap-16 items-center">
        {/* Text-Spalte */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="font-raleway text-2xl sm:text-3xl text-neutral-sand mb-4">
            Über mich
          </h2>

          <p className="text-sm sm:text-base text-ink/80 leading-relaxed mb-4">
            Mein Name ist Ana Casarotti und ich bin Fußpflegerin
            mit Schwerpunkt auf mobiler und kosmetischer Fußpflege.
            Mir ist wichtig, dass Sie sich bei mir nicht nur gut versorgt,
            sondern auch wirklich wohlfühlen.
          </p>

          <p className="text-sm sm:text-base text-ink/80 leading-relaxed mb-4">
            Mit mobilen Behandlungen in Köln und Umgebung komme ich zu Ihnen
            nach Hause – ganz entspannt, ohne Anfahrtstress oder Wartezimmer.
            Hygiene, sorgfältige Arbeit und eine ruhige, respektvolle
            Atmosphäre stehen dabei immer im Mittelpunkt.
          </p>

          <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
            Ob regelmäßige mobile Fußpflege, eine wohltuende Pediküre
            oder eine gepflegte Maniküre: Ich nehme mir Zeit für Ihre Fragen
            und berate Sie individuell zu Pflege und Vorbeugung.
          </p>
        </motion.div>

        {/* Bild-Spalte – kleiner Portrait-Ausschnitt */}
        <motion.div
          className="md:justify-self-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative w-full max-w-xs mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-card bg-green-vitality/20">
            <Image
              src="/images/hero-ana-uniform.jpg" // ggf. Dateinamen anpassen
              alt="Ana Casarotti bei der Arbeit"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

