import type { ReactNode } from "react";
import styles from "./Steps.module.css";

export type StepItem = {
  title: string;
  body?: ReactNode;
};

type StepsProps = {
  items: StepItem[];
  className?: string;
};

/**
 * Steps — the design system's numbered "how it works" pattern: a row of
 * steps, each led by a big tabular ember number, a bold title, and a short
 * body. Hairline dividers separate steps on wide viewports; they stack on
 * mobile. Rendered as an <ol> so the order is semantic; the visual number
 * is decorative and hidden from assistive tech.
 */
export function Steps({ items, className }: StepsProps) {
  const classes = [styles.steps, className].filter(Boolean).join(" ");
  return (
    <ol className={classes}>
      {items.map((item, index) => (
        <li key={item.title} className={styles.step}>
          <span className={styles.number} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.title}>{item.title}</h3>
          {item.body}
        </li>
      ))}
    </ol>
  );
}
