'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, ChevronRight, Search, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { belgianCities } from '@/lib/data/cities';
import { services } from '@/lib/data/services';

export default function ZonesDeServicesClient() {
  const [searchTerm, setSearchTerm] = useState('');

  const sortedProvinces = useMemo(() => {
    return Array.from(new Set(belgianCities.map(c => c.province))).sort();
  }, []);

  const citiesByProvince = useMemo(() => {
    return sortedProvinces.reduce((acc, province) => {
      acc[province] = belgianCities.filter(c => c.province === province).sort((a, b) => a.name.localeCompare(b.name));
      return acc;
    }, {} as Record<string, typeof belgianCities>);
  }, [sortedProvinces]);

  const majorCities = useMemo(() => ['bruxelles', 'antwerpen', 'gent', 'charleroi', 'liege'], []);

  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return services;
    
    return services.filter(service => {
      const cityMatch = belgianCities.some(city => 
        city.name.toLowerCase().includes(term) || 
        city.province.toLowerCase().includes(term)
      );
      return service.title.toLowerCase().includes(term) || cityMatch;
    });
  }, [searchTerm]);

  const searchResults = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return null;

    return belgianCities.filter(city => 
      city.name.toLowerCase().includes(term) || 
      city.province.toLowerCase().includes(term)
    );
  }, [searchTerm]);

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
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight">
                Zones d'Intervention <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  sur toute la Belgique
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                Nos équipes d'urgence sont déployées stratégiquement pour garantir une intervention en moins de 30 minutes, 24h/24 et 7j/7.
              </p>
            </div>

            <div className="relative max-w-xl mx-auto lg:mx-0 w-full group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-2 flex items-center gap-4">
                <Search className="w-6 h-6 ml-4 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Rechercher une ville, province ou service..."
                  className="flex-1 bg-transparent border-none focus:ring-0 text-lg text-white placeholder-slate-500 py-3"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="p-2 hover:bg-white/5 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimatePresence mode="wait">
            {!searchTerm ? (
              <div className="space-y-32">
                {services.map(service => (
                  <div key={service.slug} className="scroll-mt-32" id={service.slug}>
                    {/* Service Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-6">
                        <div className={`${service.color.bg} ${service.color.text} border ${service.color.border} rounded-2xl p-4 shadow-lg shadow-blue-500/10`}>
                          <service.icon className="w-10 h-10" />
                        </div>
                        <div>
                          <h2 className="text-4xl font-black text-white mb-2">{service.title}</h2>
                          <p className="text-slate-400 max-w-xl">Intervention express 24h/24 pour tous vos besoins en {service.title.toLowerCase()}.</p>
                        </div>
                      </div>
                    </div>

                    {/* Top 5 Cities - Quick Access */}
                    <div className="mb-16">
                      <div className="flex items-center gap-2 mb-8">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider text-sm">Villes Fréquentes</h3>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {belgianCities
                          .filter(c => majorCities.includes(c.slug))
                          .slice(0, 5)
                          .map(city => (
                            <Link 
                              key={`top-${service.slug}-${city.slug}`}
                              href={`/zones-de-services/${service.slug}/${city.slug}`}
                              className="group p-6 rounded-3xl bg-blue-600/5 border border-blue-500/20 hover:border-blue-500/50 transition-all text-center"
                            >
                              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                                <MapPin className="w-6 h-6" />
                              </div>
                              <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors uppercase text-sm tracking-widest">{city.name}</h4>
                            </Link>
                          ))}
                      </div>
                    </div>

                    {/* All Cities by Province */}
                    <div>
                      <div className="flex items-center gap-2 mb-8">
                        <Globe className="w-5 h-5 text-slate-500" />
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider text-sm">Toutes nos Zones par Province</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {sortedProvinces.map(province => {
                          const cities = citiesByProvince[province];
                          return (
                            <div key={`${service.slug}-${province}`} className="bg-white/[0.02] border border-white/5 p-6 rounded-3xl transition-colors hover:bg-white/[0.04]">
                              <h4 className="text-slate-300 font-bold mb-4 pb-2 border-b border-white/5 flex items-center justify-between">
                                {province}
                                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full font-mono">{cities.length}</span>
                              </h4>
                              <ul className="space-y-2">
                                {cities.map(city => (
                                  <li key={`${service.slug}-${province}-${city.slug}`}>
                                    <Link 
                                      href={`/zones-de-services/${service.slug}/${city.slug}`}
                                      className="flex items-center justify-between text-sm text-slate-500 hover:text-blue-400 py-1 transition-colors group/link"
                                    >
                                      <span>{city.name}</span>
                                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-12"
              >
                {filteredData.length > 0 && searchResults && searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredData.map(service => (
                      <div key={service.slug} className="contents">
                        {searchResults.map(city => (
                          <Link 
                            key={`search-${service.slug}-${city.slug}`}
                            href={`/zones-de-services/${service.slug}/${city.slug}`}
                            className="bg-white/[0.03] border border-white/10 p-6 rounded-3xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group"
                          >
                            <div className="flex items-center gap-4 mb-4">
                              <div className={`${service.color.bg} ${service.color.text} p-2 rounded-xl border ${service.color.border}`}>
                                <service.icon className="w-5 h-5" />
                              </div>
                              <span className="text-xs font-bold text-slate-400 group-hover:text-blue-400 transition-colors uppercase tracking-widest">{service.title}</span>
                            </div>
                            <h4 className="text-2xl font-black text-white mb-1">{city.name}</h4>
                            <p className="text-sm text-slate-500">{city.province}</p>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-40">
                    <Search className="w-16 h-16 text-slate-700 mx-auto mb-6" />
                    <h2 className="text-3xl font-black text-white mb-2">Aucun résultat</h2>
                    <p className="text-slate-500">Nous n'avons pas trouvé de service ou de ville correspondant à "{searchTerm}"</p>
                    <button onClick={() => setSearchTerm('')} className="mt-8 px-6 py-3 bg-blue-600 rounded-xl text-white font-bold hover:bg-blue-500 transition-colors">Réinitialiser</button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}
