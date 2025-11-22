import type { ReactNode } from "react";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section
      id={id}
      className="relative py-14 px-5"
    >
      {/* Soft Gradient Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/40 via-sand/10 to-transparent opacity-80" />

      <div className="relative mx-auto max-w-5xl">
        {/* Titelblock */}
        {(title || subtitle) && (
          <div className="mb-10 space-y-2">
            {title && (
              <h2 className="font-logo text-3xl text-vitality drop-shadow-sm tracking-wide">
                {title}
              </h2>
            )}

            {subtitle && (
              <p className="text-sm md:text-base text-vitality/80 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}

            {/* Feine Linie */}
            <div className="mt-4 h-[1px] bg-gradient-to-r from-vitality/20 via-serenity/40 to-vitality/20" />
          </div>
        )}

        {/* Inhalt */}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
}