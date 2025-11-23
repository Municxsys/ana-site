
import Card from "@/components/Card";
import Section from "@/components/Section";
export default function Leistungen(){
  return (
    <Section id="leistungen" title="Leistungen & Preise" subtitle="Sorgfältige Behandlungen – sanft, hygienisch, mobil">
      <div className="grid md:grid-cols-3 gap-8">
        <Card title="Medizinische Fußpflege" price="Preis: 45 €" img="/images/service1.jpg">
          <ul className="list-disc pl-5 space-y-1">
            <li>Fußbad & Pflege</li>
            <li>Nägel kürzen & Nagelhaut entfernen</li>
            <li>Hornhautbehandlung</li>
            <li>Beratung & Tipps</li>
          </ul>
        </Card>
        <Card title="Maniküre" price="Wellness 50 € • Klassisch 35 €" img="/images/service2.jpg">
          <ul className="list-disc pl-5 space-y-1">
            <li>Handbad & Pflege</li>
            <li>Peeling optional</li>
            <li>Lack auf Wunsch</li>
          </ul>
        </Card>
        <Card title="Pediküre" price="Wellness 60 € • Klassisch 45 €" img="/images/service3.jpg">
          <ul className="list-disc pl-5 space-y-1">
            <li>Fußbad & Pflege</li>
            <li>Hornhautentfernung</li>
            <li>Entspannende Massage</li>
          </ul>
        </Card>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <Card title="Shellac-Behandlung" price="Preis: nach Aufwand" img="/images/service4.jpg">
          <p>Lang anhaltender Glanzfinish – schonend aufgetragen.</p>
        </Card>
        <Card title="B/S-Spange Classic" price="Preis: 30 €" img="/images/service5.jpg">
          <p>Sanfte Korrektur bei eingewachsenen Nägeln – wasserfest und unauffällig.</p>
        </Card>
      </div>
    </Section>
  );
}
