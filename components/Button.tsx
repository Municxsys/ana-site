"use client";

import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type ButtonAsLink = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, ...rest } = props;

  // Wenn href existiert → Link-Button
  if ("href" in props && props.href) {
    return (
      <a
        {...rest}
        href={props.href}
        className={clsx(
          "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-sm sm:text-base",
          "shadow-soft transition focus:outline-none focus:ring-2 focus:ring-green-harmony/50",
          "bg-green-harmony text-neutral-sand hover:bg-green-vitality",
          className
        )}
      >
        {children}
      </a>
    );
  }

  // Normaler Button
  return (
    <button
      {...rest}
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold text-sm sm:text-base",
        "shadow-soft transition focus:outline-none focus:ring-2 focus:ring-green-harmony/50",
        "bg-green-harmony text-neutral-sand hover:bg-green-vitality",
        className
      )}
    >
      {children}
    </button>
  );
}
