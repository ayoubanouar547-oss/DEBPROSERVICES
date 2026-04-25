import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Contactez-nous | DEB PRO SERVICES',
  description: 'Prenez contact avec DEB PRO SERVICES pour tous vos travaux et urgences en plomberie, chauffage ou débouchage en Belgique.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      <ContactForm />
    </div>
  );
}
