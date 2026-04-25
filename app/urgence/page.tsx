import { PhoneCall, MapPin, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Urgence Plombier 24H/24 | DEB PRO SERVICES',
  description: 'Urgence plombier, chauffagiste et débouchage 24/7. Nous intervenons en 30 minutes partout en Belgique. Appelez-nous maintenant.',
};

export default function UrgencePage() {
  return (
    <div className="pt-24 bg-[#000814] min-h-screen text-white">
      <section className="relative py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="inline-block bg-red-600/20 border border-red-500/30 px-6 py-2 rounded-full text-xs font-black tracking-[0.3em] uppercase mb-10 text-red-400 animate-pulse">
            Service SOS Prioritaire Actif
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-10 uppercase font-oswald tracking-tighter leading-none">
            Besoin d'une <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Intervention SOS ?</span>
          </h1>
          <p className="text-2xl text-slate-400 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
            Techniciens de garde mobilisés 24h/24 et 7j/7. <br/> Arrivée chez vous en <strong>30 minutes</strong> partout en Belgique.
          </p>
          <div className="flex justify-center">
            <a href="tel:0496325733" className="group relative flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-2xl font-black text-2xl md:text-4xl transition-all shadow-[0_0_50px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95 border-b-8 border-red-900 active:border-b-0 active:translate-y-2">
              <PhoneCall className="w-8 h-8 md:w-10 md:h-10 animate-pulse" /> 0496 32 57 33
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 border-y border-white/5 bg-white/5 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-10 border border-white/10 rounded-3xl bg-[#000814]/50 backdrop-blur-xl group hover:border-blue-500/30 transition-colors">
               <Clock className="w-16 h-16 text-blue-400 mb-8" />
               <h3 className="font-black font-oswald text-3xl mb-4 uppercase tracking-tight">24h/24 & 7j/7</h3>
               <p className="text-slate-400 text-lg leading-relaxed">Disponibilité totale pour toute la Belgique. Même les jours fériés et le dimanche.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-3xl bg-[#000814]/50 backdrop-blur-xl group hover:border-blue-500/30 transition-colors">
               <MapPin className="w-16 h-16 text-blue-400 mb-8" />
               <h3 className="font-black font-oswald text-3xl mb-4 uppercase tracking-tight">BELGIQUE ENTIÈRE</h3>
               <p className="text-slate-400 text-lg leading-relaxed">Nous couvrons Bruxelles, sa périphérie et l'ensemble de la Wallonie et Flandre.</p>
            </div>
            <div className="p-10 border border-white/10 rounded-3xl bg-[#000814]/50 backdrop-blur-xl group hover:border-blue-500/30 transition-colors">
               <ShieldCheck className="w-16 h-16 text-blue-400 mb-8" />
               <h3 className="font-black font-oswald text-3xl mb-4 uppercase tracking-tight">AGRÉÉ & GARANTI</h3>
               <p className="text-slate-400 text-lg leading-relaxed">Chaque intervention est certifiée conforme et couverte par notre assurance professionnelle.</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase font-oswald mb-6">Planifier une intervention</h2>
              <p className="text-slate-400">Si votre situation n'est pas urgente, vous pouvez nous envoyer un message via le formulaire ci-dessous.</p>
           </div>
           <ContactForm />
        </div>
      </div>
    </div>
  );
}
