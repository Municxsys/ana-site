"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type FloatingCardProps = {
  title: string;
  children: ReactNode;
  price?: string;
  delay?: number;
};

export default function FloatingCard({
  title,
  children,
  price,
  delay = 0,
}: FloatingCardProps) {
  return (
    <motion.article
      className="card p-6 md:p-7 space-y-3"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
    >
      <header className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg md:text-xl font-semibold text-[var(--brand-ink)]">
          {title}
        </h3>
        {price && (
          <span className="text-sm md:text-base font-medium text-brand-harmony">
            {price}
          </span>
        )}
      </header>
      <div className="text-sm md:text-base text-[var(--brand-ink)]/85">
        {children}
      </div>
    </motion.article>
  );
}
