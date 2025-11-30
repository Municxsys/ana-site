import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Leistungen from "@/components/Leistungen";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ana Casarotti – Medizinische Fußpflege & Kosmetik",
  description:
    "Mobile medizinische Fußpflege, Maniküre & Pediküre in Köln und Umgebung. Hausbesuche mit Herz und Fachkompetenz.",
  url: "https://anacasarotti.de",
  telephone: "+49 1575 5598937",
  sameAs: ["https://www.instagram.com/ana_casarotti"],
  areaServed: "Köln und Umgebung",
  serviceType: [
    "Medizinische Fußpflege",
    "Kosmetische Fußpflege",
    "Pediküre",
    "Maniküre",
  ],
} as const;

export const dynamic = "force-static";

export default function Page() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Leistungen />
      <Kontakt />
      <Footer />

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
    </main>
  );
}
