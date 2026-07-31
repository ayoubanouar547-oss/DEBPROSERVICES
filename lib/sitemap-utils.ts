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
  "peinture": "schilderwerken",
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

  // 2. High Value Local Folders and Short Keyword URLs
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
    { fr: "/camera-surveillance", nl: "/nl/camerabewaking" },
    { fr: "/debouchage", nl: "/nl/ontstopping" },
    { fr: "/debouchage-wc", nl: "/nl/ontstopping-wc" },
    { fr: "/debouchage-evier", nl: "/nl/ontstopping-evier" },
    { fr: "/debouchage-egout", nl: "/nl/ontstopping-egout" },
    { fr: "/plombier", nl: "/nl/loodgieter" },
    { fr: "/fuite-deau", nl: "/nl/waterlek" },
    { fr: "/recherche-de-fuite", nl: "/nl/lekdetectie" },
    { fr: "/chauffagiste", nl: "/nl/verwarming" },
    { fr: "/entretien-chaudiere", nl: "/nl/ketelonderhoud" },
    { fr: "/depannage-chaudiere", nl: "/nl/ketel-herstelling" },
    { fr: "/electricien", nl: "/nl/elektriciteit" },
    { fr: "/couvreur", nl: "/nl/dakwerker" },
    { fr: "/vidange-fosse-septique", nl: "/nl/putlediging" },
  ];

  for (const folder of staticFolders) {
    add(folder.fr, folder.nl, "0.9", "weekly");
  }

  // 3. Short Keyword + City URLs (e.g. /debouchage-charleroi, /plombier-namur, /chauffagiste-liege)
  const shortKeywordPrefixes = [
    { fr: "debouchage", nl: "ontstopping" },
    { fr: "plombier", nl: "loodgieter" },
    { fr: "chauffagiste", nl: "verwarming" },
    { fr: "electricien", nl: "elektriciteit" },
    { fr: "vidange-fosse-septique", nl: "putlediging" },
    { fr: "recherche-de-fuite", nl: "lekdetectie" },
    { fr: "camera-surveillance", nl: "camerabewaking" },
    { fr: "couvreur", nl: "dakwerker" },
    { fr: "vitrier", nl: "glazenmaker" },
    { fr: "menuisier", nl: "schrijnwerker" },
    { fr: "macon", nl: "metselaar" },
    { fr: "peintre", nl: "schilder" },
    { fr: "serrurier", nl: "slotenmaker" },
    { fr: "jardinier", nl: "tuinman" },
    { fr: "renovation", nl: "renovatie" },
    { fr: "toiture", nl: "dakwerken" },
    { fr: "climatisation", nl: "airco" },
    { fr: "panneaux-solaires", nl: "zonnepanelen" },
    { fr: "entretien-chaudiere", nl: "ketelonderhoud" },
    { fr: "depannage-plomberie", nl: "loodgieter-depannage" },
    { fr: "installation-electrique", nl: "elektrische-installatie" },
    { fr: "fuite-deau", nl: "waterlek" },
    { fr: "debouchage-egout", nl: "ontstopping-egout" }
  ];

  for (const kw of shortKeywordPrefixes) {
    for (const city of belgianCities) {
      const nlCitySlug = frToNlCitySlugMap[city.slug] || city.slug;
      add(`/${kw.fr}-${city.slug}`, `/nl/${kw.nl}-${nlCitySlug}`, "0.8", "weekly");
    }
  }

  // 3. Dynamic Services
  for (const service of services) {
    const nlServiceSlug = frToNlSlugMap[service.slug] || service.slug;
    add(`/${service.slug}`, `/nl/${nlServiceSlug}`, "0.9", "weekly");

    for (const sub of service.subServices) {
      add(`/${service.slug}/${sub.slug}`, `/nl/${nlServiceSlug}/${sub.slug}`, "0.8", "weekly");
    }

    for (const city of belgianCities) {
      const nlCitySlug = frToNlCitySlugMap[city.slug] || city.slug;
      add(`/zones-de-services/${service.slug}/${city.slug}`, `/nl/zones-de-services/${nlServiceSlug}/${nlCitySlug}`, "0.7", "monthly");
      
      for (const sub of service.subServices) {
        add(`/zones-de-services/${service.slug}/${sub.slug}/${city.slug}`, `/nl/zones-de-services/${nlServiceSlug}/${sub.slug}/${nlCitySlug}`, "0.6", "monthly");
      }
    }
  }

  return entries;
}
