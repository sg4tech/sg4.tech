import { FaqItem } from "./FaqItem";
import { Section } from "./Section";
import { SectionHeader } from "./SectionHeader";
import styles from "./FaqSection.module.css";

type FaqItemData = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: ReadonlyArray<FaqItemData>;
  id?: string;
};

export function FaqSection({ items, id }: FaqSectionProps) {
  return (
    <Section id={id} aria-labelledby="faq-title">
      <SectionHeader title="FAQ" id="faq-title" />
      <div className={styles.faqList}>
        {items.map((item) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} />
        ))}
      </div>
    </Section>
  );
}
