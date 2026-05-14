import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://sg4.tech";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${baseUrl}/yii2`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/ai-vibecoding`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
