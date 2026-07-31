import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales — Plateforme d'Artisans Agréés",
  description:
    "Informations juridiques légales sur notre société, expert en dépannage en Belgique.",
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

        <h2 className="text-white">1. Informations sur l'entreprise</h2>
        <p>
          <strong>Nom de la société :</strong> DEB PRO SERVICES
          <br />
          <strong>Forme juridique :</strong> SRL (Société à Responsabilité Limitée)
          <br />
          <strong>Siège social :</strong> Madeliefjesstraat 1/B006, 1850 Grimbergen, Belgique
          <br />
          <strong>Numéro d'entreprise (BCE) / TVA :</strong> BE 1034.012.476
          <br />
          <strong>Téléphone :</strong> 0465 99 60 76
          <br />
          <strong>Email :</strong> debproservices@canalrose.be
        </p>

        <h2 className="text-white">2. Hébergement du site</h2>
        <p>
          Le site est hébergé par Vercel Inc.
          <br />
          340 S Lemon Ave #4133
          <br />
          Walnut, CA 91789
        </p>

        <h2 className="text-white">3. Responsabilité</h2>
        <p>
          DEB PRO SERVICES s'efforce d'assurer au mieux la mise à jour des
          informations diffusées sur ce site, dont elle se réserve le droit de
          corriger le contenu à tout moment et sans préavis. Les devis et
          estimations fournis en ligne sont donnés à titre indicatif et ne
          remplacent pas l'expertise sur place.
        </p>
      </div>
    </div>
  );
}

