import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacteer ons voor Snelle Interventie 24/7 in België — Offerte",
  description:
    "Neem vandaag nog contact op met onze erkende Belgische technici voor loodgieterij, verwarming of ontstopping. Gratis offerte en snelle 24/7 spoed service.",
  keywords:
    "contact loodgieter België, offerte ontstopping, spoedverwarming contact, telefoon",
  alternates: {
    canonical: "https://debservices.canalrose.be/nl/contact",
    languages: {
      "fr-BE": "https://debservices.canalrose.be/contact",
      "fr": "https://debservices.canalrose.be/contact",
      "nl-BE": "https://debservices.canalrose.be/nl/contact",
      "nl": "https://debservices.canalrose.be/nl/contact",
      "x-default": "https://debservices.canalrose.be/contact",
    },
  },
  openGraph: {
    title: "🚨 Contacteer de Loodgieter & Verwarmings-expert ⚡",
    description:
      "Vragen? Een offerte? Neem contact op met onze erkende experts voor een snelle interventie in België.",
    url: "https://debservices.canalrose.be/nl/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      <ContactForm />
    </div>
  );
}
