// app/uber-mich/page.tsx
import type { Metadata } from "next";
import UberMichContent from "./UberMichContent";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Erfahren Sie mehr über Ana Casarotti – mobile Fußpflege, Maniküre und Pediküre in Köln.",
};

export default function UberMichPage() {
  // reine Server-Komponente, kein "use client"
  return <UberMichContent />;
}
