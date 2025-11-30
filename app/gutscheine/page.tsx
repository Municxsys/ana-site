// app/gutscheine/page.tsx

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Gutschein from "@/components/Gutschein";

export const dynamic = "force-static";

export default function GutscheinePage() {
  return (
    <main className="min-h-screen bg-neutral-sand">
      <NavBar />
      <div className="pt-24 pb-16 px-4">
        <Gutschein />
      </div>
      <Footer />
    </main>
  );
}
