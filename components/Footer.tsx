export default function Footer() {
  return (
    <footer className="
      mt-20
      border-t border-green-harmony/20
      bg-neutral-sand/40 backdrop-blur-sm
    ">
      <div className="
        mx-auto max-w-6xl
        px-6 py-10
        text-sm text-ink/70
        flex flex-col md:flex-row
        gap-4 md:items-center md:justify-between
      ">
        
        {/* Copyright */}
        <p className="text-center md:text-left">
          © 2025 Ana Casarotti – Medizinische Fußpflege & Kosmetik
        </p>

        {/* Links */}
        <div className="flex justify-center md:justify-end gap-6">
          <a 
            href="/impressum" 
            className="
              hover:text-green-vitality 
              transition font-medium
            "
          >
            Impressum
          </a>

          <a 
            href="/datenschutz" 
            className="
              hover:text-green-vitality 
              transition font-medium
            "
          >
            Datenschutz
          </a>
        </div>

      </div>
    </footer>
  );
}
