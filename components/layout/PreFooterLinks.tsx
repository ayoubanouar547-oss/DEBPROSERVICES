"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/data/services";
import { belgianCities } from "@/lib/data/cities";

export function PreFooterLinks() {
  const pathname = usePathname();
  const provinces = Array.from(new Set(belgianCities.map((c) => c.province)));
  
  let currentServiceSlug = null;
  if (pathname) {
    const parts = pathname.split('/').filter(Boolean);
    if (parts[0] === 'zones-de-services' && parts[1] && parts[1] !== 'plomberie') {
      currentServiceSlug = parts[1];
    } else if (parts[0]) {
      const found = services.find(s => s.slug === parts[0]);
      if (found) currentServiceSlug = found.slug;
    }
    
    // Safety check just in case it's a zone link but matches plomberie due to logic
    if (parts[0] === 'zones-de-services' && parts[1]) {
       currentServiceSlug = parts[1];
    }
  }

  // Display only the active service (if on a service page) 
  // Otherwise, fallback to the top 3 services EXCLUDING renovation. 
  let displayServices = currentServiceSlug 
    ? services.filter(s => s.slug === currentServiceSlug)
    : services.filter(s => s.slug !== 'renovation-maison').slice(0, 3);
  
  // If the user navigated to a service that doesn't exist for some reason, fallback
  if (displayServices.length === 0) {
    displayServices = services.filter(s => s.slug !== 'renovation-maison').slice(0, 3);
  }
  
  return (
    <section className="bg-slate-950/50 py-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-white text-2xl font-black mb-2 flex items-center gap-3 tracking-tighter">
            <span className="w-12 h-1 bg-blue-600"></span>
            NOS ZONES D'INTERVENTION 24H/24
          </h2>
          <p className="text-slate-400 text-sm font-medium">
            Découvrez tous nos services de dépannage urgent par localité en Belgique.
          </p>
        </div>
        
        <div className="space-y-16">
          {provinces.map((province) => {
            const citiesInProvince = belgianCities.filter(c => c.province === province);
            return (
              <div key={province} className="space-y-6">
                <h3 className="text-blue-500 font-black text-xs uppercase tracking-[0.3em] flex items-center gap-4 py-2 border-b border-white/5">
                  <span className="shrink-0">{province}</span>
                  <span className="h-px w-full bg-gradient-to-r from-white/10 to-transparent"></span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-10">
                  {citiesInProvince.slice(0, 10).map((city) => (
                    <div key={city.slug} className="space-y-3">
                      <h4 className="text-white font-bold text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                        DÉPANNAGE {city.name}
                      </h4>
                      <ul className="space-y-1.5 px-1">
                        {displayServices.map((service) => (
                          <li key={`${city.slug}-${service.id}`}>
                            <Link
                              href={`/zones-de-services/${service.slug}/${city.slug}`}
                              className="text-[9px] text-slate-500 hover:text-blue-400 transition-colors uppercase font-bold block leading-tight border-l border-white/10 pl-3 hover:border-blue-500"
                            >
                              {service.title} {city.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            PRO SERVICES © 2026 - TOUTES LES RÉGIONS DE BELGIQUE COUVERTES
          </div>
          <Link href="/zones-de-services" className="text-blue-500 text-xs font-black uppercase tracking-tighter hover:underline">
            Voir l'annuaire complet des services &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
