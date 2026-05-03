export type CityData = {
  description: string;
  interventionTime: string;
  landmark: string;
};

export const cityData: Record<string, CityData> = {
  // BRUXELLES-CAPITALE
  "bruxelles": {
    description: "Bruxelles, capitale de la Belgique et siège de l'Union Européenne, concentre une grande densité d'immeubles anciens, de maisons de maître et d'appartements haussmanniens dont les installations techniques nécessitent un entretien régulier et rigoureux.",
    interventionTime: "30 minutes",
    landmark: "de la Grand-Place au quartier européen",
  },
  "ixelles": {
    description: "Ixelles, commune bruxelloise prisée des étudiants, des expatriés et des familles, compte de nombreux immeubles bourgeois Art Nouveau et Art Déco dont les réseaux de plomberie et de chauffage sont souvent à moderniser.",
    interventionTime: "25 minutes",
    landmark: "des étangs d'Ixelles au quartier Flagey",
  },
  "schaerbeek": {
    description: "Schaerbeek abrite un remarquable patrimoine architectural Art Nouveau et Art Déco, avec des maisons de rapport et des immeubles de la Belle Époque dont les installations techniques intérieures méritent une attention particulière.",
    interventionTime: "25 minutes",
    landmark: "de la Place Colignon au quartier Josaphat",
  },
  "anderlecht": {
    description: "Anderlecht, commune bruxelloise en plein essor résidentiel, compte de nombreuses maisons mitoyennes d'avant-guerre et des logements sociaux dont les installations sanitaires et de chauffage bénéficient régulièrement de nos interventions.",
    interventionTime: "25 minutes",
    landmark: "de la Grand-Place d'Anderlecht au quartier Cureghem",
  },
  "molenbeek-saint-jean": {
    description: "Molenbeek-Saint-Jean, commune dynamique en pleine transformation urbaine, mêle habitat ancien densément peuplé et constructions récentes, avec des besoins techniques variés allant de la rénovation complète à l'entretien courant.",
    interventionTime: "25 minutes",
    landmark: "des bords du canal au centre historique",
  },
  "jette": {
    description: "Jette, commune résidentielle verdoyante au nord-ouest de Bruxelles, compte de nombreuses villas et maisons quatre façades des années 50-70 dont les systèmes de chauffage et de plomberie nécessitent un entretien régulier.",
    interventionTime: "30 minutes",
    landmark: "du parc de Jette au quartier Karreveld",
  },
  "laeken": {
    description: "Laeken, quartier royal et populaire à la fois, concentre un tissu résidentiel varié allant des maisons ouvrières aux appartements modernes, avec des installations techniques de générations différentes.",
    interventionTime: "30 minutes",
    landmark: "du Château Royal de Laeken à l'Atomium",
  },
  "etterbeek": {
    description: "Etterbeek, commune du quartier européen par excellence, héberge de nombreux immeubles de bureaux reconvertis et des appartements résidentiels dont les réseaux techniques sont souvent sollicités par une forte densité d'occupation.",
    interventionTime: "25 minutes",
    landmark: "du Square Montgomery au quartier des institutions européennes",
  },
  "woluwe-saint-pierre": {
    description: "Woluwe-Saint-Pierre, commune résidentielle aisée à l'est de Bruxelles, est composée de villas et d'appartements de standing dont les installations de chauffage et de plomberie requièrent un prestataire fiable et certifié.",
    interventionTime: "30 minutes",
    landmark: "du parc de Woluwe au quartier Montgomery",
  },
  "woluwe-saint-lambert": {
    description: "Woluwe-Saint-Lambert, commune familiale appréciée pour ses parcs et sa qualité de vie, compte de nombreuses maisons quatre façades et immeubles résidentiels dont les équipements techniques bénéficient de nos interventions régulières.",
    interventionTime: "30 minutes",
    landmark: "du Moulin de Lindekemale au quartier Diamant",
  },
  "uccle": {
    description: "Uccle, commune verdoyante au sud de Bruxelles, abrite de nombreuses villas bourgeoises et propriétés de prestige dont les systèmes de chauffage, de gaz et de plomberie sont confiés à nos techniciens agréés.",
    interventionTime: "35 minutes",
    landmark: "du parc de Wolvendael au quartier Prince d'Orange",
  },
  "forest": {
    description: "Forest, commune populaire et créative à l'identité forte, mêle maisons ouvrières rénovées et immeubles résidentiels avec des installations techniques souvent à mettre aux normes actuelles.",
    interventionTime: "25 minutes",
    landmark: "de l'abbaye de Forest au quartier Altitude 100",
  },
  "evere": {
    description: "Evere, commune à forte densité résidentielle au nord de Bruxelles, regroupe de nombreux immeubles d'appartements et maisons dont les installations de plomberie et de chauffage nécessitent un suivi technique régulier.",
    interventionTime: "30 minutes",
    landmark: "de la Cité Modèle au quartier NATO",
  },
  "auderghem": {
    description: "Auderghem, commune résidentielle boisée dans le sud-est bruxellois, est composée principalement de villas et d'appartements récents dont les équipements techniques sont gérés par nos techniciens certifiés.",
    interventionTime: "35 minutes",
    landmark: "du Rouge-Cloître au quartier Val Duchesse",
  },
  "ganshoren": {
    description: "Ganshoren, petite commune résidentielle au calme du nord-ouest bruxellois, compte de nombreuses maisons familiales et immeubles d'appartements dont les installations sanitaires font appel à notre expertise locale.",
    interventionTime: "30 minutes",
    landmark: "du parc Garcet au centre de Ganshoren",
  },
  "koekelberg": {
    description: "Koekelberg, commune emblématique dominée par la Basilique du Sacré-Cœur, concentre un habitat dense de maisons mitoyennes et d'appartements anciens dont les réseaux techniques méritent une attention régulière.",
    interventionTime: "25 minutes",
    landmark: "de la Basilique du Sacré-Cœur au parc Elisabeth",
  },
  "saint-gilles": {
    description: "Saint-Gilles, commune vibrante au riche patrimoine Art Nouveau, abrite une multitude d'immeubles bourgeois historiques dont les installations intérieures, souvent centenaires, requièrent un savoir-faire technique particulier.",
    interventionTime: "25 minutes",
    landmark: "de la Maison Horta au quartier Parvis",
  },
  "saint-josse-ten-noode": {
    description: "Saint-Josse-ten-Noode, la plus petite et la plus densément peuplée des communes bruxelloises, concentre de nombreux immeubles de rapport anciens dont les installations techniques sont fréquemment sollicitées.",
    interventionTime: "20 minutes",
    landmark: "de la Place Saint-Josse au quartier Madou",
  },
  "watermael-boitsfort": {
    description: "Watermael-Boitsfort, commune verdoyante et résidentielle en bordure de la Forêt de Soignes, compte de nombreuses maisons cités-jardins et villas dont les installations techniques sont entretenues avec soin par nos équipes.",
    interventionTime: "35 minutes",
    landmark: "de la Forêt de Soignes au quartier Beaulieu",
  },
  "berchem-sainte-agathe": {
    description: "Berchem-Sainte-Agathe, commune résidentielle apaisée au nord-ouest de Bruxelles, regroupe des maisons familiales et appartements dont les équipements de plomberie et chauffage font régulièrement appel à notre expertise.",
    interventionTime: "30 minutes",
    landmark: "du parc de Berchem au centre de la commune",
  },

  // BRABANT FLAMAND
  "grimbergen": {
    description: "Grimbergen, commune flamande en périphérie nord de Bruxelles, mêle habitat rural traditionnel et lotissements résidentiels modernes avec des besoins techniques diversifiés couverts par nos techniciens locaux.",
    interventionTime: "35 minutes",
    landmark: "de l'abbaye de Grimbergen au centre historique",
  },
  "vilvorde": {
    description: "Vilvorde, ville industrielle et résidentielle au carrefour du Brabant Flamand, compte de nombreuses maisons ouvrières et immeubles résidentiels dont les réseaux techniques bénéficient de nos interventions rapides.",
    interventionTime: "35 minutes",
    landmark: "du centre-ville au bord du canal",
  },
  "hal": {
    description: "Halle, ville historique du Brabant Flamand célèbre pour sa basilique gothique, concentre un tissu résidentiel varié allant du centre-ville ancien aux lotissements périurbains avec des besoins techniques de tous types.",
    interventionTime: "40 minutes",
    landmark: "de la Basilique Saint-Martin au centre historique",
  },
  "zaventem": {
    description: "Zaventem, commune dynamique à proximité de l'aéroport de Bruxelles-National, accueille de nombreux logements résidentiels et professionnels dont les installations techniques sont assurées par nos équipes certifiées.",
    interventionTime: "35 minutes",
    landmark: "du centre-ville à l'aéroport de Bruxelles",
  },
  "leuven": {
    description: "Louvain, ville universitaire flamande par excellence et capitale du Brabant Flamand, concentre une forte population étudiante dans des logements aux besoins d'entretien fréquents, ainsi que de nombreuses maisons historiques à maintenir.",
    interventionTime: "40 minutes",
    landmark: "de la Grand-Place de Louvain au quartier universitaire",
  },
  "asse": {
    description: "Asse, commune rurale et résidentielle du Brabant Flamand, regroupe principalement des maisons individuelles et des fermes rénovées dont les installations techniques nécessitent un suivi régulier par des professionnels certifiés.",
    interventionTime: "40 minutes",
    landmark: "du centre d'Asse aux polders environnants",
  },
  "dilbeek": {
    description: "Dilbeek, commune résidentielle verdoyante à l'ouest de Bruxelles, concentre de nombreuses villas et maisons quatre façades dont les systèmes de chauffage et de plomberie sont entretenus par nos techniciens agréés.",
    interventionTime: "35 minutes",
    landmark: "du moulin de Dilbeek au domaine provincial",
  },
  "wemmel": {
    description: "Wemmel, petite commune résidentielle aisée au nord de Bruxelles, abrite principalement des villas et maisons de qualité dont les installations techniques sont confiées à des professionnels certifiés comme notre équipe.",
    interventionTime: "30 minutes",
    landmark: "du centre de Wemmel au Laarbeekbos",
  },
  "kraainem": {
    description: "Kraainem, commune facilité à l'est de Bruxelles, est composée majoritairement de maisons résidentielles de standing dont les installations de gaz, chauffage et plomberie requièrent notre expertise technique.",
    interventionTime: "35 minutes",
    landmark: "du centre de Kraainem au quartier Rhode-Saint-Genèse",
  },
  "tervuren": {
    description: "Tervuren, commune historique au cœur du Brabant Flamand célèbre pour son parc royal et son musée africain, concentre de nombreuses villas et propriétés dont les équipements techniques sont assurés par nos techniciens.",
    interventionTime: "40 minutes",
    landmark: "du Musée Royal de l'Afrique Centrale au parc de Tervuren",
  },
  "machelen": {
    description: "Machelen, commune industrielle et résidentielle proche de l'aéroport, concentre un mix d'habitations familiales et de logements récents dont les installations techniques font appel à notre expertise locale.",
    interventionTime: "35 minutes",
    landmark: "du centre de Machelen à la zone industrielle",
  },
  "tirlemont": {
    description: "Tirlemont (Tienen), ville sucrière historique du Brabant Flamand, abrite un centre-ville avec de nombreuses maisons anciennes et un tissu résidentiel périurbain aux besoins techniques variés.",
    interventionTime: "50 minutes",
    landmark: "de l'église Notre-Dame au Suikerrock",
  },
  "aarschot": {
    description: "Aarschot, ville médiévale du Brabant Flamand traversée par la Demer, compte de nombreuses maisons anciennes en centre-ville et des lotissements résidentiels dont les installations techniques nécessitent un entretien régulier.",
    interventionTime: "55 minutes",
    landmark: "de la Tour de Diesthempoort au centre historique",
  },

  // BRABANT WALLON
  "wavre": {
    description: "Wavre, chef-lieu du Brabant Wallon en pleine expansion résidentielle, voit ses constructions récentes côtoyer un centre historique dont les bâtisses centenaires nécessitent une expertise technique spécialisée.",
    interventionTime: "45 minutes",
    landmark: "des bords de la Dyle au parc Walibi",
  },
  "nivelles": {
    description: "Nivelles, ville historique du Brabant Wallon dont la collégiale Sainte-Gertrude témoigne d'un riche passé, concentre un habitat mixte allant du centre ancien aux lotissements résidentiels avec des besoins techniques diversifiés.",
    interventionTime: "50 minutes",
    landmark: "de la Collégiale Sainte-Gertrude au centre historique",
  },
  "waterloo": {
    description: "Waterloo, commune résidentielle aisée du Brabant Wallon célèbre pour sa bataille historique, est composée principalement de villas et maisons quatre façades dont les installations techniques sont confiées à des professionnels certifiés.",
    interventionTime: "40 minutes",
    landmark: "du Mémorial de Waterloo au centre-ville",
  },
  "braine-lalleud": {
    description: "Braine-l'Alleud, commune résidentielle dynamique du Brabant Wallon, concentre de nombreuses maisons familiales et résidences récentes dont les installations de plomberie, chauffage et gaz nécessitent un suivi technique régulier.",
    interventionTime: "45 minutes",
    landmark: "du centre historique au plateau du Lion",
  },
  "tubize": {
    description: "Tubize, commune industrielle et résidentielle traversée par la Senne, mêle habitat ouvrier traditionnel et constructions récentes avec des besoins d'entretien technique variés couverts par notre équipe.",
    interventionTime: "50 minutes",
    landmark: "de la Grand-Place de Tubize au parc du château",
  },
  "rixensart": {
    description: "Rixensart, commune résidentielle verdoyante du Brabant Wallon, abrite de nombreuses villas et maisons de campagne dont les installations de chauffage et de plomberie sont entretenues par nos techniciens certifiés.",
    interventionTime: "45 minutes",
    landmark: "du Château de Rixensart aux bois environnants",
  },
  "ottignies-louvain-la-neuve": {
    description: "Ottignies-Louvain-la-Neuve, ville universitaire innovante du Brabant Wallon, combine une cité piétonne ultramoderne et des quartiers résidentiels avec des besoins techniques spécifiques à chaque type de bâtiment.",
    interventionTime: "50 minutes",
    landmark: "du campus universitaire au centre d'Ottignies",
  },
  "jodoigne": {
    description: "Jodoigne, ville rurale et tranquille du Brabant Wallon traversée par la Gette, concentre des maisons de village traditionnelles et des fermes rénovées dont les installations techniques requièrent notre expertise.",
    interventionTime: "55 minutes",
    landmark: "de l'église Saint-Médard au marché hebdomadaire",
  },
  "genappe": {
    description: "Genappe, commune rurale du Brabant Wallon proche du site de la bataille de Waterloo, regroupe principalement des maisons individuelles et fermes rénovées dont les systèmes techniques nécessitent un entretien professionnel.",
    interventionTime: "55 minutes",
    landmark: "du centre de Genappe aux campagnes du Brabant",
  },
  "braine-le-chateau": {
    description: "Braine-le-Château, charmante commune du Brabant Wallon dominée par son château médiéval, abrite un habitat résidentiel traditionnel dont les installations techniques sont assurées avec soin par nos équipes.",
    interventionTime: "50 minutes",
    landmark: "du Château de Braine-le-Château au moulin banal",
  },

  // HAINAUT
  "charleroi": {
    description: "Charleroi, métropole industrielle en pleine renaissance urbaine, compte de nombreuses maisons ouvrières et immeubles des années 60-80 en cours de rénovation dont les installations techniques méritent une mise à jour complète.",
    interventionTime: "40 minutes",
    landmark: "du centre-ville au Pays Noir",
  },
  "mons": {
    description: "Mons, ancienne capitale du Hainaut et ville universitaire dynamique, mêle patrimoine architectural médiéval remarquable et constructions modernes avec des besoins techniques allant de la restauration historique à l'installation neuve.",
    interventionTime: "40 minutes",
    landmark: "du Beffroi de Mons au quartier du Grand Large",
  },
  "tournai": {
    description: "Tournai, l'une des plus anciennes villes de Belgique dont la cathédrale gothique est classée UNESCO, abrite de nombreuses maisons de ville historiques et immeubles anciens dont les installations techniques sont souvent à moderniser.",
    interventionTime: "50 minutes",
    landmark: "de la Cathédrale Notre-Dame au Pont des Trous",
  },
  "la-louviere": {
    description: "La Louvière, ville industrielle du centre-Hainaut à l'histoire ouvrière forte, concentre de nombreuses maisons de cités minières et immeubles résidentiels dont les réseaux techniques nécessitent un entretien régulier.",
    interventionTime: "45 minutes",
    landmark: "du centre-ville aux bords du canal du Centre",
  },
  "mouscron": {
    description: "Mouscron, ville frontière avec la France dans l'ouest du Hainaut, regroupe un habitat résidentiel dense avec de nombreuses maisons mitoyennes dont les installations techniques sont régulièrement entretenues par nos équipes.",
    interventionTime: "55 minutes",
    landmark: "du centre de Mouscron au quartier de la Gare",
  },
  "chatelet": {
    description: "Châtelet, commune de la région de Charleroi, compte de nombreuses maisons ouvrières et résidences de l'après-guerre dont les installations de plomberie et de chauffage bénéficient de nos interventions rapides.",
    interventionTime: "45 minutes",
    landmark: "des bords de la Sambre au centre de Châtelet",
  },
  "binche": {
    description: "Binche, ville médiévale célèbre pour son carnaval classé UNESCO, abrite de nombreuses maisons historiques et immeubles anciens dont les installations techniques nécessitent une expertise particulière respectueuse du patrimoine.",
    interventionTime: "50 minutes",
    landmark: "des remparts médiévaux au Grand-Place de Binche",
  },
  "courcelles": {
    description: "Courcelles, commune industrielle de la banlieue de Charleroi, regroupe un habitat résidentiel dense avec de nombreuses maisons familiales dont les systèmes de chauffage et de plomberie font régulièrement appel à notre expertise.",
    interventionTime: "45 minutes",
    landmark: "du centre de Courcelles aux anciennes zones industrielles",
  },
  "ath": {
    description: "Ath, ville wallonne célèbre pour son Gouyasse géant et ses Géants de la Ducasse, concentre un habitat traditionnel du Hainaut avec des maisons de ville et fermes dont les installations techniques nécessitent un suivi professionnel.",
    interventionTime: "55 minutes",
    landmark: "de la Tour Burbant au Grand-Place d'Ath",
  },
  "soignies": {
    description: "Soignies, petite ville du Hainaut célèbre pour son marbre bleu et sa collégiale romane, abrite un tissu résidentiel traditionnel avec des maisons de village dont les installations techniques requièrent notre expertise certifiée.",
    interventionTime: "55 minutes",
    landmark: "de la Collégiale Saint-Vincent au centre historique",
  },

  // LIÈGE
  "liege": {
    description: "Liège, ville industrielle et universitaire en pleine transformation, compte de nombreuses maisons de maître et immeubles de la Belle Époque dans son centre historique dont les réseaux de plomberie et de chauffage sont souvent à moderniser.",
    interventionTime: "35 minutes",
    landmark: "des bords de Meuse au quartier d'Outremeuse",
  },
  "seraing": {
    description: "Seraing, ancienne capitale sidérurgique belge en reconversion, concentre un habitat ouvrier dense avec de nombreuses maisons de cités et immeubles résidentiels dont les installations techniques bénéficient de nos interventions.",
    interventionTime: "40 minutes",
    landmark: "des anciens hauts fourneaux au bord de Meuse",
  },
  "verviers": {
    description: "Verviers, ancienne capitale mondiale de la laine en vallée de la Vesdre, abrite de nombreux immeubles industriels reconvertis et maisons ouvrières dont les installations techniques sont régulièrement entretenues par nos équipes.",
    interventionTime: "50 minutes",
    landmark: "du centre historique aux bords de la Vesdre",
  },
  "herstal": {
    description: "Herstal, commune industrielle de la banlieue liégeoise réputée pour sa manufacture d'armes FN, concentre un habitat ouvrier dense avec des maisons mitoyennes dont les réseaux techniques nécessitent un entretien régulier.",
    interventionTime: "40 minutes",
    landmark: "du Château de Herstal aux bords de Meuse",
  },
  "ans": {
    description: "Ans, commune résidentielle en hauteur dominant Liège, regroupe de nombreuses maisons familiales et immeubles d'appartements dont les installations de chauffage et de plomberie font appel à notre expertise locale.",
    interventionTime: "40 minutes",
    landmark: "du plateau d'Ans au panorama sur la Meuse",
  },
  "flemalle": {
    description: "Flémalle, commune de la banlieue liégeoise en bord de Meuse, compte un habitat résidentiel varié allant des maisons ouvrières traditionnelles aux constructions récentes avec des besoins techniques de tous types.",
    interventionTime: "45 minutes",
    landmark: "des bords de Meuse au plateau de Flémalle",
  },
  "oupeye": {
    description: "Oupeye, commune résidentielle de la banlieue liégeoise proche de l'aéroport de Liège, regroupe principalement des maisons familiales et lotissements récents dont les installations techniques sont assurées par nos techniciens.",
    interventionTime: "40 minutes",
    landmark: "du centre d'Oupeye à l'aéroport de Liège",
  },
  "huy": {
    description: "Huy, ville médiévale au confluent de la Meuse et du Hoyoux, célèbre pour sa citadelle et son pont gothique, abrite de nombreuses maisons de ville anciennes et immeubles dont les installations techniques méritent notre attention.",
    interventionTime: "50 minutes",
    landmark: "de la Citadelle de Huy au pont gothique",
  },
  "waremme": {
    description: "Waremme, chef-lieu de l'arrondissement de Waremme en Hesbaye liégeoise, concentre des maisons de village traditionnelles et fermes rénovées dont les installations techniques sont entretenues par nos techniciens certifiés.",
    interventionTime: "55 minutes",
    landmark: "du centre de Waremme aux plateaux de Hesbaye",
  },
  "spa": {
    description: "Spa, ville thermale de renommée internationale nichée dans les Ardennes liégeoises, abrite de nombreux hôtels, villas belle époque et chalets dont les installations techniques complexes requièrent notre expertise spécialisée.",
    interventionTime: "60 minutes",
    landmark: "des thermes de Spa au circuit de Francorchamps",
  },

  // NAMUR
  "namur": {
    description: "Namur, capitale de la Wallonie nichée au confluent de la Sambre et de la Meuse et dominée par sa citadelle imprenable, possède un bâti varié allant des maisons de ville historiques aux résidences périurbaines modernes.",
    interventionTime: "35 minutes",
    landmark: "de la Citadelle de Namur au confluent Sambre-Meuse",
  },
  "gembloux": {
    description: "Gembloux, ville universitaire agricole du Namurois célèbre pour sa Faculté des Sciences Agronomiques, abrite un habitat résidentiel varié avec des maisons de ville et lotissements dont les installations nécessitent un suivi régulier.",
    interventionTime: "45 minutes",
    landmark: "du centre abbatial au campus de Gembloux Agro-Bio Tech",
  },
  "andenne": {
    description: "Andenne, ville de la vallée mosane au riche passé mérovingien, regroupe de nombreuses maisons de village et résidences riveraines dont les installations de plomberie et chauffage font appel à notre expertise technique.",
    interventionTime: "50 minutes",
    landmark: "des bords de Meuse au centre historique d'Andenne",
  },
  "sambreville": {
    description: "Sambreville, commune industrielle en reconversion le long de la Sambre, concentre un habitat ouvrier dense avec des maisons mitoyennes et logements collectifs dont les réseaux techniques bénéficient de nos interventions rapides.",
    interventionTime: "45 minutes",
    landmark: "des bords de la Sambre au centre de Tamines",
  },
  "ciney": {
    description: "Ciney, capitale du Condroz namurois et carrefour rural important, regroupe des maisons de village traditionnelles et fermes condrusiennes dont les systèmes de chauffage et d'eau nécessitent un entretien professionnel régulier.",
    interventionTime: "55 minutes",
    landmark: "du centre de Ciney aux prairies du Condroz",
  },
  "dinant": {
    description: "Dinant, cité mosane emblématique dominée par sa citadelle et sa collégiale gothique, célèbre comme lieu de naissance d'Adolphe Sax, abrite de nombreuses maisons de ville et hôtels dont les installations techniques nécessitent notre expertise.",
    interventionTime: "60 minutes",
    landmark: "de la Citadelle de Dinant au rocher Bayard",
  },
  "couvin": {
    description: "Couvin, petite ville ardennaise en province de Namur aux portes de la France, regroupe des maisons de village traditionnelles et fermes ardennaises dont les installations de chauffage central nécessitent un entretien hivernal rigoureux.",
    interventionTime: "70 minutes",
    landmark: "du centre de Couvin aux grottes de Neptune",
  },

  // LUXEMBOURG
  "arlon": {
    description: "Arlon, chef-lieu de la Province de Luxembourg et ville la plus méridionale de Belgique avec un riche passé romain, concentre des maisons de ville historiques et résidences dont les installations techniques requièrent notre expertise.",
    interventionTime: "65 minutes",
    landmark: "de la Tour romaine au centre historique d'Arlon",
  },
  "bastogne": {
    description: "Bastogne, ville des Ardennes belges célèbre pour la Bataille des Ardennes de 1944, regroupe des maisons de village ardennaises et logements touristiques dont les systèmes de chauffage sont essentiels en hiver.",
    interventionTime: "70 minutes",
    landmark: "du Mémorial du Mardasson au centre de Bastogne",
  },
  "marche-en-famenne": {
    description: "Marche-en-Famenne, ville carrefour de l'Ardenne et de la Famenne, constitue un centre régional important avec des maisons de ville et résidences dont les installations techniques sont entretenues par nos techniciens certifiés.",
    interventionTime: "65 minutes",
    landmark: "du centre de Marche aux paysages de Famenne",
  },
  "durbuy": {
    description: "Durbuy, surnommée la plus petite ville du monde, est un joyau touristique ardennais avec de nombreuses maisons de caractère en pierre de taille et gîtes dont les installations techniques requièrent un savoir-faire particulier.",
    interventionTime: "60 minutes",
    landmark: "du château de Durbuy aux ruelles médiévales",
  },
  "virton": {
    description: "Virton, capitale de la Gaume belge aux influences loraines, abrite un habitat traditionnel gaumais avec des maisons en calcaire et fermes dont les systèmes de chauffage et de plomberie nécessitent notre expertise technique.",
    interventionTime: "75 minutes",
    landmark: "du centre gaumais aux frontières françaises",
  },
  "neufchateau": {
    description: "Neufchâteau, ville ardennaise du sud de la Province de Luxembourg, regroupe des maisons de ville et fermes ardennaises dont les installations techniques, particulièrement le chauffage, sont essentielles dans ce climat rigoureux.",
    interventionTime: "70 minutes",
    landmark: "de la Grand-Place de Neufchâteau aux forêts ardennaises",
  },
  "bouillon": {
    description: "Bouillon, ville touristique dominée par son château fort médiéval en bord de Semois, abrite de nombreuses maisons de village, hôtels et gîtes dont les installations techniques requièrent notre expertise spécialisée.",
    interventionTime: "70 minutes",
    landmark: "du Château de Bouillon aux méandres de la Semois",
  },
  "saint-hubert": {
    description: "Saint-Hubert, capitale ardennaise et haut lieu du pèlerinage à Saint Hubert patron des chasseurs, concentre des maisons de village et hôtels dont les systèmes de chauffage sont cruciaux dans ce climat ardennais.",
    interventionTime: "70 minutes",
    landmark: "de la Basilique Saint-Hubert aux forêts ardennaises",
  },
  "florenville": {
    description: "Florenville, petite ville touristique du pays gaumais dominant la vallée de la Semois, regroupe des maisons traditionnelles et gîtes dont les installations techniques sont assurées par nos techniciens même en zones rurales.",
    interventionTime: "75 minutes",
    landmark: "du panorama de Florenville aux rives de la Semois",
  },

  // LUXEMBOURG-VILLE (Grand-Duché)
  "luxembourg-ville": {
    description: "Luxembourg-Ville, capitale du Grand-Duché de Luxembourg et siège d'institutions européennes, concentre une grande densité d'immeubles modernes et résidences dont les installations techniques de haute qualité nécessitent notre expertise.",
    interventionTime: "60 minutes",
    landmark: "du Bock et ses casemates au quartier européen Kirchberg",
  },
  "esch-sur-alzette": {
    description: "Esch-sur-Alzette, deuxième ville du Grand-Duché en pleine renaissance urbaine sur les friches sidérurgiques, mêle habitat ancien et constructions contemporaines avec des besoins techniques variés couverts par nos équipes.",
    interventionTime: "65 minutes",
    landmark: "du centre d'Esch à la Terre Rouge en reconversion",
  },

  // FLANDRE OCCIDENTALE
  "bruges": {
    description: "Bruges, la Venise du Nord classée au patrimoine UNESCO, possède un centre historique exceptionnel avec des bâtiments médiévaux et des maisons de canal dont les infrastructures sanitaires nécessitent un savoir-faire technique particulier.",
    interventionTime: "55 minutes",
    landmark: "du Markt et son beffroi aux canaux du centre historique",
  },
  "courtrai": {
    description: "Courtrai, ville textile flamande sur la Lys au riche passé médiéval, abrite de nombreuses maisons de ville et immeubles résidentiels dont les installations techniques sont entretenues par nos techniciens certifiés.",
    interventionTime: "60 minutes",
    landmark: "du Broeltorens aux rives de la Lys",
  },
  "ostende": {
    description: "Ostende, reine des plages belges et station balnéaire par excellence, concentre de nombreux immeubles résidentiels en front de mer et villas dont les installations, soumises à l'humidité maritime, nécessitent un entretien régulier.",
    interventionTime: "65 minutes",
    landmark: "de la plage d'Ostende au port de pêche",
  },
  "roulers": {
    description: "Roulers, ville industrielle et commerciale de Flandre Occidentale, regroupe un habitat résidentiel dense avec des maisons mitoyennes et immeubles dont les installations techniques font régulièrement appel à notre expertise locale.",
    interventionTime: "60 minutes",
    landmark: "du centre de Roulers au parc Stasegem",
  },
  "ypres": {
    description: "Ypres, ville martyre de la Première Guerre mondiale entièrement reconstruite dans les années 20, abrite de nombreux bâtiments historiques reconstructions et maisons flamandes dont les installations sont régulièrement modernisées.",
    interventionTime: "65 minutes",
    landmark: "des Halles aux Draps à la Porte de Menin",
  },

  // FLANDRE ORIENTALE
  "gand": {
    description: "Gand, ville médiévale et étudiante sur la Lys et l'Escaut, abrite de nombreuses maisons de canal historiques et immeubles résidentiels dans ses quartiers animés dont les installations techniques requièrent expertise et délicatesse.",
    interventionTime: "50 minutes",
    landmark: "des bords de la Lys au quartier Patershol",
  },
  "alost": {
    description: "Alost, ville industrielle et festive de Flandre Orientale célèbre pour son carnaval, concentre des maisons ouvrières et immeubles résidentiels dont les installations techniques bénéficient de nos interventions rapides.",
    interventionTime: "45 minutes",
    landmark: "du Schepenhuis au centre historique d'Alost",
  },
  "saint-nicolas": {
    description: "Saint-Nicolas, ville résidentielle de la banlieue gantoise en Flandre Orientale, regroupe de nombreuses maisons familiales et lotissements dont les installations de plomberie et de chauffage font appel à notre expertise certifiée.",
    interventionTime: "50 minutes",
    landmark: "du centre de Sint-Niklaas à la Grand-Place",
  },
  "termonde": {
    description: "Termonde, ville flamande au confluent de la Dendre et de l'Escaut, concentre un habitat résidentiel traditionnel avec des maisons de ville et fermes dont les installations techniques nécessitent un suivi professionnel régulier.",
    interventionTime: "50 minutes",
    landmark: "du centre de Termonde aux rives de l'Escaut",
  },
  "lokeren": {
    description: "Lokeren, ville industrielle et résidentielle de Flandre Orientale, regroupe des maisons familiales et immeubles d'appartements dont les systèmes de chauffage et de plomberie sont régulièrement entretenus par nos techniciens.",
    interventionTime: "55 minutes",
    landmark: "du centre de Lokeren au parc de la Durme",
  },

  // ANVERS
  "anvers": {
    description: "Anvers, métropole portuaire et diamantaire flamande de renommée mondiale, concentre une grande variété d'habitations allant des maisons de la Belle Époque aux appartements contemporains avec des besoins techniques très diversifiés.",
    interventionTime: "45 minutes",
    landmark: "du quartier du port au Zurenborg Art Nouveau",
  },
  "malines": {
    description: "Malines, ville historique entre Anvers et Bruxelles avec sa cathédrale Saint-Rombaut, abrite de nombreuses maisons flamandes traditionnelles et immeubles résidentiels dont les installations techniques sont assurées par nos équipes.",
    interventionTime: "40 minutes",
    landmark: "de la Cathédrale Saint-Rombaut aux rives de la Dyle",
  },
  "turnhout": {
    description: "Turnhout, capitale des Campines anversoises et ville du jeu de cartes, regroupe des maisons campinardes et immeubles résidentiels dont les installations de chauffage et de plomberie nécessitent un entretien régulier par nos techniciens.",
    interventionTime: "55 minutes",
    landmark: "du château des ducs de Brabant au marché hebdomadaire",
  },
  "lierre": {
    description: "Lierre, charmante ville flamande aux beguinages classés UNESCO, abrite de nombreuses maisons historiques et bâtiments patrimoniaux dont les installations techniques requièrent une expertise respectueuse du bâti ancien.",
    interventionTime: "45 minutes",
    landmark: "du Béguinage de Lierre aux remparts médiévaux",
  },

  // LIMBOURG
  "hasselt": {
    description: "Hasselt, chef-lieu de la province du Limbourg et capitale du genièvre belge, concentre un habitat résidentiel varié avec des maisons de ville et villas dont les installations techniques sont assurées par nos techniciens certifiés.",
    interventionTime: "60 minutes",
    landmark: "du centre de Hasselt au Japanse Tuin",
  },
  "genk": {
    description: "Genk, ville multiculturelle du Limbourg née de l'immigration minière, regroupe de nombreuses maisons de cités minières et constructions récentes dont les installations techniques font régulièrement appel à notre expertise locale.",
    interventionTime: "65 minutes",
    landmark: "du C-Mine au Bokrijk en plein air",
  },
  "beringen": {
    description: "Beringen, ville minière du Limbourg dont l'héritage charbonnier est classé UNESCO, concentre des maisons de cités et résidences modernes dont les installations techniques sont entretenues par nos techniciens agréés.",
    interventionTime: "65 minutes",
    landmark: "du site minier de Beringen au centre historique",
  },
  "saint-trond": {
    description: "Saint-Trond, ville fruitière du Limbourg au cœur des vergers de Hesbaye, abrite de nombreuses fermes rénovées et maisons de ville dont les installations de chauffage et de plomberie nécessitent notre expertise technique.",
    interventionTime: "65 minutes",
    landmark: "de la Grand-Place de Saint-Trond à l'abbaye",
  },
};

export const defaultCityData: CityData = {
  description: "Cette commune belge concentre un habitat résidentiel varié avec des maisons familiales et immeubles dont les installations techniques nécessitent un suivi régulier par des professionnels agréés et certifiés.",
  interventionTime: "60 minutes",
  landmark: "dans toute la commune et ses environs",
};
