import { services, Service } from "./data/services";
import { dutchServices, LocalizedService, frToNlSlugMap, nlToFrSlugMap, frToNlCitySlugMap, nlToFrCitySlugMap, frToNlCityNameMap } from "./data/translations";
import { belgianCities, City } from "./data/cities";

export interface MatchResult {
  service: Service;
  dutchService: LocalizedService;
  subService: { slug: string; title: string; desc: string; imageUrl?: string } | null;
  dutchSubService: { slug: string; title: string; desc: string; imageUrl?: string } | null;
  cityInfo: City | null;
  matchedTerm: string;
}

// Comprehensive mapping of all possible keyword prefixes to service ID
const aliasToServiceId: Record<string, string> = {
  // Renovation
  "renovation": "renovation",
  "renovation-maison": "renovation",
  "renovatie": "renovation",
  "verbouwing": "renovation",
  
  // Plomberie / Loodgieter
  "plomberie": "plomberie",
  "plombier": "plomberie",
  "loodgieter": "plomberie",
  "loodgietersbedrijf": "plomberie",
  "fuite": "plomberie",
  "fuite-deau": "plomberie",
  "recherche-de-fuite": "plomberie",
  "lekdetectie": "plomberie",
  "waterlek": "plomberie",

  // Debouchage / Ontstopping
  "debouchage": "debouchage",
  "debouchage-canalisation": "debouchage",
  "ontstopping": "debouchage",
  "ontstopper": "debouchage",
  "ontstoppingsdienst": "debouchage",
  "debouchage-wc": "debouchage",
  "debouchage-evier": "debouchage",
  "debouchage-egout": "debouchage",

  // Chauffage / Verwarming
  "chauffage": "chauffage",
  "chauffagiste": "chauffage",
  "verwarming": "chauffage",
  "verwarmingstechnicus": "chauffage",
  "verwarmingsinstallateur": "chauffage",
  "chaudiere": "chauffage",
  "ketel": "chauffage",
  "entretien-chaudiere": "chauffage",
  "depannage-chaudiere": "chauffage",
  "ketelonderhoud": "chauffage",
  "ketel-herstelling": "chauffage",

  // Gaz
  "gaz": "gaz",
  "gas": "gaz",

  // Citerne / Stookolietank
  "citerne": "citerne",
  "citerne-mazout-cuve": "citerne",
  "stookolietank": "citerne",
  "mazout": "citerne",
  "cuve": "citerne",

  // CNG
  "cng": "cng",
  "gaz-naturel-comprime": "cng",
  "gnc": "cng",

  // Electricite / Elektriciteit
  "electricite": "electricite",
  "electricien": "electricite",
  "elektriciteit": "electricite",
  "elektricien": "electricite",
  "elektrische-installatie": "electricite",

  // Climatisation / Airco
  "climatisation": "climatisation",
  "airco": "climatisation",
  "airconditioning": "climatisation",
  "ventilatie": "climatisation",
  "vmc": "climatisation",

  // Vidange / Putlediging
  "vidange": "fosse",
  "vidange-fosse-septique": "fosse",
  "putlediging": "fosse",
  "ruimdienst": "fosse",
  "fosse": "fosse",
  "beerput": "fosse",

  // Panneaux Solaires / Zonnepanelen
  "panneaux-solaires": "panneaux-solaires",
  "installation-panneaux-solaires": "panneaux-solaires",
  "panneaux-photovoltaiques": "panneaux-solaires",
  "zonnepanelen": "panneaux-solaires",

  // Toiture / Dakwerken
  "toiture": "toiture",
  "travaux-de-toiture": "toiture",
  "couvreur": "toiture",
  "dakwerken": "toiture",
  "dakwerker": "toiture",
  "dakdekker": "toiture",

  // Cameras / Camerabewaking
  "camera": "camera-surveillance",
  "cameras": "camera-surveillance",
  "camera-surveillance": "camera-surveillance",
  "installation-cameras-surveillance": "camera-surveillance",
  "camerabewaking": "camera-surveillance",

  // Construction / Bouwwerken
  "construction": "construction",
  "travaux-de-construction-gros-oeuvre": "construction",
  "macon": "construction",
  "maconnerie": "construction",
  "bouwwerken": "construction",
  "metselaar": "construction",

  // Vitres / Ruitenwasser
  "vitres": "vitres",
  "nettoyage-de-vitres": "vitres",
  "laveur-de-vitres": "vitres",
  "laveur": "vitres",
  "vitrier": "vitres",
  "ruitenwasser": "vitres",
  "glazenwasser": "vitres",

  // Jardin / Tuinieren
  "jardin": "jardinage",
  "jardinage": "jardinage",
  "jardinier": "jardinage",
  "elagage": "jardinage",
  "elagueur": "jardinage",
  "travaux-de-jardinage-elagage": "jardinage",
  "tuinieren": "jardinage",
  "tuinonderhoud": "jardinage",
  "tuinman": "jardinage",
};

export function getServiceById(id: string): { service: Service; dutchService: LocalizedService } {
  const service = services.find((s) => s.id === id) || services[0];
  const dutchService = dutchServices.find((s) => s.id === service.id) || dutchServices[0];
  return { service, dutchService };
}

export function findCityBySlugOrName(term: string): City | null {
  if (!term) return null;
  const clean = decodeURIComponent(term).toLowerCase().trim();

  // Check exact city slug
  let found = belgianCities.find((c) => c.slug === clean);
  if (found) return found;

  // Check frToNl or nlToFr city slug maps
  for (const [frSlug, nlSlug] of Object.entries(frToNlCitySlugMap)) {
    if (frSlug === clean || nlSlug === clean) {
      found = belgianCities.find((c) => c.slug === frSlug);
      if (found) return found;
    }
  }

  // Check city name match
  found = belgianCities.find((c) => c.name.toLowerCase() === clean.replace(/-/g, " "));
  if (found) return found;

  // Check partial match (e.g., woluwe, molenbeek)
  found = belgianCities.find((c) => c.slug.includes(clean) || clean.includes(c.slug));
  if (found) return found;

  // Fallback city object if term looks like a location
  if (clean.length >= 3) {
    const capitalized = clean
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      name: capitalized,
      slug: clean,
      province: "Belgique",
    };
  }

  return null;
}

export function matchServiceAndCity(slug: string, lang: "fr" | "nl" = "fr"): MatchResult {
  const cleanSlug = decodeURIComponent(slug).toLowerCase().trim();

  // 1. Direct match with a service slug (FR or NL)
  const frService = services.find((s) => s.slug === cleanSlug);
  if (frService) {
    const { service, dutchService } = getServiceById(frService.id);
    return {
      service,
      dutchService,
      subService: null,
      dutchSubService: null,
      cityInfo: null,
      matchedTerm: lang === "nl" ? dutchService.title : service.title,
    };
  }

  const nlService = dutchServices.find((s) => s.slug === cleanSlug);
  if (nlService) {
    const { service, dutchService } = getServiceById(nlService.id);
    return {
      service,
      dutchService,
      subService: null,
      dutchSubService: null,
      cityInfo: null,
      matchedTerm: lang === "nl" ? dutchService.title : service.title,
    };
  }

  // 2. Direct match with an alias
  if (aliasToServiceId[cleanSlug]) {
    const { service, dutchService } = getServiceById(aliasToServiceId[cleanSlug]);
    return {
      service,
      dutchService,
      subService: null,
      dutchSubService: null,
      cityInfo: null,
      matchedTerm: lang === "nl" ? dutchService.title : service.title,
    };
  }

  // 3. Direct match with a subservice slug
  for (const s of services) {
    const sub = s.subServices.find((sub) => sub.slug === cleanSlug);
    if (sub) {
      const { service, dutchService } = getServiceById(s.id);
      const dSub = dutchService.subServices[s.subServices.indexOf(sub)] || null;
      return {
        service,
        dutchService,
        subService: sub,
        dutchSubService: dSub,
        cityInfo: null,
        matchedTerm: lang === "nl" ? (dSub?.title || sub.title) : sub.title,
      };
    }
  }

  for (const ds of dutchServices) {
    const dSub = ds.subServices.find((sub) => sub.slug === cleanSlug);
    if (dSub) {
      const { service, dutchService } = getServiceById(ds.id);
      const sub = service.subServices[ds.subServices.indexOf(dSub)] || null;
      return {
        service,
        dutchService,
        subService: sub,
        dutchSubService: dSub,
        cityInfo: null,
        matchedTerm: lang === "nl" ? dSub.title : (sub?.title || dSub.title),
      };
    }
  }

  // 4. Match [term]-[citySlug] or [term]-[subservice]-[citySlug]
  // Try extracting city suffix
  const parts = cleanSlug.split("-");
  for (let i = 1; i < parts.length; i++) {
    const potentialCitySlug = parts.slice(i).join("-");
    const city = findCityBySlugOrName(potentialCitySlug);
    if (city) {
      const potentialPrefix = parts.slice(0, i).join("-");
      if (potentialPrefix) {
        // Check prefix against alias or service slugs
        const serviceId = aliasToServiceId[potentialPrefix];
        if (serviceId) {
          const { service, dutchService } = getServiceById(serviceId);
          return {
            service,
            dutchService,
            subService: null,
            dutchSubService: null,
            cityInfo: city,
            matchedTerm: lang === "nl" ? dutchService.title : service.title,
          };
        }

        // Check prefix against FR service slug
        const frS = services.find((s) => s.slug === potentialPrefix);
        if (frS) {
          const { service, dutchService } = getServiceById(frS.id);
          return {
            service,
            dutchService,
            subService: null,
            dutchSubService: null,
            cityInfo: city,
            matchedTerm: lang === "nl" ? dutchService.title : service.title,
          };
        }

        // Check prefix against NL service slug
        const nlS = dutchServices.find((s) => s.slug === potentialPrefix);
        if (nlS) {
          const { service, dutchService } = getServiceById(nlS.id);
          return {
            service,
            dutchService,
            subService: null,
            dutchSubService: null,
            cityInfo: city,
            matchedTerm: lang === "nl" ? dutchService.title : service.title,
          };
        }

        // Check prefix against subservices
        for (const s of services) {
          const sub = s.subServices.find((ss) => ss.slug === potentialPrefix);
          if (sub) {
            const { service, dutchService } = getServiceById(s.id);
            const dSub = dutchService.subServices[s.subServices.indexOf(sub)] || null;
            return {
              service,
              dutchService,
              subService: sub,
              dutchSubService: dSub,
              cityInfo: city,
              matchedTerm: lang === "nl" ? (dSub?.title || sub.title) : sub.title,
            };
          }
        }
      }
    }
  }

  // 5. Fallback: Default to Plomberie with matched city or general
  const { service, dutchService } = getServiceById("plomberie");
  const city = findCityBySlugOrName(cleanSlug);
  return {
    service,
    dutchService,
    subService: null,
    dutchSubService: null,
    cityInfo: city,
    matchedTerm: lang === "nl" ? dutchService.title : service.title,
  };
}

export function resolveZoneServiceAndPath(
  serviceSlug: string,
  cityPath: string[],
  lang: "fr" | "nl" = "fr"
): MatchResult {
  const match = matchServiceAndCity(serviceSlug, lang);

  if (!cityPath || cityPath.length === 0) {
    return match;
  }

  let subService = match.subService;
  let dutchSubService = match.dutchSubService;
  let cityInfo = match.cityInfo;

  // Process cityPath array elements
  for (const pathSegment of cityPath) {
    const seg = decodeURIComponent(pathSegment).toLowerCase().trim();

    // Check if segment is a subservice slug
    const foundSub = match.service.subServices.find((ss) => ss.slug === seg);
    if (foundSub) {
      subService = foundSub;
      const idx = match.service.subServices.indexOf(foundSub);
      dutchSubService = match.dutchService.subServices[idx] || null;
      continue;
    }

    const foundDSub = match.dutchService.subServices.find((ss) => ss.slug === seg);
    if (foundDSub) {
      dutchSubService = foundDSub;
      const idx = match.dutchService.subServices.indexOf(foundDSub);
      subService = match.service.subServices[idx] || null;
      continue;
    }

    // Check if segment is a city
    const foundCity = findCityBySlugOrName(seg);
    if (foundCity) {
      cityInfo = foundCity;
    }
  }

  // Fallback if cityInfo still null and cityPath has elements
  if (!cityInfo && cityPath.length > 0) {
    const lastSeg = cityPath[cityPath.length - 1];
    cityInfo = findCityBySlugOrName(lastSeg);
  }

  return {
    service: match.service,
    dutchService: match.dutchService,
    subService,
    dutchSubService,
    cityInfo,
    matchedTerm: lang === "nl"
      ? (dutchSubService?.title || match.dutchService.title)
      : (subService?.title || match.service.title),
  };
}
