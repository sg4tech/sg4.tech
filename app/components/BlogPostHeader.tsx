import Image from "next/image";
import type { ReactNode } from "react";
import { VICTOR_PHOTO_PATH } from "../lib/brand";
import { formatPostDate } from "../lib/blog/posts";
import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import styles from "./BlogPostHeader.module.css";

type BlogPostHeaderProps = {
  locale: Locale;
  title: string;
  publishedAt: string;
  readingMinutes: number;
  lede: ReactNode;
};

export function BlogPostHeader({ locale, title, publishedAt, readingMinutes, lede }: BlogPostHeaderProps) {
  const { author, blog } = getDictionary(locale);
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.byline}>
        <Image
          src={VICTOR_PHOTO_PATH}
          alt={author.name}
          width={40}
          height={40}
          className={styles.bylineAvatar}
          unoptimized
        />
        <div className={styles.bylineMeta}>
          <p className={styles.bylineBio}>
            {blog.byline.beforeName}
            <span className={styles.bylineName}>{author.name}</span>
            {blog.byline.afterName}
          </p>
          <p className={styles.bylineDate}>
            <time dateTime={publishedAt}>{formatPostDate(publishedAt, locale)}</time>
            {" · "}
            {blog.readingTime(readingMinutes)}
          </p>
        </div>
      </div>
      <p className={styles.lede}>{lede}</p>
    </header>
  );
}
