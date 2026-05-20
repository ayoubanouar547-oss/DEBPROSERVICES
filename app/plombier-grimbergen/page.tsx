import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plombier Grimbergen : Dépannage Urgence & Fuite | Deb Pro",
  description: "Urgence plomberie à Grimbergen ou Strombeek-Bever ? Deb Pro Services intervient en 30 min pour fuite d'eau, débouchage de canalisation et sanitaires. Devis gratuit.",
  alternates: {
    canonical: "/plombier-grimbergen",
  },
};

export default function PlombierGrimbergenPage() {
  const faqs = [
    {
      question: "Quel est le délai d'intervention pour un plombier à Grimbergen ?",
      answer: "Nous disposons de techniciens basés localement à Grimbergen. En cas d'urgence (grosse fuite ou WC bouché), un plombier est chez vous dans les 30 à 45 minutes suivant votre appel."
    },
    {
      question: "Intervenez-vous également pour du débouchage à Grimbergen ?",
      answer: "Absolument. Nous prenons en charge le débouchage urgent de vos toilettes, éviers, baignoires et canalisations principales à l'aide de furets professionnels et d'hydrocureurs haute pression."
    },
    {
      question: "Le devis est-il gratuit ?",
      answer: "Oui, nous établissons un diagnostic précis et vous soumettons un devis clair et gratuit avant de démarrer les travaux, sans frais cachés."
    },
    {
      question: "Quelles sont vos zones d'intervention autour de Grimbergen ?",
      answer: "Nous intervenons dans toute la commune de Grimbergen, y compris Strombeek-Bever, Beigem et Humbeek, ainsi que dans les communes limitrophes comme Wemmel et Vilvorde."
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
                "name": "Plombier Grimbergen",
                "serviceType": "Plomberie",
                "description": "Urgence dépannage plomberie et débouchage rapide à Grimbergen par un plombier qualifié.",
                "areaServed": {
                  "@type": "City",
                  "name": "Grimbergen"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Deb Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/plombier-grimbergen"
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
            src="https://picsum.photos/seed/grimbergen-plumber-fr/1920/1080"
            alt="Plombier Grimbergen"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-xs font-bold border border-blue-500/30 mb-6 uppercase tracking-widest text-blue-400">
              <MapPin className="w-3 h-3" /> Région de Grimbergen & Strombeek
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Plombier à Grimbergen : Dépannage Rapide 24h/24 & 7j/7
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              Besoin d&apos;un plombier de confiance à Grimbergen, Strombeek-Bever ou Humbeek ? Fuite d&apos;eau à colmater, débouchage urgent ou remplacement de sanitaire : notre équipe d&apos;artisans locaux intervient sous 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-blue-600/20"
              >
                <PhoneCall className="w-5 h-5" /> Urgence Grimbergen : 0496 32 57 33
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Nos interventions de plomberie à Grimbergen
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Une gamme de services complète réalisée par des professionnels qualifiés et à des tarifs compétitifs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="serv-rep-fuite">
              <Droplet className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Recherche de Fuite d&apos;Eau</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Repérage précis et réparation rapide de toutes vos fuites sur canalisations en cuivre, Alpex ou PVC. Nous intervenons rapidement pour stopper les dégâts des eaux.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="serv-deb">
              <Building className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Débouchage Urgent</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                WC bouché, douche ou évier obstrué ? Nos plombiers disposent d&apos;un matériel de pointe pour libérer vos canalisations en un temps record.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="serv-sanit">
              <Wrench className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Installation de Sanitaires</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Remplacement de robinetterie défectueuse, mécanisme de chasse d&apos;eau encastrée, ou installation de nouveau boiler / chauffe-eau électrique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white rounded-t-[3rem] sm:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Steps */}
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-blue-400">Processus d&apos;intervention express</h2>
              <div className="space-y-8">
                {[
                  { title: "Appel d&apos;urgence", desc: "Diagnostic initial par téléphone pour évaluer la situation et planifier l&apos;arrivée du dépanneur." },
                  { title: "Arrivée sous 30 minutes", desc: "Notre plombier le plus proche à Grimbergen se déplace immédiatement à votre adresse." },
                  { title: "Devis gratuit et clair", desc: "Présentation des travaux nécessaires et d&apos;une tarification transparente sans surprise." },
                  { title: "Solution durable", desc: "Réparations soignées, tests de sécurité, et nettoyage rigoureux du chantier." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center font-black flex-shrink-0">
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

            {/* Local points */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-black mb-6 uppercase">Un service de proximité</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Bénéficiez du professionnalisme d&apos;une entreprise belge réputée, directement active dans votre quartier.
              </p>
              <ul className="space-y-5">
                {[
                  "Disponibilité totale : service d&apos;urgence 24h/24 et 7j/7, même jours fériés.",
                  "Artisans plombiers qualifiés maîtrisant parfaitement toutes les infrastructures de Grimbergen.",
                  "Tarifs compétitifs adaptés au marché belge.",
                  "Garantie professionnelle sur l&apos;ensemble de nos interventions."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Local contextual information */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Partout dans l&apos;agglomération de Grimbergen</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nos véhicules de patrouille circulent continuellement dans les différents secteurs de la commune : du pôle commercial et résidentiel de <strong>Strombeek-Bever</strong>, aux villages calmes de <strong>Beigem</strong> et <strong>Humbeek</strong>, sans oublier le cœur historique de <strong>Grimbergen</strong>. Notre réactivité est la clé de votre tranquillité.
            </p>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-4 text-xs font-bold text-slate-500">
            <li><Link href="/loodgieter-grimbergen" className="underline hover:text-blue-600">Loodgieter Grimbergen (NL)</Link></li>
            <li><Link href="/zones-de-services/plomberie/grimbergen" className="underline hover:text-blue-600">Plombier Grimbergen Zone</Link></li>
            <li><Link href="/plomberie" className="underline hover:text-blue-600">Plomberie Belgique</Link></li>
            <li><Link href="/debouchage-canalisation" className="underline hover:text-blue-600">Débouchage urgent</Link></li>
            <li><Link href="/contact" className="underline hover:text-blue-600">Demander un Devis</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Besoin d&apos;une aide immédiate ?</h2>
          <p className="text-slate-600">Remplissez notre formulaire ou joignez-nous directement par téléphone pour un dépannage en moins de 30 minutes.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
