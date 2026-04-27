import { Hero } from '@/components/sections/Hero';
import dynamic from 'next/dynamic';

const Services = dynamic(() => import('@/components/sections/Services').then((mod) => mod.Services), { ssr: true });
const WhyUs = dynamic(() => import('@/components/sections/WhyUs').then((mod) => mod.WhyUs), { ssr: true });
const ServiceZones = dynamic(() => import('@/components/sections/ServiceZones').then((mod) => mod.ServiceZones), { ssr: true });
const Testimonials = dynamic(() => import('@/components/sections/Testimonials').then((mod) => mod.Testimonials), { ssr: true });
const FAQ = dynamic(() => import('@/components/sections/FAQ').then((mod) => mod.FAQ), { ssr: true });
const ContactForm = dynamic(() => import('@/components/sections/ContactForm').then((mod) => mod.ContactForm), { ssr: true });
const SEOContent = dynamic(() => import('@/components/sections/SEOContent').then((mod) => mod.SEOContent), { ssr: true });

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
      <SEOContent />
    </>
  );
}
