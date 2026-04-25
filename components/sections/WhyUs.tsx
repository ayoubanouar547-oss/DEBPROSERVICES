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
    <section className="py-24 relative z-10 border-t border-white/10 text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-sm">Pourquoi Choisir DEB PRO SERVICES ?</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-4">
            L'Excellence au Service de Votre Confort
          </h3>
          <p className="text-slate-400 text-lg">
            Nous faisons la différence grâce à notre réactivité, notre transparence, et notre maîtrise technique sur tout type de chantier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-blue-600/10 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 border border-blue-500/30">
                  <Icon className="w-7 h-7 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold font-heading text-white mb-3">{reason.title}</h4>
                <p className="text-slate-400 leading-relaxed text-sm">
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
