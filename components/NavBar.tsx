"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Start" },
  { href: "/uber-mich", label: "Über mich" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/gutscheine", label: "Gutscheine" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Header-Hintergrund ab Scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body-Scroll sperren, wenn Mobile-Menu offen
  useEffect(() => {
    const root = document.documentElement;
    if (open) root.classList.add("overflow-hidden");
    else root.classList.remove("overflow-hidden");
    return () => root.classList.remove("overflow-hidden");
  }, [open]);

  // Bei Routenwechsel Mobile-Menu schließen
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Beim Resize auf Desktop schließen
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] pointer-events-auto transition-colors ${
        scrolled
          ? "backdrop-blur-md bg-black/15 border-b border-[var(--ana-cream)]/15"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6 py-4 text-[var(--ana-cream)]"
        aria-label="Hauptnavigation"
      >
        {/* Logo/Wortmarke */}
        <Link
          href="/"
          className="font-brand text-lg md:text-xl tracking-[0.25em] uppercase"
        >
          Ana Casarotti
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {links.map((l, i) => {
            const active =
              pathname === l.href ||
              (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className={`nav-link ${
                    active ? "text-[var(--ana-cream)]" : "text-[var(--ana-cream)]/80"
                  } hover:text-[var(--ana-cream)]`}
                >
                  {l.label}
                </Link>
                {i < links.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-4 w-px -translate-y-1/2 bg-[var(--ana-cream)]/15 md:block"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[var(--ana-cream)] hover:text-[var(--ana-cream)]/80 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        id="mobile-nav"
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[var(--ana-green-dark)]/95 backdrop-blur-md border-t border-white/10 shadow-lg">
          <ul className="flex flex-col items-center py-8 gap-6 text-lg font-body text-[var(--ana-cream)]">
            {links.map((l) => {
              const active =
                pathname === l.href ||
                (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`${
                      active
                        ? "text-[var(--ana-cream)]"
                        : "text-[var(--ana-cream)]/90"
                    } hover:text-[var(--ana-cream)]`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
              }
