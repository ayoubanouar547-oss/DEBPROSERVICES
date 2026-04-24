import { PageHero } from '@/components/ui/PageHero';

export const metadata = {
  title: 'Mentions Légales | DEB PRO SERVICES',
  description: 'Informations juridiques légales sur la société DEB PRO SERVICES.',
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero 
        title="Mentions"
        titleHighlight="Légales"
        description="Informations juridiques et administratives concernant la société DEB PRO SERVICES."
        primaryButtonText=""
        secondaryButtonText=""
      />
      <div className="pb-24 relative z-10 text-slate-300">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg prose-invert">
          <h2>Informations sur l'entreprise</h2>
          <p>
            <strong>Nom de la société :</strong> DEB PRO SERVICES<br/>
            <strong>Forme juridique :</strong> SRL (Société à Responsabilité Limitée)<br/>
            <strong>Siège social :</strong> Rue de l'Exemple 123, 1000 Bruxelles, Belgique<br/>
            <strong>Numéro d'entreprise (BCE) :</strong> BE 0123.456.789<br/>
            <strong>Téléphone :</strong> 0470 00 00 00<br/>
            <strong>Email :</strong> contact@debproservices.be
          </p>

          <h2>Hébergement du site</h2>
          <p>Le site est hébergé par Vercel Inc.<br/>340 S Lemon Ave #4133<br/>Walnut, CA 91789</p>

          <h2>Responsabilité</h2>
          <p>DEB PRO SERVICES s'efforce d'assurer au mieux la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Les devis et estimations fournis en ligne sont donnés à titre indicatif et ne remplacent pas l'expertise sur place.</p>
        </div>
      </div>
    </>
  );
}
