import Link from "next/link";
import styles from "./CTA.module.css";

type CTAProps = {
  text: string;
  href: string;
  linkLabel?: string;
};

export function CTA({ text, href, linkLabel = "Get in touch" }: CTAProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <aside className={styles.cta}>
      <p>{text}</p>
      <Link href={href} className={styles.link} {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}>
        {linkLabel}
      </Link>
    </aside>
  );
}
