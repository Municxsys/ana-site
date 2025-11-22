import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-sand/70 backdrop-blur-lg border-b border-serenity/40 shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">

        {/* Logo + Titel */}
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image
              src="/logo.png"        // <-- korrekt für dein Setup
              alt="Logo Ana Casarotti"
              fill
              className="object-contain drop-shadow-md"
            />
          </div>

          <div className="leading-tight select-none">
            <p className="font-logo text-2xl md:text-3xl tracking-wide text-vitality">
              ana casarotti
            </p>
            <p className="text-[11px] md:text-xs text-vitality/70">
              Medizinische Fußpflege · Maniküre · Pediküre
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="tel:+4915755598937"
          className="rounded-full bg-terracotta px-5 py-2 text-xs md:text-sm font-medium
                     text-sand shadow-sm hover:bg-vitality hover:shadow-md
                     transition-all duration-300"
        >
          Termin vereinbaren
        </a>
      </div>
    </header>
  );
}