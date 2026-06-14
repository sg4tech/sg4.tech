import type { LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import styles from "./Stat.module.css";

type StatProps = {
  // The headline figure — a big tabular ember number (e.g. "2–3x"). When a
  // metric is qualitative and has no number, pass `icon` instead so the stat
  // still carries an ember visual anchor.
  figure?: string;
  icon?: LucideIcon;
  note?: string; // small overline qualifier, e.g. "Up to"
  label: string;
};

/**
 * Stat — the design system's "metrics as proof" device: a big tabular figure
 * in the sans (numbers stay in Hanken, never mono) over a quiet label.
 */
export function Stat({ figure, icon, note, label }: StatProps) {
  return (
    <div className={styles.stat}>
      {note ? <span className={styles.note}>{note}</span> : null}
      <span className={styles.figure}>
        {figure ?? (icon ? <Icon icon={icon} className={styles.figureIcon} /> : null)}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
