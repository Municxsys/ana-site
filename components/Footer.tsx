export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-harmony/10 mt-10">
      <div className="container py-8 text-xs md:text-sm text-[var(--brand-ink)]/70 flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center justify-between">
        <p>© {year} Ana Casarotti – Maniküre, Pediküre & medizinische Fußpflege.</p>
        <div className="flex flex-wrap gap-4">
          <span>Köln & Umgebung · mobile Behandlungen</span>
          <a
            href="/impressum"
            className="hover:text-[var(--brand-ink)] underline-offset-2 hover:underline"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="hover:text-[var(--brand-ink)] underline-offset-2 hover:underline"
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
