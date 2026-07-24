"use client";

import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import { belgianCities } from "@/lib/data/cities";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { frToNlCitySlugMap, frToNlCityNameMap } from "@/lib/data/translations";

export function ServiceZones() {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const provinces = Array.from(new Set(belgianCities.map((c) => c.province)));

  const getProvinceName = (province: string) => {
    if (!isNl) return `Province de ${province}`;
    const pMap: Record<string, string> = {
      "Bruxelles-Capitale": "Brussel-Hoofdstad",
      "Brabant Flamand": "Vlaams-Brabant",
      "Brabant Wallon": "Waals-Brabant",
      "Hainaut": "Henegouwen",
      "Liège": "Luik",
      "Namur": "Namen"
    };
    return `Provincie ${pMap[province] || province}`;
  };

  return (
    <section
      className="py-24 relative z-10 border-t border-white/5 overflow-hidden bg-[#010918]"
      id="zones"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
               <span className="w-12 h-[2px] bg-[#EF3340]"></span>
               <h2 className="text-[#EF3340] font-black tracking-widest uppercase text-sm">
                 {isNl ? "Nationale Interventie" : "Intervention Nationale"}
               </h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {isNl ? (
                <>
                  Onze Interventiezones in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDDA24] to-[#EF3340]">België</span>
                </>
              ) : (
                <>
                  Nos Zones d'Interventions en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDDA24] to-[#EF3340]">Belgique</span>
                </>
              )}
            </h3>
            <p className="text-slate-400 text-lg mb-10 border-l-2 border-white/10 pl-6">
              {isNl ? (
                "Wij beschikken over technici verspreid over de grote steden van het land. Dit stelt ons in staat om snel ter plaatse te zijn, meestal binnen een uur, afhankelijk van uw regio."
              ) : (
                "Nous disposons de techniciens répartis dans les grandes villes du pays. Cela nous permet d'assurer une présence rapide, généralement en moins d'une heure en fonction de votre région."
              )}
            </p>

            <div className="space-y-8">
              {provinces.slice(0, 3).map((province, idx) => {
                const cities = belgianCities.filter(
                  (c) => c.province === province,
                );
                return (
                  <motion.div 
                    key={province}
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <h4 className="font-bold flex items-center text-white mb-4 uppercase tracking-wider text-sm">
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3">
                         <MapPin className="w-4 h-4 text-yellow-400" />
                      </div>
                      {getProvinceName(province)}
                    </h4>
                    <div className="flex flex-wrap gap-2.5 pl-11">
                      {cities.slice(0, 6).map((city) => {
                        const nlSlug = frToNlCitySlugMap[city.slug] || city.slug;
                        const nlName = frToNlCityNameMap[city.name] || city.name;
                        return (
                          <Link
                            key={city.slug}
                            href={isNl ? `/nl/loodgieter-${nlSlug}` : `/zones-de-services/plomberie/${city.slug}`}
                            className="text-xs font-medium uppercase tracking-wider bg-[#00040A]/50 backdrop-blur-md hover:bg-blue-600/20 text-slate-400 hover:text-white px-4 py-2 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all shadow-sm"
                          >
                            {isNl ? nlName : city.name}
                          </Link>
                        );
                      })}
                      <Link
                         href={isNl ? "/nl/zones-de-services" : "/zones-de-services"}
                         className="text-xs font-black uppercase tracking-wider bg-white/5 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all flex items-center"
                      >
                         {isNl ? "+ Steden" : "+ Villes"}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              className="mt-10 pt-8 border-t border-white/10"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href={isNl ? "/nl/zones-de-services" : "/zones-de-services"}
                className="inline-flex items-center font-black text-white text-sm uppercase tracking-widest group bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl border border-white/10 transition-colors"
              >
                {isNl ? "Bekijk de volledige kaart" : "Voir la carte complète"} 
                <Navigation className="w-4 h-4 ml-3 group-hover:rotate-45 transition-transform text-blue-400" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Map Display Side */}
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full min-h-[500px] lg:min-h-full xl:min-h-[600px] bg-[#00040A]/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/5 overflow-hidden flex items-center justify-center p-8 lg:p-12 group shadow-[0_30px_100px_-20px_rgba(37,99,235,0.15)]"
          >
            {/* Subtle rotating glow */}
            <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/10 via-red-500/5 to-blue-500/10 rounded-full blur-[100px] animate-spin-slow pointer-events-none opacity-50"></div>

            {/* Belgian Flag abstract background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#FDDA24]/10 to-[#EF3340]/10 z-0"></div>

            {/* Belgian Flag outline map via mask */}
            <div
              className="absolute inset-8 z-0 opacity-40 group-hover:opacity-70 mix-blend-screen bg-gradient-to-br from-slate-700 via-[#FDDA24] to-[#EF3340] transition-opacity duration-1000"
              style={{
                maskImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_map_of_Belgium.svg/1024px-Flag_map_of_Belgium.svg.png")',
                WebkitMaskImage:
                  'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_map_of_Belgium.svg/1024px-Flag_map_of_Belgium.svg.png")',
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            ></div>

            <div className="text-center relative z-10 p-10 rounded-3xl bg-[#010918]/80 border border-white/10 shadow-2xl backdrop-blur-xl group-hover:scale-105 transition-transform duration-500 max-w-sm w-full mx-auto">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-[#EF3340] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(253,218,36,0.3)] mb-6 rotate-3">
                 <MapPin className="w-10 h-10 text-white -rotate-3 animate-pulse" />
              </div>
              <h4 className="text-4xl font-black text-white relative z-10 drop-shadow-lg tracking-tight uppercase leading-none mb-3">
                100%
              </h4>
              <p className="text-slate-300 font-medium text-sm tracking-widest uppercase mb-6">
                {isNl ? "Nationale Dekking" : "Couverture Nationale"}
              </p>
              <div className="inline-flex items-center gap-2 bg-black/40 border border-white/5 px-6 py-3 rounded-xl text-xs font-black text-white uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-green-500 absolute"></span>
                {isNl ? "+45 Actieve Technici" : "+45 Techniciens Actifs"}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
