import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chauffagiste Grimbergen : Entretien Chaudière & Dépannage | Deb Pro",
  description: "Recherchez-vous un chauffagiste agréé à Grimbergen, Strombeek-Bever ou Beigem ? Dépannage chaudière d'urgence 24/7, entretien obligatoire et installation par Deb Pro.",
  alternates: {
    canonical: "/chauffagiste-grimbergen",
  },
};

export default function ChauffagisteGrimbergenPage() {
  const faqs = [
    {
      question: "L'entretien annuel de la chaudière est-il obligatoire à Grimbergen ?",
      answer: "Oui, la législation de la région Flamande (dont Grimbergen fait partie) impose un contrôle/entretien périodique obligatoire tous les 2 ans pour les chaudières à gaz et tous les ans pour les chaudières au mazout, effectué par un technicien agréé."
    },
    {
      question: "Combien coûte le dépannage d'une chaudière en panne à Grimbergen ?",
      answer: "Un diagnostic initial est d'abord posé. Le technicien vous propose alors un devis transparent basé sur les réparations ou les pièces à changer. Nos tarifs sont très compétitifs et communiqués à l'avance."
    },
    {
      question: "Pouvez-vous intervenir en urgence pour une panne totale de chauffage ?",
      answer: "Oui, nous assurons un service d'urgence 24h/24 et 7j/7. Un de nos chauffagistes intervient sous 30 à 45 minutes pour restaurer votre chauffage pour des raisons de confort et de sécurité."
    },
    {
      question: "Quelles marques de chaudières réparez-vous ?",
      answer: "Nos chauffagistes qualifiés sont agréés pour toutes les grandes marques du marché belge : Vaillant, Bulex, Viessmann, Junkers, Bosch, Buderus ou De Dietrich."
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
                "name": "Chauffagiste Grimbergen",
                "serviceType": "Chauffage",
                "description": "Chauffagiste agréé à Grimbergen pour entretien chaudière gaz/mazout, réparation d'urgence de panne et installation de nouveau système à condensation.",
                "areaServed": {
                  "@type": "City",
                  "name": "Grimbergen"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Deb Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/chauffagiste-grimbergen"
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
            src="https://picsum.photos/seed/grimbergen-heating/1920/1080"
            alt="Chauffagiste Grimbergen"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-xs font-bold border border-blue-500/30 mb-6 uppercase tracking-widest text-blue-400">
              <MapPin className="w-3 h-3" /> Chauffage & Entretien Grimbergen
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Chauffagiste à Grimbergen : Entretien Obligatoire & Dépannage Urgent
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              Deb Pro Services propose des interventions rapides par des chauffagistes agréés à Grimbergen, Strombeek-Bever, Beigem et Humbeek. Dépannage chaudière 24/7, nettoyage, entretien obligatoire et installation optimale de chauffage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-blue-600/20"
              >
                <PhoneCall className="w-5 h-5" /> Urgence Chauffage : 0496 32 57 33
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
              Prestations Chauffage à Grimbergen
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nous gérons l&apos;ensemble de vos besoins en chauffage, chaudière et régulation thermique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="serv-rep-chaud">
              <Wrench className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Dépannage de Chaudière</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Votre chaudière affiche un code d&apos;erreur, siffle ou ne produit plus d&apos;eau chaude ? Nos dépanneurs rapides localisent le composant défaillant et le remplacent.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="serv-ent-chaud">
              <CheckCircle className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Entretien Obligatoire (Onderhoud)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nettoyage complet du corps de chauffe, réglage de combustion du brûleur, et délivrance des attestations légales de conformité environnementale obligatoires.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="serv-inst-chaud">
              <Building className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Nouvelle Installation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Remplacement de votre ancienne chaudière énergivore par une chaudière à condensation gaz haute performance de marque Vaillant ou Viessmann, plus économique.
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
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-blue-400">Intervention express en chauffage</h2>
              <div className="space-y-8">
                {[
                  { title: "Appel & Conseil", desc: "Analyse sommaire des symptômes par téléphone (baisse de pression, voyants) et transmission des conseils de sécurité." },
                  { title: "Déplacement Rapide", desc: "Un de nos chauffagistes dans la périphérie bruxelloise et le Brabant Flamand est envoyé vers votre adresse." },
                  { title: "Diagnostic Précis", desc: "Vérification minutieuse des sondes, pompes et vannes pour établir une tarification de réparation transparente." },
                  { title: "Remise en Service", desc: "Changement de la pièce, purge des radiateurs, contrôle de la consigne et mise en service réussie." }
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
              <h3 className="text-2xl font-black mb-6 uppercase">Votre chauffagiste agréé</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Une équipe technique agréée qui suit régulièrement des formations auprès des constructeurs majeurs.
              </p>
              <ul className="space-y-5">
                {[
                  "Disponibilité absolue : Service de garde 24h/24 pour parer aux pannes hivernales les plus rudes.",
                  "Habilitation légale : Remise des justificatifs de conformité valides pour votre propriétaire ou assureur.",
                  "Écoute & Conseil : Recommandation d'optimisation (purge, thermostats connectés) pour alléger votre facture.",
                  "Garantie professionnelle d'un an sur toutes les pièces d'origine remplacées."
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

      {/* Local regional details */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Activement présents à Grimbergen</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Que votre domicile ou commerce soit installé près de la place Saint-Servais à <strong>Grimbergen</strong>, dans les quartiers commerçants de <strong>Strombeek-Bever</strong>, ou dans les secteurs résidentiels de <strong>Beigem</strong> et <strong>Humbeek</strong>, notre chauffagiste local intervient de manière efficace et réactive.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-4 text-xs font-bold text-slate-500">
            <li><Link href="/loodgieter-grimbergen" className="underline hover:text-blue-600">Loodgieter Grimbergen (NL)</Link></li>
            <li><Link href="/plombier-grimbergen" className="underline hover:text-blue-600">Plombier Grimbergen</Link></li>
            <li><Link href="/zones-de-services/chauffage/grimbergen" className="underline hover:text-blue-600">Chauffage Grimbergen Zone</Link></li>
            <li><Link href="/chauffage" className="underline hover:text-blue-600">Chauffage Belgique</Link></li>
            <li><Link href="/contact" className="underline hover:text-blue-600">Prendre RDV Chauffagiste</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Form Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Prendre rendez-vous ou urgence ?</h2>
          <p className="text-slate-600">Remplissez notre formulaire ou joignez-nous directement pour une réparation urgente ou un entretien programmé.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
