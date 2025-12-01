// app/kontakt/page.tsx

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Kontakt from "@/components/Kontakt";

export const dynamic = "force-static";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-neutral-sand">
      <NavBar />
      <div className="pt-24 pb-16 px-4">
        <Kontakt />
      </div>
      <Footer />
    </main>
  );
}
