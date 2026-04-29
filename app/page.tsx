import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { ServiceZones } from '@/components/sections/ServiceZones';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { ContactForm } from '@/components/sections/ContactForm';
import { SEOContent } from '@/components/sections/SEOContent';

export default function Home() {
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
                  "addressLocality": "Bruxelles",
                  "addressRegion": "Brussels",
                  "postalCode": "1000",
                  "streetAddress": "Centre",
                  "addressCountry": "BE"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Belgium"
                },
                "priceRange": "$$",
                "description": "Entreprise de plomberie, débouchage de canalisation, chauffage, gaz, électricité et vidange de fosse septique intervenant partout en Belgique en urgence 24h/24.",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "closes": "23:59"
                }
              },
              {
                "@type": "FAQPage",
                "@id": "https://debservices.canalrose.be/#faq",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Quel est le délai d'intervention pour un débouchage urgent en Belgique ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nos techniciens interviennent en moyenne en moins de 30 à 60 minutes pour toute urgence de débouchage ou plomberie partout en Belgique, 24h/24 et 7j/7."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Proposez-vous des devis gratuits ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oui, DEB PRO SERVICES propose des devis gratuits et sans engagement avant toute intervention pour garantir une transparence totale sur nos tarifs."
                    }
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://debservices.canalrose.be/#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://debservices.canalrose.be"
                  }
                ]
              }
            ]
          })
        }}
      />
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <SEOContent />
    </>
  );
}
