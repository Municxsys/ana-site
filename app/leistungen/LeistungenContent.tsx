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
            Mobile Fußpflege, Maniküre, Pediküre sowie ergänzende
            pflegerische Behandlungen – direkt bei Ihnen zu Hause
            in Köln und Umgebung. Es handelt sich um kosmetische
            bzw. pflegeorientierte Leistungen, nicht um
            podologische oder ärztliche Behandlungen.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-[1.1fr,1.1fr]">
          {/* Linke Karte: Fußpflege zu Hause */}
          <div className="bg-[var(--ana-cream)]/96 rounded-3xl p-6 sm:p-8 shadow-card">
            <h2 className="font-serif text-2xl sm:text-3xl text-[var(--ana-green-dark)] mb-3">
              Fußpflege zu Hause
            </h2>
            <p className="text-sm sm:text-base text-[var(--ana-green-dark)]/90 mb-4">
              Pflegende Fußbehandlung für mehr Wohlbefinden im Alltag –
              besonders angenehm für Menschen, die Termine zu Hause bevorzugen.
            </p>

            <ul className="space-y-2 text-sm sm:text-base text-[var(--ana-green-dark)]/90 mb-6">
              <li>• Fachgerechtes Kürzen und Formen der Zehennägel</li>
              <li>• Sanfte Entfernung von Hornhaut und leichten Druckstellen</li>
              <li>• Pflege der Nagelhaut und Nägel</li>
              <li>• Wohltuende Abschlusspflege mit passenden Produkten</li>
              <li>
                • Auf Wunsch Hinweise zur fußpflegerischen
                Eigenpflege zu Hause
              </li>
            </ul>

            <div className="inline-flex items-baseline gap-2 rounded-full bg-[var(--ana-green-dark)] text-[var(--ana-cream)] px-5 py-2 text-sm sm:text-base font-semibold">
              Fußpflege (Hausbesuch)
              <span className="font-bold">ab 45 €</span>
            </div>

            <div className="mt-6 relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/service1.jpg"
                alt="Fußpflege-Behandlung im Hausbesuch"
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
                <p>
                  • Shellac entfernen &amp; neu lackieren –{" "}
                  <strong>30 €</strong>
                </p>
                <p>
                  • Shellac entfernen &amp; French –{" "}
                  <strong>40 €</strong>
                </p>
                <p>
                  • Shellac entfernen ohne weitere Behandlung –{" "}
                  <strong>15 €</strong>
                </p>
              </div>
            </div>

            {/* B/S-Spange – klar als fußpflegerische Hilfe benannt */}
            <div className="bg-[var(--ana-green-dark)] rounded-3xl p-6 sm:p-7 shadow-card">
              <h3 className="font-serif text-xl text-[var(--ana-cream)] mb-2">
                B/S-Spange Classic (fußpflegerische Anwendung)
              </h3>
              <p className="text-sm sm:text-base text-[var(--ana-cream)]/90 mb-3">
                Sanfte Entlastung bei einwachsenden Nägeln im
                fußpflegerischen Rahmen – eine dezente, alltagstaugliche
                Unterstützung ohne operativen Eingriff.
              </p>
              <p className="text-sm sm:text-base text-[var(--ana-cream)]/90 mb-4">
                • Kann Druckgefühl am Nagel reduzieren<br />
                • Alltagstauglich, in der Regel kaum sichtbar<br />
                • Ergänzend zur ärztlichen/podologischen Behandlung,
                kein Ersatz dafür
              </p>
              <div className="inline-flex rounded-full bg-[var(--ana-cream)] text-[var(--ana-green-dark)] px-5 py-2 text-sm font-semibold">
                Preis: 30 € pro Zehennagel
              </div>
            </div>
          </div>
        </div>

        {/* Hinweis + CTA */}
        <div className="mt-10 sm:mt-14 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-[var(--ana-cream)]/80 mb-2">
            Alle Behandlungen finden als Hausbesuch in Köln und Umgebung statt.
            Die genannten Preise verstehen sich pro Person. Individuelle
            Kombinationen und Pakete sind nach Absprache möglich.
          </p>
          <p className="text-[var(--ana-cream)]/70 text-[11px] sm:text-xs mb-5">
            Hinweis: Es handelt sich um kosmetische und pflegeorientierte
            Leistungen. Sie ersetzen keine medizinische, podologische oder
            ärztliche Behandlung und stellen keine Heilbehandlung dar.
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
