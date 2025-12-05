// app/kontakt/page.tsx
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Kontaktieren Sie Ana Casarotti für Termine zur mobilen Fußpflege, Maniküre und Pediküre in Köln und Umgebung.",
};

export default function KontaktPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-hero-radial">
      <NavBar />

      {/* Hero / Intro */}
      <section className="relative pt-28 pb-20 px-4">
        {/* leichter heller Bereich oben, aber Text in dunklem Grün */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm mb-3 text-[var(--ana-green-dark)]/70">
            Kontakt
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--ana-green-dark)] mb-4">
            Kontakt &amp; Termin
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-[var(--ana-green-dark)]/80">
            Schreiben Sie mir auf WhatsApp oder rufen Sie mich an – ich melde
            mich zeitnah zurück und wir finden gemeinsam einen passenden Termin.
          </p>
        </div>

        {/* Kontaktkarte */}
        <div className="relative z-10 max-w-4xl mx-auto mt-10">
          <div className="bg-[var(--ana-cream)] rounded-3xl shadow-card px-6 py-8 sm:px-10 sm:py-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[var(--ana-green-dark)] mb-6">
              Kontakt
            </h2>

            <div className="space-y-6 text-[var(--ana-green-dark)]">
              {/* Telefon / WhatsApp */}
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--ana-green-dark)]/70 mb-1">
                  Telefon &amp; WhatsApp
                </p>
                <p className="text-base sm:text-lg font-semibold">
                  +49 1575 5598937
                </p>
              </div>

              {/* Schneller Kontakt */}
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--ana-green-dark)]/70 mb-1">
                  Schneller Kontakt
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Am einfachsten erreichen Sie mich per WhatsApp – gerne auch
                  mit Terminvorschlägen oder Fragen zu Behandlungen.
                </p>
              </div>

              {/* Instagram */}
              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--ana-green-dark)]/70 mb-1">
                  Instagram
                </p>
                <p className="text-sm sm:text-base">@ana_casarotti</p>
              </div>

              {/* Hausbesuche */}
              <div className="pt-4 border-t border-[var(--ana-green-dark)]/15">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[var(--ana-green-dark)]/70 mb-1">
                  Hausbesuche
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Hausbesuche in Köln und Umgebung – Anschrift auf Anfrage.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-8">
              <a
                href="https://wa.me/4915755598937"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex w-full sm:w-auto items-center justify-center
                  rounded-full px-10 py-3
                  text-sm sm:text-base font-semibold
                  bg-[var(--ana-green-dark)] text-[var(--ana-cream)]
                  shadow-card hover:bg-[var(--ana-green-dark)]/90
                  transition
                "
              >
                WhatsApp-Nachricht senden
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

