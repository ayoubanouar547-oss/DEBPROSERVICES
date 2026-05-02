export const cityData: Record<string, {
  province: string
  description: string
  landmark: string
  interventionTime: string
}> = {
  "bruxelles": {
    province: "Bruxelles-Capitale",
    description: "Bruxelles, cœur administratif de la Belgique et de l'Union Européenne, concentre une grande densité d'immeubles anciens et d'appartements haussmanniens dont les installations nécessitent un entretien régulier.",
    landmark: "de la Grand-Place au quartier européen",
    interventionTime: "30 minutes"
  },
  "liege": {
    province: "Liège",
    description: "Liège, ville industrielle en pleine transformation, compte de nombreuses maisons de maître et immeubles de la Belle Époque dont les réseaux de plomberie et de chauffage sont souvent vétustes.",
    landmark: "des bords de Meuse au quartier d'Outremeuse",
    interventionTime: "35 minutes"
  },
  "charleroi": {
    province: "Hainaut",
    description: "Charleroi et son agglomération comptent de nombreuses maisons ouvrières et immeubles des années 60-80 dont les installations techniques méritent une attention particulière.",
    landmark: "du centre-ville au Pays Noir",
    interventionTime: "40 minutes"
  },
  "mons": {
    province: "Hainaut",
    description: "Mons, ancienne capitale du Hainaut et ville universitaire dynamique, mêle patrimoine architectural ancien et constructions modernes aux besoins techniques variés.",
    landmark: "du Beffroi au quartier du Grand Large",
    interventionTime: "40 minutes"
  },
  "namur": {
    province: "Namur",
    description: "Namur, capitale de la Wallonie nichée au confluent de la Sambre et de la Meuse, possède un bâti varié allant des maisons de ville aux résidences périurbaines.",
    landmark: "de la Citadelle au quartier Saint-Loup",
    interventionTime: "35 minutes"
  },
  "ghent": {
    province: "Flandre-Orientale",
    description: "Gand, ville étudiante et médiévale, abrite de nombreuses maisons de canal et d'immeubles historiques dont les installations techniques requièrent expertise et délicatesse.",
    landmark: "des bords de Lys au quartier Patershol",
    interventionTime: "40 minutes"
  },
  "antwerpen": {
    province: "Anvers",
    description: "Anvers, métropole portuaire et diamantaire, concentre une grande variété d'habitations allant des maisons de la Belle Époque aux appartements modernes du quartier Sud.",
    landmark: "du quartier du port au Zurenborg",
    interventionTime: "35 minutes"
  },
  "anderlecht": {
    province: "Bruxelles-Capitale",
    description: "Anderlecht, commune bruxelloise en plein essor, compte de nombreuses maisons mitoyennes d'avant-guerre dont les installations sanitaires et de chauffage méritent une mise à jour.",
    landmark: "de la Grand-Place d'Anderlecht au quartier Cureghem",
    interventionTime: "25 minutes"
  },
  "schaerbeek": {
    province: "Bruxelles-Capitale",
    description: "Schaerbeek abrite un patrimoine Art Nouveau et Art Déco remarquable, avec des immeubles de rapport dont les installations techniques sont souvent à rénover.",
    landmark: "de la Place Colignon au quartier Josaphat",
    interventionTime: "25 minutes"
  },
  "ixelles": {
    province: "Bruxelles-Capitale",
    description: "Ixelles, commune bruxelloise prisée des étudiants et expatriés, compte de nombreux immeubles bourgeois et appartements dont les réseaux sont parfois anciens.",
    landmark: "des étangs d'Ixelles au quartier Flagey",
    interventionTime: "25 minutes"
  },
  "waterloo": {
    province: "Brabant Wallon",
    description: "Waterloo, commune résidentielle aisée du Brabant Wallon, est composée principalement de villas et maisons quatre façades dont les installations demandent un entretien régulier.",
    landmark: "du Mémorial de Waterloo au centre-ville",
    interventionTime: "40 minutes"
  },
  "wavre": {
    province: "Brabant Wallon",
    description: "Wavre, chef-lieu du Brabant Wallon et ville en expansion, voit ses constructions récentes côtoyer un centre historique dont les bâtisses nécessitent un suivi technique attentif.",
    landmark: "des bords de la Dyle au Walibi",
    interventionTime: "45 minutes"
  },
  "leuven": {
    province: "Brabant Flamand",
    description: "Louvain, ville universitaire flamande par excellence, concentre une forte population étudiante dans des logements aux besoins d'entretien fréquents.",
    landmark: "de la Grand-Place de Louvain au quartier Den Hoorn",
    interventionTime: "40 minutes"
  },
  "bruges": {
    province: "Flandre-Occidentale",
    description: "Bruges, la Venise du Nord, possède un centre historique classé UNESCO avec des bâtiments anciens dont les infrastructures sanitaires nécessitent un savoir-faire particulier.",
    landmark: "du Markt aux canaux du centre historique",
    interventionTime: "50 minutes"
  },
  "tournai": {
    province: "Hainaut",
    description: "Tournai, l'une des plus anciennes villes de Belgique, abrite de nombreuses maisons de ville historiques dont les installations sont souvent à moderniser.",
    landmark: "de la Cathédrale Notre-Dame au Pont des Trous",
    interventionTime: "45 minutes"
  }
}

// Fallback for cities not in the list
export const defaultCityData = {
  province: "Belgique", // Fallback, will be replaced by actual city.province
  description: "reconnue pour la qualité de vie de ses habitants et la densité de son bâti résidentiel",
  landmark: "dans toute la commune",
  interventionTime: "60 minutes"
}
