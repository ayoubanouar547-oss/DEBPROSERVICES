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
            "@type": "LocalBusiness",
            "name": "DEB PRO SERVICES",
            "image": "https://debservices.canalrose.be/technician.png",
            "@id": "https://debservices.canalrose.be",
            "url": "https://debservices.canalrose.be",
            "telephone": "+32496325733",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Centre-ville",
              "addressLocality": "Bruxelles",
              "postalCode": "1000",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.8503,
              "longitude": 4.3517
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
            "description": "DEB PRO SERVICES est votre leader du dépannage d'urgence et de la rénovation en Belgique : Plomberie, Débouchage, Chauffage, Gaz, Électricité et Rénovation Maison."
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
