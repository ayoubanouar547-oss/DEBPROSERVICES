export const metadata = {
  title: 'Mentions Légales | DEB PRO SERVICES',
  description: 'Informations juridiques légales sur la société DEB PRO SERVICES.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-48 pb-24 bg-[#000814] min-h-screen text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="inline-block bg-white/5 border border-white/10 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase text-slate-500 mb-8">
           Juridique
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-16 uppercase font-oswald tracking-tight">Mentions <br/><span className="text-blue-500">Légales</span></h1>
        
        <div className="space-y-16 prose prose-2xl prose-invert max-w-none font-medium text-slate-400">
          <section className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem]">
            <h2 className="text-white uppercase font-oswald text-3xl mb-8 tracking-wider border-b border-white/5 pb-4">Informations sur l'entreprise</h2>
            <p className="leading-relaxed">
              <strong className="text-blue-400 font-bold">Nom de la société :</strong> DEB PRO SERVICES<br/>
              <strong className="text-blue-400 font-bold">Forme juridique :</strong> SRL (Société à Responsabilité Limitée)<br/>
              <strong className="text-blue-400 font-bold">Siège social :</strong> Rue de l'Exemple 123, 1000 Bruxelles, Belgique<br/>
              <strong className="text-blue-400 font-bold">Numéro d'entreprise (BCE) :</strong> BE 0123.456.789<br/>
              <strong className="text-blue-400 font-bold">Téléphone :</strong> 0496 32 57 33<br/>
              <strong className="text-blue-400 font-bold">Email :</strong> contact@debproservices.be
            </p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem]">
            <h2 className="text-white uppercase font-oswald text-3xl mb-8 tracking-wider border-b border-white/5 pb-4">Hébergement du site</h2>
            <p className="leading-relaxed font-bold">Le site est hébergé par Vercel Inc.<br/>340 S Lemon Ave #4133<br/>Walnut, CA 91789</p>
          </section>

          <section className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem]">
            <h2 className="text-white uppercase font-oswald text-3xl mb-8 tracking-wider border-b border-white/5 pb-4">Responsabilité</h2>
            <p className="leading-relaxed">DEB PRO SERVICES s'efforce d'assurer au mieux la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. Les devis et estimations fournis en ligne sont donnés à titre indicatif et ne remplacent pas l'expertise sur place.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
