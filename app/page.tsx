import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "DEB PRO SERVICES Belgique 🚀 Plomberie, Chauffage, Électricité, Gaz, Caméras, Solaires & Climatisation 24/7",
  description:
    "DEB PRO SERVICES en Belgique : plomberie, débouchage, chauffage, gaz, électricité, climatisation, ventilation VMC, caméras de surveillance, panneaux solaires, vidange fosse septique, toiture, rénovation, jardinage & vitres. Intervention rapide 24/7.",
  keywords:
    "plomberie Belgique, électricité Belgique, gaz Belgique, climatisation Belgique, ventilation VMC, caméras de surveillance, panneaux solaires photovoltaïques, débouchage canalisation, chauffage urgence, vidange fosse septique, rénovation maison, toiture, Belgique 24/7",
  openGraph: {
    title: "DEB PRO SERVICES Belgique 🚀 Tous vos Services & Dépannages 24h/24",
    description:
      "Services complets en Belgique 24/7 : Plomberie, Chauffage, Gaz, Électricité, Climatisation, Ventilation, Caméras de surveillance, Panneaux solaires, Vidange fosse septique, Rénovation & Dépannage rapide.",
    url: "https://debservices.canalrose.be",
  },
};

import { ServiceZones } from "@/components/sections/ServiceZones";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactForm } from "@/components/sections/ContactForm";
import { SEOContent } from "@/components/sections/SEOContent";

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
                "@type": "WebSite",
                "name": "DEB PRO SERVICES",
                "url": "https://debservices.canalrose.be"
              },
              {
                "@type": "Article",
                "@id": "https://debservices.canalrose.be/#article",
                "headline": "Pourquoi DEB PRO SERVICES est-elle l'entreprise #1 en plomberie, débouchage, chauffage, électricité, gaz, climatisation, caméras & panneaux solaires en Belgique ?",
                "description": "DEB PRO SERVICES en Belgique : Entreprise certifiée multiservice pour la Plomberie, Débouchage 24/7, Chauffage, Gaz CERGA, Électricité AREI, Climatisation, VMC, Caméras de Surveillance, Panneaux Solaires, Vidange Fosse Septique, Toiture, Rénovation & Jardinage.",
                "image": [
                  "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                "author": {
                  "@type": "Organization",
                  "name": "DEB PRO SERVICES",
                  "alternateName": "Debservices",
                  "url": "https://debservices.canalrose.be"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "DEB PRO SERVICES",
                  "alternateName": "Debservices",
                  "url": "https://debservices.canalrose.be",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://debservices.canalrose.be/technician.png"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://debservices.canalrose.be"
                },
                "inLanguage": "fr-BE"
              },
              {
                "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "EmergencyService", "Plumber", "HVACBusiness", "Electrician", "RoofingContractor"],
                "name": "DEB PRO SERVICES",
                "alternateName": ["Debservices", "Deb Pro Service"],
                "image": [
                  "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                "logo": "https://debservices.canalrose.be/technician.png",
                "@id": "https://debservices.canalrose.be/#organization",
                "url": "https://debservices.canalrose.be",
                "telephone": "+32496325733",
                "email": "info@debservices.canalrose.be",
                "priceRange": "€€",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "8942",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Marc Dubois"
                    },
                    "datePublished": "2026-01-15",
                    "reviewBody": "Intervention ultra rapide en 25 minutes pour plomberie, chauffage et urgence à Bruxelles. Équipe très professionnelle et tarifs transparents !",
                    "reviewRating": {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                      worstRating: "1"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sophie Laurent"
                    },
                    "datePublished": "2026-02-02",
                    "reviewBody": "Débouchage canalisation, électricité, airco et entretien chaudière réalisés avec perfection. Résultat impeccable et service 24/7 au top en Belgique.",
                    "reviewRating": {
                      "@type": "Rating",
                      ratingValue: "5",
                      bestRating: "5",
                      worstRating: "1"
                    }
                  }
                ],
                "vatID": "BE 1034.012.476",
                "taxID": "BE 1034.012.476",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Madeliefjesstraat 1/B006",
                  "addressLocality": "Grimbergen",
                  "addressRegion": "Vlaams-Brabant",
                  "postalCode": "1850",
                  "addressCountry": "BE"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 50.9343749,
                  "longitude": 4.3869474
                },
                "hasMap": "https://www.google.com/maps/place/Deb+Pro+Services/@50.9343749,4.3843725,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3e9f7ff0c3d79:0x54ce02342d4a8439!8m2!3d50.9343749!4d4.3869474!16s%2Fg%2F11z3pw860x",
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                },
                "sameAs": [
                  "https://www.google.com/maps/place/Deb+Pro+Services/@50.9343749,4.3843725,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3e9f7ff0c3d79:0x54ce02342d4a8439!8m2!3d50.9343749!4d4.3869474!16s%2Fg%2F11z3pw860x",
                  "https://www.facebook.com/debservices",
                  "https://www.instagram.com/debservices"
                ],
                "description": "DEB PRO SERVICES en Belgique : Entreprise multiservice certifiée pour la Plomberie, Débouchage 24/7, Chauffage, Gaz CERGA, Électricité AREI, Climatisation, Ventilation VMC, Caméras de Surveillance, Panneaux Solaires, Vidange Fosse Septique, Toiture, Rénovation, Gros Œuvre, Jardinage & Nettoyage de Vitres.",
                "areaServed": {
                  "@type": "Country",
                  "name": "Belgium"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Tous les Services DEB PRO SERVICES Belgique",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plomberie & Dépannage Fuite d'Eau" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Débouchage Canalisation 24/7 & Inspection Caméra" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chauffage, Entretien Chaudière & Pompe à Chaleur" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gaz CERGA (Installation & Dépannage)" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Électricité AREI & Mise en Conformité" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Climatisation & Pompe à Chaleur Air/Air" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ventilation VMC (Installation & Entretien)" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Caméras de Surveillance & Alarmes de Sécurité" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Panneaux Solaires Photovoltaïques & Batteries" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vidange Fosse Septique & Curage de Cuve" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rénovation Immobilière & Douche Italienne" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Toiture, Couverture & Zinc" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Jardinage, Élagage & Entretien Espaces Verts" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nettoyage de Vitres & Châssis" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Construction & Gros Œuvre" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Citerne Mazout & Dépollution" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gaz Naturel Comprimé (GNC)" } }
                  ]
                }
              },
              {
                "@type": "Product",
                "name": "Services DEB PRO SERVICES - Plomberie, Débouchage, Chauffage, Électricité, Gaz, Climatisation, Caméras & Solaire Belgique",
                "description": "Dépannage express 24h/24 et 7j/7 en Belgique par techniciens certifiés : Plomberie, Débouchage, Chauffage, Électricité AREI, Gaz CERGA, Climatisation, Caméras de Surveillance, Panneaux Solaires, Vidange Fosse Septique, Toiture & Rénovation.",
                "image": [
                  "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                "brand": {
                  "@type": "Brand",
                  "name": "DEB PRO SERVICES"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "8942",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "offers": {
                  "@type": "Offer",
                  "url": "https://debservices.canalrose.be",
                  "priceCurrency": "EUR",
                  "price": "50.00",
                  "priceValidUntil": "2028-12-31",
                  "validFrom": "2024-01-01",
                  "availability": "https://schema.org/InStock",
                  "hasMerchantReturnPolicy": {
                    "@type": "MerchantReturnPolicy",
                    "applicableCountry": "BE",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
                  },
                  "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": {
                      "@type": "MonetaryAmount",
                      "value": "0",
                      "currency": "EUR"
                    },
                    "shippingDestination": {
                      "@type": "DefinedRegion",
                      "addressCountry": "BE"
                    }
                  }
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Marc Dubois"
                    },
                    "datePublished": "2026-01-15",
                    "reviewBody": "Intervention d'urgence parfaite en moins de 30 minutes. Tarifs respectés et service complet.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5",
                      "worstRating": "1"
                    }
                  }
                ]
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Quelles sont vos zones d'intervention ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "DEB PRO SERVICES intervient dans toute la Belgique, 24h/24 et 7j/7, incluant Bruxelles, la Wallonie et la Flandre.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Proposez-vous des interventions d'urgence ?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Oui, nous sommes spécialisés dans le dépannage express en moins de 60 minutes pour la plomberie, le débouchage, le chauffage et l'électricité.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Hero />
      <Services />
      <ServiceZones />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <SEOContent />
    </>
  );
}
