import Link from "next/link";
import { services } from "@/lib/data/services";
import { belgianCities } from "@/lib/data/cities";

export function PreFooterLinks() {
  const mainCities = belgianCities.slice(0, 24); // Augmenté à 24 villes principales
  
  return (
    <section className="bg-slate-950/50 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-lg font-bold mb-10 flex items-center gap-3">
          <span className="w-12 h-[2px] bg-blue-600"></span>
          NOS SERVICES DE DÉPANNAGE PAR VILLE (24H/24)
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-10">
          {mainCities.map((city) => (
            <div key={city.slug} className="space-y-4">
              <h3 className="text-blue-500 font-black text-[11px] uppercase tracking-[0.2em] border-b border-white/10 pb-2">
                {city.name}
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/zones-de-services/${service.slug}/${city.slug}`}
                      className="text-[10px] text-slate-400 hover:text-white transition-colors uppercase font-semibold block leading-tight"
                    >
                      {service.title} {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
            <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Autres localités couvertes :</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px]">
                {belgianCities.slice(24, 100).map(city => (
                    <Link key={city.slug} href={`/zones-de-services/plomberie/${city.slug}`} className="text-slate-500 hover:text-blue-400 transition-colors uppercase">
                        Plombier {city.name}
                    </Link>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
