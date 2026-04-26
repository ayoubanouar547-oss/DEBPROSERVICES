import { Metadata } from 'next';
import ZonesDeServicesClient from './ZonesDeServicesClient';

export const metadata: Metadata = {
  title: 'Nos Zones d\'Intervention en Belgique | DEB PRO SERVICES',
  description: 'Découvrez toutes les villes de Belgique où nous proposons nos services d\'urgence 24h/24 en plomberie, chauffage, gaz, etc. Intervention rapide 24/7.',
};

export default function ZonesDeServicesPage() {
  return <ZonesDeServicesClient />;
}
