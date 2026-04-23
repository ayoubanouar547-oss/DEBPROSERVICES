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
  return {
    title: `${service.title} Belgique | DEB PRO SERVICES ☎ 24H/24`,
    description: `Service professionnel de ${service.title.toLowerCase()}. ${service.description} Intervention urgente 24h/24 et 7j/7 partout en Belgique.`,
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

      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none">
           <div className={`absolute inset-0 ${serviceInfo.color.bg} opacity-20 blur-3xl`}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="max-w-3xl">
             <div className={`inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-sm font-bold border border-white/10 mb-6 uppercase tracking-widest ${serviceInfo.color.text}`}>
                <serviceInfo.icon className="w-4 h-4" />
                Service Pro & Agrée
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 text-white drop-shadow-lg">
                Expert {serviceInfo.title}
             </h1>
             <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
               {serviceInfo.description}
             </p>
             <div className="flex flex-wrap gap-4">
                <a href="tel:0470000000" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/30">
                  <PhoneCall className="w-5 h-5" /> Urgence {serviceInfo.title}
                </a>
             </div>
           </div>
        </div>
      </section>

      {/* Sub-services / Clusters Overview */}
      <section className="py-24 relative z-10 text-white bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-black mb-4">Nos domaines d'intervention en {serviceInfo.title}</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">Découvrez en détail l'ensemble de nos champs d'expertise. Chaque problème a sa solution dédiée avec DEB PRO SERVICES.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {serviceInfo.subServices.map(sub => (
               <Link 
                 key={sub.slug}
                 href={`/${serviceInfo.slug}/${sub.slug}`}
                 className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col"
               >
                 <div className="relative h-48 w-full overflow-hidden flex-shrink-0 z-10">
                   <img 
                     src={`https://picsum.photos/seed/${sub.slug}/600/400`} 
                     alt={`Intervention ${sub.title}`} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                 </div>

                 <div className="p-8 pt-6 flex flex-col flex-grow relative z-10">
                   <h3 className={`text-2xl font-bold mb-3 group-hover:${serviceInfo.color.text} transition-colors`}>{sub.title}</h3>
                   <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">{sub.desc}</p>
                   <div className="flex items-center text-sm font-bold uppercase tracking-wider text-slate-300 group-hover:text-white mt-auto">
                     En savoir plus <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
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
              
              <div 
                className="prose prose-lg prose-invert text-slate-300"
                dangerouslySetInnerHTML={{ __html: serviceInfo.contentHTML || serviceInfo.description }}
              />

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
                     <a href="tel:0470000000" className="bg-white text-slate-900 w-full px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition">
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
