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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://debservices.canalrose.be/#organization",
                "name": "DEB PRO SERVICES",
                "image": "https://debservices.canalrose.be/logo.png",
                "url": "https://debservices.canalrose.be",
                "telephone": "+32496325733",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Brussels",
                  "addressRegion": "Brussels",
                  "postalCode": "1000",
                  "streetAddress": "Centre",
                  "addressCountry": "BE"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://debservices.canalrose.be/zones-de-services#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://debservices.canalrose.be"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Zones de Services",
                    "item": "https://debservices.canalrose.be/zones-de-services"
                  }
                ]
              }
            ]
          })
        }}
      />
      <ZonesDeServicesClient />
    </>
  );
}
