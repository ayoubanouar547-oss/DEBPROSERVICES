import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import { belgianCities } from '@/lib/data/cities';
import { services } from '@/lib/data/services';
import { PageHero } from '@/components/ui/PageHero';

export const metadata = {
  title: "Expert Plombier en Belgique | Intervention Rapide 24H/24 | Zones d'Intervention",
  description: 'Découvrez toutes les villes de Belgique où nous proposons nos services d\'urgence 24h/24 en plomberie, chauffage, gaz, etc.',
};

export default function ZonesDeServicesPage() {
  const provinces = Array.from(new Set(belgianCities.map(c => c.province)));

  return (
    <>
      <PageHero 
        title="Zones d'Intervention"
        titleHighlight="en Belgique"
        description="Nous disposons de plusieurs équipes d'intervention réparties de manière stratégique sur l'ensemble du territoire belge pour garantir des délais très courts 24/7."
        primaryButtonText="Contact URGENT"
        secondaryButtonText="Voir les villes"
        secondaryButtonHref="#villes"
      />

      <section className="py-24 relative z-10" id="villes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-20">
            {services.map(service => (
              <div key={service.slug} className="scroll-mt-32" id={service.slug}>
                 <div className="flex items-center gap-4 mb-10 pb-4 border-b border-white/10">
                    <div className={`${service.color.bg} ${service.color.text} border ${service.color.border} rounded-xl p-3`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-black text-white">Zone pour {service.title}</h2>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {provinces.map(province => {
                      const cities = belgianCities.filter(c => c.province === province);
                      return (
                        <div key={`${service.slug}-${province}`} className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-sm border border-white/10">
                          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                            <MapPin className="w-5 h-5 text-slate-400" />
                            <h3 className="text-xl font-bold text-white">{province}</h3>
                          </div>
                          <ul className="space-y-4">
                            {cities.map(city => (
                              <li key={city.slug}>
                                <Link 
                                  href={`/zones-de-services/${service.slug}/${city.slug}`}
                                  className="flex items-center text-sm font-medium text-slate-400 hover:text-white group transition-colors"
                                >
                                  <ChevronRight className="w-4 h-4 mr-2 text-slate-600 group-hover:text-white transition-colors" />
                                  {service.title} à {city.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                 </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
