import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Gutschein() {
  return (
    <Section
      id="gutscheine"
      title="Gutscheine verschenken"
      subtitle="Verschenken Sie Wohlbefinden, Pflege und entspannte Auszeiten"
    >
      <div className="grid md:grid-cols-2 gap-10">

        {/* Gutschein-Info */}
        <Card
          title="Wertgutschein"
          price="Betrag frei wählbar"
          img="/images/gutschein.jpg"
        >
          <p className="text-green-harmony leading-relaxed">
            Ob für medizinische Fußpflege, Maniküre, Pediküre oder Wellness –
            ein Gutschein ist immer eine liebevolle und hilfreiche Geschenkidee.
          </p>

          <p className="mt-3 text-sm text-green-harmony/80">
            Auf Wunsch auch als digitaler Gutschein per WhatsApp.
          </p>

          <a
            href="/kontakt"
            className="
              mt-5 w-full inline-flex items-center justify-center
              rounded-2xl px-6 py-3 font-semibold text-sm
              bg-gradient-to-br from-terra-base via-green-harmony to-green-vitality
              text-neutral-sand shadow-soft hover:brightness-110 transition
            "
          >
            Gutschein anfragen
          </a>
        </Card>

        {/* Weitere Varianten */}
        <Card
          title="Spezial-Gutschein"
          price="Beliebte Kombinationen"
          img="/images/gutschein2.jpg"
        >
          <ul className="list-disc space-y-1 pl-5 text-green-harmony">
            <li>Wellness-Maniküre + Pediküre</li>
            <li>Medizinische Fußpflege + Paraffinbehandlung</li>
            <li>Shellac-Behandlung für Hände oder Füße</li>
          </ul>

          <a
            href="/kontakt"
            className="
              mt-5 w-full inline-flex items-center justify-center
              rounded-2xl px-6 py-3 font-semibold text-sm
              bg-gradient-to-br from-green-serenity via-green-harmony to-green-vitality
              text-neutral-sand shadow-card hover:brightness-110 transition
            "
          >
            Jetzt anfragen
          </a>
        </Card>

      </div>
    </Section>
  );
}
