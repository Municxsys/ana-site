"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-40 border-b border-brand-harmony/10 backdrop-blur-md transition-colors",
        scrolled ? "bg-[var(--brand-sand)]/95" : "bg-[var(--brand-sand)]/70"
      )}
    >
      <nav className="container flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-round.png"
            alt="Ana Casarotti Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-sm md:text-base font-semibold tracking-wide text-[var(--brand-ink)]">
            Ana Casarotti
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/leistungen"
            className="text-[var(--brand-ink)]/75 hover:text-[var(--brand-ink)]"
          >
            Leistungen
          </Link>
          <Link
            href="/gutscheine"
            className="text-[var(--brand-ink)]/75 hover:text-[var(--brand-ink)]"
          >
            Gutscheine
          </Link>
          <Link
            href="/ueber-ana"
            className="text-[var(--brand-ink)]/75 hover:text-[var(--brand-ink)]"
          >
            Über Ana
          </Link>
          <Link
            href="/kontakt"
            className="text-[var(--brand-ink)]/75 hover:text-[var(--brand-ink)]"
          >
            Kontakt
          </Link>

          <Link
            href="/kontakt"
            className="ml-2 inline-flex items-center rounded-full bg-brand-ink text-white px-4 py-2 text-xs font-medium hover:bg-brand-harmony transition"
          >
            Termin buchen
          </Link>
        </div>
      </nav>
    </header>
  );
}
