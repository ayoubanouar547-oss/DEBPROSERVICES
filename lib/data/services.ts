import { Wrench, Flame, Droplets, Zap, Wind, Truck, Home, Sun, Camera, Hammer, Sparkles, Trees, Palette } from "lucide-react";

export type Service = typeof services[number];

export const services = [
  {
    id: "renovation",
    slug: "renovation-maison",
    title: "Rénovation",
    icon: Home,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4148-835ccca6/regenerated_image_1777316391207.jpg?height=600",
    description:
      "DEB PRO SERVICES réalise tous vos projets de rénovation de maison et appartement en Belgique. De la rénovation complète à la modernisation de votre salle de bain avec douche italienne, nos techniciens agréés vous garantissent un travail soigné, durable et au meilleur prix.",
    trustPoints: [
      { title: "Devis Détaillé Gratuit sous 48h", desc: "Visite technique sur site et chiffrage corps par corps sans engagement." },
      { title: "Tous Corps de Métier", desc: "Plomberie, électricité, carrelage, peinture — un seul interlocuteur pour tout le chantier." },
      { title: "Suivi de Chantier", desc: "Photos hebdomadaires et rapport d'avancement pour suivre votre rénovation à distance." },
      { title: "Garantie Décennale", desc: "Tous nos travaux de rénovation sont couverts par notre assurance décennale." },
    ],
    features: [
      "Rénovation complète",
      "Douche italienne sur mesure",
      "Aménagement intérieur",
      "Devis gratuit",
    ],
    subServices: [
      {
        slug: "renovation-salle-de-bain-douche-italienne",
        title: "Salle de Bain & Douche Italienne",
        desc: "Conception et installation de douches italiennes modernes et salles de bain clés en main.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4142-c15c278b/regenerated_image_1777403020296.png?height=600",
      },
      {
        slug: "renovation-cuisine-sur-mesure",
        title: "Rénovation de Cuisine",
        desc: "Modernisation complète de votre cuisine : plomberie, électricité, mobilier et finitions.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4141-72494ad2/regenerated_image_1777403021212.png?height=600",
      },
      {
        slug: "renovation-totale-maison-appartement",
        title: "Rénovation Totale",
        desc: "Remise à neuf complète de votre habitation, appartement ou surface commerciale.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4084-106136fe/regenerated_image_1777331518139.png?height=600",
      },
      {
        slug: "pose-carrelage-et-revetement-sol",
        title: "Carrelage & Revêtements de Sol",
        desc: "Pose de carrelage, parquet et révêtements modernes pour toutes vos pièces.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4081-9e2e3c24/RENOVATION_DOUCHE_ITALIEN_202604280034%20%281%29.jpeg?height=600",
      },
      {
        slug: "peinture-et-plafonnage-interieur",
        title: "Peinture & Plafonnage",
        desc: "Travaux de peinture, plafonnage et finitions intérieures de haute qualité.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4083-e1a8d1d4/regenerated_image_1777331518753.png?height=600",
      },
      {
        slug: "isolation-et-cloisons-gyproc",
        title: "Isolation & Cloisons",
        desc: "Amélioration thermique et acoustique, pose de cloisons Gyproc et faux plafonds.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4082-91b36bf5/regenerated_image_1777331519368.png?height=600",
      },
    ],
    color: {
      bg: "bg-indigo-500/20",
      text: "text-indigo-400",
      border: "border-indigo-500/30",
      glow: "bg-indigo-500",
    },
    testimonial: {
      text: "La rénovation de notre salle de bain est une réussite totale. La douche italienne est sublime !",
      author: "Marie L., Namur",
    },
    faqs: [
      {
        question: "Combien de temps faut-il pour rénover une salle de bain ?",
        answer:
          "Une rénovation complète de salle de bain prend généralement entre 10 et 15 jours de travail, selon l'ampleur des travaux.",
      },
      {
        question:
          "Est-ce que vous gérez la plomberie et l'électricité lors de la rénovation ?",
        answer:
          "Oui, DEB PRO SERVICES est une entreprise multiservice. Nous gérons tout de A à Z : plomberie, électricité, carrelage et plafonnage.",
      },
    ],
  },
  {
    id: "plomberie",
    slug: "plomberie",
    title: "Plomberie",
    icon: Wrench,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4146-3c23cecf/regenerated_image_1777316390260%20%284%29.png?height=600",
    description:
      "Expert en plomberie en Belgique disponible 24h/24. Une fuite d'eau sous votre évier ? Un robinet qui goutte ou une chasse d'eau à réparer ? DEB PRO SERVICES propose des services de plomberie complets : de la recherche de fuite non destructive au remplacement de votre boiler ou chauffe-eau. Nos plombiers agréés vous assurent une intervention rapide et durable au meilleur prix.",
    trustPoints: [
      { title: "Détection Non Destructive", desc: "Caméras thermiques et détecteurs acoustiques pour localiser les fuites sans casser les murs." },
      { title: "Intervention en 30 min", desc: "Nos plombiers agréés interviennent en moins de 30 minutes partout en Belgique." },
      { title: "Pièces en Stock", desc: "Nos véhicules embarquent les pièces les plus courantes pour résoudre la panne en une seule visite." },
      { title: "Garantie Étanchéité", desc: "Tous nos travaux de plomberie sont garantis. Satisfait ou on revient gratuitement." },
    ],
    features: [
      "Réparation de fuite d'eau ultra-rapide",
      "Installation de sanitaires et robinets",
      "Dépannage chauffe-eau & boiler",
      "Mise en conformité plomberie",
    ],
    subServices: [
      {
        slug: "recherche-et-reparation-de-fuite-d-eau",
        title: "Recherche et Réparation de Fuite d'Eau",
        desc: "Détection non destructive et colmatage rapide de toutes fuites.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3483-bcec1ca8/image.png?height=600",
      },
      {
        slug: "installation-sanitaire-et-robinetterie",
        title: "Installation Sanitaire et Robinetterie",
        desc: "Pose de WC, lavabos, douches, baignoires et robinetterie moderne.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4135-66eafd75/regenerated_image_1777406463918.png?height=600",
      },
      {
        slug: "remplacement-chauffe-eau-et-boiler",
        title: "Remplacement Chauffe-eau et Boiler",
        desc: "Dépannage and installation de chauffe-eau électrique ou thermodynamique.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3631-6a319b47/image.png?height=600",
      },
    ],
    color: {
      bg: "bg-blue-500/20",
      text: "text-blue-400",
      border: "border-blue-500/30",
      glow: "bg-blue-500",
    },
    testimonial: {
      text: "Fuite d'eau réparée en moins d'une heure un dimanche soir. Service impeccable et très pro.",
      author: "Thomas D., Bruxelles",
    },
    faqs: [
      {
        question: "Combien coûte un plombier d'urgence en Belgique ?",
        answer:
          "Pour un dépannage urgent, le tarif de base se situe entre 85€ et 150€ selon l'heure d'intervention. Un devis fixe est fourni avant chaque intervention.",
      },
      {
        question: "Proposez-vous une recherche de fuite sans casse ?",
        answer:
          "Oui, nous utilisons des caméras thermiques et des détecteurs acoustiques pour localiser les fuites avec précision sans endommager vos murs.",
      },
    ],
  },
  {
    id: "debouchage",
    slug: "debouchage-canalisation",
    title: "Débouchage",
    icon: Droplets,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4126-df5892ca/regenerated_image_1777411808057.png?height=600",
    description:
      "Débouchage canalisation en Belgique 24h/24. Vous faites face à un WC bouché, un évier qui ne s'écoule plus ou des égouts saturés ? DEB PRO SERVICES intervient rapidement, 7j/7, avec furet électrique et hydrocureur haute pression. Prix transparent : fini les surprises sur le coût d'un débouchage ! Que vous soyez locataire ou propriétaire, nous vous conseillons sur qui doit payer l'intervention.",
    trustPoints: [
      { title: "Hydrocureur 400 bars", desc: "Notre matériel haute pression dégage les canalisations les plus bouchées sans les endommager." },
      { title: "Caméra Endoscopique HD", desc: "Diagnostic précis par inspection vidéo en temps réel pour cibler l'intervention." },
      { title: "Débouchage Garanti", desc: "Résultat garanti ou on revient sans frais supplémentaires. Intervention en 45 minutes." },
      { title: "Disponible 24h/24", desc: "Urgence bouchon le week-end ou la nuit ? Nos équipes sont disponibles 7j/7 sans surcoût." },
    ],
    features: [
      "Débouchage WC & Évier au furet",
      "Curage égouts haute pression",
      "Inspection caméra HD",
      "Élimination des odeurs",
    ],
    subServices: [
      {
        slug: "debouchage-wc-toilettes",
        title: "Débouchage WC et Toilettes",
        desc: "Intervention d'urgence pour déboucher vos toilettes bloquées avec déboucheur professionnel.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3597-b28a5533/image.png?height=600",
      },
      {
        slug: "debouchage-egout-et-canalisations",
        title: "Débouchage Égout et Canalisations",
        desc: "Curage haute pression pour les égouts et canalisations principales de maison.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4132-a0f85ca2/regenerated_image_1777407079232.png?height=600",
      },
      {
        slug: "debouchage-evier-et-lavabo",
        title: "Débouchage Évier et Lavabo",
        desc: "Élimination des bouchons de graisse dans vos éviers de cuisine et lavabos.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4131-ebb17c2f/regenerated_image_1777407080255.png?height=600",
      },
      {
        slug: "inspection-camera-canalisation",
        title: "Inspection Caméra Canalisation",
        desc: "Vidéo HD pour trouver l'origine exacte des bouchons et vérifier l'état des tuyaux.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3898-b6c6d5c5/inspection%20par%20camera.jpeg?height=600",
      },
    ],
    color: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "bg-cyan-500",
    },
    testimonial: {
      text: "WC débouché très proprement malgré la difficulté. Le technicien a utilisé une caméra, top !",
      author: "Sarah M., Liège",
    },
    faqs: [
      {
        question: "Combien coûte un débouchage de canalisation ?",
        answer:
          "Un débouchage standard au furet coûte environ 90€ à 180€. Pour un curage haute pression ou une inspection caméra, un devis spécifique est établi.",
      },
      {
        question: "Qui doit payer le débouchage : locataire ou propriétaire ?",
        answer:
          "En règle générale, le débouchage lié à l'entretien courant est à charge du locataire. S'il s'agit d'un problème structurel ou de vétusté, c'est au propriétaire de payer.",
      },
    ],
  },
  {
    id: "chauffage",
    slug: "chauffage",
    title: "Chauffage",
    icon: Flame,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4149-39dd8a88/regenerated_image_1777315741847.png?height=600",
    description:
      "Besoin d'un chauffagiste agréé en Belgique ? Qu'il s'agisse d'un dépannage chaudière urgent, d'un entretien obligatoire de chaudière gaz ou mazout, ou de l'installation d'un nouveau système de chauffage à condensation, nous sommes là 24h/24. Maximisez votre confort thermique et réduisez votre facture d'énergie avec nos solutions haute performance.",
    trustPoints: [
      { title: "Techniciens Toutes Marques", desc: "Agréés Vaillant, Bulex, Viessmann, Bosch, Junkers, De Dietrich et Ariston." },
      { title: "Rapport d'Entretien Officiel", desc: "Attestation légale remise après chaque entretien annuel obligatoire en Belgique." },
      { title: "Pièces en Stock Embarquées", desc: "Réparation en une seule visite dans la grande majorité des pannes de chaudière." },
      { title: "Bilan Énergétique Gratuit", desc: "Évaluation gratuite de votre installation pour vous proposer la solution la plus économique." },
    ],
    features: [
      "Entretien chaudière (Gaz / Mazout)",
      "Dépannage chaudière urgent 24/7",
      "Remplacement et nouvelle installation",
      "Contrôle et purge radiateurs",
      "Installateur chauffagiste agréé",
    ],
    subServices: [
      {
        slug: "depannage-chaudiere",
        title: "Dépannage Chaudière",
        desc: "Réparation d'urgence de votre chaudière en panne.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3215-e263a07b/image.png?height=600",
      },
      {
        slug: "entretien-chaudiere-gaz-mazout",
        title: "Entretien Chaudière",
        desc: "Entretien légal et détartrage de vos installations de chauffage.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3136-156a5491/image.png?height=600",
      },
      {
        slug: "installation-nouveau-chauffage",
        title: "Installation Nouveau Chauffage",
        desc: "Pose de chaudières à condensation haute performance.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3139-3f453170/image.png?height=600",
      },
      {
        slug: "depannage-chaudiere-urgence",
        title: "Dépannage Chaudière Urgence",
        desc: "Réparation rapide de chaudière en panne (Vaillant, Bulex, Viessmann). Chauffagiste d'urgence 24h/24.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3215-e263a07b/image.png?height=600",
      },
    ],
    color: {
      bg: "bg-orange-500/20",
      text: "text-orange-400",
      border: "border-orange-500/30",
      glow: "bg-orange-500",
    },
    testimonial: {
      text: "Chaudière réparée le jour même. Chauffagiste très compétent et prix honnête.",
      author: "Jean P., Charleroi",
    },
    faqs: [
      {
        question:
          "L'entretien de la chaudière est-il obligatoire en Belgique ?",
        answer:
          "Oui, l'entretien par un chauffagiste agréé est obligatoire tous les 2 ans pour les chaudières à gaz et chaque année pour les chaudières au mazout.",
      },
      {
        question: "Quels sont les signes d'une chaudière en panne ?",
        answer:
          "Baisse de pression constante, bruits anormaux, eau sanitaire froide ou radiateurs qui ne chauffent pas sont des alertes pour appeler un chauffagiste.",
      },
    ],
  },
  {
    id: "gaz",
    slug: "gaz",
    title: "Gaz",
    icon: Flame,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4151-7b1319fa/regenerated_image_1777316388823.png?height=600",
    description:
      "Vous suspectez une fuite de gaz ou avez besoin d'une installation gaz conforme aux normes belges ? Nos techniciens certifiés CERGA interviennent rapidement pour assurer votre sécurité.",
    trustPoints: [
      { title: "Certifiés CERGA", desc: "Attestation officielle délivrée sur place pour l'ouverture de votre compteur gaz." },
      { title: "Intervention Fuite en 45 min", desc: "Détecteurs électroniques haute précision pour localiser et colmater toute fuite de gaz." },
      { title: "Conformité NBN B61-002", desc: "Tous nos travaux respectent les normes belges en vigueur pour les installations gaz." },
      { title: "Conversion Gaz Pauvre/Riche", desc: "Réglage certifié CERGA de tous vos appareils pour le passage au gaz riche en Belgique." },
    ],
    features: [
      "Détection fuite de gaz",
      "Mise en conformité",
      "Raccordement appareils",
      "Attestation de sécurité",
      "Installateur gaz agréé Cerga",
      "Contrôle étanchéité gaz",
    ],
    subServices: [
      {
        slug: "detection-fuite-de-gaz",
        title: "Détection Fuite de Gaz",
        desc: "Intervention ultra-rapide with détecteurs de précision pour sécuriser et colmater les fuites.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3137-e73c9066/image.png?height=600",
      },
      {
        slug: "mise-en-conformite-gaz",
        title: "Mise en Conformité Gaz",
        desc: "Mettez votre installation aux normes CERGA pour obtenir votre attestation d'ouverture de compteur.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4165-9e79ff33/Technician_converting_gas_Pauvre_202604301841.jpeg?height=600",
      },
      {
        slug: "raccordement-gaz",
        title: "Raccordement Gaz",
        desc: "Branchement sécurisé de vos appareils (cuisinière, four, chaudière) avec test d'étanchéité.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4162-3fa3ec20/Raccordement_Gaz_appareils_s%C3%A9curis%C3%A9_202604301845.jpeg?height=600",
      },
      {
        slug: "conversion-gaz-pauvre-vers-gaz-riche",
        title: "Conversion Gaz Pauvre vers Gaz Riche",
        desc: "Adaptation et réglage de vos appareils pour le passage au gaz riche en Belgique.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4163-b04fd160/Technicien_contr%C3%B4le_%C3%A9tanch%C3%A9it%C3%A9_gaz_202604301841.jpeg?height=600",
      },
      {
        slug: "installation-conduite-de-gaz",
        title: "Installation Conduite de Gaz",
        desc: "Raccordement gaz naturel, pose sécurisée de conduites et tuyauteries par un installateur Cerga.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4164-4f038fdb/Technician_installing_gas_pipes_202604301841.jpeg?height=600",
      },
      {
        slug: "controle-etancheite-gaz-cerga",
        title: "Contrôle Étanchéité Gaz (Cerga)",
        desc: "Vérification complète de votre réseau de gaz et délivrance d'attestation de sécurité.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4158-e133eab3/D%C3%A9gazage_Nettoyage_Citerne_Pompa%E2%80%A6_202604301851.jpeg?height=600",
      },
    ],
    color: {
      bg: "bg-blue-600/20",
      text: "text-blue-500",
      border: "border-blue-600/30",
      glow: "bg-blue-600",
    },
    testimonial: {
      text: "Passage au gaz riche effectué sans problème. Le technicien a tout bien réglé. Merci au technicien Cerga.",
      author: "Lucie V., Mons",
    },
    faqs: [
      {
        question:
          "En cas d'odeur de gaz, que dois-je faire en attendant le technicien ?",
        answer:
          "Coupez immédiatement l'arrivée générale, ouvrez grand toutes les fenêtres, ne touchez à aucun interrupteur (ni sonnette) et sortez du bâtiment avant de nous appeler.",
      },
      {
        question: "Délivrez-vous une attestation de sécurité gaz ?",
        answer:
          "Oui, nos techniciens agréés Cerga effectuent le contrôle de votre installation et vous délivrent l'attestation indispensable pour ouvrir le compteur de gaz.",
      },
    ],
  },
  {
    id: "citerne",
    slug: "citerne-mazout-cuve",
    title: "Citerne Mazout",
    icon: Truck,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/3561-85ae42c5/image.png?height=600",
    description:
      "Une citerne à mazout hors d'usage ? Nous prenons en charge la neutralisation de citerne mazout, le démontage et l'enlèvement de cuve avec certificat de conformité. Nos services incluent également le nettoyage et le dégazage professionnel pour l'obtention de votre bouchon vert.",
    features: [
      "Neutralisation citerne mazout",
      "Enlèvement de cuve",
      "Dégazage & nettoyage",
      "Certificat conformité & Bouchon vert",
    ],
    subServices: [
      {
        slug: "neutralisation-citerne-mazout-prix",
        title: "Neutralisation & Enlèvement de Cuve",
        desc: "Neutralisation de citerne mazout, démontage de cuve à mazout et évacuation dans le respect des normes.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4158-e133eab3/D%C3%A9gazage_Nettoyage_Citerne_Pompa%E2%80%A6_202604301851.jpeg?height=600",
      },
      {
        slug: "degazage-nettoyage-citerne-mazout",
        title: "Dégazage et Nettoyage de Citerne",
        desc: "Pompage des boues, nettoyage de fond de cuve et dégazage de citerne avec remise d'attestation.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4159-8d19698e/Neutralisation_et_enl%C3%A8vement_cuve_202604301851.jpeg?height=600",
      },
      {
        slug: "test-etancheite-certificat-bouchon-vert",
        title: "Test d'Étanchéité (Bouchon Vert)",
        desc: "Contrôle ultrason de l'étanchéité de votre citerne à mazout avec délivrance du bouchon vert officiel.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4160-238cbbe8/Test_d%27%C3%A9tanch%C3%A9it%C3%A9_bouchon_vert_202604301851.jpeg?height=600",
      },
    ],
    color: {
      bg: "bg-stone-500/20",
      text: "text-stone-400",
      border: "border-stone-500/30",
      glow: "bg-stone-500",
    },
    testimonial: {
      text: "L'équipe a complètement neutralisé et démonté notre vieille cuve à mazout dans la cave, très proprement.",
      author: "Alexandre V., Namur",
    },
    faqs: [
      {
        question:
          "Pourquoi faut-il neutraliser une ancienne citerne à mazout ?",
        answer:
          "La loi belge oblige la neutralisation (par inertage au sable ou à la mousse) de toute cuve à mazout définitivement mise hors service pour éviter tout risque de pollution des sols ou d'explosion.",
      },
      {
        question: "Délivrez-vous le certificat d'enlèvement de la cuve ?",
        answer:
          "Absolument. Après tout dégazage, neutralisation ou enlèvement, nous vous remettons le certificat de mise hors service prouvant la conformité de l'opération.",
      },
    ],
  },
  {
    id: "cng",
    slug: "gaz-naturel-comprime",
    title: "Gaz Naturel Comprimé (GNC)",
    icon: Flame, // Using Flame as a suitable icon for natural gas
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4152-5863711c/regenerated_image_1777316389611.png?height=600",
    description:
      "Services spécialisés pour les installations au Gaz Naturel Comprimé (GNC). Nos experts agréés assurent l'installation, l'entretien et la mise aux normes de vos systèmes GNC en toute sécurité.",
    features: [
      "Installation système GNC",
      "Maintenance préventive",
      "Contrôle d'étanchéité",
      "Certification conformité",
    ],
    subServices: [
      {
        slug: "installation-gnc",
        title: "Installation Système GNC",
        desc: "Conception et pose de nouvelles installations au gaz naturel comprimé.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3113-d77ba503/image.png?height=600",
      },
      {
        slug: "entretien-controle-gnc",
        title: "Entretien et Contrôle GNC",
        desc: "Maintenance régulière et vérification de la sécurité de vos équipements.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3138-83ae337d/image.png?height=600",
      },
      {
        slug: "depannage-urgence-gnc",
        title: "Dépannage d'Urgence GNC",
        desc: "Intervention rapide on les systèmes GNC présentant des anomalies.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3174-0c4a98ab/image.png?height=600",
      },
    ],
    color: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-500",
      border: "border-emerald-500/30",
      glow: "bg-emerald-500",
    },
    testimonial: {
      text: "Installation GNC conforme et sécurisée. Très satisfaite du suivi technique.",
      author: "Hélène B., Wavre",
    },
    faqs: [
      {
        question:
          "Faites-vous l'entretien des installations au gaz naturel comprimé (GNC) ?",
        answer:
          "Oui, nos chauffagistes spécialisés interviennent pour la maintenance, le contrôle d'étanchéité et l'entretien de toutes vos solutions GNC.",
      },
      {
        question: "Intervenez-vous sur les systèmes GNC en urgence ?",
        answer:
          "Absolument. Si votre système présente une anomalie ou une panne, un technicien agréé se déplace chez vous en moins d'une heure.",
      },
    ],
  },
  {
    id: "electricite",
    slug: "electricite",
    title: "Électricité",
    icon: Zap,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4150-691b84a7/regenerated_image_1777316385571.png?height=600",
    description:
      "Panne de courant totale, court-circuit ou besoin de mise en conformité AREI ? Nos électriciens qualifiés interviennent partout en Belgique pour sécuriser votre installation. Du remplacement du tableau électrique à la pose de nouvelles prises, DEB PRO SERVICES garantit des travaux électriques certifiés et sûrs.",
    trustPoints: [
      { title: "Agréés AREI", desc: "Rapport de conformité officiel remis après chaque mise en conformité électrique." },
      { title: "Tableau Électrique en 1 Jour", desc: "Remplacement complet avec remise du schéma unifilaire à jour le même jour." },
      { title: "Borne de Recharge & Domotique", desc: "Installation de bornes EVSE, panneaux photovoltaïques et systèmes domotiques certifiés." },
      { title: "Garantie Décennale", desc: "Tous nos travaux électriques sont couverts par notre garantie décennale." },
    ],
    features: [
      "Dépannage panne de courant 24/7",
      "Mise en conformité électrique AREI",
      "Remplacement de tableau électrique",
      "Installation éclairage et prises",
    ],
    subServices: [
      {
        slug: "depannage-panne-electrique",
        title: "Dépannage Panne Électrique",
        desc: "Remise en route de l'électricité après une coupure ou un court-circuit.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4123-0e4ebd62/regenerated_image_1777476222115.png?height=600",
      },
      {
        slug: "mise-en-conformite-electrique-arei",
        title: "Mise en Conformité AREI",
        desc: "Préparation et mise aux normes pour le contrôle électrique.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4122-f2a75e0a/regenerated_image_1777476223137.png?height=600",
      },
      {
        slug: "remplacement-tableau-electrique",
        title: "Remplacement Tableau Électrique",
        desc: "Changement de coffret et ajout de disjoncteurs différentiels.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4121-fd086831/regenerated_image_1777476224390.png?height=600",
      },
    ],
    color: {
      bg: "bg-yellow-500/20",
      text: "text-yellow-400",
      border: "border-yellow-500/30",
      glow: "bg-yellow-500",
    },
    testimonial: {
      text: "Remplacement de mon tableau électrique en urgence. Travail propre et électricien sympa.",
      author: "Marc O., Anvers",
    },
    faqs: [
      {
        question: "Combien coûte un dépannage électrique en urgence ?",
        answer:
          "Le tarif dépend de la nature de l'intervention. Nous communiquons toujours nos prix en toute transparence avant d'entamer les réparations électriques.",
      },
      {
        question:
          "Quand faut-il faire une mise en conformité électrique (AREI) ?",
        answer:
          "Elle est obligatoire lors de la vente d'une habitation dont l'installation date d'avant 1981, ou en cas de modification majeure de votre réseau électrique.",
      },
    ],
  },
  {
    id: "climatisation",
    slug: "climatisation",
    title: "Climatisation",
    icon: Wind,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4145-8f04c0e3/regenerated_image_1777316386639%20%281%29.png?height=600",
    description:
      "Installation, entretien et dépannage de tous systèmes de climatisation en Belgique. Nos techniciens certifiés F-Gas interviennent pour les particuliers et professionnels.",
    trustPoints: [
      { title: "Frigoristes Certifiés F-Gas", desc: "Manipulation sécurisée des fluides frigorigènes selon le règlement européen 517/2014." },
      { title: "Toutes Marques", desc: "Daikin, Mitsubishi, Samsung, LG, Panasonic — installation et entretien toutes marques." },
      { title: "Entretien Annuel Certifié", desc: "Rapport d'entretien officiel remis. Un appareil entretenu consomme 25% d'énergie en moins." },
      { title: "VMC Simple & Double Flux", desc: "Installation et entretien de systèmes VMC pour une qualité d'air optimale." },
    ],
    features: [
      "Installation split",
      "Entretien annuel",
      "Recharge gaz",
      "Réparation compresseur",
      "Installation VMC double flux",
    ],
    subServices: [
      {
        slug: "installation-climatisation-pompe-a-chaleur",
        title: "Installation Climatisation et PAC",
        desc: "Pose de clim réversible et pompes à chaleur.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3565-380b591a/image.png?height=600",
      },
      {
        slug: "recharge-gaz-climatisation",
        title: "Recharge Gaz Climatisation",
        desc: "Remplissage de liquide frigorigène et contrôle de pression.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4119-36a3f766/regenerated_image_1777478705729.png?height=600",
      },
      {
        slug: "depannage-climatiseur",
        title: "Dépannage Climatiseur",
        desc: "Réparation de clim qui coule ou qui ne souffle plus froid.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4118-331dc77b/regenerated_image_1777478706814.png?height=600",
      },
      {
        slug: "installation-climatisation-reversible",
        title: "Installation Climatisation Réversible",
        desc: "La solution idéale pour été comme hiver avec pompe à chaleur air-air Daikin.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4168-dc8c1398/Technician_installing_reversible_AC_202604301836.jpeg?height=600",
      },
      {
        slug: "entretien-airco-recharge-gaz",
        title: "Entretien Airco et Recharge",
        desc: "Entretien annuel, nettoyage des filtres et recharge gaz climatisation par un frigoriste agréé F-Gas.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4167-13e794cf/Air_conditioning_maintenance_and%E2%80%A6_202604301837.jpeg?height=600",
      },
      {
        slug: "installation-entretien-vmc",
        title: "Installation VMC (Ventilation)",
        desc: "Pose et entretien de VMC simple et double flux pour assainir l'air intérieur de votre maison.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4166-17ba685c/Technician_installing_VMC_system_202604301840.jpeg?height=600",
      },
    ],
    color: {
      bg: "bg-sky-500/20",
      text: "text-sky-400",
      border: "border-sky-500/30",
      glow: "bg-sky-500",
    },
    testimonial: {
      text: "Installation méticuleuse de notre nouvelle VMC et de la clim pour l'été. Très professionnels !",
      author: "Sophie G., Louvain",
    },
    faqs: [
      {
        question: "Vos techniciens détiennent-ils la certification F-Gas ?",
        answer:
          "Oui, tous nos frigoristes sont certifiés F-Gas. Cette habilitation est une exigence légale obligatoire en Belgique pour manipuler, installer et récupérer les gaz réfrigérants.",
      },
      {
        question:
          "Pourquoi installer une VMC double flux lors d'une rénovation ?",
        answer:
          "Une VMC double flux renouvelle l'air tout en récupérant la chaleur de l'air extrait. Vous évitez les moisissures et vous faites d'importantes économies sur le chauffage.",
      },
    ],
  },
  {
    id: "fosse",
    slug: "vidange-fosse-septique",
    title: "Vidange Fosse",
    icon: Truck,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4147-e633d2dc/regenerated_image_1777316387949%20%283%29.png?height=600",
    description:
      "Vidange fosse septique et entretien de micro-station en Belgique. Intervention rapide avec camion hydrocureur 24h/24. Qu'il s'agisse d'un pompage urgent, d'un curage d'égouts ou du nettoyage d'un bac à graisse pour restaurant, nous proposons des tarifs compétitifs. Nos experts vous guident également sur qui doit payer la vidange entre locataire et propriétaire.",
    trustPoints: [
      { title: "Camion Agréé 3 Régions", desc: "Nos camions vidangeurs sont agréés en Wallonie, Bruxelles et Flandre." },
      { title: "Certificat de Traçabilité", desc: "Document officiel de traçabilité des boues remis après chaque vidange." },
      { title: "Intervention en 24h", desc: "Planification rapide avec créneau garanti sous 24 heures ouvrables." },
      { title: "Nettoyage Haute Pression Inclus", desc: "Curage complet de la fosse inclus dans chaque prestation de vidange." },
    ],
    features: [
      "Vidange fosse septique urgente",
      "Nettoyage bac à graisse pro",
      "Entretien micro-station épuration",
      "Curage et débouchage égouts",
    ],
    subServices: [
      {
        slug: "pompage-et-vidange-fosse-septique",
        title: "Pompage et Vidange Fosse Septique",
        desc: "Vidange complète par camion pompe.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/3489-b95e956d/image.png?height=600",
      },
      {
        slug: "nettoyage-bac-a-graisse",
        title: "Nettoyage Bac à Graisse",
        desc: "Entretien de dégraisseur pour restaurants et professionnels.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/4117-0d69319e/regenerated_image_1777484930056.png?height=600",
      },
      {
        slug: "entretien-micro-station-epuration",
        title: "Entretien Micro-station",
        desc: "Maintenance préventive de vos stations d'épuration autonomes.",
        imageUrl:
          "https://debouchageexpress24hh.odoo.com/web/image/2986-17a02e25/image.png?height=600",
      },
    ],
    color: {
      bg: "bg-green-500/20",
      text: "text-green-400",
      border: "border-green-500/30",
      glow: "bg-green-500",
    },
    testimonial: {
      text: "Vidange de fosse septique rapide et efficace. Pas d'odeurs après l'intervention.",
      author: "Benoît R., Tournai",
    },
    faqs: [
      {
        question: "Quelle est la fréquence pour vider une fosse septique ?",
        answer:
          "Il est conseillé de vider sa fosse septique tous les 4 à 5 ans environ, ou dès que les boues atteignent 50% du volume de la fosse.",
      },
      {
        question: "Quel est le prix d'une vidange de fosse septique ?",
        answer:
          "Le tarif pour une vidange standard varie entre 150€ et 300€ selon le volume à pomper et la distance de stationnement du camion.",
      },
    ],
  },
  {
    id: "panneaux-solaires",
    slug: "installation-panneaux-solaires",
    title: "Panneaux Solaires",
    icon: Sun,
    imageUrl:
      "https://deb-pro-service.odoo.com/web/image/559-23d47a71/Premium_Photovoltaic_Installation_202607182000%20%281%29.jpeg",
    description:
      "DEB PRO SERVICES installe vos panneaux solaires photovoltaïques et vos batteries physiques de stockage partout en Belgique. Profitez d'une énergie verte, locale, renouvelable et réduisez durablement votre facture d'électricité jusqu'à 80%. Nos installateurs agréés RESCert gèrent votre projet de A à Z : de l'étude de faisabilité technique gratuite à la mise en service certifiée AREI.",
    trustPoints: [
      { title: "Étude Gratuite & Sizing", desc: "Analyse sur site de votre toiture (pente, ombrage, orientation) pour optimiser votre production annuelle de kWh." },
      { title: "Certifiés RESCert & AREI", desc: "Installateurs certifiés officiels pour vous garantir l'accès aux primes régionales et une conformité électrique absolue." },
      { title: "Garanties Longue Durée", desc: "Matériel Premium Tier-1 garanti 25 ans en production linéaire et onduleurs garantis 10 à 20 ans." },
      { title: "Service Clés en Main", desc: "Prise en charge complète : raccordement réseau, pose des structures de montage et démarches administratives." },
    ],
    features: [
      "Installation panneaux photovoltaïques",
      "Batteries de stockage physique",
      "Onduleurs hybrides intelligents",
      "Mise en conformité AREI complète",
      "Étude de rendement personnalisée",
    ],
    subServices: [
      {
        slug: "installation-panneaux-photovoltaiques-belgique",
        title: "Installation Photovoltaïque Premium",
        desc: "Pose de panneaux solaires monocristallins à haut rendement sur toiture plate ou inclinée.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/559-23d47a71/Premium_Photovoltaic_Installation_202607182000%20%281%29.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/559-23d47a71/Premium_Photovoltaic_Installation_202607182000%20%281%29.jpeg",
          "https://deb-pro-service.odoo.com/web/image/560-4da8e8ee/Premium_Photovoltaic_Installation_202607182000.jpeg",
        ],
      },
      {
        slug: "batterie-physique-stockage-solaire",
        title: "Batteries de Stockage Physique",
        desc: "Systèmes de stockage lithium (LFP) pour maximiser votre taux d'autoconsommation de jour comme de nuit.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/600-cbea6387/Physical_Storage_Batteries_202607182045.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/600-cbea6387/Physical_Storage_Batteries_202607182045.jpeg",
          "https://deb-pro-service.odoo.com/web/image/588-18a5ca09/Inverters_and_Micro-inverters_202607181958.jpeg",
        ],
      },
      {
        slug: "onduleurs-et-micro-onduleurs-solaires",
        title: "Onduleurs & Micro-Onduleurs",
        desc: "Installation d'onduleurs hybrides de pointe et micro-onduleurs Enphase pour un rendement panneau par panneau.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/601-376db569/Hybrid_Inverters_Microinverters_%E2%80%A6_202607201925.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/601-376db569/Hybrid_Inverters_Microinverters_%E2%80%A6_202607201925.jpeg",
          "https://deb-pro-service.odoo.com/web/image/583-228d24b6/Technician_installing_solar_pane%E2%80%A6_202607181843.jpeg",
        ],
      },
    ],
    color: {
      bg: "bg-amber-500/20",
      text: "text-amber-400",
      border: "border-amber-500/30",
      glow: "bg-amber-500",
    },
    testimonial: {
      text: "Installation réalisée par des professionnels en 2 jours. Ma facture a été divisée par 4 et l'application mobile de suivi est géniale !",
      author: "Jean-Paul M., Namur",
    },
    faqs: [
      {
        question: "Les panneaux solaires sont-ils rentables en Belgique malgré le climat ?",
        answer:
          "Absolument. Les panneaux photovoltaïques modernes fonctionnent avec la lumière diffuse et n'ont pas besoin d'un ensoleillement direct permanent. En Belgique, le temps de retour sur investissement moyen est de 5 à 7 ans.",
      },
      {
        question: "Pourquoi est-il conseillé d'installer une batterie physique de stockage ?",
        answer:
          "La batterie physique vous permet de stocker l'excédent d'énergie produit en journée pour l'utiliser en soirée ou la nuit. Cela fait passer votre taux d'autoconsommation moyen de 30% à plus de 75%.",
      },
      {
        question: "Faut-il un permis d'urbanisme pour installer des panneaux solaires en Belgique ?",
        answer:
          "Dans la grande majorité des cas en Wallonie, à Bruxelles et en Flandre, l'installation de panneaux solaires sur votre toiture ne nécessite aucun permis d'urbanisme, tant qu'ils ne modifient pas l'aspect architectural classé.",
      },
    ],
  },
  {
    id: "toiture",
    slug: "travaux-de-toiture",
    title: "Toiture",
    icon: Home,
    imageUrl:
      "https://deb-pro-service.odoo.com/web/image/589-99bea1ad/Roofing_Work%2C_Repair_%26_Renovation_202607181958.jpeg",
    description:
      "DEB PRO SERVICES prend en charge tous vos travaux de toiture partout en Belgique : réparation urgente de fuites de toit, rénovation complète, isolation thermique de toitures plates ou inclinées, et nettoyage & démoussage professionnel. Nos couvreurs agréés interviennent rapidement avec des matériaux de premier choix garantis pour protéger votre habitat.",
    trustPoints: [
      { title: "Couvreurs Agréés Qualifiés", desc: "Une équipe d'artisans couvreurs qualifiés pour tous types de couvertures (ardoises, tuiles, zinc, EPDM)." },
      { title: "Dépannage Fuite Toit 24h/7", desc: "Bâclage d'urgence suite à une tempête ou une infiltration d'eau de pluie pour stopper immédiatement les dégâts des eaux." },
      { title: "Garantie Décennale", desc: "Toutes nos réalisations et réfections complètes de toitures bénéficient d'une garantie décennale légale belge." },
      { title: "Devis Gratuit & Détaillé", desc: "Analyse d'état, métrés détaillés et devis transparent envoyé sous 24 heures sans engagement." },
    ],
    features: [
      "Réparation de fuite & infiltrations",
      "Rénovation complète (tuiles, ardoises)",
      "Étanchéité toiture plate & EPDM",
      "Nettoyage & démoussage de toit",
      "Isolation de toiture et combles",
    ],
    subServices: [
      {
        slug: "reparation-fuite-toiture-belgique",
        title: "Dépannage & Réparation de Fuite",
        desc: "Localisation rapide de fuites d'eau de pluie, remplacement de tuiles cassées et réparation de solins ou de zingueries défectueuses.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/591-692fbfaf/Troubleshooting_Repair_Roof_Leaks_202607181959.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/591-692fbfaf/Troubleshooting_Repair_Roof_Leaks_202607181959.jpeg",
          "https://deb-pro-service.odoo.com/web/image/589-99bea1ad/Roofing_Work%2C_Repair_%26_Renovation_202607181958.jpeg",
        ],
      },
      {
        slug: "renovation-refection-toiture",
        title: "Rénovation & Réfection Complète",
        desc: "Remplacement complet de votre ancienne couverture en tuiles de terre cuite, ardoises naturelles ou synthétiques, et réfection de charpente.",
        imageUrl:
          "https://picsum.photos/seed/roof-renovation/800/600",
      },
      {
        slug: "etancheite-toiture-terrasse-epdm",
        title: "Étanchéité Toit Plat & EPDM",
        desc: "Pose de membrane EPDM ou de roofing bitumeux thermosoudé pour une étanchéité parfaite et durable de vos toitures plates et terrasses.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/602-bc1ee247/Flat_Roof_EPDM_Technician_202607201937.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/602-bc1ee247/Flat_Roof_EPDM_Technician_202607201937.jpeg",
          "https://deb-pro-service.odoo.com/web/image/593-bd46ae12/Roof_Renovation_and_Refurbishment_202607181959%20%281%29.jpeg",
        ],
      },
      {
        slug: "demoussage-nettoyage-toiture-belgique",
        title: "Nettoyage & Démoussage",
        desc: "Élimination des mousses, lichens et saletés, nettoyage haute pression contrôlé et application d'un traitement hydrofuge protecteur.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/577-c0042751/Cleaning_moss_removal_protective%E2%80%A6_202607181959.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/577-c0042751/Cleaning_moss_removal_protective%E2%80%A6_202607181959.jpeg",
          "https://deb-pro-service.odoo.com/web/image/576-ccfc06ff/Cleaning_moss_removal_protective%E2%80%A6_202607181959%20%281%29.jpeg",
        ],
      }
    ],
    color: {
      bg: "bg-sky-500/20",
      text: "text-sky-400",
      border: "border-sky-500/30",
      glow: "bg-sky-500",
    },
    testimonial: {
      text: "Intervention en urgence pour une fuite de toiture après une grosse tempête. Travail propre, rapide et facture conforme au devis.",
      author: "Marc D., Waterloo",
    },
    faqs: [
      {
        question: "Quelle est la durée de vie d'une toiture en Belgique ?",
        answer:
          "Une toiture bien entretenue a une durée de vie moyenne de 30 à 50 ans pour les tuiles en béton ou terre cuite, et de plus de 70 ans pour les ardoises naturelles. Les plateformes en EPDM durent généralement entre 40 et 50 ans.",
      },
      {
        question: "Que faire en cas d'infiltration ou de fuite d'eau par le toit ?",
        answer:
          "Il faut agir immédiatement pour éviter la pourriture de la charpente et les dégâts des plafonds. Contactez-nous pour un bâclage d'urgence temporaire. Nous poserons une bâche de protection étanche avant de procéder aux réparations définitives.",
      },
      {
        question: "Bénéficie-t-on de primes pour l'isolation de toiture en Wallonie ou à Bruxelles ?",
        answer:
          "Oui, la Région wallonne et la Région de Bruxelles-Capitale proposent des primes à l'isolation thermique pour encourager la rénovation énergétique. Notre équipe agréée vous fournit tous les documents nécessaires pour votre dossier.",
      },
    ],
  },
  {
    id: "camera-surveillance",
    slug: "installation-cameras-surveillance",
    title: "Caméras de Surveillance",
    icon: Camera,
    imageUrl:
      "https://deb-pro-service.odoo.com/web/image/581-9a991fd4/Security_camera_technician_Brussels_202607181843.jpeg",
    description:
      "DEB PRO SERVICES installe vos caméras de surveillance, systèmes d'alarme et solutions de sécurité partout en Belgique. Sécurisez votre maison, commerce ou entreprise avec notre matériel haute définition (IP, Wi-Fi, vision nocturne, détection intelligente). Nos installateurs experts conçoivent des systèmes sur mesure connectés à votre smartphone pour une surveillance en temps réel 24h/24.",
    trustPoints: [
      { title: "Étude de Sécurité Offerte", desc: "Analyse complète des points vulnérables de votre bâtiment pour un placement optimal des caméras." },
      { title: "Matériel HD & Vision Nocturne", desc: "Équipement haut de gamme (HIKVISION, Dahua) avec vision nocturne infrarouge et détection humaine intelligente." },
      { title: "Application Smartphone Live", desc: "Accès en direct, alertes de mouvement instantanées et contrôle à distance de vos caméras sur iOS et Android." },
      { title: "Installation & Configuration", desc: "Câblage ultra discret, paramétrage professionnel de l'enregistreur NVR et formation complète à l'utilisation." },
    ],
    features: [
      "Caméras IP haute définition (4K/8MP)",
      "Enregistreurs NVR sécurisés & stockage durable",
      "Vision nocturne infrarouge et couleur",
      "Application mobile d'alerte live en temps réel",
      "Maintenance, câblage & dépannage de systèmes",
    ],
    subServices: [
      {
        slug: "installation-camera-ip-interieur-exterieur-belgique",
        title: "Caméras IP Intérieures & Extérieures",
        desc: "Pose de caméras dômes ou tubes étanches (certifiées IP67) avec zoom optique motorisé, grand angle et vision nocturne intelligente.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/603-fbfed16e/Indoor_Outdoor_IP_Cameras_Instal%E2%80%A6_202607201942.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/603-fbfed16e/Indoor_Outdoor_IP_Cameras_Instal%E2%80%A6_202607201942.jpeg",
          "https://deb-pro-service.odoo.com/web/image/595-c9be98f6/Technicians_installation_surveil%E2%80%A6_202607181842.jpeg",
        ],
      },
      {
        slug: "enregistreur-nvr-stockage-videos-surveillance",
        title: "Enregistreurs NVR & Stockage Sécurisé",
        desc: "Mise en place d'enregistreurs numériques intelligents permettant d'enregistrer plusieurs semaines de vidéos en haute définition, protégés contre le vol.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/575-0a0fb232/NVR_recorders_secure_storage_202607181959.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/575-0a0fb232/NVR_recorders_secure_storage_202607181959.jpeg",
          "https://deb-pro-service.odoo.com/web/image/574-e93e8de2/NVR_recorders_secure_storage_202607181959%20%281%29.jpeg",
        ],
      },
      {
        slug: "systemes-alarmes-anti-intrusion-connectes",
        title: "Systèmes d'Alarme Anti-Intrusion",
        desc: "Installation d'alarmes intelligentes sans fil connectées avec détecteurs d'ouverture de fenêtres, détecteurs volumétriques et sirènes dissuasives.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/570-8f1447a4/Intrusion_alarm_systems_installa%E2%80%A6_202607182000.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/570-8f1447a4/Intrusion_alarm_systems_installa%E2%80%A6_202607182000.jpeg",
          "https://deb-pro-service.odoo.com/web/image/571-474f325b/Intrusion_alarm_systems_installa%E2%80%A6_202607181959.jpeg",
        ],
      }
    ],
    color: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      glow: "bg-emerald-500",
    },
    testimonial: {
      text: "L'installation s'est faite sans aucun câble visible. L'application mobile me permet de surveiller mon magasin à distance avec une clarté d'image incroyable !",
      author: "Youssef K., Bruxelles",
    },
    faqs: [
      {
        question: "Quelle est la législation sur l'installation de caméras en Belgique ?",
        answer:
          "En Belgique, la loi caméra impose de déclarer vos caméras à la police (via la plateforme de déclaration en ligne) et d'apposer un pictogramme officiel à l'entrée du bâtiment pour signaler la présence de surveillance. Nos experts vous guident dans ces démarches réglementaires.",
      },
      {
        question: "Peut-on visionner les caméras de surveillance sur smartphone ?",
        answer:
          "Oui, absolument. Toutes nos installations intègrent une connexion réseau hautement sécurisée qui vous permet de visionner le direct, de relire les enregistrements passés et de recevoir des notifications push en cas de détection suspecte, partout dans le monde.",
      },
      {
        question: "Combien de temps sont conservées les images enregistrées ?",
        answer:
          "Conformément à la réglementation belge de protection de la vie privée, les images de caméras de surveillance ne peuvent être conservées que pendant un mois maximum (30 jours), sauf si elles servent de preuve dans le cadre d'une enquête policière.",
      },
    ],
  },
  {
    id: "construction",
    slug: "travaux-de-construction-gros-oeuvre",
    title: "Construction & Gros Œuvre",
    icon: Hammer,
    imageUrl:
      "https://deb-pro-service.odoo.com/web/image/572-12f2e710/Construction_%26_Ma%C3%A7onnerie_Belgique_202607181959%20%281%29.jpeg",
    description:
      "DEB PRO SERVICES réalise tous vos travaux de gros œuvre, maçonnerie générale, extensions de maison et aménagements en Belgique. Qu'il s'agisse de couler une dalle de béton armé, d'ouvrir un mur porteur avec pose d'IPN, ou de réaliser une extension clé sur porte, nos maçons qualifiés et certifiés vous garantissent une solidité structurelle à toute épreuve, le tout couvert par une garantie décennale obligatoire.",
    trustPoints: [
      { title: "Garantie Décennale Certifiée", desc: "Tous nos chantiers de gros œuvre et de maçonnerie sont couverts par une assurance décennale de 10 ans." },
      { title: "Calcul de Stabilité d'Ingénieur", desc: "Pour les ouvertures de murs porteurs, nous travaillons avec un bureau d'étude pour garantir la sécurité absolue." },
      { title: "Matériaux Qualité BENOR", desc: "Nous utilisons exclusivement du béton et des briques certifiés BENOR conformes aux normes de construction belges." },
      { title: "Devis Clair & Ferme sous 48h", desc: "Pas de suppléments imprévus. Un chiffrage corps par corps précis et transparent pour votre projet." },
    ],
    features: [
      "Gros œuvre ouvert / fermé & maçonnerie de briques",
      "Ouverture de murs porteurs et pose de poutrelles IPN/HEB",
      "Terrassement, fondations solides & égouttage complet",
      "Coulage de dalles en béton armé et chapes",
      "Rénovation, sablage et rejointoyage de façades",
    ],
    subServices: [
      {
        slug: "maconnerie-generale-gros-oeuvre-belgique",
        title: "Maçonnerie Générale & Gros Œuvre",
        desc: "Élévation de murs porteurs, pose de blocs de béton, briques de parement et travaux de gros œuvre pour vos constructions et extensions.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/568-ba82ab5e/Masonry_and_structural_work_202607182000%20%281%29.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/568-ba82ab5e/Masonry_and_structural_work_202607182000%20%281%29.jpeg",
          "https://deb-pro-service.odoo.com/web/image/569-e1d8cc97/Masonry_and_structural_work_202607182000.jpeg",
        ],
      },
      {
        slug: "ouverture-mur-porteur-pose-poutre-ipn-heb",
        title: "Ouverture de Mur Porteur & Pose d'IPN",
        desc: "Démolition sécurisée de murs porteurs ou semi-porteurs avec étançonnement professionnel et installation de poutres métalliques IPN / HEB.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/567-c2e917de/Opening_Load-Bearing_Wall_I-beams_202607182000.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/567-c2e917de/Opening_Load-Bearing_Wall_I-beams_202607182000.jpeg",
        ],
      },
      {
        slug: "coulage-dalle-beton-et-chapes-sur-mesure",
        title: "Dalles de Béton & Chapes",
        desc: "Préparation de coffrage, pose de ferraillage et coulage de dalles de sol en béton armé, ainsi que réalisation de chapes de finition.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/566-1c69fec1/Concrete_slabs_and_screeds_202607182000.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/566-1c69fec1/Concrete_slabs_and_screeds_202607182000.jpeg",
          "https://deb-pro-service.odoo.com/web/image/565-b25338c3/Concrete_slabs_and_screeds_202607182000%20%281%29.jpeg",
        ],
      },
      {
        slug: "terrassement-fondations-et-raccordement-egouts",
        title: "Terrassement & Fondations",
        desc: "Excavation de terrains, niveaulement, fondations en béton coulé et raccordement au réseau d'égouttage public pour vos extensions.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/563-1e556d46/Terracing_and_foundations_excava%E2%80%A6_202607182000%20%281%29.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/563-1e556d46/Terracing_and_foundations_excava%E2%80%A6_202607182000%20%281%29.jpeg",
          "https://deb-pro-service.odoo.com/web/image/564-33bef6cd/Terracing_and_foundations_excava%E2%80%A6_202607182000.jpeg",
        ],
      },
      {
        slug: "ravalement-de-facade-sablage-rejointoyage",
        title: "Rénovation de Façades & Rejointoyage",
        desc: "Restauration complète de façades en briques belges : sablage, nettoyage, rejointoyage et application d'un traitement hydrofuge.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/562-92b3b5b5/Facade_renovation_and_repointing_202607182000.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/562-92b3b5b5/Facade_renovation_and_repointing_202607182000.jpeg",
          "https://deb-pro-service.odoo.com/web/image/561-0bf20dd5/Facade_renovation_and_repointing_202607182000%20%281%29.jpeg",
        ],
      },
    ],
    color: {
      bg: "bg-amber-500/20",
      text: "text-amber-400",
      border: "border-amber-500/30",
      glow: "bg-amber-500",
    },
    testimonial: {
      text: "Nous avons fait ouvrir le mur porteur entre notre cuisine et le salon avec DEB PRO SERVICES. Le travail a été fait en 2 jours, calcul d'ingénieur respecté et étayage impeccable. Un grand professionnalisme !",
      author: "Laurent D., Waterloo",
    },
    faqs: [
      {
        question: "Qu'est-ce que la garantie décennale de construction en Belgique ?",
        answer:
          "La garantie décennale est une obligation légale pour tout entrepreneur de construction en Belgique (loi du 20 février 2018). Elle couvre tous les vices qui menacent la stabilité ou la solidité du bâtiment (comme un affaissement de fondation, une fissure majeure ou un défaut d'étanchéité du gros œuvre) pour une durée de 10 ans après réception des travaux.",
      },
      {
        question: "Faut-il un permis d'urbanisme pour ouvrir un mur porteur ?",
        answer:
          "Oui, en Belgique (que ce soit en Wallonie, en Flandre ou à Bruxelles), toute modification touchant à la stabilité du bâtiment (comme l'abattage ou l'ouverture d'un mur porteur) requiert obligatoirement l'obtention d'un permis d'urbanisme préalable et l'intervention d'un architecte ou d'un ingénieur en stabilité.",
      },
      {
        question: "Comment assurez-vous la sécurité d'un mur porteur durant les travaux ?",
        answer:
          "Avant toute découpe, nous installons un système d'étançonnement ultra-robuste avec des étançons de chantier certifiés de forte charge pour soutenir temporairement les dalles de plafond. Nous ne retirons les étançons qu'une fois que la poutre métallique (IPN ou HEB) a été posée, scellée au mortier sans retrait et que la stabilité définitive est assurée.",
      },
      {
        question: "Proposez-vous des services d'égouttage pour les nouvelles extensions ?",
        answer:
          "Oui, lors de travaux de terrassement et de fondation pour une extension ou annexe, nous réalisons l'intégralité du réseau d'égouttage sous dalle : pose des tuyaux en PVC rigide de forte épaisseur, mise en place des chambres de visite, raccordement au réseau public et raccordement des gouttières de descente.",
      },
    ],
  },
  {
    id: "vitres",
    slug: "nettoyage-de-vitres",
    title: "Nettoyage de Vitres",
    icon: Sparkles,
    imageUrl:
      "https://deb-pro-service.odoo.com/web/image/546-d82eb670/Window_Cleaning_Company_Belgium_202607182007.jpeg",
    description:
      "DEB PRO SERVICES propose des services de nettoyage de vitres professionnels pour particuliers et professionnels partout en Belgique. Qu'il s'agisse de vitres d'habitations, de vitrines de magasins, de vérandas ou de châssis complexes, nos laveurs de vitres qualifiés vous garantissent une propreté éclatante et sans traces.",
    trustPoints: [
      { title: "Finition Zéro Trace", desc: "Nos techniques avancées et raclettes professionnelles garantissent une transparence et une brillance parfaites sans aucune trace." },
      { title: "Équipement Travaux en Hauteur", desc: "Perches télescopiques à eau pure et nacelles élévatrices pour atteindre les vitrages les plus hauts en toute sécurité." },
      { title: "Nettoyage Complet des Châssis", desc: "Nous nettoyons systématiquement les encadrements de fenêtres, les profilés en PVC, alu ou bois, ainsi que les appuis." },
      { title: "Contrats Flexibles & Réguliers", desc: "À la demande ou sous forme d'abonnement bimensuel, mensuel ou trimestriel adapté aux commerces et résidences." },
    ],
    features: [
      "Lavage professionnel de vitres résidentielles & baies vitrées",
      "Nettoyage régulier de vitrines de magasins et showrooms",
      "Lavage de coupoles de lumière, dômes et puits de lumière",
      "Entretien complet de vérandas, verrières et jardins d'hiver",
      "Nettoyage de vitres en hauteur par nacelle ou perche à eau pure",
    ],
    subServices: [
      {
        slug: "lavage-de-vitres-residentiel-belgique",
        title: "Lavage de Vitres Résidentiel",
        desc: "Entretien de vos fenêtres, velux, baies coulissantes et garde-corps vitrés pour redonner un maximum de luminosité à votre maison.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/536-9e3cc5eb/Residential_Window_Cleaning_202607182010.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/536-9e3cc5eb/Residential_Window_Cleaning_202607182010.jpeg",
          "https://deb-pro-service.odoo.com/web/image/535-692de923/Residential_Window_Cleaning_202607182010%20%281%29.jpeg",
        ],
      },
      {
        slug: "nettoyage-vitrines-commerces-et-magasins",
        title: "Nettoyage de Vitrines de Commerces",
        desc: "Lavage régulier des vitrines de commerces, boutiques et showrooms professionnels pour soigner l'image de marque de votre enseigne.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/537-3da8d68e/Commercial_Window_Cleaning_202607182010%20%281%29.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/537-3da8d68e/Commercial_Window_Cleaning_202607182010%20%281%29.jpeg",
          "https://deb-pro-service.odoo.com/web/image/538-815b712d/Commercial_Window_Cleaning_202607182010.jpeg",
        ],
      },
      {
        slug: "lavage-de-verandas-et-verrieres-complexes",
        title: "Nettoyage de Vérandas & Verrières",
        desc: "Lavage des dômes, toits vitrés et structures de vérandas ou de serres. Élimination des mousses, poussières et traces d'eau.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/540-6dfb0efc/Cleaning_Verandas_and_Skylights_202607182009.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/540-6dfb0efc/Cleaning_Verandas_and_Skylights_202607182009.jpeg",
          "https://deb-pro-service.odoo.com/web/image/539-312fda42/Cleaning_Verandas_and_Skylights_202607182009%20%281%29.jpeg",
        ],
      },
      {
        slug: "lavage-de-vitres-en-hauteur-nacelle-et-perche",
        title: "Lavage de Vitres en Hauteur",
        desc: "Lavage sécurisé de fenêtres de bureaux ou d'appartements en hauteur, en utilisant des nacelles articulées ou des perches télescopiques à eau pure.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/542-0c193d95/Window_Cleaning_at_Height_202607182009.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/542-0c193d95/Window_Cleaning_at_Height_202607182009.jpeg",
          "https://deb-pro-service.odoo.com/web/image/541-78eb72ba/Window_Cleaning_at_Height_202607182009%20%281%29.jpeg",
        ],
      },
      {
        slug: "nettoyage-de-chassis-de-fenetres-et-volets",
        title: "Nettoyage des Châssis & Volets",
        desc: "Lavage complet des profilés (PVC, aluminium, bois), des moustiquaires, des volets roulants et des stores extérieurs pour un rendu impeccable.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/544-7c017d86/Cleaning_of_Frames_%26_Shutters_202607182008.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/544-7c017d86/Cleaning_of_Frames_%26_Shutters_202607182008.jpeg",
          "https://deb-pro-service.odoo.com/web/image/543-7dd60e26/Cleaning_of_Frames_%26_Shutters_202607182008%20%281%29.jpeg",
        ],
      },
    ],
    color: {
      bg: "bg-cyan-500/20",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      glow: "bg-cyan-500",
    },
    testimonial: {
      text: "Le laveur de vitres est venu pour notre véranda qui n'avait pas été nettoyée depuis deux ans. Le résultat est tout simplement magique, tout est étincelant ! Les châssis ont aussi été nettoyés avec soin.",
      author: "Nathalie M., Namur",
    },
    faqs: [
      {
        question: "À quelle fréquence faut-il faire laver ses vitres ?",
        answer:
          "Pour les particuliers, nous conseillons généralement un lavage toutes les 6 à 12 semaines pour garder une visibilité optimale. Pour les commerces, boutiques et vitrines professionnelles de centre-ville, une fréquence hebdomadaire ou bimensuelle est vivement recommandée pour soigner la présentation.",
      },
      {
        question: "Est-ce que le nettoyage des châssis et rebords de fenêtres est inclus ?",
        answer:
          "Oui, chez DEB PRO SERVICES, nous considérons que le nettoyage des châssis, profilés d'encadrement et rebords de fenêtres est indissociable d'un bon lavage de vitres. C'est pourquoi nous l'incluons systématiquement dans nos forfaits standards.",
      },
      {
        question: "Qu'est-ce que la technique de nettoyage à l'eau pure ?",
        answer:
          "C'est une méthode écologique et ultra-efficace pour laver les vitres en hauteur sans détergent. Nous utilisons de l'eau déminéralisée projetée à l'aide d'une perche en carbone munie d'une brosse souple. L'eau pure dissout les saletés et sèche naturellement sans laisser aucune trace ni résidu calcaire.",
      },
      {
        question: "Intervenez-vous en cas de pluie ?",
        answer:
          "La pluie fine n'empêche pas de nettoyer les vitres de manière impeccable, car c'est la poussière accumulée sur le verre qui crée les traces d'eau en séchant. Cependant, en cas de fortes averses, de tempête ou de gel, nous reportons l'intervention pour des raisons évidentes de sécurité de nos cordistes.",
      },
    ],
  },
  {
    id: "jardinage",
    slug: "travaux-de-jardinage-elagage",
    title: "Jardinage & Élagage",
    icon: Trees,
    imageUrl:
      "https://deb-pro-service.odoo.com/web/image/557-e35aedbc/Gardener_Tree_Pruning_Belgium_202607182003%20%281%29.jpeg",
    description:
      "DEB PRO SERVICES propose des services complets d'entretien de jardin, d'élagage, d'abattage d'arbres complexes et d'aménagement paysager en Belgique. Que vous soyez un particulier souhaitant entretenir ses espaces verts ou un professionnel cherchant à valoriser les abords de son entreprise, nos jardiniers paysagistes certifiés vous garantissent des prestations soignées et respectueuses de la nature.",
    trustPoints: [
      { title: "Jardiniers Paysagistes Agréés", desc: "Une équipe d'artisans qualifiés, formés aux techniques horticoles et de grimpe pour un élagage en toute sécurité." },
      { title: "Élagage & Abattage Sécurisé", desc: "Nous maîtrisons les techniques d'abattage par démontage dans les espaces restreints avec assurance RC professionnelle." },
      { title: "Évacuation des Déchets Verts", desc: "Broyage des branches sur place, évacuation complète des déchets verts et nettoyage rigoureux du chantier." },
      { title: "Contrats d'Entretien Annuels", desc: "Des formules flexibles à l'année pour la tonte de pelouse, la taille de haies et le ramassage des feuilles mortes." },
    ],
    features: [
      "Entretien régulier ou ponctuel de pelouses et parterres",
      "Élagage, ébranchage & étêtage de grands arbres",
      "Abattage d'arbres dangereux par démontage sécurisé",
      "Taille de haies, d'arbustes et d'arbres fruitiers",
      "Aménagement de terrasses, allées et plantations",
    ],
    subServices: [
      {
        slug: "entretien-de-jardin-et-espaces-verts",
        title: "Entretien de Jardin & Espaces Verts",
        desc: "Tonte de gazon, désherbage de massifs, scarification de pelouse, ramassage des feuilles et remise en état complète de jardins à l'abandon.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/548-2e5fd2c5/Garden_Maintenance_%26_Green_Spaces_202607182005.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/548-2e5fd2c5/Garden_Maintenance_%26_Green_Spaces_202607182005.jpeg",
          "https://deb-pro-service.odoo.com/web/image/547-22071d1d/Garden_Maintenance_%26_Green_Spaces_202607182005%20%281%29.jpeg",
        ],
      },
      {
        slug: "elagage-et-etete-arbres-haute-hauteur",
        title: "Élagage & Taille d'Arbres",
        desc: "Taille de sécurité, d'éclaircie ou de restructuration de vos arbres. Préservation de la santé végétale et de l'harmonie de l'arbre.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/549-4cca5710/Tree_Pruning_%26_Trimming_202607182005%20%281%29.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/549-4cca5710/Tree_Pruning_%26_Trimming_202607182005%20%281%29.jpeg",
          "https://deb-pro-service.odoo.com/web/image/550-4b4211df/Tree_Pruning_%26_Trimming_202607182005.jpeg",
        ],
      },
      {
        slug: "abattage-arbres-dangereux-demontage-securise",
        title: "Abattage d'Arbres Dangereux",
        desc: "Abattage complet ou démontage avec système de rétention pour tronçonner et descendre les branches en toute sécurité au-dessus des habitations.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/552-947085ae/Dangerous_Tree_Removal_202607182005.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/552-947085ae/Dangerous_Tree_Removal_202607182005.jpeg",
          "https://deb-pro-service.odoo.com/web/image/551-b79bc05c/Dangerous_Tree_Removal_202607182005%20%281%29.jpeg",
        ],
      },
      {
        slug: "taille-de-haies-et-arbustes-sur-mesure",
        title: "Taille de Haies & d'Arbustes",
        desc: "Taille droite, mise en forme et rabattage de vos haies de thuyas, lauriers ou ifs pour un jardin impeccable et bien délimité.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/554-d58d214d/Hedge_and_shrub_trimming_202607182004.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/554-d58d214d/Hedge_and_shrub_trimming_202607182004.jpeg",
          "https://deb-pro-service.odoo.com/web/image/553-4397f452/Hedge_and_shrub_trimming_202607182004%20%281%29.jpeg",
        ],
      },
      {
        slug: "amenagement-paysager-terrasses-et-plantations",
        title: "Aménagement Paysager & Création",
        desc: "Création de pelouse (semis ou rouleaux), plantation de massifs, pose de clôtures, d'allées de jardin et de terrasses en bois ou pavés.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/556-bff484a7/Landscaping_and_Creation_202607182004.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/556-bff484a7/Landscaping_and_Creation_202607182004.jpeg",
          "https://deb-pro-service.odoo.com/web/image/555-67bb18a9/Landscaping_and_Creation_202607182004%20%281%29.jpeg",
        ],
      },
    ],
    color: {
      bg: "bg-emerald-500/20",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      glow: "bg-emerald-500",
    },
    testimonial: {
      text: "Nous avons confié l'élagage de deux chênes centenaires très proches de notre toiture à DEB PRO SERVICES. Équipe ultra-équipée, travail de grimpe impressionnant et sécurité totale. Le jardin a été rendu extrêmement propre !",
      author: "Jean-Pierre V., Brabant Wallon",
    },
    faqs: [
      {
        question: "Quelle est la meilleure période pour élaguer un arbre en Belgique ?",
        answer:
          "L'élagage se pratique principalement durant le repos végétatif (de fin automne à la fin de l'hiver, hors périodes de gel), ce qui limite la perte de sève. Cependant, la 'taille en vert' est tout à fait possible et recommandée en été pour certains feuillus, permettant une cicatrisation plus rapide.",
      },
      {
        question: "Avez-vous une assurance en cas de dégâts lors d'un abattage ?",
        answer:
          "Oui, absolument. DEB PRO SERVICES dispose d'une assurance Responsabilité Civile (RC) professionnelle couvrant l'ensemble de nos activités d'élagage et d'abattage d'arbres. En cas d'incident ou de dommages matériels sur votre propriété ou celle d'un voisin, vous êtes entièrement protégé.",
      },
      {
        question: "Faut-il un permis pour abattre un arbre en Belgique ?",
        answer:
          "Dans la plupart des régions et communes belges (notamment en Wallonie et à Bruxelles), un permis d'urbanisme est obligatoire pour abattre un arbre considéré comme 'remarquable' ou ayant une circonférence de tronc supérieure à une certaine taille (généralement 40 cm à 1,50 m de hauteur). Nous vous conseillons et vous accompagnons dans ces démarches.",
      },
      {
        question: "Que faites-vous du bois et des branches coupées ?",
        answer:
          "Nous proposons plusieurs options de manière flexible : nous pouvons broyer les petites branches sur place (le broyat peut servir de paillage pour vos parterres), débiter le tronc principal en bûches prêtes pour votre chauffage, ou tout évacuer intégralement vers un centre de compostage agréé.",
      },
    ],
  },
  {
    id: "peinture",
    slug: "peinture",
    title: "Peinture & Finitions",
    icon: Palette,
    imageUrl:
      "https://debouchageexpress24hh.odoo.com/web/image/4083-e1a8d1d4/regenerated_image_1777331518753.png?height=600",
    description:
      "Entreprise de peinture et finitions professionnelle en Belgique. Peintres et artisans agréés pour vos travaux de peinture intérieure et extérieure, aménagement et pose de cuisines équipées, toiture et étanchéité (roofing), revêtements de sol (parquet & stratifié), et Gyproc & plâtrerie. Devis gratuit sans engagement, finitions soignées et garantie décennale.",
    trustPoints: [
      { title: "Devis Gratuit sous 24h", desc: "Visite technique sur site et devis détaillé sans engagement partout en Belgique." },
      { title: "Peintres Qualifiés & Soignés", desc: "Protection rigoureuse des sols et meubles, préparation méticuleuse et finitions impeccables." },
      { title: "Peintures Écologiques Premium", desc: "Utilisation de peintures dépolluantes, sans COV, lavables et haute durabilité (Sikkens, Boss Paints)." },
      { title: "Garantie Décennale & Nettoyage", desc: "Chantier rendu parfaitement propre, travaux couverts par notre garantie et assurance professionnelle." },
    ],
    features: [
      "Peinture intérieure murs, plafonds & moulures",
      "Peinture extérieure & ravalement de façade",
      "Aménagement & pose de cuisines équipées sur mesure",
      "Toiture & étanchéité (roofing toits plats & terrasses)",
      "Revêtements de sol (parquet massif, stratifié & époxy)",
      "Gyproc & plâtrerie (cloisons, faux plafonds & plâtre)",
      "Préparation des supports, enduisage & plafonnage",
      "Peinture boiseries, châssis & portes",
    ],
    subServices: [
      {
        slug: "peinture-interieure-murs-et-plafonds",
        title: "Peinture Intérieure (Murs & Plafonds)",
        desc: "Mise en peinture haute précision de vos murs, plafonds, moulures et boiseries intérieures avec peintures écologiques à haute résistance.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/636-8db3f049/WhatsApp%20Image%202026-07-29%20at%20DCDCD.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/636-8db3f049/WhatsApp%20Image%202026-07-29%20at%20DCDCD.jpeg",
          "https://deb-pro-service.odoo.com/web/image/637-481b1760/WhatsApp%20Image%202026-07-29%20at%2001.01.18SEQ.jpeg",
          "https://deb-pro-service.odoo.com/web/image/646-8db3f049/P.jpeg",
          "https://deb-pro-service.odoo.com/web/image/647-313f6724/EDEEFEFEDE.jpeg",
        ],
      },
      {
        slug: "peinture-exterieure-et-facade",
        title: "Peinture Extérieure & Façades",
        desc: "Traitement, imperméabilisation et peinture protectrice pour vos façades, pignons, murs extérieurs et corniches.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/638-38c75153/WhatsApp%20Image%202026-07-29%20at%2001.01.18DCSDCSCS.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/638-38c75153/WhatsApp%20Image%202026-07-29%20at%2001.01.18DCSDCSCS.jpeg",
          "https://deb-pro-service.odoo.com/web/image/639-cc624dcb/WhatsApp%20Image%202026-07-29%20at%2001.01.18DCC%25.jpeg",
          "https://deb-pro-service.odoo.com/web/image/648-b8a9477d/EDEDEDECECECE.jpeg",
          "https://deb-pro-service.odoo.com/web/image/658-79ba2356/DCD.jpeg",
        ],
      },
      {
        slug: "preparation-enduisage-et-plafonnage",
        title: "Préparation, Enduisage & Plafonnage",
        desc: "Lissage complet de vos murs, rebouchage des fissures, ponçage sans poussière et pose de voile de verre ou papier peint.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/642-48caab7e/WhatsApp%20Image%202026-07-29%20at%2001.01.09%20%281%29SCDCS.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/642-48caab7e/WhatsApp%20Image%202026-07-29%20at%2001.01.09%20%281%29SCDCS.jpeg",
          "https://deb-pro-service.odoo.com/web/image/643-9eb37167/WhatsApp%20Image%202026-07-29%20at%2000.46.37CDCSDCSCS.jpeg",
          "https://deb-pro-service.odoo.com/web/image/654-6084151d/DCSCSDCSCSC.jpeg",
        ],
      },
      {
        slug: "peinture-boiseries-chassis-portes",
        title: "Peinture Boiseries, Châssis & Portes",
        desc: "Rénovation, ponçage et mise en peinture ou lasure de vos portes, châssis en bois/alu, escaliers et garde-corps.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/640-bdac2999/WhatsApp%20Image%202026-07-29%20at%2001.01.18CS.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/640-bdac2999/WhatsApp%20Image%202026-07-29%20at%2001.01.18CS.jpeg",
          "https://deb-pro-service.odoo.com/web/image/641-6b9f38d2/WhatsApp%20Image%202026-07-29%20at%2001.01.18%20DCSDCSCS.jpeg",
          "https://deb-pro-service.odoo.com/web/image/657-71e935c8/DCDCSSSXS.jpeg",
        ],
      },
      {
        slug: "peinture-epoxy-et-revetements-sols",
        title: "Peinture Époxy & Revêtements de Sol",
        desc: "Application de résines époxy ultra-résistantes pour sols de garages, ateliers, caves, cuisines industrielles et locaux commerciaux.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/645-7d4069bf/SQXSCSDCSCSC.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/645-7d4069bf/SQXSCSDCSCSC.jpeg",
          "https://deb-pro-service.odoo.com/web/image/644-80f1c033/WhatsApp%20Image%202026-07-29%20at%2000.46.37.jpeg",
        ],
      },
      {
        slug: "amenagement-et-pose-de-cuisines",
        title: "Aménagement & Pose de Cuisines",
        desc: "Installation complète de cuisines équipées et assemblage de mobilier sur mesure.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/649-b9d63242/DCSDCSDCSD.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/649-b9d63242/DCSDCSDCSD.jpeg",
          "https://deb-pro-service.odoo.com/web/image/651-09ff25bf/DCSDCSDCSCS.jpeg?height=256",
        ],
      },
      {
        slug: "toiture-et-etancheite-roofing",
        title: "Toiture & Étanchéité (Roofing)",
        desc: "Travaux d'étanchéité pour toits plats et terrasses (pose et réfection de roofing).",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/648-b8a9477d/EDEDEDECECECE.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/648-b8a9477d/EDEDEDECECECE.jpeg",
          "https://deb-pro-service.odoo.com/web/image/638-38c75153/WhatsApp%20Image%202026-07-29%20at%2001.01.18DCSDCSCS.jpeg",
        ],
      },
      {
        slug: "revetements-de-sol-parquet-et-stratifie",
        title: "Revêtements de Sol (Parquet & Stratifié)",
        desc: "Fourniture et pose de parquet massif, semi-massif et sol stratifié (laminat).",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/659-82d32629/CSDCSDCSS.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/659-82d32629/CSDCSDCSS.jpeg",
          "https://deb-pro-service.odoo.com/web/image/644-80f1c033/WhatsApp%20Image%202026-07-29%20at%2000.46.37.jpeg",
        ],
      },
      {
        slug: "gyproc-et-platrerie",
        title: "Gyproc & Plâtrerie",
        desc: "Pose de cloisons, faux plafonds en Gyproc et travaux de plâtre traditionnels.",
        imageUrl:
          "https://deb-pro-service.odoo.com/web/image/654-6084151d/DCSCSDCSCSC.jpeg",
        galleryImages: [
          "https://deb-pro-service.odoo.com/web/image/654-6084151d/DCSCSDCSCSC.jpeg",
          "https://deb-pro-service.odoo.com/web/image/656-90ccc0be/DCSCSCSCS.jpeg",
          "https://deb-pro-service.odoo.com/web/image/655-9bb2d004/DCSCSCSDCDCSD.jpeg",
        ],
      },
    ],
    color: {
      bg: "bg-purple-500/20",
      text: "text-purple-400",
      border: "border-purple-500/30",
      glow: "bg-purple-500",
    },
    testimonial: {
      text: "Une rénovation peinture complète de notre maison à Bruxelles. Protection des meubles parfaite, finitions des plafonds très lisses. Je recommande les yeux fermés !",
      author: "Catherine M., Bruxelles",
    },
    faqs: [
      {
        question: "Quel est le prix au m² pour des travaux de peinture en Belgique ?",
        answer:
          "En Belgique, le tarif moyen pour de la peinture intérieure se situe entre 20€ et 40€ / m² (fourniture et pose incluses), selon l'état de préparation des murs (enduisage, lissage) et le nombre de couches requises.",
      },
      {
        question: "Utilisez-vous des peintures écologiques et sans odeur ?",
        answer:
          "Oui, nous privilégions des peintures professionnelles à faible émission de COV (composés organiques volatils), sans odeur forte, hypoallergéniques et respectueuses de l'environnement et de la santé.",
      },
      {
        question: "Comment préparez-vous le chantier avant de peindre ?",
        answer:
          "Notre équipe protège intégralement vos sols, fenêtres et meubles avec des bâches étanches et du ruban de masquage de précision. Après les travaux, nous nettoyons le chantier pour vous rendre une pièce impeccable.",
      },
      {
        question: "Proposez-vous un devis gratuit pour la peinture de maison ?",
        answer:
          "Absolument. Nous effectuons un déplacement gratuit sur site partout en Belgique pour mesurer la surface et évaluer l'état des murs, puis vous remettons un devis détaillé clair sous 24 à 48 heures.",
      },
    ],
  },
];
