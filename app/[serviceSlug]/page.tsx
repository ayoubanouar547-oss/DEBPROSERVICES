import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import { PhoneCall, ShieldCheck, CheckCircle, ChevronRight } from 'lucide-react';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';
import Link from 'next/link';
import { belgianCities } from '@/lib/data/cities';

export function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.serviceSlug);
  if (!service) return {};

  let description = `Service de ${service.title.toLowerCase()}. Intervention urgente 24h/24 et 7j/7 en Belgique. Devis gratuit.`;

  if (service.slug === 'plomberie') {
    description = "Plomberie urgence 24/7: technicien agréé en Belgique. Fuites ou installations. Devis gratuit et dépannage rapide. Contactez DEB PRO SERVICES !";
  } else if (service.slug === 'debouchage-canalisation') {
    description = "Débouchage urgence 24/7: technicien agréé en Belgique. WC, égouts, éviers bouchés. Devis gratuit, action immédiate. Contactez DEB PRO SERVICES !";
  } else if (service.slug === 'chauffage') {
    description = "Chauffage urgence 24/7: chauffagiste et technicien agréé en Belgique. Dépannage chaudière, devis gratuit. Appelez DEB PRO SERVICES maintenant !";
  } else if (service.slug === 'renovation-maison') {
    description = "Rénovation maison & appartement en Belgique. Spécialiste douche italienne, salle de bain et rénovation totale. Devis gratuit, travail pro 24/7. Contactez-nous !";
  }

  return {
    title: `${service.title} Belgique | DEB PRO SERVICES ☎ 24H/24`,
    description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const resolvedParams = await params;
  const serviceInfo = services.find(s => s.slug === resolvedParams.serviceSlug);
  
  if (!serviceInfo) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": serviceInfo.title,
            "provider": {
              "@type": "LocalBusiness",
              "name": "DEB PRO SERVICES"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Belgium"
            },
            "description": serviceInfo.description
          })
        }}
      />

      <section className="relative pt-40 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 bg-[#000814] pointer-events-none">
           <div className={`absolute inset-0 ${serviceInfo.color.bg} opacity-20 blur-[120px] rounded-full`}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div>
               <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full text-xs font-black border border-white/10 mb-8 uppercase tracking-[0.2em] ${serviceInfo.color.text}`}>
                  <serviceInfo.icon className="w-4 h-4" />
                  Technicien Agréé en Belgique
               </div>
               <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95] mb-8 text-white tracking-tighter uppercase font-oswald">
                  {serviceInfo.title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Belgique</span>
               </h1>
               <p className="text-xl text-slate-300 mb-10 max-w-xl leading-relaxed font-medium">
                 {serviceInfo.description} Intervention express 24h/24 et 7j/7 par nos experts locaux.
               </p>
               <div className="flex flex-wrap gap-6">
                  <a href="tel:0496325733" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-xl px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all border-b-4 border-red-900 active:border-b-0 active:translate-y-1 shadow-2xl shadow-red-600/30">
                    <PhoneCall className="w-6 h-6 animate-pulse" /> SOS {serviceInfo.title}
                  </a>
               </div>
             </div>

             <div className="relative hidden lg:block">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(30,58,138,0.3)] relative">
                  <img src={`https://picsum.photos/seed/${serviceInfo.slug}/1000/750`} alt={`${serviceInfo.title} service illustration`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 glassy p-6 rounded-2xl flex items-center justify-between border border-white/10">
                    <div>
                      <div className="text-white font-black text-xl uppercase tracking-wider mb-1">Disponibilité immédiate</div>
                      <div className="text-blue-400 text-sm font-bold flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                        Technicien en route possible
                      </div>
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Sub-services / Clusters Overview */}
      <section className="py-32 relative z-10 text-white bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-20">
             <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm">Nos Spécialités</h2>
             <h3 className="text-4xl md:text-6xl font-black mb-6 uppercase font-oswald tracking-tight">Services {serviceInfo.title}</h3>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg">Chaque intervention est réalisée avec précision par un technicien agréé maîtrisant parfaitement son domaine.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {serviceInfo.subServices.map(sub => (
               <Link 
                 key={sub.slug}
                 href={`/${serviceInfo.slug}/${sub.slug}`}
                 className="group bg-[#000814]/40 backdrop-blur-xl border border-white/5 rounded-3xl hover:bg-white/5 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden flex flex-col hover:border-blue-500/30 shadow-2xl"
               >
                 <div className="relative h-56 w-full overflow-hidden flex-shrink-0 z-10">
                   <img 
                     src={`https://picsum.photos/seed/${sub.slug}/800/600`} 
                     alt={`Intervention ${sub.title}`} 
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/20 to-transparent"></div>
                 </div>

                 <div className="p-10 pt-8 flex flex-col flex-grow relative z-10">
                   <h4 className={`text-3xl font-black mb-4 group-hover:${serviceInfo.color.text} transition-colors uppercase font-oswald tracking-tight`}>{sub.title}</h4>
                   <p className="text-slate-400 mb-8 text-sm leading-relaxed flex-grow font-medium">{sub.desc}</p>
                   <div className="flex items-center text-xs font-black uppercase tracking-[0.2em] text-blue-400 group-hover:text-white mt-auto transition-colors">
                     Consulter le service <ChevronRight className="w-5 h-6 ml-2 group-hover:translate-x-3 transition-transform" />
                   </div>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* SEO Text Core */}
      <section className="py-24 relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black">Prestations de haute qualité pour votre {serviceInfo.title.toLowerCase()}</h2>
              
              <div className="prose prose-lg prose-invert text-slate-300">
                <p>
                  Dans le domaine de la <strong>{serviceInfo.title.toLowerCase()}</strong>, l'improvisation n'a pas sa place. Un système mal entretenu ou rafistolé peut entraîner des dysfonctionnements, voire des dégâts importants dans votre habitation ou vos locaux commerciaux. En faisant appel à notre équipe, vous optez pour la sérénité.
                </p>
                <p>
                  Nous prenons en charge toutes les étapes : du diagnostic précis à la résolution de la panne. Nous disposons des certifications nécessaires pour intervenir en toute sécurité.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Nos garanties d'expert :</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceInfo.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${serviceInfo.color.text}`} />
                      <span className="font-medium text-slate-200">{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <ShieldCheck className={`w-5 h-5 flex-shrink-0 ${serviceInfo.color.text}`} />
                    <span className="font-medium text-slate-200">Pièces certifiées d'origine</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${serviceInfo.color.text}`} />
                    <span className="font-medium text-slate-200">Déplacement rapide</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative h-full min-h-[600px] border border-white/10">
                 <img src={`https://picsum.photos/seed/${serviceInfo.slug}/800/1000`} alt={`${serviceInfo.title} service illustration`} className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-8">
                   <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl w-full">
                     <h4 className="text-white font-black text-2xl mb-3">Une urgence ?</h4>
                     <p className="text-slate-300 mb-6 font-medium">Les dégâts matériels peuvent s'aggraver rapidement. Appelez-nous avant que la situation ne devienne critique.</p>
                     <a href="tel:0496325733" className="bg-white text-slate-900 w-full px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition">
                       Nous appeler <PhoneCall className="w-5 h-5" />
                     </a>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Local SEO Matrix */}
      <section className="py-24 border-t border-white/10 relative z-10 bg-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-black text-white mb-4">Intervention {serviceInfo.title} dans toute la Belgique</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">Sélectionnez votre ville ci-dessous pour découvrir nos services de proximité et contacter nos techniciens locaux.</p>
           </div>
           
           <div className="flex flex-wrap justify-center gap-3">
              {belgianCities.slice(0, 30).map((city) => (
                <Link
                  key={city.slug}
                  href={`/zones-de-services/${serviceInfo.slug}/${city.slug}`}
                  className="px-4 py-2 bg-slate-800/50 border border-white/10 rounded-full text-sm text-slate-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  {city.name}
                </Link>
              ))}
              <Link href="/zones-de-services" className="px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold rounded-full text-sm hover:bg-blue-600/40 transition">
                Voir toutes les villes →
              </Link>
           </div>
         </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 max-w-2xl mx-auto">
               <h2 className="text-3xl font-black text-white mb-4">Demander une intervention {serviceInfo.title}</h2>
               <p className="text-slate-400">Remplissez le formulaire de contact pour obtenir un devis gratuit ou planifier une intervention non urgente. Une réponse vous sera apportée sous 24h.</p>
            </div>
            <ContactForm />
         </div>
      </section>

      <FAQ />

    </>
  );
}
