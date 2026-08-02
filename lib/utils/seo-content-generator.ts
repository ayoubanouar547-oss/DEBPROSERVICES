import { services } from "@/lib/data/services";
import { dutchServices } from "@/lib/data/translations";

// A robust long-form text generator for local pages with highly varied sections
const intros = [
  "Lorsque survient une urgence à domicile ou dans vos locaux professionnels, chaque minute compte. {serviceName} nécessite une approche rigoureuse et une réactivité sans faille. Les habitants de {cityName} peuvent compter sur notre équipe locale, prête à se déplacer avec tout le matériel nécessaire pour sécuriser les lieux.",
  "Face à un besoin en {serviceName}, il est essentiel de faire appel à des techniciens certifiés. Sur {cityName} et ses environs, nous mettons un point d'honneur à allier rapidité d'intervention et qualité de finition. Évitez d'aggraver la situation en nous confiant vos installations immobilières.",
  "La gestion professionnelle de votre {serviceName} est au cœur de notre métier. De jour comme de nuit, nos professionnels sillonnent les rues de {cityName} pour apporter des solutions pérennes, avec une tarification toujours transparente et annoncée avant travaux.",
  "Sur le secteur de {cityName}, il n'a jamais été aussi simple de faire résoudre vos problèmes liés à {serviceName}. Nos artisans, équipés d'outillage dernière génération, se tiennent prêts pour une réparation express ou une maintenance planifiée.",
  "Vous résidez à {cityName} et cherchez un expert incontournable pour {serviceName} ? Ne cherchez plus. Notre équipe allie savoir-faire technique et connaissance pointue des spécificités locales pour vous fournir un travail irréprochable.",
  "Parce qu'un imprévu n'attend pas, notre service de {serviceName} situé près de {cityName} a été pensé pour réduire au maximum le stress des propriétaires et locataires face à une défaillance de leurs installations.",
  "À {cityName}, le climat et les types de bâtiments particuliers (maisons anciennes, appartements récents, locaux commerciaux) demandent une grande flexibilité. Nos techniciens spécialisés en {serviceName} s'adaptent à votre infrastructure.",
  "Un dysfonctionnement nécessitant {serviceName} peut paralyser l'activité de votre entreprise ou le confort de votre famille à {cityName}. C'est pour cette raison que notre plateforme centralise les meilleurs techniciens de la région.",
  "La qualité artisanale a encore sa place. Pour tout ce qui touche à {serviceName} dans la commune de {cityName}, nos clients louent notre ponctualité, notre propreté et la durabilité remarquable de nos interventions.",
  "Préservez la valeur de votre bien immobilier à {cityName} grâce à un partenaire de confiance pour {serviceName}. De la petite réparation à la refonte complète, chaque détail compte pour notre équipe dédiée."
];

const methodology = [
  "Nos méthodes d'intervention s'appuient sur un équipement de pointe. Avant toute manipulation, nous réalisons un diagnostic précis de votre {serviceName} à {cityName}. Cela inclut, selon le cas, une inspection par caméra thermique ou un test de pression conforme aux normes en vigueur.",
  "Chaque réparation est précédée d'un devis clair. Nous utilisons des pièces certifiées et respectons scrupuleusement les régulations environnementales locales. La qualité de notre intervention sur votre {serviceName} garantit la longévité de vos installations.",
  "Le processus est simple : évaluation téléphonique, sécurisation rapide, diagnostic détaillé et réparation définitive. Nous laissons toujours le chantier de {cityName} propre, conscients que l'intégrité de vos biens, qu'il s'agisse de locaux résidentiels ou professionnels, est votre priorité.",
  "Plutôt que d'appliquer des rustines temporaires, nous visons l'excellence. Une fois sur place à {cityName}, le technicien en charge de votre {serviceName} élabore une stratégie d'action qui attaque la cause racine du problème.",
  "La sécurité de notre personnel et de votre famille est primordiale. En arrivant chez vous à {cityName} pour un {serviceName}, nous condamnons d'abord la zone à risque avant de procéder à une analyse minutieuse.",
  "Rien n'est laissé au hasard. Afin d'offrir le meilleur service de {serviceName} de {cityName}, nous formons nos agents aux dernières innovations techniques. Outillage électroportatif, mesures lasers, vérifications digitales : c'est notre standard.",
  "La clé de notre succès sur la région de {cityName} ? Une communication limpide tout au long de votre projet de {serviceName}. Vous validez chaque étape et nous ne remplaçons que ce qui est strictement nécessaire.",
  "Une fois notre matériel déployé pour votre {serviceName}, nous entamons la remise à neuf. Les habitants de {cityName} apprécient particulièrement les protocoles de test drastiques appliqués avant que notre technicien ne quitte les lieux.",
  "Toute intervention efficace commence par comprendre l'historique de votre installation. Nos équipes de {cityName} analysent l'usure prématurée lors de votre demande de {serviceName} pour éviter les récidives fréquentes dans la zone.",
  "En choisissant notre expertise pour {serviceName}, vous optez pour la traçabilité. Chaque action menée chez vous à {cityName} est documentée, garantissant un suivi après-vente exemplaire et réactif en cas de besoin ultérieur."
];

const standards = [
  "Le respect des normes environnementales et de sécurité est fondamental. En Région wallonne ou flamande, les régulations évoluent vite. Ainsi, notre prise en charge de {serviceName} est garantie 100% conforme, vous protégeant juridiquement tout en optimisant l'efficacité énergétique.",
  "Toutes nos installations respectent les standards d'isolation et d'étanchéité actuels. Pour les urgences concernant {serviceName}, notre label de qualité rassure les syndics et assurances de {cityName}. Vous recevez un certificat de conformité à l'issue de notre prestation.",
  "Les normes européennes actuelles transforment vite notre profession. Nous garantissons aux résidents de {cityName} que chaque intervention liée à {serviceName} est documentée et validée par les instances de contrôle agrées si nécessaire.",
  "Nous militons pour des réparations éco-responsables. À {cityName}, vos besoins en {serviceName} sont traités avec des matériaux recyclables, une gestion rigoureuse des déchets de chantier, et des pièces détachées minimisant l'empreinte carbone.",
  "Conformité rime avec tranquillité d'esprit. Ne risquez pas un refus d'indemnisation de votre assurance. En réalisant votre {serviceName} via nos artisans certifiés sur {cityName}, vous assurez vos arrières juridiquement parlant.",
  "L'administration impose parfois des exigences strictes dans certaines communes. À {cityName}, nous nous occupons de vérifier que les travaux de {serviceName} entrent parfaitement dans le cadre du plan de développement et de sécurité local."
];

const faqQuestions = [
  "Combien de temps faut-il pour qu'un technicien intervienne pour {serviceName} à {cityName} ?",
  "Proposez-vous une garantie pour vos services de {serviceName} ?",
  "Quels sont les tarifs moyens pour {serviceName} sur {cityName} ?",
  "Avez-vous le matériel nécessaire pour un {serviceName} d'extrême urgence ?",
  "Est-ce que l'intervention pour {serviceName} causera des dégâts sur la propriété à {cityName} ?"
];

const faqAnswers = [
  "Notre réseau logistique permet à nos équipes d'être chez vous à {cityName} en un temps record, généralement en moins d'une heure pour les urgences.",
  "Absolument. Nous offrons systématiquement une garantie sur les pièces et sur la main-d'œuvre pour assurer votre tranquillité à long terme.",
  "Nos tarifs sont fixés de manière transparente. Bien que chaque cas soit unique, nous fournissons toujours un devis clair et sans engagement avant les travaux.",
  "Oui, nos camionnettes sillonnant {cityName} sont de véritables ateliers roulants, équipées avec toutes les pièces de rechange et les outils de pointe.",
  "Nous protégeons rigoureusement les lieux. Après notre intervention de {serviceName}, nous nettoyons l'espace pour que tout redevienne exactement comme avant."
];

const benefits = [
  "Prise de rendez-vous immédiate et devis sans engagement.",
  "Matériel premium et pièces de rechange certifiées constructeur.",
  "Tarification transparente sans frais cachés ni surcoûts injustifiés.",
  "Suivi après-vente personnalisé avec rapport détaillé.",
  "Artisans locaux impliqués dans la vie de votre commune.",
  "Respect strict des normes d'hygiène et de sécurité actuelles.",
  "Remboursement souvent facilité grâce à l'agrémentation assurances.",
  "Disponibilité constante : nuits, week-ends et jours fériés couverts."
];

const conclusions = [
  "N'attendez pas que les dégâts s'aggravent. Pour un dépannage ou une installation de {serviceName} sur {cityName}, contactez notre centre d'appel ouvert 24/7. Outre le caractère urgent, nous proposons des forfaits d'entretien préventif économiques.",
  "Notre réputation à {cityName} s'est bâtie sur la confiance et l'efficacité de nos interventions. Que ce soit pour une réparation express ou un projet de {serviceName} complexe, nos experts sont à votre écoute pour restaurer rapidement votre confort.",
  "Vous l'aurez compris, notre expertise pour {serviceName} s'impose comme une référence à {cityName}. Réactivité, sécurité, assurance... Ne confiez pas vos clés au hasard, choisissez nos professionnels aguerris.",
  "Le maintien d'un habitat sain et fonctionnel est primordial. Laissez notre équipe de {cityName} prendre en charge votre prochain besoin en {serviceName}. Un simple appel suffit pour déclencher l'arrivée de nos réparateurs.",
  "En résumé, pour n’importe quelle difficulté liée à {serviceName}, {cityName} possède une solution à portée de main. Demandez dès aujourd'hui votre diagnostic gratuit et reprenez le contrôle de la situation."
];

function getRandomElement(arr: string[], seedHash: number) {
  return arr[seedHash % arr.length];
}

function getMultipleRandomElements(arr: string[], count: number, seedHash: number) {
  const result = [];
  const tempArray = [...arr];
  let currentSeed = seedHash;
  
  for (let i = 0; i < Math.min(count, arr.length); i++) {
    const index = currentSeed % tempArray.length;
    result.push(tempArray[index]);
    tempArray.splice(index, 1);
    currentSeed = Math.abs((currentSeed << 5) - currentSeed + currentSeed); // simple hash evolve
  }
  return result;
}

function stringToHash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function buildLongClusterText(
  serviceName: string,
  cityName: string,
  serviceDesc?: string,
): string[] {
  const seedPrefix = serviceName + "-" + cityName;
  
  // Deterministic seeds based on the specific parameters
  const h1 = stringToHash(seedPrefix + "_1");
  const h2 = stringToHash(seedPrefix + "_2");
  const h3 = stringToHash(seedPrefix + "_3");
  const h4 = stringToHash(seedPrefix + "_4");
  const h5 = stringToHash(seedPrefix + "_faq");
  const h6 = stringToHash(seedPrefix + "_benefits");

  const formattedServiceName = serviceName.toLowerCase();

  const introText = getRandomElement(intros, h1)
    .replace(/{serviceName}/g, formattedServiceName)
    .replace(/{cityName}/g, cityName);
    
  const methdologyText = getRandomElement(methodology, h2)
    .replace(/{serviceName}/g, formattedServiceName)
    .replace(/{cityName}/g, cityName);
    
  const standardsText = getRandomElement(standards, h3)
    .replace(/{serviceName}/g, formattedServiceName)
    .replace(/{cityName}/g, cityName);
    
  const conclusionText = getRandomElement(conclusions, h4)
    .replace(/{serviceName}/g, formattedServiceName)
    .replace(/{cityName}/g, cityName);

  const selectedBenefits = getMultipleRandomElements(benefits, 4, h6);

  const textBlocks: string[] = [];

  textBlocks.push(
    `<h2 class="text-3xl font-black text-white mb-6 mt-12">Comment se déroule notre intervention pour ${serviceName} à ${cityName} ?</h2>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${introText}</p>`,
  );

  // Inject unique service description if available to break duplicate content footprint
  if (serviceDesc) {
    textBlocks.push(
      `<div class="bg-blue-600/10 border-l-4 border-blue-400 p-6 my-8 rounded-r-2xl">
         <h3 class="text-xl font-bold text-blue-300 mb-3">Spécificités de notre intervention à ${cityName}</h3>
         <p class="text-white/90 text-lg leading-relaxed">${serviceDesc}</p>
       </div>`
    );
  } else {
    textBlocks.push(
      `<div class="bg-blue-900/10 border-l-4 border-blue-500 p-5 rounded-r-xl my-8">
        <h3 class="text-xl font-semibold text-blue-200 mb-3">Pourquoi faire appel à nos services de ${serviceName} à ${cityName} ?</h3>
        <ul class="list-disc pl-5 space-y-2 text-white/80">
          ${selectedBenefits.map(b => `<li>${b}</li>`).join('\n')}
        </ul>
      </div>`
    );
  }

  textBlocks.push(
    `<h3 class="text-2xl font-bold text-blue-300 mb-4 mt-8">Quelle est notre méthodologie professionnelle pour ${serviceName} à ${cityName} ?</h3>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${methdologyText}</p>`,
  );

  if (serviceDesc) {
    textBlocks.push(
      `<div class="my-8">
        <h3 class="text-xl font-bold text-white mb-4">Quels sont vos avantages garantis à ${cityName} ?</h3>
        <ul class="grid sm:grid-cols-2 gap-4">
          ${selectedBenefits.map(b => `<li class="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10"><span class="w-2 h-2 rounded-full bg-blue-500"></span><span class="text-sm text-slate-300">${b}</span></li>`).join('\n')}
        </ul>
      </div>`
    );
  }

  textBlocks.push(    
    `<h3 class="text-2xl font-bold text-emerald-300 mb-4 mt-8">Quelles sont nos garanties et normes de sécurité appliquées à ${cityName} ?</h3>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${standardsText}</p>`
  );

  // Add a contextual FAQ to incredibly boost rich unique content
  const q1 = getRandomElement(faqQuestions, h5).replace(/{serviceName}/g, formattedServiceName).replace(/{cityName}/g, cityName);
  const a1 = getRandomElement(faqAnswers, h5).replace(/{serviceName}/g, formattedServiceName).replace(/{cityName}/g, cityName);
  const q2 = getRandomElement(faqQuestions, h5 + 1).replace(/{serviceName}/g, formattedServiceName).replace(/{cityName}/g, cityName);
  const a2 = getRandomElement(faqAnswers, h5 + 1).replace(/{serviceName}/g, formattedServiceName).replace(/{cityName}/g, cityName);
  
  if (q1 !== q2) {
    textBlocks.push(
      `<div class="mt-12 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">`,
      `<h3 class="text-2xl font-bold text-white mb-6">Questions fréquentes sur le service de ${serviceName} à ${cityName}</h3>`,
      `<div class="space-y-6">`,
      `<div><p class="font-bold text-blue-400 mb-2">Q: ${q1}</p><p class="text-white/80">${a1}</p></div>`,
      `<div><p class="font-bold text-blue-400 mb-2">Q: ${q2}</p><p class="text-white/80">${a2}</p></div>`,
      `</div>`,
      `</div>`
    );
  }

  textBlocks.push(
    `<div class="bg-gradient-to-r from-blue-900/30 to-purple-900/10 p-6 rounded-xl mt-8 mb-8 border border-white/5">`,
    `<p class="text-white text-lg font-medium leading-relaxed m-0">${conclusionText}</p>`,
    `</div>`
  );

  return textBlocks;
}

const nlIntros = [
  "Wanneer er een noodgeval optreedt in uw woning of bedrijfspand in {cityName}, telt elke minuut. {serviceName} vereist een grondige aanpak en snelle reactie. De inwoners van {cityName} kunnen rekenen op ons lokale team.",
  "Bij een behoefte aan {serviceName} in {cityName} is het essentieel om een beroep te doen op gecertificeerde technici. Wij combineren snelle interventie met hoogwaardige afwerking.",
  "Professioneel beheer van uw {serviceName} staat centraal in ons werk. Dag en nacht zijn onze vakmensen onderweg in {cityName} voor duurzame oplossingen met transparante prijzen vooraf."
];

const nlMethodology = [
  "Onze interventiemethoden zijn gebaseerd op geavanceerde apparatuur. Voor elke handeling voeren we een nauwkeurige diagnose uit van uw {serviceName} in {cityName}.",
  "Elke herstelling wordt voorafgegaan door een duidelijke offerte. We gebruiken gecertificeerde onderdelen en leven de lokale Belgische normen strikt na.",
  "Het proces is eenvoudig: telefonische evaluatie, snelle beveiliging, gedetailleerde diagnose en definitieve herstelling in {cityName}."
];

const nlStandards = [
  "Het naleven van veiligheids- en milieunormen is essentieel. Onze service voor {serviceName} in {cityName} is 100% conform de geldende Belgische regelgeving.",
  "Al onze installaties voldoen aan de huidige isolatie- en dichtheidsnormen. Ons kwaliteitslabel biedt zekerheid aan inwoners en syndici in {cityName}."
];

const nlConclusions = [
  "Wacht niet tot de schade verergert. Neem voor een snelle interventie voor {serviceName} in {cityName} contact op met onze 24/7 centrale.",
  "Onze reputatie in {cityName} is gebouwd op vertrouwen en efficiëntie. Of het nu gaat om een dringende herstelling of een complex project, onze experts staan voor u klaar."
];

export function buildLongNlClusterText(
  serviceName: string,
  cityName: string,
  serviceDesc?: string,
): string[] {
  const seedPrefix = serviceName + "-" + cityName + "-nl";
  
  const h1 = stringToHash(seedPrefix + "_1");
  const h2 = stringToHash(seedPrefix + "_2");
  const h3 = stringToHash(seedPrefix + "_3");
  const h4 = stringToHash(seedPrefix + "_4");

  const formattedServiceName = serviceName.toLowerCase();

  const introText = getRandomElement(nlIntros, h1)
    .replace(/{serviceName}/g, formattedServiceName)
    .replace(/{cityName}/g, cityName);
    
  const methdologyText = getRandomElement(nlMethodology, h2)
    .replace(/{serviceName}/g, formattedServiceName)
    .replace(/{cityName}/g, cityName);
    
  const standardsText = getRandomElement(nlStandards, h3)
    .replace(/{serviceName}/g, formattedServiceName)
    .replace(/{cityName}/g, cityName);
    
  const conclusionText = getRandomElement(nlConclusions, h4)
    .replace(/{serviceName}/g, formattedServiceName)
    .replace(/{cityName}/g, cityName);

  const textBlocks: string[] = [];

  textBlocks.push(
    `<h2 class="text-3xl font-black text-white mb-6 mt-12">Hoe verloopt onze interventie voor ${serviceName} in ${cityName}?</h2>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${introText}</p>`,
  );

  if (serviceDesc) {
    textBlocks.push(
      `<div class="bg-blue-600/10 border-l-4 border-blue-400 p-6 my-8 rounded-r-2xl">
         <h3 class="text-xl font-bold text-blue-300 mb-3">Specifieke details voor ${cityName}</h3>
         <p class="text-white/90 text-lg leading-relaxed">${serviceDesc}</p>
       </div>`
    );
  }

  textBlocks.push(
    `<h3 class="text-2xl font-bold text-blue-300 mb-4 mt-8">Onze professionele werkwijze voor ${serviceName} in ${cityName}</h3>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${methdologyText}</p>`,
    `<h3 class="text-2xl font-bold text-emerald-300 mb-4 mt-8">Garanties en veiligheidsnormen in ${cityName}</h3>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${standardsText}</p>`,
    `<div class="bg-gradient-to-r from-blue-900/30 to-purple-900/10 p-6 rounded-xl mt-8 mb-8 border border-white/5">`,
    `<p class="text-white text-lg font-medium leading-relaxed m-0">${conclusionText}</p>`,
    `</div>`
  );

  return textBlocks;
}

import { frToNlCityNameMap } from "@/lib/data/translations";

export function getProfessionMetaTitle(serviceSlug: string, cityName: string, isNl: boolean = false): string {
  let title = "";
  
  const searchServices = isNl ? dutchServices : services;
  for (const s of searchServices) {
    if (s.slug === serviceSlug || s.id === serviceSlug) {
      title = s.title;
      break;
    }
    if (s.subServices) {
      const sub = s.subServices.find(sub => sub.slug === serviceSlug);
      if (sub) {
        title = sub.title;
        break;
      }
    }
  }

  if (!title) {
    title = serviceSlug.replace(/-/g, " ");
  }

  let profession = title;
  
  if (isNl) {
    const rawCity = cityName || "België";
    const city = frToNlCityNameMap[rawCity] || rawCity;
    const lower = title.toLowerCase();

    if (lower === "loodgieter" || lower.includes("plomberie")) profession = "Loodgieter";
    else if (lower.includes("ontstopping") || lower.includes("debouchage")) profession = "Ontstoppingsdienst";
    else if (lower === "verwarming" || lower.includes("chauffage")) profession = "Chauffagiste & Loodgieter";
    else if (lower.includes("elektriciteit") || lower.includes("electricite")) profession = "Elektricien";
    else if (lower.includes("gas") || lower.includes("gaz")) profession = "Gastechnicus CERGA";
    else if (lower.includes("airco") || lower.includes("climatisation")) profession = "Airco Installateur";
    else if (lower.includes("ventilatie") || lower.includes("vmc")) profession = "Ventilatie Installateur";
    else if (lower.includes("renovatie") || lower.includes("renovation")) profession = "Aannemer Renovatie";
    else if (lower.includes("badkamer")) profession = "Badkamer Installateur";
    else if (lower.includes("keuken")) profession = "Keuken Installateur";
    else if (lower.includes("camerabewaking") || lower.includes("camera")) profession = "Camerabewaking Specialist";
    else if (lower.includes("zonnepanelen")) profession = "Zonnepanelen Installateur";
    else if (lower.includes("septische") || lower.includes("put")) profession = "Ruimdienst Septische Put";
    else if (lower.includes("dakwerken")) profession = "Dakdekker";
    else if (lower.includes("bouwwerken")) profession = "Aannemer Bouwwerken";
    else if (lower.includes("ruitenwasser")) profession = "Ruitenwasser";
    else if (lower.includes("tuinieren")) profession = "Tuinman & Hovenier";
    else if (lower.includes("installatie")) profession = "Installateur " + title.replace(/installatie/i, "").trim();
    else if (lower.includes("herstelling")) profession = "Hersteller " + title.replace(/herstelling/i, "").trim();
    else if (lower.includes("onderhoud")) profession = "Onderhoud " + title.replace(/onderhoud/i, "").trim();
    else profession = title;

    const isBelgium = city.toLowerCase().includes("belgië") || city.toLowerCase().includes("belgie");
    const prep = "in";
    
    const titleStr = `${profession} ${prep} ${city} — Spoeddienst 24/7`;
    return ensureTitleLength(titleStr);
  } else {
    const lower = title.toLowerCase();
    if (lower === "plomberie" || lower.includes("plombier")) profession = "Plombier";
    else if (lower === "chauffage" || lower.includes("chauffagiste")) profession = "Chauffagiste";
    else if (lower.startsWith("débouchage") || lower.startsWith("debouchage")) {
      profession = title.replace(/^débouchage/i, "Déboucheur").replace(/^debouchage/i, "Déboucheur");
      if (lower.includes("evier") || lower.includes("évier")) profession = "Déboucheur Évier & Lavabo";
      else if (lower.includes("égout") || lower.includes("egout")) profession = "Déboucheur Égout & Canalisations";
      else profession = title.replace(/^débouchage\s+/i, "Déboucheur ").replace(/^debouchage\s+/i, "Déboucheur ");
    }
    else if (lower.startsWith("installation")) profession = title.replace(/^installation\s+(de\s+|d')?/i, "Installateur ");
    else if (lower.startsWith("dégazage") || lower.startsWith("degazage")) profession = "Dégazage Cuve à Mazout";
    else if (lower.startsWith("nettoyage")) profession = title.replace(/^nettoyage\s+(de\s+|d')?/i, "Nettoyeur ");
    else if (lower.startsWith("vidange")) profession = title.replace(/^vidange\s+(de\s+|d')?/i, "Vidangeur ");
    else if (lower.startsWith("pompage")) profession = title.replace(/^pompage\s+(et\s+)?vidange\s+(de\s+|d')?/i, "Vidangeur ");
    else if (lower.startsWith("rénovation") || lower.startsWith("renovation")) profession = "Rénovation & Aménagement";
    else if (lower.startsWith("peinture") || lower.startsWith("peintre")) profession = "Peintre en Bâtiment";
    else if (lower.includes("électricité") || lower.includes("electricite")) profession = "Électricien";
    else if (lower.includes("gaz")) profession = "Chauffagiste Gaz CERGA";
    else if (lower.includes("climatisation")) profession = "Installateur Climatisation";
    else if (lower.startsWith("entretien")) profession = "Entretien " + title.replace(/^entretien\s+/i, "");
    else if (lower.startsWith("dépannage") || lower.startsWith("depannage")) profession = "Dépannage " + title.replace(/^dépannage\s+/i, "");
    else if (lower.startsWith("recherche")) profession = "Recherche de Fuite";
    else profession = title;

    const city = cityName || "Belgique";
    const isBelgium = city.toLowerCase().includes("belgique") || city.toLowerCase().includes("belgië");
    const prep = isBelgium ? "en" : "à";

    const titleStr = `${profession} ${prep} ${city} — Service 24/7`;
    return ensureTitleLength(titleStr);
  }
}

export function ensureTitleLength(title: string): string {
  const trimmed = title.trim();
  if (trimmed.length >= 60 && trimmed.length <= 66) {
    return trimmed;
  }
  if (trimmed.length > 66) {
    let cut = trimmed.substring(0, 63);
    const lastSpace = cut.lastIndexOf(" ");
    if (lastSpace > 45) {
      cut = cut.substring(0, lastSpace);
    }
    cut = cut.trim();
    while (cut.length < 60) {
      cut += " Pro";
    }
    return cut.substring(0, 66);
  }
  const suffixes = [
    " — Devis Gratuit 24/7",
    " — Intervention Rapide",
    " — Service Agréé Belge",
    " — Tarif Transparent",
    " — Expert Local",
    " — Dépannage Urgent",
    " — Loodgieter Pro",
    " — Gratis Offerte",
    " - Pro Services",
    " — Contactez-nous",
    " 24h/24",
    " 24/7",
    " !"
  ];
  let result = trimmed;
  for (const suffix of suffixes) {
    if (result.length + suffix.length <= 66) {
      result += suffix;
      if (result.length >= 60) break;
    }
  }
  while (result.length < 60) {
    result += " Pro";
  }
  return result.substring(0, 66);
}

export function ensureDescriptionLength(desc: string): string {
  const trimmed = desc.trim().replace(/\s+/g, " ");
  if (trimmed.length >= 150 && trimmed.length <= 155) {
    return trimmed;
  }
  if (trimmed.length > 155) {
    let cut = trimmed.substring(0, 152);
    const lastSpace = cut.lastIndexOf(" ");
    if (lastSpace > 130) {
      cut = cut.substring(0, lastSpace);
    }
    cut = cut.trim();
    const endings = [" - Appel gratuit.", " - Contactez-nous.", " - Devis gratuit.", " - Service 24/7.", " 24h/24."];
    for (const ending of endings) {
      if (cut.length + ending.length >= 150 && cut.length + ending.length <= 155) {
        return cut + ending;
      }
    }
    while (cut.length < 150) {
      cut += " Urgent.";
    }
    return cut.substring(0, 155);
  }
  const additions = [
    " Contactez PRO SERVICES pour une intervention immédiate et un devis gratuit sans aucun engagement.",
    " Nos techniciens qualifiés et agréés interviennent en urgence 24h/24 et 7j/7 avec un service de qualité.",
    " Profitez d'un dépannage rapide de qualité supérieure au meilleur tarif de la région.",
    " Bel direct voor een snelle interventie en een gratis offerte.",
    " Équipe locale agréée et disponible immédiatement.",
    " Garantie décennale et satisfaction assurée."
  ];
  let result = trimmed;
  for (const add of additions) {
    if (result.length + add.length <= 155) {
      result += add;
      if (result.length >= 150) break;
    }
  }
  while (result.length < 150) {
    result += " Service rapide 24h/24.";
  }
  return result.substring(0, 155);
}
