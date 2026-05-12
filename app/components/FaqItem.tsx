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
      <p className={styles.answer}>{answer}</p>
    </article>
  );
}
