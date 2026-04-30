"use client";

import { motion } from "motion/react";

interface ServiceSeoProps {
  serviceTitle: string;
}

export function ServiceSeoText({ serviceTitle }: ServiceSeoProps) {
  return (
    <section className="py-20 bg-slate-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-slate-300">
        <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tight">
          Pourquoi choisir DEB PRO SERVICES pour votre {serviceTitle} en
          Belgique ?
        </h2>

        <p className="mb-6 leading-relaxed">
          Lorsqu'on parle de <strong>{serviceTitle.toLowerCase()}</strong> sur
          le territoire belge, la réactivité est souvent le critère numéro un.
          Que vous soyez à Bruxelles, en Province de Liège ou dans le Hainaut,
          une panne de plomberie ou un conduit bouché ne peut pas attendre.
          C’est pour cette raison que DEB PRO SERVICES a structuré un réseau
          d'artisans capables de se déplacer en urgence 24h/24. Nos experts ne
          sont pas seulement rapides; ils sont certifiés et respectent
          rigoureusement les normes de sécurité en vigueur en Belgique (AREI
          pour l'électricité, CERGA pour le gaz).
        </p>

        <p className="mb-6 leading-relaxed">
          En plus de la rapidité, nous mettons un point d'honneur sur la
          transparence des prix. Trop souvent, le secteur du dépannage en
          urgence souffre d'une mauvaise image à cause de surfacturations
          abusives. Chez nous, chaque intervention de{" "}
          <strong>{serviceTitle.toLowerCase()}</strong> débute par un devis
          gratuit et détaillé. Vous connaissez le montant avant que le premier
          outil ne soit sorti de la mallette. Cette relation de confiance nous a
          permis de fidéliser plus de 5000 clients à travers toute la Wallonie
          et la Flandre.
        </p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-6">
          Expertise technique et matériel de pointe
        </h3>
        <p className="mb-6 leading-relaxed">
          Une bonne intervention de{" "}
          <strong>{serviceTitle.toLowerCase()}</strong> nécessite deux éléments
          : un cerveau expert et des outils performants. Nous investissons
          continuellement dans des technologies de détection de fuites par
          caméra thermique, des caméras endoscopiques haute définition pour
          l'inspection des canalisations, et des machines à haute pression pour
          les débouchages les plus complexes. Nos techniciens suivent
          régulièrement des formations pour rester au fait des dernières
          innovations en matière de systèmes de chauffage à condensation, de
          pompes à chaleur ou de domotique électrique.
        </p>

        <p className="mb-6 leading-relaxed">
          Que vous habitiez dans une maison de ville historique à Gand ou dans
          un appartement moderne à Louvain-la-Neuve, nous adaptons notre
          approche technique aux spécificités de votre habitation. Notre
          connaissance profonde du bâti belge nous permet d'anticiper les
          problèmes de pression d'eau ou les contraintes d'évacuation courantes
          dans nos régions.
        </p>

        <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl mt-12">
          <p className="text-lg font-bold text-white mb-4">
            Besoin d'un dépannage immédiat ?
          </p>
          <p className="mb-6">
            N'attendez pas qu'une petite fuite devienne une inondation. Nos
            dispatcheurs sont prêts à vous répondre 7j/7, dimanches et jours
            fériés inclus. Contactez DEB PRO SERVICES dès maintenant pour une
            sérénité retrouvée.
          </p>
          <a
            href="tel:0496325733"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition shadow-lg uppercase tracking-wider"
          >
            Appelez-nous : 0496 32 57 33
          </a>
        </div>
      </div>
    </section>
  );
}
