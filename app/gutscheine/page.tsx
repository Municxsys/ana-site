"use client";

import Image from "next/image";
import Section from "@/components/Section";

export default function GutscheinePage() {
  return (
    <Section id="gutscheine" title="Gutscheine">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Image
          src="/images/gutschein-front.png"
          width={500}
          height={600}
          alt="Geschenkgutschein"
          className="rounded-2xl shadow-soft"
        />

        <div className="card p-6 md:p-8 space-y-4 text-lg">
          <p>
            Verschenke eine wohltuende Auszeit – für schöne Hände und Füße.
          </p>
          <p>
            Gutscheine sind gültig für <strong>alle Leistungen</strong> und können
            flexibel eingelöst werden.
          </p>

          <div className="pt-4">
            <button className="w-full bg-brand-harmony text-white px-6 py-3 rounded-xl hover:bg-brand-vitality transition">
              Gutschein kaufen
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
