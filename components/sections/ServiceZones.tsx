'use client';

import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { belgianCities } from '@/lib/data/cities';

export function ServiceZones() {
  const provinces = Array.from(new Set(belgianCities.map(c => c.province)));

  return (
    <section className="py-32 relative z-10 border-t border-white/5 overflow-hidden bg-[#00040a]" id="zones">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
             <div>
               <h2 className="text-blue-500 font-black tracking-[0.4em] uppercase mb-6 text-xs italic">Couverture Totale</h2>
               <h3 className="text-4xl md:text-7xl font-black text-white font-oswald uppercase tracking-tighter leading-none">
                  Nos Zones d'Intervention <br/><span className="text-blue-500">en Belgique</span>
               </h3>
               <p className="text-slate-400 text-xl font-medium leading-relaxed mt-8">
                 Nous disposons d'une flotte de techniciens experts répartis stratégiquement. Intervention garantie en moins de 60 minutes dans toutes les provinces belges.
               </p>
             </div>
             
             <div className="space-y-10">
                {provinces.slice(0, 3).map(province => {
                  const cities = belgianCities.filter(c => c.province === province);
                  return (
                    <div key={province} className="group">
                      <h4 className="font-black flex items-center text-white mb-6 uppercase tracking-[0.2em] text-sm md:text-base font-oswald italic transition-colors group-hover:text-blue-500">
                        <MapPin className="w-5 h-5 mr-3 text-blue-500 animate-pulse" />
                        {province}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {cities.slice(0, 8).map(city => (
                          <Link 
                            key={city.slug} 
                            href={`/zones-de-services/plomberie/${city.slug}`}
                            className="text-xs font-black bg-white/[0.03] backdrop-blur-3xl hover:bg-blue-600 text-slate-400 hover:text-white px-5 py-2.5 rounded-xl border border-white/5 transition-all duration-300 uppercase tracking-widest shadow-lg"
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
             </div>
             <div className="mt-12 pt-10 border-t border-white/5">
               <Link href="/zones-de-services" className="group inline-flex items-center font-black text-blue-500 text-base tracking-[0.3em] uppercase hover:text-white transition-all">
                  Explorer toutes les zones 
                  <span className="ml-4 transition-transform group-hover:translate-x-2">→</span>
               </Link>
             </div>
          </div>

          <div className="relative h-full min-h-[500px] bg-white/[0.01] backdrop-blur-3xl rounded-[3rem] border border-white/5 overflow-hidden flex items-center justify-center p-12 group shadow-2xl">
            <div className="absolute inset-0 bg-[#000814]/80 z-[-1]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-blue-900/10 to-red-900/10 z-0"></div>
            
            {/* Belgian Flag outline map via mask */}
            <div 
              className="absolute inset-0 z-0 opacity-80 mix-blend-screen bg-gradient-to-r from-slate-900 via-[#FDDA24] to-[#EF3340] group-hover:opacity-100 transition-opacity duration-700"
              style={{
                maskImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_map_of_Belgium.svg/1024px-Flag_map_of_Belgium.svg.png")',
                WebkitMaskImage: 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_map_of_Belgium.svg/1024px-Flag_map_of_Belgium.svg.png")',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat'
              }}
            ></div>

            {/* Glowing effect behind map */}
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-yellow-500/10 to-red-600/10 rounded-full blur-[80px] absolute inset-0 m-auto z-0 pointer-events-none"></div>
            
            <div className="text-center relative z-10 p-8 rounded-2xl bg-[#000814]/60 border border-white/10 shadow-2xl backdrop-blur-md">
              <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
              <p className="mt-2 text-3xl font-black text-white relative z-10 drop-shadow-lg tracking-wide uppercase">
                Toute la Belgique
              </p>
              <div className="inline-block mt-4 bg-gradient-to-r from-black via-yellow-500/20 to-red-600/20 border border-yellow-500/30 px-6 py-2 rounded-full text-xs font-black text-yellow-400 relative z-10 uppercase tracking-widest shadow-xl">
                +45 Techniciens Actifs
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
