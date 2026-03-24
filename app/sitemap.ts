import { MetadataRoute } from "next";

// TODO: Replace with your custom domain once deployed
const SITE_URL = "https://mohamedaliebaid.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
