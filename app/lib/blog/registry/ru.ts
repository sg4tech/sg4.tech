import type { EnPostSlug } from "./en";
import type { PostEntry } from "./types";

// Posts translated into this locale. Each sets `translationOf` to the English
// original, which is what links the language versions for hreflang.
export const RU_POST_SLUGS = [] as const;
export type RuPostSlug = (typeof RU_POST_SLUGS)[number];

export const ruPosts: ReadonlyArray<PostEntry<RuPostSlug, EnPostSlug>> = [];
