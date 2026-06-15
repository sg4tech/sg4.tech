import type { LucideIcon } from "lucide-react";
import { Icon } from "./Icon";
import styles from "./Stat.module.css";

type StatProps = {
  // The headline figure — a big tabular ember number (design-system rule:
  // numbers live in Hanken, bold + tabular, never mono). Ember is the
  // "proof" highlight. When a metric is qualitative and has no number, pass
  // `icon` alone — it becomes the ember anchor.
  figure?: string;
  icon?: LucideIcon;
  note?: string; // small overline qualifier, e.g. "Up to"
  label: string;
};

/**
 * Stat — the design system's "metrics as proof" device: a big tabular ember
 * figure in the sans, led by a quiet icon, over a calm label. One open form,
 * shared across every landing so the metric reads as the same element.
 */
export function Stat({ figure, icon, note, label }: StatProps) {
  return (
    <div className={styles.stat}>
      {note ? <span className={styles.note}>{note}</span> : null}
      <span className={styles.header}>
        {icon ? <Icon icon={icon} className={figure ? styles.icon : styles.figureIcon} /> : null}
        {figure ? <span className={styles.figure}>{figure}</span> : null}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
