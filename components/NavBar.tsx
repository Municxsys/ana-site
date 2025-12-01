"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#home", label: "Über" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/gutscheine", label: "Gutscheine" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-colors duration-300
        ${scrolled ? "backdrop-blur bg-hero-olive/80 border-b border-neutral-sand/10" : "bg-transparent"}
      `}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* BRAND links oben wie im Canva-Design */}
        <div className="w-1/3 flex items-center">
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.18em] text-neutral-sand"
          >
            Ana Casarotti
          </Link>
        </div>

        {/* DESKTOP – mittig zentrierte Navigation */}
        <div className="hidden md:flex w-1/3 justify-center items-center gap-6 text-[0.78rem] tracking-[0.35em] uppercase text-neutral-sand/90">
          {links.map((link, index) => (
            <div key={link.href} className="flex items-center gap-6">
              <Link
                href={link.href}
                className="relative pb-1 hover:text-neutral-sand transition-colors"
              >
                {link.label}
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-neutral-sand/40 scale-x-0 group-hover:scale-x-100 origin-center transition-transform" />
              </Link>
              {index !== links.length - 1 && (
                <span className="h-5 w-px bg-neutral-sand/40" />
              )}
            </div>
          ))}
        </div>

        {/* RECHTS – WhatsApp & Telefon Icons */}
        <div className="hidden md:flex w-1/3 justify-end items-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/4915755598937"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
            aria-label="WhatsApp Chat starten"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#25D366"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12 .2C5.51.2.2 5.51.2 12c0 2.11.55 4.16 1.6 5.96L0 24l6.22-1.77A11.94 11.94 0 0 0 12 23.8c6.49 0 11.8-5.31 11.8-11.8 0-3.14-1.22-6.09-3.28-8.28zM12 21.3c-1.91 0-3.78-.52-5.4-1.49l-.38-.23-3.69 1.05 1.05-3.59-.25-.39A9.83 9.83 0 0 1 2.7 12C2.7 6.64 6.64 2.7 12 2.7s9.3 3.94 9.3 9.3-3.94 9.3-9.3 9.3zm5.45-7.05c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.66.15-.19.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.67-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.11 3.22 5.11 4.52 2.38 1 2.86.9 3.37.84.51-.06 1.67-.68 1.9-1.34.24-.66.24-1.23.17-1.34-.07-.1-.27-.17-.57-.32z" />
            </svg>
          </a>

          {/* Telefon */}
          <a
            href="tel:+4915755598937"
            className="hover:opacity-80 transition"
            aria-label="Anrufen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#25D366"
            >
              <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.4 22 2 13.6 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
            </svg>
          </a>
        </div>

        {/* MOBILE – Burger rechts */}
        <button
          className="md:hidden flex w-1/3 justify-end items-center"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menü öffnen"
        >
          <span className="inline-block h-0.5 w-6 bg-neutral-sand mb-1" />
          <span className="inline-block h-0.5 w-6 bg-neutral-sand mb-1" />
          <span className="inline-block h-0.5 w-6 bg-neutral-sand" />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-hero-olive/95 border-t border-neutral-sand/10">
          <div className="mx-auto max-w-6xl px-6 py-4 space-y-4 text-sm tracking-[0.3em] uppercase text-neutral-sand">
            {links.map((link) => (
              <div key={link.href} className="border-b border-neutral-sand/20 pb-3">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  {link.label}
                </Link>
              </div>
            ))}

            <div className="flex items-center justify-end gap-4 pt-2">
              <a
                href="https://wa.me/4915755598937"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat starten"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                >
                  <path d="M20.52 3.48A11.8 11.8 0 0 0 12 .2C5.51.2.2 5.51.2 12c0 2.11.55 4.16 1.6 5.96L0 24l6.22-1.77A11.94 11.94 0 0 0 12 23.8c6.49 0 11.8-5.31 11.8-11.8 0-3.14-1.22-6.09-3.28-8.28z" />
                </svg>
              </a>
              <a href="tel:+4915755598937" aria-label="Anrufen">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                >
                  <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.4 22 2 13.6 2 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
