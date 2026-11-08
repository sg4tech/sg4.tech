import type { Metadata } from "next";
import type { Locale } from "../../lib/i18n/locales";
import { buildPageMetadata } from "../../lib/page-metadata";
import { buildLandingStructuredData } from "../../lib/structured-data";
import type { AiVibecodingContent } from "./ai-vibecoding-content";

export function buildAiVibecodingMetadata(locale: Locale, content: AiVibecodingContent): Metadata {
  return buildPageMetadata(locale, "ai-vibecoding", content.meta);
}

export function buildAiVibecodingStructuredData(locale: Locale, content: AiVibecodingContent) {
  return buildLandingStructuredData(locale, "ai-vibecoding", content.service, content.faq);
}
