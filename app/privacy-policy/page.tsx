import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — RGPD",
  description:
    "Notre politique de confidentialité et de gestion des données personnelles (RGPD) en Belgique.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 relative z-10 text-slate-300">
      <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-invert">
        <h1 className="font-heading font-black text-4xl mb-8 text-white">
          Politique de Confidentialité
        </h1>
        <p className="text-slate-400">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD)
          et à la loi belge du 30 juillet 2018, PRO SERVICES s'engage à
          protéger vos données personnelles. La présente politique de
          confidentialité vous informe sur la collecte, le traitement et la
          conservation de vos données dans le cadre de l'utilisation de notre
          site debservices.canalrose.be, fonctionnant comme une plateforme de mise en relation (Marketplace).
        </p>

        <h2 className="text-white">1. Collecte et transmission des données personnelles</h2>
        <p>
          Nous collectons les données suivantes via nos formulaires : nom, adresse email, téléphone, ville et détails de votre demande de service. En tant que Marketplace (plateforme de mise en relation), ces données sont transmises de façon sécurisée à nos techniciens ou artisans partenaires indépendants agréés afin de leur permettre de traiter votre demande et d'intervenir chez vous ou de vous envoyer un devis.
        </p>
        <p>
          Chaque artisan ou technicien partenaire est un tiers indépendant qui traite vos données conformément à ses propres obligations légales. PRO SERVICES décline toute responsabilité quant aux actions, omissions ou services fournis par ces tiers indépendants.
        </p>

        <h2 className="text-white">2. Utilisation des données</h2>
        <p>
          Vos données sont strictement utilisées pour le traitement de vos
          demandes de services, de devis et la facturation. Elles ne sont en
          aucun cas revendues à des tiers.
        </p>

        <h2 className="text-white">3. Sécurité</h2>
        <p>
          Nous prenons les mesures techniques et organisationnelles nécessaires
          pour protéger vos données contre toute perte ou accès non autorisé.
        </p>

        <h2 className="text-white">4. Vos droits (RGPD)</h2>
        <p>
          Conformément au RGPD européen, vous disposez d'un droit d'accès, de
          rectification, de suppression et de limitation concernant vos données.
          Pour exercer ce droit, veuillez nous contacter par email :
          debproservices@canalrose.be.
        </p>
      </div>
    </div>
  );
}
