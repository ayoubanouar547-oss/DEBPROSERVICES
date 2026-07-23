import { ContactForm } from "@/components/sections/ContactForm";
import { CostEstimator } from "@/components/sections/CostEstimator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🚨 Demande de Devis Gratuit — Expert Artisan Belgique ⚡",
  description:
    "Obtenez un devis gratuit et sans engagement pour vos travaux de plomberie, chauffage, électricité et débouchage. Transparence totale et prix justes.",
  keywords:
    "devis gratuit plombier, estimation prix débouchage, prix chauffagiste Belgique, devis électricité rapide",
  alternates: {
    canonical: "/devis",
  },
  openGraph: {
    title: "🚨 Obtenez votre Devis Gratuit en 5 Min ⚡",
    description:
      "Estimation gratuite pour tous vos travaux de dépannage et rénovation en Belgique.",
    url: "https://debservices.canalrose.be/devis",
  },
};

export default function DevisPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="text-center py-8 px-4">
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
          Estimation & Devis 100% Gratuit
        </h1>
        <p className="text-slate-300 font-medium text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
          Utilisez notre estimateur interactif ci-dessous pour évaluer instantanément un budget estimatif pour votre intervention, puis soumettez votre demande de devis complet en 1 clic.
        </p>
      </div>
      <CostEstimator />
      <ContactForm />
    </div>
  );
}
