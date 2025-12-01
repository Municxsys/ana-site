"use client";

import { useState } from "react";

const AMOUNTS = [20, 50, 100, 150];

export default function GutscheinePage() {
  const [selected, setSelected] = useState(50);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDownload() {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/gutschein?amount=${selected}`);

      if (!res.ok) {
        throw new Error("Download fehlgeschlagen");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `gutschein-${selected}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error(e);
      alert("Leider ist etwas schiefgelaufen. Bitte versuch es später erneut.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-hero-radial px-4 pt-28 pb-16 flex justify-center">
      <div className="relative z-10 w-full max-w-5xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
        {/* Mini-Vorschau links */}
        <div className="card-in">
          <div className="relative w-full max-w-sm mx-auto aspect-[2/3] rounded-3xl overflow-hidden shadow-card bg-[var(--ana-cream)]">
            <img
              src="/images/gutschein-preview.png"
              alt="Gutschein-Vorschau"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Auswahl rechts */}
        <section className="card-in-delay-1 bg-black/10 backdrop-blur-sm rounded-3xl px-6 py-7 md:px-8 md:py-9 text-[var(--ana-cream)] shadow-card">
          <header className="mb-5">
            <p className="text-xs tracking-[0.2em] uppercase mb-2">
              Ana Casarotti
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold">
              Gutschein schenken
            </h1>
            <p className="mt-2 text-sm text-[var(--ana-cream)]/85">
              Wähle einen Betrag und lade den personalisierten Gutschein als PDF
              herunter.
            </p>
          </header>

          {/* Buttons Beträge */}
          <div className="mb-6 flex flex-wrap gap-3">
            {AMOUNTS.map((amount) => {
              const active = amount === selected;
              return (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelected(amount)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition
                    ${
                      active
                        ? "bg-[var(--ana-cream)] text-[var(--ana-green-dark)] border-transparent"
                        : "bg-transparent border-[var(--ana-cream)]/40 text-[var(--ana-cream)] hover:bg-white/10"
                    }`}
                >
                  € {amount},00
                </button>
              );
            })}
          </div>

          {/* Anzeige Wert – NICHT editierbar */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.22em] mb-1">
              Ausgewählter Wert
            </p>
            <p className="text-3xl font-semibold">
              € {selected}
              <span className="align-top text-base">,00</span>
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            disabled={isLoading}
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold bg-[var(--ana-cream)] text-[var(--ana-green-dark)] shadow-card hover:bg-[var(--ana-cream)]/95 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? "Wird erstellt …" : "Gutschein als PDF herunterladen"}
          </button>
        </section>
      </div>
    </main>
  );
}
