import type { Metadata } from "next";
import { AiVibecodingView } from "../../../views/ai-vibecoding/AiVibecodingView";
import { buildAiVibecodingMetadata } from "../../../views/ai-vibecoding/ai-vibecoding-seo";
import { aiVibecodingContent } from "./content";

export const metadata: Metadata = buildAiVibecodingMetadata("pt-br", aiVibecodingContent);

export default function AiVibecodingPage() {
  return <AiVibecodingView locale="pt-br" content={aiVibecodingContent} />;
}
