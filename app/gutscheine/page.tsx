// app/gutscheine/page.tsx
"use client";

import { useState } from "react";

const AMOUNTS = [20, 50, 100, 150];

export default function GutscheinePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!selectedAmount) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/gutschein", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: selectedAmount }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data?.error || "Der Gutschein konnte nicht erstellt werden."
        );
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `gutschein-${selectedAmount}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();

      URL.revokeObjectURL(url);
    } catch (err: any) {
      console.error(err);
      setError(err.message ?? "Unbekannter Fehler");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#80996f] to-[#5c7156] text-ink">
      <div className="mx-auto max-w-4xl px-6 py-20">
        {/* Titel / Intro */}
        <header className="mb-10">
          <p className="font-serif text-sm tracking-[0.25em] uppercase text-ink/60">
            Ana Casarotti
          </p>
          <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-neutral-sand">
            Gutscheine verschenken
          </h1>
          <p className="mt-4 text-sm sm:text-base text-ink/70 max-w-xl">
            Gönn deinen Liebsten eine Auszeit:
            Maniküre, Pediküre &amp; medizinische Fußpflege – ganz bequem
            als Gutschein zum Ausdrucken.
          </p>
        </header>

        {/* Auswahl-Card */}
        <section className="rounded-3xl border border-green-vitality/20 bg-black/5 backdrop-blur-sm p-6 sm:p-8">
          <h2 className="font-serif text-xl text-neutral-sand mb-4">
            Gutscheinwert wählen
          </h2>

          <p className="text-sm text-ink/70 mb-4">
            Mindestwert: <span className="font-medium">20 €</span>. Wähle
            einen der Beträge – der Wert wird automatisch in den Gutschein
            eingetragen.
          </p>

          {/* Buttons für Beträge */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {AMOUNTS.map((amount) => {
              const active = selectedAmount === amount;
              return (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelectedAmount(amount)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition
                    ${
                      active
                        ? "border-green-vitality bg-neutral-sand text-green-vitality shadow-md"
                        : "border-ink/20 bg-black/10 text-neutral-sand hover:border-green-vitality/60"
                    }`}
                >
                  {amount} €
                </button>
              );
            })}
          </div>

          {/* Download-Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="button"
              onClick={handleDownload}
              disabled={loading || !selectedAmount}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium
                         bg-neutral-sand text-green-vitality shadow-sm hover:bg-white
                         disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {loading ? "Gutschein wird erstellt …" : "Gutschein herunterladen"}
            </button>

            <p className="text-xs text-ink/60 max-w-sm">
              Nach dem Download kannst du den Gutschein als{" "}
              <span className="font-medium">PDF</span> speichern oder ausdrucken.
            </p>
          </div>

          {error && (
            <p className="mt-4 text-xs text-red-300 bg-red-900/30 rounded-xl px-3 py-2">
              {error}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
