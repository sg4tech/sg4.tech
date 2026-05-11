import type { FooterLink } from "./navigation";
import { GITHUB_SVG_PATH, LINKEDIN_SVG_PATH, TELEGRAM_SVG_PATH } from "./social-icons";

export const BRAND_COPYRIGHT = "© 2026 Victor Demin";

export const footerLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/sg4tech/", iconPath: GITHUB_SVG_PATH },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-demin/", iconPath: LINKEDIN_SVG_PATH },
  { label: "Telegram", href: "https://t.me/cto_lifehacks", iconPath: TELEGRAM_SVG_PATH }
];

// schema.org Person fragment for Victor Demin. Same @id everywhere — referenced
// by ProfessionalService graphs on / and /yii2 to identify the founder/operator.
// Any page rendering Person JSON-LD must use this object verbatim.
export const personSchema = {
  "@type": "Person",
  "@id": "https://sg4.tech/#person",
  name: "Victor Demin",
  url: "https://sg4.tech",
  jobTitle: "Fractional CTO",
  description:
    "Engineering delivery consultant helping product teams improve speed, predictability, and efficiency through system thinking, metrics, and AI.",
  sameAs: [
    "https://github.com/sg4tech/",
    "https://www.linkedin.com/in/victor-demin/",
    "https://t.me/cto_lifehacks",
    "https://habr.com/users/sg4tech/",
    "https://medium.com/@sg4tech"
  ]
};
