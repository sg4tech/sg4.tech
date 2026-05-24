import type { ReactNode } from "react";
import styles from "./FaqItem.module.css";

type FaqItemProps = {
  question: ReactNode;
  answer: ReactNode;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <article className={styles.faqItem}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.answer}>{answer}</div>
    </article>
  );
}
