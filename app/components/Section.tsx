import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  children: ReactNode;
};

export function Section({ id, className, children, ...aria }: SectionProps) {
  const classes = [styles.section, className].filter(Boolean).join(" ");
  return (
    <section id={id} className={classes} {...aria}>
      {children}
    </section>
  );
}
