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
    <div className="bg-[#000814] min-h-screen text-white selection:bg-blue-600 selection:text-white">
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 text-center space-y-12">
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 px-8 py-3 rounded-full text-xs font-black tracking-[0.5em] uppercase text-blue-400">
             Belgique Entière
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 uppercase font-oswald tracking-tighter leading-none">
            Zones d'Intervention <br/>
            <span className="text-blue-500">Proximité Totale</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-medium">
            Grâce à un réseau de techniciens agréés répartis stratégiquement, nous garantissons une arrivée chez vous en moins de <strong>30 minutes</strong>, 24h/24 et 7j/7.
          </p>
        </div>
      </section>

      <section className="py-32 relative z-10 bg-[#00040a]">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="space-y-40">
            {services.map(service => (
              <div key={service.slug} className="scroll-mt-40 space-y-16" id={service.slug}>
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-white/5 pb-10">
                    <div className="flex items-center gap-10">
                       <div className={`${service.color.bg} ${service.color.text} border ${service.color.border} rounded-[2rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]`}>
                         <service.icon className="w-12 h-12" />
                       </div>
                       <div>
                         <h2 className="text-4xl md:text-7xl font-black text-white uppercase font-oswald tracking-tight">Zone {service.title}</h2>
                         <p className="text-slate-500 font-bold text-xl md:text-2xl mt-2 tracking-wide font-oswald uppercase italic">Dépannage express en moins d'une heure</p>
                       </div>
                    </div>
                    <Link href="tel:0496325733" className="flex items-center gap-4 bg-[#CC1F1F] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-sm hover:bg-[#E52D2D] transition-all shadow-2xl shadow-red-900/30">
                      <PhoneCall className="w-5 h-5" /> Urgence SOS
                    </Link>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {provinces.map(province => {
                       const cities = belgianCities.filter(c => c.province === province);
                       return (
                         <div key={`${service.slug}-${province}`} className="bg-white/[0.02] backdrop-blur-3xl group p-12 rounded-[3.5rem] border border-white/5 hover:border-blue-500/30 transition-all duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 blur-[60px] rounded-full -z-10 transition-all duration-700 group-hover:scale-150 group-hover:bg-blue-500/10"></div>
                           
                           <div className="flex items-center gap-6 mb-10 pb-6 border-b border-white/5">
                             <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-all duration-500 group-hover:scale-110">
                               <MapPin className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                             </div>
                             <h3 className="text-3xl font-black text-white uppercase font-oswald tracking-widest">{province}</h3>
                           </div>
                           
                           <ul className="grid grid-cols-1 gap-3">
                             {cities.map(city => (
                               <li key={city.slug}>
                                 <Link 
                                   href={`/zones-de-services/${service.slug}/${city.slug}`}
                                   className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/[0.05] transition-all group/item"
                                 >
                                   <span className="text-base font-bold text-slate-500 group-hover/item:text-white transition-colors uppercase tracking-widest text-[11px]">{service.title} {city.name}</span>
                                   <ChevronRight className="w-5 h-5 text-slate-700 group-hover/item:translate-x-2 group-hover/item:text-blue-500 transition-all" />
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
