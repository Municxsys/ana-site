export default function Footer() {
  return (
    <footer
      className="
        mt-24
        border-t border-[var(--ana-cream)]/15
        bg-[var(--ana-green-deep)]/40
        backdrop-blur-sm
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          px-6 py-10
          text-sm
          text-[var(--ana-cream)]/80
          flex flex-col md:flex-row
          gap-4 md:items-center md:justify-between
        "
      >
        {/* Copyright */}
        <p className="text-center md:text-left font-light tracking-wide">
          © 2025 Ana Casarotti – Medizinische Fußpflege & Kosmetik
        </p>

        {/* Links */}
        <div className="flex justify-center md:justify-end gap-8">
          <a
            href="/impressum"
            className="
              hover:text-[var(--ana-nav-hover)]
              transition
              tracking-wide
            "
          >
            Impressum
          </a>

          <a
            href="/datenschutz"
            className="
              hover:text-[var(--ana-nav-hover)]
              transition
              tracking-wide
            "
          >
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
