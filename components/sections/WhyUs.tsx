import { Shield, Clock, ThumbsUp, Wrench, BadgeCheck, FileText } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Disponibilité 24H/24",
      desc: "Urgence ou planifié, nos techniciens sont disponibles à toute heure, 7 jours sur 7, partout en Belgique."
    },
    {
      icon: BadgeCheck,
      title: "Techniciens Agréés",
      desc: "Tous nos professionnels sont certifiés, assurés et formés aux dernières techniques et normes belges."
    },
    {
      icon: FileText,
      title: "Prix Transparents",
      desc: "Devis gratuit et sans surprise. Nous vous communiquons le prix avant toute intervention. Aucun frais caché."
    }
  ];

  return (
    <section className="py-32 relative z-10 border-t border-white/5 text-white overflow-hidden bg-[#00040a]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-blue-500 font-black tracking-[0.4em] uppercase mb-4 text-xs">Innovation & Fiabilité</h2>
          <h3 className="text-4xl md:text-7xl font-black mb-8 font-oswald uppercase tracking-tighter leading-none">
            L'Excellence au Service <br/><span className="text-blue-500">de Votre Confort</span>
          </h3>
          <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed">
            Nous faisons la différence grâce à notre réactivité foudroyante, notre totale transparence, et notre maîtrise technique absolue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 p-12 rounded-[3rem] hover:bg-white/[0.05] transition-all duration-500 group shadow-2xl">
                <div className="w-20 h-20 rounded-3xl bg-blue-600/10 flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                  <Icon className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-black font-oswald text-white mb-4 uppercase tracking-widest">{reason.title}</h4>
                <p className="text-slate-400 leading-relaxed text-base font-medium">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
