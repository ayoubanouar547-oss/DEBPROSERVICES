'use client';

import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { belgianCities } from '@/lib/data/cities';

export function ServiceZones() {
  const provinces = Array.from(new Set(belgianCities.map(c => c.province)));

  return (
    <section className="py-24 relative z-10 border-t border-white/10 overflow-hidden" id="zones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
             <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-sm">Intervention Nationale</h2>
             <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
                Nos Zones d'Interventions en Belgique
             </h3>
             <p className="text-slate-400 text-lg mb-8">
               Nous disposons de techniciens répartis dans les grandes villes du pays. Cela nous permet d'assurer une présence rapide, généralement en moins d'une heure en fonction de votre région.
             </p>
             
             <div className="space-y-6">
                {provinces.slice(0, 3).map(province => {
                  const cities = belgianCities.filter(c => c.province === province);
                  return (
                    <div key={province}>
                      <h4 className="font-bold flex items-center text-white mb-3 uppercase tracking-wider text-sm">
                        <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                        {province}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cities.slice(0, 8).map(city => (
                          <Link 
                            key={city.slug} 
                            href={`/zones-de-services/plomberie/${city.slug}`}
                            className="text-sm bg-white/5 backdrop-blur-md hover:bg-blue-600/20 text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-white/10 transition-colors"
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
             </div>
             <div className="mt-8 pt-6 border-t border-white/10">
               <Link href="/zones-de-services" className="font-bold text-blue-400 text-sm tracking-widest uppercase hover:text-white transition-colors">Voir le reste des provinces &rarr;</Link>
             </div>
          </div>

          <div className="relative h-full min-h-[400px] bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full blur-3xl absolute inset-0 m-auto"></div>
              <MapPin className="w-24 h-24 text-blue-400 mx-auto opacity-50 relative z-10" />
              <p className="mt-4 text-2xl font-black text-white relative z-10">Toute la Belgique</p>
              <div className="inline-block mt-4 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm font-bold text-blue-300 relative z-10 uppercase tracking-widest">
                +45 Techniciens Actifs
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
