import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { Icon } from "./Icon";
import styles from "./FaqItem.module.css";

type FaqItemProps = {
  question: ReactNode;
  answer: ReactNode;
};

// Closed by default: the question list is for scanning, the answer opens on
// demand. Native <details> needs no JS and works with keyboard, screen
// readers and find-in-page; the answer stays in the DOM.
export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className={styles.faqItem}>
      <summary className={styles.summary}>
        <h3 className={styles.question}>{question}</h3>
        <Icon icon={Plus} className={styles.toggle} />
      </summary>
      <div className={styles.answer}>{answer}</div>
    </details>
  );
}
