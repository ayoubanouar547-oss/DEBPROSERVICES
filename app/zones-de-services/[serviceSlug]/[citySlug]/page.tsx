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
    <div className="bg-[#000814] min-h-screen text-white">
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-white/10">
        <div className={`absolute inset-0 opacity-10 blur-[150px] rounded-full pointer-events-none ${serviceInfo.color.bg}`}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-12 overflow-x-auto whitespace-nowrap bg-white/5 w-fit px-6 py-2 rounded-full border border-white/5">
             <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
             <ChevronRight className="w-3 h-3 text-slate-700" />
             <Link href="/zones-de-services" className="hover:text-blue-400 transition-colors uppercase font-bold text-xs tracking-widest text-slate-500">Zones</Link>
             <ChevronRight className="w-3 h-3 text-slate-700" />
             <span className="text-blue-400 font-black uppercase text-[10px] tracking-widest">{serviceInfo.title} à {cityInfo.name}</span>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="max-w-2xl">
               <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-500/10 backdrop-blur-xl rounded-full text-[10px] font-black border border-blue-500/20 mb-10 uppercase tracking-[0.4em] text-blue-400">
                  <MapPin className="w-4 h-4" />
                  Service Express à {cityInfo.name}
               </div>
               <h1 className="text-3xl md:text-4xl lg:text-4xl font-black leading-snug mb-10 uppercase font-oswald tracking-normal">
                  {serviceInfo.title} <br/> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">
                    {cityInfo.name}
                  </span>
               </h1>
               <p className="text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
                 Vous habitez à <strong>{cityInfo.name}</strong> ? Nos techniciens experts en {serviceInfo.title.toLowerCase()} interviennent chez vous en moins de <strong>30 minutes</strong>.
               </p>
               <div className="flex flex-wrap gap-6">
                  <a href="tel:0496325733" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-xl px-12 py-6 rounded-2xl flex items-center justify-center gap-4 transition-all border-b-4 border-red-900 active:border-b-0 active:translate-y-2 shadow-2xl shadow-red-600/30">
                    <PhoneCall className="w-7 h-7 animate-pulse" /> SOS {cityInfo.name}
                  </a>
               </div>
             </div>
             
             <div className="relative hidden lg:block">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(30,58,138,0.3)] relative group">
                  <img src={`https://picsum.photos/seed/${cityInfo.slug}${serviceInfo.slug}/1200/800`} alt={`${serviceInfo.title} à ${cityInfo.name}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 glassy p-8 rounded-3xl flex items-center justify-between border border-white/10">
                    <div>
                      <div className="text-white font-black text-2xl uppercase tracking-tight mb-2">Intervention Rapide</div>
                      <div className="text-blue-400 text-sm font-bold flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                        Technicien disponible à {cityInfo.name}
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/40">
                      <CheckCircle className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
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
                <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase font-oswald tracking-tight">Expertise Locale en {serviceInfo.title}</h2>
                <div className="prose prose-2xl prose-invert text-slate-400 max-w-none space-y-8 font-medium leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: localIntro }} className="first-letter:text-7xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-4 first-letter:float-left" />
                  <p dangerouslySetInnerHTML={{ __html: localSpeed }} />
                </div>
              </div>

              <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
                 <img src={`https://picsum.photos/seed/${cityInfo.name}ville/1200/600`} alt={`Camion d'intervention à ${cityInfo.name}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent"></div>
              </div>

              <div>
                <h3 className="text-4xl font-black mb-12 uppercase font-oswald tracking-tight flex items-center gap-4">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  Spécialités à {cityInfo.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  {serviceInfo.subServices.map(sub => (
                    <Link key={sub.slug} href={`/zones-de-services/${serviceInfo.slug}/${sub.slug}/${cityInfo.slug}`} className="group glassy-card border border-white/5 bg-white/[0.01] rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 overflow-hidden flex flex-col hover:border-blue-500/30 shadow-2xl">
                      <div className="relative h-56 w-full overflow-hidden flex-shrink-0 z-10">
                        <img 
                          src={`https://picsum.photos/seed/${sub.slug}/800/600`} 
                          alt={`Intervention ${sub.title} ${cityInfo.name}`} 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/20 to-transparent"></div>
                      </div>
                      <div className="p-10 flex flex-col flex-grow relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                           <serviceInfo.icon className={`w-8 h-8 ${serviceInfo.color.text}`} />
                           <h4 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors uppercase font-oswald tracking-tight leading-none">{sub.title}</h4>
                        </div>
                        <p className="text-sm text-slate-500 mb-8 flex-grow font-medium leading-relaxed">{sub.desc}</p>
                        <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 group-hover:text-white transition-colors">
                          En savoir plus <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-3 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-900/10 border border-blue-500/20 rounded-[3rem] p-12 md:p-16 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -z-10 animate-pulse"></div>
                <h3 className="text-4xl font-black mb-10 uppercase font-oswald tracking-tight">La Garantie DEB PRO SERVICES</h3>
                <ul className="space-y-8">
                  <li className="flex items-start gap-6 group/item">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover/item:bg-blue-600 transition-colors shadow-inner">
                      <ShieldCheck className="text-blue-400 group-hover/item:text-white w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Devis 100% Gratuit</div>
                        <p className="text-slate-400 leading-relaxed font-medium">Nous estimons votre problème avant toute intervention à {cityInfo.name}.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-6 group/item">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover/item:bg-blue-600 transition-colors shadow-inner">
                      <ShieldCheck className="text-blue-400 group-hover/item:text-white w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Garantie 12 Mois</div>
                        <p className="text-slate-400 leading-relaxed font-medium">Pièces et main-d'œuvre certifiées pour votre sérénité à {cityInfo.name}.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Massive Programmatic SEO Text Block */}
              <div className="mt-24 prose prose-xl prose-invert text-slate-500 max-w-none glass-card p-12 md:p-20 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                <h2 className="text-4xl font-black text-white mb-12 border-b border-white/10 pb-8 uppercase font-oswald tracking-tight">Expertise Approfondie pour {cityInfo.name}</h2>
                <div className="space-y-8" dangerouslySetInnerHTML={{ __html: massiveSEOContent.join('') }} />
              </div>

            </div>
            
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-12">
                <div className="bg-white/5 backdrop-blur-3xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl">
                  <h3 className="font-black text-2xl mb-8 text-white uppercase font-oswald tracking-widest border-b border-white/10 pb-4">Villes Proches</h3>
                  <div className="flex flex-wrap gap-3">
                    {belgianCities.filter(c => c.province === cityInfo.province && c.slug !== cityInfo.slug).slice(0, 12).map(c => (
                      <Link 
                        key={c.slug}
                        href={`/zones-de-services/${serviceInfo.slug}/${c.slug}`}
                        className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-all"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group">
                   <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/800')] opacity-40 mix-blend-luminosity bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
                   <div className="relative z-10 flex flex-col items-center">
                     <div className="relative">
                        <MapPin className="text-red-600 w-20 h-20 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] animate-bounce" />
                        <div className="absolute inset-x-0 -bottom-2 h-4 w-12 bg-black/40 blur-md rounded-full mx-auto"></div>
                     </div>
                     <div className="mt-8 font-black text-white bg-[#000814]/80 px-8 py-3 rounded-2xl backdrop-blur-xl border border-white/10 uppercase tracking-widest text-xs">
                        Zone {cityInfo.name}
                     </div>
                   </div>
                </div>

                <div className="bg-gradient-to-br from-red-600 to-red-900 p-10 rounded-[2.5rem] border border-red-500/30 text-white shadow-[0_30px_60px_rgba(220,38,38,0.25)] relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] -z-10"></div>
                   <h4 className="font-black text-4xl mb-6 uppercase font-oswald leading-none tracking-tight">SOS Direct <br/> {cityInfo.name}</h4>
                   <p className="text-red-100 text-sm mb-10 font-bold uppercase tracking-widest opacity-80">Technicien en route possible sous 30 mins</p>
                   <a href="tel:0496325733" className="w-full bg-white text-red-700 px-8 py-5 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-black/20">
                     <PhoneCall className="w-7 h-7 animate-pulse" /> Appeler
                   </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="py-32 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase font-oswald tracking-normal leading-snug overflow-visible">Besoin d'un expert à <br/><span className="text-blue-500">{cityInfo.name}</span> ?</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">Dites adieu à vos soucis de {serviceInfo.title.toLowerCase()}. Nos experts locaux sont disponibles 24/7 pour un dépannage express.</p>
          </div>
          <div className="max-w-4xl mx-auto glassy-card p-1 md:p-12 rounded-[3.5rem] border border-white/5 shadow-2xl relative">
             <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center border-4 border-[#000814] shadow-2xl z-20">
                <span className="font-black text-2xl uppercase tracking-tighter">DEB</span>
             </div>
             <ContactForm />
          </div>
        </div>
      </div>

      <FAQ city={cityInfo.name} />
    </div>
  );
}
