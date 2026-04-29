import { buildLongClusterText } from '@/lib/utils/seo-content-generator';
import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import { PhoneCall, ChevronRight, CheckCircle } from 'lucide-react';
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
    title: `${subService.title} Belgique | DEB PRO SERVICES ☎ 24H/24`,
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
            "@graph": [
              {
                "@type": "Service",
                "@id": `https://debservices.canalrose.be/${serviceInfo.slug}/${subServiceInfo.slug}#service`,
                "name": `${subServiceInfo.title}`,
                "serviceType": subServiceInfo.title,
                "description": subServiceInfo.desc,
                "provider": {
                  "@id": "https://debservices.canalrose.be/#organization"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Belgium"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://debservices.canalrose.be/#organization",
                "name": "DEB PRO SERVICES",
                "image": "https://debservices.canalrose.be/logo.png",
                "url": "https://debservices.canalrose.be",
                "telephone": "+32496325733",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Brussels",
                  "addressRegion": "Brussels",
                  "postalCode": "1000",
                  "streetAddress": "Centre",
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
                }
              }
            ]
          })
        }}
      />

      <section className="relative pt-32 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={(subServiceInfo as any).imageUrl || serviceInfo.imageUrl}
            alt={`DEB PRO SERVICES - ${subServiceInfo.title}`}
            fill
            priority
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#000814]/85 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-[#000814]/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
           {/* Breadcrumb */}
           <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
             <Link href="/" className="hover:text-blue-400 font-medium">Accueil</Link>
             <ChevronRight className="w-4 h-4" />
             <Link href={`/${serviceInfo.slug}`} className="hover:text-blue-400 font-medium">{serviceInfo.title}</Link>
             <ChevronRight className="w-4 h-4" />
             <span className="text-white font-bold">{subServiceInfo.title}</span>
           </div>

           <div className="max-w-4xl mx-auto lg:mx-0">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 rounded-full text-xs font-black uppercase tracking-[0.2em] text-white mb-8 shadow-xl shadow-blue-600/20">
                <serviceInfo.icon className="w-4 h-4" />
                Intervention Spécialisée 24/7
             </div>
             <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-blue-200 uppercase tracking-tighter">
                {subServiceInfo.title}
             </h1>
             <p className="text-xl md:text-2xl text-blue-100/70 mb-10 max-w-3xl leading-relaxed mx-auto lg:mx-0">
               {subServiceInfo.desc} Nos techniciens agréés interviennent en urgence 24h/24 et 7j/7 partout en Belgique avec le matériel adéquat. Solutions durables et travaux garantis.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a href="tel:0496325733" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-black px-10 py-6 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-2xl shadow-red-600/40 hover:-translate-y-1 text-lg group">
                  <PhoneCall className="w-7 h-7 animate-pulse group-hover:scale-110 transition-transform" /> 
                  <div className="text-left">
                    <span className="block text-xs opacity-80 uppercase tracking-widest font-bold">Appel SOS 24/7</span>
                    <span className="block text-xl">0496 32 57 33</span>
                  </div>
                </a>

             </div>
           </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="bg-white/5 border-b border-white/10 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: PhoneCall, text: "Intervention < 60 min" },
              { icon: ChevronRight, text: "Devis Gratuit" },
              { icon: ChevronRight, text: "Technicien Agrée" },
              { icon: ChevronRight, text: "Travail Garanti 1 an" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-slate-300">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <badge.icon className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-bold text-sm uppercase tracking-wider">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section with Images Gallery */}
      <section className="py-20 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8 space-y-10">
              <h2 className="text-5xl font-black text-white leading-tight uppercase tracking-tight">Expertise professionnelle en {subServiceInfo.title}</h2>
              
              {/* Secondary Images Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10">
                  <Image 
                    src={serviceInfo.subServices[0]?.imageUrl || serviceInfo.imageUrl} 
                    alt={`Intervention technique ${subServiceInfo.title}`} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10">
                  <Image 
                    src={serviceInfo.subServices[1]?.imageUrl || serviceInfo.imageUrl} 
                    alt={`Dépannage professionnel ${subServiceInfo.title}`} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="prose prose-xl prose-invert text-white max-w-none">
                <p className="text-2xl font-medium text-blue-200 mb-8 leading-relaxed">
                  DEB PRO SERVICES est votre partenaire de confiance en Belgique pour tout besoin lié à la <strong>{subServiceInfo.title.toLowerCase()}</strong>. 
                  Nous combinons rapidité d'intervention et excellence technique.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 not-prose mb-12">
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">Ce que nous garantissons :</h3>
                    <ul className="space-y-4">
                      {serviceInfo.features.map((f, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-blue-400">Pourquoi nous appeler ?</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Intervention urgente en moins d'une heure.</span>
                      </li>
                      <li className="flex gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Techniciens certifiés et hautement qualifiés.</span>
                      </li>
                      <li className="flex gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>Matériel de diagnostic de pointe.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
                <div dangerouslySetInnerHTML={{ __html: paragraphs[1] }} />
                
                <h3 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Sécurité et Transparence</h3>
                <div dangerouslySetInnerHTML={{ __html: paragraphs[2] }} />

                <h3 className="text-3xl font-black text-white mt-12 mb-6 uppercase tracking-tight">Actif partout en Belgique</h3>
                <div dangerouslySetInnerHTML={{ __html: paragraphs[3] }} />
                
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

      <FAQ customFaqs={(serviceInfo as any).faqs} />
    </>
  );
}
