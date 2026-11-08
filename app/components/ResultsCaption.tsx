import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import styles from "./ResultsCaption.module.css";

type ResultsCaptionProps = {
  locale: Locale;
  className?: string;
  // "onDark" when the caption sits on a dark (--surface-inverse) panel.
  tone?: "default" | "onDark";
};

// Proximate results disclaimer placed directly under a quantified stat block.
// Text + styling live in one place so the three landings stay identical.
export function ResultsCaption({ locale, className, tone = "default" }: ResultsCaptionProps) {
  const classes = [styles.caption, tone === "onDark" ? styles.onDark : undefined, className];
  return <p className={classes.filter(Boolean).join(" ")}>{getDictionary(locale).proof.resultsCaption}</p>;
}
