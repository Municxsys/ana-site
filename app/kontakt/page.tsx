// app/kontakt/page.tsx
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import KontaktContent from "./KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description:
    "Kontaktieren Sie Ana Casarotti für Termine zur mobilen medizinischen Fußpflege, Maniküre und Pediküre in Köln und Umgebung.",
};

export default function KontaktPage() {
  return (
    <main className="relative min-h-screen bg-[var(--ana-cream)]">
      <NavBar />
      <KontaktContent />
      <Footer />
    </main>
  );
}
