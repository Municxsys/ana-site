
"use client";
import { useEffect, useState } from "react";
const links=[{href:"#home",label:"Start"},{href:"#leistungen",label:"Leistungen"},{href:"#kontakt",label:"Kontakt"}];
export default function NavBar(){
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>10);window.addEventListener("scroll",onScroll);return()=>window.removeEventListener("scroll",onScroll);},[]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled?"backdrop-blur bg-neutral-sand/70 border-b border-green-vitality/10":""}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-serif text-xl text-green-vitality tracking-wide">Ana Casarotti</a>
        <div className="hidden md:flex gap-6">
          {links.map(l=>(<a key={l.href} href={l.href} className="text-ink/80 hover:text-green-harmony transition">{l.label}</a>))}
        </div>
      </nav>
    </header>
  );
}
