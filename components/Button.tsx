"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "solid" | "gradient" | "outline";
};

export default function Button({
  children,
  className,
  variant = "solid",
  ...rest
}: ButtonProps) {
  const variantClasses = {
    solid:
      "bg-green-harmony text-neutral-sand hover:bg-green-vitality",
    gradient:
      "bg-gradient-to-br from-green-serenity via-green-harmony to-green-vitality text-neutral-sand hover:brightness-110",
    outline:
      "border-2 border-green-harmony text-green-harmony hover:bg-green-harmony hover:text-neutral-sand",
  };

  return (
    <button
      {...rest}
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-sm sm:text-base",
        "shadow-soft transition focus:outline-none focus:ring-2 focus:ring-green-harmony/50",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
