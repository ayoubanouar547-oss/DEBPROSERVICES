import { buildLongClusterText } from '@/lib/utils/seo-content-generator';
import { services } from '@/lib/data/services';
import { belgianCities } from '@/lib/data/cities';
import { notFound } from 'next/navigation';
import { PhoneCall, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';

export async function generateStaticParams() {
  const params: { serviceSlug: string, subServiceSlug: string, citySlug: string }[] = [];
  
  // Limiting to top cities to avoid build issues while maintaining key SEO reach
  const topCities = belgianCities.slice(0, 15);

  services.forEach((service) => {
    service.subServices.forEach((sub) => {
      topCities.forEach((city) => {
        params.push({
          serviceSlug: service.slug,
          subServiceSlug: sub.slug,
          citySlug: city.slug,
        });
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string, subServiceSlug: string, citySlug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.serviceSlug);
  const subService = service?.subServices.find(s => s.slug === resolvedParams.subServiceSlug);
  const cityInfo = belgianCities.find(c => c.slug === resolvedParams.citySlug);
  
  if (!service || !subService || !cityInfo) return {};

  return {
    title: `${subService.title} ${cityInfo.name} | Urgence 24/7 | DEB PRO SERVICES`,
    description: `Expert en ${subService.title.toLowerCase()} à ${cityInfo.name}. Intervention rapide pour votre ${service.title.toLowerCase()} à ${cityInfo.name}. Devis gratuit, technicien agréé.`,
  };
}

export default async function ZoneSubServiceCityPage({ params }: { params: Promise<{ serviceSlug: string, subServiceSlug: string, citySlug: string }> }) {
  const resolvedParams = await params;
  const serviceInfo = services.find(s => s.slug === resolvedParams.serviceSlug);
  const subServiceInfo = serviceInfo?.subServices.find(s => s.slug === resolvedParams.subServiceSlug);
  const cityInfo = belgianCities.find(c => c.slug === resolvedParams.citySlug);

  if (!serviceInfo || !subServiceInfo || !cityInfo) {
    notFound();
  }

  const localText = `Besoin d'un spécialiste pour <strong>${subServiceInfo.title.toLowerCase()}</strong> à <strong>${cityInfo.name}</strong> ? DEB PRO SERVICES intervient rapidement dans toute la commune de ${cityInfo.name} et les environs de la province de ${cityInfo.province}. Nos experts en ${serviceInfo.title.toLowerCase()} sont équipés pour gérer votre demande de ${subServiceInfo.title.toLowerCase()} avec professionnalisme et efficacité.`;

  const massiveSEOContent = buildLongClusterText(`${subServiceInfo.title.toLowerCase()} ${cityInfo.name}`, cityInfo.name);

  return (
     <div className="bg-[#000814] min-h-screen text-white">
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-white/10">
        <div className={`absolute inset-0 opacity-10 blur-[150px] rounded-full pointer-events-none ${serviceInfo.color.bg}`}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-12 overflow-x-auto whitespace-nowrap bg-white/5 w-fit px-6 py-2 rounded-full border border-white/10">
             <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
             <ChevronRight className="w-3 h-3 text-slate-700" />
             <Link href="/zones-de-services" className="hover:text-blue-400 transition-colors">Zones</Link>
             <ChevronRight className="w-3 h-3 text-slate-700" />
             <Link href={`/zones-de-services/${serviceInfo.slug}/${cityInfo.slug}`} className="hover:text-blue-400 transition-colors uppercase font-bold text-xs tracking-widest">{cityInfo.name}</Link>
             <ChevronRight className="w-3 h-3 text-slate-700" />
             <span className="text-blue-400 font-black uppercase text-[10px] tracking-widest">{subServiceInfo.title}</span>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="max-w-3xl">
               <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full text-[10px] font-black border border-blue-500/20 mb-10 uppercase tracking-[0.4em] text-blue-400">
                  <MapPin className="w-4 h-4" /> Expert Proximité à {cityInfo.name}
               </div>
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-10 uppercase font-oswald tracking-tighter">
                  {subServiceInfo.title} <br/>
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic`}>{cityInfo.name}</span>
               </h1>
               <p className="text-2xl text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
                 {subServiceInfo.desc} Intervention de prestige en moins de <strong>30 minutes</strong> à <strong>{cityInfo.name}</strong> par nos techniciens certifiés.
               </p>
               <div className="flex flex-wrap gap-6">
                  <a href="tel:0496325733" className="group relative bg-red-600 hover:bg-red-700 text-white font-black px-12 py-6 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95 border-b-4 border-red-800">
                    <PhoneCall className="w-6 h-6 animate-pulse" /> 
                    <span className="text-xl md:text-2xl uppercase tracking-tighter">Urgence {cityInfo.name}</span>
                  </a>
               </div>
             </div>
             
             <div className="relative hidden lg:block">
                <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(30,58,138,0.4)] relative group">
                  <img src={`https://picsum.photos/seed/${subServiceInfo.slug}${cityInfo.slug}/1000/1000`} alt={`${subServiceInfo.title} à ${cityInfo.name}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent"></div>
                </div>
             </div>
           </div>
        </div>
      </section>

      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-8 space-y-20">
              <div className="glass-card p-12 md:p-20 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase font-oswald tracking-tight">L'Excellence à {cityInfo.name}</h2>
                <div className="prose prose-2xl prose-invert text-slate-400 max-w-none space-y-10 font-medium leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: localText }} className="first-letter:text-7xl first-letter:font-black first-letter:text-blue-500 first-letter:mr-4 first-letter:float-left" />
                  <p>
                    Que vous résidiez dans le centre historique de {cityInfo.name} ou en périphérie, notre service de proximité est conçu pour offrir une tranquillité d'esprit totale. Chaque intervention de {subServiceInfo.title.toLowerCase()} est réalisée selon les normes belges les plus strictes de sécurité et de durabilité.
                  </p>
                </div>
              </div>

              <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                 <img src={`https://picsum.photos/seed/${cityInfo.name}pro/1200/600`} alt={`Technicien en action à ${cityInfo.name}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent"></div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                 <div className="p-12 border border-white/5 rounded-[2.5rem] bg-white/[0.03] group hover:border-blue-500/30 transition-all shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-3xl -z-10 group-hover:bg-blue-500/10 transition-all"></div>
                    <ShieldCheck className={`w-14 h-14 mb-8 text-blue-400`} />
                    <h4 className="font-black font-oswald text-3xl mb-4 uppercase tracking-wider">Techniciens Agréés</h4>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">Corps de métier certifiés, assurés et experts de la région de {cityInfo.name}.</p>
                 </div>
                 <div className="p-12 border border-white/5 rounded-[2.5rem] bg-white/[0.03] group hover:border-blue-500/30 transition-all shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 blur-3xl -z-10 group-hover:bg-red-500/10 transition-all"></div>
                    <PhoneCall className={`w-14 h-14 mb-8 text-blue-400`} />
                    <h4 className="font-black font-oswald text-3xl mb-4 uppercase tracking-wider">Disponibilité SOS</h4>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">Cellule de crise opérationnelle 24h/24 pour vos urgences vitale à {cityInfo.name}.</p>
                 </div>
              </div>

              <div className="mt-20 prose prose-xl prose-invert text-slate-500 max-w-none glass-card p-12 md:p-20 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-4xl font-black text-white mb-12 uppercase font-oswald tracking-tight border-b border-white/10 pb-8">Guide Complet : {subServiceInfo.title} à {cityInfo.name}</h3>
                <div className="space-y-8" dangerouslySetInnerHTML={{ __html: massiveSEOContent.join('') }} />
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-32 space-y-12">
                 <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-[2.5rem] text-center shadow-[0_40px_80px_rgba(37,99,235,0.3)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] -z-10"></div>
                    <h3 className="font-black text-3xl mb-6 text-white uppercase font-oswald tracking-tight">Devis Gratuit à {cityInfo.name}</h3>
                    <p className="text-blue-100 text-sm mb-10 font-bold uppercase tracking-widest opacity-80">Chiffrage immédiat sans engagement</p>
                    <Link href="#contact" className="w-full inline-block bg-[#000814] hover:bg-black text-white font-black px-10 py-5 rounded-2xl transition-all shadow-2xl uppercase tracking-widest text-xs">
                      Simuler mon devis
                    </Link>
                 </div>
                 
                 <div className="bg-white/[0.03] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
                    <h3 className="font-black text-xl mb-8 text-white uppercase font-oswald tracking-widest border-b border-white/10 pb-4">Villes Proches</h3>
                    <div className="flex flex-wrap gap-3">
                       {belgianCities.filter(c => c.province === cityInfo.province && c.slug !== cityInfo.slug).slice(0, 12).map(c => (
                         <Link key={c.slug} href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo.slug}/${c.slug}`} className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl hover:bg-blue-600/20 hover:text-blue-400 text-slate-500 transition-all border border-white/5">
                           {c.name}
                         </Link>
                       ))}
                    </div>
                 </div>

                 <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/800')] opacity-40 mix-blend-luminosity bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <MapPin className="text-red-600 w-20 h-20 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] animate-bounce" />
                      <div className="mt-8 font-black text-white bg-[#000814]/80 px-8 py-3 rounded-2xl backdrop-blur-xl border border-white/10 uppercase tracking-widest text-xs">
                         Zone {cityInfo.name}
                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact" className="py-32 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase font-oswald tracking-tight leading-none leading-none leading-none leading-none overflow-hidden">Besoin d'un <br/><span className="text-blue-500">spécialiste ?</span></h2>
            <p className="text-2xl text-slate-500 font-medium leading-relaxed font-inter">Contactez nos équipes à {cityInfo.name} pour une intervention urgente ou un devis gratuit.</p>
          </div>
          <div className="max-w-4xl mx-auto glassy-card p-1 md:p-12 rounded-[3.5rem] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
            <ContactForm />
          </div>
        </div>
      </div>

      <FAQ city={cityInfo.name} />
    </div>
  );
}
