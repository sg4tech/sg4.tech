import { createLookup } from "../lookup";
import { en } from "./en";
import type { Locale } from "./locales";
import type { SiteDictionary } from "./types";

export const getDictionary = createLookup<Locale, SiteDictionary>({ en });
