export interface PaintingGalleryImage {
  url: string;
  category: string;
  title: string;
}

export interface DebouchageGalleryImage {
  url: string;
  category: string;
  categoryNl: string;
  title: string;
  titleNl: string;
  type: "wc" | "evier" | "canalisation" | "baignoire" | "camera";
}

export const paintingImages: PaintingGalleryImage[] = [
  { url: "https://deb-pro-service.odoo.com/web/image/636-8db3f049/WhatsApp%20Image%202026-07-29%20at%20DCDCD.jpeg", category: "Intérieur", title: "Peinture Intérieure Murs & Plafonds" },
  { url: "https://deb-pro-service.odoo.com/web/image/637-481b1760/WhatsApp%20Image%202026-07-29%20at%2001.01.18SEQ.jpeg", category: "Intérieur", title: "Finitions Salon & Séjour" },
  { url: "https://deb-pro-service.odoo.com/web/image/638-38c75153/WhatsApp%20Image%202026-07-29%20at%2001.01.18DCSDCSCS.jpeg", category: "Extérieur", title: "Peinture Façade & Ravalement" },
  { url: "https://deb-pro-service.odoo.com/web/image/639-cc624dcb/WhatsApp%20Image%202026-07-29%20at%2001.01.18DCC%25.jpeg", category: "Extérieur", title: "Traitement Murs Extérieurs" },
  { url: "https://deb-pro-service.odoo.com/web/image/640-bdac2999/WhatsApp%20Image%202026-07-29%20at%2001.01.18CS.jpeg", category: "Boiseries", title: "Peinture Boiseries & Portes" },
  { url: "https://deb-pro-service.odoo.com/web/image/641-6b9f38d2/WhatsApp%20Image%202026-07-29%20at%2001.01.18%20DCSDCSCS.jpeg", category: "Boiseries", title: "Châssis & Encadrements" },
  { url: "https://deb-pro-service.odoo.com/web/image/642-48caab7e/WhatsApp%20Image%202026-07-29%20at%2001.01.09%20%281%29SCDCS.jpeg", category: "Plaffonnage", title: "Préparation & Enduisage" },
  { url: "https://deb-pro-service.odoo.com/web/image/643-9eb37167/WhatsApp%20Image%202026-07-29%20at%2000.46.37CDCSDCSCS.jpeg", category: "Plaffonnage", title: "Lissage & Plâtrerie" },
  { url: "https://deb-pro-service.odoo.com/web/image/644-80f1c033/WhatsApp%20Image%202026-07-29%20at%2000.46.37.jpeg", category: "Sols", title: "Revêtements & Parquet" },
  { url: "https://deb-pro-service.odoo.com/web/image/645-7d4069bf/SQXSCSDCSCSC.jpeg", category: "Sols", title: "Résine Époxy & Sols Industriels" },
  { url: "https://deb-pro-service.odoo.com/web/image/646-8db3f049/P.jpeg", category: "Intérieur", title: "Décoration Murale & Teintes" },
  { url: "https://deb-pro-service.odoo.com/web/image/647-313f6724/EDEEFEFEDE.jpeg", category: "Intérieur", title: "Chambre & Finitions Soignées" },
  { url: "https://deb-pro-service.odoo.com/web/image/648-b8a9477d/EDEDEDECECECE.jpeg", category: "Extérieur", title: "Protection Toiture & Étanchéité" },
  { url: "https://deb-pro-service.odoo.com/web/image/649-b9d63242/DCSDCSDCSD.jpeg", category: "Cuisines", title: "Aménagement & Pose Cuisines" },
  { url: "https://deb-pro-service.odoo.com/web/image/651-09ff25bf/DCSDCSDCSCS.jpeg?height=256", category: "Cuisines", title: "Mobilier Sur Mesure" },
  { url: "https://deb-pro-service.odoo.com/web/image/654-6084151d/DCSCSDCSCSC.jpeg", category: "Plaffonnage", title: "Cloisons Gyproc & Faux Plafonds" },
  { url: "https://deb-pro-service.odoo.com/web/image/655-9bb2d004/DCSCSCSDCDCSD.jpeg", category: "Intérieur", title: "Couleurs Harmonieuses & Design" },
  { url: "https://deb-pro-service.odoo.com/web/image/656-90ccc0be/DCSCSCSCS.jpeg", category: "Intérieur", title: "Plafonds Tendus & Peints" },
  { url: "https://deb-pro-service.odoo.com/web/image/658-79ba2356/DCD.jpeg", category: "Extérieur", title: "Ravalement & Peinture Extérieure" },
  { url: "https://deb-pro-service.odoo.com/web/image/657-71e935c8/DCDCSSSXS.jpeg", category: "Boiseries", title: "Portes & Boiseries Finies" },
  { url: "https://deb-pro-service.odoo.com/web/image/659-82d32629/CSDCSDCSS.jpeg", category: "Sols", title: "Parquet Massif & Stratifié" },
];

export const debouchageImages: DebouchageGalleryImage[] = [
  // Débouchage WC
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/347-b37681ff/WhatsApp%20Image%202024-08-10%20at%2002.44.30.jpeg",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Débouchage WC & Toilette",
    titleNl: "Ontstopping WC & Toilet",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/343-55d29cef/WhatsApp%20Image%202024-08-10%20at%2002.44.23.jpeg",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Intervention d'urgence WC",
    titleNl: "Dringende ontstopping WC",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/506-f0a14738/WhatsApp%20Image%202024-09-13%20at%2014.14.38%20%281%29.jpeg",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Débouchage toilette bouchée",
    titleNl: "Verstopte wc ontstoppen",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/470-3d19a557/WhatsApp%20Image%202024-08-10%20at%2002.44.51%20%281%29.jpeg",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Furet électrique professionnel",
    titleNl: "Professionele elektrische ontstopping",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/469-4b02548f/WhatsApp%20Image%202024-08-10%20at%2002.44.48%20%282%29.jpeg",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Curage de canalisation WC",
    titleNl: "Reiniging toiletleidingen",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4441-998a6120/unnamed%20%2819%29.webp",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Débouchage d'urgence 24/7",
    titleNl: "Ontstoppingsdienst 24/7",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4445-d3eedcd6/unnamed%20%282%29.webp",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Nettoyage siphon et cuvette",
    titleNl: "Sifon & toiletpot reiniging",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4447-80413ff1/unnamed%20%2820%29.webp",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Intervention rapide",
    titleNl: "Snelle interventie",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4449-22cd8e9c/unnamed%20%2812%29.webp",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Aspirateur professionnel",
    titleNl: "Professionele ontstopping WC",
    type: "wc"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4451-a8650b30/unnamed.webp",
    category: "Débouchage WC",
    categoryNl: "Ontstopping WC",
    title: "Contrôle d'évacuation de l'eau",
    titleNl: "Controle van de waterafvoer",
    type: "wc"
  },

  // Débouchage Évier
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/512-ed515562/WhatsApp%20Image%202024-09-13%20at%2014.14.50.jpeg",
    category: "Débouchage Évier",
    categoryNl: "Ontstopping Gootsteen",
    title: "Débouchage évier de cuisine",
    titleNl: "Ontstopping keukengootsteen",
    type: "evier"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/507-cf416e24/WhatsApp%20Image%202024-09-13%20at%2014.15.02%20%281%29.jpeg",
    category: "Débouchage Évier",
    categoryNl: "Ontstopping Gootsteen",
    title: "Nettoyage du siphon d'évier",
    titleNl: "Reiniging van gootsteensifon",
    type: "evier"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/346-887739de/WhatsApp%20Image%202024-08-10%20at%2002.44.50.jpeg",
    category: "Débouchage Évier",
    categoryNl: "Ontstopping Gootsteen",
    title: "Débouchage furet électrique",
    titleNl: "Ontstopping met elektrische veer",
    type: "evier"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4455-32a436ad/unnamed%20%284%29.webp",
    category: "Débouchage Évier",
    categoryNl: "Ontstopping Gootsteen",
    title: "Élimination des bouchons de graisse",
    titleNl: "Vetophopingen verwijderen",
    type: "evier"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4441-998a6120/unnamed%20%2819%29.webp",
    category: "Débouchage Évier",
    categoryNl: "Ontstopping Gootsteen",
    title: "Curage de canalisation évier",
    titleNl: "Gootsteen afvoer ontstoppen",
    type: "evier"
  },

  // Débouchage Canalisation
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4465-361e9af8/unnamed%20%2813%29.webp",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Débouchage égout principal",
    titleNl: "Ontstopping hoofdafvoer",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4467-0d6a253a/unnamed%20%282%29.jpg",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Curage haute pression hydrocureur",
    titleNl: "Hogedrukreiniging afvoerbuizen",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4468-35d7f5ad/unnamed%20%2811%29.webp",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Dégagement de bouchon de calcaire",
    titleNl: "Kalkaanslag verwijdering",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4459-0af29c0a/unnamed%20%283%29.webp",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Intervention sur chambre de visite",
    titleNl: "Interventie controleputje",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4461-8152503d/unnamed%20%2817%29.webp?height=256",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Camion hydrocureur professionnel",
    titleNl: "Professionele hogedrukwagen",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4463-aae36d22/unnamed%20%2816%29.webp",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Débouchage conduite générale",
    titleNl: "Ontstopping algemene leiding",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/504-6e59bb15/WhatsApp%20Image%202024-09-13%20at%2014.15.01.jpeg",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Nettoyage haute pression égout",
    titleNl: "Hogedrukreiniging riolering",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/505-9c392e7d/WhatsApp%20Image%202024-09-13%20at%2014.14.54.jpeg",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Diagnostic de bouchon d'égout",
    titleNl: "Diagnose van rioolverstopping",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/470-3d19a557/WhatsApp%20Image%202024-08-10%20at%2002.44.51%20%281%29.jpeg",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Hydrocurage de canalisations",
    titleNl: "Hydroreiniging van leidingen",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/472-ea89a970/WhatsApp%20Image%202024-09-06%20at%2014.52.47.jpeg",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Matériel d'hydrocurage d'urgence",
    titleNl: "Dringende hydroreinigingsapparatuur",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/475-fc02ef14/WhatsApp%20Image%202024-09-06%20at%2014.52.58%20%282%29.jpeg",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Nettoyage et détartrage de tuyaux",
    titleNl: "Reiniging en ontkalking van buizen",
    type: "canalisation"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/451-5ce4cc0a/WhatsApp%20Image%202024-09-06%20at%2014.52.51.jpeg",
    category: "Débouchage Canalisation",
    categoryNl: "Ontstopping Afvoer",
    title: "Curage de fosse et évacuation",
    titleNl: "Putreiniging en waterafvoer",
    type: "canalisation"
  },

  // Débouchage Baignoire
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/508-7477958d/WhatsApp%20Image%202024-09-06%20at%2014.52.54%20%282%29.jpeg",
    category: "Débouchage Baignoire",
    categoryNl: "Ontstopping Badkuip",
    title: "Débouchage baignoire bouchée",
    titleNl: "Verstopt badkuip ontstoppen",
    type: "baignoire"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/345-b3ada82c/WhatsApp%20Image%202024-08-10%20at%2002.44.48%20%283%29.jpeg",
    category: "Débouchage Baignoire",
    categoryNl: "Ontstopping Badkuip",
    title: "Nettoyage siphon baignoire & douche",
    titleNl: "Sifonreiniging bad & douche",
    type: "baignoire"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4457-17f707bf/unnamed%20%2815%29.webp",
    category: "Débouchage Baignoire",
    categoryNl: "Ontstopping Badkuip",
    title: "Curage d'évacuation de salle de bain",
    titleNl: "Reiniging badkamer afvoer",
    type: "baignoire"
  },

  // Inspection Caméra Canalisation
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/4470-d99ff55b/unnamed%20%2814%29.webp",
    category: "Inspection Caméra",
    categoryNl: "Camera-inspectie",
    title: "Caméra d'inspection HD étanche",
    titleNl: "Waterdichte HD inspectiecamera",
    type: "camera"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/1545-2f63aa4b/12.jpg",
    category: "Inspection Caméra",
    categoryNl: "Camera-inspectie",
    title: "Diagnostic vidéo des canalisations",
    titleNl: "Video-diagnose van leidingen",
    type: "camera"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/1558-94b27700/10.jpg",
    category: "Inspection Caméra",
    categoryNl: "Camera-inspectie",
    title: "Localisation précise de bouchon",
    titleNl: "Nauwkeurige lokalisatie verstopping",
    type: "camera"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/509-4b8110d2/WhatsApp%20Image%202024-09-13%20at%2014.14.36.jpeg",
    category: "Inspection Caméra",
    categoryNl: "Camera-inspectie",
    title: "Inspection caméra après curage",
    titleNl: "Camera-inspectie na reiniging",
    type: "camera"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/510-675a2e84/WhatsApp%20Image%202024-09-13%20at%2014.14.39.jpeg",
    category: "Inspection Caméra",
    categoryNl: "Camera-inspectie",
    title: "Recherche de fissure par caméra",
    titleNl: "Opsporen van barsten via camera",
    type: "camera"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/511-fc46f99b/WhatsApp%20Image%202024-09-13%20at%2014.14.45.jpeg",
    category: "Inspection Caméra",
    categoryNl: "Camera-inspectie",
    title: "Rapport d'inspection pour assurances",
    titleNl: "Inspectierapport voor verzekeringen",
    type: "camera"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/362-1f7a4281/WhatsApp%20Image%202024-08-10%20at%2002.44.35%20%281%29.jpeg",
    category: "Inspection Caméra",
    categoryNl: "Camera-inspectie",
    title: "Sonde d'inspection professionnelle",
    titleNl: "Professionele inspectiesonde",
    type: "camera"
  },
  {
    url: "https://debouchageexpress24hh.odoo.com/web/image/363-8b49c6a6/WhatsApp%20Image%202024-08-10%20at%2002.44.49%20%283%29.jpeg",
    category: "Inspection Caméra",
    categoryNl: "Camera-inspectie",
    title: "Passage caméra dans coudes serrés",
    titleNl: "Camera-inspectie in krappe bochten",
    type: "camera"
  }
];
