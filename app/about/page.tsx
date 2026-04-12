import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "About",
  description: "About SG4 Tech and the consulting posture behind the platform."
});

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>About SG4 Tech</p>
        <h1>Operator-level engineering diagnostics for business leaders.</h1>
        <p>
          This platform is built to translate delivery failures into decisions a founder or CEO can act on. The
          focus is not content volume. It is clarity, diagnosis, and leverage.
        </p>
      </section>

      <Section
        title="Positioning"
        intro="The consulting angle is intentionally soft. The platform earns attention by showing pattern recognition, practical systems thinking, and business relevance before it asks for a conversation."
      >
        <p className={styles.copy}>
          The MVP assumes the author brings real delivery experience, measurable improvements, and the ability to
          explain engineering tradeoffs without hiding behind jargon.
        </p>
      </Section>

      <CTA
        text="If your situation feels similar, I am happy to take a look and help clarify what is going on."
        href="mailto:hello@sg4.tech"
        linkLabel="Start a conversation"
      />
    </main>
  );
}
