import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Expert Plombier en Belgique | Intervention Rapide 24H/24 | Devis Gratuit',
  description: 'Obtenez un devis gratuit et sans engagement pour vos travaux de plomberie, chauffage, électricité et débouchage.',
};

export default function DevisPage() {
  return (
    <>
      <PageHero 
        title="Devis 100%" 
        titleHighlight="Gratuit" 
        description="Un de nos experts examinera votre demande et vous répondra très rapidement avec une estimation précise, claire et sans mauvaise surprise."
        primaryButtonText=""
        secondaryButtonText=""
      />
      <div className="pb-12 bg-[#000814]">
        <ContactForm />
      </div>
    </>
  );
}
