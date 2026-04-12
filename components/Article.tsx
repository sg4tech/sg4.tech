import type { ComponentType } from "react";
import { CTA } from "@/components/CTA";
import styles from "./Article.module.css";

type ArticleProps = {
  content: ComponentType;
};

export default function Article({ content: Content }: ArticleProps) {
  return (
    <main className={styles.page}>
      <article className={styles.article}>
        <Content />
      </article>
      <CTA
        text="If this feels familiar, I can help diagnose the underlying delivery issues and make the next steps clearer."
        href="/about"
        linkLabel="See the consulting context"
      />
    </main>
  );
}
