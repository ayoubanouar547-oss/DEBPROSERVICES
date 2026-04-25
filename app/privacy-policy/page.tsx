export const metadata = {
  title: 'Politique de Confidentialité | DEB PRO SERVICES',
  description: 'Notre politique de confidentialité et de gestion des données personnelles (RGPD).',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-48 pb-24 bg-[#000814] min-h-screen text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-slate-500 mb-8">
           Données Personnelles
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-16 uppercase font-oswald tracking-tight">Politique de <br/><span className="text-blue-500">Confidentialité</span></h1>
        
        <div className="space-y-16 prose prose-2xl prose-invert max-w-none font-medium text-slate-400">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          
          <p className="text-xl leading-relaxed">Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi belge du 30 juillet 2018, DEB PRO SERVICES s'engage à protéger vos données personnelles. La présente politique de confidentialité vous informe sur la collecte, le traitement et la conservation de vos données.</p>

          <section className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem]">
            <h2 className="text-white uppercase font-oswald text-3xl mb-8 tracking-wider border-b border-white/5 pb-4">1. Collecte des données personnelles</h2>
            <p className="leading-relaxed">Nous collectons les données suivantes via notre formulaire de contact : nom, adresse email, téléphone, ville et détails de votre demande. Ces informations sont nécessaires pour répondre à vos demandes d'intervention ou de devis.</p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem]">
             <h2 className="text-white uppercase font-oswald text-3xl mb-8 tracking-wider border-b border-white/5 pb-4">2. Utilisation des données</h2>
             <p className="leading-relaxed font-bold text-white">Vos données sont strictement utilisées pour le traitement de vos demandes de services, de devis et la facturation. Elles ne sont en aucun cas revendues à des tiers.</p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem]">
             <h2 className="text-white uppercase font-oswald text-3xl mb-8 tracking-wider border-b border-white/5 pb-4">3. Sécurité</h2>
             <p className="leading-relaxed">Nous prenons les mesures techniques et organisationnelles nécessaires pour protéger vos données contre toute perte ou accès non autorisé. La transmission des données est chiffrée SSL.</p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem]">
             <h2 className="text-white uppercase font-oswald text-3xl mb-8 tracking-wider border-b border-white/5 pb-4">4. Vos droits (RGPD)</h2>
             <p className="leading-relaxed">Conformément au RGPD européen, vous disposez d'un droit d'accès, de rectification, de suppression et de limitation concernant vos données. Pour exercer ce droit, veuillez nous contacter par email : <span className="text-blue-500">contact@debproservices.be</span>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
