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

export function getProfessionMetaTitle(serviceSlug: string, cityName: string, isNl: boolean = false): string {
  const slug = serviceSlug.toLowerCase();
  if (isNl) {
    let profession = "expert";
    if (slug.includes("loodgieter") || slug.includes("plomberie")) profession = "loodgieter";
    else if (slug.includes("ontstop") || slug.includes("debouchage")) profession = "ontstopper";
    else if (slug.includes("verwarm") || slug.includes("chauffage")) profession = "verwarmingsinstallateur";
    else if (slug.includes("gas") || slug.includes("gaz")) profession = "gasinstallateur";
    else if (slug.includes("elektri") || slug.includes("electricite")) profession = "elektricien";
    else if (slug.includes("airco") || slug.includes("climatisation")) profession = "airco installateur";
    else if (slug.includes("ruimen") || slug.includes("septische") || slug.includes("fosse")) profession = "expert ruimen septische put";
    else if (slug.includes("renovat") || slug.includes("renovatie")) profession = "renovatie aannemer";
    else if (slug.includes("schilder") || slug.includes("peinture")) profession = "schilder";
    else if (slug.includes("zonnepaneel") || slug.includes("solaires")) profession = "zonnepanelen installateur";
    else if (slug.includes("dakwerk") || slug.includes("toiture")) profession = "dakwerker";
    else if (slug.includes("camerabeveiliging") || slug.includes("camera")) profession = "camerabeveiliging installateur";
    else if (slug.includes("bouwwerken") || slug.includes("construction")) profession = "aannemer bouwwerken";
    else if (slug.includes("glazenwasser") || slug.includes("vitres")) profession = "glazenwasser";
    else if (slug.includes("tuinman") || slug.includes("jardin")) profession = "tuinier";
    else if (slug.includes("stookolietank") || slug.includes("citerne")) profession = "stookolietank expert";
    
    return `De beste ${profession} in ${cityName} - PRO SERVICES`;
  } else {
    let profession = "expert";
    if (slug.includes("plomb") || slug.includes("plomberie")) profession = "plombier";
    else if (slug.includes("debouc") || slug.includes("debouchage")) profession = "déboucheur";
    else if (slug.includes("chauff") || slug.includes("chauffage")) profession = "chauffagiste";
    else if (slug.includes("gaz") || slug.includes("gas")) profession = "installateur de gaz";
    else if (slug.includes("electri") || slug.includes("electricite")) profession = "électricien";
    else if (slug.includes("climat") || slug.includes("airco") || slug.includes("climatisation")) profession = "installateur de climatisation";
    else if (slug.includes("vidange") || slug.includes("fosse")) profession = "expert vidange de fosse septique";
    else if (slug.includes("renov") || slug.includes("renovation")) profession = "entrepreneur de rénovation";
    else if (slug.includes("peintre") || slug.includes("peinture")) profession = "peintre";
    else if (slug.includes("solaire") || slug.includes("solaires") || slug.includes("zonnepanelen")) profession = "installateur de panneaux solaires";
    else if (slug.includes("toiture") || slug.includes("couvreur")) profession = "couvreur de toiture";
    else if (slug.includes("camera") || slug.includes("cameras")) profession = "installateur de caméras de surveillance";
    else if (slug.includes("construction") || slug.includes("gros")) profession = "entrepreneur de construction";
    else if (slug.includes("vitre") || slug.includes("vitres")) profession = "laveur de vitres";
    else if (slug.includes("jardin") || slug.includes("elagage")) profession = "jardinier paysagiste";
    else if (slug.includes("citerne") || slug.includes("mazout")) profession = "expert citerne de mazout";

    const preposition = (cityName.toLowerCase() === "belgique" || cityName.toLowerCase() === "la belgique") ? "en" : "à";
    return `Le meilleur ${profession} ${preposition} ${cityName} - PRO SERVICES`;
  }
}
