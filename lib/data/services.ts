import { Wrench, Flame, Droplets, Zap, Wind, Truck } from 'lucide-react';

export const services = [
  {
    id: 'plomberie',
    slug: 'plomberie',
    title: 'Plomberie',
    icon: Wrench,
    imageUrl: 'https://debouchageexpress24hh.odoo.com/web/image/3036-c57de4e7/image.png?q=80&w=1000&auto=format&fit=crop',
    description: 'Vous faites face à une canalisation bouchée, une fuite d\'eau ou un problème de plomberie urgent ? DEB PRO SERVICES intervient rapidement chez vous, 24h/24 et 7j/7, dans toute la Belgique. Nos plombiers certifiés disposent des équipements les plus modernes pour réparer vos fuites et résoudre tout problème de plomberie, quelle que soit la complexité.',
    contentHTML: `
      <p>La <strong>plomberie</strong> est le cœur même du confort de votre habitation. Qu'il s'agisse d'une fuite d'eau invisible qui fait gonfler vos factures, d'une rupture de canalisation soudaine ou simplement de l'envie de moderniser vos installations sanitaires, notre équipe de <em>plombiers chauffagistes certifiés</em> intervient partout en Belgique. Nous mettons à votre disposition une expertise technique poussée pour un diagnostic précis et une résolution rapide, sans destruction inutile.</p>
      <p>Nos interventions couvrent l'intégralité du réseau d'eau de votre domicile :</p>
      <ul>
        <li><strong>Détection de fuites :</strong> Utilisation de méthodes non destructives (caméra thermique, gaz traceur, acoustique).</li>
        <li><strong>Réparation et colmatage :</strong> Remplacement de tuyauterie cuivre, PER, ou multicouche selon les normes sanitaires strictes.</li>
        <li><strong>Installation d'équipements :</strong> Pose de nouveaux WC classiques ou suspendus, douches à l'italienne, baignoires, et lavabos.</li>
        <li><strong>Robinetterie :</strong> Changement de mitigeurs, robinets thermostatiques et réducteurs de pression.</li>
      </ul>
      <p>Ne laissez pas un dégât des eaux détruire vos murs et vos sols. Nos artisans interviennent en urgence 24h/24. Avant chaque réparation, un devis clair et transparent vous est soumis. Travailler avec <strong>DEB PRO SERVICES</strong>, c'est l'assurance d'un travail soigné, de l'utilisation de pièces certifiées NF/Belgaqua et d'une garantie sur toutes nos installations.</p>
    `,
    features: ['Recherche et réparation de fuites', 'Remplacement de robinetterie', 'Installation sanitaire', 'Dépannage chauffe-eau'],
    subServices: [
      { slug: 'recherche-et-reparation-de-fuite-d-eau', title: 'Recherche et Réparation de Fuite d\'Eau', desc: 'Détection non destructive et colmatage rapide de toutes fuites.' },
      { slug: 'installation-sanitaire-et-robinetterie', title: 'Installation Sanitaire et Robinetterie', desc: 'Pose de WC, lavabos, douches, baignoires et robinetterie moderne.' },
      { slug: 'remplacement-chauffe-eau-et-boiler', title: 'Remplacement Chauffe-eau et Boiler', desc: 'Dépannage et installation de chauffe-eau électrique ou thermodynamique.' }
    ],
    color: {
      bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30', glow: 'bg-blue-500'
    }
  },
  {
    id: 'débouchage canalisation',
    slug: 'debouchage-canalisation',
    title: 'Débouchage',
    icon: Droplets,
    imageUrl: 'https://debouchageexpress24hh.odoo.com/web/image/3043-f5b47ef0/image.png?q=80&w=1000&auto=format&fit=crop',
    description: 'Vous faites face à une canalisation bouchée ? DEB PRO SERVICES intervient rapidement chez vous, 24h/24 et 7j/7, dans toute la Belgique. Nos plombiers disposent des équipements les plus modernes pour déboucher vos canalisations.',
    contentHTML: `
      <p>Un problème de <strong>canalisation bouchée</strong> peut rapidement paralyser la vie de votre foyer et provoquer le refoulement d'eaux usées nauséabondes. Spécialistes du <em>débouchage express en Belgique</em>, nos équipes utilisent une logistique lourde (camions hydrocureurs 400 bars) pour pulvériser n'importe quel bouchon, qu'il soit constitué de graisse, de calcaire, de papier ou d'une intrusion de racines dans vos égouts extérieurs.</p>
      <p>Nos techniques d'intervention pour un curage parfait de la tuyauterie :</p>
      <ul>
        <li><strong>Débouchage Haute Pression :</strong> Le nettoyage par hydrocurage garantit une restauration à blanc des parois de vos conduites, prévenant ainsi les engorgements futurs.</li>
        <li><strong>Passage de furet mécanique et électrique :</strong> La solution idéale pour les petits diamètres à l'intérieur de la maison (éviers, lavabos, baignoires).</li>
        <li><strong>Inspection vidéo par caméra endoscopique :</strong> Cet outil nous permet d'explorer l'intérieur de la conduite pour localiser la fissure, l'affaissement ou l'amas de déchets avec une précision chirurgicale avant de casser ou creuser quoi que ce soit.</li>
      </ul>
      <p>Des toilettes qui débordent en pleine nuit ? Pas de panique. Notre service de garde est prêt à se déplacer dans l'urgence. En éliminant radicalement les bouchons, nous supprimons non seulement les risques d'inondation mais également la prolifération bactérienne responsable des mauvaises odeurs dans la salle de bain ou la cuisine.</p>
    `,
    features: ['Débouchage haute pression', 'Inspection par caméra', 'Évacuation des mauvaises odeurs', 'Entretien préventif'],
    subServices: [
      { slug: 'debouchage-wc-toilettes', title: 'Débouchage WC et Toilettes', desc: 'Intervention d\'urgence pour déboucher vos toilettes bloquées.' },
      { slug: 'debouchage-egout-et-canalisations', title: 'Débouchage Égout et Canalisations', desc: 'Curage haute pression pour les égouts et canalisations principales.' },
      { slug: 'debouchage-evier-et-lavabo', title: 'Débouchage Évier et Lavabo', desc: 'Élimination des bouchons dans vos éviers de cuisine et lavabos.' },
      { slug: 'inspection-camera-canalisation', title: 'Inspection Caméra Canalisation', desc: 'Diagnostic vidéo HD pour trouver l\'origine exacte des bouchons récurrents.' }
    ],
    color: {
      bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'bg-cyan-500'
    }
  },
  {
    id: 'chauffage',
    slug: 'chauffage',
    title: 'Chauffage',
    icon: Flame,
    imageUrl: 'https://debouchageexpress24hh.odoo.com/web/image/3214-a1ab8a2e/image.png?q=80&w=400&auto=format&fit=crop',
    description: 'Votre chaudière tombe en panne en plein hiver ? Vos radiateurs ne chauffent plus ? DEB PRO SERVICES, votre chauffagiste agréé en Belgique, intervient en urgence pour le dépannage, l\'entretien et l\'installation de tous types de chaudières et systèmes de chauffage.',
    contentHTML: `
      <p>En plein hiver, le <strong>système de chauffage</strong> n'est pas un luxe, mais une nécessité absolue. En tant que chauffagistes experts certifiés G1/G2/L, nous intervenons sur toutes les marques de chaudières (Vaillant, Viessmann, Bulex, Junckers...) afin de sécuriser le chauffage et la production d'eau chaude de votre logement. Qu'il s'agisse d'un chauffage au gaz, au mazout ou d'une pompe à chaleur, notre savoir-faire s'étend à tous les dispositifs de thermique de l'habitat.</p>
      <p>Nos prestations complètes de chauffagiste incluent :</p>
      <ul>
        <li><strong>Le dépannage urgent de chaudière :</strong> Mise en sécurité, remplacement du circulateur (accélérateur), de la vanne 3 voies, du thermocouple, ou de la sonde sanitaire.</li>
        <li><strong>L'entretien obligatoire et légal :</strong> Une chaudière bien entretenue prolonge sa durée de vie et diminue vos factures d'énergie de 10% à 15%. Délivrance de l'attestation PEB officielle après intervention.</li>
        <li><strong>L'installation nouvelle génération :</strong> Remplacement de vos vieux appareils par des chaudières à condensation à Haut Rendement (HR+) subventionnées par la Région.</li>
        <li><strong>Réseau de radiateurs :</strong> Désembouage complet (hydrodynamique) pour améliorer l'échange de chaleur, purge et placement de vannes thermostatiques connectées.</li>
      </ul>
      <p>Si la chaudière se met en sécurité (voyant rouge), n'insistez pas, faites appel à nos professionnels. Nous réalisons une analyse méthodique de la combustion (taux de CO) pour préserver la sécurité de votre famille face au risque d'intoxication au monoxyde de carbone.</p>
    `,
    features: ['Entretien chaudière', 'Dépannage urgent 24/7', 'Remplacement chaudière', 'Purge des radiateurs'],
    subServices: [
      { slug: 'depannage-chaudiere', title: 'Dépannage Chaudière', desc: 'Réparation d\'urgence de votre chaudière en panne.' },
      { slug: 'entretien-chaudiere-gaz-mazout', title: 'Entretien Chaudière', desc: 'Entretien légal et détartrage de vos installations de chauffage.' },
      { slug: 'installation-nouveau-chauffage', title: 'Installation Nouveau Chauffage', desc: 'Pose de chaudières à condensation haute performance.' }
    ],
    color: {
      bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30', glow: 'bg-orange-500'
    }
  },
  {
    id: 'gaz',
    slug: 'gaz',
    title: 'Gaz',
    icon: Flame,
    imageUrl: 'https://debouchageexpress24hh.odoo.com/web/image/3546-e65b22f3/image.png?q=80&w=400&auto=format&fit=crop',
    description: 'Vous suspectez une fuite de gaz ou avez besoin d\'une installation gaz conforme aux normes belges ? Nos techniciens certifiés CERGA interviennent rapidement pour assurer votre sécurité.',
    contentHTML: `
      <p>L'utilisation domestique du <strong>gaz naturel ou propane</strong> demande une vigilance de tous les instants et surtout une installation totalement irréprochable. L'organisme CERGA régit les normes les plus strictes en matière de sécurité gazière en Belgique. DEB PRO SERVICES emploie des <em>techniciens agréés CERGA</em> capables de monter, vérifier et certifier l'ensemble de vos compteurs, conduites et appareils au gaz.</p>
      <p>Nos interventions principales sur les réseaux de gaz :</p>
      <ul>
        <li><strong>Détection et sécurisation des fuites de gaz :</strong> Un équipement de détection par sniffer électronique nous permet de trouver les micro-fuites invisibles, de couper l'alimentation et de colmater immédiatement.</li>
        <li><strong>Mise en conformité gaz et test d'étanchéité :</strong> Passage en revue de votre installation selon la norme NBN D51-003 pour l'obtention du certificat de conformité exigé pour l'ouverture d'un compteur par votre fournisseur d'énergie.</li>
        <li><strong>Modification de la tuyauterie :</strong> Pose de tubes PLT, cuivre renforcé, soudures sécurisées au joint argent, et remplacement de flexibles péremptés.</li>
        <li><strong>Raccordement d'appareils domestiques :</strong> Cuisinières au gaz, foyers ouverts, fours professionnels, et chauffe-eau instantanés.</li>
      </ul>
      <p>Si vous remarquez une odeur d'œufs pourris (mercaptan), ouvrez grand vos fenêtres, ne touchez à aucun interrupteur et contactez notre service de secours. Ne transigez jamais avec votre sécurité face à l'énergie gazière.</p>
    `,
    features: ['Détection fuite de gaz', 'Mise en conformité', 'Raccordement appareils', 'Attestation de sécurité'],
    subServices: [
      { slug: 'detection-fuite-de-gaz', title: 'Détection Fuite de Gaz', desc: 'Intervention ultra-rapide pour sécuriser et colmater les fuites.' },
      { slug: 'mise-en-conformite-gaz', title: 'Mise en Conformité Gaz', desc: 'Mettez votre installation aux normes CERGA pour votre sécurité.' },
      { slug: 'raccordement-gaz', title: 'Raccordement Gaz', desc: 'Branchement sécurisé de vos appareils (cuisinière, four).' }
    ],
    color: {
      bg: 'bg-blue-600/20', text: 'text-blue-500', border: 'border-blue-600/30', glow: 'bg-blue-600'
    }
  },
  {
    id: 'electricite',
    slug: 'electricite',
    title: 'Électricité',
    icon: Zap,
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
    description: 'Panne électrique, tableau défectueux, installation non conforme ? Nos électriciens agréés AREI interviennent pour tous vos travaux électriques en Belgique. Dépannage d\'urgence 24h/24.',
    contentHTML: `
      <p>La pérennité de votre <strong>système électrique</strong> détermine directement la sécurité contre l'incendie et la stabilité de tous vos appareils. Les techniciens électriciens chez DEB PRO SERVICES respectent à la lettre le <em>Règlement Général sur les Installations Électriques (RGIE/AREI)</em> pour garantir que ni l'électrocution, ni les surtensions, ne puissent toucher votre bien immobilier ou votre intégrité physique.</p>
      <p>La couverture de nos services électriques comporte :</p>
      <ul>
        <li><strong>Dépannage d'urgence lors d'une panne de courant :</strong> Isolation du circuit défectueux, repérage du court-circuit ou de la perte à la terre qui fait sauter votre disjoncteur général.</li>
        <li><strong>Réfection du coffret (Tableau électrique) :</strong> Mise aux normes de la boîte à fusibles, ajout de différentiels haute sensibilité (300mA en tête, 30mA pour salle de bain).</li>
        <li><strong>Mise à la terre :</strong> Fondement de la sécurité électrique, l'enfoncement de piquets et le raccordement de la boucle de terre pour dissiper le courant de défaut.</li>
        <li><strong>Mise en Conformité :</strong> Dessin des schémas unifilaires et des plans de position pour le passage du bureau de contrôle agréé lors d'une rénovation ou vente de maison.</li>
      </ul>
      <p>Qu'il faille tirer de nouveaux câbles encastrés XVB pour une nouvelle cuisine, installer un éclairage extérieur ou créer un système de domotique pour une gestion intelligente de votre consommation, confiez nous le tirage et la pose méticuleuse respectant toutes les normes de coulorisation des fils.</p>
    `,
    features: ['Recherche de panne', 'Mise en conformité CEBI', 'Remplacement tableau', 'Éclairage et prises'],
    subServices: [
      { slug: 'depannage-panne-electrique', title: 'Dépannage Panne Électrique', desc: 'Remise en route de l\'électricité après une coupure ou un court-circuit.' },
      { slug: 'mise-en-conformite-electrique-arei', title: 'Mise en Conformité AREI', desc: 'Préparation et mise aux normes pour le contrôle électrique.' },
      { slug: 'remplacement-tableau-electrique', title: 'Remplacement Tableau Électrique', desc: 'Changement de coffret et ajout de disjoncteurs différentiels.' }
    ],
    color: {
      bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30', glow: 'bg-yellow-500'
    }
  },
  {
    id: 'climatisation',
    slug: 'climatisation',
    title: 'Climatisation',
    icon: Wind,
    imageUrl: 'https://debouchageexpress24hh.odoo.com/web/image/3588-3c645e0c/image.png?q=80&w=400&auto=format&fit=crop',
    description: 'Installation, entretien et dépannage de tous systèmes de climatisation en Belgique. Nos techniciens certifiés F-Gas interviennent pour les particuliers et professionnels.',
    contentHTML: `
      <p>Les vagues de chaleur devenant plus fréquentes en Belgique, le conditionnement d'air n'est plus une option. Disposer d'une <strong>climatisation performante</strong> permet de purifier l'air de votre domicile tout en maintenant une température rafraîchissante. Pour pallier tous soucis de gaz frigorigène, tous nos frigoristes installateurs détiennent un <em>agrément environnemental européen (F-gas)</em>.</p>
      <p>Nous développons une assistance dédiée pour la fraîcheur de l'air :</p>
      <ul>
        <li><strong>Installation d'appareil réversible (Pompe à Chaleur Air-Air) :</strong> Choix entre Mono-Split, Multi-Split ou systèmes gainables invisibles. Parfait pour rafraîchir l'été, et chauffer l'hiver avec un coût électrique très bas.</li>
        <li><strong>Recharge de gaz de climatisation :</strong> Analyse des fuites avant remplissage en R32 ou R410A de très haute pureté afin de rétablir le froid.</li>
        <li><strong>Dépannage et réparation :</strong> Résolution du phénomène de "la clim qui coule l'intérieur" (généralement un bac à condensats bactériologiquement colmaté), des bruits étranges de ventilateur ou de compresseur calé.</li>
        <li><strong>L'entretien sanitaire de l'unité intérieure :</strong> Désinfection des filtres, pulvérisation fongicide dans la batterie pour éradiquer tout développement bactériologique ou de moisissure dans l'air soufflé de votre chambre.</li>
      </ul>
      <p>Améliorez votre qualité de vie et votre confort thermique. Faites appel à un expert pour une installation correctement dimensionnée et respectueuse de la couche d'ozone.</p>
    `,
    features: ['Installation split', 'Entretien annuel', 'Recharge gaz', 'Réparation compresseur'],
    subServices: [
      { slug: 'installation-climatisation-pompe-a-chaleur', title: 'Installation Climatisation et PAC', desc: 'Pose de clim réversible et pompes à chaleur.' },
      { slug: 'recharge-gaz-climatisation', title: 'Recharge Gaz Climatisation', desc: 'Remplissage de liquide frigorigène et contrôle de pression.' },
      { slug: 'depannage-climatiseur', title: 'Dépannage Climatiseur', desc: 'Réparation de clim qui coule ou qui ne souffle plus froid.' }
    ],
    color: {
      bg: 'bg-sky-500/20', text: 'text-sky-400', border: 'border-sky-500/30', glow: 'bg-sky-500'
    }
  },
  {
    id: 'fosse',
    slug: 'vidange-fosse-septique',
    title: 'Vidange Fosse',
    icon: Truck,
    imageUrl: 'https://debouchageexpress24hh.odoo.com/web/image/3032-d634dd37/image.png?q=80&w=400&auto=format&fit=crop',
    description: 'Vidange, entretien et installation de fosses septiques en Belgique. Intervention rapide avec camion hydrocureur. Conforme aux normes.',
    contentHTML: `
      <p>Le bon état de votre zone d'assainissement non collectif est primordial pour votre hygiène de l'air comme pour l'environnement. Nos professionnels de l'assainissement organisent la <strong>vidange de fosses septiques</strong>, de puits perdus ou de micro-stations avec la plus haute réactivité, en évitant les surverses désagréables dans le jardin ou dans les sanitaires.</p>
      <p>Nos capacités techniques pour le nettoyage complet du réseau d'eaux brunes/grises :</p>
      <ul>
        <li><strong>Pompage par camion vidangeur combiné :</strong> Absorption des boues épaissies et de la croûte lourde de la cuve, tout en conservant une quantité de bactéries saines afin de relancer le métabolisme de la fosse.</li>
        <li><strong>Nettoyage de bac à graisses :</strong> Absolument indispensable pour les restaurants (HORECA) et les industries. Nous décollons les amas gélatineux collés aux parois en un rien de temps.</li>
        <li><strong>Assainissement des tuyaux (Curage des réseaux de sortie) :</strong> Afin d'être certain que la fosse digère bien, l'évacuation des liquides vers un réseau communal ou un lit d’épandage doit être absolument nette sous la pression.</li>
        <li><strong>Centre de traitement agréé :</strong> Vous disposerez systématiquement d'un bordereau de suivi des déchets de la station d'épuration régionale. Ce document est légalement requis au regard des autorités environnementales.</li>
      </ul>
      <p>L'air rempli de drosophiles ou infesté d'effluves fétides n'est plus une fatalité. Comptez sur DEB PRO SERVICES pour un traitement urgent ou un contrat de maintenance périodique afin que l'engorgement ou le débordement des boues devienne de l'histoire ancienne.</p>
    `,
    features: ['Vidange urgente', 'Nettoyage bac à graisse', 'Débouchage égouts', 'Traitement des déchets'],
    subServices: [
      { slug: 'pompage-et-vidange-fosse-septique', title: 'Pompage et Vidange Fosse Septique', desc: 'Vidéange complète par camion pompe.' },
      { slug: 'nettoyage-bac-a-graisse', title: 'Nettoyage Bac à Graisse', desc: 'Entretien de dégraisseur pour restaurants et professionnels.' },
      { slug: 'entretien-micro-station-epuration', title: 'Entretien Micro-station', desc: 'Maintenance préventive de vos stations d\'épuration autonomes.' }
    ],
    color: {
      bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', glow: 'bg-green-500'
    }
  }
];
