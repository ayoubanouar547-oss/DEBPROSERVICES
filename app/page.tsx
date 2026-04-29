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
      {/* Schema.org JSON-LD for LocalBusiness & Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DEB PRO SERVICES",
            "image": "https://www.debouchageexpress24-24h.be/web/image/website/1/logo/Debouchage%20Express%2024H?unique=0a4877c",
            "@id": "https://debservices.canalrose.be",
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
            "areaServed": "Belgium",
            "priceRange": "$$",
            "description": "Entreprise de plomberie, débouchage de canalisation, chauffage, gaz, électricité et vidange de fosse septique intervenant partout en Belgique en urgence 24h/24.",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
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
