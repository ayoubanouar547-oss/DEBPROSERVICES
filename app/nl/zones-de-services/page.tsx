import { Metadata } from "next";
import ZonesDeServicesClient from "@/app/zones-de-services/ZonesDeServicesClient";

export const metadata: Metadata = {
  title: "Onze Interventiezones in België — 24/7 Service",
  description:
    "Overzicht van alle steden in België voor loodgieterij, verwarming en ontstoppingen. Snelle interventie in 30 min.",
  keywords:
    "interventiezones België, loodgieter Brussel, verwarmingsmonteur Luik, ontstopping Antwerpen, lokale service België",
  alternates: {
    canonical: "https://debservices.canalrose.be/nl/zones-de-services",
    languages: {
      "fr-BE": "https://debservices.canalrose.be/zones-de-services",
      "fr": "https://debservices.canalrose.be/zones-de-services",
      "nl-BE": "https://debservices.canalrose.be/nl/zones-de-services",
      "nl": "https://debservices.canalrose.be/nl/zones-de-services",
      "x-default": "https://debservices.canalrose.be/zones-de-services",
    },
  },
  openGraph: {
    title: "🚨 Interventiezones — Snelle Actie ⚡",
    description:
      "Een snelle lokale interventie. Ontdek onze gecertificeerde technici bij u in de buurt.",
    url: "https://debservices.canalrose.be/nl/zones-de-services",
  },
};

export default function ZonesDeServicesPage() {
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
                "@id": "https://debservices.canalrose.be/nl/#organization",
                name: "Pro Service",
                image: "https://debservices.canalrose.be/logo.png",
                aggregateRating: {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "6854",
                  "bestRating": "5"
                },
                url: "https://debservices.canalrose.be/nl",
                telephone: "+32496325733",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Brussels",
                  addressRegion: "Brussels",
                  postalCode: "1000",
                  streetAddress: "Centrum",
                  addressCountry: "BE",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://debservices.canalrose.be/nl/zones-de-services#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://debservices.canalrose.be/nl",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Interventiezones",
                    item: "https://debservices.canalrose.be/nl/zones-de-services",
                  },
                ],
              },
            ],
          }),
        }}
      />
      <ZonesDeServicesClient isNl={true} />
    </>
  );
}
