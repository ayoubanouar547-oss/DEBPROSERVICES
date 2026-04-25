import { PageHero } from '@/components/ui/PageHero';
import { WhyUs } from '@/components/sections/WhyUs';

export const metadata = {
  title: 'Plombier en Belgique | Intervention Rapide 24H/24 | À Propos',
  description: 'Découvrez DEB PRO SERVICES, votre expert belge en plomberie, chauffage, et débouchage avec plus de 15 ans d\'expérience.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="L'Artisanat au service de"
        titleHighlight="votre sérénité"
        description="DEB PRO SERVICES est une entreprise belge spécialisée dans la plomberie, le débouchage, le chauffage, le gaz, l'électricité et la vidange de fosses septiques. Notre mission : résoudre vos problèmes rapidement, à des tarifs justes, avec des techniciens agréés et du matériel professionnel."
        primaryButtonText="Contactez-nous"
        primaryButtonHref="/devis"
        secondaryButtonText="Découvrir nos services"
        secondaryButtonHref="/#services"
        imageSrc="https://picsum.photos/seed/aboutus/1000/800"
      />
      <div className="relative z-10 text-slate-300">
        <WhyUs />
      </div>
    </>
  );
}
