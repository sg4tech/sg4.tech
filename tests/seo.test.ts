import { describe, expect, it } from "vitest";
import { createPageMetadata } from "@/lib/seo";

describe("createPageMetadata", () => {
  it("builds stable metadata for a page", () => {
    const metadata = createPageMetadata({
      title: "Why Engineering Is Slow",
      description: "A business-first explanation of slow engineering delivery."
    });

    expect(metadata.title).toBe("Why Engineering Is Slow");
    expect(metadata.description).toBe("A business-first explanation of slow engineering delivery.");
    expect(metadata.openGraph).toMatchObject({
      title: "Why Engineering Is Slow",
      description: "A business-first explanation of slow engineering delivery.",
      type: "article"
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "Why Engineering Is Slow",
      description: "A business-first explanation of slow engineering delivery."
    });
  });
});
