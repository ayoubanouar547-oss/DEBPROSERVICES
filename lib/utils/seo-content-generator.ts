// A robust long-form text generator for local pages with varied sections
const intros = [
  "Lorsque survient une urgence à domicile ou dans vos locaux professionnels, chaque minute compte. {serviceName} nécessite une approche rigoureuse et une réactivité sans faille. Les habitants de {cityName} peuvent compter sur notre équipe locale, prête à se déplacer avec tout le matériel nécessaire pour sécuriser les lieux.",
  "Face à un besoin en {serviceName}, il est essentiel de faire appel à des techniciens certifiés. Sur {cityName} et ses environs, nous mettons un point d'honneur à allier rapidité d'intervention et qualité de finition. Évitez d'aggraver la situation en nous confiant vos installations immobilières.",
  "La gestion professionnelle de votre {serviceName} est au cœur de notre métier. De jour comme de nuit, nos professionnels sillonnent les rues de {cityName} pour apporter des solutions pérennes, avec une tarification toujours transparente et annoncée avant travaux."
];

const methodology = [
  "Nos méthodes d'intervention s'appuient sur un équipement de pointe. Avant toute manipulation, nous réalisons un diagnostic précis de votre {serviceName} à {cityName}. Cela inclut, selon le cas, une inspection par caméra thermique ou un test de pression conforme aux normes en vigueur.",
  "Chaque réparation est précédée d'un devis clair. Nous utilisons des pièces certifiées et respectons scrupuleusement les régulations environnementales locales. La qualité de notre intervention sur votre {serviceName} garantit la longévité de vos installations.",
  "Le processus est simple : évaluation téléphonique, sécurisation rapide, diagnostic détaillé et réparation définitive. Nous laissons toujours le chantier de {cityName} propre, conscients que l'intégrité de vos biens, qu'il s'agisse de locaux résidentiels ou professionnels, est votre priorité."
];

const standards = [
  "Le respect des normes environnementales et de sécurité est fondamental. En Région wallonne ou flamande, les régulations évoluent vite. Ainsi, notre prise en charge de {serviceName} est garantie 100% conforme, vous protégeant juridiquement tout en optimisant l'efficacité énergétique.",
  "Toutes nos installations respectent les standards d'isolation et d'étanchéité actuels. Pour les urgences concernant {serviceName}, notre label de qualité rassure les syndics et assurances de {cityName}. Vous recevez un certificat de conformité à l'issue de notre prestation."
];

const conclusions = [
  "N'attendez pas que les dégâts s'aggravent. Pour un dépannage ou une installation de {serviceName} sur {cityName}, contactez notre centre d'appel ouvert 24/7. Outre le caractère urgent, nous proposons des forfaits d'entretien préventif économiques sur le long terme.",
  "Notre réputation à {cityName} s'est bâtie sur la confiance et l'efficacité de nos interventions. Que ce soit pour une réparation express ou un projet de {serviceName} complexe, nos experts sont à votre écoute pour restaurer rapidement votre confort quotidien."
];

function getRandomElement(arr: string[], seedHash: number) {
  return arr[seedHash % arr.length];
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
): string[] {
  const seedPrefix = serviceName + cityName;
  
  // Create deterministic content based on the city+service name so SSR is consistent across requests
  const h1 = stringToHash(seedPrefix + "1");
  const h2 = stringToHash(seedPrefix + "2");
  const h3 = stringToHash(seedPrefix + "3");
  const h4 = stringToHash(seedPrefix + "4");

  const introText = getRandomElement(intros, h1)
    .replace(/{serviceName}/g, serviceName)
    .replace(/{cityName}/g, cityName);
    
  const methdologyText = getRandomElement(methodology, h2)
    .replace(/{serviceName}/g, serviceName)
    .replace(/{cityName}/g, cityName);
    
  const standardsText = getRandomElement(standards, h3)
    .replace(/{serviceName}/g, serviceName)
    .replace(/{cityName}/g, cityName);
    
  const conclusionText = getRandomElement(conclusions, h4)
    .replace(/{serviceName}/g, serviceName)
    .replace(/{cityName}/g, cityName);

  const textBlocks: string[] = [];

  textBlocks.push(
    `<h2 class="text-3xl font-black text-white mb-6 mt-12">Expertise locale en ${serviceName} à ${cityName}</h2>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${introText}</p>`,
    `<h3 class="text-2xl font-bold text-blue-300 mb-4 mt-8">Méthodologie de réparation professionnelle</h3>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${methdologyText}</p>`,
    `<h3 class="text-2xl font-bold text-blue-300 mb-4 mt-8">Respect des normes et conformité</h3>`,
    `<p class="mb-6 text-white/90 text-lg leading-relaxed">${standardsText}</p>`,
    `<div class="bg-white/5 border border-white/10 p-6 rounded-xl mt-8 mb-8">`,
    `<p class="text-white text-lg font-medium leading-relaxed">${conclusionText}</p>`,
    `</div>`
  );

  return textBlocks;
}
