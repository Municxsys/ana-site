"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Start" },
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
        fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled
          ? "backdrop-blur bg-neutral-sand/70 border-b border-green-harmony/20 shadow-soft"
          : "bg-transparent"
        }
      `}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Brand */}
        <Link
          href="/"
          className="font-serif text-xl text-green-vitality tracking-wide hover:text-green-harmony transition"
        >
          Ana Casarotti
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="
                text-ink/80 hover:text-green-vitality transition
                font-medium tracking-wide
              "
            >
              {l.label}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}
