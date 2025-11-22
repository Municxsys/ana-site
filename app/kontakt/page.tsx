"use client";

import Section from "@/components/Section";

export default function KontaktPage() {
  return (
    <Section id="kontakt" title="Kontakt">
      <div className="card p-6 md:p-8 text-center space-y-4 text-lg leading-relaxed">
        <p>
          📞 <strong>01575 5598937</strong>
        </p>
        <p>
          ✉️ <strong>kontakt@ana-casarotti.de</strong>
        </p>
        <p>📍 Köln & Umgebung · mobile Maniküre & medizinische Fußpflege</p>
        <p className="opacity-80">
          Termine nach Vereinbarung · Hausbesuche jederzeit möglich
        </p>
      </div>
    </Section>
  );
}
