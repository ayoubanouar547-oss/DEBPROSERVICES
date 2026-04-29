import { ContactForm } from '@/components/sections/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demande de devis gratuit | DEB PRO SERVICES ☎ Expert Belgique',
  description: 'Obtenez un devis gratuit et sans engagement pour vos travaux de plomberie, chauffage, électricité et débouchage. Transparence totale et prix justes.',
  keywords: 'devis gratuit plombier, estimation prix débouchage, prix chauffagiste Belgique, devis électricité rapide',
  alternates: {
    canonical: '/devis',
  },
  openGraph: {
    title: 'Obtenez votre devis gratuit | DEB PRO SERVICES',
    description: 'Estimation gratuite pour tous vos travaux de dépannage et rénovation en Belgique.',
    url: 'https://debservices.canalrose.be/devis',
  }
};

export default function DevisPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="text-center py-8">
        <h1 className="text-4xl font-heading font-bold text-dark">Devis 100% Gratuit</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">Un de nos experts examinera votre demande et vous répondra très rapidement avec une estimation précise, claire et sans mauvaise surprise.</p>
      </div>
      <ContactForm />
    </div>
  );
}
