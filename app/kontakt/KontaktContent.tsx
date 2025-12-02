// app/kontakt/KontaktContent.tsx
import { Phone, MessageCircle, Instagram } from "lucide-react";

export default function KontaktContent() {
  return (
    <section className="min-h-screen bg-[var(--ana-cream)] pt-28 pb-24 px-4">
      <div className="mx-auto w-full max-w-6xl">
        {/* Intro */}
        <header className="mb-10 text-center md:text-left">
          <p className="tracking-[0.25em] text-xs uppercase text-[var(--ana-green-dark)]/70">
            Kontakt
          </p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-[var(--ana-green-dark)]">
            Kontakt &amp; Termin
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[var(--ana-green-dark)]/80 max-w-xl">
            Schreiben Sie mir auf WhatsApp oder rufen Sie mich an – ich melde
            mich zeitnah zurück und wir finden gemeinsam einen passenden Termin.
          </p>
        </header>

        {/* 2-Spalten Layout */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Kontaktkarte */}
          <div className="relative rounded-[32px] bg-white shadow-card px-6 sm:px-8 py-7 sm:py-9">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[var(--ana-cream)]/40 via-white to-[var(--ana-cream)]/30 pointer-events-none" />

            <div className="relative space-y-6">
              <h2 className="font-serif text-2xl text-[var(--ana-green-dark)]">
                Kontakt
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[var(--ana-green-dark)]">
                {/* Telefon */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ana-green-dark)]/8">
                    <Phone className="h-4 w-4 text-[var(--ana-green-dark)]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--ana-green-dark)]/70">
                      Telefon &amp; WhatsApp
                    </p>
                    <a
                      href="https://wa.me/4915755598937"
                      className="font-medium text-[var(--ana-green-dark)] hover:underline"
                    >
                      +49 1575 5598937
                    </a>
                  </div>
                </div>

                {/* WhatsApp Hinweis */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ana-green-dark)]/8">
                    <MessageCircle className="h-4 w-4 text-[var(--ana-green-dark)]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--ana-green-dark)]/70">
                      Schneller Kontakt
                    </p>
                    <p>
                      Am einfachsten erreichen Sie mich per WhatsApp – gerne
                      auch mit Terminwünschen oder Fragen zu Behandlungen.
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ana-green-dark)]/8">
                    <Instagram className="h-4 w-4 text-[var(--ana-green-dark)]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--ana-green-dark)]/70">
                      Instagram
                    </p>
                    <a
                      href="https://www.instagram.com/ana_casarotti"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-[var(--ana-green-dark)] hover:underline"
                    >
                      @ana_casarotti
                    </a>
                  </div>
                </div>

                {/* Hausbesuche */}
                <div className="pt-2 border-t border-[var(--ana-green-dark)]/10 mt-4">
                  <p className="text-xs uppercase tracking-wide text-[var(--ana-green-dark)]/70">
                    Hausbesuche
                  </p>
                  <p>
                    Hausbesuche in Köln und Umgebung – Anschrift auf Anfrage.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href="https://wa.me/4915755598937"
                  className="
                    inline-flex items-center justify-center
                    rounded-full px-8 py-3
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

          {/* Map-Karte */}
          <div className="relative rounded-[32px] bg-white shadow-card px-4 sm:px-5 py-5 sm:py-6">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[var(--ana-cream)]/35 via-white to-[var(--ana-cream)]/25 pointer-events-none" />
            <div className="relative space-y-4">
              <h2 className="font-serif text-2xl text-[var(--ana-green-dark)]">
                Einzugsgebiet
              </h2>
              <p className="text-sm sm:text-base text-[var(--ana-green-dark)]/80">
                Mobile medizinische Fußpflege, Maniküre &amp; Pediküre in Köln
                und ausgewählten Stadtteilen der Umgebung.
              </p>

              <div className="mt-2 rounded-3xl overflow-hidden border border-[var(--ana-green-dark)]/10">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    title="Karte – Einzugsgebiet Köln"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2511.184460880736!2d6.946400476717196!3d50.94724417168433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25a6050e1c79%3A0x41f8b18c0a262e0!2sK%C3%B6ln!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <p className="text-xs text-[var(--ana-green-dark)]/70">
                Weitere Gebiete auf Anfrage – schreiben Sie mir einfach kurz,
                von wo Sie anreisen bzw. wo der Hausbesuch stattfinden soll.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
