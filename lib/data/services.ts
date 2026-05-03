import { Wrench, Flame, Droplets, Zap, Wind, Truck, Home } from "lucide-react";

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
];
