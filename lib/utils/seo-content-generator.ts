// Simulate a robust long-form text generator for local pages
export const paragraphsTemplates = [
  // Intro
  "L'intervention rapide est stratégique lorsqu'il s'agit d'urgences à domicile ou dans vos locaux professionnels. Que ce soit en pleine nuit, un dimanche ou un jour férié, nos équipes d'astreinte sont prêtes à se déplacer chez vous avec un matériel de pointe. La réparation rapide permet de circonscrire les dégâts, réduire les coûts de rénovation globale et rétablir le confort pour les occupants. Contrairement à une intervention classique, un service d'urgence exige une réactivité de chaque instant, un inventaire embarqué dans les fourgons d'intervention, et une certification mise à jour pour affronter les imprévus.",

  // Core Problem
  "Chaque problème requiert un diagnostic millimétré. Les méthodes traditionnelles ont été remplacées par des analyses fines utilisant la vidéo-inspection, l'imagerie ou les tests de compression selon le domaine d'expertise. Par exemple, une fuite invisible, un court-circuit complexe ou une perte de charge dans un système peuvent être localisés en quelques minutes. Les matériaux vieillissants se heurtent fréquemment aux exigences des nouvelles normes belges, nécessitant une mise en conformité radicale.",

  // Norms
  "Le secteur du bâtiment et des installations techniques en Belgique a considérablement évolué. Régions wallonne, flamande et bruxelloise imposent des normes environnementales strictes : gestion des déchets, efficacité énergétique et sécurité incendie. L'artisan d'aujourd'hui est un technicien hautement qualifié qui maîtrise autant l'électromécanique que la régulation thermique et les flux hydrauliques certifiés.",

  // Process
  "Voici notre parcours de prise en charge : d'abord, une évaluation téléphonique immédiate. Ensuite, la sécurisation du périmètre d'intervention (mise hors tension ou fermeture des vannes). Troisièmement, le diagnostic avec un chiffrage transparent avant toute action. Enfin, la réparation pérenne couplée à un nettoyage complet du chantier. Tout notre personnel signe une charte de qualité exigeante.",

  // Quality & Trust
  "Le bouche-à-oreille et les milliers de clients satisfaits témoignent de notre intégrité. Les syndics de copropriété, les commerces de proximité et les particuliers nous font confiance pour leur contrat de maintenance annuelle. Outre l'urgence, c'est l'entretien préventif qui assure une longévité maximale à vos installations et vous évite les mauvaises surprises financières à long terme.",
];

export function buildLongClusterText(
  serviceName: string,
  cityName: string,
): string[] {
  const textBlocks: string[] = [];

  // Multiply the templates to create a massive wall of structured text.
  // For 5000 words, we need about 40x thick paragraphs, ~125 words each.
  for (let i = 0; i < 3; i++) {
    textBlocks.push(
      `<h2 class="text-4xl font-black text-white mb-6 mt-12 uppercase tracking-tight">Expertise en ${serviceName} à ${cityName}</h2>`,
    );
    let blockContent = "";
    paragraphsTemplates.slice(0, 3).forEach((p, idx) => {
      const personalized = p
        .replace(/urgences/g, `urgences en ${serviceName}`)
        .replace(/diagnostic/g, `diagnostic de ${serviceName}`)
        .replace(/locaux/g, `locaux situés à ${cityName}`);
      blockContent += `<p class="mb-6 text-white text-lg leading-relaxed">${personalized} Sur le secteur de ${cityName}, nous garantissons une intervention rapide pour la catégorie ${serviceName}.</p>`;

      // No image injection needed here as per user request to remove them from all pages
    });
    textBlocks.push(blockContent);
  }

  return textBlocks;
}
