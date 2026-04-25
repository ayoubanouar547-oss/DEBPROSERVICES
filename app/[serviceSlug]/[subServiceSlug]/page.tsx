import { services } from '@/lib/data/services';
import { buildLongClusterText } from '@/lib/utils/seo-content-generator';
import { notFound } from 'next/navigation';
import { PhoneCall, ShieldCheck, CheckCircle, ChevronRight } from 'lucide-react';
import { ContactForm } from '@/components/sections/ContactForm';
import { FAQ } from '@/components/sections/FAQ';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';

export async function generateStaticParams() {
  const params: { serviceSlug: string; subServiceSlug: string }[] = [];
  services.forEach((service) => {
    service.subServices.forEach((sub) => {
      params.push({
        serviceSlug: service.slug,
        subServiceSlug: sub.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string; subServiceSlug: string }> }) {
  const resolvedParams = await params;
  const service = services.find((s) => s.slug === resolvedParams.serviceSlug);
  const subService = service?.subServices.find((sub) => sub.slug === resolvedParams.subServiceSlug);

  if (!service || !subService) return {};

  return {
    title: `Expert ${subService.title} en Belgique | Intervention Rapide 24H/24 | DEB PRO SERVICES`,
    description: `Besoin d'un expert pour : ${subService.title} ? ${subService.desc} DEB PRO SERVICES intervient urgence 24h/24 et 7j/7 partout en Belgique.`,
  };
}

export default async function SubServicePage({ params }: { params: Promise<{ serviceSlug: string; subServiceSlug: string }> }) {
  const resolvedParams = await params;
  const serviceInfo = services.find((s) => s.slug === resolvedParams.serviceSlug);
  const subServiceInfo = serviceInfo?.subServices.find((sub) => sub.slug === resolvedParams.subServiceSlug);

  if (!serviceInfo || !subServiceInfo) {
    notFound();
  }

  const paragraphs = [
    `Lorsqu'il s'agit de <strong>${subServiceInfo.title.toLowerCase()}</strong>, faire appel à des professionnels qualifiés est indispensable. Chez DEB PRO SERVICES, nous avons développé une expertise unique en Belgique concernant la catégorie ${serviceInfo.title.toLowerCase()}. Nos équipes interviennent de jour comme de nuit, dimanches et jours fériés inclus pour assurer un dépannage rapide et efficace.`,
    `Le service de <em>${subServiceInfo.title.toLowerCase()}</em> demande un savoir-faire spécifique et un matériel adapté. Nos techniciens certifiés se déplacent chez vous avec des véhicules utilitaires complètement équipés, permettant de résoudre 95% des pannes dès la première visite. ${subServiceInfo.desc}`,
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
      <PageHero
        title={`Expert ${subServiceInfo.title}`}
        titleHighlight="en Belgique"
        description={`${subServiceInfo.desc} Intervention rapide 24h/24 et devis gratuit partout en Belgique.`}
        primaryButtonText="Intervention Urgente"
        secondaryButtonText="Prendre rendez-vous"
        imageSrc={`https://picsum.photos/seed/${subServiceInfo.slug}1/800/400`}
      />
      <section className="py-20 bg-slate-900 text-white relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-blue-400">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/${serviceInfo.slug}`} className="hover:text-blue-400">{serviceInfo.title}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-bold">{subServiceInfo.title}</span>
          </div>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-10">
              <h2 className="text-3xl font-black text-white">L'Expertise {subServiceInfo.title} à votre portée</h2>
              <div className="prose prose-lg prose-invert text-slate-300">
                <p dangerouslySetInnerHTML={{ __html: paragraphs[0] }} />
                <div className="my-10 relative h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={`https://picsum.photos/seed/${subServiceInfo.slug}1/800/400`} alt={`${subServiceInfo.title} intervention`} className="w-full h-full object-cover" />
                </div>
                <p dangerouslySetInnerHTML={{ __html: paragraphs[1] }} />
                <div className="mt-16 border-t border-white/10 pt-16">
                  <div dangerouslySetInnerHTML={{ __html: massiveSEOContent.join('') }} />
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4 text-white">Autres services en {serviceInfo.title}</h3>
                  <ul className="space-y-3">
                    {serviceInfo.subServices.map((sub) => (
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
