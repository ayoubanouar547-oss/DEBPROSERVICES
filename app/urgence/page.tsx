import { PhoneCall, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Urgence Plombier 24H/24 | DEB PRO SERVICES',
  description: 'Urgence plombier, chauffagiste et débouchage 24/7. Nous intervenons en 30 minutes partout en Belgique. Appelez-nous maintenant.',
};

export default function UrgencePage() {
  return (
    <div className="pt-24">
      <section className="bg-accent text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/20 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 animate-pulse">
            Service de Garde Actif
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Besoin d'une Urgence ?</h1>
          <p className="text-xl mb-10 text-red-100">Nos techniciens de garde interviennent en 30 minutes. Ne perdez pas de temps, appelez-nous directement.</p>
          <div className="flex justify-center">
            <a href="tel:0496325733" className="flex items-center gap-3 bg-white text-accent hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-2xl md:text-3xl transition shadow-2xl">
              <PhoneCall className="w-8 h-8" /> 0496 32 57 33
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
               <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
               <h3 className="font-bold font-heading text-xl mb-2">24h/24 & 7j/7</h3>
               <p className="text-gray-600">Disponibilité totale, dimanches et jours fériés inclus pour toutes vos urgences.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
               <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
               <h3 className="font-bold font-heading text-xl mb-2">Partout en Belgique</h3>
               <p className="text-gray-600">Notre flotte de véhicules sillonnent le pays garantissant un délai d'intervention ultra rapide.</p>
            </div>
            <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50">
               <PhoneCall className="w-12 h-12 text-secondary mx-auto mb-4" />
               <h3 className="font-bold font-heading text-xl mb-2">Assistance Directe</h3>
               <p className="text-gray-600">Un expert prend votre appel en charge et vous guide sur les premiers gestes à adopter.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactForm />
    </div>
  );
}
