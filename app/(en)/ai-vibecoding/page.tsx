import type { Metadata } from "next";
import { AiVibecodingView, buildAiVibecodingMetadata } from "../../views/ai-vibecoding/AiVibecodingView";
import { aiVibecodingContent } from "./content";

export const metadata: Metadata = buildAiVibecodingMetadata("en", aiVibecodingContent);

export default function AiVibecodingPage() {
  return <AiVibecodingView locale="en" content={aiVibecodingContent} />;
}
