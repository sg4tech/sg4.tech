import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import styles from "./page.module.css";

const problemPages = [
  {
    href: "/why-engineering-is-slow",
    title: "Why Engineering Is Slow",
    description:
      "A page for founders who feel every roadmap item takes too long even with a full team."
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
        <h1>Engineering delivery problems, explained in business terms.</h1>
        <p className={styles.lead}>
          SG4 Tech is a focused platform for founders and CEOs who need to understand why product delivery feels
          slow, unclear, and difficult to trust.
        </p>
      </section>

      <Section
        title="Problem Pages"
        intro="Each page is designed to help a decision-maker recognize a delivery failure, understand what causes it, and see what effective diagnosis looks like."
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
        title="Who This Is For"
        intro="The MVP speaks to startup and growth-stage leaders who already have an engineering team but still cannot get a reliable answer to simple business questions about delivery."
      >
        <ul className={styles.list}>
          <li>Founders with a team of 10 to 100 engineers</li>
          <li>CEOs whose roadmap feels slower than revenue or market pressure allows</li>
          <li>Leaders who want diagnosis and leverage, not generic engineering advice</li>
        </ul>
      </Section>

      <CTA
        text="If your team is busy but delivery still feels opaque, I can help diagnose what is actually slowing things down."
        href="/about"
        linkLabel="Learn more about the consulting angle"
      />
    </main>
  );
}
