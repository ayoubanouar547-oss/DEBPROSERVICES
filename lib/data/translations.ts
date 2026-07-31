import { services } from "./services";
import { matchServiceAndCity } from "../service-matcher";

export type LocalizedService = {
  id: string;
  slug: string;
  title: string;
  description: string;
  trustPoints?: { title: string; desc: string }[];
  features: string[];
  subServices: { slug: string; title: string; desc: string; imageUrl?: string }[];
  testimonial?: { text: string; author: string };
  faqs?: { question: string; answer: string }[];
  color: { bg: string; text: string; border: string; glow: string };
};

export const frToNlSlugMap: Record<string, string> = {
  "renovation-maison": "renovatie",
  "plomberie": "loodgieter",
  "debouchage-canalisation": "ontstopping",
  "chauffage": "verwarming",
  "gaz": "gas",
  "citerne-mazout-cuve": "stookolietank",
  "gaz-naturel-comprime": "cng",
  "electricite": "elektriciteit",
  "climatisation": "airco",
  "vidange-fosse-septique": "putlediging",
  "installation-panneaux-solaires": "zonnepanelen",
  "travaux-de-toiture": "dakwerken",
  "installation-cameras-surveillance": "camerabewaking",
  "travaux-de-construction-gros-oeuvre": "bouwwerken",
  "nettoyage-de-vitres": "ruitenwasser",
  "travaux-de-jardinage-elagage": "tuinieren",
  "peinture": "schilderwerken"
};

export const nlToFrSlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(frToNlSlugMap).map(([fr, nl]) => [nl, fr])
);

export const frToNlCitySlugMap: Record<string, string> = {
  "bruxelles": "brussel",
  "ixelles": "elsene",
  "schaerbeek": "schaarbeek",
  "anderlecht": "anderlecht",
  "molenbeek-saint-jean": "sint-jans-molenbeek",
  "jette": "jette",
  "laeken": "laken",
  "etterbeek": "etterbeek",
  "woluwe-saint-pierre": "sint-pieters-woluwe",
  "woluwe-saint-lambert": "sint-lambrechts-woluwe",
  "uccle": "ukkel",
  "forest": "vorst",
  "evere": "evere",
  "auderghem": "oudergem",
  "ganshoren": "ganshoren",
  "koekelberg": "koekelberg",
  "saint-gilles": "sint-gillis",
  "saint-josse-ten-noode": "sint-joost-ten-noode",
  "watermael-boitsfort": "watermaal-bosvoorde",
  "berchem-sainte-agathe": "sint-agatha-berchem",
  "grimbergen": "grimbergen",
  "vilvorde": "vilvoorde",
  "hal": "halle",
  "zaventem": "zaventem",
  "leuven": "leuven",
  "asse": "asse",
  "dilbeek": "dilbeek",
  "wemmel": "wemmel",
  "kraainem": "kraainem",
  "tervuren": "tervuren",
  "machelen": "machelen",
  "tirlemont": "tienen",
  "aarschot": "aarschot",
  "wavre": "waver",
  "nivelles": "nijvel",
  "waterloo": "waterloo",
  "braine-lalleud": "eigenbrakel",
  "tubize": "tubeke",
  "rixensart": "rixensart",
  "ottignies-louvain-la-neuve": "ottignies-louvain-la-neuve",
  "jodoigne": "geldenaken",
  "genappe": "genepien",
  "braine-le-chateau": "kasteelbrakel",
  "charleroi": "charleroi",
  "mons": "bergen",
  "tournai": "doornik",
  "liege": "luik"
};

export const nlToFrCitySlugMap: Record<string, string> = Object.fromEntries(
  Object.entries(frToNlCitySlugMap).map(([fr, nl]) => [nl, fr])
);

export const frToNlCityNameMap: Record<string, string> = {
  "Bruxelles": "Brussel",
  "Ixelles": "Elsene",
  "Schaerbeek": "Schaarbeek",
  "Anderlecht": "Anderlecht",
  "Molenbeek-Saint-Jean": "Sint-Jans-Molenbeek",
  "Jette": "Laken",
  "Laeken": "Laken",
  "Etterbeek": "Etterbeek",
  "Woluwe-Saint-Pierre": "Sint-Pieters-Woluwe",
  "Woluwe-Saint-Lambert": "Sint-Lambrechts-Woluwe",
  "Uccle": "Ukkel",
  "Forest": "Vorst",
  "Evere": "Evere",
  "Auderghem": "Oudergem",
  "Ganshoren": "Ganshoren",
  "Koekelberg": "Koekelberg",
  "Saint-Gilles": "Sint-Gillis",
  "Saint-Josse-ten-Noode": "Sint-Joost-ten-Noode",
  "Watermael-Boitsfort": "Watermaal-Bosvoorde",
  "Berchem-Sainte-Agathe": "Sint-Agatha-Berchem",
  "Grimbergen": "Grimbergen",
  "Vilvorde": "Vilvorde",
  "Hal (Halle)": "Halle",
  "Hal": "Halle",
  "Zaventem": "Zaventem",
  "Leuven": "Leuven",
  "Asse": "Asse",
  "Dilbeek": "Dilbeek",
  "Wemmel": "Wemmel",
  "Kraainem": "Kraainem",
  "Tervuren": "Tervuren",
  "Machelen": "Machelen",
  "Tirlemont": "Tienen",
  "Aarschot": "Aarschot",
  "Wavre": "Waver",
  "Nivelles": "Nijvel",
  "Waterloo": "Waterloo",
  "Braine-l'Alleud": "Eigenbrakel",
  "Tubize": "Tubeke",
  "Rixensart": "Rixensart",
  "Ottignies-Louvain-la-Neuve": "Ottignies-Louvain-la-Neuve",
  "Jodoigne": "Geldenaken",
  "Genappe": "Genepien",
  "Braine-le-Château": "Kasteelbrakel",
  "Charleroi": "Charleroi",
  "Mons": "Bergen",
  "Tournai": "Doornik",
  "Liège": "Luik"
};

export const nlToFrCityNameMap: Record<string, string> = Object.fromEntries(
  Object.entries(frToNlCityNameMap).map(([fr, nl]) => [nl, fr])
);

export const dutchServices: LocalizedService[] = [
  {
    id: "renovation",
    slug: "renovatie",
    title: "Renovatie",
    description: "PRO SERVICES realiseert al uw renovatieprojecten voor huizen en appartementen in België. Van een totale renovatie tot een moderne inloopdouche in uw badkamer, onze erkende technici garanderen perfect afgewerkt, duurzaam werk tegen de scherpste prijs.",
    trustPoints: [
      { title: "Gratis Gedetailleerde Offerte binnen 48u", desc: "Technisch plaatsbezoek en transparante prijsopgave per onderdeel zonder verplichtingen." },
      { title: "Alle Vakgebieden", desc: "Loodgieterswerk, elektriciteit, tegelwerk, schilderwerk — één aanspreekpunt voor de hele werf." },
      { title: "Projectopvolging", desc: "Wekelijkse foto's en voortgangsrapportage om uw renovatie op afstand op te volgen." },
      { title: "Tienjarige Garantie", desc: "Al onze renovatiewerken zijn gedekt door onze wettelijke tienjarige verzekering." }
    ],
    features: [
      "Totale renovatie",
      "Inloopdouche op maat",
      "Interieurinrichting",
      "Gratis offerte"
    ],
    subServices: [
      {
        slug: "badkamerrenovatie-inloopdouche",
        title: "Badkamer & Inloopdouche",
        desc: "Ontwerp en installatie van moderne inloopdouches en sleutel-op-de-deur badkamers."
      },
      {
        slug: "keukenrenovatie-op-maat",
        title: "Keukenrenovatie",
        desc: "Volledige modernisering van uw keuken: loodgieterswerk, elektriciteit, meubilair en afwerking."
      },
      {
        slug: "totale-renovatie-huis-appartement",
        title: "Totale Renovatie",
        desc: "Volledige vernieuwing van uw woning, appartement of commerciële ruimte."
      },
      {
        slug: "vloertegels-vloerbekdeling",
        title: "Tegelwerk & Vloerbekleding",
        desc: "Plaatsing van tegels, parket en moderne vloerbekledingen voor al uw kamers."
      },
      {
        slug: "binnenschilderwerk-bepleistering",
        title: "Schilder- & Pleisterwerken",
        desc: "Schilderwerk, bepleistering en hoogwaardige binnenafwerking voor uw muren en plafonds."
      },
      {
        slug: "isolatie-gyproc-tussenwanden",
        title: "Isolatie & Gyproc Scheidingswanden",
        desc: "Thermische en akoestische isolatie, plaatsen van Gyproc-wanden en valse plafonds."
      }
    ],
    testimonial: {
      text: "De renovatie of verbouwing van onze badkamer is een echt succes. De inloopdouche is prachtig!",
      author: "Marie L., Namen"
    },
    faqs: [
      {
        question: "Hoe lang duurt het om een badkamer te renoveren?",
        answer: "Een volledige badkamerrenovatie duurt meestal tussen de 10 en 15 werkdagen, afhankelijk van de omvang van de werken."
      },
      {
        question: "Beheert u zowel loodgieterswerk als elektriciteit tijdens de renovatie?",
        answer: "Ja, PRO SERVICES is een all-in-one bedrijf. Wij beheren alles van A tot Z: loodgieterswerk, elektriciteit, tegelwerk en pleisterwerk."
      }
    ],
    color: {
      bg: "bg-indigo-500/20",
      text: "text-indigo-400",
      border: "border-indigo-500/30",
      glow: "bg-indigo-500"
    }
  },
  {
    id: "plomberie",
    slug: "loodgieter",
    title: "Loodgieter",
    description: "Ervaren loodgieter in België 24/7 beschikbaar. Een waterlek onder uw gootsteen, een druppelende kraan of een toilet dat hersteld moet worden? PRO SERVICES biedt volledige loodgietersdiensten: van niet-destructieve lekdetectie tot het vervangen van uw boiler. Onze erkende loodgieters garanderen een snelle en duurzame interventie tegen de beste prijs.",
    trustPoints: [
      { title: "Niet-Destructieve Lekdetectie", desc: "Inzet van warmtebeeldcamera's en akoestische detectoren om lekken op te sporen zonder muren open te breken." },
      { title: "Interventie binnen 30 min", desc: "Onze erkende loodgieters zijn binnen 30 minuten ter plaatse in heel België." },
      { title: "Onderdelen op Voorraad", desc: "Onze voertuigen hebben de meest gangbare onderdelen mee om de storing direct op te lossen." },
      { title: "Garantie op Waterdichtheid", desc: "Al onze loodgieterswerken zijn gegarandeerd. Niet tevreden? Dan komen wij gratis terug." }
    ],
    features: [
      "Ultra-snelle herstelling van waterlekken",
      "Installatie van sanitair en kranen",
      "Herstelling boiler & warmwaterbereider",
      "Conform maken van loodgieterij"
    ],
    subServices: [
      {
        slug: "opsporen-herstellen-waterlek",
        title: "Lekdetectie & Lekherstelling",
        desc: "Niet-destructieve opsporing en snelle dichting van alle waterlekken."
      },
      {
        slug: "installatie-sanitair-kranen",
        title: "Sanitaire Installaties & Kranen",
        desc: "Plaatsing van toiletten, wastafels, douches, baden en moderne kranen."
      },
      {
        slug: "vervangen-boiler-warmwaterbereider",
        title: "Boiler Vervangen",
        desc: "Herstelling en installatie van elektrische of thermodynamische boilers."
      }
    ],
    testimonial: {
      text: "Waterlek hersteld in minder dan een uur op een zondagavond. Uitstekende service en zeer professioneel.",
      author: "Thomas D., Brussel"
    },
    faqs: [
      {
        question: "Hoeveel kost een spoedloodgieter in België?",
        answer: "Pour een dringende interventie ligt het basistarief tussen €85 en €150, afhankelijk van het tijdstip. Een vaste offerte wordt vóór de start van de werken opgesteld."
      },
      {
        question: "Biedt u lekdetectie aan zonder breekwerk?",
        answer: "Ja, wij gebruiken thermische camera's en ultrasone apparatuur om de exacte locatie van het lek te bepalen zonder uw muren te beschadigen."
      }
    ],
    color: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      border: "border-blue-500/30",
      glow: "bg-blue-500"
    }
  },
  {
    id: "debouchage",
    slug: "ontstopping",
    title: "Ontstopping",
    description: "Ontstopping van leidingen en rioleringen in België 24/7. Zit u met een verstopt toilet, een gootsteen die niet meer wegloopt of een overlopende riool? PRO SERVICES grijpt snel in, 7 dagen per week, met elektrische veren en hogedrukreinigers. Transparante prijzen: geen verrassingen achteraf over de kosten van een ontstopping!",
    trustPoints: [
      { title: "Hogedrukreiniger 400 bar", desc: "Onze hogedrukapparatuur reinigt de meest hardnekkige verstoppingen zonder leidingen te beschadigen." },
      { title: "HD Endoscopische Camera", desc: "Nauwkeurige diagnose via live video-inspectie om de blokkade direct te lokaliseren." },
      { title: "Gegarandeerde Ontstopping", desc: "Gegarandeerd resultaat of we komen kosteloos terug. Interventie in 45 minuten." },
      { title: "24/7 Beschikbaar", desc: "Verstopping in het weekend of 's nachts? Onze teams staan 24/7 voor u klaar zonder extra kosten." }
    ],
    features: [
      "Toilet & Gootsteen ontstopping met veer",
      "Roolreiniging onder hoge druk",
      "HD camera-inspectie van leidingen",
      "Geurhinder elimineren"
    ],
    subServices: [
      {
        slug: "ontstopping-wc-toiletten",
        title: "WC & Toiletten Ontstoppen",
        desc: "Dringende interventie om uw geblokkeerde toiletten te ontstoppen met professionele apparatuur."
      },
      {
        slug: "ontstopping-riool-leidingen",
        title: "Riolering & Hoofdleidingen Ontstoppen",
        desc: "Hogedrukreiniging for riolen en de belangrijkste afvoerbuizen van uw woning."
      },
      {
        slug: "ontstopping-gootsteen-wastafel",
        title: "Gootsteen & Wastafel Ontstoppen",
        desc: "Verwijderen van vet- en zeepresten in uw keukengootstenen and wastafels."
      },
      {
        slug: "camera-inspectie-leidingen",
        title: "Camera-inspectie van Leidingen",
        desc: "HD video-inspectie om de exacte oorzaak en staat van uw afvoerbuizen te controleren."
      }
    ],
    testimonial: {
      text: "WC zeer netjes ontstopt ondanks de moeilijkheidsgraad. De technicus gebruikte een camera, super!",
      author: "Sarah M., Luik"
    },
    faqs: [
      {
        question: "Hoeveel kost een ontstopping van een leiding?",
        answer: "Een standaard ontstopping met de veer kost gemiddeld €90 tot €180. Voor hogedrukreiniging of camera-inspectie wordt een specifieke offerte opgesteld."
      },
      {
        question: "Wie moet de ontstopping betalen: de huurder of de eigenaar?",
        answer: "In de regel is ontstopping door dagelijks gebruik voor rekening van de huurder. Als het gaat om een structureel probleem of slijtage, moet de eigenaar betalen."
      }
    ],
    color: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "bg-cyan-500"
    }
  },
  {
    id: "chauffage",
    slug: "verwarming",
    title: "Verwarming",
    description: "Een erkende verwarmingsauditeur of technicus nodig in België? Of het nu gaat om een dringende ketelherstelling, verplicht onderhoud van een gasketel of mazoutketel, of the installatie van een nieuwe HR-condensatieketel, wij zijn er 24/7 voor u. Maximaliseer uw comfort and verlaag uw energiefactuur.",
    trustPoints: [
      { title: "Technici voor alle Merken", desc: "Erkend voor Vaillant, Bulex, Viessmann, Bosch, Junkers, De Dietrich en Ariston." },
      { title: "Officieel Onderhoudsattest", desc: "Wettelijk attest direct overhandigd na elk verplicht jaarlijks onderhoud in België." },
      { title: "Onderdelen op Zak", desc: "Snelle herstelling in één bezoek voor de overgrote meerderheid van ketelstoringen." },
      { title: "Gratis Energieanalyse", desc: "Gratis evaluatie van uw installatie om de meest economische oplossing voor te stellen." }
    ],
    features: [
      "Ketelonderhoud (Gas / Mazout)",
      "Dringende ketelherstelling 24/7",
      "Vervanging en nieuwe installatie",
      "Controle en ontluchten of radiatoren",
      "Erkende verwarmingsinstallateur"
    ],
    subServices: [
      {
        slug: "ketelherstelling-storing",
        title: "Ketelherstelling & Storing",
        desc: "Dringende reparatie van uw defecte verwarmingsketel."
      },
      {
        slug: "gasketel-onderhoud-verplicht",
        title: "Verwarmingsketel Onderhoud",
        desc: "Wettelijk onderhoud, ontkalken en keuring van uw verwarmingsinstallaties."
      },
      {
        slug: "installatie-nieuwe-verwarmingsketel",
        title: "Installatie Nieuwe Ketel",
        desc: "Plaatsing van hoogrendements condensatieketels."
      },
      {
        slug: "dringende-ketelherstelling",
        title: "Dringende Ketelherstelling",
        desc: "Snel herstel van uw verwarmingsketel in panne (Vaillant, Bulex, Viessmann). Spoed chauffagiste 24u/24."
      }
    ],
    testimonial: {
      text: "Ketel dezelfde dag nog hersteld. Zeer bekwame technicus and eerlijke prijs.",
      author: "Jean P., Charleroi"
    },
    faqs: [
      {
        question: "Is het onderhoud van de verwarmingsketel verplicht in België?",
        answer: "Ja, onderhoud door een erkend technicus is wettelijk verplicht om de 2 jaar voor gasketels and elk jaar voor mazoutketels."
      },
      {
        question: "Wat zijn de tekenen van een defecte verwarmingsketel?",
        answer: "Constant drukverlies, vreemde geluiden, koud sanitair water of radiatoren die niet warm worden zijn waarschuwingen om direct een technicus te bellen."
      }
    ],
    color: {
      bg: "bg-orange-500/20",
      text: "text-orange-400",
      border: "border-orange-500/30",
      glow: "bg-orange-500"
    }
  },
  {
    id: "gaz",
    slug: "gas",
    title: "Gas",
    description: "Vermoedt u een gaslek of heeft u een gasinstallatie nodig die voldoet aan de Belgische normen? Onze CERGA-gecertificeerde technici grijpen snel in om uw veiligheid te garanderen. Van lekdetectie to de keuring van uw leidingen.",
    trustPoints: [
      { title: "Gecertificeerd CERGA", desc: "Officieel attest direct geleverd voor het openen van uw gasmeter." },
      { title: "Lekinterventie in 45 min", desc: "Nauwkeurige elektronische detectoren om elk gaslek direct op te sporen en te dichten." },
      { title: "Conformiteit NBN B61-002", desc: "Al onze werkzaamheden voldoen strikt aan de Belgische veiligheidsnormen." },
      { title: "Conversie Arm/Rijk Gas", desc: "CERGA-gecertificeerde afstelling van al uw toestellen voor de omschakeling naar rijk gas." }
    ],
    features: [
      "Gaslekdetectie",
      "Conformiteit keuringen",
      "Aansluiting of toestellen",
      "Veiligheidsattest levering"
    ],
    subServices: [
      {
        slug: "opsporen-gaslek-spoed",
        title: "Gaslek Opsporen & Dichten",
        desc: "Ultra-snelle interventie met precisie-detectoren om lekken te beveiligen en te dichten."
      },
      {
        slug: "gas-conformiteit-cerga",
        title: "Mise en Conformité Gas",
        desc: "Breng uw installatie in orde volgens de CERGA-normen om uw meter te laten openen."
      },
      {
        slug: "gasaansluiting-apparaten",
        title: "Gasaansluiting voor Toestellen",
        desc: "Veilige aansluiting van uw gastoestellen (fornuis, oven, ketel) met lekdichtheidstest."
      },
      {
        slug: "conversie-arm-gas-naar-rijk-gas",
        title: "Conversie Arm Gas naar Rijk Gas",
        desc: "Afstelling en aanpassing van uw gasapparaten voor de omschakeling naar rijk gas in België."
      },
      {
        slug: "installatie-gasleidingen",
        title: "Installatie van Gasleidingen",
        desc: "Veilig leggen en aansluiten van gasbuizen en leidingen door een erkend Cerga-installateur."
      },
      {
        slug: "controle-lekdichtheid-gas-cerga",
        title: "Controle Lekdichtheid Gas (Cerga)",
        desc: "Grondige inspectie van uw gasnetwerk en afgifte van een officieel veiligheidsattest."
      }
    ],
    testimonial: {
      text: "Omschakeling naar rijk gas perfect uitgevoerd. De technicus heeft alles goed afgesteld. Hartelijk dank.",
      author: "Lucie V., Bergen"
    },
    faqs: [
      {
        question: "Wat moet ik doen bij een gasgeur in afwachting van de technicus?",
        answer: "Sluit onmiddellijk de hoofdkraan, open alle ramen, raak geen schakelaars of deurbellen aan and verlaat direct het gebouw voordat u ons belt."
      },
      {
        question: "Levert u een officieel gasveiligheidsattest?",
        answer: "Ja, onze erkende Cerga-installateurs controleren uw netwerk en leveren het onmisbare attest voor het openen of heropenen van uw gasmeter."
      }
    ],
    color: {
      bg: "bg-blue-600/20",
      text: "text-blue-500",
      border: "border-blue-600/30",
      glow: "bg-blue-600"
    }
  },
  {
    id: "citerne",
    slug: "stookolietank",
    title: "Stookolietank",
    description: "Een oude stookolietank die buiten gebruik is? Wij verzorgen het saneren, neutraliseren, demonteren en verwijderen van uw stookolietank of mazouttank met officieel conformiteitsattest. Onze diensten omvatten tevens professionele reiniging en ontgassing.",
    features: [
      "Neutraliseren stookolietank",
      "Verwijderen van mazouttank",
      "Ontgassen & reinigen",
      "Conformiteitsattest & Groene dop"
    ],
    subServices: [
      {
        slug: "stookolietank-neutraliseren",
        title: "Neutralisatie & Verwijdering",
        desc: "Saneren van uw tank door inertisering met zand of schuim, en vakkundige afvoer."
      },
      {
        slug: "ontgassen-reinigen-stookolietank",
        title: "Ontgassing & Reiniging van Tank",
        desc: "Pompen van slib, grondige reiniging en ontgassing van uw mazouttank met certificaat."
      },
      {
        slug: "lektest-certificaat-groene-dop",
        title: "Lektest & Groene Dop Certificaat",
        desc: "Ultrasone controle van de lekdichtheid van uw stookolietank met levering van de groene dop."
      }
    ],
    testimonial: {
      text: "Het team heeft onze oude stookolietank in de kelder volledig geneutraliseerd en heel netjes afgevoerd.",
      author: "Alexandre V., Namen"
    },
    faqs: [
      {
        question: "Is het neutraliseren van een oude stookolietank verplicht in België?",
        answer: "Ja, de Belgische wet verplicht de neutralisatie van elke definitief buiten gebruik gestelde mazouttank om bodemverontreiniging of explosiegevaar te voorkomen."
      }
    ],
    color: {
      bg: "bg-stone-500/20",
      text: "text-stone-400",
      border: "border-stone-500/30",
      glow: "bg-stone-500"
    }
  },
  {
    id: "cng",
    slug: "cng",
    title: "CNG (Aardgas onder druk)",
    description: "Gespecialiseerde diensten voor CNG-installaties. Onze erkende experts zorgen voor een veilige installatie, onderhoud en keuring van uw CNG-systemen.",
    features: [
      "CNG-systeem installatie",
      "Preventief onderhoud",
      "Lekdichtheidscontrole",
      "Certificering"
    ],
    subServices: [
      {
        slug: "cng-installatie",
        title: "Installatie CNG-systemen",
        desc: "Ontwerp en plaatsing van veilige installaties op gecomprimeerd aardgas."
      },
      {
        slug: "onderhoud-controle-cng",
        title: "Onderhoud & Controle CNG",
        desc: "Regelmatige onderhoudsbeurten en veiligheidscontroles voor uw CNG-installaties."
      },
      {
        slug: "dringende-herstelling-cng",
        title: "Dringende Herstelling CNG",
        desc: "Snel ingrijpen bij storingen of lekkages in uw CNG-gassystemen."
      }
    ],
    testimonial: {
      text: "CNG-installatie perfect in orde en uiterst veilig geplaatst. Heel tevreden.",
      author: "Hélène B., Waver"
    },
    faqs: [
      {
        question: "Doet u ook het onderhoud van CNG-installaties?",
        answer: "Ja, onze gespecialiseerde technici voeren regelmatig onderhoud en lekcontroles uit op al uw CNG-apparatuur."
      }
    ],
    color: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-500",
      border: "border-emerald-500/30",
      glow: "bg-emerald-500"
    }
  },
  {
    id: "electricite",
    slug: "elektriciteit",
    title: "Elektriciteit",
    description: "Stroompanne, kortsluiting of een AREI-keuringsverslag nodig? Onze gekwalificeerde elektriciens grijpen overal in België in om uw installatie te beveiligen. Van het vervangen van de verdeelkast tot het leggen van nieuwe stopcontacten, PRO SERVICES staat garant voor gecertificeerd en veilig elektrisch werk.",
    trustPoints: [
      { title: "AREI Goedgekeurd", desc: "Officieel conformiteitsrapport geleverd na elke AREI-aanpassing van uw elektriciteit." },
      { title: "Verdeelkast in 1 Dag", desc: "Volledige vervanging inclusief het opleveren van het eendraadsschema op dezelfde dag." },
      { title: "Laadpalen & Domotica", desc: "Professionele installatie van EV laadstations, zonnepanelen-koppelingen en domotica." },
      { title: "10 Jaar Garantie", desc: "Al onze elektriciteitswerken vallen onder onze betrouwbare tienjarige garantie." }
    ],
    features: [
      "Stroomstoring herstellen 24/7",
      "AREI conform maken of elektriciteit",
      "Vervangen van elektriciteitskast",
      "Plaatsen van verlichting & stopcontacten"
    ],
    subServices: [
      {
        slug: "herstellen-stroompanne-storing",
        title: "Stroompanne Herstellen",
        desc: "Snel herstel van de elektriciteit na een stroomstoring of kortsluiting."
      },
      {
        slug: "arei-elektriciteitskeuring-conform",
        title: "AREI Conform Maken",
        desc: "Voorbereiding en aanpassing van uw installatie voor de wettelijke keuring."
      },
      {
        slug: "vervangen-verdeelkast-meter",
        title: "Elektriciteitskast Vervangen",
        desc: "Vernieuwen van uw zekeringkast met moderne differentieelschakelaars."
      }
    ],
    testimonial: {
      text: "Mijn elektriciteitskast met spoed vervangen. Zeer netjes gewerkt en vriendelijke elektricien.",
      author: "Marc O., Antwerpen"
    },
    faqs: [
      {
        question: "Hoeveel kost een spoedinterventie van een elektricien?",
        answer: "De prijs is afhankelijk van de aard van de storing. Wij communiceren onze tarieven altijd vooraf in alle transparantie."
      },
      {
        question: "Wanneer is een AREI-elektriciteitskeuring verplicht?",
        answer: "De keuring is verplicht bij de verkoop van een woning met een installatie van vóór 1981, of bij belangrijke wijzigingen aan uw elektrisch netwerk."
      }
    ],
    color: {
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      border: "border-yellow-500/30",
      glow: "bg-yellow-500"
    }
  },
  {
    id: "climatisation",
    slug: "airco",
    title: "Airconditioning & Ventilatie",
    description: "Installatie, onderhoud en herstelling van alle airconditioningsystemen in België. Onze F-Gas gecertificeerde koeltechnici staan klaar voor zowel particulieren als bedrijven.",
    trustPoints: [
      { title: "F-Gas Gecertificeerd", desc: "Veilig en legaal hanteren van koudemiddelen volgens Europese verordening 517/2014." },
      { title: "Alle Grote Merken", desc: "Daikin, Mitsubishi, Samsung, LG, Panasonic — vakkundige installatie en service." },
      { title: "Jaarlijks Gecertificeerd Onderhoud", desc: "Officieel rapport geleverd. Een goed onderhouden airco verbruikt tot 25% minder energie." },
      { title: "WTW & Mechanische Ventilatie", desc: "Installatie en onderhoud van ventilatiesystemen (VMC) voor een perfecte luchtkwaliteit." }
    ],
    features: [
      "Split-airco installatie",
      "Jaarlijks onderhoud",
      "Gas bijvullen",
      "Compressor herstelling",
      "Ventilatie installatie (WTW)"
    ],
    subServices: [
      {
        slug: "installatie-airco-warmtepomp",
        title: "Airco & Warmtepomp Installeren",
        desc: "Plaatsing van fluisterstille airconditioning en energiezuinige warmtepompen."
      },
      {
        slug: "airco-gas-bijvullen",
        title: "Airco Gas Bijvullen",
        desc: "Bijvullen van koelmiddel en drukcontrole door een erkend koeltechnicus."
      },
      {
        slug: "herstelling-airco",
        title: "Herstelling van Airco",
        desc: "Reparatie van lekkende airco's of systemen die geen koude lucht meer blazen."
      },
      {
        slug: "installatie-omkeerbare-airco",
        title: "Installatie Omkeerbare Airco",
        desc: "Ideale airco-oplossing voor zomer en winter met energiezuinige Daikin systemen."
      },
      {
        slug: "onderhoud-airconditioning",
        title: "Onderhoud Airconditioning & Service",
        desc: "Jaarlijkse controle, filterreiniging en gasbijvulling door een erkend F-Gas technicus."
      },
      {
        slug: "ventilatiesysteem-vmc-installeren",
        title: "Ventilatie & WTW Installatie",
        desc: "Plaatsing van mechanische ventilatie (VMC Type C of D) voor gezonde binnenlucht."
      }
    ],
    testimonial: {
      text: "Nauwkeurige installatie van onze nieuwe WTW ventilatie en airco. Zeer professioneel team!",
      author: "Sophie G., Leuven"
    },
    faqs: [
      {
        question: "Zijn uw technici F-Gas gecertificeerd?",
        answer: "Ja, al onze koeltechnici hebben het wettelijk verplichte F-Gassen certificaat voor het werken met koelmiddelen in België."
      }
    ],
    color: {
      bg: "bg-sky-500/20",
      text: "text-sky-400",
      border: "border-sky-500/30",
      glow: "bg-sky-500"
    }
  },
  {
    id: "fosse",
    slug: "putlediging",
    title: "Putlediging",
    description: "Ledigen van beerputten, septische putten en onderhoud van micro-zuiveringsstations in België. Snel ter plaatse met een vacuümzuigwagen 24/7. Transparante en scherpe tarieven.",
    trustPoints: [
      { title: "Erkende Ruimdienst", desc: "Onze zuigwagens zijn officieel vergund en goedgekeurd in Vlaanderen, Brussel en Wallonië." },
      { title: "Verwerkingsattest", desc: "Wettelijk attest van traceerbaarheid en milieuvriendelijke lozing van het slib." },
      { title: "Interventie binnen 24u", desc: "Snelle planning met gegarandeerd tijdslot binnen 24 werkuren." },
      { title: "Hogedrukreiniging Inbegrepen", desc: "Grondig naspoelen van de septische put inbegrepen in ons standaardtarief." }
    ],
    features: [
      "Dringend ledigen septische put",
      "Vetafscheider reinigen horeca",
      "Onderhoud micro-zuiveringsstation",
      "Riool- en afvoercurage"
    ],
    subServices: [
      {
        slug: "ledigen-septische-put-beerput",
        title: "Septische Put Ledigen",
        desc: "Volledig leegpompen en reinigen van uw septische put of beerput met onze ruimwagen."
      },
      {
        slug: "vetafscheider-reinigen",
        title: "Vetafscheider Reinigen",
        desc: "Periodiek onderhoud van vetvangers voor restaurants en grootkeukens."
      },
      {
        slug: "onderhoud-micro-zuiveringsstation",
        title: "Onderhoud Micro-zuiveringsstation",
        desc: "Preventief onderhoud en service voor uw autonome waterzuiveringsstations."
      }
    ],
    testimonial: {
      text: "Snelle en efficiënte putlediging. Totaal geen geurhinder achteraf. Topdienst!",
      author: "Benoît R., Doornik"
    },
    faqs: [
      {
        question: "Hoe vaak moet een septische put geledigd worden?",
        answer: "Gemiddeld wordt aangeraden om uw septische put om de 4 à 5 jaar te laten ledigen, of zodra de sliblaag meer dan 50% van het volume inneemt."
      },
      {
        question: "Wat is de prijs voor het ledigen van een septische put?",
        answer: "Het tarief voor een standaard putlediging varieert tussen €150 en €300, afhankelijk van het volume en de afstand tot de straat."
      }
    ],
    color: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      border: "border-green-500/30",
      glow: "bg-green-500"
    }
  },
  {
    id: "panneaux-solaires",
    slug: "zonnepanelen",
    title: "Zonnepanelen",
    description: "PRO SERVICES installeert uw fotovoltaïsche zonnepanelen en thuisbatterijen overal in België. Profiteer van groene, lokale en hernieuwbare energie en verlaag uw elektriciteitsrekening permanent met tot wel 80%. Onze RESCert-gecertificeerde installateurs regelen uw project van A tot Z.",
    trustPoints: [
      { title: "Gratis Rendementsstudie", desc: "Analyse ter plaatse van uw dak (hellingshoek, schaduw, oriëntatie) om uw jaarlijkse opbrengst te maximaliseren." },
      { title: "RESCert & AREI Gecertificeerd", desc: "Erkende installateurs om uw recht op premies te garanderen en een absolute elektrische conformiteit te leveren." },
      { title: "Langdurige Garanties", desc: "Premium Tier-1 panelen met 25 jaar lineaire vermogensgarantie en omvormers met 10 tot 20 jaar garantie." },
      { title: "Sleutel-op-de-deur Service", desc: "Volledige ontzorging: netwerkaansluiting, montageconstructies en alle administratieve aanmeldingen." }
    ],
    features: [
      "Installatie fotovoltaïsche zonnepanelen",
      "Thuisbatterij opslagsystemen",
      "Intelligente hybride omvormers",
      "Volledige AREI-keuring inbegrepen",
      "Gepersonaliseerde rendementsberekening"
    ],
    subServices: [
      {
        slug: "installatie-zonnepanelen-premium",
        title: "Zonnepanelen Installatie",
        desc: "Plaatsing van monokristallijne zonnepanelen met hoog rendement op platte of schuine daken."
      },
      {
        slug: "thuisbatterij-opslag-zonnepanelen",
        title: "Thuisbatterij Opslag",
        desc: "Lithium thuisbatterijen (LFP) om uw zelfconsumptie overdag en 's nachts te maximaliseren."
      },
      {
        slug: "omvormers-micro-omvormers",
        title: "Omvormers & Micro-omvormers",
        desc: "Plaatsing van slimme hybride omvormers en Enphase micro-omvormers voor maximaal rendement."
      }
    ],
    testimonial: {
      text: "Installatie binnen 2 dagen perfect uitgevoerd. Mijn stroomrekening is gedeeld door 4 en de app is geweldig!",
      author: "Jean-Paul M., Namen"
    },
    faqs: [
      {
        question: "Zijn zonnepanelen rendabel in België?",
        answer: "Absoluut. Moderne fotovoltaïsche panelen werken op diffuus licht en hebben geen constant direct zonlicht nodig. De gemiddelde terugverdientijd in België is 5 tot 7 jaar."
      }
    ],
    color: {
      bg: "bg-amber-500/20",
      text: "text-amber-400",
      border: "border-amber-500/30",
      glow: "bg-amber-500"
    }
  },
  {
    id: "toiture",
    slug: "dakwerken",
    title: "Dakwerken",
    description: "PRO SERVICES verzorgt al uw dakwerken in heel België: dringende herstelling of daklekken, volledige dakrenovatie, thermische isolatie van platte of schuine daken, en professionele reiniging of ontmossing. Onze ervaren dakdekkers garanderen kwalitatief werk.",
    trustPoints: [
      { title: "Erkende Dakdekkers", desc: "Een team van gekwalificeerde vakmensen voor alle soorten dakbedekking (pannen, leien, zink, EPDM)." },
      { title: "24/7 Dringende Lekherstelling", desc: "Noodafdichting na storm of bij zware infiltratie om waterschade direct te stoppen." },
      { title: "Tienjarige Verzekering", desc: "Al onze complete dakrenovaties en constructies genieten van de wettelijke Belgische 10-jarige garantie." },
      { title: "Gratis & Transparante Offerte", desc: "Grondige inspectie, gedetailleerde opmeting en duidelijke offerte binnen 24 uur." }
    ],
    features: [
      "Herstellen van daklekken & infiltraties",
      "Volledige dakrenovatie (pannen, leien)",
      "EPDM & Plat dak waterdichting",
      "Ontmossen & reinigen van daken",
      "Dak- en zolderisolatie"
    ],
    subServices: [
      {
        slug: "daklek-spoedherstelling",
        title: "Daklek Herstellen",
        desc: "Snel opsporen van lekkages, vervangen van kapotte pannen en herstel van defect lood- of zinkwerk."
      },
      {
        slug: "dakrenovatie-leien-pannen",
        title: "Dakrenovatie & Vernieuwing",
        desc: "Volledige vervanging van uw oude dakbedekking door hoogwaardige kleipannen, betonpannen of leien."
      },
      {
        slug: "waterdichting-plat-dak-epdm",
        title: "EPDM & Plat Dak Waterdichting",
        desc: "Plaatsen van duurzame EPDM-membranen of bitumen roofing voor een perfect waterdicht plat dak."
      },
      {
        slug: "ontmossen-reinigen-daken",
        title: "Ontmossen & Reinigen van Daken",
        desc: "Grondige reiniging van dakpannen of leien, ontmossen en nabehandeling met een beschermende coating."
      }
    ],
    testimonial: {
      text: "Dringende interventie voor een daklek na een storm. Snel geholpen en keurig hersteld volgens offerte.",
      author: "Marc D., Waterloo"
    },
    faqs: [
      {
        question: "Wat is de levensduur van een dak in België?",
        answer: "Een goed onderhouden pannendak gaat gemiddeld 30 tot 50 jaar mee, en natuurleien zelfs meer dan 70 jaar. EPDM op platte daken gaat doorgaans 40 tot 50 jaar mee."
      }
    ],
    color: {
      bg: "bg-sky-500/20",
      text: "text-sky-400",
      border: "border-sky-500/30",
      glow: "bg-sky-500"
    }
  },
  {
    id: "camera-surveillance",
    slug: "camerabewaking",
    title: "Camerabewaking",
    description: "PRO SERVICES installeert uw camerabewaking, alarmsystemen en beveiligingsoplossingen in heel België. Beveilig uw woning, winkel of bedrijf met onze HD-apparatuur (IP, Wi-Fi, nachtzicht, slimme detectie). Live meekijken op uw smartphone 24h/24.",
    trustPoints: [
      { title: "Gratis Beveiligingsstudie", desc: "Volledige analyse van de kwetsbare punten van uw gebouw voor een optimale plaatsing." },
      { title: "HD Apparatuur & Nachtzicht", desc: "High-end camera's (HIKVISION, Dahua) met infrarood nachtzicht en slimme persoonsdetectie." },
      { title: "Live Mobiele App", desc: "Live meekijken, directe bewegingsmeldingen en beheer op afstand op uw iOS of Android smartphone." },
      { title: "Professionele Configuratie", desc: "Discreet bekabelen, professionele instelling van de NVR-recorder en volledige uitleg." }
    ],
    features: [
      "HD IP camera's (4K/8MP)",
      "Beveiligde NVR recorders & opslag",
      "Infrarood & kleur nachtzicht",
      "Live mobiele push-notificaties",
      "Onderhoud & bekabeling"
    ],
    subServices: [
      {
        slug: "installatie-ip-cameras",
        title: "IP Camera's Binnen & Buiten",
        desc: "Plaatsing van vandaalbestendige dome- of bulletcamera's (IP67) met nachtzicht en optische zoom."
      },
      {
        slug: "nvr-recorders-beveiligde-opslag",
        title: "NVR Recorders & Veilige Opslag",
        desc: "Installatie van netwerkrecorders (NVR) voor wekenlange beveiligde en gecodeerde opslag van uw camerabeelden."
      },
      {
        slug: "alarmsystemen-inbraakbeveiliging",
        title: "Alarmsystemen & Inbraakbeveiliging",
        desc: "Plaatsing van slimme, draadloze alarmsystemen met melders, sirenes en smartphone-koppeling."
      }
    ],
    testimonial: {
      text: "Installatie uitgevoerd zonder zichtbare kabels. Met de app kan ik mijn winkel overal ter wereld haarscherp bewaken!",
      author: "Youssef K., Brussel"
    },
    faqs: [
      {
        question: "Wat is de Belgische wetgeving rond camerabewaking?",
        answer: "In België bent u verplicht uw camera's aan te melden bij de politie (via de online aangifte) en het officiële pictogram te plaatsen aan de ingang van uw pand. Onze experts adviseren u hierbij."
      }
    ],
    color: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      glow: "bg-emerald-500"
    }
  },
  {
    id: "construction",
    slug: "bouwwerken",
    title: "Ruwbouw & Metselwerken",
    description: "PRO SERVICES voert al uw ruwbouwwerken, algemeen metselwerk, uitbouwen van woningen en aanpassingen uit in België. Of het nu gaat om het gieten van een gewapende betonplaat, het openmaken van een dragende muur met een stalen IPN-balk, of een complete aanbouw, onze ervaren metselaars garanderen een ijzersterke stabiliteit.",
    trustPoints: [
      { title: "10 Jaar Verzekerde Garantie", desc: "Al onze ruwbouw- en metselwerken zijn gedekt door de verplichte tienjarige BA-verzekering." },
      { title: "Stabiliteitsberekening Ingenieur", desc: "Voor dragende structuren werken wij nauw samen met een stabiliteits bureau voor absolute veiligheid." },
      { title: "BENOR Kwaliteitsmaterialen", desc: "Wij gebruiken uitsluitend BENOR-gecertificeerd beton en bouwstenen conform de Belgische normen." },
      { title: "Vaste Prijsopgave binnen 48u", desc: "Geen onvoorziene kosten achteraf. Een gedetailleerde, vaste offerte voor uw project." }
    ],
    features: [
      "Algemeen metselwerk & snelbouw",
      "Dragende muur openbreken & plaatsen IPN-balk",
      "Grondwerken, funderingen & riolering",
      "Gieten of betonplaten en dekvloeren (chapes)"
    ],
    subServices: [
      {
        slug: "algemeen-metselwerk-ruwbouw",
        title: "Algemeen Metselwerk",
        desc: "Metselen van snelbouw- en gevelstenen voor uw verbouwing of uitbreiding."
      },
      {
        slug: "dragende-muur-openbreken-ipn",
        title: "Dragende Muur Openbreken & IPN",
        desc: "Veilig slopen van dragende wanden met professionele schoring en stalen balken."
      },
      {
        slug: "gieten-betonplaat-chapes",
        title: "Gieten van Betonplaten & Chapes",
        desc: "Bekisting, wapening en gieten van gewapende betonplaten en perfect genivelleerde chapes."
      },
      {
        slug: "grondwerken-fundering-riolering",
        title: "Grondwerken, Fundering & Riolering",
        desc: "Nivelleren, graven van funderingen en leggen van riolering en afvoer voor uw nieuwe aanbouw."
      },
      {
        slug: "gevelrenovatie-rejointoyage",
        title: "Gevelrenovatie & Voegwerken",
        desc: "Opknappen van gevels: zandstralen, reinigen, voegen uitslijpen, opnieuw voegen en hydrofoberen."
      }
    ],
    testimonial: {
      text: "We hebben onze dragende muur laten openbreken voor een open keuken. Werk in 2 dagen geklaard, uitstekende schoring en perfecte stabiliteit. Erg professioneel!",
      author: "Laurent D., Waterloo"
    },
    faqs: [
      {
        question: "Is een vergunning nodig voor het openbreken van een dragende muur?",
        answer: "Ja, in heel België (zowel in Vlaanderen, Brussel als Wallonië) is voor elke ingreep die invloed heeft op de stabiliteit van de woning een stedenbouwkundige vergunning en de medewerking van een architect/ingenieur verplicht."
      }
    ],
    color: {
      bg: "bg-amber-500/20",
      text: "text-amber-400",
      border: "border-amber-500/30",
      glow: "bg-amber-500"
    }
  },
  {
    id: "vitres",
    slug: "ruitenwasser",
    title: "Ruitenwasser",
    description: "PRO SERVICES biedt professionele ruitenwasser-diensten voor particulieren en bedrijven in België. Of het nu gaat om woningen, winkelpuien, veranda's of complexe raampartijen, onze ruitenwassers garanderen een stralend resultaat zonder strepen.",
    trustPoints: [
      { title: "Streepvrije Afwerking", desc: "Onze ruitenwassers gebruiken professionele technieken en trekkers voor een streeploos glanzend glas." },
      { title: "Hoogte- en Telescoopreiniging", desc: "Inzet van osmose-telescoopstelen en hoogwerkers om ook de hoogste ramen veilig te reinigen." },
      { title: "Inclusief Reinigen Profielen", desc: "Wij reinigen systematisch de raamlijsten, PVC, aluminium of houten profielen en vensterbanken mee." },
      { title: "Flexibele Onderhoudscontracten", desc: "Eenmalig of periodiek (tweewekelijks, maandelijks of per kwartaal) aangepast aan uw wensen." }
    ],
    features: [
      "Wassen van residentiële ramen & schuifpuien",
      "Periodiek wassen van winkeletalages & showrooms",
      "Reinigen van veranda's, glazen daken en lichtkoepels",
      "Glasbewassing op hoogte met osmosewater"
    ],
    subServices: [
      {
        slug: "residentiele-glasbewassing",
        title: "Residentiële Glasbewassing",
        desc: "Grondig wassen van uw ramen, dakramen, schuiframen en glazen balustrades."
      },
      {
        slug: "ruiten-wassen-winkels-bedrijven",
        title: "Ruitenwassen voor Winkels & Bedrijven",
        desc: "Periodieke reiniging van etalages, winkelpuien en kantoorvensters voor een perfecte uitstraling."
      },
      {
        slug: "verandareiniging-glazen-daken",
        title: "Reiniging van Veranda's & Glazen Daken",
        desc: "Verwijderen van mos, vuil en vlekken op veranda's, lichtkoepels en glazen daken."
      },
      {
        slug: "glasbewassing-op-hoogte",
        title: "Glasbewassing op Hoogte",
        desc: "Veilig wassen op grote hoogte met telescopische carbonperzen en osmosewater, of met hoogwerkers."
      },
      {
        slug: "reinigen-raamprofielen-rolluiken",
        title: "Reiniging van Profielen & Rolluiken",
        desc: "Volledige reiniging van PVC, alu of houten raamlijsten, moustiquaires en rolluiken."
      }
    ],
    testimonial: {
      text: "De ruitenwasser is langsgekomen voor onze veranda die al twee jaar niet gewassen was. Het resultaat is echt magisch, alles glanst weer!",
      author: "Nathalie M., Namen"
    },
    faqs: [
      {
        question: "Hoe vaak moet ik mijn ramen laten wassen?",
        answer: "Voor particulieren raden we een wasbeurt om de 6 tot 12 weken aan. Voor winkels en etalages in winkelstraten is een wekelijkse of tweewekelijkse beurt aanbevolen."
      }
    ],
    color: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "bg-cyan-500"
    }
  },
  {
    id: "jardinage",
    slug: "tuinieren",
    title: "Tuinman & Boomverzorging",
    description: "PRO SERVICES biedt volledige diensten voor tuinonderhoud, snoeien, vellen van bomen en tuinontwerp in België. Of u nu uw gazon wilt laten maaien, hagen snoeien of een gevaarlijke boom veilig wilt laten kappen, onze hoveniers staan voor u klaar.",
    trustPoints: [
      { title: "Erkende Tuiniers & Boomverzorgers", desc: "Gekwalificeerde hoveniers opgeleid in snoeitechnieken en veilig klimmen bij boomverzorging." },
      { title: "Veilig Vellen & Snoeien", desc: "Wij beheersen gecontroleerd afbreken in kleine ruimtes met volledige beroepsaansprakelijkheidsverzekering." },
      { title: "Afvoer van Tuinafval", desc: "Hakselen van takken ter plaatse, volledige afvoer en bezemschoon opleveren van uw tuin." },
      { title: "Flexibele Onderhoudscontracten", desc: "Maatwerk jaarformules voor grasmaaien, hagen scheren en herfstblad opruimen." }
    ],
    features: [
      "Periodiek tuinonderhoud & gazonmaaien",
      "Snoeien en topkappen of grote bomen",
      "Kappen of gevaarlijke bomen via klimwerk",
      "Scheren van hagen en heesters op maat",
      "Aanleg of terrassen, tuinpaden en omheiningen"
    ],
    subServices: [
      {
        slug: "tuinonderhoud-periodiek-belgie",
        title: "Tuinonderhoud & Groenvoorziening",
        desc: "Grasmaaien, borders wieden, verticuteren, bladeren opruimen en opknappen van verwilderde tuinen."
      },
      {
        slug: "snoeien-vellen-bomen-veilig",
        title: "Boomverzorging & Snoei",
        desc: "Veilig snoeien, inkorten of uitdunnen van bomen voor een gezonde groei."
      },
      {
        slug: "vellen-gevaarlijke-bomen",
        title: "Vellen van Gevaarlijke Bomen",
        desc: "Gecontroleerd kappen of stapsgewijs demonteren van gevaarlijke bomen in kleine tuinen of nabij huizen."
      },
      {
        slug: "scheren-van-hagen-struiken",
        title: "Scheren van Hagen & Struiken",
        desc: "Perfect strak scheren of fors terugsnoeien van hagen, struiken en heesters op maat."
      },
      {
        slug: "tuinaanleg-bestrating",
        title: "Tuinaanleg, Bestrating & Hekwerk",
        desc: "Inzaaien of leggen van graszoden, beplanting, aanleggen van terrassen, tuinpaden en omheiningen."
      }
    ],
    testimonial: {
      text: "We hebben het snoeien van twee grote eiken vlak bij ons dak toevertrouwd aan PRO SERVICES. Sensationeel klimwerk en absolute veiligheid. De tuin werd keurig opgeruimd!",
      author: "Jean-Pierre V., Waals-Brabant"
    },
    faqs: [
      {
        question: "Wat is de beste periode om bomen te snoeien?",
        answer: "De meeste bomen worden gesnoeid in de rustperiode (late herfst tot einde winter, mits het niet vriest). Dit beperkt sapverlies. Echter, zomersnoei ('groensnoei') is ook uitstensend voor snellere wondheling bij bepaalde boomsoorten."
      }
    ],
    color: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      glow: "bg-emerald-500"
    }
  },
  {
    id: "peinture",
    slug: "schilderwerken",
    title: "Schilderwerken & Afwerking",
    description: "Professioneel schildersbedrijf en afwerkingsbedrijf in België. Erkende vaklui voor al uw binnenschilderwerken, buitenschilderwerken, keukeninrichting, dakbedekking (roofing), vloerbekleding (parket & laminaat) en Gyproc & pleisterwerk. Gratis vrijblijvende offerte, perfecte afwerking en 10 jaar garantie.",
    trustPoints: [
      { title: "Gratis Offerte binnen 24u", desc: "Plaatsbezoek en gedetailleerde offerte zonder verplichtingen in heel België." },
      { title: "Vakkundige Schilders", desc: "Zorgvuldige bescherming van meubels en vloeren, grondige voorbereiding en strakke afwerking." },
      { title: "Ecologische Kwaliteitsverf", desc: "Gebruik van geurarme, VOC-vrije en afwasbare verven van topmerken (Sikkens, Boss Paints)." },
      { title: "Tienjarige Garantie & Opruiming", desc: "Werf wordt kraakproper achtergelaten, gedekt door garantie en professionele verzekering." },
    ],
    features: [
      "Binnenschilderwerk muren, plafonds & houtwerk",
      "Buitenschilderwerk & gevelrenovatie",
      "Keukeninrichting & plaatsing van keukens op maat",
      "Dakwerken & waterdichting (roofing platte daken)",
      "Vloerbekleding (parket, laminaat & epoxy)",
      "Gyproc & pleisterwerk (scheidingswanden & valse plafonds)",
      "Voorbereiding, plamuren & bepleistering",
      "Schilderen deuren, raamkozijnen & trappen",
    ],
    subServices: [
      {
        slug: "binnenschilderwerk-muren-plafonds",
        title: "Binnenschilderwerk (Muren & Plafonds)",
        desc: "Schilderen van uw muren, plafonds, sierlijsten en houtwerk met ecologische kwaliteitsverf.",
      },
      {
        slug: "buitenschilderwerk-gevels",
        title: "Buitenschilderwerk & Gevels",
        desc: "Behandeling, waterdicht maken en schilderen van uw gevels, buitenmuren en dakgoten.",
      },
      {
        slug: "voorbereiding-plamuren-pleisterwerk",
        title: "Voorbereiding, Plamuren & Pleisterwerk",
        desc: "Egaliseren van muren, opvullen van barsten, stofvrij schuren en vliesbehang plaatsen.",
      },
      {
        slug: "schilderen-houtwerk-ramen-deuren",
        title: "Schilderen Houtwerk, Ramen & Deuren",
        desc: "Renovatie, schuren en schilderen of beitsen van uw binnendeuren, raamkozijnen en trappen.",
      },
      {
        slug: "epoxycoating-vloerafwerking",
        title: "Epoxyvloeren & Vloercoatings",
        desc: "Aanbrengen van oersterke epoxyharsvloeren voor garages, ateliers, kelders en winkels.",
      },
      {
        slug: "keukeninrichting-en-keukenplaatsing",
        title: "Keukeninrichting & Keukenplaatsing",
        desc: "Volledige installatie van uitgeruste keukens en montage van meubilair op maat.",
      },
      {
        slug: "dakwerken-en-waterdichting-roofing",
        title: "Dakwerken & Waterdichting (Roofing)",
        desc: "Waterdichtingswerken voor platte daken en terrassen (plaatsen en herstellen van roofing).",
      },
      {
        slug: "vloerbekleding-parket-en-laminaat",
        title: "Vloerbekleding (Parket & Laminaat)",
        desc: "Leveren en plaatsen van massief parket, halfmassief parket en laminaatvloeren.",
      },
      {
        slug: "gyproc-en-pleisterwerk",
        title: "Gyproc & Pleisterwerk",
        desc: "Plaatsen van scheidingswanden, valse plafonds in Gyproc en traditionele pleisterwerken.",
      },
    ],
    color: {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      border: "border-purple-500/30",
      glow: "bg-purple-500",
    },
    testimonial: {
      text: "Volledige schilderrenovatie van ons huis in Brussel. Meubels perfect beschermd, hele strakke plafonds. Aanrader!",
      author: "Catherine M., Brussel",
    },
    faqs: [
      {
        question: "Wat is de gemiddelde prijs per m² voor schilderwerken in België?",
        answer: "In België ligt de gemiddelde prijs voor binnenschilderwerk tussen €20 en €40 per m² (inclusief materiaal en arbeidsloon), afhankelijk van de staat van de muren en het aantal lagen.",
      },
      {
        question: "Gebruikt u milieuvriendelijke en geurarme verven?",
        answer: "Ja, wij werken bij voorkeur met professionele verven met een laag VOC-gehalte, geurarm, hypoallergeen en milieuvriendelijk.",
      },
    ],
  }
];

export function parseNlServiceAndCity(slug: string) {
  const result = matchServiceAndCity(slug, "nl");
  return {
    service: result.dutchService,
    cityInfo: result.cityInfo
      ? {
          name: frToNlCityNameMap[result.cityInfo.name] || result.cityInfo.name,
          slug: frToNlCitySlugMap[result.cityInfo.slug] || result.cityInfo.slug,
          province: result.cityInfo.province === "Belgique" ? "België" : result.cityInfo.province,
        }
      : null,
    matchedTerm: result.matchedTerm,
  };
}

function frCityNameFromSlug(slug: string): string {
  return capitalizeWord(slug.replace(/-/g, " "));
}

function capitalizeWord(word: string): string {
  return word.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export function localizeNlText(text: string, cityName: string) {
  if (!cityName) return text;
  return text
    .replace(/in België/gi, `in ${cityName}`)
    .replace(/overal in België/gi, `in ${cityName} en omgeving`)
    .replace(/in heel België/gi, `in ${cityName} en omstreken`)
    .replace(/België/gi, cityName)
    .replace(/Belgische/gi, `${cityName}se`);
}

export function getAlternatePath(pathname: string, targetLang: 'fr' | 'nl'): string {
  if (!pathname) return targetLang === 'nl' ? '/nl' : '/';
  
  if (targetLang === 'nl') {
    if (pathname === '/') return '/nl';
    if (pathname.startsWith('/nl')) return pathname;
    
    // It is a French page.
    const cleanPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    
    // Check if it's one of the static pages
    if (cleanPath === 'zones-de-services') return '/nl/zones-de-services';
    if (cleanPath === 'devis') return '/nl/devis';
    if (cleanPath === 'contact') return '/nl/contact';
    if (cleanPath === 'urgence') return '/nl/urgence';
    
    // It's a dynamic service / city page
    // Format: serviceSlug or serviceSlug/subServiceSlug
    const parts = cleanPath.split('/');
    const serviceSlug = parts[0];
    
    // Check for exact service slug match
    if (frToNlSlugMap[serviceSlug]) {
      const nlServiceSlug = frToNlSlugMap[serviceSlug];
      // IF there's a subservice slug:
      if (parts[1]) {
        // Find the French service
        const fService = services.find(s => s.slug === serviceSlug);
        if (fService) {
          const subIndex = fService.subServices.findIndex(sub => sub.slug === parts[1]);
          if (subIndex !== -1) {
            const dService = dutchServices.find(s => s.id === fService.id);
            if (dService && dService.subServices[subIndex]) {
              return `/nl/${nlServiceSlug}/${dService.subServices[subIndex].slug}`;
            }
          }
        }
        return `/nl/${nlServiceSlug}/${parts[1]}`;
      }
      return `/nl/${nlServiceSlug}`;
    }
    
    // Check for service-city slug match (e.g. debouchage-grimbergen)
    for (const [fr, nl] of Object.entries(frToNlSlugMap)) {
      // E.g. plomberie-belgie -> loodgieter-belgie
      if (serviceSlug.startsWith(`${fr}-`)) {
        const cityPart = serviceSlug.slice(fr.length + 1);
        const nlCityPart = frToNlCitySlugMap[cityPart] || cityPart;
        return `/nl/${nl}-${nlCityPart}`;
      }
    }
    
    // Fallback mappings for dynamic service terms in cities (like plombier-grimbergen)
    const frTerms = ["plombier", "chauffagiste", "electricien", "couvreur", "macon", "debouchage", "laveur-de-vitres", "jardinier", "elagueur", "ruimdienst", "vidange"];
    const frToNlTermMap: Record<string, string> = {
      "plombier": "loodgieter",
      "chauffagiste": "verwarming",
      "electricien": "elektriciteit",
      "couvreur": "dakwerken",
      "macon": "bouwwerken",
      "debouchage": "ontstopping",
      "laveur-de-vitres": "ruitenwasser",
      "jardinier": "tuinieren",
      "elagueur": "tuinieren",
      "ruimdienst": "putlediging",
      "vidange": "putlediging"
    };
    
    for (const term of frTerms) {
      if (serviceSlug.startsWith(`${term}-`)) {
        const cityPart = serviceSlug.slice(term.length + 1);
        const nlCityPart = frToNlCitySlugMap[cityPart] || cityPart;
        const nlTerm = frToNlTermMap[term] || term;
        return `/nl/${nlTerm}-${nlCityPart}`;
      }
    }
    
    return `/nl/${serviceSlug}`;
  } else {
    // targetLang === 'fr'
    if (!pathname.startsWith('/nl')) return pathname;
    
    if (pathname === '/nl') return '/';
    
    const cleanPath = pathname.replace(/^\/nl\/?/, '');
    if (cleanPath === '') return '/';
    
    if (cleanPath === 'zones-de-services') return '/zones-de-services';
    if (cleanPath === 'devis') return '/devis';
    if (cleanPath === 'contact') return '/contact';
    if (cleanPath === 'urgence') return '/urgence';
    
    const parts = cleanPath.split('/');
    const serviceSlug = parts[0];
    
    // Check exact match in nlToFr
    if (nlToFrSlugMap[serviceSlug]) {
      const frServiceSlug = nlToFrSlugMap[serviceSlug];
      if (parts[1]) {
        // Find Dutch service
        const dService = dutchServices.find(s => s.slug === serviceSlug);
        if (dService) {
          const subIndex = dService.subServices.findIndex(sub => sub.slug === parts[1]);
          if (subIndex !== -1) {
            const fService = services.find(s => s.id === dService.id);
            if (fService && fService.subServices[subIndex]) {
              return `/${frServiceSlug}/${fService.subServices[subIndex].slug}`;
            }
          }
        }
        return `/${frServiceSlug}/${parts[1]}`;
      }
      return `/${frServiceSlug}`;
    }
    
    // Check service-city slug match
    for (const [nl, fr] of Object.entries(nlToFrSlugMap)) {
      if (serviceSlug.startsWith(`${nl}-`)) {
        const cityPart = serviceSlug.slice(nl.length + 1);
        const frCityPart = nlToFrCitySlugMap[cityPart] || cityPart;
        return `/${fr}-${frCityPart}`;
      }
    }
    
    return `/${serviceSlug}`;
  }
}

// Dynamic enrichment of dutchServices with identical image assets from the French services config
dutchServices.forEach((dService) => {
  const fService = services.find((s) => s.id === dService.id);
  if (fService) {
    if ((fService as any).imageUrl) {
      (dService as any).imageUrl = (fService as any).imageUrl;
    }
    dService.subServices.forEach((dSub, index) => {
      const fSub = fService.subServices[index];
      if (fSub && (fSub as any).imageUrl) {
        (dSub as any).imageUrl = (fSub as any).imageUrl;
      }
    });
  }
});
