"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function MotionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Smooth scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Navigation */}
      <NavBar />

      {/* Page Transition Wrapper */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex-grow pt-24 md:pt-28"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />

      {/* Aurora Background Layer (sanfter Glow) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(800px 400px at 25% 20%, rgba(255,255,255,0.12), transparent), radial-gradient(900px 600px at 80% 90%, rgba(158,101,51,0.08), transparent)",
        }}
      />
    </div>
  );
}
