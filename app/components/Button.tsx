"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackUmamiEvent } from "../lib/analytics";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "inverse" | "inverseGhost";
  className?: string;
  target?: string;
  rel?: string;
  eventName?: string;
  payload?: Record<string, string>;
};

function pickVariantClass(variant: NonNullable<ButtonProps["variant"]>): string {
  switch (variant) {
    case "secondary":
      return styles.secondary;
    case "inverse":
      return styles.inverse;
    case "inverseGhost":
      return styles.inverseGhost;
    default:
      return styles.primary;
  }
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  target,
  rel,
  eventName,
  payload,
}: ButtonProps) {
  const variantClass = pickVariantClass(variant);
  const cls = [styles.button, variantClass, className].filter(Boolean).join(" ");

  function handleClick() {
    if (eventName) trackUmamiEvent(eventName, payload ?? {});
  }

  return (
    <Link href={href} className={cls} target={target} rel={rel} onClick={handleClick}>
      {children}
    </Link>
  );
}
