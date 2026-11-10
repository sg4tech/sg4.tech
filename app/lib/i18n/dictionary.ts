import { createLookup } from "../lookup";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { ptBr } from "./pt-br";
import { ru } from "./ru";
import type { Locale } from "./locales";
import type { SiteDictionary } from "./types";

export const getDictionary = createLookup<Locale, SiteDictionary>({ en, ru, de, "pt-br": ptBr, fr, es });
