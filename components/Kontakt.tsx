
import Section from "@/components/Section";
export default function Kontakt(){
  return (
    <Section id="kontakt" title="Kontakt & Termin" subtitle="Schreiben Sie mir auf WhatsApp oder rufen Sie an">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-white/90 backdrop-blur-sm p-6 shadow-card border border-green-vitality/10">
          <h4 className="font-medium text-green-vitality">Kontakt</h4>
          <p className="mt-2">Telefon: <a className="underline" href="tel:+4915755598937">+49 1575 5598937</a></p>
          <p className="mt-1">Instagram: <a className="underline" href="https://instagram.com/ana_casarotti">@ana_casarotti</a></p>
          <p className="mt-2 text-ink/70">Hausbesuche in Köln und Umgebung – Anschrift auf Anfrage.</p>
        </div>
        <div className="rounded-3xl bg-white/90 backdrop-blur-sm p-3 shadow-card border border-green-vitality/10">
          <h4 className="font-medium text-green-vitality px-3 pt-2">Einzugsgebiet</h4>
          <div className="mt-2 aspect-[4/3] w-full overflow-hidden rounded-3xl border border-green-vitality/10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10615.351915717885!2d6.956!3d50.937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25a6d7a4b1b9%3A0x5f2b3c1d9e6b1dd6!2zS8O2bG4!5e0!3m2!1sde!2sde!4v1700000000000" width="100%" height="100%" style={{border:0}} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <a href="https://wa.me/4915755598937" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 rounded-full bg-[#25D366] text-white px-5 py-3 shadow-soft hover:opacity-90 transition" aria-label="WhatsApp schreiben">WhatsApp</a>
    </Section>
  );
}
