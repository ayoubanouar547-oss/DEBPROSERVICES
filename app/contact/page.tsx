import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Dépannage Rapide 24/7 Belgique",
  description:
    "Contactez nos techniciens agréés pour vos travaux et urgences en plomberie, chauffage et débouchage en Belgique.",
  keywords:
    "contact plombier Belgique, devis débouchage, urgence chauffage contact, téléphone",
  alternates: {
    canonical: "https://debservices.canalrose.be/contact",
    languages: {
      "fr-BE": "https://debservices.canalrose.be/contact",
      "fr": "https://debservices.canalrose.be/contact",
      "nl-BE": "https://debservices.canalrose.be/nl/contact",
      "nl": "https://debservices.canalrose.be/nl/contact",
      "x-default": "https://debservices.canalrose.be/contact",
    },
  },
  openGraph: {
    title: "🚨 Contactez l'Expert Plomberie & Chauffage ⚡",
    description:
      "Une question ? Un devis ? Contactez nos experts agréés pour une intervention rapide en Belgique.",
    url: "https://debservices.canalrose.be/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ContactPage",
                "@id": "https://debservices.canalrose.be/contact#webpage",
                "url": "https://debservices.canalrose.be/contact",
                "name": "Contactez PRO SERVICES",
                "description": "Formulaire de contact et coordonnées pour PRO SERVICES en Belgique.",
                "breadcrumb": {
                  "@id": "https://debservices.canalrose.be/contact#breadcrumb"
                },
                "mainEntity": {
                  "@id": "https://debservices.canalrose.be/#organization"
                }
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://debservices.canalrose.be/contact#breadcrumb",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://debservices.canalrose.be"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Contact",
                    "item": "https://debservices.canalrose.be/contact"
                  }
                ]
              }
            ]
          })
        }}
      />
      <ContactForm />
    </div>
  );
}
