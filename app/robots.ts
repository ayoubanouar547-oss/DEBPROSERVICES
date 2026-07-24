import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/static/"],
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "Google-Extended", "Claude-Web", "ClaudeBot", "CCBot", "YandexBot"],
        allow: "/",
      }
    ],
    sitemap: "https://debservices.canalrose.be/sitemap.xml",
  };
}
