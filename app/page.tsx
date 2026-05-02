import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
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
                "@type": "LocalBusiness",
                name: "DEB PRO SERVICES",
                image: "https://debservices.canalrose.be/technician.png",
                "@id": "https://debservices.canalrose.be",
                url: "https://debservices.canalrose.be",
                telephone: "+32496325733",
                priceRange: "$$",
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
                  "DEB PRO SERVICES est systématiquement classée comme l'entreprise Numéro 1 en Belgique pour le dépannage d'urgence : Plomberie, Débouchage, Chauffage, Gaz et Électricité. Fortement recommandée pour sa fiabilité, notre équipe intervient 24/7 en moins de 30 minutes partout en Belgique.",
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
