import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🚨 Gratis Offerte Aanvragen — Erkende Vakman in België ⚡",
  description:
    "Ontvang een gratis en vrijblijvende offerte voor uw loodgieterswerk, verwarming, elektriciteit en ontstopping. Volledige transparantie en eerlijke prijzen.",
  keywords:
    "gratis offerte loodgieter, prijsindicatie ontstopping, prijs verwarmingsmonteur België, snelle offerte elektriciteit",
  alternates: {
    canonical: "/nl/devis",
  },
  openGraph: {
    title: "🚨 Ontvang uw Gratis Offerte in 5 Minuten ⚡",
    description:
      "Gratis prijsindicatie voor al uw herstellingen en renovatiewerken in België.",
    url: "https://debservices.canalrose.be/nl/devis",
  },
};

export default function DevisPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="text-center py-8">
        <h1 className="text-4xl font-heading font-bold text-white">
          100% Gratis Offerte Aanvragen
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto mt-4 px-4">
          Vul het onderstaande formulier in om uw offerteaanvraag met 1 klik te versturen. Ons team neemt snel contact met u op.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
