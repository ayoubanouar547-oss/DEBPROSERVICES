import Link from 'next/link';
import { MapPin, ChevronRight, PhoneCall } from 'lucide-react';
import { belgianCities } from '@/lib/data/cities';
import { services } from '@/lib/data/services';

export const metadata = {
  title: 'Nos Zones d\'Intervention en Belgique | DEB PRO SERVICES',
  description: 'Découvrez toutes les villes de Belgique où nous proposons nos services d\'urgence 24h/24 en plomberie, chauffage, gaz, etc.',
};

export default function ZonesDeServicesPage() {
  const provinces = Array.from(new Set(belgianCities.map(c => c.province)));

  return (
    <div className="bg-[#000814] min-h-screen text-white">
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/10">
        <div className="absolute inset-x-0 top-0 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full text-xs font-black tracking-[0.4em] uppercase text-blue-400">
             Belgique Entière
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase font-oswald tracking-tighter leading-none">
            Zones d'Intervention <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Proximité Totale</span>
          </h1>
          <p className="text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Grâce à un réseau de techniciens agréés répartis stratégiquement, nous garantissons une arrivée chez vous en moins de <strong>30 minutes</strong>, 24h/24 et 7j/7.
          </p>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-32">
            {services.map(service => (
              <div key={service.slug} className="scroll-mt-40 space-y-12" id={service.slug}>
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                    <div className="flex items-center gap-6">
                       <div className={`${service.color.bg} ${service.color.text} border ${service.color.border} rounded-2xl p-5 shadow-2xl`}>
                         <service.icon className="w-10 h-10" />
                       </div>
                       <div>
                         <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-oswald tracking-tight">Zone {service.title}</h2>
                         <p className="text-slate-500 font-medium">Dépannage express en moins d'une heure</p>
                       </div>
                    </div>
                    <Link href="tel:0496325733" className="flex items-center gap-3 bg-red-600/10 text-red-500 border border-red-500/20 px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-red-600 hover:text-white transition-all">
                      <PhoneCall className="w-4 h-4" /> Urgence SOS
                    </Link>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {provinces.map(province => {
                       const cities = belgianCities.filter(c => c.province === province);
                       return (
                         <div key={`${service.slug}-${province}`} className="glass-card group p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[40px] rounded-full -z-10 transition-all duration-700 group-hover:scale-150 group-hover:bg-blue-500/10"></div>
                           
                           <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/5">
                             <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 transition-colors">
                               <MapPin className="w-5 h-5 text-blue-400" />
                             </div>
                             <h3 className="text-2xl font-black text-white uppercase font-oswald tracking-widest">{province}</h3>
                           </div>
                           
                           <ul className="grid grid-cols-1 gap-2">
                             {cities.map(city => (
                               <li key={city.slug}>
                                 <Link 
                                   href={`/zones-de-services/${service.slug}/${city.slug}`}
                                   className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all group/item"
                                 >
                                   <span className="text-sm font-bold text-slate-400 group-hover/item:text-white transition-colors">{service.title} {city.name}</span>
                                   <ChevronRight className="w-4 h-4 text-slate-600 group-hover/item:translate-x-1 group-hover/item:text-blue-400 transition-all" />
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
    </div>
  );
}
