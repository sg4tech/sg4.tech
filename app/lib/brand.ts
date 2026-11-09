import type { FooterLink } from "./navigation";
import { siHabr, siMedium, siTelegram } from "simple-icons";
import { GITHUB_SVG_PATH, LINKEDIN_SVG_PATH, TELEGRAM_SVG_PATH } from "./social-icons";

// Single source of truth for the brand's canonical site URL and short name.
// Imported anywhere that needs to reference the production domain — schema
// @id values, openGraph URLs, sitemap, robots, layout metadataBase, etc.
// Centralized so a domain migration is a one-file change.
export const SITE_URL = "https://sg4.tech";
export const BRAND_NAME = "sg4.tech";

// A page path as it is served: next.config.mjs sets trailingSlash: true, so
// every page lives at "/" or "/<segments>/" and the slash-less form is a 301.
export type SitePath = "/" | `/${string}/`;

export function absoluteUrl(path: SitePath): string {
  return `${SITE_URL}${path}`;
}
export const LINKEDIN_URL = "https://www.linkedin.com/in/victor-demin/";

// Where Victor writes, as the quiet channel line under a landing's writing or
// proof section. Brand names, so the same in every locale.
export const writingChannelLinks: FooterLink[] = [
  { label: "Habr", href: "https://habr.com/users/sg4tech/", iconPath: siHabr.path },
  { label: "Telegram", href: "https://t.me/cto_lifehacks", iconPath: siTelegram.path },
  { label: "Medium", href: "https://medium.com/@sg4tech", iconPath: siMedium.path },
  { label: "LinkedIn", href: LINKEDIN_URL, iconPath: LINKEDIN_SVG_PATH }
];

export const footerLinks: FooterLink[] = [
  { label: "GitHub", href: "https://github.com/sg4tech/", iconPath: GITHUB_SVG_PATH },
  { label: "LinkedIn", href: LINKEDIN_URL, iconPath: LINKEDIN_SVG_PATH },
  { label: "Telegram", href: "https://t.me/cto_lifehacks", iconPath: TELEGRAM_SVG_PATH }
];

// Canonical entity facts for Victor Demin — the single source of truth for the
// on-site JSON-LD below AND the copy that should appear verbatim on off-site
// profiles (LinkedIn, Medium, GitHub, Habr). AI answer engines corroborate an
// entity by matching consistent facts across surfaces, so these must not drift.
// Keep in sync with public/llms.txt.
export const VICTOR_NAME = "Victor Demin";

const VICTOR_JOB_TITLE = "Software engineer & engineering leader";

// Portrait shown in the "Why me" / trust block on every landing AND referenced as
// Person.image in the JSON-LD below — one path so the rendered photo and the
// structured-data image can never drift. Lives at public/brand/victor-demin.jpg.
export const VICTOR_PHOTO_PATH = "/brand/victor-demin.jpg";

// Canonical one-paragraph bio. Person.description renders this; it is also the
// paste-in bio for external profiles (LinkedIn, Medium) so they match it exactly.
const VICTOR_BIO =
  "Hands-on software engineer and engineering leader with 15+ years in engineering and 8+ in engineering leadership, including CTO roles at Wowworks (B2B facility management, EU) and Skysmart by Skyeng (K-12 EdTech, 2M+ MAU). Builds software systems that ship on time and hold up in production — writing the code, fixing what's broken, and leading development inside product teams, from MVP to scale. Delivery metrics, CI guardrails, and AI-assisted workflows are part of how the work gets done.";

// Topics the entity is an authority on — Person.knowsAbout. Lets engines state
// what Victor is expert in. Distinctive concepts that map to a knowledge-graph
// entity are emitted as { "@type": "Thing", sameAs: <Wikipedia> } so engines can
// tie Victor to the established concept; coined/generic topics stay plain strings
// (anchoring those to an unrelated entity would be worse than none).
const VICTOR_KNOWS_ABOUT = [
  "Engineering delivery systems",
  "Software delivery metrics",
  {
    "@type": "Thing",
    name: "Theory of Constraints",
    sameAs: "https://en.wikipedia.org/wiki/Theory_of_constraints"
  },
  {
    "@type": "Thing",
    name: "Little's Law",
    sameAs: "https://en.wikipedia.org/wiki/Little's_law"
  },
  "Work-in-progress limits",
  "Time to Market",
  "Lead time and cycle time",
  "Throughput",
  {
    "@type": "Thing",
    name: "Kanban method",
    sameAs: "https://en.wikipedia.org/wiki/Kanban_(development)"
  },
  "AI-assisted software delivery"
];

// Notable past organizations — Person.alumniOf. Names + public descriptors only
// (no guessed URLs); descriptors match public/llms.txt.
const VICTOR_ALUMNI = [
  { "@type": "Organization", name: "Wowworks", description: "B2B facility management platform (EU)" },
  { "@type": "Organization", name: "Skysmart", description: "K-12 EdTech platform by Skyeng, 2M+ monthly active users" }
];

// Canonical sameAs — the entity's verified profiles. Both the Person schema here
// and the ProfessionalService graph on / reference this exact array so the
// corroboration set never drifts between nodes. NOTE: footerLinks above shows a
// curated UI subset on purpose; this machine-readable list is the complete set.
export const VICTOR_SAME_AS = [
  "https://github.com/sg4tech/",
  LINKEDIN_URL,
  "https://t.me/cto_lifehacks",
  "https://habr.com/users/sg4tech/",
  "https://medium.com/@sg4tech"
];

// schema.org Person fragment for Victor Demin. Same @id everywhere — referenced
// by ProfessionalService graphs on / and /yii2 to identify the founder/operator.
// Any page rendering Person JSON-LD must use this object verbatim.
export const personSchema = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: VICTOR_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${VICTOR_PHOTO_PATH}`,
  jobTitle: VICTOR_JOB_TITLE,
  description: VICTOR_BIO,
  knowsAbout: VICTOR_KNOWS_ABOUT,
  alumniOf: VICTOR_ALUMNI,
  sameAs: VICTOR_SAME_AS
};
