import { getSitemapEntries } from "@/lib/sitemap-utils";

export async function GET() {
  const entries = getSitemapEntries();
  const lastmod = new Date().toISOString();
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  for (const entry of entries) {
    // Add FR version
    xml += `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${entry.url}"/>
    <xhtml:link rel="alternate" hreflang="nl" href="${entry.nlUrl}"/>
  </url>`;

    // Add NL version
    xml += `
  <url>
    <loc>${entry.nlUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${entry.url}"/>
    <xhtml:link rel="alternate" hreflang="nl" href="${entry.nlUrl}"/>
  </url>`;
  }

  xml += `\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
