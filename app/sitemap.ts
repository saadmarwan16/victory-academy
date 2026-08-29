import type { MetadataRoute } from "next";

const SITE_URL = "https://victoryacademyenglish.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/kurslar`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/danismanlik`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/hakkimizda`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
