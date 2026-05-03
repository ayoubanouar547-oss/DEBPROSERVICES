import { cityData, defaultCityData } from "@/lib/data/cityData";

// Service-specific paragraphs — unique content per service type
const serviceSpecificContent: Record<string, string[]> = {
  "plomberie": [
    "La plomberie d'une habitation est un réseau complexe qui vieillit avec le temps. Les canalisations en plomb encore présentes dans de nombreux immeubles anciens doivent être remplacées pour des raisons sanitaires. Les joints qui durcissent, les robinets qui s'usent et les soudures qui cèdent sont autant de points de défaillance que nos techniciens identifient et corrigent lors de chaque intervention préventive.",
    "Une fuite d'eau non traitée peut causer en quelques heures des dégâts considérables : planchers gonflés, murs humides, moisissures et dommages aux étages inférieurs. C'est pourquoi notre service de détection non destructive utilise caméras thermiques et détecteurs acoustiques pour localiser la fuite avec précision, sans avoir à ouvrir les murs inutilement.",
    "L'installation d'un nouveau chauffe-eau ou boiler nécessite une expertise technique certifiée. Nos plombiers agréés sélectionnent avec vous le modèle adapté à vos besoins énergétiques, procèdent à l'installation dans les normes belges, et s'assurent que la pression et la température de sécurité sont correctement réglées avant de vous remettre l'installation.",
  ],
  "debouchage-canalisation": [
    "Un réseau de canalisation bouché génère rapidement des problèmes sanitaires sérieux. Les dépôts de graisse, les racines d'arbres qui s'infiltrent, les lingettes non dégradables et les corps étrangers sont les principales causes de bouchon. Notre hydrocureur haute pression jusqu'à 400 bars désincruste et dégage les conduites les plus récalcitrantes sans endommager les tuyaux.",
    "L'inspection par caméra endoscopique HD est systématiquement proposée pour les bouchons récurrents ou inexpliqués. Cette technique non destructive permet de visualiser en temps réel l'intérieur des canalisations, d'identifier les fractures, déformations ou infiltrations de racines, et de cibler précisément la zone d'intervention pour un résultat durable.",
    "La vidange régulière d'une fosse septique est une obligation légale en Belgique, particulièrement en Wallonie et en Flandre. Nos camions vidangeurs agréés prennent en charge l'intégralité de l'opération : pompage, nettoyage haute pression de la cuve, et fourniture du certificat de traçabilité des déchets requis par l'administration communale.",
  ],
  "chauffage": [
    "L'entretien annuel de votre chaudière est une obligation légale en Belgique depuis le décret du 29 janvier 2009 en Wallonie et ses équivalents régionaux. Cet entretien comprend le nettoyage des brûleurs, la vérification du circuit de combustion, le contrôle des sécurités et la mesure des émissions. Nos techniciens certifiés remettent un rapport d'entretien officiel à chaque visite.",
    "Une chaudière à condensation bien entretenue peut atteindre un rendement de 109% sur PCS, contre 75% pour une vieille chaudière atmosphérique. Le remplacement d'une installation vétuste est souvent rentabilisé en 5 à 7 ans grâce aux économies sur la facture de gaz. Nos conseillers techniques réalisent gratuitement un bilan énergétique de votre installation avant de vous proposer la solution la plus adaptée.",
    "Les pannes de chaudière surviennent souvent aux périodes les plus froides. Nos techniciens astreinte interviennent 24h/24 et 7j/7, équipés d'un stock de pièces pour les marques les plus courantes : Vaillant, Bulex, Viessmann, Bosch, Junkers, De Dietrich et Ariston. Dans la grande majorité des cas, la panne est résolue en une seule intervention.",
  ],
  "gaz": [
    "La certification CERGA est obligatoire pour tout technicien intervenant sur les installations gaz en Belgique. Tous nos installateurs gaz sont certifiés CERGA, garantissant que vos travaux sont conformes aux normes NBN B61-002 et que vous pouvez obtenir l'attestation nécessaire à l'ouverture du compteur auprès de votre gestionnaire de réseau.",
    "Une fuite de gaz constitue une urgence absolue. En cas d'odeur de soufre ou de sifflement suspect, coupez immédiatement l'arrivée générale, évacuez les occupants, n'actionnez aucun interrupteur électrique et appelez-nous depuis l'extérieur du bâtiment. Nos techniciens équipés de détecteurs de fuite électroniques interviennent en moins de 45 minutes partout en Belgique.",
    "La conversion du gaz pauvre vers le gaz riche, en cours dans plusieurs provinces belges, nécessite le réglage de tous les appareils à gaz : chaudière, cuisinière, four et chauffe-eau. Cette opération doit impérativement être réalisée par un technicien certifié CERGA pour garantir la sécurité et les performances de vos appareils après la transition.",
  ],
  "electricite": [
    "Le Règlement Général sur les Installations Électriques impose en Belgique un contrôle électrique à chaque vente immobilière, lors de tout réaménagement important et dans les habitations de plus de 25 ans. Nos électriciens agréés AREI réalisent les mises en conformité nécessaires et vous accompagnent jusqu'à l'obtention du rapport favorable de l'organisme de contrôle.",
    "Un tableau électrique vieillissant ou sous-dimensionné est une source de risque d'incendie et de pannes répétées. Le remplacement par un tableau avec disjoncteurs différentiels 300mA en tête et 30mA en aval pour les circuits humides est souvent indispensable pour passer le contrôle AREI. Nos électriciens réalisent ce remplacement en une journée, avec remise du schéma unifilaire à jour.",
    "Les installations domotiques, bornes de recharge pour véhicules électriques et panneaux photovoltaïques nécessitent une expertise électrique certifiée. Nos techniciens maîtrisent ces nouvelles technologies et assurent leur intégration sécurisée dans votre installation existante, en conformité avec les dernières normes belges et européennes.",
  ],
  "climatisation": [
    "L'installation d'un système de climatisation réversible ou d'une pompe à chaleur air-air nécessite l'intervention d'un frigoriste certifié F-Gas selon le règlement européen 517/2014. Cette certification garantit que les fluides frigorigènes sont manipulés en toute sécurité et que l'installation est conforme aux normes environnementales européennes. Tous nos techniciens sont certifiés F-Gas.",
    "Un entretien annuel de votre climatisation est indispensable pour maintenir ses performances et sa durée de vie. Nos techniciens procèdent au nettoyage des filtres et des échangeurs, à la vérification de la charge en gaz réfrigérant et au contrôle des pressions de fonctionnement. Un appareil bien entretenu consomme jusqu'à 25% d'énergie en moins qu'un appareil négligé.",
    "La ventilation mécanique contrôlée est aujourd'hui obligatoire dans toute nouvelle construction en Belgique. Nos techniciens installent et entretiennent les systèmes VMC simple et double flux qui assurent le renouvellement permanent de l'air intérieur, indispensable à la qualité de l'air et à la prévention des problèmes d'humidité et de condensation.",
  ],
  "renovation-maison": [
    "La rénovation d'une salle de bain représente l'un des travaux les plus rentables en termes de valorisation immobilière. Nos équipes pluridisciplinaires coordonnent l'ensemble du chantier de A à Z : démolition de l'ancienne salle de bain, réfection complète du réseau hydraulique, installation de la douche italienne ou de la baignoire, pose du carrelage et finitions.",
    "La rénovation énergétique d'une habitation ancienne en Belgique peut bénéficier d'aides substantielles : primes Rénolution en Wallonie, primes de la Région Bruxelles-Capitale et aides en Flandre. Nos conseillers vous guident dans les démarches administratives pour maximiser vos aides avant le début des travaux d'isolation, de remplacement de vitrages ou d'installation d'une nouvelle chaudière.",
    "Chaque projet de rénovation commence par une visite technique gratuite sur site. Nos chefs de projet évaluent l'état du bâtiment, identifient les contraintes techniques et établissent un devis détaillé corps par corps. Nous coordonnons tous les corps de métier pour vous offrir une rénovation clés en main sans mauvaise surprise.",
  ],
  "vidange-fosse-septique": [
    "La vidange d'une fosse septique est réglementée en Belgique et varie selon les régions. En Wallonie, le Service Public de Wallonie impose une vidange par une entreprise agréée avec certificat de traçabilité des boues. En Flandre, la Vlakwa encadre strictement l'élimination des matières de vidange. Nos camions sont agréés dans les trois Régions.",
    "Une fosse septique mal entretenue peut présenter des risques sanitaires sérieux et des nuisances olfactives importantes. La fréquence de vidange recommandée est tous les 3 à 5 ans selon la taille de la fosse et le nombre d'occupants. Notre technicien évalue lors de chaque vidange l'état de la fosse et vous signale toute anomalie nécessitant une intervention préventive.",
    "Les micro-stations d'épuration, de plus en plus répandues dans les nouvelles constructions, nécessitent un entretien spécialisé différent des fosses septiques traditionnelles. Nos techniciens sont formés sur les principales marques du marché belge et assurent la maintenance contractuelle annuelle et le remplacement des pièces d'usure.",
  ],
};

// Generic fallback paragraphs
const genericParagraphs = [
  "L'intervention rapide est stratégique lorsqu'il s'agit d'urgences à domicile ou dans vos locaux professionnels. Que ce soit en pleine nuit, un dimanche ou un jour férié, nos équipes d'astreinte sont prêtes à se déplacer avec un matériel de pointe. La réparation rapide permet de circonscrire les dégâts et de rétablir le confort dans les meilleurs délais.",
  "Chaque problème requiert un diagnostic précis. Les méthodes modernes utilisant la vidéo-inspection, l'imagerie thermique ou les tests de compression permettent de localiser l'origine d'un problème en quelques minutes, sans travaux destructifs inutiles.",
  "Le secteur du bâtiment et des installations techniques en Belgique a considérablement évolué. Les trois Régions imposent des normes strictes en matière de sécurité et d'efficacité énergétique. DEB PRO SERVICES forme en permanence ses techniciens aux dernières évolutions réglementaires pour vous garantir des travaux conformes.",
];

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function buildLongClusterText(
  serviceName: string,
  cityName: string,
  serviceSlug?: string,
): string[] {
  const textBlocks: string[] = [];
  const citySlug = slugify(cityName);
  const city = cityData[citySlug] ?? defaultCityData;

  const paragraphs =
    serviceSlug && serviceSpecificContent[serviceSlug]
      ? serviceSpecificContent[serviceSlug]
      : genericParagraphs;

  // Block 1
  textBlocks.push(
    `<h2 class="text-4xl font-black text-white mb-6 mt-12 uppercase tracking-tight">Expertise en ${serviceName} à ${cityName}</h2>`
  );
  textBlocks.push(
    `<p class="mb-6 text-white text-lg leading-relaxed">${city.description} Nos techniciens, déployés ${city.landmark}, interviennent en moins de ${city.interventionTime} après votre appel pour toute urgence liée à votre ${serviceName}.</p>` +
    `<p class="mb-6 text-white text-lg leading-relaxed">${paragraphs[0]}</p>`
  );

  // Block 2
  textBlocks.push(
    `<h2 class="text-4xl font-black text-white mb-6 mt-12 uppercase tracking-tight">Nos interventions en ${serviceName} à ${cityName}</h2>`
  );
  textBlocks.push(
    `<p class="mb-6 text-white text-lg leading-relaxed">${paragraphs[1]}</p>` +
    `<p class="mb-6 text-white text-lg leading-relaxed">À ${cityName}, DEB PRO SERVICES garantit une transparence totale sur les tarifs avant chaque intervention. Un devis gratuit vous est remis par téléphone ou sur place, et aucun travail n'est entamé sans votre accord explicite.</p>`
  );

  // Block 3
  textBlocks.push(
    `<h2 class="text-4xl font-black text-white mb-6 mt-12 uppercase tracking-tight">Pourquoi DEB PRO SERVICES à ${cityName} ?</h2>`
  );
  textBlocks.push(
    `<p class="mb-6 text-white text-lg leading-relaxed">${paragraphs[2]}</p>` +
    `<p class="mb-6 text-white text-lg leading-relaxed">Grâce à notre réseau de techniciens répartis stratégiquement à travers la Belgique, nous garantissons une intervention en moins de ${city.interventionTime} à ${cityName}. Nos véhicules sont équipés en permanence de pièces de rechange pour les interventions les plus courantes. DEB PRO SERVICES, c'est la promesse d'un service fiable, certifié et transparent pour tous vos besoins en ${serviceName}.</p>`
  );

  return textBlocks;
}

// Legacy export for compatibility
export const paragraphsTemplates = genericParagraphs;
