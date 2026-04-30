import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://debservices.canalrose.be";

  const routes = [
    "",
    "/about",
    "/contact",
    "/devis",
    "/urgence",
    "/zones-de-services",
    "/mentions-legales",
    "/privacy-policy",
  ];

  // Dynamic service routes (common ones to ensure they are indexed)
  const services = [
    "debouchage-canalisation",
    "plombier-urgence",
    "chauffage-entretien",
    "vidange-fosse-septique",
    "electricien-depannage",
    "installation-gaz",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/${service}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
