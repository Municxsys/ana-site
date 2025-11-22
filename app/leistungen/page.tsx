"use client";

import Section from "@/components/Section";
import FloatingCard from "@/components/FloatingCard";

export default function LeistungenPage() {
  const services = [
    {
      title: "Wellness-Maniküre",
      text: "Paraffinbad, Peeling, Nagelpflege & Lack.",
      price: "50 €",
    },
    {
      title: "Klassische Maniküre",
      text: "Handbad, Nagelpflege & Lack.",
      price: "35 €",
    },
    {
      title: "Wellness-Pediküre",
      text: "Fußbad, Peeling, Hornhautentfernung, Pflege & Lack.",
      price: "60 €",
    },
    {
      title: "Klassische Pediküre",
      text: "Fußbad, Nagelpflege & Lack.",
      price: "45 €",
    },
    {
      title: "Medizinische Fußpflege",
      text: "Behandlung eingewachsener Nägel, Hühneraugen & Druckstellen.",
      price: "Auf Anfrage",
    },
  ];

  return (
    <Section id="leistungen" title="Leistungen & Preise">
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <FloatingCard key={i} title={s.title} price={s.price} delay={i * 0.08}>
            {s.text}
          </FloatingCard>
        ))}
      </div>
    </Section>
  );
}
