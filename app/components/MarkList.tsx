import { Check, X } from "lucide-react";
import { Icon } from "./Icon";
import styles from "./MarkList.module.css";

type MarkKind = "check" | "x" | "dot";

type MarkListProps = {
  items: string[];
  // check → green tick (positive / best fit), x → muted cross (negative /
  // not a fit), dot → neutral marker (plain symptoms). Replaces bare disc
  // bullets so every marketing list carries a visual anchor, per the DS.
  kind?: MarkKind;
  className?: string;
};

export function MarkList({ items, kind = "dot", className }: MarkListProps) {
  const cls = [styles.list, className].filter(Boolean).join(" ");
  return (
    <ul className={cls}>
      {items.map((item) => (
        <li key={item}>
          {kind === "check" ? (
            <Icon icon={Check} className={styles.check} />
          ) : kind === "x" ? (
            <Icon icon={X} className={styles.cross} />
          ) : (
            <span className={styles.dot} aria-hidden="true" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
