import { MetadataRoute } from 'next'
import { getSitemapEntries } from '@/lib/sitemap-utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getSitemapEntries();
  
  // Create unique entries for FR and NL with proper alternates
  const sitemapItems: MetadataRoute.Sitemap = [];

  for (const entry of entries) {
    // Add FR entry
    sitemapItems.push({
      url: entry.url,
      lastModified: new Date(),
      changeFrequency: entry.changefreq as any,
      priority: parseFloat(entry.priority),
      alternates: {
        languages: {
          fr: entry.url,
          nl: entry.nlUrl,
        },
      },
    });

    // Add NL entry
    sitemapItems.push({
      url: entry.nlUrl,
      lastModified: new Date(),
      changeFrequency: entry.changefreq as any,
      priority: parseFloat(entry.priority),
      alternates: {
        languages: {
          fr: entry.url,
          nl: entry.nlUrl,
        },
      },
    });
  }

  return sitemapItems;
}
