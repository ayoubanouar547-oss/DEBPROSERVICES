export type City = {
  name: string;
  slug: string;
  province: string;
};

export const belgianCities: City[] = [
  // BRUXELLES (19 Communes)
  { name: "Bruxelles", slug: "bruxelles", province: "Bruxelles-Capitale" },
  { name: "Ixelles", slug: "ixelles", province: "Bruxelles-Capitale" },
  { name: "Schaerbeek", slug: "schaerbeek", province: "Bruxelles-Capitale" },
  { name: "Anderlecht", slug: "anderlecht", province: "Bruxelles-Capitale" },
  {
    name: "Molenbeek-Saint-Jean",
    slug: "molenbeek-saint-jean",
    province: "Bruxelles-Capitale",
  },
  { name: "Jette", slug: "jette", province: "Bruxelles-Capitale" },
  { name: "Laeken", slug: "laeken", province: "Bruxelles-Capitale" },
  { name: "Etterbeek", slug: "etterbeek", province: "Bruxelles-Capitale" },
  {
    name: "Woluwe-Saint-Pierre",
    slug: "woluwe-saint-pierre",
    province: "Bruxelles-Capitale",
  },
  {
    name: "Woluwe-Saint-Lambert",
    slug: "woluwe-saint-lambert",
    province: "Bruxelles-Capitale",
  },
  { name: "Uccle", slug: "uccle", province: "Bruxelles-Capitale" },
  { name: "Forest", slug: "forest", province: "Bruxelles-Capitale" },
  { name: "Evere", slug: "evere", province: "Bruxelles-Capitale" },
  { name: "Auderghem", slug: "auderghem", province: "Bruxelles-Capitale" },
  { name: "Ganshoren", slug: "ganshoren", province: "Bruxelles-Capitale" },
  { name: "Koekelberg", slug: "koekelberg", province: "Bruxelles-Capitale" },
  {
    name: "Saint-Gilles",
    slug: "saint-gilles",
    province: "Bruxelles-Capitale",
  },
  {
    name: "Saint-Josse-ten-Noode",
    slug: "saint-josse-ten-noode",
    province: "Bruxelles-Capitale",
  },
  {
    name: "Watermael-Boitsfort",
    slug: "watermael-boitsfort",
    province: "Bruxelles-Capitale",
  },
  {
    name: "Berchem-Sainte-Agathe",
    slug: "berchem-sainte-agathe",
    province: "Bruxelles-Capitale",
  },

  // BRABANT FLAMAND (Flemish Brabant) - Including Grimbergen
  { name: "Grimbergen", slug: "grimbergen", province: "Brabant Flamand" },
  { name: "Vilvorde", slug: "vilvorde", province: "Brabant Flamand" },
  { name: "Hal (Halle)", slug: "hal", province: "Brabant Flamand" },
  { name: "Zaventem", slug: "zaventem", province: "Brabant Flamand" },
  { name: "Leuven", slug: "leuven", province: "Brabant Flamand" },
  { name: "Asse", slug: "asse", province: "Brabant Flamand" },
  { name: "Dilbeek", slug: "dilbeek", province: "Brabant Flamand" },
  { name: "Wemmel", slug: "wemmel", province: "Brabant Flamand" },
  { name: "Kraainem", slug: "kraainem", province: "Brabant Flamand" },
  { name: "Tervuren", slug: "tervuren", province: "Brabant Flamand" },
  { name: "Machelen", slug: "machelen", province: "Brabant Flamand" },
  { name: "Tirlemont", slug: "tirlemont", province: "Brabant Flamand" },
  { name: "Aarschot", slug: "aarschot", province: "Brabant Flamand" },

  // BRABANT WALLON
  { name: "Wavre", slug: "wavre", province: "Brabant Wallon" },
  { name: "Nivelles", slug: "nivelles", province: "Brabant Wallon" },
  { name: "Waterloo", slug: "waterloo", province: "Brabant Wallon" },
  {
    name: "Braine-l'Alleud",
    slug: "braine-lalleud",
    province: "Brabant Wallon",
  },
  { name: "Tubize", slug: "tubize", province: "Brabant Wallon" },
  { name: "Rixensart", slug: "rixensart", province: "Brabant Wallon" },
  {
    name: "Ottignies-Louvain-la-Neuve",
    slug: "ottignies-louvain-la-neuve",
    province: "Brabant Wallon",
  },
  { name: "Jodoigne", slug: "jodoigne", province: "Brabant Wallon" },
  { name: "Genappe", slug: "genappe", province: "Brabant Wallon" },
  {
    name: "Braine-le-Château",
    slug: "braine-le-chateau",
    province: "Brabant Wallon",
  },

  // HAINAUT
  { name: "Charleroi", slug: "charleroi", province: "Hainaut" },
  { name: "Mons", slug: "mons", province: "Hainaut" },
  { name: "Tournai", slug: "tournai", province: "Hainaut" },
  { name: "La Louvière", slug: "la-louviere", province: "Hainaut" },
  { name: "Mouscron", slug: "mouscron", province: "Hainaut" },
  { name: "Châtelet", slug: "chatelet", province: "Hainaut" },
  { name: "Binche", slug: "binche", province: "Hainaut" },
  { name: "Courcelles", slug: "courcelles", province: "Hainaut" },
  { name: "Ath", slug: "ath", province: "Hainaut" },
  { name: "Soignies", slug: "soignies", province: "Hainaut" },

  // LIÈGE
  { name: "Liège", slug: "liege", province: "Liège" },
  { name: "Seraing", slug: "seraing", province: "Liège" },
  { name: "Verviers", slug: "verviers", province: "Liège" },
  { name: "Herstal", slug: "herstal", province: "Liège" },
  { name: "Ans", slug: "ans", province: "Liège" },
  { name: "Flémalle", slug: "flemalle", province: "Liège" },
  { name: "Oupeye", slug: "oupeye", province: "Liège" },
  { name: "Huy", slug: "huy", province: "Liège" },
  { name: "Waremme", slug: "waremme", province: "Liège" },
  { name: "Spa", slug: "spa", province: "Liège" },

  // NAMUR
  { name: "Namur", slug: "namur", province: "Namur" },
  { name: "Gembloux", slug: "gembloux", province: "Namur" },
  { name: "Andenne", slug: "andenne", province: "Namur" },
  { name: "Sambreville", slug: "sambreville", province: "Namur" },
  { name: "Ciney", slug: "ciney", province: "Namur" },
  { name: "Dinant", slug: "dinant", province: "Namur" },
  { name: "Couvin", slug: "couvin", province: "Namur" },

  // LUXEMBOURG (Province)
  { name: "Arlon", slug: "arlon", province: "Luxembourg" },
  { name: "Bastogne", slug: "bastogne", province: "Luxembourg" },
  {
    name: "Marche-en-Famenne",
    slug: "marche-en-famenne",
    province: "Luxembourg",
  },
  { name: "Durbuy", slug: "durbuy", province: "Luxembourg" },
  { name: "Virton", slug: "virton", province: "Luxembourg" },
  { name: "Neufchâteau", slug: "neufchateau", province: "Luxembourg" },
  { name: "Bouillon", slug: "bouillon", province: "Luxembourg" },
  { name: "Saint-Hubert", slug: "saint-hubert", province: "Luxembourg" },
  { name: "Florenville", slug: "florenville", province: "Luxembourg" },

  // GRAND-DUCHÉ DE LUXEMBOURG (Pays frontalier - Souvent demandé pour des interventions)
  {
    name: "Luxembourg-Ville",
    slug: "luxembourg-ville",
    province: "Grand-Duché de Luxembourg",
  },
  {
    name: "Esch-sur-Alzette",
    slug: "esch-sur-alzette",
    province: "Grand-Duché de Luxembourg",
  },

  // FLANDRE OCCIDENTALE
  { name: "Bruges", slug: "bruges", province: "Flandre Occidentale" },
  { name: "Courtrai", slug: "courtrai", province: "Flandre Occidentale" },
  { name: "Ostende", slug: "ostende", province: "Flandre Occidentale" },
  { name: "Roulers", slug: "roulers", province: "Flandre Occidentale" },
  { name: "Ypres", slug: "ypres", province: "Flandre Occidentale" },

  // FLANDRE ORIENTALE
  { name: "Gand", slug: "gand", province: "Flandre Orientale" },
  { name: "Alost", slug: "alost", province: "Flandre Orientale" },
  {
    name: "Saint-Nicolas",
    slug: "saint-nicolas",
    province: "Flandre Orientale",
  },
  { name: "Termonde", slug: "termonde", province: "Flandre Orientale" },
  { name: "Lokeren", slug: "lokeren", province: "Flandre Orientale" },

  // ANVERS
  { name: "Anvers", slug: "anvers", province: "Anvers" },
  { name: "Malines", slug: "malines", province: "Anvers" },
  { name: "Turnhout", slug: "turnhout", province: "Anvers" },
  { name: "Lierre", slug: "lierre", province: "Anvers" },

  // LIMBOURG
  { name: "Hasselt", slug: "hasselt", province: "Limbourg" },
  { name: "Genk", slug: "genk", province: "Limbourg" },
  { name: "Beringen", slug: "beringen", province: "Limbourg" },
  { name: "Saint-Trond", slug: "saint-trond", province: "Limbourg" },
];
