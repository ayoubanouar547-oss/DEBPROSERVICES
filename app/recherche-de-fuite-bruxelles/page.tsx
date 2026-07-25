import { Metadata } from "next";
import { PhoneCall, CheckCircle, Search, Droplet, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recherche de Fuite Bruxelles | Détection Sans Casse | Deb Pro",
  description: "Fuite d'eau invisible à Bruxelles ? Deb Pro Services intervient pour la détection non destructive. Murs humides, compteur qui tourne. 0492 47 92 01.",
  alternates: {
    canonical: "/recherche-de-fuite-bruxelles",
  },
};

export default function RechercheFuiteBruxellesPage() {
  const faqs = [
    {
      question: "Comment gérez-vous une fuite sur une colonne d'évacuation dans un immeuble à Ixelles ?",
      answer: "Les bâtiments à plafonds hauts et les colonnes anciennes nécessitent souvent une inspection par caméra endoscopique. Nous isolons la section concernée pour intervenir précisément, souvent en coordination avec le syndic de copropriété pour minimiser l'impact sur les autres résidents."
    },
    {
      question: "Le rapport de recherche de fuite est-il fourni pour mon assurance locataire à Bruxelles ?",
      answer: "Absolument. Lors de chaque détection formelle, nous délivrons un constat détaillé des causes et des dommages. Les compagnies d'assurance belges exigent fréquemment ce rapport technique pour déclencher la prise en charge des travaux de remise en état."
    },
    {
      question: "Quelles techniques utilisez-vous sans détruire les moulures d'une maison de maître à Etterbeek ?",
      answer: "Nous misons sur la technologie non destructive : caméras thermiques pour visualiser les écarts de température sous les surfaces, et détecteurs électro-acoustiques pour capter la fréquence d'une fuite sous pression, le tout sans endommager vos plafonds ou parquets anciens."
    },
    {
      question: "Dans quel délai pouvez-vous identifier une fuite active à Schaerbeek ?",
      answer: "Face à une urgence réelle (comme une infiltration sévère menaçant les circuits électriques), nous pouvons mobiliser un spécialiste très rapidement. En situation standard avec un compteur qui tourne continuellement, l'intervention est planifiée dans la journée."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Recherche de Fuite Bruxelles",
                "serviceType": "Plomberie - Détection de fuite",
                "description": "Recherche de fuite d'eau par techniques non destructives à Bruxelles (caméra thermique, gaz traceur, acoustique).",
                "areaServed": {
                  "@type": "City",
                  "name": "Bruxelles"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Deb Pro Service",
                  "telephone": "+32492479201",
                  "url": "https://debservices.canalrose.be/recherche-de-fuite-bruxelles"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 bg-slate-900">
          <Image
            src="https://picsum.photos/seed/bruxelles-leak/1920/1080"
            alt="Détection de fuite d'eau Bruxelles"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-600/20 backdrop-blur-md rounded-full text-xs font-bold border border-cyan-500/30 mb-6 uppercase tracking-widest text-cyan-400">
              <MapPin className="w-3 h-3" /> Bruxelles & Communes Limitrophes
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Recherche de Fuite d'Eau à Bruxelles : Détection Sans Casse
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              Face à une infiltration d'eau ou un compteur qui tourne anormalement, une intervention précise est cruciale. Les bâtiments bruxellois nécessitent une approche ciblée pour localiser le sinistre sans détruire vos murs. Deb Pro Services mobilise des techniciens équipés de technologies thermiques et acoustiques sur toute la capitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0492479201"
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-cyan-600/20"
              >
                <PhoneCall className="w-5 h-5" /> 0492 47 92 01
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Situations Fréquentes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Situations fréquentes à Bruxelles pour la détection de fuite
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Les infrastructures anciennes de la Région de Bruxelles-Capitale présentent des défis d'étanchéité spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1">
              <Droplet className="w-10 h-10 text-cyan-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Le compteur qui tourne sans raison</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vous avez fermé tous les robinets de votre appartement mais le compteur continue de défiler. C'est l'indicateur principal d'une grave fuite encastrée ou souterraine nécessitant une détection urgente.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1">
              <Search className="w-10 h-10 text-cyan-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Infiltration sur murs partagés</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Apparition d'auréoles jaunâtres ou de champignons sur des murs mitoyens. Très courant dans les maisons mitoyennes typiquement bruxelloises, où la porosité cache longtemps l'origine réelle de l'eau.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1">
              <ShieldCheck className="w-10 h-10 text-cyan-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Chute de pression de la chaudière</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                L'obligation de regonfler sans cesse la pression de votre chauffage central indique une micro-fuite sur le circuit fermé. La détection thermique se révèle efficace sur les tuyaux encastrés sous les planchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process & Technique */}
      <section className="py-20 bg-slate-900 text-white rounded-t-[3rem] sm:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* 4 Steps */}
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-cyan-400">Comment se déroule l'intervention</h2>
              <div className="space-y-8">
                {[
                  { title: "Sécurisation et diagnostic initial", desc: "Analyse visuelle des dégâts, coupure d'arrivée d'eau globale si nécessaire, et préparation des zones d'inspection (notamment les parois humides)." },
                  { title: "Détection par technologie ciblée", desc: "Mise en œuvre d'appareils non destructifs : caméra endoscopique pour les gaines et conduits, capteurs acoustiques ou caméra thermique infrarouge." },
                  { title: "Traçage exact du point de rupture", desc: "Localisation au centimètre près de la fissure ou de la déconnexion, évitant ainsi d'exposer de grandes surfaces de carrelage." },
                  { title: "Remise d'un rapport technique détaillé", desc: "Création d'un document circonstancié exigé par votre assurance reprenant les méthodes utilisées, la source, et les propositions de réparations." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-black flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Technical */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-black mb-6 uppercase">Pourquoi cette intervention demande une approche précise</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Ouvrir un mur au hasard équivaut à causer un sinistre additionnel. Voici pourquoi la spécialisation est indispensable en milieu urbain dense.
              </p>
              <ul className="space-y-5">
                {[
                  "Minimiser l'impact destructeur : Remplacer un seul carreau de faïence au lieu de détruire une salle de bain entière.",
                  "Complexité des réseaux anciens : Le mélange plomb, acier et PVC moderne déroute souvent les équipements amateurs.",
                  "Litiges d'assurances évités : Un rapport professionnel formel accélère l'accord du syndic et de votre assurance.",
                  "Risques de moisissures structurelles : Trouver l'origine rapidement évite l'altération profonde du plâtre et des ossatures en bois."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 p-6 bg-cyan-900/30 rounded-2xl border border-cyan-500/20">
                <Link href="/contact" className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
                  Demander un diagnostic spécifique <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Relatifs & Nearby Areas */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Complément d'intervention</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              La localisation de l'infiltration d'eau n'est que la première phase de résolution du problème. Une fois le diagnostic établi, notre pôle de plomberie générale prend immédiatement le relais sur demande pour colmater, gainer ou remplacer la tuyauterie endommagée. De même, nos experts chauffagistes interviennent si la déperdition d'eau concerne exclusivement le réseau de chauffe et vos radiateurs.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Présence de proximité</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Basés opérationnellement au cœur de la capitale, nous déployons rapidement notre matériel de détection non destructive dans le centre de <strong>Bruxelles</strong> (1000). Notre zone d'intervention fluide et de proximité inclut également les artères adjacentes d'<strong>Ixelles</strong>, d'<strong>Etterbeek</strong>, de <strong>Schaerbeek</strong> et le sud vers <strong>Uccle</strong>. L'ancrage local favorise notre temps de réponse lors d'un dégât des eaux urgent.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Linking Links */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-4 text-xs font-bold text-slate-500">
            <li><Link href="/plomberie/depannage" className="underline hover:text-cyan-600">Réparation urgence plomberie (Page Service)</Link></li>
            <li><Link href="/chauffage" className="underline hover:text-cyan-600">Dépannage sur chaudière (Page Chauffage)</Link></li>
            <li><Link href="/debouchage-canalisation" className="underline hover:text-cyan-600">Débouchage à Bruxelles (Service local)</Link></li>
            <li><Link href="/devis" className="underline hover:text-cyan-600">Devis et Tarification Intervention (Formulaire)</Link></li>
            <li><Link href="/" className="underline hover:text-cyan-600">Deb Pro Services Belgique (Accueil)</Link></li>
          </ul>
        </div>
      </section>

      <FAQ customFaqs={faqs} />

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Stoppez les dégâts matériels</h2>
          <p className="text-slate-600">Contactez-nous directement par téléphone la localisation rapide d'une fuite encastrée ou demandez un devis pour une détection programmée.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
