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
            {localizeNl(`Waarom kiezen voor PRO SERVICES voor uw ${serviceTitle} in België ?`)}
          </h2>

          <p className="mb-6 leading-relaxed">
            Als we het hebben over <strong>{serviceTitle.toLowerCase()}</strong> {cityName ? `in ${cityName}` : "op het Belgische grondgebied"}, is reactiesnelheid vaak het allerbelangrijkste criterium.
            {cityName ? (
              <>
                Of u nu in het centrum van <strong>{cityName}</strong> woont of in de omliggende gemeenten, een loodgieterspanne, een verwarmingsprobleem of een kortsluiting kan niet wachten. Daarom heeft PRO SERVICES een netwerk van vakmensen opgebouwd die 24u/24 klaarstaan voor spoedinterventies in <strong>{cityName}</strong>.
              </>
            ) : (
              <>
                Of u nu in Brussel, Antwerpen of Gent bent, een loodgieterspanne of een verstoppingsprobleem kan niet wachten. Daarom heeft PRO SERVICES een netwerk van vakmensen opgebouwd die 24u/24 klaarstaan voor spoedinterventies.
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

          <div className="my-8 pl-4 border-l-2 border-blue-500/30 space-y-6">
            <div>
              <h5 className="text-lg font-semibold text-white/90">
                Stap 1: Grondige diagnose en inspectie van de installatie
              </h5>
              <h6 className="text-sm font-medium text-blue-400 mt-1">
                Volledige analyse met thermische camera, endoscopische camera of precisie-multimeter
              </h6>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Voorafgaand aan eventuele herstellingswerken voeren onze experts een reeks metingen en een visuele inspectie uit om met zekerheid de oorzaak van de storing of de staat van de circuits te diagnosticeren.
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-white/90">
                Stap 2: Doelgerichte herstelling en onmiddellijke conformiteit
              </h5>
              <h6 className="text-sm font-medium text-blue-400 mt-1">
                Interventie volgens gecertificeerde protocollen (geldende CERGA- en AREI-veiligheidsnormen)
              </h6>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Wij vervangen de defecte onderdelen door gecertificeerde originele componenten, wat garant staat voor een duurzame, ecologische en volledig aan de Belgische regelgeving conforme werking.
              </p>
            </div>
          </div>

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

          <div className="mt-8 space-y-6 text-slate-300">
            <p className="leading-relaxed">
              Ons bedrijf streeft resoluut naar een onberispelijke service met respect voor het milieu. Daarom geven wij de voorkeur aan moderne en ecologische ontstoppings- en reparatietechnieken, waarbij het gebruik van schadelijke chemicaliën tot een minimum wordt beperkt. Bovendien zijn al onze interventies gedekt door een uitgebreide beroepsaansprakelijkheidsverzekering, wat u absolute gemoedsrust garandeert bij eventuele onvoorziene omstandigheden.
            </p>
            <p className="leading-relaxed">
              De sleutel tot ons succes ligt in de voortdurende bijscholing van onze deskundige loodgieters, elektriciens en verwarmingsmonteurs. Dankzij regelmatige workshops beheersen zij de nieuwste generatie milieuvriendelijke verwarmingssystemen, de recentste Belgische elektriciteitsnormen en de meest geavanceerde technologische hulpmiddelen op de markt. Of het nu gaat om de installatie van een efficiënte warmtepomp, de volledige renovatie van een verdeelkast of een eenvoudige gootsteenherstelling, wij garanderen een uitvoering met chirurgische precisie.
            </p>
            <p className="leading-relaxed">
              Tot slot staat onze klantenservice bekend om haar reactiesnelheid en luisterend oor. Wij nemen de tijd om uw aanvraag te analyseren en de verschillende reparatie- of installatieopties die binnen uw budget passen in detail uit te leggen. Bij PRO SERVICES geloven we dat transparantie en communicatie essentieel zijn om een duurzame vertrouwensrelatie op te bouwen met elk van onze Belgische klanten.
            </p>
          </div>

          <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl mt-12">
            <p className="text-lg font-bold text-white mb-4">
              Dringend een technicus nodig {cityName ? `in ${cityName}` : ""} ?
            </p>
            <p className="mb-6">
              Wacht niet tot een klein lek een overstroming wordt. Onze dispatchers staan 7 dagen per week voor u klaar, inclusief zon- en feestdagen. Neem nu contact op met PRO SERVICES voor uw gemoedsrust.
            </p>
            <a
              href="tel:0498 35 25 88"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition shadow-lg uppercase tracking-wider"
            >
              Bel ons : 0498 35 25 88
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
          {localizeFr(`Pourquoi choisir PRO SERVICES pour votre ${serviceTitle} en Belgique ?`)}
        </h2>

        <p className="mb-6 leading-relaxed">
          Lorsqu&apos;on parle de <strong>{serviceTitle.toLowerCase()}</strong> {cityName ? `à ${cityName}` : "sur le territoire belge"}, la réactivité est souvent le critère numéro un.
          {cityName ? (
            <>
              Que vous habitiez dans le centre de <strong>{cityName}</strong> ou dans les communes limitrophes, une panne de plomberie, un problème de chauffage ou un court-circuit ne peut pas attendre. C’est pour cette raison que PRO SERVICES a structuré un réseau d&apos;artisans capables de se déplacer en urgence 24h/24 à <strong>{cityName}</strong>.
            </>
          ) : (
            <>
              Que vous soyez à Bruxelles, en Province de Liège ou dans le Hainaut, une panne de plomberie ou un conduit bouché ne peut pas attendre. C’est pour cette raison que PRO SERVICES a structuré un réseau d&apos;artisans capables de se déplacer en urgence 24h/24.
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

        <div className="my-8 pl-4 border-l-2 border-blue-500/30 space-y-6">
          <div>
            <h5 className="text-lg font-semibold text-white/90">
              Étape 1 : Diagnostic approfondi et inspection de l&apos;installation
            </h5>
            <h6 className="text-sm font-medium text-blue-400 mt-1">
              Analyse complète par caméra thermique, endoscopique ou multimètre de précision
            </h6>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Avant toute action corrective, nos experts réalisent une série de mesures et une inspection visuelle ou par caméra pour diagnostiquer avec certitude la cause de la panne ou l&apos;état des circuits.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white/90">
              Étape 2 : Réparation ciblée et mise en conformité immédiate
            </h5>
            <h6 className="text-sm font-medium text-blue-400 mt-1">
              Intervention selon les protocoles certifiés (normes de sécurité CERGA et AREI en vigueur)
            </h6>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
              Nous procédons au remplacement des pièces défectueuses par des composants certifiés d&apos;origine, garantissant un fonctionnement durable, écologique et conforme à l&apos;ensemble de la réglementation belge.
            </p>
          </div>
        </div>

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

        <div className="mt-8 space-y-6 text-slate-300">
          <p className="leading-relaxed">
            Notre entreprise s&apos;engage fermement à proposer un service irréprochable qui respecte l&apos;environnement. Pour cela, nous privilégions des techniques modernes et écologiques de débouchage et de réparation, limitant l&apos;utilisation de produits chimiques nocifs. De plus, toutes nos interventions sont couvertes par une assurance responsabilité civile professionnelle complète, vous garantissant une tranquillité absolue face aux éventuels imprévus.
          </p>
          <p className="leading-relaxed">
            La clé de notre réussite réside dans la formation continue de nos experts plombiers, électriciens et chauffagistes. Grâce à des ateliers réguliers, ils maîtrisent les systèmes de chauffage écologiques de dernière génération, les nouvelles normes électriques belges et les outils technologiques les plus avancés du marché. Qu&apos;il s&apos;agisse de l&apos;installation d&apos;une pompe à chaleur performante, de la rénovation intégrale d&apos;un tableau électrique ou d&apos;un simple dépannage d&apos;évier, nous vous assurons une exécution d&apos;une précision chirurgicale.
          </p>
          <p className="leading-relaxed">
            Enfin, notre service client est reconnu pour sa réactivité et son écoute attentive. Nous prenons le temps d&apos;analyser votre demande et de vous expliquer en détail les différentes options de réparation ou d&apos;installation adaptées à votre budget. Chez PRO SERVICES, nous pensons que la transparence et la communication sont indispensables pour bâtir une relation de confiance durable avec chacun de nos clients belges.
          </p>
        </div>

        <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-3xl mt-12">
          <p className="text-lg font-bold text-white mb-4">
            Besoin d&apos;un dépannage immédiat {cityName ? `à ${cityName}` : ""} ?
          </p>
          <p className="mb-6">
            N&apos;attendez pas qu&apos;une petite fuite devienne une inondation. Nos dispatcheurs sont prêts à vous répondre 7j/7, dimanches et jours fériés inclus. Contactez PRO SERVICES dès maintenant pour une sérénité retrouvée.
          </p>
          <a
            href="tel:0498 35 25 88"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-slate-100 transition shadow-lg uppercase tracking-wider"
          >
            Appelez-nous : 0498 35 25 88
          </a>
        </div>
      </div>
    </section>
  );
}
