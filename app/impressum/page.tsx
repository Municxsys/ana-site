"use client";

import Section from "@/components/Section";

export default function ImpressumPage() {
  return (
    <Section id="impressum" title="Impressum">
      <div className="card p-6 md:p-8 space-y-3 text-lg leading-relaxed">
        <p><strong>Ana Casarotti</strong></p>
        <p>Mobile Maniküre & Medizinische Fußpflege<br />Köln & Umgebung</p>
        <p>Telefon: 01575 5598937</p>
        <p>E-Mail: kontakt@ana-casarotti.de</p>
        <p>Umsatzsteuerbefreit gemäß § 19 UStG</p>
      </div>
    </Section>
  );
}
