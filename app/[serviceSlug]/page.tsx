import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import { PhoneCall, ShieldCheck, CheckCircle, ChevronRight } from 'lucide-react';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';
import Link from 'next/link';
import { belgianCities } from '@/lib/data/cities';
import Image from 'next/image';

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
            "@graph": [
              {
                "@type": "Service",
                "@id": `https://debproservices.be/${serviceInfo.slug}#service`,
                "name": serviceInfo.title,
                "serviceType": serviceInfo.title,
                "description": serviceInfo.description,
                "provider": {
                  "@id": "https://debproservices.be/#organization"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Belgium"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": `Services de ${serviceInfo.title}`,
                  "itemListElement": serviceInfo.subServices.map((sub, i) => ({
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": sub.title,
                      "description": sub.desc
                    },
                    "position": i + 1
                  }))
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://debproservices.be/#organization",
                "name": "DEB PRO SERVICES",
                "image": "https://debproservices.be/logo.png",
                "url": "https://debproservices.be",
                "telephone": "0496325733",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Brussels",
                  "addressCountry": "BE"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 50.8503,
                  "longitude": 4.3517
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "00:00",
                  "closes": "23:59"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "0496325733",
                  "contactType": "emergency",
                  "areaServed": "BE",
                  "availableLanguage": ["French", "Dutch", "English"]
                }
              }
            ]
          })
        }}
      />

      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={serviceInfo.imageUrl}
            alt={`DEB PRO SERVICES - ${serviceInfo.title}`}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#000814]/80 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-[#000814]/40" />
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
                <a href="tel:0496325733" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/30">
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
             <h2 className="text-5xl font-black mb-10 text-white uppercase tracking-tight">Nos domaines d'intervention en {serviceInfo.title}</h2>
             <p className="text-white text-xl max-w-2xl mx-auto font-medium">Découvrez en détail l'ensemble de nos champs d'expertise. Chaque problème a sa solution dédiée avec DEB PRO SERVICES.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {serviceInfo.subServices.map(sub => (
               <Link 
                 key={sub.slug}
                 href={`/${serviceInfo.slug}/${sub.slug}`}
                 className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col"
               >
                 <div className="relative h-48 w-full overflow-hidden flex-shrink-0 z-10">
                   <img 
                     src={(sub as any).imageUrl || serviceInfo.imageUrl} 
                     alt={`Intervention ${sub.title}`} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                 </div>

                 <div className="p-8 pt-6 flex flex-col flex-grow relative z-10">
                   <h3 className={`text-2xl font-bold mb-3 group-hover:${serviceInfo.color.text} transition-colors uppercase tracking-tight text-white`}>{sub.title}</h3>
                   <p className="text-white mb-6 text-sm leading-relaxed flex-grow">{sub.desc}</p>
                   <div className="flex items-center text-sm font-bold uppercase tracking-wider text-white group-hover:text-blue-400 mt-auto transition-colors">
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
              <h2 className="text-5xl font-black text-white leading-tight uppercase">Prestations de haute qualité pour votre {serviceInfo.title.toLowerCase()}</h2>
              
              <div className="prose prose-xl prose-invert text-white">
                <p>
                  Dans le domaine de la <strong>{serviceInfo.title.toLowerCase()}</strong>, l'improvisation n'a pas sa place. Un système mal entretenu ou rafistolé peut entraîner des dysfonctionnements, voire des dégâts importants dans votre habitation ou vos locaux commerciaux. En faisant appel à notre équipe, vous optez pour la sérénité.
                </p>
                <p>
                  Nous prenons en charge toutes les étapes : du diagnostic précis à la résolution de la panne. Nous disposons des certifications nécessaires pour intervenir en toute sécurité.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white mb-8 border-b border-white/10 pb-4">Nos garanties d'expert :</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceInfo.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-3 bg-white/5 p-6 rounded-2xl border border-white/10">
                      <CheckCircle className={`w-6 h-6 flex-shrink-0 ${serviceInfo.color.text}`} />
                      <span className="font-bold text-white uppercase text-xs tracking-widest">{feat}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-3 bg-white/5 p-6 rounded-2xl border border-white/10">
                    <ShieldCheck className={`w-6 h-6 flex-shrink-0 ${serviceInfo.color.text}`} />
                    <span className="font-bold text-white uppercase text-xs tracking-widest">Pièces certifiées d'origine</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative h-full min-h-[700px] border border-white/10 bg-slate-800/20 backdrop-blur-sm">
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent flex items-end p-10">
                   <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-3xl w-full translate-y-2 group">
                     <h4 className="text-white font-black text-3xl mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">Une urgence ?</h4>
                     <p className="text-white mb-8 font-medium text-lg leading-relaxed">Les dégâts matériels peuvent s'aggraver rapidement. Appelez-nous avant que la situation ne devienne critique.</p>
                     <a href="tel:0496325733" className="bg-red-600 shadow-xl shadow-red-600/30 text-white w-full px-8 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-red-700 transition-all uppercase tracking-widest">
                       Nous appeler <PhoneCall className="w-6 h-6" />
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
