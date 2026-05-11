"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackUmamiEvent } from "../analytics";

type TrackedLinkProps = {
  children: ReactNode;
  className: string;
  eventName: string;
  href: string;
  payload: Record<string, string>;
  rel?: string;
  target?: string;
};

export default function TrackedLink({
  children,
  className,
  eventName,
  href,
  payload,
  rel,
  target
}: TrackedLinkProps) {
  function handleClick() {
    trackUmamiEvent(eventName, payload);
  }

  return (
    <Link href={href} className={className} target={target} rel={rel} onClick={handleClick}>
      {children}
    </Link>
  );
}
