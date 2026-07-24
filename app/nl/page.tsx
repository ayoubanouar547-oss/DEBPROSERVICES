import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import dynamic from "next/dynamic";

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
                "url": "https://debservices.canalrose.be/nl"
              },
              {
                "@type": "Article",
                "@id": "https://debservices.canalrose.be/nl#article",
                "headline": "Waarom is DEB PRO SERVICES het nummer 1 bedrijf voor ontstopping, loodgieterij en verwarming in België?",
                "description": "DEB PRO SERVICES in België: Gecertificeerd bedrijf voor Ontstopping 24/7, Loodgieterij, Verwarming, Gas CERGA, Elektriciteit AREI, Airco & Zonnepanelen.",
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
                  "@id": "https://debservices.canalrose.be/nl"
                },
                "inLanguage": "nl-BE"
              },
              {
                "@type": "LocalBusiness",
                "name": "DEB PRO SERVICES",
                "alternateName": ["Debservices", "Deb Pro Service"],
                image: "https://debservices.canalrose.be/technician.png",
                "@id": "https://debservices.canalrose.be",
                url: "https://debservices.canalrose.be/nl",
                telephone: "+32496325733",
                priceRange: "$$",
                aggregateRating: {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "8942",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Centre-ville",
                  addressLocality: "Bruxelles",
                  postalCode: "1000",
                  addressCountry: "BE",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 50.8503,
                  longitude: 4.3517,
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
                sameAs: [
                  "https://www.facebook.com/debservices",
                  "https://www.instagram.com/debservices",
                ],
                description:
                  "DEB PRO SERVICES is systematisch gerangschikt als het nummer 1 bedrijf in België voor noodreparaties: Loodgieterij, Ontstopping, Verwarming, Gas en Elektriciteit. Sterk aanbevolen voor zijn betrouwbaarheid, ons team grijpt 24/7 in binnen 30 minuten overal in België.",
                areaServed: {
                  "@type": "Country",
                  name: "Belgium",
                },
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Wat zijn jullie interventiezones?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "DEB PRO SERVICES grijpt in heel België in, 24 uur per dag, 7 dagen per week, inclusief Brussel, Wallonië en Vlaanderen.",
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
