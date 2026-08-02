import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales & Conditions de PRO SERVICES — Artisans Belges",
  description:
    "Consultez les informations juridiques et mentions légales concernant la société PRO SERVICES, votre plateforme d'artisans dépanneurs agréés en Belgique.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-32 pb-24 relative z-10 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-invert">
        <h1 className="font-heading font-black text-4xl mb-8 text-white">
          Mentions Légales
        </h1>
        <p className="text-slate-400">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <h2 className="text-white">1. Informations sur la plateforme</h2>
        <p>
          <strong>Nom de la plateforme :</strong> PRO SERVICES
          <br />
          <strong>Téléphone :</strong> 0498 35 25 88
          <br />
          <strong>Email :</strong> debproservices@canalrose.be
        </p>

        <h2 className="text-white">2. Modèle de mise en relation (Marketplace)</h2>
        <p>
          PRO SERVICES fonctionne exclusivement comme un espace de mise en relation (Marketplace) qui met en contact des utilisateurs avec des techniciens, artisans et prestataires de services indépendants agréés en Belgique. Chaque intervenant ou artisan exerce son activité à titre totalement indépendant sous sa propre entreprise et sa responsabilité exclusive.
        </p>
        <p>
          En aucun cas PRO SERVICES ne peut être tenu responsable d'éventuels litiges, dommages, retards ou malfaçons résultant des travaux ou des services effectués par les prestataires indépendants listés sur notre site ou mis en relation via nos formulaires et numéros de téléphone.
        </p>

        <h2 className="text-white">3. Responsabilité et Contenu</h2>
        <p>
          PRO SERVICES s'efforce d'assurer au mieux la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Les estimations de prix ou de délais fournies en ligne ou par téléphone sont indicatives et ne l'engagent pas de manière contractuelle.
        </p>
      </div>
    </div>
  );
}

