import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import dynamic from "next/dynamic";

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

const ServiceZones = dynamic(() => import("@/components/sections/ServiceZones").then(m => m.ServiceZones));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => m.Testimonials));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => m.FAQ));
const ContactForm = dynamic(() => import("@/components/sections/ContactForm").then(m => m.ContactForm));
const SEOContent = dynamic(() => import("@/components/sections/SEOContent").then(m => m.SEOContent));

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
                "name": "Deb Pro Service",
                "url": "https://debservices.canalrose.be"
              },
              {
                "@type": "Article",
                "@id": "https://debservices.canalrose.be/#article",
                "headline": "Pourquoi DEB PRO SERVICES est-elle l'entreprise #1 en débouchage, plomberie et chauffage en Belgique ?",
                "description": "DEB PRO SERVICES en Belgique : Entreprise certifiée multiservice pour la Plomberie, Débouchage 24/7, Chauffage, Gaz CERGA, Électricité AREI, Climatisation, Caméras & Panneaux Solaires.",
                "author": {
                  "@type": "Organization",
                  "name": "Deb Pro Service",
                  "url": "https://debservices.canalrose.be"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Deb Pro Service",
                  "url": "https://debservices.canalrose.be"
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://debservices.canalrose.be"
                },
                "inLanguage": "fr-BE"
              },
              {
                "@type": "LocalBusiness",
                "name": "Deb Pro Service",
                "image": "https://debservices.canalrose.be/technician.png",
                "@id": "https://debservices.canalrose.be/#organization",
                "url": "https://debservices.canalrose.be",
                "telephone": "+32496325733",
                "priceRange": "$$",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "8942",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Centre-ville",
                  "addressLocality": "Bruxelles",
                  "postalCode": "1000",
                  "addressCountry": "BE",
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 50.9343749,
                  "longitude": 4.3869474,
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
                    "Sunday",
                  ],
                  "opens": "00:00",
                  "closes": "23:59",
                },
                "sameAs": [
                  "https://www.google.com/maps/place/Deb+Pro+Services/@50.9343749,4.3843725,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3e9f7ff0c3d79:0x54ce02342d4a8439!8m2!3d50.9343749!4d4.3869474!16s%2Fg%2F11z3pw860x",
                  "https://www.facebook.com/debservices",
                  "https://www.instagram.com/debservices",
                ],
                "description":
                  "DEB PRO SERVICES en Belgique : Entreprise multiservice certifiée pour la Plomberie, Débouchage, Chauffage, Gaz, Électricité, Climatisation, Ventilation VMC, Caméras de Surveillance, Panneaux Solaires, Vidange Fosse Septique, Toiture, Rénovation, Gros Œuvre, Jardinage & Nettoyage de Vitres.",
                "areaServed": {
                  "@type": "Country",
                  "name": "Belgium",
                },
              },
              {
                "@type": "Service",
                "@id": "https://debservices.canalrose.be/#service",
                "name": "DEB PRO SERVICES - Dépannage Urgence 24h/24 & 7j/7 en Belgique",
                "serviceType": "Dépannage & Installation Technique",
                "provider": {
                  "@id": "https://debservices.canalrose.be/#organization"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Belgium"
                },
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
                    "reviewBody": "Intervention ultra rapide en 25 minutes pour une fuite d'eau à Bruxelles. Équipe très professionnelle et tarifs transparents !",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5",
                      "worstRating": "1"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sophie Laurent"
                    },
                    "datePublished": "2026-02-02",
                    "reviewBody": "Débouchage de canalisation réalisé avec caméra thermique. Résultat impeccable et problème résolu immédiatement.",
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
                "@type": "Product",
                "name": "Services DEB PRO SERVICES - Plomberie, Débouchage & Chauffage Belgique",
                "description": "Dépannage express 24h/24 et 7j/7 en Belgique par techniciens certifiés.",
                "brand": {
                  "@type": "Brand",
                  "name": "Deb Pro Service"
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
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Marc Dubois"
                    },
                    "datePublished": "2026-01-15",
                    "reviewBody": "Intervention d'urgence parfaite en moins de 30 minutes. Tarifs respectés.",
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
