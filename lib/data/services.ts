import { Wrench, Flame, Droplets, Zap, Wind, Truck, Home } from 'lucide-react';

export const services = [
  {
    id: 'renovation',
    slug: 'renovation-maison',
    title: 'Rénovation',
    icon: Home,
    imageUrl: '/regenerated_image_1777316391207.png',
    description: 'DEB PRO SERVICES réalise tous vos projets de rénovation de maison et appartement en Belgique. De la rénovation complète à la modernisation de votre salle de bain avec douche italienne, nos techniciens agréés vous garantissent un travail soigné, durable et au meilleur prix.',
    features: ['Rénovation complète', 'Douche italienne sur mesure', 'Aménagement intérieur', 'Devis gratuit'],
    subServices: [
      { slug: 'renovation-salle-de-bain-douche-italienne', title: 'Salle de Bain & Douche Italienne', desc: 'Conception et installation de douches italiennes modernes et salles de bain clés en main.', imageUrl: '/regenerated_image_1777403020296.png' },
      { slug: 'renovation-cuisine-sur-mesure', title: 'Rénovation de Cuisine', desc: 'Modernisation complète de votre cuisine : plomberie, électricité, mobilier et finitions.', imageUrl: '/regenerated_image_1777403021212.png' },
      { slug: 'renovation-totale-maison-appartement', title: 'Rénovation Totale', desc: 'Remise à neuf complète de votre habitation, appartement ou surface commerciale.', imageUrl: '/regenerated_image_1777403022204.png' },
      { slug: 'pose-carrelage-et-revetement-sol', title: 'Carrelage & Revêtements de Sol', desc: 'Pose de carrelage, parquet et révêtements modernes pour toutes vos pièces.', imageUrl: '/regenerated_image_1777403023028.png' },
      { slug: 'peinture-et-plafonnage-interieur', title: 'Peinture & Plafonnage', desc: 'Travaux de peinture, plafonnage et finitions intérieures de haute qualité.', imageUrl: '/regenerated_image_1777403024435.png' },
      { slug: 'isolation-et-cloisons-gyproc', title: 'Isolation & Cloisons', desc: 'Amélioration thermique et acoustique, pose de cloisons Gyproc et faux plafonds.', imageUrl: '/regenerated_image_1777403025501.png' }
    ],
    color: {
      bg: 'bg-indigo-500/20', text: 'text-indigo-400', border: 'border-indigo-500/30', glow: 'bg-indigo-500'
    },
    testimonial: {
      text: "La rénovation de notre salle de bain est une réussite totale. La douche italienne est sublime !",
      author: "Marie L., Namur"
    }
  },
  {
    id: 'plomberie',
    slug: 'plomberie',
    title: 'Plomberie',
    icon: Wrench,
    imageUrl: '/regenerated_image_1777316390260.png',
    description: 'Vous faites face à une canalisation bouchée, une fuite d\'eau ou un problème de plomberie urgent ? DEB PRO SERVICES intervient rapidement chez vous, 24h/24 et 7j/7, dans toute la Belgique. Nos plombiers certifiés disposent des équipements les plus modernes pour réparer vos fuites et résoudre tout problème de plomberie, quelle que soit la complexité.',
    features: ['Recherche et réparation de fuites', 'Remplacement de robinetterie', 'Installation sanitaire', 'Dépannage chauffe-eau'],
    subServices: [
      { slug: 'recherche-et-reparation-de-fuite-d-eau', title: 'Recherche et Réparation de Fuite d\'Eau', desc: 'Détection non destructive et colmatage rapide de toutes fuites.', imageUrl: '/regenerated_image_1777412978596.png' },
      { slug: 'installation-sanitaire-et-robinetterie', title: 'Installation Sanitaire et Robinetterie', desc: 'Pose de WC, lavabos, douches, baignoires et robinetterie moderne.', imageUrl: '/regenerated_image_1777412979547.png' },
      { slug: 'remplacement-chauffe-eau-et-boiler', title: 'Remplacement Chauffe-eau et Boiler', desc: 'Dépannage and installation de chauffe-eau électrique ou thermodynamique.', imageUrl: '/regenerated_image_1777406464737.png' }
    ],
    color: {
      bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30', glow: 'bg-blue-500'
    },
    testimonial: {
      text: "Fuite d'eau réparée en moins d'une heure un dimanche soir. Service impeccable et très pro.",
      author: "Thomas D., Bruxelles"
    }
  },
  {
    id: 'debouchage',
    slug: 'debouchage-canalisation',
    title: 'Débouchage',
    icon: Droplets,
    imageUrl: '/regenerated_image_1777411808057.png',
    description: 'Vous faites face à une canalisation bouchée ? DEB PRO SERVICES intervient rapidement chez vous, 24h/24 et 7j/7, dans toute la Belgique. Nos plombiers disposent des équipements les plus modernes pour déboucher vos canalisations.',
    features: ['Débouchage haute pression', 'Inspection par caméra', 'Évacuation des mauvaises odeurs', 'Entretien préventif'],
    subServices: [
      { slug: 'debouchage-wc-toilettes', title: 'Débouchage WC et Toilettes', desc: 'Intervention d\'urgence pour déboucher vos toilettes bloquées.', imageUrl: '/regenerated_image_1777407078207.png' },
      { slug: 'debouchage-egout-et-canalisations', title: 'Débouchage Égout et Canalisations', desc: 'Curage haute pression pour les égouts et canalisations principales.', imageUrl: '/regenerated_image_1777407079232.png' },
      { slug: 'debouchage-evier-et-lavabo', title: 'Débouchage Évier et Lavabo', desc: 'Élimination des bouchons dans vos éviers de cuisine et lavabos.', imageUrl: '/regenerated_image_1777407080255.png' },
      { slug: 'inspection-camera-canalisation', title: 'Inspection Caméra Canalisation', desc: 'Diagnostic vidéo HD pour trouver l\'origine exacte des bouchons récurrents.', imageUrl: '/regenerated_image_1777407292666.png' }
    ],
    color: {
      bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'bg-cyan-500'
    },
    testimonial: {
      text: "WC débouché très proprement malgré la difficulté. Le technicien a utilisé une caméra, top !",
      author: "Sarah M., Liège"
    }
  },
  {
    id: 'chauffage',
    slug: 'chauffage',
    title: 'Chauffage',
    icon: Flame,
    imageUrl: '/regenerated_image_1777315741847.png',
    description: 'Votre chaudière tombe en panne en plein hiver ? Vos radiateurs ne chauffent plus ? DEB PRO SERVICES, votre chauffagiste agréé en Belgique, intervient en urgence pour le dépannage, l\'entretien et l\'installation de tous types de chaudières et systèmes de chauffage.',
    features: ['Entretien chaudière', 'Dépannage urgent 24/7', 'Remplacement chaudière', 'Purge des radiateurs'],
    subServices: [
      { slug: 'depannage-chaudiere', title: 'Dépannage Chaudière', desc: 'Réparation d\'urgence de votre chaudière en panne.', imageUrl: '/regenerated_image_1777407664530.png' },
      { slug: 'entretien-chaudiere-gaz-mazout', title: 'Entretien Chaudière', desc: 'Entretien légal et détartrage de vos installations de chauffage.', imageUrl: '/regenerated_image_1777407665466.png' },
      { slug: 'installation-nouveau-chauffage', title: 'Installation Nouveau Chauffage', desc: 'Pose de chaudières à condensation haute performance.', imageUrl: '/regenerated_image_1777407666286.png' }
    ],
    color: {
      bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30', glow: 'bg-orange-500'
    },
    testimonial: {
      text: "Chaudière réparée le jour même. Chauffagiste très compétent et prix honnête.",
      author: "Jean P., Charleroi"
    }
  },
  {
    id: 'gaz',
    slug: 'gaz',
    title: 'Gaz',
    icon: Flame,
    imageUrl: '/regenerated_image_1777316388823.png',
    description: 'Vous suspectez une fuite de gaz ou avez besoin d\'une installation gaz conforme aux normes belges ? Nos techniciens certifiés CERGA interviennent rapidement pour assurer votre sécurité.',
    features: ['Détection fuite de gaz', 'Mise en conformité', 'Raccordement appareils', 'Attestation de sécurité'],
    subServices: [
      { slug: 'detection-fuite-de-gaz', title: 'Détection Fuite de Gaz', desc: 'Intervention ultra-rapide pour sécuriser et colmater les fuites.' },
      { slug: 'mise-en-conformite-gaz', title: 'Mise en Conformité Gaz', desc: 'Mettez votre installation aux normes CERGA pour votre sécurité.' },
      { slug: 'raccordement-gaz', title: 'Raccordement Gaz', desc: 'Branchement sécurisé de vos appareils (cuisinière, four).' }
    ],
    color: {
      bg: 'bg-blue-600/20', text: 'text-blue-500', border: 'border-blue-600/30', glow: 'bg-blue-600'
    },
    testimonial: {
      text: "Suspicion de fuite de gaz gérée en 30 min. Une équipe qui prend la sécurité à cœur.",
      author: "Lucie V., Mons"
    }
  },
  {
    id: 'cng',
    slug: 'gaz-naturel-comprime',
    title: 'Gaz Naturel Comprimé (GNC)',
    icon: Flame, // Using Flame as a suitable icon for natural gas
    imageUrl: '/regenerated_image_1777316389611.png',
    description: 'Services spécialisés pour les installations au Gaz Naturel Comprimé (GNC). Nos experts agréés assurent l\'installation, l\'entretien et la mise aux normes de vos systèmes GNC en toute sécurité.',
    features: ['Installation système GNC', 'Maintenance préventive', 'Contrôle d\'étanchéité', 'Certification conformité'],
    subServices: [
      { slug: 'installation-gnc', title: 'Installation Système GNC', desc: 'Conception et pose de nouvelles installations au gaz naturel comprimé.' },
      { slug: 'entretien-controle-gnc', title: 'Entretien et Contrôle GNC', desc: 'Maintenance régulière et vérification de la sécurité de vos équipements.' },
      { slug: 'depannage-urgence-gnc', title: 'Dépannage d\'Urgence GNC', desc: 'Intervention rapide on les systèmes GNC présentant des anomalies.' }
    ],
    color: {
      bg: 'bg-emerald-500/20', text: 'text-emerald-500', border: 'border-emerald-500/30', glow: 'bg-emerald-500'
    },
    testimonial: {
      text: "Installation GNC conforme et sécurisée. Très satisfaite du suivi technique.",
      author: "Hélène B., Wavre"
    }
  },
  {
    id: 'electricite',
    slug: 'electricite',
    title: 'Électricité',
    icon: Zap,
    imageUrl: '/regenerated_image_1777316385571.png',
    description: 'Panne électrique, tableau défectueux, installation non conforme ? Nos électriciens agréés AREI interviennent pour tous vos travaux électriques en Belgique. Dépannage d\'urgence 24h/24.',
    features: ['Recherche de panne', 'Mise en conformité CEBI', 'Remplacement tableau', 'Éclairage et prises'],
    subServices: [
      { slug: 'depannage-panne-electrique', title: 'Dépannage Panne Électrique', desc: 'Remise en route de l\'électricité après une coupure ou un court-circuit.' },
      { slug: 'mise-en-conformite-electrique-arei', title: 'Mise en Conformité AREI', desc: 'Préparation et mise aux normes pour le contrôle électrique.' },
      { slug: 'remplacement-tableau-electrique', title: 'Remplacement Tableau Électrique', desc: 'Changement de coffret et ajout de disjoncteurs différentiels.' }
    ],
    color: {
      bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/30', glow: 'bg-yellow-500'
    },
    testimonial: {
      text: "Remplacement de mon tableau électrique en urgence. Travail propre et électricien sympa.",
      author: "Marc O., Anvers"
    }
  },
  {
    id: 'climatisation',
    slug: 'climatisation',
    title: 'Climatisation',
    icon: Wind,
    imageUrl: '/regenerated_image_1777316386639.png',
    description: 'Installation, entretien et dépannage de tous systèmes de climatisation en Belgique. Nos techniciens certifiés F-Gas interviennent pour les particuliers et professionnels.',
    features: ['Installation split', 'Entretien annuel', 'Recharge gaz', 'Réparation compresseur'],
    subServices: [
      { slug: 'installation-climatisation-pompe-a-chaleur', title: 'Installation Climatisation et PAC', desc: 'Pose de clim réversible et pompes à chaleur.' },
      { slug: 'recharge-gaz-climatisation', title: 'Recharge Gaz Climatisation', desc: 'Remplissage de liquide frigorigène et contrôle de pression.' },
      { slug: 'depannage-climatiseur', title: 'Dépannage Climatiseur', desc: 'Réparation de clim qui coule ou qui ne souffle plus froid.' }
    ],
    color: {
      bg: 'bg-sky-500/20', text: 'text-sky-400', border: 'border-sky-500/30', glow: 'bg-sky-500'
    },
    testimonial: {
      text: "Climatisation installée juste avant la canicule. Quel soulagement, merci pour la rapidité !",
      author: "Sophie G., Louvain"
    }
  },
  {
    id: 'fosse',
    slug: 'vidange-fosse-septique',
    title: 'Vidange Fosse',
    icon: Truck,
    imageUrl: '/regenerated_image_1777316387949.png',
    description: 'Vidange, entretien et installation de fosses septiques en Belgique. Intervention rapide avec camion hydrocureur. Conforme aux normes.',
    features: ['Vidange urgente', 'Nettoyage bac à graisse', 'Débouchage égouts', 'Traitement des déchets'],
    subServices: [
      { slug: 'pompage-et-vidange-fosse-septique', title: 'Pompage et Vidange Fosse Septique', desc: 'Vidéange complète par camion pompe.' },
      { slug: 'nettoyage-bac-a-graisse', title: 'Nettoyage Bac à Graisse', desc: 'Entretien de dégraisseur pour restaurants et professionnels.' },
      { slug: 'entretien-micro-station-epuration', title: 'Entretien Micro-station', desc: 'Maintenance préventive de vos stations d\'épuration autonomes.' }
    ],
    color: {
      bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', glow: 'bg-green-500'
    },
    testimonial: {
      text: "Vidange de fosse septique rapide et efficace. Pas d'odeurs après l'intervention.",
      author: "Benoît R., Tournai"
    }
  }
];
