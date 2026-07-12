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
