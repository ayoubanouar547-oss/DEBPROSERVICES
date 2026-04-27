import { buildLongClusterText } from '@/lib/utils/seo-content-generator';
import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import { PhoneCall, ShieldCheck, CheckCircle, ChevronRight } from 'lucide-react';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';
import Link from 'next/link';
import { belgianCities } from '@/lib/data/cities';
import Image from 'next/image';

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

      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-transparent pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           
           {/* Breadcrumb */}
           <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
             <Link href="/" className="hover:text-blue-400">Accueil</Link>
             <ChevronRight className="w-4 h-4" />
             <Link href={`/${serviceInfo.slug}`} className="hover:text-blue-400">{serviceInfo.title}</Link>
             <ChevronRight className="w-4 h-4" />
             <span className="text-white font-bold">{subServiceInfo.title}</span>
           </div>

           <div className="max-w-4xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold border border-white/20 mb-6 uppercase tracking-widest text-blue-300">
                <serviceInfo.icon className="w-4 h-4" />
                Service Spécialisé
             </div>
             <h1 className="text-4xl md:text-5xl lg:text-5xl font-black leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                {subServiceInfo.title} en Belgique
             </h1>
             <p className="text-xl text-blue-100/80 mb-8 max-w-3xl leading-relaxed">
               {subServiceInfo.desc} Disponibilité immédiate 24/7 partout en Belgique.
             </p>
             <div className="flex flex-wrap gap-4">
                <a href="tel:0496325733" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/20">
                  <PhoneCall className="w-5 h-5" /> Intervention Urgente
                </a>
             </div>
           </div>
        </div>
      </section>

      {/* Programmatic Cluster Content for SEO - Simulating 1000 words logic */}
      <section className="py-20 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-10">
              <h2 className="text-5xl font-black text-white leading-tight uppercase tracking-tight">L'Expertise {subServiceInfo.title} à votre portée</h2>
              
              <div className="prose prose-xl prose-invert text-white">
                <p dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
                
                {/* Image 1 */}
                <div className="my-10 relative h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                   <Image 
                     src={serviceInfo.imageUrl} 
                     alt={`Intervention professionnelle de ${subServiceInfo.title} par notre équipe`} 
                     fill
                     className="object-cover" 
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                <p dangerouslySetInnerHTML={{ __html: paragraphs[1] }} />
                
                <h3 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Pourquoi une intervention rapide est cruciale ?</h3>
                <p dangerouslySetInnerHTML={{ __html: paragraphs[2] }} />

                {/* Image 2 */}
                <div className="my-10 relative h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                   <Image 
                     src={serviceInfo.imageUrl} 
                     alt={`Technicien expert pour le service de ${subServiceInfo.title} en Belgique`} 
                     fill
                     className="object-cover" 
                     referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                <h3 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Notre zone d'action rapide</h3>
                <p dangerouslySetInnerHTML={{ __html: paragraphs[3] }} />
                
                {/* Massive Content */}
                <div className="mt-16 border-t border-white/10 pt-16">
                   <div dangerouslySetInnerHTML={{ __html: massiveSEOContent.join('') }} />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                {/* Sidebar Cluster Links */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4 text-white">Autres services en {serviceInfo.title}</h3>
                  <ul className="space-y-3">
                    {serviceInfo.subServices.map(sub => (
                      <li key={sub.slug}>
                        <Link 
                          href={`/${serviceInfo.slug}/${sub.slug}`}
                          className={`flex items-center gap-2 text-sm transition-colors ${sub.slug === subServiceInfo.slug ? 'text-blue-400 font-bold' : 'text-slate-400 hover:text-white'}`}
                        >
                          <ChevronRight className="w-4 h-4" />
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image 3 - Emergency Box */}
                 <div className="bg-gradient-to-br from-red-600 to-red-900 p-6 rounded-2xl border border-red-500/30 text-white shadow-2xl">
                   <h4 className="font-black text-2xl mb-2">Urgence 24/7</h4>
                   <p className="text-red-100 text-sm mb-6">Nous sommes mobilisés pour toute urgence liée à : {subServiceInfo.title}.</p>
                   <a href="tel:0496325733" className="bg-white text-red-700 w-full px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition">
                     <PhoneCall className="w-5 h-5" /> Appeler le technicien
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
