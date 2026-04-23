export type City = {
  name: string;
  slug: string;
  province: string;
};

export const belgianCities: City[] = [
  // BRUXELLES
  { name: 'Bruxelles', slug: 'bruxelles', province: 'Bruxelles-Capitale' },
  { name: 'Ixelles', slug: 'ixelles', province: 'Bruxelles-Capitale' },
  { name: 'Schaerbeek', slug: 'schaerbeek', province: 'Bruxelles-Capitale' },
  { name: 'Anderlecht', slug: 'anderlecht', province: 'Bruxelles-Capitale' },
  { name: 'Molenbeek-Saint-Jean', slug: 'molenbeek', province: 'Bruxelles-Capitale' },
  { name: 'Jette', slug: 'jette', province: 'Bruxelles-Capitale' },
  { name: 'Laeken', slug: 'laeken', province: 'Bruxelles-Capitale' },
  { name: 'Etterbeek', slug: 'etterbeek', province: 'Bruxelles-Capitale' },
  { name: 'Woluwe', slug: 'woluwe', province: 'Bruxelles-Capitale' },
  { name: 'Uccle', slug: 'uccle', province: 'Bruxelles-Capitale' },
  { name: 'Forest', slug: 'forest', province: 'Bruxelles-Capitale' },
  { name: 'Evere', slug: 'evere', province: 'Bruxelles-Capitale' },
  // HAINAUT
  { name: 'Mons', slug: 'mons', province: 'Hainaut' },
  { name: 'Charleroi', slug: 'charleroi', province: 'Hainaut' },
  { name: 'Tournai', slug: 'tournai', province: 'Hainaut' },
  { name: 'La Louvière', slug: 'la-louviere', province: 'Hainaut' },
  { name: 'Mouscron', slug: 'mouscron', province: 'Hainaut' },
  // LIÈGE
  { name: 'Liège', slug: 'liege', province: 'Liège' },
  { name: 'Seraing', slug: 'seraing', province: 'Liège' },
  { name: 'Herstal', slug: 'herstal', province: 'Liège' },
  { name: 'Verviers', slug: 'verviers', province: 'Liège' },
  { name: 'Huy', slug: 'huy', province: 'Liège' },
  // BRABANT WALLON
  { name: 'Wavre', slug: 'wavre', province: 'Brabant Wallon' },
  { name: 'Nivelles', slug: 'nivelles', province: 'Brabant Wallon' },
  { name: 'Waterloo', slug: 'waterloo', province: 'Brabant Wallon' },
  { name: 'Braine-l\'Alleud', slug: 'braine-lalleud', province: 'Brabant Wallon' },
  // BRABANT FLAMAND
  { name: 'Leuven', slug: 'leuven', province: 'Brabant Flamand' },
  { name: 'Vilvorde', slug: 'vilvoorde', province: 'Brabant Flamand' },
  { name: 'Hal', slug: 'halle', province: 'Brabant Flamand' },
  { name: 'Zaventem', slug: 'zaventem', province: 'Brabant Flamand' },
  // NAMUR
  { name: 'Namur', slug: 'namur', province: 'Namur' },
  { name: 'Gembloux', slug: 'gembloux', province: 'Namur' },
  { name: 'Dinant', slug: 'dinant', province: 'Namur' },
  // LUXEMBOURG
  { name: 'Arlon', slug: 'arlon', province: 'Luxembourg' },
  { name: 'Bastogne', slug: 'bastogne', province: 'Luxembourg' },
  { name: 'Marche-en-Famenne', slug: 'marche-en-famenne', province: 'Luxembourg' },
  // ANVERS
  { name: 'Anvers', slug: 'antwerpen', province: 'Anvers' },
  { name: 'Malines', slug: 'mechelen', province: 'Anvers' },
  // GAND
  { name: 'Gand', slug: 'gent', province: 'Flandre Orientale' },
  { name: 'Bruges', slug: 'brugge', province: 'Flandre Occidentale' }
];
