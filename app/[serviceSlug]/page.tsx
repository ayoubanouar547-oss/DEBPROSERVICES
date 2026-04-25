import { services } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/ui/PageHero';
import { Services } from '@/components/sections/Services';

export function generateStaticParams() {
  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const resolvedParams = await params;
  const service = services.find(s => s.slug === resolvedParams.serviceSlug);
  
  if (!service) return {};
  
  return {
    title: `Dépannage ${service.title} en Belgique | Intervention Rapide 24H/24 | DEB PRO SERVICES`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ serviceSlug: string }> }) {
  const resolvedParams = await params;
  const serviceInfo = services.find(s => s.slug === resolvedParams.serviceSlug);
  
  if (!serviceInfo) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={`Expert ${serviceInfo.title}`}
        titleHighlight="en Belgique"
        description={serviceInfo.description}
        primaryButtonText="Intervention Urgente"
        secondaryButtonText="Voir nos tarifs"
        imageSrc={serviceInfo.imageUrl}
      />
      
      <section className="py-20 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: serviceInfo.contentHTML }} />
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">Tous nos services {serviceInfo.title}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Intervention dans toute la Belgique, 24h/24 et 7j/7.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceInfo.subServices.map((sub) => (
              <div key={sub.slug} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition">{sub.title}</h3>
                <p className="text-slate-400 mb-6">{sub.desc}</p>
                <div className="text-blue-400 font-bold flex items-center gap-2">
                   En savoir plus <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
