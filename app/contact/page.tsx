import { ContactForm } from '@/components/sections/ContactForm';
import { PageHero } from '@/components/ui/PageHero';

export const metadata = {
  title: 'Plombier en Belgique | Intervention Rapide 24H/24 | Contact',
  description: 'Prenez contact avec DEB PRO SERVICES pour tous vos travaux et urgences en plomberie, chauffage ou débouchage en Belgique.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero 
        title="Contactez"
        titleHighlight="Nous"
        description="Prenez contact avec DEB PRO SERVICES pour tous vos travaux et urgences en plomberie, chauffage ou débouchage en Belgique."
        primaryButtonText=""
        secondaryButtonText=""
      />
      <div className="pb-12 bg-[#000814] relative z-10 border-t border-white/5">
        <ContactForm />
      </div>
    </>
  );
}
