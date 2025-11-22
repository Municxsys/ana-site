import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="container py-16 md:py-24 space-y-6">
      {title && (
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--brand-ink)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-[var(--brand-ink)]/75 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
