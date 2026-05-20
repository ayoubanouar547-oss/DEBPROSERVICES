import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { belgianCities } from "@/lib/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://debservices.canalrose.be";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/devis",
    "/urgence",
    "/zones-de-services",
    "/mentions-legales",
    "/privacy-policy",
    "/loodgieter-grimbergen",
    "/plombier-grimbergen",
    "/chauffagiste-grimbergen",
    "/electricien-grimbergen",
    "/debouchage-grimbergen",
    "/installateur-vmc",
    "/vidange-fosse-septique-liege",
    "/plombier-woluwe",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Static Routes
  for (const route of staticRoutes) {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    });
  }

  // 2. Service Pages & subService Pages
  for (const service of services) {
    // Top level service page
    sitemapEntries.push({
      url: `${baseUrl}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    });

    sitemapEntries.push({
      url: `${baseUrl}/zones-de-services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    });

    // Subservice pages
    for (const sub of service.subServices) {
      sitemapEntries.push({
        url: `${baseUrl}/${service.slug}/${sub.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      });
    }

    // 3. Service + City Pages
    for (const city of belgianCities) {
      sitemapEntries.push({
        url: `${baseUrl}/zones-de-services/${service.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });

      // 4. Service + SubService + City Pages
      for (const sub of service.subServices) {
        sitemapEntries.push({
          url: `${baseUrl}/zones-de-services/${service.slug}/${sub.slug}/${city.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        });
      }
    }
  }

  return sitemapEntries;
}
