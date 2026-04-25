import { ContactForm } from '@/components/sections/ContactForm';
import { PhoneCall, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Contactez-nous | DEB PRO SERVICES',
  description: 'Prenez contact avec DEB PRO SERVICES pour tous vos travaux et urgences en plomberie, chauffage ou débouchage en Belgique.',
};

export default function ContactPage() {
  return (
    <div className="pt-40 pb-24 bg-[#000814] min-h-screen text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-6">
           <h1 className="text-5xl md:text-7xl font-black uppercase font-oswald tracking-tighter">Contactez <span className="text-blue-500">l'expertise</span></h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">Vous avez un projet ou une urgence ? Notre équipe est prête à vous répondre dans les plus brefs délais.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-8">
            <div className="glass p-10 rounded-[2rem] border border-white/5 space-y-6 shadow-2xl">
               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-600/40 transition-colors">
                     <PhoneCall className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Téléphone Direct</div>
                    <a href="tel:0496325733" className="text-2xl font-black text-white hover:text-blue-400 transition-colors">0496 32 57 33</a>
                  </div>
               </div>

               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-600/40 transition-colors">
                     <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Disponibilité</div>
                    <div className="text-2xl font-black text-white">24H/24 & 7J/7</div>
                  </div>
               </div>

               <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-600/40 transition-colors">
                     <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Zone Couverte</div>
                    <div className="text-2xl font-black text-white">Toute la Belgique</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white/5 backdrop-blur-3xl p-1 md:p-8 rounded-[3rem] border border-white/5 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
