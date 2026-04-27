import { buildLongClusterText } from '@/lib/utils/seo-content-generator';
import { services } from '@/lib/data/services';
import { belgianCities } from '@/lib/data/cities';
import { notFound } from 'next/navigation';
import { PhoneCall, MapPin, ChevronRight, CheckCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';
import Image from 'next/image';

interface UnifiedParams {
  serviceSlug: string;
  cityPath: string[];
}

export function generateStaticParams() {
  const params: UnifiedParams[] = [];
  
  services.forEach((service) => {
    // 1-level: service + city
    belgianCities.forEach((city) => {
      params.push({
        serviceSlug: service.slug,
        cityPath: [city.slug],
      });
    });

    // 1-level: service + subservice (list cities for subservice)
    service.subServices.forEach((sub) => {
      params.push({
        serviceSlug: service.slug,
        cityPath: [sub.slug],
      });

      // 2-level: service + subservice + city
      belgianCities.forEach((city) => {
        params.push({
          serviceSlug: service.slug,
          cityPath: [sub.slug, city.slug],
        });
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: { params: Promise<UnifiedParams> }) {
  const resolvedParams = await params;
  const { serviceSlug, cityPath } = resolvedParams;
  
  const service = services.find(s => s.slug === serviceSlug);
  if (!service) return {};

  let subService = null;
  let cityInfo = null;

  if (cityPath.length === 1) {
    // Could be city OR subservice
    cityInfo = belgianCities.find(c => c.slug === cityPath[0]);
    subService = service.subServices.find(ss => ss.slug === cityPath[0]);
  } else if (cityPath.length === 2) {
    subService = service.subServices.find(ss => ss.slug === cityPath[0]);
    cityInfo = belgianCities.find(c => c.slug === cityPath[1]);
  }

  if (subService && cityInfo) {
    return {
      title: `${subService.title} ${cityInfo.name} | Urgence & Dépannage 24/7 | DEB PRO SERVICES`,
      description: `Besoin d'un expert pour ${subService.title.toLowerCase()} à ${cityInfo.name} (${cityInfo.province}) ? Intervention rapide, agréée et garantie. Devis gratuit au 0496 32 57 33.`,
    };
  }

  if (subService) {
    return {
      title: `Nos Zones d'Intervention en ${subService.title} | Belgique | DEB PRO SERVICES`,
      description: `Découvrez toutes les villes en Belgique où nous intervenons pour votre ${subService.title.toLowerCase()}. Service rapide 24h/24 et 7j/7.`,
    };
  }

  if (cityInfo) {
    return {
      title: `${service.title} à ${cityInfo.name} | Plombier & Chauffagiste 24/7 | DEB PRO SERVICES`,
      description: `Service de ${service.title.toLowerCase()} professionnel à ${cityInfo.name} (${cityInfo.province}). Intervention rapide 24h/24 et 7j/7. Plombiers et chauffagistes agréés.`,
    };
  }

  return {};
}

export default async function UnifiedZonePage({ params }: { params: Promise<UnifiedParams> }) {
  const resolvedParams = await params;
  const { serviceSlug, cityPath } = resolvedParams;

  const serviceInfo = services.find(s => s.slug === serviceSlug);
  if (!serviceInfo) notFound();

  let subServiceInfo = null;
  let cityInfo = null;

  if (cityPath.length === 1) {
    cityInfo = belgianCities.find(c => c.slug === cityPath[0]);
    subServiceInfo = serviceInfo.subServices.find(ss => ss.slug === cityPath[0]);
    if (!cityInfo && !subServiceInfo) notFound();
  } else if (cityPath.length === 2) {
    subServiceInfo = serviceInfo.subServices.find(ss => ss.slug === cityPath[0]);
    cityInfo = belgianCities.find(c => c.slug === cityPath[1]);
    if (!subServiceInfo || !cityInfo) notFound();
  } else {
    notFound();
  }

  // Case: Service + Subservice (List cities)
  if (subServiceInfo && !cityInfo) {
    const provinces = Array.from(new Set(belgianCities.map(c => c.province))).sort();
    return (
      <div className="bg-slate-900 min-h-screen pt-32 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/zones-de-services" className="hover:text-blue-400 transition-colors">Zones de Services</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/zones-de-services/${serviceInfo.slug}`} className="hover:text-blue-400 transition-colors">{serviceInfo.title}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{subServiceInfo.title}</span>
          </div>

          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6">
              Villes pour <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {subServiceInfo.title}
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Nous intervenons en urgence partout en Belgique pour votre {subServiceInfo.title.toLowerCase()}. Sélectionnez votre ville pour une intervention locale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {provinces.map(province => {
              const cities = belgianCities.filter(c => c.province === province).sort((a, b) => a.name.localeCompare(b.name));
              return (
                <div key={province} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors group">
                  <h2 className="text-2xl font-black mb-6 flex items-center justify-between">
                    {province}
                  </h2>
                  <div className="grid grid-cols-1 gap-1">
                    {cities.map(city => (
                      <Link 
                        key={city.slug} 
                        href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo.slug}/${city.slug}`}
                        className="flex items-center justify-between py-2 text-slate-400 hover:text-white transition-colors group/city"
                      >
                        <span className="text-sm font-bold uppercase tracking-tight">{city.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/city:opacity-100 group-hover/city:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Case: City + (Service or Subservice) content
  if (!cityInfo) notFound();

  const titleToUse = subServiceInfo ? subServiceInfo.title : serviceInfo.title;
  const localIntro = `Vous résidez à <strong>${cityInfo.name}</strong> (${cityInfo.province}) et vous cherchez un expert pour <strong>${titleToUse.toLowerCase()}</strong> ? DEB PRO SERVICES intervient en urgence 24h/24 et 7j/7. Nos techniciens spécialisés en ${serviceInfo.title.toLowerCase()} sont équipés pour résoudre votre problème de ${titleToUse.toLowerCase()} rapidement et durablement.`;
  const localSpeed = `Grâce à notre présence locale à ${cityInfo.name}, nous garantissons une intervention en moins de 30 minutes après votre appel. Nous connaissons parfaitement les quartiers de ${cityInfo.name}, ce qui nous permet d'arriver chez vous sans délai pour votre ${titleToUse.toLowerCase()}.`;
  const massiveSEOContent = buildLongClusterText(titleToUse.toLowerCase(), cityInfo.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": titleToUse,
            "provider": {
              "@type": "LocalBusiness",
              "name": "DEB PRO SERVICES",
              "areaServed": {
                "@type": "City",
                "name": cityInfo.name
              }
            },
            "description": `${titleToUse} à ${cityInfo.name}. Intervention urgente 24/7.`
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
             <Link href={`/zones-de-services/${serviceInfo.slug}`} className="hover:text-blue-400">{serviceInfo.title}</Link>
             <ChevronRight className="w-4 h-4" />
             {subServiceInfo && (
               <>
                 <Link href={`/zones-de-services/${serviceInfo.slug}/${cityInfo.slug}`} className="hover:text-blue-400">{cityInfo.name}</Link>
                 <ChevronRight className="w-4 h-4" />
               </>
             )}
             <span className="text-white font-bold">{subServiceInfo ? subServiceInfo.title : cityInfo.name}</span>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="max-w-2xl">
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-xl rounded-full text-sm font-bold border border-white/10 mb-6 uppercase tracking-widest text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  Service Urgent à {cityInfo.name}
               </div>
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6">
                  {titleToUse} <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    {cityInfo.name}
                  </span>
               </h1>
               <p className="text-2xl text-white mb-10 leading-relaxed">
                 Experts en <strong>{titleToUse.toLowerCase()}</strong> disponibles immédiatement sur toute la ville de {cityInfo.name}. Solutions durables et prix transparents.
               </p>
               <div className="flex flex-wrap gap-4">
                  <a href="tel:0496325733" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/20">
                    <PhoneCall className="w-6 h-6" /> SOS Urgent {cityInfo.name}
                  </a>
               </div>
             </div>
             
             <div className="relative hidden lg:block">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                  <Image 
                    src={serviceInfo.imageUrl} 
                    fill
                    alt={`${titleToUse} à ${cityInfo.name}`} 
                    className="object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold text-lg">Spécialiste {cityInfo.name}</div>
                      <div className="text-blue-300 text-sm">Disponible en {cityInfo.province}</div>
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
             <div className="lg:col-span-8 space-y-16">
              <div>
                <h2 className="text-5xl font-black mb-10 text-white">{titleToUse} à {cityInfo.name} : Notre Expertise</h2>
                <div className="prose prose-xl prose-invert text-white">
                  <p dangerouslySetInnerHTML={{ __html: localIntro }} />
                  <p dangerouslySetInnerHTML={{ __html: localSpeed }} />
                </div>
              </div>

              {!subServiceInfo && (
                <div>
                  <h3 className="text-3xl font-black mb-8">Nos Services Spécifiques à {cityInfo.name}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {serviceInfo.subServices.map((sub) => (
                      <Link 
                        key={sub.slug}
                        href={`/zones-de-services/${serviceInfo.slug}/${sub.slug}/${cityInfo.slug}`}
                        className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group"
                      >
                        <h4 className="font-bold text-lg mb-2 group-hover:text-blue-400">{sub.title}</h4>
                        <p className="text-sm text-slate-400">{sub.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                 <Image src={serviceInfo.imageUrl} width={1200} height={600} alt={`${titleToUse} ${cityInfo.name}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div>
                <h3 className="text-4xl font-black mb-10 text-white">Pourquoi nous choisir à {cityInfo.name} ?</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {serviceInfo.features.map((feature, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-lg font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-10">
                <h3 className="text-3xl font-black mb-6 text-white">Intervention Garantie 100% Satisfait</h3>
                <ul className="space-y-6">
                  <li className="flex items-center gap-4 text-xl"><ShieldCheck className="text-blue-400 w-8 h-8" /> <span className="text-white">Transparence totale sur les tarifs.</span></li>
                  <li className="flex items-center gap-4 text-xl"><ShieldCheck className="text-blue-400 w-8 h-8" /> <span className="text-white">Matériel professionnel de dernière génération.</span></li>
                  <li className="flex items-center gap-4 text-xl"><ShieldCheck className="text-blue-400 w-8 h-8" /> <span className="text-white">Service client réactif 24h/24.</span></li>
                </ul>
              </div>

              <div className="mt-16 prose prose-xl prose-invert text-white">
                <h2 className="text-5xl font-black text-white mb-10 border-t border-white/10 pt-10">Détails techniques pour {cityInfo.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: massiveSEOContent.slice(0, 3).join('') }} />
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl my-12">
                   <Image src={serviceInfo.imageUrl} width={1200} height={600} alt={`Détails ${titleToUse} ${cityInfo.name}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div dangerouslySetInnerHTML={{ __html: massiveSEOContent.slice(3).join('') }} />
              </div>
            </div>
            
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4 text-white">Autres zones à proximité</h3>
                  <div className="flex flex-col gap-3">
                    {belgianCities.filter(c => c.province === cityInfo.province && c.slug !== cityInfo.slug).slice(0, 6).map(c => (
                      <Link 
                        key={c.slug}
                        href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo ? subServiceInfo.slug + '/' : ''}${c.slug}`}
                        className="bg-white/5 border border-white/10 p-4 rounded-xl text-slate-300 hover:text-white hover:border-blue-500/50 transition-all flex items-center justify-between group"
                      >
                        <span className="font-bold text-xs tracking-tight uppercase">{c.name}</span>
                        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-600 p-8 rounded-3xl shadow-2xl shadow-blue-600/20">
                  <h3 className="text-2xl font-black text-white mb-4 italic">BESOIN D'UNE RÉPARATION ?</h3>
                  <p className="text-blue-100 mb-6">Contactez-nous pour une intervention immédiate sur {cityInfo.name}.</p>
                  <a href="tel:0496325733" className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition shadow-lg">
                    <PhoneCall className="w-5 h-5" /> 0496 32 57 33
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/5 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">Urgence {titleToUse} à {cityInfo.name}</h2>
            <p className="text-slate-400">Demandez votre devis gratuit en quelques secondes via le formulaire ci-dessous.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ city={cityInfo.name} />
    </>
  );
}
