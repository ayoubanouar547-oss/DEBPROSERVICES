import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import { belgianCities } from '@/lib/data/cities';
import { services } from '@/lib/data/services';

export const metadata = {
  title: 'Nos Zones d\'Intervention en Belgique | DEB PRO SERVICES',
  description: 'Découvrez toutes les villes de Belgique où nous proposons nos services d\'urgence 24h/24 en plomberie, chauffage, gaz, etc.',
};

export default function ZonesDeServicesPage() {
  const sortedServices = [...services].sort((a, b) => a.title.localeCompare(b.title));
  const sortedProvinces = Array.from(new Set(belgianCities.map(c => c.province))).sort();
  
  // Pre-group cities by province for performance
  const citiesByProvince = sortedProvinces.reduce((acc, province) => {
    acc[province] = belgianCities.filter(c => c.province === province).sort((a, b) => a.name.localeCompare(b.name));
    return acc;
  }, {} as Record<string, typeof belgianCities>);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">Zones de Services</span>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">
              Zones d'Intervention <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                sur toute la Belgique
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Nos équipes d'urgence sont déployées stratégiquement pour garantir une intervention en moins de 30 minutes, 24h/24 et 7j/7, dans toutes les provinces belges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap gap-4 mb-20 justify-center">
            {sortedServices.map(s => (
              <a 
                key={`nav-${s.slug}`} 
                href={`#${s.slug}`}
                className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-bold text-slate-300 hover:text-white hover:border-blue-500/50 transition-all hover:scale-105"
              >
                {s.title}
              </a>
            ))}
          </div>

          <div className="space-y-32">
            {sortedServices.map(service => (
              <div key={service.slug} className="scroll-mt-32" id={service.slug}>
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-6">
                      <div className={`${service.color.bg} ${service.color.text} border ${service.color.border} rounded-2xl p-4 shadow-lg shadow-blue-500/10`}>
                        <service.icon className="w-10 h-10" />
                      </div>
                      <div>
                        <h2 className="text-4xl font-black text-white mb-2">{service.title}</h2>
                        <p className="text-slate-400 max-w-xl">Intervention express pour tous vos problèmes de {service.title.toLowerCase()} dans ces localités.</p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                       <span className="text-sm font-mono text-slate-500 uppercase tracking-widest">Zone d'expertise</span>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sortedProvinces.map(province => {
                      const cities = citiesByProvince[province];
                      if (cities.length === 0) return null;
                      
                      return (
                        <div key={`${service.slug}-${province}`} className="group bg-white/[0.03] backdrop-blur-sm p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                              <MapPin className="w-4 h-4 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white tracking-tight">{province}</h3>
                          </div>
                          <ul className="grid grid-cols-1 gap-2">
                            {cities.map(city => (
                              <li key={city.slug}>
                                <Link 
                                  href={`/zones-de-services/${service.slug}/${city.slug}`}
                                  className="flex items-center justify-between p-3 rounded-xl bg-white/0 hover:bg-white/5 text-sm font-medium text-slate-400 hover:text-blue-400 group/link transition-all"
                                >
                                  <span>{city.name}</span>
                                  <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-blue-500" />
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
