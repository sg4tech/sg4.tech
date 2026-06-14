import type { ReactNode } from "react";
import { Button } from "./Button";
import styles from "./StatementCta.module.css";

type CtaAction = {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  eventName?: string;
  payload?: Record<string, string>;
};

type StatementCtaProps = {
  id?: string;
  // `heading` is a ReactNode so callers can wrap a closing clause in <em> for
  // the design system's two-tone device (the clause flips to ink on ember).
  heading: ReactNode;
  text: ReactNode;
  primary: CtaAction;
  secondary?: { href: string; label: string };
};

/**
 * StatementCta — the design system's bold statement block: a full ember field
 * with a reversed 800-weight headline, an ink supporting line, a faint SG4
 * watermark, and a white pill CTA. Used to anchor the end of a landing page.
 */
export function StatementCta({ id, heading, text, primary, secondary }: StatementCtaProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.panel}>
        <span className={styles.mark} aria-hidden="true" />
        <div className={styles.content}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <Button
              href={primary.href}
              target={primary.target}
              rel={primary.rel}
              variant="inverse"
              eventName={primary.eventName}
              payload={primary.payload}
            >
              {primary.label}
            </Button>
            {secondary ? (
              <Button variant="ghost" href={secondary.href}>
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
