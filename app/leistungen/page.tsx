// app/leistungen/page.tsx
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import LeistungenContent from "./LeistungenContent";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Übersicht der Behandlungen von Ana Casarotti – medizinische Fußpflege, Maniküre, Pediküre und Shellac-Behandlungen in Köln.",
};

export default function LeistungenPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-hero-radial">
      <NavBar />
      <LeistungenContent />
      <Footer />
    </main>
  );
}
