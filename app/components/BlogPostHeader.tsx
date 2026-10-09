import Image from "next/image";
import type { ReactNode } from "react";
import { formatPostDate } from "../lib/blog/posts";
import styles from "./BlogPostHeader.module.css";

type BlogPostHeaderProps = {
  title: string;
  publishedAt: string;
  readingMinutes: number;
  lede: ReactNode;
};

export function BlogPostHeader({ title, publishedAt, readingMinutes, lede }: BlogPostHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.byline}>
        <Image
          src="/brand/victor-demin.jpg"
          alt="Victor Demin"
          width={40}
          height={40}
          className={styles.bylineAvatar}
          unoptimized
        />
        <div className={styles.bylineMeta}>
          <p className={styles.bylineBio}>
            <span className={styles.bylineName}>Victor Demin</span>
            {" has 15+ years helping engineering organizations improve delivery speed, predictability, and system health."}
          </p>
          <p className={styles.bylineDate}>
            <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>
            {" · "}
            {readingMinutes} min read
          </p>
        </div>
      </div>
      <p className={styles.lede}>{lede}</p>
    </header>
  );
}
