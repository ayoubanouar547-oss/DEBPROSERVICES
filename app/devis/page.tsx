import { ContactForm } from '@/components/sections/ContactForm';
import { PhoneCall, Clock, MapPin, ShieldCheck, Phone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Demande de devis gratuit | DEB PRO SERVICES',
  description: 'Obtenez un devis gratuit et sans engagement pour vos travaux de plomberie, chauffage, électricité et débouchage.',
};

export default function DevisPage() {
  return (
    <div className="pt-40 pb-24 bg-[#000814] min-h-screen text-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-6">
           <div className="inline-block bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full text-xs font-black tracking-[0.4em] uppercase mb-4 text-blue-400">
             Transparence & Qualité
           </div>
           <h1 className="text-5xl md:text-8xl font-black uppercase font-oswald tracking-tighter leading-none">
             Votre devis <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">100% Gratuit</span>
           </h1>
           <p className="text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
             Estimation précise et rapide pour tous vos travaux de plomberie, chauffage, électricité et débouchage. Réponse sous 24h.
           </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-[40px] p-6 md:p-12 rounded-[3.5rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] relative group">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center border-4 border-[#000814] shadow-2xl group-hover:scale-110 transition-transform">
               <span className="font-black text-2xl uppercase tracking-tighter">Pro</span>
            </div>
            <ContactForm />
          </div>

          <div className="grid sm:grid-cols-3 gap-8 mt-20 text-center">
             <div className="space-y-4">
                <div className="text-blue-500 font-black text-4xl uppercase font-oswald">0€</div>
                <div className="text-white font-bold uppercase tracking-widest text-xs opacity-70">Frais de dossier</div>
             </div>
             <div className="space-y-4">
                <div className="text-blue-500 font-black text-4xl uppercase font-oswald">24H</div>
                <div className="text-white font-bold uppercase tracking-widest text-xs opacity-70">Délai de réponse max</div>
             </div>
             <div className="space-y-4">
                <div className="text-blue-500 font-black text-4xl uppercase font-oswald">12 MOIS</div>
                <div className="text-white font-bold uppercase tracking-widest text-xs opacity-70">Garantie sur travaux</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
