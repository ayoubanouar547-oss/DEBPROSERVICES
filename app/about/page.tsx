import { ShieldCheck, History, Award } from 'lucide-react';
import { WhyUs } from '@/components/sections/WhyUs';

export const metadata = {
  title: 'À Propos de Nous | DEB PRO SERVICES',
  description: 'Découvrez DEB PRO SERVICES, votre expert belge en plomberie, chauffage, et débouchage avec plus de 15 ans d\'expérience.',
};

export default function AboutPage() {
  return (
    <div className="pt-48 pb-24 bg-[#000814] min-h-screen text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 px-6 py-2 rounded-full text-xs font-black tracking-[0.4em] uppercase text-blue-400">
               Qui sommes-nous ?
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-white uppercase font-oswald tracking-tighter leading-none">
              L'Artisanat <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 italic">de Prestige</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              DEB PRO SERVICES n'est pas seulement une entreprise de dépannage. C'est le fruit de 15 années d'expertise dans les métiers de la plomberie, du chauffage et de la rénovation en Belgique. Nous plaçons la technicité et la satisfaction client au cœur de chaque intervention.
            </p>
             <p className="text-lg text-slate-500 leading-relaxed italic border-l-4 border-blue-600 pl-6">
              "Nous ne nous contentons pas de réparer : nous sécurisons votre foyer avec des solutions durables et des techniciens passionnés."
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-3 font-black text-blue-400 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-2xl uppercase tracking-widest text-[10px]">
                 <History className="w-5 h-5" /> 15 Ans d'Expérience
              </div>
              <div className="flex items-center gap-3 font-black text-green-400 bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-2xl uppercase tracking-widest text-[10px]">
                 <Award className="w-5 h-5" /> Agréments Certifiés
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/10 group-hover:border-blue-500/50 transition-all duration-700">
              <img src="https://picsum.photos/seed/aboutdebpro/1000/1250" alt="Notre équipe en intervention" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white/5 backdrop-blur-3xl p-8 rounded-[2rem] shadow-2xl border border-white/10 flex items-center gap-6 animate-float">
              <div className="bg-blue-600/20 text-blue-400 border border-blue-500/30 p-4 rounded-2xl shadow-inner"><ShieldCheck className="w-10 h-10" /></div>
              <div>
                <p className="font-black uppercase tracking-[0.2em] text-sm text-white mb-1">Garantie Totale</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Sérénité Assurée 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyUs />

      <div className="py-32 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-blue-400 font-black tracking-widest uppercase mb-6 text-sm">Chiffres Clés</h2>
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="space-y-2">
                 <div className="text-6xl font-black font-oswald text-white tracking-widest">5K+</div>
                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Interventions/An</div>
              </div>
              <div className="space-y-2">
                 <div className="text-6xl font-black font-oswald text-white tracking-widest">24H</div>
                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Disponibilité</div>
              </div>
              <div className="space-y-2">
                 <div className="text-6xl font-black font-oswald text-white tracking-widest">30m</div>
                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Arrivée Max</div>
              </div>
              <div className="space-y-2">
                 <div className="text-6xl font-black font-oswald text-white tracking-widest">100%</div>
                 <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Agrément Pro</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
