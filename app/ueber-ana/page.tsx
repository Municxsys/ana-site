"use client";

import Image from "next/image";
import Section from "@/components/Section";

export default function UeberAnaPage() {
  return (
    <>
      <Section id="ueber" title="Über Ana Casarotti">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="card p-6 md:p-8 space-y-4 leading-relaxed text-lg">
            <p>
              Ich bin Ana Casarotti – mobile Fachkraft für Maniküre,
              Pediküre und medizinische Fußpflege in Köln und Umgebung.
            </p>
            <p>
              Meine Arbeit verbindet ruhige, gründliche Pflege mit modernen
              Techniken und hygienischem Arbeiten auf höchstem Niveau.
            </p>
            <p>
              Besonders am Herzen liegt mir ein respektvoller, ruhiger Umgang –
              ideal für ältere Menschen, Vielbeschäftigte, Eltern und alle, die
              sich eine erholsame Auszeit wünschen.
            </p>
          </div>

          <Image
            src="/images/ana1.png"
            width={500}
            height={600}
            alt="Ana Casarotti"
            className="rounded-2xl shadow-soft object-cover w-full"
          />
        </div>
      </Section>
    </>
  );
}
