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
  
  services.forEach((service) => {
    service.subServices.forEach((sub) => {
      belgianCities.forEach((city) => {
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
    <>
      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none">
          <div className={`absolute inset-0 ${serviceInfo.color.bg} opacity-20 blur-3xl`}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
             <Link href="/" className="hover:text-blue-400">Accueil</Link>
             <ChevronRight className="w-4 h-4" />
             <Link href="/zones-de-services" className="hover:text-blue-400">Zones</Link>
             <ChevronRight className="w-4 h-4" />
             <Link href={`/zones-de-services/${serviceInfo.slug}/${cityInfo.slug}`} className="hover:text-blue-400">{serviceInfo.title} {cityInfo.name}</Link>
             <ChevronRight className="w-4 h-4" />
             <span className="text-white font-bold">{subServiceInfo.title}</span>
           </div>

           <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-widest text-blue-300">
                <MapPin className="w-4 h-4" /> {cityInfo.name}
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                {subServiceInfo.title} <br/>
                <span className={serviceInfo.color.text}>{cityInfo.name}</span>
             </h1>
             <p className="text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
               {subServiceInfo.desc} Intervention express 24h/24 et 7j/7 à <strong>{cityInfo.name}</strong> par nos techniciens agréés localement.
             </p>
             <div className="flex flex-wrap gap-4">
                <a href="tel:0496325733" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/20">
                  <PhoneCall className="w-5 h-5" /> SOS {cityInfo.name} : 0496 32 57 33
                </a>
             </div>
           </div>
        </div>
      </section>

      <section className="py-24 relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-6">Pourquoi nous choisir pour votre {subServiceInfo.title.toLowerCase()} à {cityInfo.name} ?</h2>
                <div className="prose prose-lg prose-invert text-slate-300">
                  <p dangerouslySetInnerHTML={{ __html: localText }} />
                  <p>
                    Que vous soyez un particulier ou un professionnel à {cityInfo.name}, nous comprenons l'importance d'une intervention rapide et de qualité. C'est pourquoi nous garantissons un passage dans l'heure pour les urgences absolues.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <ShieldCheck className={`w-8 h-8 mb-4 ${serviceInfo.color.text}`} />
                    <h4 className="font-bold text-xl mb-2">Techniciens Certifiés</h4>
                    <p className="text-slate-400 text-sm">Tous nos intervenants à {cityInfo.name} sont agréés et formés aux dernières technologies.</p>
                 </div>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <PhoneCall className={`w-8 h-8 mb-4 ${serviceInfo.color.text}`} />
                    <h4 className="font-bold text-xl mb-2">Dispo 24/7</h4>
                    <p className="text-slate-400 text-sm">Un problème en plein milieu de la nuit ou le dimanche à {cityInfo.name} ? Nous répondons présent.</p>
                 </div>
              </div>

              <div className="mt-16 prose prose-lg prose-invert text-slate-400">
                <h3 className="text-2xl font-black text-white mb-8 border-t border-white/10 pt-8">Plus d'informations sur {subServiceInfo.title} à {cityInfo.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: massiveSEOContent.join('') }} />
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-32 space-y-8">
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-center">
                    <h3 className="font-bold text-xl mb-4 text-white">Besoin d'un devis ?</h3>
                    <p className="text-slate-400 text-sm mb-6">Pour un projet de {subServiceInfo.title.toLowerCase()} à {cityInfo.name}, demandez votre chiffrage gratuit.</p>
                    <Link href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition">
                      Obtenir mon devis
                    </Link>
                 </div>
                 
                 <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/10">
                    <h3 className="font-bold text-lg mb-4 text-white">Zones desservies près de {cityInfo.name}</h3>
                    <div className="flex flex-wrap gap-2">
                       {belgianCities.filter(c => c.province === cityInfo.province && c.slug !== cityInfo.slug).slice(0, 8).map(c => (
                         <Link key={c.slug} href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo.slug}/${c.slug}`} className="text-xs bg-white/5 px-2 py-1 rounded hover:bg-white/10 text-slate-400">
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

      <section id="contact" className="py-24 border-t border-white/10 relative z-10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-4">Contactez-nous pour {cityInfo.name}</h2>
            <p className="text-slate-400">Dépannage ou installation de {subServiceInfo.title.toLowerCase()} à {cityInfo.name}.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ city={cityInfo.name} />
    </>
  );
}
