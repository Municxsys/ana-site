// app/leistungen/page.tsx

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Section from "@/components/Section";

export const dynamic = "force-static";

export default function LeistungenPage() {
  return (
    <main className="min-h-screen bg-neutral-sand">
      <NavBar />

      <div className="pt-24 pb-16 px-4">
        <Section
          id="leistungen"
          title="Leistungen & Preise"
          subtitle="Sorgfältige, hygienische und mobile Behandlungen – abgestimmt auf Ihre Bedürfnisse"
        >
          {/* GRID 1 */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Medizinische Fußpflege"
              price="45 €"
              img="/images/service1.jpg"
            >
              <ul className="list-disc pl-5 space-y-1 text-green-harmony">
                <li>Fußbad & Pflege</li>
                <li>Nägel kürzen & Nagelhaut entfernen</li>
                <li>Hornhautbehandlung</li>
                <li>Beratung & Tipps</li>
              </ul>

              <a
                href="/kontakt"
                className="
                  mt-4 w-full inline-flex items-center justify-center
                  rounded-2xl px-6 py-3 font-semibold text-sm
                  bg-gradient-to-br from-green-serenity via-green-harmony to-green-vitality
                  text-neutral-sand shadow-soft hover:brightness-110 transition
                "
              >
                Termin anfragen
              </a>
            </Card>

            <Card
              title="Maniküre"
              price="Wellness 50 € • Klassisch 35 €"
              img="/images/service2.jpg"
            >
              <ul className="list-disc pl-5 space-y-1 text-green-harmony">
                <li>Handbad & Pflege</li>
                <li>Peeling optional</li>
                <li>Lack auf Wunsch</li>
              </ul>

              <a
                href="/kontakt"
                className="
                  mt-4 w-full inline-flex items-center justify-center
                  rounded-2xl px-6 py-3 font-semibold text-sm
                  bg-gradient-to-br from-green-serenity via-green-harmony to-green-vitality
                  text-neutral-sand shadow-soft hover:brightness-110 transition
                "
              >
                Termin anfragen
              </a>
            </Card>

            <Card
              title="Pediküre"
              price="Wellness 60 € • Klassisch 45 €"
              img="/images/service3.jpg"
            >
              <ul className="list-disc pl-5 space-y-1 text-green-harmony">
                <li>Fußbad & Pflege</li>
                <li>Hornhautentfernung</li>
                <li>Entspannende Massage</li>
              </ul>

              <a
                href="/kontakt"
                className="
                  mt-4 w-full inline-flex items-center justify-center
                  rounded-2xl px-6 py-3 font-semibold text-sm
                  bg-gradient-to-br from-green-serenity via-green-harmony to-green-vitality
                  text-neutral-sand shadow-soft hover:brightness-110 transition
                "
              >
                Termin anfragen
              </a>
            </Card>
          </div>

          {/* GRID 2 */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <Card
              title="Shellac-Behandlung"
              price="nach Aufwand"
              img="/images/service4.jpg"
            >
              <p className="text-green-harmony">
                Lang anhaltender Glanzfinish – schonend aufgetragen.
              </p>

              <a
                href="/kontakt"
                className="
                  mt-4 w-full inline-flex items-center justify-center
                  rounded-2xl px-6 py-3 font-semibold text-sm
                  bg-gradient-to-br from-green-serenity via-green-harmony to-green-vitality
                  text-neutral-sand shadow-soft hover:brightness-110 transition
                "
              >
                Termin anfragen
              </a>
            </Card>

            <Card
              title="B/S-Spange Classic"
              price="30 €"
              img="/images/service5.jpg"
            >
              <p className="text-green-harmony">
                Sanfte Korrektur bei eingewachsenen Nägeln – wasserfest und
                unauffällig.
              </p>

              <a
                href="/kontakt"
                className="
                  mt-4 w-full inline-flex items-center justify-center
                  rounded-2xl px-6 py-3 font-semibold text-sm
                  bg-gradient-to-br from-green-serenity via-green-harmony to-green-vitality
                  text-neutral-sand shadow-soft hover:brightness-110 transition
                "
              >
                Termin anfragen
              </a>
            </Card>
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
