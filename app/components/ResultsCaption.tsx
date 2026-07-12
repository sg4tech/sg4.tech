import { RESULTS_CAPTION } from "../lib/brand";
import styles from "./ResultsCaption.module.css";

type ResultsCaptionProps = {
  className?: string;
};

// Proximate results disclaimer placed directly under a quantified stat block.
// Text + styling live in one place so the three landings stay identical.
export function ResultsCaption({ className }: ResultsCaptionProps) {
  return <p className={[styles.caption, className].filter(Boolean).join(" ")}>{RESULTS_CAPTION}</p>;
}
