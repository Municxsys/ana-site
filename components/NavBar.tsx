"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Über" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/gutscheine", label: "Gutscheine" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-40
        transition
        ${scrolled ? "backdrop-blur bg-hero-olive/75 border-b border-neutral-sand/20" : ""}
      `}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* LINKS – linker Bereich (Logo/Name) */}
        <div className="w-1/3 flex items-center">
          <Link
            href="/"
            className="font-serif text-xl tracking-wide text-neutral-sand"
          >
            Ana Casarotti
          </Link>
        </div>

        {/* MITTLERER BEREICH – Menü wie in Canva */}
        <div className="w-1/3 hidden md:flex items-center justify-center">
          <div className="flex items-center text-sm tracking-[0.25em] uppercase text-neutral-sand/90">
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-6 py-1
                  hover:text-white transition
                  ${index !== 0 ? "border-l border-neutral-sand/40" : ""}
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* RECHTS – Platz für WhatsApp/Icon oder leer lassen */}
        <div className="w-1/3 flex justify-end items-center gap-3 text-sm">
          {/* Beispiel-WhatsApp-Link – kannst du später mit Icon ersetzen */}
          {/* <a
            href="https://wa.me/4915755598937"
            className="text-[#25D366] font-semibold hover:opacity-80 transition"
            aria-label="WhatsApp Kontakt"
          >
            WhatsApp
          </a> */}
        </div>
      </nav>
    </header>
  );
}
