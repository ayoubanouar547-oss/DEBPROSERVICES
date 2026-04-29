import { Metadata } from 'next';
import ZonesDeServicesClient from './ZonesDeServicesClient';

export const metadata: Metadata = {
  title: 'Nos Zones d\'Intervention en Belgique | DEB PRO SERVICES ☎ 24h/24',
  description: 'Découvrez toutes les villes de Belgique où nous proposons nos services d\'urgence 24h/24 en plomberie, chauffage, gaz et débouchage. Intervention rapide garantie partout en Belgique.',
  keywords: 'zones intervention Belgique, plombier Bruxelles, chauffagiste Liège, débouchage Anvers, service de proximité Belgique',
  alternates: {
    canonical: '/zones-de-services',
  },
  openGraph: {
    title: 'Zones d\'Intervention DEB PRO SERVICES | Partout en Belgique',
    description: 'Une intervention locale rapide. Découvrez nos techniciens agréés proches de chez vous.',
    url: 'https://debservices.canalrose.be/zones-de-services',
  }
};

export default function ZonesDeServicesPage() {
  return <ZonesDeServicesClient />;
}
