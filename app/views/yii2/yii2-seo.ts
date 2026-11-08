import type { Metadata } from "next";
import type { Locale } from "../../lib/i18n/locales";
import { buildPageMetadata } from "../../lib/page-metadata";
import { buildLandingStructuredData } from "../../lib/structured-data";
import type { Yii2Content } from "./yii2-content";

export function buildYii2Metadata(locale: Locale, content: Yii2Content): Metadata {
  return buildPageMetadata(locale, "yii2", content.meta);
}

export function buildYii2StructuredData(locale: Locale, content: Yii2Content) {
  return buildLandingStructuredData(locale, "yii2", content.service, content.faq);
}
