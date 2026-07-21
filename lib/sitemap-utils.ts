import { services } from "./data/services";
import { belgianCities } from "./data/cities";

export interface SitemapEntry {
  url: string;
  nlUrl: string;
  priority: string;
  changefreq: string;
}

const baseUrl = "https://debservices.canalrose.be";

const frToNlSlugMap: Record<string, string> = {
  "plomberie": "loodgieter",
  "chauffage": "verwarming",
  "electricite": "elektriciteit",
  "debouchage-canalisation": "ontstopping",
  "renovation": "renovatie",
  "vidange-fosse-septique": "putlediging",
  "climatisation": "airco",
  "installation-vmc": "ventilatie",
  "nettoyage-de-vitres": "ruitenwasser",
  "travaux-de-jardinage-elagage": "tuinonderhoud",
  "travaux-de-toiture": "dakwerken",
  "panneaux-photovoltaiques": "zonnepanelen",
  "camera-de-surveillance": "camerabewaking",
  "travaux-de-batiment": "bouwwerken",
};

const frToNlCitySlugMap: Record<string, string> = {
  "bruxelles": "brussel",
  "anvers": "antwerpen",
  "gand": "gent",
  "liege": "luik",
};

export function getSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  function add(path: string, nlPath: string, priority: string, changefreq: string) {
    const frUrl = `${baseUrl}${path.startsWith("/") ? path : "/" + path}`.replace(/\/$/, "");
    const nlUrl = `${baseUrl}${nlPath.startsWith("/") ? nlPath : "/" + nlPath}`.replace(/\/$/, "");
    
    entries.push({
      url: frUrl || `${baseUrl}/`,
      nlUrl: nlUrl || `${baseUrl}/nl`,
      priority,
      changefreq
    });
  }

  // 1. Static Pages
  add("/", "/nl", "1.0", "weekly");
  add("/about", "/nl/about", "0.7", "weekly");
  add("/contact", "/nl/contact", "0.7", "weekly");
  add("/devis", "/nl/devis", "0.7", "weekly");
  add("/urgence", "/nl/urgence", "0.7", "weekly");
  add("/zones-de-services", "/nl/zones-de-services", "0.6", "weekly");
  add("/mentions-legales", "/mentions-legales", "0.5", "weekly");
  add("/privacy-policy", "/privacy-policy", "0.5", "weekly");

  // 2. High Value Local Folders
  const staticFolders = [
    { fr: "/plombier-bruxelles", nl: "/nl/loodgieter-bruxelles" },
    { fr: "/plombier-grimbergen", nl: "/nl/loodgieter-grimbergen" },
    { fr: "/chauffagiste-grimbergen", nl: "/nl/verwarming-grimbergen" },
    { fr: "/electricien-grimbergen", nl: "/nl/elektriciteit-grimbergen" },
    { fr: "/debouchage-grimbergen", nl: "/nl/ontstopping-grimbergen" },
    { fr: "/plombier-liege", nl: "/nl/loodgieter-liege" },
    { fr: "/plombier-woluwe", nl: "/nl/loodgieter-woluwe" },
    { fr: "/recherche-de-fuite-bruxelles", nl: "/nl/lekdetectie-brussel" },
    { fr: "/vidange-fosse-septique-liege", nl: "/nl/putlediging-luik" },
  ];

  for (const folder of staticFolders) {
    add(folder.fr, folder.nl, "0.8", "weekly");
  }

  // 3. Dynamic Services
  for (const service of services) {
    const nlServiceSlug = frToNlSlugMap[service.slug] || service.slug;
    add(`/${service.slug}`, `/nl/${nlServiceSlug}`, "0.9", "weekly");

    for (const sub of service.subServices) {
      add(`/${service.slug}/${sub.slug}`, `/nl/${nlServiceSlug}/${sub.slug}`, "0.8", "weekly");
    }

    const mainCities = belgianCities.filter(c => 
      ["bruxelles", "grimbergen", "liege", "anvers", "gand", "charleroi", "mons", "namur", "wavre", "waterloo"].includes(c.slug)
    );

    for (const city of mainCities) {
      const nlCitySlug = frToNlCitySlugMap[city.slug] || city.slug;
      add(`/zones-de-services/${service.slug}/${city.slug}`, `/nl/zones-de-services/${nlServiceSlug}/${nlCitySlug}`, "0.7", "monthly");
    }
  }

  return entries;
}
