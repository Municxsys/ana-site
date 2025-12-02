import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const dynamic = "force-static";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-hero-radial pt-24 md:pt-28">
      {/* Fixierte Navigation */}
      <NavBar />

      {/* Hero-Bereich */}
      <Hero />

      {/* Footer */}
      <Footer />
    </main>
  );
}
