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
    "Le bouche-à-oreille et les milliers de clients satisfaits témoignent de notre intégrité. Les syndics de copropriété, les commerces de proximité et les particuliers nous font confiance pour leur contrat de maintenance annuelle. Outre l'urgence, c'est l'entretien préventif qui assure une longévité maximale à vos installations et vous évite les mauvaises surprises financières à long terme."
];

export function buildLongClusterText(serviceName: string, cityName: string): string[] {
    const textBlocks: string[] = [];
    
    // Multiply the templates to create a massive wall of structured text.
    // For 5000 words, we need about 40x thick paragraphs, ~125 words each.
    for (let i = 0; i < 6; i++) {
        textBlocks.push(`<h3 class="text-3xl font-bold mb-4 mt-8">Expertise en ${serviceName} à ${cityName}</h3>`);
        let blockContent = "";
        paragraphsTemplates.forEach((p, idx) => {
            const personalized = p
                .replace(/urgences/g, `urgences en ${serviceName}`)
                .replace(/diagnostic/g, `diagnostic de ${serviceName}`)
                .replace(/locaux/g, `locaux situés à ${cityName}`);
            blockContent += `<p class="mb-4 text-white">${personalized} En agissant sur le secteur de ${cityName}, nous nous assurons que notre intervention en ${serviceName} soit la plus rapide possible pour préserver vos infrastructures.</p>`;
            
            // Inject images every few paragraphs
            if (idx === 1) {
              blockContent += `
                <div class="rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-8 h-64 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=800&auto=format&fit=crop" 
                        alt="Expertise ${serviceName}" 
                        class="w-full h-full object-cover" 
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>`;
            }
            if (idx === 3) {
              blockContent += `
                <div class="rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-8 h-64 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" 
                        alt="Intervention ${serviceName}" 
                        class="w-full h-full object-cover" 
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>`;
            }
        });
        textBlocks.push(blockContent);
    }
    
    return textBlocks;
}
