"use client";

import Section from "@/components/Section";

export default function DatenschutzPage() {
  return (
    <Section id="datenschutz" title="Datenschutzerklärung">
      <div className="card p-6 md:p-8 space-y-4 text-lg leading-relaxed">
        <p>
          Diese Website erhebt und verarbeitet personenbezogene Daten ausschließlich
          im Rahmen der gesetzlichen Bestimmungen (DSGVO).
        </p>

        <p>
          Verantwortlich: <strong>Ana Casarotti</strong>, Köln · kontakt@ana-casarotti.de
        </p>

        <p>
          Beim Besuch der Website werden automatisch technische Daten erfasst
          (Server-Logfiles). Diese Daten dienen ausschließlich der technischen
          Bereitstellung.
        </p>

        <p>
          Es werden keine Cookies zu Werbezwecken eingesetzt und keine Daten an
          Dritte weitergegeben.
        </p>
      </div>
    </Section>
  );
}
