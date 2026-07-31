import { PhoneCall, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🚨 Urgence Plombier 24H/24 — Intervention Rapide 30 Min ⚡",
  description:
    "Urgence plombier, chauffagiste et débouchage 24/7 partout en Belgique. Intervention locale en 30-60 minutes. Technicien agréé disponible immédiatement.",
  keywords:
    "urgence plombier Belgique, SOS débouchage canalisation, réparation chaudière nuit, électricien urgent 24h/24",
  alternates: {
    canonical: "/urgence",
  },
  openGraph: {
    title: "🚨 Dépannage d'Urgence 24/7 — Action Rapide ⚡",
    description:
      "Une fuite ? Une panne ? Un bouchon ? Nos experts de garde interviennent en moins d'une heure en Belgique.",
    url: "https://debservices.canalrose.be/urgence",
    type: "website",
  },
};

export default function UrgencePage() {
  return (
    <div className="pt-24 h-event">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Pro Service - Urgence 24h/24",
            image: "https://debservices.canalrose.be/technician.png",
            "@id": "https://debservices.canalrose.be/urgence",
            url: "https://debservices.canalrose.be/urgence",
            telephone: "+32496325733",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "6854",
              "bestRating": "5"
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Centre-ville",
              addressLocality: "Bruxelles",
              postalCode: "1000",
              addressCountry: "BE",
            },
            description:
              "Urgence plombier, chauffagiste et débouchage 24/7 partout en Belgique. Intervention locale en 30-60 minutes.",
          }),
        }}
      />
      <section className="bg-accent text-white py-20 text-center relative overflow-hidden summary">
        <div className="absolute inset-0 bg-dark/20 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 animate-pulse">
            Service de Garde Actif
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Besoin d'une Urgence ?
          </h1>
          <p className="text-xl mb-10 text-red-100">
            Nos techniciens de garde interviennent en 30 minutes. Ne perdez pas
            de temps, appelez-nous directement.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:0498 35 25 88"
              className="flex items-center gap-3 bg-white text-accent hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-2xl md:text-3xl transition shadow-2xl"
            >
              <PhoneCall className="w-8 h-8" /> 0498 35 25 88
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
              <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold font-heading text-xl mb-2">
                24h/24 & 7j/7
              </h3>
              <p className="text-gray-600">
                Disponibilité totale, dimanches et jours fériés inclus pour
                toutes vos urgences.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold font-heading text-xl mb-2">
                Partout en Belgique
              </h3>
              <p className="text-gray-600">
                Notre flotte de véhicules sillonnent le pays garantissant un
                délai d'intervention ultra rapide.
              </p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
              <PhoneCall className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold font-heading text-xl mb-2">
                Assistance Directe
              </h3>
              <p className="text-gray-600">
                Un expert prend votre appel en charge et vous guide sur les
                premiers gestes à adopter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        customFaqs={[
          {
            question: "Quel est le délai d'intervention pour une urgence ?",
            answer:
              "Nous faisons tout notre possible pour être sur place en 30 à 60 minutes selon les conditions de trafic, partout où nous avons des équipes de garde déployées.",
          },
          {
            question: "L'intervention en urgence coûte-t-elle plus cher ?",
            answer:
              "Une majoration peut s'appliquer pour les urgences nocturnes ou les jours fériés. Cependant, nous vous confirmons toujours le tarif par téléphone avant d'envoyer l'équipe.",
          },
          {
            question: "Quelles urgences traitez-vous ?",
            answer:
              "Fuites d'eau majeures, WC et canalisations complètement bouchés, pannes de chauffage total en hiver, coupures de courant et pannes électriques.",
          },
          {
            question: "Que dois-je faire en attendant le technicien ?",
            answer:
              "Selon le problème, coupez l'arrivée d'eau générale, l'arrivée de gaz ou coupez le disjoncteur principal pour sécuriser les lieux.",
          },
        ]}
      />

      <ContactForm />
    </div>
  );
}
