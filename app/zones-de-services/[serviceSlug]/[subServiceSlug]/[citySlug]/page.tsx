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
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-12 overflow-x-auto whitespace-nowrap bg-white/5 w-fit px-6 py-2 rounded-full border border-white/5">
             <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
             <ChevronRight className="w-3 h-3 text-slate-700" />
             <Link href="/zones-de-services" className="hover:text-blue-400 transition-colors">Zones</Link>
             <ChevronRight className="w-3 h-3 text-slate-700" />
             <Link href={`/zones-de-services/${serviceInfo.slug}/${cityInfo.slug}`} className="hover:text-blue-400 transition-colors">{cityInfo.name}</Link>
             <ChevronRight className="w-3 h-3 text-slate-700" />
             <span className="text-white">{subServiceInfo.title}</span>
           </div>

           <div className="max-w-5xl">
             <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full text-[10px] font-black border border-blue-500/20 mb-10 uppercase tracking-[0.4em] text-blue-400">
                <MapPin className="w-4 h-4" /> Expert Local à {cityInfo.name}
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-10 uppercase font-oswald tracking-tighter">
                {subServiceInfo.title} <br/>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300`}>{cityInfo.name}</span>
             </h1>
             <p className="text-2xl text-slate-400 mb-12 max-w-4xl leading-relaxed font-medium">
               {subServiceInfo.desc} Intervention de prestige en moins de <strong>30 minutes</strong> à <strong>{cityInfo.name}</strong> par nos techniciens certifiés.
             </p>
             <div className="flex flex-wrap gap-6">
                <a href="tel:0496325733" className="group relative bg-red-600 hover:bg-red-700 text-white font-black px-12 py-6 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:scale-105 active:scale-95 border-b-4 border-red-800">
                  <PhoneCall className="w-6 h-6 animate-pulse" /> 
                  <span className="text-xl md:text-2xl uppercase tracking-tighter">Urgence {cityInfo.name}</span>
                </a>
             </div>
           </div>
        </div>
      </section>

      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-8 space-y-20">
              <div className="glass-card p-10 md:p-16 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h2 className="text-4xl md:text-5xl font-black mb-10 uppercase font-oswald tracking-tight">L'Excellence à {cityInfo.name}</h2>
                <div className="prose prose-2xl prose-invert text-slate-400 max-w-none space-y-8 font-medium leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: localText }} className="first-letter:text-7xl first-letter:font-black first-letter:text-blue-500 first-letter:mr-3 first-letter:float-left" />
                  <p>
                    Que vous résidiez dans le centre de {cityInfo.name} ou en périphérie, notre service de proximité est conçu pour offrir une tranquillité d'esprit totale. Chaque {subServiceInfo.title.toLowerCase()} est réalisé selon les normes belges les plus strictes.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                 <div className="p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.03] group hover:border-blue-500/30 transition-all shadow-2xl">
                    <ShieldCheck className={`w-12 h-12 mb-8 text-blue-400`} />
                    <h4 className="font-black font-oswald text-2xl mb-4 uppercase tracking-wider">Techniciens Agréés</h4>
                    <p className="text-slate-500 text-lg leading-relaxed">Corps de métier certifiés et assurés pour toute intervention à {cityInfo.name}.</p>
                 </div>
                 <div className="p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.03] group hover:border-blue-500/30 transition-all shadow-2xl">
                    <PhoneCall className={`w-12 h-12 mb-8 text-blue-400`} />
                    <h4 className="font-black font-oswald text-2xl mb-4 uppercase tracking-wider">Disponibilité SOS</h4>
                    <p className="text-slate-500 text-lg leading-relaxed">Cellule de crise opérationnelle 24h/24 pour vos urgences à {cityInfo.name}.</p>
                 </div>
              </div>

              <div className="mt-20 prose prose-xl prose-invert text-slate-400 max-w-none glass-card p-10 md:p-16 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h3 className="text-3xl font-black text-white mb-12 uppercase font-oswald tracking-tight border-b border-white/10 pb-6">Guide Complet : {subServiceInfo.title} à {cityInfo.name}</h3>
                <div className="space-y-6" dangerouslySetInnerHTML={{ __html: massiveSEOContent.join('') }} />
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-32 space-y-10">
                 <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-[2.5rem] text-center shadow-[0_30px_60px_rgba(37,99,235,0.2)]">
                    <h3 className="font-black text-2xl mb-4 text-white uppercase font-oswald tracking-tight">Devis Gratuit à {cityInfo.name}</h3>
                    <p className="text-blue-100 text-sm mb-8 font-medium">Chiffrage immédiat pour votre projet de {subServiceInfo.title.toLowerCase()}.</p>
                    <Link href="#contact" className="w-full inline-block bg-[#000814] hover:bg-black text-white font-black px-8 py-4 rounded-2xl transition-all shadow-2xl uppercase tracking-widest text-xs">
                      Simuler mon devis
                    </Link>
                 </div>
                 
                 <div className="bg-white/[0.03] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
                    <h3 className="font-black text-xl mb-8 text-white uppercase font-oswald tracking-widest border-b border-white/5 pb-4">Villes Proches</h3>
                    <div className="flex flex-wrap gap-3">
                       {belgianCities.filter(c => c.province === cityInfo.province && c.slug !== cityInfo.slug).slice(0, 10).map(c => (
                         <Link key={c.slug} href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo.slug}/${c.slug}`} className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl hover:bg-blue-600/20 hover:text-blue-400 text-slate-500 transition-all border border-white/5">
                           {c.name}
                         </Link>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact" className="py-32 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
            <h2 className="text-5xl font-black text-white uppercase font-oswald tracking-tight leading-none">Demander une <br/><span className="text-blue-500">intervention</span></h2>
            <p className="text-xl text-slate-500 font-medium font-inter leading-relaxed">Besoin d'un technicien à {cityInfo.name} ? Remplissez le formulaire ou appelez-nous pour une assistance immédiate.</p>
          </div>
          <div className="max-w-4xl mx-auto glass-card p-1 md:p-10 rounded-[3rem] border border-white/5">
            <ContactForm />
          </div>
        </div>
      </div>

      <FAQ city={cityInfo.name} />
    </div>
  );
}
