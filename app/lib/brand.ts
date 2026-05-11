import type { FooterLink } from "./navigation";
import { GITHUB_SVG_PATH, LINKEDIN_SVG_PATH, TELEGRAM_SVG_PATH } from "./social-icons";

export const BRAND_COPYRIGHT = "© 2026 Victor Demin";

export const footerLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/sg4tech/", iconPath: GITHUB_SVG_PATH },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/victor-demin/", iconPath: LINKEDIN_SVG_PATH },
  { label: "Telegram", href: "https://t.me/cto_lifehacks", iconPath: TELEGRAM_SVG_PATH }
];
