import { buildLongClusterText } from '@/lib/utils/seo-content-generator';
import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import { PhoneCall, ShieldCheck, CheckCircle, ChevronRight } from 'lucide-react';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';
import Link from 'next/link';
import { belgianCities } from '@/lib/data/cities';

export function generateStaticParams() {
  const params: { serviceSlug: string, subServiceSlug: string }[] = [];
  services.forEach((service) => {
    service.subServices.forEach((sub) => {
      params.push({
        serviceSlug: service.slug,
        subServiceSlug: sub.slug
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string, subServiceSlug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.serviceSlug);
  const subService = service?.subServices.find(sub => sub.slug === resolvedParams.subServiceSlug);
  
  if (!service || !subService) return {};
  
  return {
    title: `${subService.title} Belgique | Experts en ${service.title} | ☎ 24H/24`,
    description: `Besoin d'un expert pour : ${subService.title} ? ${subService.desc} DEB PRO SERVICES intervient urgence 24h/24 et 7j/7 partout en Belgique.`,
  };
}

export default async function SubServicePage({ params }: { params: Promise<{ serviceSlug: string, subServiceSlug: string }> }) {
  const resolvedParams = await params;
  const serviceInfo = services.find(s => s.slug === resolvedParams.serviceSlug);
  const subServiceInfo = serviceInfo?.subServices.find(sub => sub.slug === resolvedParams.subServiceSlug);
  
  if (!serviceInfo || !subServiceInfo) {
    notFound();
  }

  // Generate a long programmatic text for SEO Clusters
  const paragraphs = [
    `Lorsqu'il s'agit de <strong>${subServiceInfo.title.toLowerCase()}</strong>, faire appel à des professionnels qualifiés est indispensable. Chez DEB PRO SERVICES, nous avons développé une expertise unique en Belgique concernant la catégorie ${serviceInfo.title.toLowerCase()}. Nos équipes interviennent de jour comme de nuit, dimanches et jours fériés inclus pour assurer un dépannage rapide et efficace.`,
    
    `Le service de <em>${subServiceInfo.title.toLowerCase()}</em> demande un savoir-faire spécifique et un matériel adapté. Nos techniciens certifiés se déplacent chez vous avec des véhicules utilitaires complètement équipés, permettant de résoudre 95% des pannes dès la première visite. ${subServiceInfo.desc}`,
    
    `N'attendez pas que la situation se dégrade. Les problèmes liés à la ${serviceInfo.title.toLowerCase()} peuvent engendrer des dégâts collatéraux importants (inondations, courts-circuits, risques pour la santé). En choisissant DEB PRO SERVICES pour votre besoin en ${subServiceInfo.title.toLowerCase()}, vous bénéficiez d'une garantie d'un an sur nos interventions, d'une transparence tatale sur nos prix avec devis gratuit avant travaux, et d'un professionnalisme reconnu par plus de 5000 clients satisfaits.`,
    
    `Nous couvrons l'ensemble du territoire belge (Bruxelles, Wallonie, et la périphérie flamande). Dès réception de votre appel, un dispatcheur analyse votre urgence en <strong>${subServiceInfo.title.toLowerCase()}</strong> et envoie le technicien le plus proche de votre code postal. L'intervention est tracée, sécurisée, et respecte rigoureusement les normes belges en vigueur.`
  ];

  const massiveSEOContent = buildLongClusterText(subServiceInfo.title.toLowerCase(), 'Belgique');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": subServiceInfo.title,
            "provider": {
              "@type": "LocalBusiness",
              "name": "DEB PRO SERVICES"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Belgium"
            },
            "description": subServiceInfo.desc
          })
        }}
      />

      <section className="relative pt-40 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 bg-[#000814] pointer-events-none">
          <div className="absolute inset-0 bg-blue-900/20 blur-[150px] rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           {/* Breadcrumb */}
           <div className="flex items-center gap-2 text-sm text-slate-500 mb-12 overflow-x-auto whitespace-nowrap bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
             <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
             <ChevronRight className="w-4 h-4" />
             <Link href={`/${serviceInfo.slug}`} className="hover:text-white transition-colors uppercase font-bold text-xs tracking-widest">{serviceInfo.title}</Link>
             <ChevronRight className="w-4 h-4" />
             <span className="text-blue-400 font-black uppercase text-xs tracking-widest">{subServiceInfo.title}</span>
           </div>

           <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 backdrop-blur-md rounded-full text-xs font-black border border-blue-500/20 mb-8 uppercase tracking-[0.3em] text-blue-400">
                <serviceInfo.icon className="w-4 h-4" />
                Dépannage & Installation
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-500 uppercase font-oswald tracking-tighter">
                {subServiceInfo.title}
             </h1>
             <p className="text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed font-medium">
               {subServiceInfo.desc} Intervention <span className="text-white">immédiate 24/7</span> partout en Belgique.
             </p>
             <div className="flex flex-wrap gap-6">
                <a href="tel:0496325733" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black text-xl px-12 py-5 rounded-2xl flex items-center justify-center gap-4 transition-all border-b-4 border-red-900 active:border-b-0 active:translate-y-1 shadow-2xl shadow-red-600/40">
                  <PhoneCall className="w-6 h-6 animate-pulse" /> Appeler le service SOS
                </a>
                <Link href="/devis" className="w-full sm:w-auto glass border border-white/20 text-white font-black text-xl px-12 py-5 rounded-2xl flex items-center justify-center gap-4 hover:bg-white/10 transition-all">
                  Devis Gratuit
                </Link>
             </div>
           </div>
        </div>
      </section>

      {/* Programmatic Cluster Content for SEO */}
      <section className="py-32 bg-[#000814] text-white relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-20">
            
            <div className="lg:col-span-8 space-y-16">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-oswald tracking-tight">Expertise Professionnelle</h2>
                <div className="h-2 w-24 bg-blue-600 rounded-full"></div>
              </div>
              
              <div className="prose prose-2xl prose-invert text-slate-400 font-medium">
                <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
                
                {/* Image 1 */}
                <div className="my-16 relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                   <img src={`https://picsum.photos/seed/${subServiceInfo.slug}1/1000/600`} alt={`${subServiceInfo.title} intervention`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent"></div>
                </div>

                <p dangerouslySetInnerHTML={{ __html: paragraphs[1] }} />
                
                <h3 className="text-3xl font-black text-white mt-16 mb-8 uppercase font-oswald">Urgence {subServiceInfo.title} : Une priorité absolue</h3>
                <p dangerouslySetInnerHTML={{ __html: paragraphs[2] }} />

                {/* Image 2 */}
                <div className="my-16 relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
                   <img src={`https://picsum.photos/seed/${subServiceInfo.slug}2/1000/600`} alt={`Technicien pour ${subServiceInfo.title}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent"></div>
                </div>

                <h3 className="text-3xl font-black text-white mt-16 mb-8 uppercase font-oswald">Zone de couverture étendue</h3>
                <p dangerouslySetInnerHTML={{ __html: paragraphs[3] }} />
                
                {/* Massive Content */}
                <div className="mt-24 border-t border-white/10 pt-24 space-y-12">
                   <div className="seo-dynamic-content text-lg text-slate-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: massiveSEOContent.join('') }} />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-10">
                {/* Sidebar Cluster Links */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] shadow-2xl">
                  <h3 className="font-black text-2xl mb-8 text-white uppercase font-oswald tracking-widest border-b border-white/10 pb-4">Services liés</h3>
                  <ul className="space-y-4">
                    {serviceInfo.subServices.map(sub => (
                      <li key={sub.slug}>
                        <Link 
                          href={`/${serviceInfo.slug}/${sub.slug}`}
                          className={`flex items-center justify-between p-4 rounded-xl border transition-all ${sub.slug === subServiceInfo.slug ? 'bg-blue-600/20 border-blue-500/50 text-white shadow-lg' : 'bg-white/5 border-transparent text-slate-400 hover:text-white hover:bg-white/10'}`}
                        >
                          <span className="font-bold text-sm uppercase tracking-wider">{sub.title}</span>
                          <ChevronRight className={`w-5 h-5 transition-transform ${sub.slug === subServiceInfo.slug ? 'translate-x-1' : ''}`} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emergency Box */}
                 <div className="bg-gradient-to-br from-red-600 to-red-900 p-10 rounded-[2rem] border border-red-500/30 text-white shadow-2xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
                   <h4 className="font-black text-3xl mb-4 relative z-10 uppercase font-oswald leading-none">Intervention <br/> SOS Directe</h4>
                   <p className="text-red-100 text-sm mb-8 relative z-10 font-bold opacity-80 uppercase tracking-widest tracking-tight">Technicien disponible 24/7</p>
                   <a href="tel:0496325733" className="relative z-10 bg-white text-red-700 w-full px-6 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl">
                     <PhoneCall className="w-6 h-6 animate-pulse" /> Appeler
                   </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white/5 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-white mb-4">Intervention {subServiceInfo.title} par ville</h2>
            <p className="text-slate-400">Trouvez votre expert local pour un dépannage rapide.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {belgianCities.slice(0, 20).map(city => (
              <Link 
                key={city.slug} 
                href={`/zones-de-services/${serviceInfo.slug}/${subServiceInfo.slug}/${city.slug}`}
                className="px-3 py-1 bg-slate-800 border border-white/10 rounded-full text-xs text-slate-300 hover:text-white transition"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">Demande d'intervention pour {subServiceInfo.title}</h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <FAQ />
    </>
  );
}
