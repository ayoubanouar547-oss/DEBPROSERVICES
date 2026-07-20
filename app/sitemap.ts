import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { belgianCities } from "@/lib/data/cities";
import { frToNlSlugMap, frToNlCitySlugMap } from "@/lib/data/translations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://debservices.canalrose.be";

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Helper to push entries with perfect bilingual alternates
  function addBilingualEntry(frPath: string, nlPath: string, priority = 0.8, changeFrequency: "weekly" | "monthly" = "weekly") {
    const frUrl = `${baseUrl}${frPath}`;
    const nlUrl = `${baseUrl}${nlPath}`;

    // 1. Add French URL entry
    sitemapEntries.push({
      url: frUrl,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          fr: frUrl,
          nl: nlUrl,
        },
      },
    });

    // 2. Add Dutch URL entry
    sitemapEntries.push({
      url: nlUrl,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          fr: frUrl,
          nl: nlUrl,
        },
      },
    });
  }

  // 1. Static Pages
  addBilingualEntry("", "/nl", 1.0, "weekly");
  addBilingualEntry("/about", "/nl", 0.7, "weekly");
  addBilingualEntry("/contact", "/nl", 0.7, "weekly");
  addBilingualEntry("/devis", "/nl", 0.7, "weekly");
  addBilingualEntry("/urgence", "/nl", 0.7, "weekly");
  addBilingualEntry("/zones-de-services", "/nl", 0.6, "weekly");
  addBilingualEntry("/mentions-legales", "/nl", 0.5, "weekly");
  addBilingualEntry("/privacy-policy", "/nl", 0.5, "weekly");

  // Specific high-value legacy pages
  addBilingualEntry("/plombier-grimbergen", "/nl/loodgieter-grimbergen", 0.8, "weekly");
  addBilingualEntry("/chauffagiste-grimbergen", "/nl/verwarming-grimbergen", 0.8, "weekly");
  addBilingualEntry("/electricien-grimbergen", "/nl/elektriciteit-grimbergen", 0.8, "weekly");
  addBilingualEntry("/debouchage-grimbergen", "/nl/ontstopping-grimbergen", 0.8, "weekly");

  // 2. Dynamic Services and Cities
  for (const service of services) {
    const nlServiceSlug = frToNlSlugMap[service.slug] || service.slug;

    // A. Main Service Pages
    addBilingualEntry(`/${service.slug}`, `/nl/${nlServiceSlug}`, 0.9, "weekly");
    addBilingualEntry(`/zones-de-services/${service.slug}`, `/nl/${nlServiceSlug}`, 0.7, "weekly");

    // B. Sub-services Pages
    for (const sub of service.subServices) {
      addBilingualEntry(`/${service.slug}/${sub.slug}`, `/nl/${nlServiceSlug}/${sub.slug}`, 0.8, "weekly");
    }

    // C. Service + City Pages
    for (const city of belgianCities) {
      const nlCitySlug = frToNlCitySlugMap[city.slug] || city.slug;

      // Direct direct-friendly URLs (e.g. /plomberie-grimbergen vs /nl/loodgieter-grimbergen)
      addBilingualEntry(`/${service.slug}-${city.slug}`, `/nl/${nlServiceSlug}-${nlCitySlug}`, 0.8, "weekly");

      // Zone nested URLs
      addBilingualEntry(`/zones-de-services/${service.slug}/${city.slug}`, `/nl/${nlServiceSlug}-${nlCitySlug}`, 0.7, "monthly");

      // Alternate Direct slugs (e.g. /plombier-grimbergen vs /nl/loodgieter-grimbergen)
      let altSlugFr = "";
      let altSlugNl = "";

      if (service.slug === "plomberie") {
        altSlugFr = "plombier";
        altSlugNl = "loodgieter";
      } else if (service.slug === "chauffage") {
        altSlugFr = "chauffagiste";
        altSlugNl = "verwarmingsinstallateur";
      } else if (service.slug === "electricite") {
        altSlugFr = "electricien";
        altSlugNl = "elektricien";
      } else if (service.slug === "travaux-de-toiture") {
        altSlugFr = "couvreur";
        altSlugNl = "dakdekker";
      } else if (service.slug === "debouchage-canalisation") {
        altSlugFr = "debouchage";
        altSlugNl = "ontstopper";
      } else if (service.slug === "nettoyage-de-vitres") {
        altSlugFr = "laveur-de-vitres";
        altSlugNl = "ruitenwasser";
      } else if (service.slug === "travaux-de-jardinage-elagage") {
        altSlugFr = "jardinier";
        altSlugNl = "tuinman";
      }

      if (altSlugFr && altSlugNl) {
        addBilingualEntry(`/${altSlugFr}-${city.slug}`, `/nl/${altSlugNl}-${nlCitySlug}`, 0.8, "weekly");
      }

      // D. Service + SubService + City Pages
      for (const sub of service.subServices) {
        addBilingualEntry(`/zones-de-services/${service.slug}/${sub.slug}/${city.slug}`, `/nl/${nlServiceSlug}/${sub.slug}`, 0.6, "monthly");
      }
    }
  }

  return sitemapEntries;
}
