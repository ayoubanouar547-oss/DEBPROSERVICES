import { Wrench, Flame, Droplets, Zap, Wind, Truck, Home } from 'lucide-react';

export const services = [
  {
    id: 'renovation',
    slug: 'renovation-maison',
    title: 'Rénovation',
    icon: Home,
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    description: 'DEB PRO SERVICES réalise tous vos projets de rénovation de maison et appartement en Belgique. De la rénovation complète à la modernisation de votre salle de bain avec douche italienne, nos techniciens agréés vous garantissent un travail soigné, durable et au meilleur prix.',
    features: ['Rénovation complète', 'Douche italienne sur mesure', 'Aménagement intérieur', 'Devis gratuit'],
    subServices: [
      { slug: 'renovation-salle-de-bain-douche-italienne', title: 'Salle de Bain & Douche Italienne', desc: 'Conception et installation de douches italiennes modernes et salles de bain clés en main.', imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop' },
      { slug: 'renovation-cuisine-sur-mesure', title: 'Rénovation de Cuisine', desc: 'Modernisation complète de votre cuisine : plomberie, électricité, mobilier et finitions.', imageUrl: 'https://images.unsplash.com/photo-1556911220-e15595b6a281?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'renovation-totale-maison-appartement', title: 'Rénovation Totale', desc: 'Remise à neuf complète de votre habitation, appartement ou surface commerciale.', imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop' },
      { slug: 'pose-carrelage-et-revetement-sol', title: 'Carrelage & Revêtements de Sol', desc: 'Pose de carrelage, parquet et révêtements modernes pour toutes vos pièces.', imageUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'peinture-et-plafonnage-interieur', title: 'Peinture & Plafonnage', desc: 'Travaux de peinture, plafonnage et finitions intérieures de haute qualité.', imageUrl: 'https://images.unsplash.com/photo-1562663474-6cbb3fee4c39?q=80&w=1974&auto=format&fit=crop' },
      { slug: 'isolation-et-cloisons-gyproc', title: 'Isolation & Cloisons', desc: 'Amélioration thermique et acoustique, pose de cloisons Gyproc et faux plafonds.', imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop' }
    ],
    color: {
      bg: 'bg-indigo-500/20', text: 'text-indigo-400', border: 'border-indigo-500/30', glow: 'bg-indigo-500'
    },
    testimonial: {
      text: "La rénovation de notre salle de bain est une réussite totale. La douche italienne est sublime !",
      author: "Marie L., Namur"
    },
    faqs: [
      { question: "Combien de temps faut-il pour rénover une salle de bain ?", answer: "Une rénovation complète de salle de bain prend généralement entre 10 et 15 jours de travail, selon l'ampleur des travaux." },
      { question: "Est-ce que vous gérez la plomberie et l'électricité lors de la rénovation ?", answer: "Oui, DEB PRO SERVICES est une entreprise multiservice. Nous gérons tout de A à Z : plomberie, électricité, carrelage et plafonnage." }
    ]
  },
  {
    id: 'plomberie',
    slug: 'plomberie',
    title: 'Plomberie',
    icon: Wrench,
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    description: 'Expert en plomberie en Belgique disponible 24h/24. Une fuite d\'eau sous votre évier ? Un robinet qui goutte ou une chasse d\'eau à réparer ? DEB PRO SERVICES propose des services de plomberie complets : de la recherche de fuite non destructive au remplacement de votre boiler ou chauffe-eau. Nos plombiers agréés vous assurent une intervention rapide et durable au meilleur prix.',
    features: ['Réparation de fuite d\'eau ultra-rapide', 'Installation de sanitaires et robinets', 'Dépannage chauffe-eau & boiler', 'Mise en conformité plomberie'],
    subServices: [
      { slug: 'recherche-et-reparation-de-fuite-d-eau', title: 'Recherche et Réparation de Fuite d\'Eau', desc: 'Détection non destructive et colmatage rapide de toutes fuites.', imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'installation-sanitaire-et-robinetterie', title: 'Installation Sanitaire et Robinetterie', desc: 'Pose de WC, lavabos, douches, baignoires et robinetterie moderne.', imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0739?q=80&w=1974&auto=format&fit=crop' },
      { slug: 'remplacement-chauffe-eau-et-boiler', title: 'Remplacement Chauffe-eau et Boiler', desc: 'Dépannage and installation de chauffe-eau électrique ou thermodynamique.', imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca1f96d?q=80&w=2070&auto=format&fit=crop' }
    ],
    color: {
      bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30', glow: 'bg-blue-500'
    },
    testimonial: {
      text: "Fuite d'eau réparée en moins d'une heure un dimanche soir. Service impeccable et très pro.",
      author: "Thomas D., Bruxelles"
    },
    faqs: [
      { question: "Combien coûte un plombier d'urgence en Belgique ?", answer: "Pour un dépannage urgent, le tarif de base se situe entre 85€ et 150€ selon l'heure d'intervention. Un devis fixe est fourni avant chaque intervention." },
      { question: "Proposez-vous une recherche de fuite sans casse ?", answer: "Oui, nous utilisons des caméras thermiques et des détecteurs acoustiques pour localiser les fuites avec précision sans endommager vos murs." }
    ]
  },
  {
    id: 'debouchage',
    slug: 'debouchage-canalisation',
    title: 'Débouchage',
    icon: Droplets,
    imageUrl: 'https://images.unsplash.com/photo-1590425126430-891967262176?q=80&w=2070&auto=format&fit=crop',
    description: 'Débouchage canalisation en Belgique 24h/24. Vous faites face à un WC bouché, un évier qui ne s\'écoule plus ou des égouts saturés ? DEB PRO SERVICES intervient rapidement, 7j/7, avec furet électrique et hydrocureur haute pression. Prix transparent : fini les surprises sur le coût d\'un débouchage ! Que vous soyez locataire ou propriétaire, nous vous conseillons sur qui doit payer l\'intervention.',
    features: ['Débouchage WC & Évier au furet', 'Curage égouts haute pression', 'Inspection caméra HD', 'Élimination des odeurs'],
    subServices: [
      { slug: 'debouchage-wc-toilettes', title: 'Débouchage WC et Toilettes', desc: 'Intervention d\'urgence pour déboucher vos toilettes bloquées avec déboucheur professionnel.', imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1978&auto=format&fit=crop' },
      { slug: 'debouchage-egout-et-canalisations', title: 'Débouchage Égout et Canalisations', desc: 'Curage haute pression pour les égouts et canalisations principales de maison.', imageUrl: 'https://images.unsplash.com/photo-1620629701460-729fd6516a24?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'debouchage-evier-et-lavabo', title: 'Débouchage Évier et Lavabo', desc: 'Élimination des bouchons de graisse dans vos éviers de cuisine et lavabos.', imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'inspection-camera-canalisation', title: 'Inspection Caméra Canalisation', desc: 'Vidéo HD pour trouver l\'origine exacte des bouchons et vérifier l\'état des tuyaux.', imageUrl: 'https://images.unsplash.com/photo-1581092921461-7d15ce49a65d?q=80&w=2070&auto=format&fit=crop' }
    ],
    color: {
      bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30', glow: 'bg-cyan-500'
    },
    testimonial: {
      text: "WC débouché très proprement malgré la difficulté. Le technicien a utilisé une caméra, top !",
      author: "Sarah M., Liège"
    },
    faqs: [
      { question: "Combien coûte un débouchage de canalisation ?", answer: "Un débouchage standard au furet coûte environ 90€ à 180€. Pour un curage haute pression ou une inspection caméra, un devis spécifique est établi." },
      { question: "Qui doit payer le débouchage : locataire ou propriétaire ?", answer: "En règle générale, le débouchage lié à l'entretien courant est à charge du locataire. S'il s'agit d'un problème structurel ou de vétusté, c'est au propriétaire de payer." }
    ]
  },
  {
    id: 'chauffage',
    slug: 'chauffage',
    title: 'Chauffage',
    icon: Flame,
    imageUrl: 'https://images.unsplash.com/photo-1621238466107-16726e63289a?q=80&w=1974&auto=format&fit=crop',
    description: 'Besoin d\'un chauffagiste agréé en Belgique ? Qu\'il s\'agisse d\'un dépannage chaudière urgent, d\'un entretien obligatoire de chaudière gaz ou mazout, ou de l\'installation d\'un nouveau système de chauffage à condensation, nous sommes là 24h/24. Maximisez votre confort thermique et réduisez votre facture d\'énergie avec nos solutions haute performance.',
    features: ['Entretien chaudière (Gaz / Mazout)', 'Dépannage chaudière urgent 24/7', 'Remplacement et nouvelle installation', 'Contrôle et purge radiateurs'],
    subServices: [
      { slug: 'depannage-chaudiere', title: 'Dépannage Chaudière', desc: 'Réparation d\'urgence de votre chaudière en panne.', imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'entretien-chaudiere-gaz-mazout', title: 'Entretien Chaudière', desc: 'Entretien légal et détartrage de vos installations de chauffage.', imageUrl: 'https://images.unsplash.com/photo-1544724569-5f546fa66221?q=80&w=1974&auto=format&fit=crop' },
      { slug: 'installation-nouveau-chauffage', title: 'Installation Nouveau Chauffage', desc: 'Pose de chaudières à condensation haute performance.', imageUrl: 'https://images.unsplash.com/photo-1527192491265-7e15c65f1dee?q=80&w=2070&auto=format&fit=crop' }
    ],
    color: {
      bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30', glow: 'bg-orange-500'
    },
    testimonial: {
      text: "Chaudière réparée le jour même. Chauffagiste très compétent et prix honnête.",
      author: "Jean P., Charleroi"
    },
    faqs: [
      { question: "L'entretien de la chaudière est-il obligatoire en Belgique ?", answer: "Oui, l'entretien est obligatoire tous les 2 ans pour les chaudières à gaz et chaque année pour les chaudières au mazout en Belgique." },
      { question: "Quels sont les signes d'une chaudière en panne ?", answer: "Baisse de pression, bruits inhabituels, eau tiède ou radiateurs froids sont des signes nécessitant l'intervention d'un chauffagiste." }
    ]
  },
  {
    id: 'gaz',
    slug: 'gaz',
    title: 'Gaz',
    icon: Flame,
    imageUrl: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=1974&auto=format&fit=crop',
    description: 'Vous suspectez une fuite de gaz ou avez besoin d\'une installation gaz conforme aux normes belges ? Nos techniciens certifiés CERGA interviennent rapidement pour assurer votre sécurité.',
    features: ['Détection fuite de gaz', 'Mise en conformité', 'Raccordement appareils', 'Attestation de sécurité'],
    subServices: [
      { slug: 'detection-fuite-de-gaz', title: 'Détection Fuite de Gaz', desc: 'Intervention ultra-rapide with détecteurs de précision pour sécuriser et colmater les fuites.', imageUrl: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'mise-en-conformite-gaz', title: 'Mise en Conformité Gaz', desc: 'Mettez votre installation aux normes CERGA pour obtenir votre attestation d\'ouverture de compteur.', imageUrl: 'https://images.unsplash.com/photo-1517420829317-a0684f00155b?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'raccordement-gaz', title: 'Raccordement Gaz', desc: 'Branchement sécurisé de vos appareils (cuisinière, four, chaudière) avec test d\'étanchéité.', imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=2070&auto=format&fit=crop' }
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
    title: 'Gaz Naturel Comprimé',
    icon: Flame,
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2081&auto=format&fit=crop',
    description: 'Services spécialisés pour les installations au Gaz Naturel Comprimé (GNC). Nos experts agréés assurent l\'installation, l\'entretien et la mise aux normes de vos systèmes GNC en toute sécurité.',
    features: ['Installation système GNC', 'Maintenance préventive', 'Contrôle d\'étanchéité', 'Certification conformité'],
    subServices: [
      { slug: 'installation-gnc', title: 'Installation Système GNC', desc: 'Conception et pose de nouvelles installations au gaz naturel comprimé.', imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'entretien-controle-gnc', title: 'Entretien et Contrôle GNC', desc: 'Maintenance régulière et vérification de la sécurité de vos équipements.', imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'depannage-urgence-gnc', title: 'Dépannage d\'Urgence GNC', desc: 'Intervention rapide on les systèmes GNC présentant des anomalies.', imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop' }
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
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2071&auto=format&fit=crop',
    description: 'Panne de courant totale, court-circuit ou besoin de mise en conformité AREI ? Nos électriciens qualifiés interviennent partout en Belgique pour sécuriser votre installation. Du remplacement du tableau électrique à la pose de nouvelles prises, DEB PRO SERVICES garantit des travaux électriques certifiés et sûrs.',
    features: ['Dépannage panne de courant 24/7', 'Mise en conformité électrique AREI', 'Remplacement de tableau électrique', 'Installation éclairage et prises'],
    subServices: [
      { slug: 'depannage-panne-electrique', title: 'Dépannage Panne Électrique', desc: 'Remise en route de l\'électricité après une coupure ou un court-circuit.', imageUrl: 'https://images.unsplash.com/photo-1558444479-c8482933074c?q=80&w=1974&auto=format&fit=crop' },
      { slug: 'mise-en-conformite-electrique-arei', title: 'Mise en Conformité AREI', desc: 'Préparation et mise aux normes pour le contrôle électrique.', imageUrl: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'remplacement-tableau-electrique', title: 'Remplacement Tableau Électrique', desc: 'Changement de coffret et ajout de disjoncteurs différentiels.', imageUrl: 'https://images.unsplash.com/photo-1610473068565-9cc396739665?q=80&w=2070&auto=format&fit=crop' }
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
    imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop',
    description: 'Installation, entretien et dépannage de tous systèmes de climatisation en Belgique. Nos techniciens certifiés F-Gas interviennent pour les particuliers et professionnels.',
    features: ['Installation split', 'Entretien annuel', 'Recharge gaz', 'Réparation compresseur'],
    subServices: [
      { slug: 'installation-climatisation-pompe-a-chaleur', title: 'Installation Climatisation et PAC', desc: 'Pose de clim réversible et pompes à chaleur.', imageUrl: 'https://images.unsplash.com/photo-1599933333333-b54f49494949?q=80&w=1974&auto=format&fit=crop' },
      { slug: 'recharge-gaz-climatisation', title: 'Recharge Gaz Climatisation', desc: 'Remplissage de liquide frigorigène et contrôle de pression.', imageUrl: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'depannage-climatiseur', title: 'Dépannage Climatiseur', desc: 'Réparation de clim qui coule ou qui ne souffle plus froid.', imageUrl: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2070&auto=format&fit=crop' }
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
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    description: 'Vidange fosse septique et entretien de micro-station en Belgique. Intervention rapide avec camion hydrocureur 24h/24. Qu\'il s\'agisse d\'un pompage urgent, d\'un curage d\'égouts ou du nettoyage d\'un bac à graisse pour restaurant, nous proposons des tarifs compétitifs. Nos experts vous guident également sur qui doit payer la vidange entre locataire et propriétaire.',
    features: ['Vidange fosse septique urgente', 'Nettoyage bac à graisse pro', 'Entretien micro-station épuration', 'Curage et débouchage égouts'],
    subServices: [
      { slug: 'pompage-et-vidange-fosse-septique', title: 'Pompage et Vidange Fosse Septique', desc: 'Vidéange complète par camion pompe.', imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop' },
      { slug: 'nettoyage-bac-a-graisse', title: 'Nettoyage Bac à Graisse', desc: 'Entretien de dégraisseur pour restaurants et professionnels.', imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=1978&auto=format&fit=crop' },
      { slug: 'entretien-micro-station-epuration', title: 'Entretien Micro-station', desc: 'Maintenance préventive de vos stations d\'épuration autonomes.', imageUrl: 'https://images.unsplash.com/photo-1581092921461-7d15ce49a65d?q=80&w=2070&auto=format&fit=crop' }
    ],
    color: {
      bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30', glow: 'bg-green-500'
    },
    testimonial: {
      text: "Vidange de fosse septique rapide et efficace. Pas d'odeurs après l'intervention.",
      author: "Benoît R., Tournai"
    },
    faqs: [
      { question: "Quelle est la fréquence pour vider une fosse septique ?", answer: "Il est conseillé de vider sa fosse septique tous les 4 à 5 ans environ, ou dès que les boues atteignent 50% du volume de la fosse." },
      { question: "Quel est le prix d'une vidange de fosse septique ?", answer: "Le tarif pour une vidange standard varie entre 150€ et 300€ selon le volume à pomper et la distance de stationnement du camion." }
    ]
  }
];
