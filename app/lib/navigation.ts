export type NavigationItem = {
  href: string;
  label: string;
  mobileNav: "primary" | "secondary";
};

export type FooterLink = {
  label: string;
  href: string;
  iconPath: string;
};

// Internal legal/utility links (Privacy, etc.). No icon and no target="_blank" —
// these stay on-site, unlike the icon-bearing social links in FooterLink.
export type LegalLink = {
  label: string;
  href: string;
};

// Fine-print legal disclaimers rendered as small muted text at the foot of every
// page. `label` is the bold lead-in; `body` is the running text after it.
export type FooterDisclaimer = {
  label: string;
  body: string;
};

// Cross-page site navigation shared by the content pages (privacy + blog posts),
// rendered via <SiteNav />. Landing pages define their own in-page section-anchor
// nav inline; the blog index omits its own self-link, so both keep passing items
// to TopNavigation directly rather than using this set.
export const siteNavigationItems: NavigationItem[] = [
  { href: "/", label: "Home", mobileNav: "primary" },
  { href: "/blog/", label: "Blog", mobileNav: "primary" },
  { href: "/yii2/", label: "Yii2", mobileNav: "secondary" },
  { href: "/ai-vibecoding/", label: "AI vibecoding", mobileNav: "secondary" }
];
