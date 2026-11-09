import { createLookup } from "../lookup";
import { en } from "./en";
import { ru } from "./ru";
import type { Locale } from "./locales";
import type { SiteDictionary } from "./types";

export const getDictionary = createLookup<Locale, SiteDictionary>({ en, ru });
