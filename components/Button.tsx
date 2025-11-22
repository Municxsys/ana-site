"use client";

import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";

export type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-harmony";

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-brand-ink text-white hover:bg-brand-harmony shadow-soft ring-offset-[var(--brand-sand)]",
    outline:
      "border border-brand-harmony/40 text-brand-ink hover:bg-white/60 bg-white/40 ring-offset-[var(--brand-sand)]",
    ghost:
      "text-brand-ink hover:bg-brand-serenity/40 ring-offset-[var(--brand-sand)]",
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant ?? "primary"], // TS-sicherer Kollaps
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
