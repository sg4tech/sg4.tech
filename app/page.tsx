import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import styles from "./page.module.css";

const problemPages = [
  {
    href: "/why-engineering-is-slow",
    title: "Start Here: Why Engineering Feels Slow",
    description:
      "The main diagnosis page for founders who feel delivery is slower, less predictable, and less explainable than it should be."
  },
  {
    href: "/why-nothing-ships",
    title: "Why Nothing Ships",
    description:
      "A diagnosis page for teams that look busy from the outside but produce little customer-visible progress."
  },
  {
    href: "/why-hiring-more-engineers-doesnt-help",
    title: "Why Hiring More Engineers Doesn't Help",
    description:
      "A page for companies that keep adding people without improving throughput, ownership, or predictability."
  }
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Hybrid Gen SEO + Consulting</p>
        <h1>Why delivery breaks, in language a founder can actually use.</h1>
        <p className={styles.lead}>
          SG4 Tech is not a general engineering blog. It is a focused set of diagnostic pages for founders and CEOs
          who need to understand why product delivery feels slow, unclear, and difficult to trust.
        </p>
      </section>

      <Section
        title="Start With the Core Problem"
        intro="The fastest path to product signal is one strong entry page, not three weak ones. The primary page is now the anchor for the MVP."
      >
        <div className={styles.grid}>
          {problemPages.map((page) => (
            <Link key={page.href} href={page.href} className={styles.card}>
              <h2>{page.title}</h2>
              <p>{page.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        title="What the Product Needs to Do"
        intro="Each page should help a business leader do three things quickly: recognize the pattern, understand the cause, and decide whether a deeper diagnostic conversation is worth having."
      >
        <ul className={styles.list}>
          <li>Give founders language for a delivery problem they already feel but cannot frame cleanly</li>
          <li>Translate engineering friction into business consequences and tradeoffs</li>
          <li>Earn enough trust that a soft consulting CTA feels natural instead of promotional</li>
        </ul>
      </Section>

      <CTA
        text="If your team is busy but delivery still feels opaque, start with the flagship diagnosis page and see whether the pattern matches your situation."
        href="/why-engineering-is-slow"
        linkLabel="Read the core diagnosis"
      />
    </main>
  );
}
