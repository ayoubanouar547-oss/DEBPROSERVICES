import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRO SERVICES België 🚀 Loodgieter, Ontstopping, Verwarming, Elektriciteit, Gas & Airco 24/7",
  description:
    "PRO SERVICES in België: Loodgieter, ontstopping van leidingen, verwarming, gas, elektriciteit, airco, camerabewaking, zonnepanelen, septische put leegmaken & renovatie. Snelle interventie 24/7.",
  alternates: {
    canonical: "https://debservices.canalrose.be/nl",
    languages: {
      "fr-BE": "https://debservices.canalrose.be",
      "fr": "https://debservices.canalrose.be",
      "nl-BE": "https://debservices.canalrose.be/nl",
      "nl": "https://debservices.canalrose.be/nl",
      "x-default": "https://debservices.canalrose.be",
    },
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
                "name": "PRO SERVICES",
                "url": "https://debservices.canalrose.be/nl"
              },
              {
                "@type": "Article",
                "@id": "https://debservices.canalrose.be/nl#article",
                "headline": "Waarom is PRO SERVICES het nummer 1 bedrijf voor ontstopping, loodgieterij, verwarming, elektriciteit, gas, airco, zonnepanelen & dakbedekking in België?",
                "description": "PRO SERVICES in België: Gecertificeerd bedrijf voor Ontstopping 24/7, Loodgieterij, Verwarming, Gas CERGA, Elektriciteit AREI, Airco, VMC, Camerabewaking, Zonnepanelen, Septische put, Dakwerken & Renovatie.",
                "image": [
                  "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                "author": {
                  "@type": "Organization",
                  "name": "PRO SERVICES",
                  "url": "https://debservices.canalrose.be"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "PRO SERVICES",
                  "url": "https://debservices.canalrose.be",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://debservices.canalrose.be/technician.png"
                  }
                },
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://debservices.canalrose.be/nl"
                },
                "inLanguage": "nl-BE"
              },
              {
                "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "EmergencyService", "Plumber", "HVACBusiness", "Electrician", "RoofingContractor"],
                "name": "PRO SERVICES",
                "alternateName": ["Debservices", "Pro Service"],
                "image": [
                  "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                "logo": "https://debservices.canalrose.be/technician.png",
                "@id": "https://debservices.canalrose.be/#organization",
                "url": "https://debservices.canalrose.be/nl",
                "telephone": "+32496325733",
                "priceRange": "€€",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "8942",
                  "bestRating": "5",
                  "worstRating": "1"
                },
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
                  "https://www.facebook.com/debservices",
                  "https://www.instagram.com/debservices"
                ],
                "description": "PRO SERVICES is het nummer 1 gecertificeerde bedrijf in België voor 24/7 spoedinterventies: Ontstopping, Loodgieterij, Verwarming, Gas CERGA, Elektriciteit AREI, Airco, VMC, Camerabewaking, Zonnepanelen, Septische put ledigen, Dakwerken & Renovatie.",
                "areaServed": {
                  "@type": "Country",
                  "name": "Belgium"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Alle Diensten PRO SERVICES België",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ontstopping & Leidinginspectie met Camera" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loodgieterij & Lekdetectie" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Verwarming, Ketelonderhoud & Warmtepomp" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gas CERGA (Installatie & Herstelling)" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elektriciteit AREI & Gelijkvormigheid" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airco & Warmtepomp Air/Air" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ventilatie VMC" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Camerabewaking & Alarmsystemen" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zonnepanelen Photovoltaïsch & Thuisbatterijen" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Septische Put Ledigen & Ruimdienst" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Renovatie & Inloopdouche" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dakwerken & Zinkwerken" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tuinonderhoud & Snoeiwerken" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ruitenwasser & Ramen" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bouwwerken & Ruwbouw" } }
                  ]
                }
              },
              {
                "@type": "Product",
                "name": "PRO SERVICES - Ontstopping, Loodgieterij, Verwarming, Elektriciteit, Gas, Airco & Zonnepanelen België",
                "description": "Snelle 24/7 spoeddienst in heel België door gecertificeerde technici voor Ontstopping, Loodgieterij, Verwarming, Elektriciteit, Gas, Airco, Zonnepanelen, Septische put & Dakwerken.",
                "image": [
                  "https://debservices.canalrose.be/technician.png",
                  "https://debservices.canalrose.be/logo.png"
                ],
                "brand": {
                  "@type": "Brand",
                  "name": "PRO SERVICES"
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
                  "url": "https://debservices.canalrose.be/nl",
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
                    "reviewBody": "Snelle interventie binnen 25 minuten in Brussel. Zeer professioneel team.",
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
                    name: "Wat zijn jullie interventiezones?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "PRO SERVICES grijpt in heel België in, 24 uur per dag, 7 dagen per week, inclusief Brussel, Wallonië en Vlaanderen.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Bieden jullie spoeddiensten aan?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Ja, we zijn gespecialiseerd in snelle noodreparaties binnen 60 minuten voor loodgieterij, ontstopping, verwarming en elektriciteit.",
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
