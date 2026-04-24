import { PhoneCall, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/sections/ContactForm';
import { PageHero } from '@/components/ui/PageHero';

export const metadata = {
  title: 'Expert Plombier en Belgique | Intervention Rapide 24H/24 | Urgence',
  description: 'Urgence plombier, chauffagiste et débouchage 24/7. Nous intervenons en 30 minutes partout en Belgique. Appelez-nous maintenant.',
};

export default function UrgencePage() {
  return (
    <>
      <PageHero 
        title="Besoin d'une"
        titleHighlight="Urgence ?"
        description="Nos techniciens de garde interviennent en 30 minutes. Ne perdez pas de temps, appelez-nous directement. Service de Garde Actif 24h/24."
        primaryButtonText="0470 00 00 00"
        primaryButtonHref="tel:0470000000"
        secondaryButtonText=""
        badges={["✓ Service de garde", "✓ Intervention < 30min", "✓ 24H/24 - 7J/7"]}
      />

      <section className="py-20 relative z-10 bg-[#000814] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-white">
               <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
               <h3 className="font-bold font-heading text-xl mb-2">24h/24 & 7j/7</h3>
               <p className="text-slate-300">Disponibilité totale, dimanches et jours fériés inclus pour toutes vos urgences.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-white">
               <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
               <h3 className="font-bold font-heading text-xl mb-2">Partout en Belgique</h3>
               <p className="text-slate-300">Notre flotte de véhicules sillonnent le pays garantissant un délai d'intervention ultra rapide.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 text-white">
               <PhoneCall className="w-12 h-12 text-blue-400 mx-auto mb-4" />
               <h3 className="font-bold font-heading text-xl mb-2">Assistance Directe</h3>
               <p className="text-slate-300">Un expert prend votre appel en charge et vous guide sur les premiers gestes à adopter.</p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="relative z-10 bg-[#000814] pb-12">
        <ContactForm />
      </div>
    </>
  );
}
