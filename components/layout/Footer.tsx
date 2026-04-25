import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck } from 'lucide-react';
import { belgianCities } from '@/lib/data/cities';
import { services } from '@/lib/data/services';

const PHONE = "0496 32 57 33";
const EMAIL = "contact@debproservices.be";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-[#00040a] border-t border-white/5 pt-24 pb-12 overflow-hidden mt-auto">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Logo & Vision */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-black font-oswald tracking-tighter text-white group-hover:text-blue-500 transition-colors">
                DEB PRO<span className="text-blue-500">SERVICES</span>
              </span>
            </Link>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              L'excellence du service technique en Belgique. Urgences et chantiers maîtrisés 24h/24 par des experts certifiés.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600/20 text-white transition-all border border-white/10 group">
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600/20 text-white transition-all border border-white/10 group">
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Expertises */}
          <div>
            <h3 className="text-xl font-black text-white mb-8 uppercase font-oswald tracking-widest">Nos Expertises</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/${service.slug}`} className="text-slate-400 hover:text-blue-400 transition-all flex items-center gap-3 group">
                     <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:scale-150 transition-transform"></span>
                     <span className="text-sm font-bold uppercase tracking-widest">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones Directes */}
          <div>
            <h3 className="text-xl font-black text-white mb-8 uppercase font-oswald tracking-widest">Intervention Directe</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {belgianCities.slice(0, 10).map((city) => (
                <Link key={city.slug} href={`/zones-de-services/debouchage-${city.slug}`} className="text-sm text-slate-500 hover:text-white transition-colors flex items-center gap-2">
                   <div className="w-1 h-1 bg-white/10 rounded-full"></div>
                   {city.name}
                </Link>
              ))}
            </div>
          </div>

          {/* SOS Contact */}
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 blur-2xl rounded-full"></div>
            <h3 className="text-xl font-black text-white mb-8 uppercase font-oswald tracking-widest">Ligne d'Urgence 24/7</h3>
            <ul className="space-y-6">
              <li className="space-y-2">
                <p className="text-xs font-black text-red-500 uppercase tracking-widest">Appel Direct</p>
                <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-3xl font-black text-white hover:text-red-500 transition-colors block tracking-tighter">
                  {PHONE}
                </a>
              </li>
              <li className="space-y-2">
                <p className="text-xs font-black text-blue-500 uppercase tracking-widest">Support Email</p>
                <a href={`mailto:${EMAIL}`} className="text-sm font-bold text-slate-300 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Compliance */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-8">
            <Link href="/mentions-legales" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Légal</Link>
            <Link href="/privacy-policy" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/sitemap" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Sitemap</Link>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
            <span>&copy; {currentYear} DEB PRO SERVICES — TOUS DROITS RÉSERVÉS</span>
          </div>

          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
            <div className="flex gap-0.5">
               {[1,2,3,4,5].map(i => (
                 <svg key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
               ))}
            </div>
            <span className="text-white">4.9/5 AVIS GOOGLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
