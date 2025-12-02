// app/leistungen/LeistungenContent.tsx
"use client";

import Image from "next/image";

export default function LeistungenContent() {
  return (
    <section className="relative pt-32 pb-24 px-4">
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="font-serif text-4xl sm:text-5xl text-[var(--ana-cream)] mb-4">
            Leistungen
          </h1>
          <p className="text-[var(--ana-cream)]/90 text-sm sm:text-base leading-relaxed">
            Mobile medizinische Fußpflege, Maniküre, Pediküre und spezielle
            Behandlungen – direkt bei Ihnen zu Hause in Köln und Umgebung.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-[1.1fr,1.1fr]">
          {/* Linke Karte: Medizinische Fußpflege */}
          <div className="bg-[var(--ana-cream)]/96 rounded-3xl p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-2xl sm:text-3xl text-[var(--ana-green-dark)] mb-3">
              Medizinische Fußpflege
            </h2>
            <p className="text-sm sm:text-base text-[var(--ana-green-dark)]/90 mb-4">
              Für gesunde Füße in jedem Alter – zur Pflege, Vorbeugung und
              Unterstützung bei Beschwerden.
            </p>

            <ul className="space-y-2 text-sm sm:text-base text-[var(--ana-green-dark)]/90 mb-6">
              <li>• Fachgerechtes Kürzen und Formen der Nägel</li>
              <li>• Behandlung von Hornhaut und Druckstellen</li>
              <li>• Pflege von eingewachsenen Nägeln</li>
              <li>• Diabetische Fußpflege und Beratung</li>
              <li>• Abschlusspflege mit wohltuenden Produkten</li>
            </ul>

            <div className="inline-flex items-baseline gap-2 rounded-full bg-[var(--ana-green-dark)] text-[var(--ana-cream)] px-5 py-2 text-sm sm:text-base font-semibold">
              Medizinische Fußpflege
              <span className="font-bold">ab 45 €</span>
            </div>

            <div className="mt-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/service1.jpg"
                alt="Behandlung medizinische Fußpflege"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Rechte Spalte: Maniküre / Pediküre / Shellac / B/S-Spange */}
          <div className="space-y-6">
            {/* Maniküre & Pediküre */}
            <div className="bg-[var(--ana-cream)]/96 rounded-3xl p-6 sm:p-7 shadow-card">
              <h2 className="font-serif text-2xl text-[var(--ana-green-dark)] mb-3">
                Maniküre &amp; Pediküre
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[var(--ana-green-dark)]/90">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">Wellness-Maniküre</p>
                    <p>Handbad, Peeling, Nagelhautpflege &amp; Lack</p>
                  </div>
                  <span className="font-semibold">50 €</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">Klassische Maniküre</p>
                    <p>Kürzen, Formen, Nagelhautpflege, Pflegeabschluss</p>
                  </div>
                  <span className="font-semibold">35 €</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">Wellness-Pediküre</p>
                    <p>Fußbad, Nagelpflege, Hornhautentfernung, Massage</p>
                  </div>
                  <span className="font-semibold">60 €</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">Klassische Pediküre</p>
                    <p>Fußbad, Nagel- &amp; Hornhautpflege</p>
                  </div>
                  <span className="font-semibold">45 €</span>
                </div>
              </div>
            </div>

            {/* Shellac */}
            <div className="bg-[var(--ana-cream)]/96 rounded-3xl p-6 sm:p-7 shadow-card">
              <h3 className="font-serif text-xl text-[var(--ana-green-dark)] mb-3">
                Shellac-Behandlungen
              </h3>
              <div className="space-y-2 text-sm sm:text-base text-[var(--ana-green-dark)]/90">
                <p>• Shellac lackieren – <strong>20 €</strong></p>
                <p>• Shellac French – <strong>30 €</strong></p>
                <p>• Shellac entfernen &amp; neu lackieren – <strong>30 €</strong></p>
                <p>• Shellac entfernen &amp; French – <strong>40 €</strong></p>
                <p>• Shellac entfernen ohne Weiterbehandlung – <strong>15 €</strong></p>
              </div>
            </div>

            {/* B/S-Spange */}
            <div className="bg-[var(--ana-green-dark)] rounded-3xl p-6 sm:p-7 shadow-card">
              <h3 className="font-serif text-xl text-[var(--ana-cream)] mb-2">
                B/S-Spange Classic
              </h3>
              <p className="text-sm sm:text-base text-[var(--ana-cream)]/90 mb-3">
                Sanfte Hilfe bei eingewachsenen Nägeln – eine dezente,
                alltagstaugliche Lösung ohne Operation.
              </p>
              <p className="text-sm sm:text-base text-[var(--ana-cream)]/90 mb-4">
                • Entlastung eingewachsener Nägel<br />
                • Besonders geeignet für Diabetiker:innen<br />
                • Kaum Einschränkung im Alltag oder beim Sport
              </p>
              <div className="inline-flex rounded-full bg-[var(--ana-cream)] text-[var(--ana-green-dark)] px-5 py-2 text-sm font-semibold">
                Preis: 30 € pro Zehennagel
              </div>
            </div>
          </div>
        </div>

        {/* Hinweis + CTA */}
        <div className="mt-10 sm:mt-14 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[var(--ana-cream)]/80 mb-4">
            Alle Behandlungen finden als Hausbesuch in Köln und Umgebung statt.
            Die genannten Preise verstehen sich pro Person. Individuelle
            Kombinationen und Pakete sind nach Absprache möglich.
          </p>
          <a
            href="/kontakt"
            className="
              inline-flex items-center justify-center
              rounded-full px-10 py-3
              text-sm sm:text-base font-semibold
              bg-[var(--ana-cream)] text-[var(--ana-green-dark)]
              shadow-card hover:bg-[var(--ana-cream)]/90 transition
            "
          >
            Termin &amp; Rückfragen klären
          </a>
        </div>
      </div>
    </section>
  );
}
