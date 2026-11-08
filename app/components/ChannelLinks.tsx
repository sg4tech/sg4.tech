import { BrandIcon } from "./BrandIcon";
import styles from "./ChannelLinks.module.css";

export type ChannelLink = {
  label: string;
  href: string;
  iconPath: string;
};

type ChannelLinksProps = {
  items: ReadonlyArray<ChannelLink>;
  ariaLabel: string;
};

// The writing channels as one quiet line: same-size monochrome icons and muted
// labels, so no brand mark shouts. Shared so it looks the same on every page.
export function ChannelLinks({ items, ariaLabel }: ChannelLinksProps) {
  return (
    <ul className={styles.channelList} aria-label={ariaLabel}>
      {items.map((link) => (
        <li key={link.label}>
          <a href={link.href} className={styles.channelLink} target="_blank" rel="noreferrer">
            <BrandIcon label={link.label} path={link.iconPath} className={styles.channelIcon} />
            <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
