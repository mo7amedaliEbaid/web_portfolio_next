import { MetadataRoute } from "next";

// TODO: Replace with your custom domain once deployed
const SITE_URL = "https://mohamedaliebaid.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
