import { buildLongClusterText } from '@/lib/utils/seo-content-generator';
import { services } from '@/lib/data/services';
import { belgianCities } from '@/lib/data/cities';
import { notFound } from 'next/navigation';
import { PhoneCall, MapPin, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';

export function generateStaticParams() {
  const params: { serviceSlug: string, citySlug: string }[] = [];
  
  services.forEach((service) => {
    belgianCities.forEach((city) => {
      params.push({
        serviceSlug: service.slug,
        citySlug: city.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string, citySlug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.serviceSlug);
  const cityInfo = belgianCities.find(c => c.slug === resolvedParams.citySlug);
  
  if (!service || !cityInfo) return {};

  return {
    title: `${service.title} ${cityInfo.name} | Urgence & Dépannage 24/7 | DEB PRO SERVICES`,
    description: `A la recherche d'un expert en ${service.title.toLowerCase()} à ${cityInfo.name} (${cityInfo.province}) ? Intervention rapide, agréée et garantie. Devis gratuit.`,
  };
}

export default async function ZoneServiceCityPage({ params }: { params: Promise<{ serviceSlug: string, citySlug: string }> }) {
  const resolvedParams = await params;
  const serviceInfo = services.find(s => s.slug === resolvedParams.serviceSlug);
  const cityInfo = belgianCities.find(c => c.slug === resolvedParams.citySlug);

  if (!serviceInfo || !cityInfo) {
    notFound();
  }

  // Programmatic City Texts
  const localIntro = `Vous résidez à <strong>${cityInfo.name}</strong> ou dans les environs de la province de ${cityInfo.province} et vous faites face à une urgence en matière de ${serviceInfo.title.toLowerCase()} ? Ne cherchez plus. DEB PRO SERVICES détache ses meilleurs techniciens locaux pour intervenir directement à votre domicile à ${cityInfo.name} ou dans vos locaux professionnels.`;
  
  const localSpeed = `Notre force principale à ${cityInfo.name} est notre rapidité d'action. En connaissant parfaitement la région de ${cityInfo.province}, nos équipes d'intervention d'urgence évitent les bouchons et se rendent chez vous en moins de 30 minutes. Qu'il s'agisse de ${serviceInfo.subServices.map(s=> s.title.toLowerCase()).join(', ')}, nous avons le matériel adéquat dans nos fourgons basés près de ${cityInfo.name}.`;

  const massiveSEOContent = buildLongClusterText(serviceInfo.title.toLowerCase(), cityInfo.name);

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
              "name": "DEB PRO SERVICES",
              "areaServed": {
                "@type": "City",
                "name": cityInfo.name
              }
            },
            "description": `Services de ${serviceInfo.title.toLowerCase()} à ${cityInfo.name}. Intervention urgente.`
          })
        }}
      />

      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-900"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
             <Link href="/" className="hover:text-blue-400">Accueil</Link>
             <ChevronRight className="w-4 h-4" />
             <Link href="/zones-de-services" className="hover:text-blue-400">Zones de Services</Link>
             <ChevronRight className="w-4 h-4" />
             <span className="text-white font-bold">{serviceInfo.title} à {cityInfo.name}</span>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="max-w-2xl">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full text-xs font-black border border-blue-500/20 mb-8 uppercase tracking-[0.3em] text-blue-400">
                  <MapPin className="w-4 h-4" />
                  Intervention sur {cityInfo.name}
               </div>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 uppercase font-oswald tracking-tighter">
                  {serviceInfo.title} <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {cityInfo.name}
                  </span>
               </h1>
               <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                 Techniciens de garde spécialisés en <strong>{serviceInfo.title.toLowerCase()}</strong> disponibles immédiatement sur toute la commune de {cityInfo.name}. Déplacement express et devis gratuit.
               </p>
               <div className="flex flex-wrap gap-4">
                  <a href="tel:0496325733" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/20">
                    <PhoneCall className="w-6 h-6" /> SOS Urgence {cityInfo.name}
                  </a>
               </div>
             </div>
             
             <div className="relative hidden lg:block">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                  <img src={`https://picsum.photos/seed/${cityInfo.slug}${serviceInfo.slug}/800/600`} alt={`${serviceInfo.title} à ${cityInfo.name}`} className="w-full h-full object-cover" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">Éligible Intervention Rapide</div>
                      <div className="text-blue-300 text-sm">Zone: {cityInfo.province}</div>
                    </div>
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/40">
                      <CheckCircle className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      <section className="py-24 relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-6">Expertise de Proximité en {serviceInfo.title} à {cityInfo.name}</h2>
                <div className="prose prose-lg prose-invert text-slate-300">
                  <p dangerouslySetInnerHTML={{ __html: localIntro }} />
                  <p dangerouslySetInnerHTML={{ __html: localSpeed }} />
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                 <img src={`https://picsum.photos/seed/${cityInfo.name}ville/800/400`} alt={`Camion d'intervention à ${cityInfo.name}`} className="w-full h-full object-cover" />
              </div>

              <div>
                <h3 className="text-2xl font-black mb-6">Tous nos services de {serviceInfo.title.toLowerCase()} sur {cityInfo.name}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {serviceInfo.subServices.map(sub => (
                    <Link key={sub.slug} href={`/zones-de-services/${serviceInfo.slug}/${sub.slug}/${cityInfo.slug}`} className="group bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition overflow-hidden flex flex-col">
                      <div className="relative h-32 w-full overflow-hidden flex-shrink-0 z-10">
                        <img 
                          src={`https://picsum.photos/seed/${sub.slug}/600/400`} 
                          alt={`Intervention ${sub.title} ${cityInfo.name}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                      </div>
                      <div className="p-4 flex items-start gap-4 flex-grow relative z-10">
                        <serviceInfo.icon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{sub.title}</h4>
                          <p className="text-sm text-slate-400 line-clamp-2">{sub.desc}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-black mb-4">La Garantie DEB PRO SERVICES</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><ShieldCheck className="text-blue-400 w-6 h-6" /> <span className="text-slate-300">Devis gratuit et détaillé avant toute action.</span></li>
                  <li className="flex items-center gap-3"><ShieldCheck className="text-blue-400 w-6 h-6" /> <span className="text-slate-300">Pièces et main-d'œuvre garanties 1 an minimum.</span></li>
                  <li className="flex items-center gap-3"><ShieldCheck className="text-blue-400 w-6 h-6" /> <span className="text-slate-300">Intervenants certifiés.</span></li>
                </ul>
              </div>

              {/* Massive Programmatic SEO Text Block */}
              <div className="mt-16 prose prose-lg prose-invert text-slate-400">
                <h2 className="text-3xl font-black text-white mb-8 border-t border-white/10 pt-8">Expertise Approfondie pour {cityInfo.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: massiveSEOContent.join('') }} />
              </div>

            </div>
            
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4 text-white">Villes à proximité</h3>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {belgianCities.filter(c => c.province === cityInfo.province && c.slug !== cityInfo.slug).slice(0, 10).map(c => (
                      <Link 
                        key={c.slug}
                        href={`/zones-de-services/${serviceInfo.slug}/${c.slug}`}
                        className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg flex items-center justify-center bg-slate-800">
                   <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/400/300')] opacity-50 mix-blend-luminosity bg-cover bg-center"></div>
                   <div className="relative z-10 flex flex-col items-center">
                     <MapPin className="text-red-500 w-12 h-12 drop-shadow-lg" />
                     <div className="mt-2 font-bold text-white bg-dark/80 px-4 py-1 rounded-full backdrop-blur-md">Zone : {cityInfo.name}</div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white/5 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">Intervention {serviceInfo.title} à {cityInfo.name}</h2>
            <p className="text-slate-400">Remplissez form pour un devis. Pour les urgences, appelez-nous.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ city={cityInfo.name} />
    </>
  );
}
