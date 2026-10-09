import { describe, expect, it } from "vitest";

import { buildPostStructuredData } from "@/app/lib/blog/post-schema";
import { getPostBySlug } from "@/app/lib/blog/posts";
import { personSchema, SITE_URL } from "@/app/lib/brand";

const SLUG = "code-entropy-ci-checks-ai-legacy";
const POST = getPostBySlug(SLUG);
const POST_URL = `${SITE_URL}/blog/${SLUG}/`;
const FAQ = [
  { question: "First?", answer: "One." },
  { question: "Second?", answer: "Two." }
];

type Node = Record<string, unknown>;

function nodeOfType(graph: ReadonlyArray<Node>, type: string): Node {
  const node = graph.find((entry) => entry["@type"] === type);
  if (!node) throw new Error(`no ${type} node`);
  return node;
}

describe("buildPostStructuredData", () => {
  const data = buildPostStructuredData(SLUG, FAQ);
  const graph = data["@graph"] as ReadonlyArray<Node>;

  it("ships Person, Article, FAQPage and BreadcrumbList in one schema.org graph", () => {
    expect(data["@context"]).toBe("https://schema.org");
    expect(graph.map((node) => node["@type"])).toEqual([
      "Person",
      "Article",
      "FAQPage",
      "BreadcrumbList"
    ]);
    expect(graph[0]).toBe(personSchema);
  });

  it("describes the article from the post registry", () => {
    expect(nodeOfType(graph, "Article")).toEqual({
      "@type": "Article",
      "@id": `${POST_URL}#article`,
      mainEntityOfPage: POST_URL,
      url: POST_URL,
      headline: POST.title,
      description: POST.description,
      datePublished: POST.publishedAt,
      dateModified: POST.modifiedAt,
      inLanguage: "en",
      image: {
        "@type": "ImageObject",
        url: `${POST_URL}opengraph-image.png`,
        width: 1200,
        height: 630
      },
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      keywords: POST.tags.join(", ")
    });
  });

  it("mirrors every FAQ item as a Question with its answer", () => {
    expect(nodeOfType(graph, "FAQPage")).toEqual({
      "@type": "FAQPage",
      "@id": `${POST_URL}#faq`,
      mainEntity: [
        { "@type": "Question", name: "First?", acceptedAnswer: { "@type": "Answer", text: "One." } },
        { "@type": "Question", name: "Second?", acceptedAnswer: { "@type": "Answer", text: "Two." } }
      ]
    });
  });

  it("builds the Home → Blog → post breadcrumb", () => {
    expect(nodeOfType(graph, "BreadcrumbList")).toEqual({
      "@type": "BreadcrumbList",
      "@id": `${POST_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
        { "@type": "ListItem", position: 3, name: POST.title, item: POST_URL }
      ]
    });
  });

  it("links the article to its pillar post when one is given", () => {
    const withPillar = buildPostStructuredData(SLUG, FAQ, {
      partOf: "diagnose-broken-engineering-delivery"
    });
    const article = nodeOfType(withPillar["@graph"], "Article");

    expect(article.isPartOf).toEqual({
      "@id": `${SITE_URL}/blog/diagnose-broken-engineering-delivery/#article`
    });
    // Key order is what JSON.stringify emits into the page.
    expect(Object.keys(article).slice(-2)).toEqual(["isPartOf", "keywords"]);
  });

  it("omits isPartOf when no pillar is given", () => {
    expect(nodeOfType(graph, "Article")).not.toHaveProperty("isPartOf");
  });

  it("uses a headline override for the article only, not the breadcrumb", () => {
    const withHeadline = buildPostStructuredData(SLUG, FAQ, { headline: "On-page H1" });
    const overridden = withHeadline["@graph"] as ReadonlyArray<Node>;

    expect(nodeOfType(overridden, "Article").headline).toBe("On-page H1");
    const crumbs = nodeOfType(overridden, "BreadcrumbList").itemListElement as ReadonlyArray<Node>;
    expect(crumbs[2]?.name).toBe(POST.title);
  });
});
