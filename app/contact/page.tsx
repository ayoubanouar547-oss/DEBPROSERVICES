import { ContactForm } from "@/components/sections/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🚨 Contactez-nous — Intervention 30 Min Belgique ⚡",
  description:
    "Prenez contact pour tous vos travaux et urgences en plomberie, chauffage ou débouchage. Intervention rapide partout en Belgique. Devis gratuit.",
  keywords:
    "contact plombier Belgique, devis débouchage, urgence chauffage contact, téléphone",
  alternates: {
    canonical: "/contact",
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
      <ContactForm />
    </div>
  );
}
