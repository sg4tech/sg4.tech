"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackUmamiEvent } from "../lib/analytics";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
  eventName?: string;
  payload?: Record<string, string>;
};

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
  const variantClass = variant === "primary" ? styles.primary : styles.secondary;
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
