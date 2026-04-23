import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { WhyUs } from '@/components/sections/WhyUs';
import { ServiceZones } from '@/components/sections/ServiceZones';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { ContactForm } from '@/components/sections/ContactForm';

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
            "image": "https://debproservices.be/logo.png",
            "@id": "https://debproservices.be",
            "url": "https://debproservices.be",
            "telephone": "+32470000000",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bruxelles",
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
      <WhyUs />
      <ServiceZones />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
}
