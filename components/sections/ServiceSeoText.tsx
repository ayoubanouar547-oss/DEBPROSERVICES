"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface ServiceSeoProps {
  serviceTitle: string;
  cityName?: string;
}

export function ServiceSeoText({ serviceTitle, cityName }: ServiceSeoProps) {
  const pathname = usePathname();
  const isNl = pathname ? pathname.startsWith("/nl") : false;

  const localizeFr = (text: string) => {
    if (!cityName) return text;
    return text
      .replace(/en Belgique/gi, `à ${cityName}`)
      .replace(/sur le territoire belge/gi, `à ${cityName}`)
      .replace(/de la Belgique/gi, `de ${cityName}`)
      .replace(/à travers toute la Wallonie et la Flandre/gi, `à ${cityName} et ses environs`)
      .replace(/du bâti belge/gi, `du bâti de ${cityName}`)
      .replace(/Belgique/gi, cityName);
  };

  const localizeNl = (text: string) => {
    if (!cityName) return text;
    return text
      .replace(/in België/gi, `in ${cityName}`)
      .replace(/op het Belgische grondgebied/gi, `in ${cityName}`)
      .replace(/van België/gi, `van ${cityName}`)
      .replace(/in heel Wallonië en Vlaanderen/gi, `in ${cityName} en omgeving`)
      .replace(/van het Belgische gebouw/gi, `van het gebouw in ${cityName}`)
      .replace(/België/gi, cityName);
  };

  if (isNl) {
    return (
      <section className="py-20 bg-slate-900 border-t border-white/10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-slate-300">
          <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tight">
            {localizeNl(`Waarom kiezen voor DEB PRO SERVICES voor uw ${serviceTitle} in België ?`)}
          </h2>

          <p className="mb-6 leading-relaxed">
            Als we het hebben over <strong>{serviceTitle.toLowerCase()}</strong> {cityName ? `in ${cityName}` : "op het Belgische grondgebied"}, is reactiesnelheid vaak het allerbelangrijkste criterium.
            {cityName ? (
              <>
                Of u nu in het centrum van <strong>{cityName}</strong> woont of in de omliggende gemeenten, een loodgieterspanne, een verwarmingsprobleem of een kortsluiting kan niet wachten. Daarom heeft DEB PRO SERVICES een netwerk van vakmensen opgebouwd die 24u/24 klaarstaan voor spoedinterventies in <strong>{cityName}</strong>.
              </>
            ) : (
              <>
                Of u nu in Brussel, Antwerpen of Gent bent, een loodgieterspanne of een verstoppingsprobleem kan niet wachten. Daarom heeft DEB PRO SERVICES een netwerk van vakmensen opgebouwd die 24u/24 klaarstaan voor spoedinterventies.
              </>
            )} Onze experts zijn gecertificeerd en respecteren strikt de geldende veiligheidsnormen (AREI voor elektriciteit, CERGA voor gas).
          </p>

          <p className="mb-6 leading-relaxed">
            Naast snelheid hechten wij veel belang aan prijstransparantie. Al te vaak heeft de spoedreparatiesector een slecht imago door misbruik en overfacturatie. Bij ons begint elke interventie voor{" "}
            <strong>{serviceTitle.toLowerCase()}</strong> {cityName ? `in ${cityName}` : ""} met een gratis en gedetailleerde offerte. U kent het bedrag nog voor het eerste gereedschap uit de koffer wordt gehaald. Deze vertrouwensrelatie heeft ons in staat gesteld om meer dan 5.000 klanten {cityName ? `in de regio ${cityName}` : "in heel Wallonië en Vlaanderen"} te binden.
          </p>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6">
            {localizeNl(`Waarom is onze technische expertise en apparatuur de beste keuze voor ${serviceTitle} in België ?`)}
          </h3>
          <p className="mb-6 leading-relaxed">
            Een goede interventie voor <strong>{serviceTitle.toLowerCase()}</strong> vereist twee elementen: een deskundige expert en performante gereedschappen. Wij investeren voortdurend in lekdetectie via thermische camera&apos;s, hogedrukmachines voor de meest complexe ontstoppingen, en HD endoscopische camera&apos;s voor leidingen. Onze technici volgen regelmatig opleidingen om op de hoogte te blijven van de nieuwste innovaties op het gebied van verwarming, zonnepanelen of camerabewaking.
          </p>

          <p className="mb-6 leading-relaxed">
            {cityName ? (
              <>
                Of u nu in een historische wijk van <strong>{cityName}</strong> woont of in een nieuwbouw, wij passen onze technische aanpak aan de specifieke kenmerken van uw woning aan. Onze grondige kennis van de lokale gebouwen stelt ons in staat om te anticiperen op problemen met waterdruk of dakconstructies in <strong>{cityName}</strong>.
              </>
            ) : (
              <>
                Of u nu in een historisch rijhuis in Gent woont of in een modern appartement in Leuven, wij passen onze technische aanpak aan de specifieke kenmerken van uw woning aan. Onze grondige kennis van het Belgische gebouwenbestand stelt ons in staat om te anticiperen op problemen met waterdruk of afvoercontroles die vaak voorkomen in onze regio&apos;s.
              </>
            )}
          </p>

          <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl mt-12">
            <p className="text-lg font-bold text-white mb-4">
              Dringend een technicus nodig {cityName ? `in ${cityName}` : ""} ?
            </p>
            <p className="mb-6">
              Wacht niet tot een klein lek een overstroming wordt. Onze dispatchers staan 7 dagen per week voor u klaar, inclusief zon- en feestdagen. Neem nu contact op met DEB PRO SERVICES voor uw gemoedsrust.
            </p>
            <a
              href="tel:0465996076"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition shadow-lg uppercase tracking-wider"
            >
              Bel ons : 0465 99 60 76
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-slate-900 border-t border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-slate-300">
        <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tight">
          {localizeFr(`Pourquoi choisir DEB PRO SERVICES pour votre ${serviceTitle} en Belgique ?`)}
        </h2>

        <p className="mb-6 leading-relaxed">
          Lorsqu&apos;on parle de <strong>{serviceTitle.toLowerCase()}</strong> {cityName ? `à ${cityName}` : "sur le territoire belge"}, la réactivité est souvent le critère numéro un.
          {cityName ? (
            <>
              Que vous habitiez dans le centre de <strong>{cityName}</strong> ou dans les communes limitrophes, une panne de plomberie, un problème de chauffage ou un court-circuit ne peut pas attendre. C’est pour cette raison que DEB PRO SERVICES a structuré un réseau d&apos;artisans capables de se déplacer en urgence 24h/24 à <strong>{cityName}</strong>.
            </>
          ) : (
            <>
              Que vous soyez à Bruxelles, en Province de Liège ou dans le Hainaut, une panne de plomberie ou un conduit bouché ne peut pas attendre. C’est pour cette raison que DEB PRO SERVICES a structuré un réseau d&apos;artisans capables de se déplacer en urgence 24h/24.
            </>
          )} Nos experts sont certifiés et respectent rigoureusement les normes de sécurité en vigueur (AREI pour l&apos;électricité, CERGA pour le gaz).
        </p>

        <p className="mb-6 leading-relaxed">
          En plus de la rapidité, nous mettons un point d&apos;honneur sur la transparence des prix. Trop souvent, le secteur du dépannage en urgence souffre d&apos;une mauvaise image à cause de surfacturations abusives. Chez nous, chaque intervention de{" "}
          <strong>{serviceTitle.toLowerCase()}</strong> {cityName ? `à ${cityName}` : ""} débute par un devis gratuit et détaillé. Vous connaissez le montant avant que le premier outil ne soit sorti de la mallette. Cette relation de confiance nous a permis de fidéliser plus de 5000 clients {cityName ? `dans la région de ${cityName}` : "à travers toute la Wallonie et la Flandre"}.
        </p>

        <h3 className="text-2xl font-bold text-white mt-12 mb-6">
          {localizeFr(`Quelle est notre expertise technique et quel matériel de pointe utilisons-nous pour ${serviceTitle} en Belgique ?`)}
        </h3>
        <p className="mb-6 leading-relaxed">
          Une bonne intervention de{" "}
          <strong>{serviceTitle.toLowerCase()}</strong> nécessite deux éléments : un cerveau expert et des outils performants. Nous investissons continuellement dans des technologies de détection de fuites par caméra thermique, des caméras endoscopiques haute définition pour l&apos;inspection des canalisations, et des machines à haute pression pour les débouchages les plus complexes. Nos techniciens suivent régulièrement des formations pour rester au fait des dernières innovations en matière de systèmes de chauffage, de panneaux solaires ou de caméras de surveillance.
        </p>

        <p className="mb-6 leading-relaxed">
          {cityName ? (
            <>
              Que vous résidiez dans un quartier historique de <strong>{cityName}</strong> ou dans une construction récente, nous adaptons notre approche technique aux spécificités de votre habitation. Notre connaissance approfondie du bâti local nous permet d&apos;anticiper les contraintes de pression d&apos;eau ou de toiture courantes à <strong>{cityName}</strong>.
            </>
          ) : (
            <>
              Que vous habitiez dans une maison de ville historique à Gand ou dans un appartement moderne à Louvain-la-Neuve, nous adaptons notre approche technique aux spécificités de votre habitation. Notre connaissance profonde du bâti belge nous permet d&apos;anticiper les problèmes de pression d&apos;eau ou les contraintes d&apos;évacuation courantes dans nos régions.
            </>
          )}
        </p>

        <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl mt-12">
          <p className="text-lg font-bold text-white mb-4">
            Besoin d&apos;un dépannage immédiat {cityName ? `à ${cityName}` : ""} ?
          </p>
          <p className="mb-6">
            N&apos;attendez pas qu&apos;une petite fuite devienne une inondation. Nos dispatcheurs sont prêts à vous répondre 7j/7, dimanches et jours fériés inclus. Contactez DEB PRO SERVICES dès maintenant pour une sérénité retrouvée.
          </p>
          <a
            href="tel:0465996076"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition shadow-lg uppercase tracking-wider"
          >
            Appelez-nous : 0465 99 60 76
          </a>
        </div>
      </div>
    </section>
  );
}
