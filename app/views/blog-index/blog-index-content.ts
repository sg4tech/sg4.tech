import type { PageMeta } from "../../lib/page-metadata";

// Everything the blog index says, in one locale. Post titles, dates, and
// descriptions come from the post registry. `meta.socialTitle` also names the
// blog in its Blog schema node and RSS channel.
export type BlogIndexContent = {
  meta: PageMeta & { socialTitle: string };
  heading: string;
  intro: string;
};
