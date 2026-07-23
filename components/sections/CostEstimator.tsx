"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  Wrench, Flame, Droplets, Zap, Wind, Truck, Home, Sun, Camera, Sparkles, Trees,
  Clock, ArrowRight, Coins, CheckCircle2, Calculator, ShieldCheck, Info, Sliders, Check, Download, FileText
} from "lucide-react";
import { generatePdfDocument } from "@/lib/generatePdf";

// Definitions of services matching ContactForm options
interface SubService {
  id: string;
  title: string;
  minPrice: number;
  maxPrice: number;
  desc: string;
}

interface ServiceCategory {
  id: string;
  slug: "plomberie" | "chauffage" | "gaz" | "electricite" | "climatisation" | "fosse" | "construction" | "debouchage" | "toiture" | "panneaux-solaires" | "renovation" | "citerne" | "camera-surveillance" | "vitres" | "jardinage";
  title: string;
  icon: any;
  subServices: SubService[];
}

const ESTIMATOR_SERVICES: ServiceCategory[] = [
  {
    id: "plomberie",
    slug: "plomberie",
    title: "Plomberie",
    icon: Wrench,
    subServices: [
      { id: "fuite", title: "Réparation & Recherche de Fuite d'Eau", minPrice: 85, maxPrice: 180, desc: "Détection acoustique/thermique sans casse et colmatage." },
      { id: "sanitaire", title: "Robinetterie, WC & Sanitaires", minPrice: 75, maxPrice: 160, desc: "Pose ou remplacement de mitigeur, chasse d'eau, évier." },
      { id: "boiler", title: "Chauffe-eau & Boiler (Remplacement/Dépannage)", minPrice: 120, maxPrice: 380, desc: "Détartrage, résistance ou remplacement de boiler." }
    ]
  },
  {
    id: "debouchage",
    slug: "debouchage",
    title: "Débouchage",
    icon: Droplets,
    subServices: [
      { id: "wc", title: "Débouchage WC, Toilette & Évier", minPrice: 85, maxPrice: 150, desc: "Furet électrique professionnel ou pompe haute pression." },
      { id: "egout", title: "Débouchage Égout & Canalisations", minPrice: 140, maxPrice: 290, desc: "Curage hydrodynamique haute pression (camion pompe)." },
      { id: "camera", title: "Inspection Caméra Endoscopique HD", minPrice: 110, maxPrice: 220, desc: "Diagnostic vidéo intérieur pour situer le bouchon ou la fissure." }
    ]
  },
  {
    id: "chauffage",
    slug: "chauffage",
    title: "Chauffage",
    icon: Flame,
    subServices: [
      { id: "depannage_chaudiere", title: "Dépannage Chaudière Urgent 24/7", minPrice: 90, maxPrice: 190, desc: "Diagnostic rapide et remise en route (Vaillant, Bulex, Viessmann...)." },
      { id: "entretien_gaz", title: "Entretien Annuel Chaudière Gaz (Légal)", minPrice: 110, maxPrice: 160, desc: "Nettoyage, réglages et délivrance de l'attestation officielle." },
      { id: "entretien_mazout", title: "Entretien Annuel Chaudière Mazout", minPrice: 170, maxPrice: 260, desc: "Ramonage, nettoyage du brûleur et certificat de conformité." }
    ]
  },
  {
    id: "electricite",
    slug: "electricite",
    title: "Électricité",
    icon: Zap,
    subServices: [
      { id: "panne_elec", title: "Dépannage Panne / Court-Circuit", minPrice: 85, maxPrice: 180, desc: "Recherche de défaut d'isolement et disjoncteur défectueux." },
      { id: "mise_en_conformite", title: "Mise en Conformité AREI", minPrice: 380, maxPrice: 1200, desc: "Mise aux normes du tableau et réseau avant inspection officielle." },
      { id: "tableau", title: "Remplacement de Tableau Électrique", minPrice: 750, maxPrice: 1750, desc: "Nouveau coffret aux normes avec différentiels." }
    ]
  },
  {
    id: "gaz",
    slug: "gaz",
    title: "Gaz & GNC",
    icon: Flame,
    subServices: [
      { id: "fuite_gaz", title: "Détection & Urgence Fuite de Gaz", minPrice: 95, maxPrice: 210, desc: "Recherche électronique de fuite et mise en sécurité immédiate." },
      { id: "conformite_cerga", title: "Mise en Conformité Gaz & Certificat CERGA", minPrice: 150, maxPrice: 380, desc: "Attestation officielle pour ouverture/réouverture du compteur." },
      { id: "conversion_gaz", title: "Conversion Gaz Pauvre vers Gaz Riche", minPrice: 120, maxPrice: 280, desc: "Réglage certifié CERGA de tous vos appareils au gaz." }
    ]
  },
  {
    id: "fosse",
    slug: "fosse",
    title: "Vidange Fosse",
    icon: Truck,
    subServices: [
      { id: "fosse_standard", title: "Vidange Fosse Septique Standard", minPrice: 150, maxPrice: 290, desc: "Pompage des boues par camion hydrocureur agréé." },
      { id: "bac_graisse", title: "Pompage & Nettoyage Bac à Graisse", minPrice: 170, maxPrice: 310, desc: "Curage et nettoyage complet (particuliers & Horeca)." },
      { id: "micro_station", title: "Entretien Micro-Station Épuration", minPrice: 180, maxPrice: 350, desc: "Maintenance préventive et contrôle des pompes de relevage." }
    ]
  },
  {
    id: "climatisation",
    slug: "climatisation",
    title: "Clim & VMC",
    icon: Wind,
    subServices: [
      { id: "clim_entretien", title: "Entretien Airco & Recharge Gaz F-Gas", minPrice: 110, maxPrice: 220, desc: "Désinfection, contrôle de pression et recharge gaz frigorigène." },
      { id: "vmc_installation", title: "Installation & Entretien VMC", minPrice: 160, maxPrice: 450, desc: "Ventilation mécanique contrôlée simple et double flux." }
    ]
  },
  {
    id: "toiture",
    slug: "toiture",
    title: "Toiture",
    icon: Home,
    subServices: [
      { id: "toit_fuite", title: "Dépannage & Réparation Fuite Toiture", minPrice: 160, maxPrice: 450, desc: "Remplacement de tuiles/ardoises, colmatage et solins." },
      { id: "toit_demoussage", title: "Nettoyage & Démoussage Toiture", minPrice: 240, maxPrice: 680, desc: "Traitement anti-mousse et application d'hydrofuge protecteur." },
      { id: "etancheite_epdm", title: "Étanchéité Toit Plat & EPDM", minPrice: 320, maxPrice: 950, desc: "Pose de membrane EPDM ou roofing bitumeux thermosoudé." }
    ]
  },
  {
    id: "panneaux-solaires",
    slug: "panneaux-solaires",
    title: "Panneaux Solaires",
    icon: Sun,
    subServices: [
      { id: "installation_solaire", title: "Installation Panneaux Photovoltaïques", minPrice: 2900, maxPrice: 7500, desc: "Installation complète clés en main avec attestation AREI." },
      { id: "batterie_stockage", title: "Batterie Physique de Stockage", minPrice: 1800, maxPrice: 4200, desc: "Batterie Lithium (LFP) pour maximiser votre autoconsommation." }
    ]
  },
  {
    id: "renovation",
    slug: "renovation",
    title: "Rénovation",
    icon: Sparkles,
    subServices: [
      { id: "sdb_douche", title: "Rénovation Salle de Bain & Douche Italienne", minPrice: 1800, maxPrice: 6500, desc: "Aménagement sur-mesure, plomberie, étanchéité et carrelage." },
      { id: "renovation_totale", title: "Rénovation Totale / Cuisine", minPrice: 2500, maxPrice: 12000, desc: "Remise à neuf complète de votre habitation ou surface commerciale." }
    ]
  },
  {
    id: "citerne",
    slug: "citerne",
    title: "Citerne Mazout",
    icon: Truck,
    subServices: [
      { id: "neutralisation_cuve", title: "Neutralisation & Démontage Cuve Mazout", minPrice: 450, maxPrice: 1100, desc: "Inertage (sable/mousse), découpe et enlèvement avec attestation." },
      { id: "degazage_citerne", title: "Dégazage & Nettoyage Citerne", minPrice: 280, maxPrice: 650, desc: "Pompage des boues de fond et dégazage réglementaire." }
    ]
  },
  {
    id: "camera-surveillance",
    slug: "camera-surveillance",
    title: "Caméras & Sécurité",
    icon: Camera,
    subServices: [
      { id: "installation_camera", title: "Caméras IP HD / 4K & NVR", minPrice: 350, maxPrice: 1450, desc: "Installation caméras de surveillance avec vision nocturne et enregistreur." },
      { id: "systeme_alarme", title: "Système d'Alarme Anti-Intrusion", minPrice: 420, maxPrice: 1800, desc: "Pose d'alarme sans fil connectée smartphone et détecteurs de mouvement." }
    ]
  },
  {
    id: "construction",
    slug: "construction",
    title: "Gros Œuvre",
    icon: Home,
    subServices: [
      { id: "maconnerie", title: "Maçonnerie & Extension de Maison", minPrice: 1500, maxPrice: 9500, desc: "Agrandissement, annexe, ouverture mur porteur et linteau IPN/HEB." },
      { id: "fondations_egout", title: "Terrassement, Fondations & Égouttage", minPrice: 1200, maxPrice: 6800, desc: "Préparation de terrain, fondations béton et raccordement égout." }
    ]
  },
  {
    id: "vitres",
    slug: "vitres",
    title: "Nettoyage Vitres",
    icon: Sparkles,
    subServices: [
      { id: "lavage_vitres", title: "Nettoyage Vitres & Baies Vitrées", minPrice: 65, maxPrice: 180, desc: "Lavage professionnel résidentiel, vérandas et châssis." },
      { id: "vitrines_commerces", title: "Nettoyage Vitrines & Showrooms", minPrice: 80, maxPrice: 250, desc: "Lavage régulier ou ponctuel pour commerces et bureaux." }
    ]
  },
  {
    id: "jardinage",
    slug: "jardinage",
    title: "Jardin & Élagage",
    icon: Trees,
    subServices: [
      { id: "entretien_jardin", title: "Entretien Jardin, Tonte & Haies", minPrice: 75, maxPrice: 220, desc: "Tonte de pelouse, taille de haies et parterres." },
      { id: "elagage_abattage", title: "Élagage & Abattage d'Arbres", minPrice: 220, maxPrice: 980, desc: "Élagage de sécurité, démontage d'arbres dangereux." }
    ]
  }
];

const ESTIMATOR_SERVICES_NL: ServiceCategory[] = [
  {
    id: "plomberie",
    slug: "plomberie",
    title: "Loodgieterij",
    icon: Wrench,
    subServices: [
      { id: "fuite", title: "Reparatie & Opsporen Waterlek", minPrice: 85, maxPrice: 180, desc: "Akoestische/thermische lekdetectie zonder breekwerk." },
      { id: "sanitaire", title: "Kranen, WC & Sanitair", minPrice: 75, maxPrice: 160, desc: "Plaatsen of vervangen van mengkranen, vlotters, wastafels." },
      { id: "boiler", title: "Boiler & Warmwaterketel (Herstelling/Vervanging)", minPrice: 120, maxPrice: 380, desc: "Ontkalken, weerstand of vervanging van boiler." }
    ]
  },
  {
    id: "debouchage",
    slug: "debouchage",
    title: "Ontstopping",
    icon: Droplets,
    subServices: [
      { id: "wc", title: "Ontstopping WC, Toilet & Gootsteen", minPrice: 85, maxPrice: 150, desc: "Professionele elektrische veer of hogedrukpomp." },
      { id: "egout", title: "Ontstopping Riolering & Afvoeren", minPrice: 140, maxPrice: 290, desc: "Hydrodynamische reiniging onder hoge druk (ruimwagen)." },
      { id: "camera", title: "Camera-inspectie HD", minPrice: 110, maxPrice: 220, desc: "Visuele diagnose van de staat van de leidingen." }
    ]
  },
  {
    id: "chauffage",
    slug: "chauffage",
    title: "Verwarming",
    icon: Flame,
    subServices: [
      { id: "depannage_chaudiere", title: "Dringende Herstelling Verwarming 24/7", minPrice: 90, maxPrice: 190, desc: "Snelle diagnose en heropstart (Vaillant, Bulex, Viessmann...)." },
      { id: "entretien_gaz", title: "Jaarlijks Onderhoud Gasboiler (Wettelijk)", minPrice: 110, maxPrice: 160, desc: "Reiniging, afstelling en afgifte officieel attest." },
      { id: "entretien_mazout", title: "Jaarlijks Onderhoud Stookolieketel", minPrice: 170, maxPrice: 260, desc: "Schoorsteenvegen, reinigen brander en conformiteitscertificaat." }
    ]
  },
  {
    id: "electricite",
    slug: "electricite",
    title: "Elektriciteit",
    icon: Zap,
    subServices: [
      { id: "panne_elec", title: "Storing Herstellen / Kortsluiting", minPrice: 85, maxPrice: 180, desc: "Opsporen isolatiefouten en defecte zekering." },
      { id: "mise_en_conformite", title: "AREI Gelijkvormigheidskeuring", minPrice: 380, maxPrice: 1200, desc: "Up-to-date brengen elektriciteitskast voor inspectie." },
      { id: "tableau", title: "Vervangen van de Elektriciteitskast", minPrice: 750, maxPrice: 1750, desc: "Nieuwe kast volgens AREI-normen met differentieels." }
    ]
  },
  {
    id: "gaz",
    slug: "gaz",
    title: "Gas & CNG",
    icon: Flame,
    subServices: [
      { id: "fuite_gaz", title: "Gaslek Detectie & Dringende Herstelling", minPrice: 95, maxPrice: 210, desc: "Elektronische lekdetectie en onmiddellijke beveilging." },
      { id: "conformite_cerga", title: "CERGA Gelijkvormigheidskeuring Gas", minPrice: 150, maxPrice: 380, desc: "Officieel attest voor opening/heropening van de gasmeter." },
      { id: "conversion_gaz", title: "Omschakeling Arm naar Rijk Gas", minPrice: 120, maxPrice: 280, desc: "Gecertificeerde afstelling van al uw gastoestellen." }
    ]
  },
  {
    id: "fosse",
    slug: "fosse",
    title: "Septische Put",
    icon: Truck,
    subServices: [
      { id: "fosse_standard", title: "Septische Put Ledigen Standaard", minPrice: 150, maxPrice: 290, desc: "Leegpompen van slib met goedgekeurde tankwagen." },
      { id: "bac_graisse", title: "Vetput Leegpompen & Reinigen", minPrice: 170, maxPrice: 310, desc: "Reinigen en leegpompen van vetstoffen (particulieren & Horeca)." },
      { id: "micro_station", title: "Onderhoud Micro-Zuiveringsstation", minPrice: 180, maxPrice: 350, desc: "Preventief onderhoud en controle van de pompen." }
    ]
  },
  {
    id: "climatisation",
    slug: "climatisation",
    title: "Airco & VMC",
    icon: Wind,
    subServices: [
      { id: "clim_entretien", title: "Onderhoud Airco & Koelmiddel Bijvullen", minPrice: 110, maxPrice: 220, desc: "Desinfectie, drukcontrole en bijvullen door F-Gas vakman." },
      { id: "vmc_installation", title: "Installatie & Onderhoud VMC Ventilatie", minPrice: 160, maxPrice: 450, desc: "Mechanische ventilatie enkelvoudig en dubbel debiet." }
    ]
  },
  {
    id: "toiture",
    slug: "toiture",
    title: "Dakwerken",
    icon: Home,
    subServices: [
      { id: "toit_fuite", title: "Dringende Herstelling Daklek", minPrice: 160, maxPrice: 450, desc: "Vervangen van pannen/leien en afdichting loodslabben." },
      { id: "toit_demoussage", title: "Reiniging & Ontmossing van Daken", minPrice: 240, maxPrice: 680, desc: "Anti-mos behandeling en aanbrengen beschermende hydrofuge." },
      { id: "etancheite_epdm", title: "Waterdichtheid Plat Dak & EPDM", minPrice: 320, maxPrice: 950, desc: "Plaatsen van EPDM-folie of branden van roofing." }
    ]
  },
  {
    id: "panneaux-solaires",
    slug: "panneaux-solaires",
    title: "Zonnepanelen",
    icon: Sun,
    subServices: [
      { id: "installation_solaire", title: "Installatie Zonnepanelen (Photovoltaïsch)", minPrice: 2900, maxPrice: 7500, desc: "Sleutel-op-de-deur installatie inclusief AREI keuring." },
      { id: "batterie_stockage", title: "Thuisbatterij Opslagsysteem", minPrice: 1800, maxPrice: 4200, desc: "Lithium batterij (LFP) om uw eigenverbruik te maximaliseren." }
    ]
  },
  {
    id: "renovation",
    slug: "renovation",
    title: "Renovatie",
    icon: Sparkles,
    subServices: [
      { id: "sdb_douche", title: "Badkamerrenovatie & Inloopdouche", minPrice: 1800, maxPrice: 6500, desc: "Maatwerk inrichting, loodgieterij, afdichting en tegelwerk." },
      { id: "renovation_totale", title: "Totale Renovatie / Keuken", minPrice: 2500, maxPrice: 12000, desc: "Volledige vernieuwing van uw woning of handelszaak." }
    ]
  },
  {
    id: "citerne",
    slug: "citerne",
    title: "Mazouttank",
    icon: Truck,
    subServices: [
      { id: "neutralisation_cuve", title: "Neutralisatie & Verwijdering Stookolietank", minPrice: 450, maxPrice: 1100, desc: "Opvullen (zand/schuim), versnijden en afvoeren met attest." },
      { id: "degazage_citerne", title: "Ontgassing & Reiniging Mazouttank", minPrice: 280, maxPrice: 650, desc: "Leegpompen van slib en wettelijke ontgassing." }
    ]
  },
  {
    id: "camera-surveillance",
    slug: "camera-surveillance",
    title: "Camerabewaking",
    icon: Camera,
    subServices: [
      { id: "installation_camera", title: "IP Camera's HD/4K & NVR", minPrice: 350, maxPrice: 1450, desc: "Installatie van HD bewakingscamera's met nachtzicht en recorder." },
      { id: "systeme_alarme", title: "Inbraakalarmsysteem", minPrice: 420, maxPrice: 1800, desc: "Draadloos alarmsysteem verbonden met smartphone." }
    ]
  },
  {
    id: "construction",
    slug: "construction",
    title: "Ruwbouw",
    icon: Home,
    subServices: [
      { id: "maconnerie", title: "Metselwerken & Uitbreiding Woning", minPrice: 1500, maxPrice: 9500, desc: "Aanbouw, bijgebouw, steunmuur opening en IPN/HEB balken." },
      { id: "fondations_egout", title: "Grondwerken, Funderingen & Riolering", minPrice: 1200, maxPrice: 6800, desc: "Terreinvoorbereiding, betonfunderingen en rioolaansluiting." }
    ]
  },
  {
    id: "vitres",
    slug: "vitres",
    title: "Ruitenwasser",
    icon: Sparkles,
    subServices: [
      { id: "lavage_vitres", title: "Schoonmaken van Ramen & Glazen", minPrice: 65, maxPrice: 180, desc: "Professionele glasbewassing van woningen, veranda's en ramen." },
      { id: "vitrines_commerces", title: "Reiniging Etalages & Toonzalen", minPrice: 80, maxPrice: 250, desc: "Regelmatige reiniging voor winkels en kantoren." }
    ]
  },
  {
    id: "jardinage",
    slug: "jardinage",
    title: "Tuin & Snoei",
    icon: Trees,
    subServices: [
      { id: "entretien_jardin", title: "Tuinonderhoud, Gras & Hagen", minPrice: 75, maxPrice: 220, desc: "Gras maaien, hagen knippen en algemeen tuinonderhoud." },
      { id: "elagage_abattage", title: "Snoeien & Vellen van Bomen", minPrice: 220, maxPrice: 980, desc: "Veilig snoeien en vellen van gevaarlijke bomen." }
    ]
  }
];

interface CustomQuestionOption {
  labelFr: string;
  labelNl: string;
  addMin: number;
  addMax: number;
}

interface CustomQuestion {
  id: string;
  titleFr: string;
  titleNl: string;
  options: CustomQuestionOption[];
}

// Category Specific Questions Data
const SERVICE_CUSTOM_QUESTIONS: Record<string, CustomQuestion[]> = {
  "camera-surveillance": [
    {
      id: "qty",
      titleFr: "Nombre de caméras à installer",
      titleNl: "Aantal te installeren camera's",
      options: [
        { labelFr: "1 à 2 Caméras", labelNl: "1 tot 2 Camera's", addMin: 0, addMax: 0 },
        { labelFr: "3 à 4 Caméras 4K", labelNl: "3 tot 4 Camera's 4K", addMin: 180, addMax: 320 },
        { labelFr: "5 à 8 Caméras + Enregistreur NVR", labelNl: "5 tot 8 Camera's + NVR Recorder", addMin: 450, addMax: 780 },
        { labelFr: "9+ Caméras (Pro/Immeuble)", labelNl: "9+ Camera's (Bedrijf)", addMin: 900, addMax: 1600 }
      ]
    },
    {
      id: "height",
      titleFr: "Emplacement & Hauteur (Accès)",
      titleNl: "Locatie & Hoogte (Toegang)",
      options: [
        { labelFr: "Intérieur / Rez-de-chaussée", labelNl: "Binnen / Gelijkvloers", addMin: 0, addMax: 0 },
        { labelFr: "Façade Extérieure (Étage 1)", labelNl: "Buitenfaçade (Verdieping 1)", addMin: 40, addMax: 80 },
        { labelFr: "Haute Façade / Toiture (Nacelle/Échelle)", labelNl: "Hoge gevel / Dak (Hoogwerker)", addMin: 120, addMax: 220 }
      ]
    },
    {
      id: "type",
      titleFr: "Type de technologie",
      titleNl: "Type technologie",
      options: [
        { labelFr: "Caméras IP PoE Filaire 4K (Inclus)", labelNl: "IP PoE Bekabeld 4K (Inbegrepen)", addMin: 0, addMax: 0 },
        { labelFr: "Caméras Wi-Fi Sans fil / Batterie", labelNl: "Draadloos Wi-Fi / Batterij", addMin: 30, addMax: 60 },
        { labelFr: "Système Alarme & Sirène connecté", labelNl: "Inbraakalarm & Sirene", addMin: 150, addMax: 350 }
      ]
    }
  ],
  "panneaux-solaires": [
    {
      id: "qty",
      titleFr: "Nombre de panneaux photovoltaïques",
      titleNl: "Aantal zonnepanelen",
      options: [
        { labelFr: "6 à 8 Panneaux (~ 2.5 kWp)", labelNl: "6 tot 8 Panelen (~ 2.5 kWp)", addMin: 0, addMax: 0 },
        { labelFr: "10 à 14 Panneaux (~ 4.5 kWp)", labelNl: "10 tot 14 Panelen (~ 4.5 kWp)", addMin: 1200, addMax: 2200 },
        { labelFr: "16 à 22 Panneaux (~ 7.5 kWp)", labelNl: "16 tot 22 Panelen (~ 7.5 kWp)", addMin: 2800, addMax: 4500 },
        { labelFr: "24+ Panneaux (~ 10+ kWp)", labelNl: "24+ Panelen (~ 10+ kWp)", addMin: 4500, addMax: 7000 }
      ]
    },
    {
      id: "battery",
      titleFr: "Batterie physique de stockage",
      titleNl: "Thuisbatterij opslagsysteem",
      options: [
        { labelFr: "Sans Batterie (Onduleur réseau)", labelNl: "Zonder Batterij (Netomvormer)", addMin: 0, addMax: 0 },
        { labelFr: "Batterie Lithium LFP 5 kWh", labelNl: "Lithium Batterij LFP 5 kWh", addMin: 1800, addMax: 2600 },
        { labelFr: "Batterie Lithium LFP 10 kWh", labelNl: "Lithium Batterij LFP 10 kWh", addMin: 3200, addMax: 4200 }
      ]
    },
    {
      id: "roof",
      titleFr: "Type de toiture",
      titleNl: "Type dak",
      options: [
        { labelFr: "Tuiles Inclinées standard", labelNl: "Hellingdak met Dakpannen", addMin: 0, addMax: 0 },
        { labelFr: "Ardoises Naturelles / Synthétiques", labelNl: "Natuurleien / Kunstleien", addMin: 200, addMax: 400 },
        { labelFr: "Toit Plat EPDM / Roofing", labelNl: "Plat Dak EPDM / Roofing", addMin: 350, addMax: 600 }
      ]
    }
  ],
  "debouchage": [
    {
      id: "equipment",
      titleFr: "Équipement / Drain concerné",
      titleNl: "Betrokken leiding / Afvoer",
      options: [
        { labelFr: "WC / Toilette / Urinoir", labelNl: "WC / Toilet / Urinoir", addMin: 0, addMax: 0 },
        { labelFr: "Évier / Lavabo / Douche", labelNl: "Gootsteen / Wastafel / Douche", addMin: 0, addMax: 0 },
        { labelFr: "Égout Principal / Chambre de Visite", labelNl: "Hoofdriool / Inspectieput", addMin: 60, addMax: 120 },
        { labelFr: "Colonne Générale d'Immeuble", labelNl: "Algemene Stijgleiding Gebouw", addMin: 120, addMax: 220 }
      ]
    },
    {
      id: "floor",
      titleFr: "Étage & Localisation",
      titleNl: "Verdieping & Locatie",
      options: [
        { labelFr: "Rez-de-chaussée / Cave / Jardin", labelNl: "Gelijkvloers / Kelder / Tuin", addMin: 0, addMax: 0 },
        { labelFr: "1er - 2ème Étage", labelNl: "1ste - 2de Verdieping", addMin: 25, addMax: 40 },
        { labelFr: "3ème Étage ou +", labelNl: "3de Verdieping of hoger", addMin: 50, addMax: 80 },
        { labelFr: "Commerce / Restaurant Horeca", labelNl: "Winkel / Restaurant Horeca", addMin: 60, addMax: 110 }
      ]
    },
    {
      id: "method",
      titleFr: "Méthode requise",
      titleNl: "Vereiste methode",
      options: [
        { labelFr: "Furet Électrique / Pompe Manuelle", labelNl: "Elektrische Veer / Pomp", addMin: 0, addMax: 0 },
        { labelFr: "Curage Camion Hydrocureur Haute Pression", labelNl: "Hogedruk Reiniging Ruimwagen", addMin: 80, addMax: 140 },
        { labelFr: "Inspection Caméra Endoscopique HD", labelNl: "Camera-Inspectie HD met Rapport", addMin: 90, addMax: 150 }
      ]
    }
  ],
  "plomberie": [
    {
      id: "problem",
      titleFr: "Nature du problème plomberie",
      titleNl: "Aard van het loodgietersprobleem",
      options: [
        { labelFr: "Fuite visible (Robinet, Chasse WC, Évier)", labelNl: "Zichtbaar lek (Kraan, WC, Wastafel)", addMin: 0, addMax: 0 },
        { labelFr: "Recherche de Fuite Encastrée (Mur/Sol)", labelNl: "Verborgen Lekdetectie (Muur/Vloer)", addMin: 60, addMax: 120 },
        { labelFr: "Boiler Électrique 80L à 150L", labelNl: "Elektrische Boiler 80L tot 150L", addMin: 100, addMax: 220 },
        { labelFr: "Boiler 200L+ ou Thermodynamique", labelNl: "Boiler 200L+ of Warmtepompboiler", addMin: 250, addMax: 450 }
      ]
    },
    {
      id: "floor",
      titleFr: "Accès & Étage",
      titleNl: "Toegang & Verdieping",
      options: [
        { labelFr: "Rez-de-chaussée / Cave", labelNl: "Gelijkvloers / Kelder", addMin: 0, addMax: 0 },
        { labelFr: "1er à 3ème Étage", labelNl: "1ste tot 3de Verdieping", addMin: 20, addMax: 35 },
        { labelFr: "4ème Étage + (sans ascenseur)", labelNl: "4de Verdieping+ (zonder lift)", addMin: 45, addMax: 80 }
      ]
    }
  ],
  "chauffage": [
    {
      id: "system",
      titleFr: "Type d'installation de chauffage",
      titleNl: "Type verwarmingsinstallatie",
      options: [
        { labelFr: "Chaudière Gaz à Condensation", labelNl: "Gascondensatieketel", addMin: 0, addMax: 0 },
        { labelFr: "Chaudière Mazout / Stookolie", labelNl: "Stookolieketel / Mazout", addMin: 50, addMax: 90 },
        { labelFr: "Pompe à Chaleur / Air-Eau", labelNl: "Warmtepomp / Lucht-Water", addMin: 120, addMax: 250 }
      ]
    },
    {
      id: "need",
      titleFr: "Objet de l'intervention",
      titleNl: "Doel van de interventie",
      options: [
        { labelFr: "Entretien Légal Obligatoire (Attestation)", labelNl: "Verplicht Wettelijk Onderhoud (Attest)", addMin: 0, addMax: 0 },
        { labelFr: "Dépannage Urgent / Plus de Chauffage/Eau Chaude", labelNl: "Dringende Herstelling / Geen Warm Water", addMin: 40, addMax: 80 },
        { labelFr: "Remplacement Complet de Chaudière", labelNl: "Volledige Vervanging van de Ketel", addMin: 1500, addMax: 2800 }
      ]
    }
  ],
  "electricite": [
    {
      id: "type",
      titleFr: "Type de travaux électriques",
      titleNl: "Type elektrische werken",
      options: [
        { labelFr: "Dépannage Court-circuit / Disjoncteur", labelNl: "Kortsluiting Opsporen / Zekering", addMin: 0, addMax: 0 },
        { labelFr: "Mise en Conformité AREI (Schéma & Tableau)", labelNl: "AREI Gelijkvormigheid (Schema & Kast)", addMin: 250, addMax: 450 },
        { labelFr: "Nouveau Tableau Électrique Complet", labelNl: "Nieuwe Volledige Zekeringkast", addMin: 450, addMax: 850 }
      ]
    },
    {
      id: "property",
      titleFr: "Type de bien immobilier",
      titleNl: "Type vastgoed",
      options: [
        { labelFr: "Appartement (< 80 m²)", labelNl: "Appartement (< 80 m²)", addMin: 0, addMax: 0 },
        { labelFr: "Maison Individuelle (100 - 200 m²)", labelNl: "Eengezinswoning (100 - 200 m²)", addMin: 100, addMax: 200 },
        { labelFr: "Surface Commerciale / Immeuble", labelNl: "Handelszaak / Gebouw", addMin: 250, addMax: 500 }
      ]
    }
  ],
  "fosse": [
    {
      id: "capacity",
      titleFr: "Contenance estimée de la fosse",
      titleNl: "Geschatte inhoud van de put",
      options: [
        { labelFr: "Fosse Septique < 3.000 Litres", labelNl: "Septische Put < 3.000 Liter", addMin: 0, addMax: 0 },
        { labelFr: "Fosse Septique 3.000L à 6.000L", labelNl: "Septische Put 3.000L tot 6.000L", addMin: 60, addMax: 110 },
        { labelFr: "Bac à Graisse Restaurant / Fosse > 6.000L", labelNl: "Vetput Restaurant / Put > 6.000L", addMin: 120, addMax: 200 }
      ]
    },
    {
      id: "distance",
      titleFr: "Distance d'accès pour le camion",
      titleNl: "Toegangsafstand voor de vrachtwagen",
      options: [
        { labelFr: "Accès facile (< 20 mètres)", labelNl: "Gemakkelijke toegang (< 20 meter)", addMin: 0, addMax: 0 },
        { labelFr: "Distance moyenne (20 à 40 mètres)", labelNl: "Middelgrote afstand (20 tot 40 meter)", addMin: 35, addMax: 60 },
        { labelFr: "Accès difficile (> 40 mètres)", labelNl: "Moeilijke toegang (> 40 meter)", addMin: 70, addMax: 120 }
      ]
    }
  ],
  "toiture": [
    {
      id: "type",
      titleFr: "Type de toiture",
      titleNl: "Type dak",
      options: [
        { labelFr: "Tuiles Inclinées / Ardoises", labelNl: "Hellend Dak Dakpannen / Leien", addMin: 0, addMax: 0 },
        { labelFr: "Toit Plat EPDM / Bitume Roofing", labelNl: "Plat Dak EPDM / Bitumen Roofing", addMin: 80, addMax: 150 },
        { labelFr: "Corniches Zinc / Solins Plomb", labelNl: "Zinken Goten / Loodslabben", addMin: 60, addMax: 110 }
      ]
    },
    {
      id: "height",
      titleFr: "Hauteur / Nombre d'étages",
      titleNl: "Hoogte / Aantal verdiepingen",
      options: [
        { labelFr: "Maison 1 Étage (Accès facile)", labelNl: "Woning 1 Verdieping (Gemakkelijk)", addMin: 0, addMax: 0 },
        { labelFr: "Maison 2-3 Étages", labelNl: "Woning 2-3 Verdiepingen", addMin: 50, addMax: 90 },
        { labelFr: "Immeuble 4+ Étages (Sécurité & Échelle)", labelNl: "Gebouw 4+ Verdiepingen (Veiligheid)", addMin: 120, addMax: 220 }
      ]
    }
  ],
  "jardinage": [
    {
      id: "work",
      titleFr: "Type de prestation jardin",
      titleNl: "Type tuinwerken",
      options: [
        { labelFr: "Tonte Pelouse & Taille de Haies", labelNl: "Gras Maaien & Hagen Knippen", addMin: 0, addMax: 0 },
        { labelFr: "Élagage Grand Arbre (< 10m)", labelNl: "Snoeien Grote Boom (< 10m)", addMin: 120, addMax: 220 },
        { labelFr: "Abattage / Démontage Arbre Dangereux", labelNl: "Vellen / Ontmantelen Gevaarlijke Boom", addMin: 350, addMax: 650 }
      ]
    }
  ]
};

const URGENCY_LEVELS = [
  {
    id: "normal",
    title: "Sur Rendez-vous (Sous 24h à 48h)",
    multiplier: 1.0,
    extraFee: 0,
    icon: Clock,
    color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    desc: "Intervention programmée pendant les heures ouvrables."
  },
  {
    id: "urgent",
    title: "Urgent (Moins de 30 min)",
    multiplier: 1.15,
    extraFee: 40,
    icon: Sparkles,
    color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    desc: "En journée. Mobilisation immédiate du technicien le plus proche."
  },
  {
    id: "nuit_weekend",
    title: "Nuit, Week-end & Jours Fériés (24h/7)",
    multiplier: 1.30,
    extraFee: 75,
    icon: Clock,
    color: "border-red-500/40 text-red-400 bg-red-500/10",
    desc: "Intervention hors heures de bureau (soir, week-end, nuit)."
  }
];

const URGENCY_LEVELS_NL = [
  {
    id: "normal",
    title: "Op Afspraak (Binnen 24u tot 48u)",
    multiplier: 1.0,
    extraFee: 0,
    icon: Clock,
    color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
    desc: "Ingeplande interventie tijdens kantooruren."
  },
  {
    id: "urgent",
    title: "Dringend (Minder dan 30 min)",
    multiplier: 1.15,
    extraFee: 40,
    icon: Sparkles,
    color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
    desc: "Overdag. Onmiddellijke mobilisatie van de dichtstbijzijnde technicus."
  },
  {
    id: "nuit_weekend",
    title: "Nacht, Weekend & Feestdagen (24u/7)",
    multiplier: 1.30,
    extraFee: 75,
    icon: Clock,
    color: "border-red-500/40 text-red-400 bg-red-500/10",
    desc: "Interventie buiten kantooruren (avond, weekend, nacht)."
  }
];

export function CostEstimator() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const servicesList = isNl ? ESTIMATOR_SERVICES_NL : ESTIMATOR_SERVICES;
  const urgenciesList = isNl ? URGENCY_LEVELS_NL : URGENCY_LEVELS;

  const [selectedCategoryId, setSelectedCategoryId] = useState("plomberie");
  const [selectedSubServiceId, setSelectedSubServiceId] = useState("fuite");
  const [selectedUrgencyId, setSelectedUrgencyId] = useState("normal");
  const [selectedCustomOptions, setSelectedCustomOptions] = useState<Record<string, number>>({});

  const [estimatedRange, setEstimatedRange] = useState({ min: 0, max: 0 });
  const [isCopied, setIsCopied] = useState(false);

  const selectedCategory = servicesList.find((s) => s.id === selectedCategoryId) || servicesList[0];
  const selectedSubService = selectedCategory.subServices.find((s) => s.id === selectedSubServiceId) || selectedCategory.subServices[0];
  const selectedUrgency = urgenciesList.find((u) => u.id === selectedUrgencyId) || urgenciesList[0];

  const customQuestions = SERVICE_CUSTOM_QUESTIONS[selectedCategory.id] || [];

  // Reset custom options when changing category
  const handleCategoryChange = (cat: ServiceCategory) => {
    setSelectedCategoryId(cat.id);
    setSelectedSubServiceId(cat.subServices[0].id);
    
    const initialOptions: Record<string, number> = {};
    const newQuestions = SERVICE_CUSTOM_QUESTIONS[cat.id] || [];
    newQuestions.forEach((q) => {
      initialOptions[q.id] = 0;
    });
    setSelectedCustomOptions(initialOptions);
  };

  // Live recalculate estimated price range
  useEffect(() => {
    if (selectedSubService && selectedUrgency) {
      let baseMin = selectedSubService.minPrice;
      let baseMax = selectedSubService.maxPrice;

      customQuestions.forEach((q) => {
        const optionIndex = selectedCustomOptions[q.id] || 0;
        const selectedOpt = q.options[optionIndex];
        if (selectedOpt) {
          baseMin += selectedOpt.addMin;
          baseMax += selectedOpt.addMax;
        }
      });

      const min = Math.round(baseMin * selectedUrgency.multiplier + selectedUrgency.extraFee);
      const max = Math.round(baseMax * selectedUrgency.multiplier + selectedUrgency.extraFee);
      setEstimatedRange({ min, max });
    }
  }, [selectedSubService, selectedUrgency, selectedCustomOptions, selectedCategory, customQuestions]);

  const handleCustomOptionSelect = (qId: string, optIndex: number) => {
    setSelectedCustomOptions((prev) => ({
      ...prev,
      [qId]: optIndex
    }));
  };

  // Dispatch details to contact form and scroll down
  const handleApplyToForm = () => {
    if (typeof window !== "undefined") {
      const detailsList: string[] = [];
      customQuestions.forEach((q) => {
        const optIdx = selectedCustomOptions[q.id] || 0;
        const opt = q.options[optIdx];
        if (opt) {
          const title = isNl ? q.titleNl : q.titleFr;
          const val = isNl ? opt.labelNl : opt.labelFr;
          detailsList.push(`- ${title}: ${val}`);
        }
      });

      const detailsText = detailsList.length > 0 ? `\n\n${isNl ? "Geselecteerde Details & Opties" : "Détails & Options Sélectionnés"} :\n${detailsList.join("\n")}` : "";

      const messageText = isNl
        ? `Beste, ik wil graag een definitieve offerte ontvangen voor een interventie van ${selectedCategory.title}: "${selectedSubService.title}".${detailsText}\n\nUrgentieniveau: ${selectedUrgency.title}.\nIndicatieve berekende schatting: van ${estimatedRange.min} € tot ${estimatedRange.max} € (+ verplaatsing).\n\nGelieve contact met mij op te nemen om een afspraak in te plannen of dit voorstel te verfijnen.`
        : `Bonjour, je souhaite obtenir un devis définitif pour une intervention de ${selectedCategory.title} : "${selectedSubService.title}".${detailsText}\n\nNiveau d'urgence : ${selectedUrgency.title}.\nEstimation indicative calculée : de ${estimatedRange.min} € à ${estimatedRange.max} € (+ frais de déplacement).\n\nMerci de me recontacter pour fixer un rendez-vous ou affiner cette proposition.`;
      
      const event = new CustomEvent("cost-estimation-applied", {
        detail: {
          service: selectedCategory.slug,
          message: messageText
        }
      });
      
      window.dispatchEvent(event);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);

      // Smooth scroll to contact form container
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleDownloadPdf = () => {
    const optionsList: Array<{ label: string; value: string }> = [];
    customQuestions.forEach((q) => {
      const optIdx = selectedCustomOptions[q.id] || 0;
      const opt = q.options[optIdx];
      if (opt) {
        optionsList.push({
          label: isNl ? q.titleNl : q.titleFr,
          value: isNl ? opt.labelNl : opt.labelFr,
        });
      }
    });

    generatePdfDocument({
      documentType: "DEVIS",
      referenceNumber: `DEV-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
      isNl,
      serviceCategory: selectedCategory.title,
      serviceTitle: selectedSubService.title,
      subServiceTitle: selectedSubService.desc,
      customOptions: optionsList,
      urgencyTitle: selectedUrgency.title,
      priceRange: `${estimatedRange.min} € – ${estimatedRange.max} €`,
      includedGuarantees: includedList,
    });
  };

  const includedList = isNl ? [
    "Verplaatsing van de erkende technicus naar uw adres",
    "Volledige diagnose van het probleem ter plaatse",
    "Tienjarige aansprakelijkheidsverzekering / Beroeps-BA",
    "Eén jaar schriftelijke garantie op de prestatie",
    "Volledige transparantie en voorafgaande schriftelijke offerte"
  ] : [
    "Déplacement du technicien agréé chez vous",
    "Diagnostic complet de l'anomalie sur place",
    "Assurance décennale / RC professionnelle",
    "Garantie écrite d'un an sur la prestation",
    "Transparence totale et devis écrit préalable"
  ];

  return (
    <div id="estimateur-tarif" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 relative z-20">
      <div className="bg-slate-900/60 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-8 border-b border-white/10 bg-gradient-to-r from-blue-900/10 via-slate-900 to-indigo-900/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-400">
                <Calculator className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white">
                  {isNl ? "Interactieve Tariefcalculator met Details" : "Estimateur Tarifaire Interactif Détaillé"}
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  {isNl 
                    ? "Configureer uw opties (aantal, locatie, type, verdieping) voor een nauwkeurige prijsvork." 
                    : "Configurez vos options (quantité, emplacement, type, étage) pour une estimation personnalisée."}
                </p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-green-400" /> {isNl ? "100% Transparante & Gecertificeerde Tarieven" : "Tarifs 100% Transparents & Agrées"}
            </div>
          </div>
        </div>

        {/* Content body Grid */}
        <div className="grid lg:grid-cols-12">
          
          {/* Column 1: Configurator (7 cols) */}
          <div className="lg:col-span-7 p-8 space-y-8 border-b lg:border-b-0 lg:border-r border-white/10">
            
            {/* Step 1: Category */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-[10px]">1</span>
                {isNl ? "Selecteer het vakgebied" : "Sélectionnez le métier"}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {servicesList.map((cat) => {
                  const CatIcon = cat.icon;
                  const isSelected = selectedCategory.id === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat)}
                      className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                        isSelected 
                          ? "border-blue-500/60 bg-blue-500/10 text-white shadow-lg shadow-blue-500/5" 
                          : "border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <CatIcon className={`w-5 h-5 mb-2 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                      <span className="text-xs font-bold tracking-tight">{cat.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Sub-services inside category */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-[10px]">2</span>
                {isNl ? "Type specifieke dienst" : "Type de prestation spécifique"}
              </label>
              <div className="space-y-2.5">
                {selectedCategory.subServices.map((sub) => {
                  const isSelected = selectedSubService.id === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubServiceId(sub.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "border-blue-500/60 bg-blue-500/5 text-white"
                          : "border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected ? "border-blue-400 bg-blue-400" : "border-slate-600"
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-slate-200">{sub.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{sub.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Specific Dynamic Questions */}
            {customQuestions.length > 0 && (
              <div className="space-y-5 pt-2 border-t border-white/5">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-[10px]">3</span>
                  <Sliders className="w-3.5 h-3.5 text-blue-400" />
                  {isNl ? "Specifieke details & opties" : "Détails & caractéristiques spécifiques"}
                </label>

                {customQuestions.map((q) => {
                  const currentSelectedIdx = selectedCustomOptions[q.id] || 0;
                  return (
                    <div key={q.id} className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-3">
                      <span className="text-xs font-bold text-blue-300 block">
                        {isNl ? q.titleNl : q.titleFr}
                      </span>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = currentSelectedIdx === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleCustomOptionSelect(q.id, optIdx)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                                isSelected
                                  ? "border-blue-500/80 bg-blue-500/20 text-white"
                                  : "border-white/5 bg-slate-900/40 text-slate-400 hover:border-white/10 hover:text-slate-200"
                              }`}
                            >
                              <span>{isNl ? opt.labelNl : opt.labelFr}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 ml-1" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Step 4: Urgency Level */}
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 text-[10px]">
                  {customQuestions.length > 0 ? "4" : "3"}
                </span>
                {isNl ? "Urgentieniveau & Tijdstip" : "Niveau d'Urgence & Horaires"}
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {urgenciesList.map((urg) => {
                  const isSelected = selectedUrgency.id === urg.id;
                  const UrgIcon = urg.icon;
                  return (
                    <button
                      key={urg.id}
                      onClick={() => setSelectedUrgencyId(urg.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? "border-blue-500/60 bg-blue-500/10 text-white"
                          : "border-white/5 bg-white/5 text-slate-400 hover:border-white/10 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <UrgIcon className={`w-4.5 h-4.5 ${isSelected ? "text-blue-400" : "text-slate-400"}`} />
                        <span className="text-xs font-bold">{urg.title.split(" (")[0]}</span>
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-400">{urg.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Column 2: Live results visual output (5 cols) */}
          <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
            
            {/* Visual Box */}
            <div className="space-y-6">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-400" /> {isNl ? "Budgetschatting & Samenvatting" : "Estimation Budgétaire Détaillée"}
              </div>

              {/* Selected summary recap */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-2.5 text-xs text-slate-300">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-400">{isNl ? "Vakgebied:" : "Métier :"}</span>
                  <span className="font-bold text-blue-400">{selectedCategory.title}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-slate-400">{isNl ? "Dienst:" : "Service :"}</span>
                  <span className="font-semibold text-white text-right max-w-[200px] truncate">{selectedSubService.title}</span>
                </div>
                {customQuestions.map((q) => {
                  const optIdx = selectedCustomOptions[q.id] || 0;
                  const opt = q.options[optIdx];
                  if (!opt) return null;
                  return (
                    <div key={q.id} className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-slate-400 text-[11px]">{isNl ? q.titleNl.split(" / ")[0] : q.titleFr.split(" / ")[0]} :</span>
                      <span className="font-medium text-cyan-300 text-right">{isNl ? opt.labelNl : opt.labelFr}</span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center pt-1">
                  <span className="text-slate-400">{isNl ? "Urgentie:" : "Urgence :"}</span>
                  <span className="font-semibold text-amber-400">{selectedUrgency.title.split(" (")[0]}</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-red-500 animate-pulse" />
                
                <span className="text-xs text-slate-400 block mb-1">{isNl ? "Geschatte prijsvork" : "Fourchette tarifaire estimée"}</span>
                
                <div className="flex items-center justify-center gap-3 my-3">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{estimatedRange.min}€</span>
                  <span className="text-slate-500 font-medium text-lg">—</span>
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{estimatedRange.max}€</span>
                </div>

                <div className="flex flex-col items-center gap-1 mb-2">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    + {isNl ? "Verplaatsingskosten" : "Frais de déplacement"}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 inline-flex mt-2">
                  <Info className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> {isNl ? "6% btw (woning > 10 jaar) of 21% btw van toepassing." : "TVA de 6% (habitation > 10 ans) ou 21% applicable."}
                </div>
              </div>

              {/* Included list */}
              <div className="space-y-3">
                <h4 className="text-xs font-extrabold text-slate-300 uppercase tracking-wider">{isNl ? "Wat is inbegrepen in het tarief:" : "Ce qui est inclus dans le tarif :"}</h4>
                <div className="space-y-2">
                  {includedList.map((text, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Informative Disclaimer */}
              <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/10 text-[11px] leading-relaxed text-slate-400 flex gap-2.5">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p>
                  {isNl 
                    ? "Deze schatting wordt louter ter informatie verstrekt volgens de standaardbarema's van het beroep in België. De definitieve offerte die ter plaatse door de vakman wordt overhandigd, is bindend."
                    : "Cette estimation est fournie à titre indicatif selon les barèmes standards de la profession en Belgique. Le devis définitif remis sur place par l'artisan fait foi."}
                </p>
              </div>
            </div>

            {/* CTA actions */}
            <div className="mt-8 space-y-3">
              <button
                onClick={handleApplyToForm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group text-sm uppercase tracking-wider"
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 animate-bounce" /> {isNl ? "Formulier Vooraf Ingevuld!" : "Formulaire Pré-rempli !"}
                  </>
                ) : (
                  <>
                    {isNl ? "Toepassen & Offerte Invullen" : "Appliquer & Remplir le Devis"} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDownloadPdf}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
              >
                <Download className="w-4 h-4 text-emerald-200" />
                {isNl ? "📄 Officiële Offerte Downloaden (PDF)" : "📄 Télécharger Mon Devis Officiel (PDF)"}
              </button>

              <p className="text-[11px] text-slate-500 text-center mt-2">
                {isNl 
                  ? "Download direct de volledige offerte met bedrijfslogo, opties en prijzen." 
                  : "Téléchargez immédiatement le devis complet avec logo, options configurées et tarifs."}
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
