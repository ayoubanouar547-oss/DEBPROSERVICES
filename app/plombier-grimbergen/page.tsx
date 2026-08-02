import { ensureTitleLength, ensureDescriptionLength } from "@/lib/utils/seo-content-generator";
import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

import { DebouchageGallery } from "@/components/sections/DebouchageGallery";

export const metadata: Metadata = {
  title: ensureTitleLength("Plombier à Grimbergen — Dépannage Rapide 24/7"),
  description: ensureDescriptionLength("Urgence plomberie à Grimbergen et Strombeek-Bever ? Intervention rapide en 30 min pour fuites d'eau et débouchages."),
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
                  "name": "Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/plombier-grimbergen"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq: { question: string; answer: string }) => ({
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
      <section className="relative pt-36 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[#000814]">
          <Image
            src="https://debouchageexpress24hh.odoo.com/web/image/4146-3c23cecf/regenerated_image_1777316390260%20%284%29.png?height=600"
            alt="Plombier Grimbergen - Pro Services"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 backdrop-blur-md rounded-full text-xs font-extrabold border border-blue-500/30 mb-6 uppercase tracking-widest text-blue-400">
              <MapPin className="w-3.5 h-3.5" /> Région de Grimbergen & Strombeek
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl">
              Plombier à Grimbergen : Dépannage Rapide 24h/24
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
              Besoin d&apos;un plombier de confiance à Grimbergen, Strombeek-Bever ou Humbeek ? Fuite d&apos;eau à colmater, débouchage urgent ou remplacement de sanitaire : notre équipe d&apos;artisans locaux intervient sous 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0498 35 25 88"
                className="group bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] active:scale-95"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" /> Urgence Grimbergen : 0498 35 25 88
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative z-10 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Nos Interventions de Plomberie à Grimbergen
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Une gamme de services complète réalisée par des professionnels qualifiés et à des tarifs compétitifs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-rep-fuite">
              <Droplet className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400">Recherche de fuite</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Repérage précis et réparation rapide de toutes vos fuites sur canalisations en cuivre, Alpex ou PVC. Nous intervenons rapidement pour stopper les dégâts des eaux.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-deb">
              <Wrench className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400">Dépannage Sanitaires</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Remplacement de robinetterie défectueuse, mécanisme de chasse d&apos;eau encastrée, ou installation de nouveau boiler / chauffe-eau électrique.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-sanit">
              <Building className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400">Débouchage express</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                WC bouché, douche ou évier obstrué ? Nos plombiers disposent d&apos;un matériel de pointe pour libérer vos canalisations en un temps record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#000814]/60 backdrop-blur-md border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Steps */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-blue-400">Processus d&apos;intervention express</h2>
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
                      <h4 className="font-bold text-lg text-white mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Local points */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-black mb-6 uppercase text-white tracking-tight">Un service de proximité</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">
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
      <section className="py-20 bg-slate-950/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight text-white font-oswald">Nos Interventions à Grimbergen</h2>
          <p className="text-slate-300 max-w-2xl mx-auto font-medium">Découvrez en images la qualité de nos dépannages en plomberie et débouchage.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DebouchageGallery initialType="all" isNl={false} />
        </div>
      </section>

      {/* Local contextual information */}
      <section className="py-20 bg-slate-950/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Partout dans l&apos;agglomération de Grimbergen</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Nos véhicules de patrouille circulent continuellement dans les différents secteurs de la commune : du pôle commercial et résidentiel de <strong>Strombeek-Bever</strong>, aux villages calmes de <strong>Beigem</strong> et <strong>Humbeek</strong>, sans oublier le cœur historique de <strong>Grimbergen</strong>. Notre réactivité est la clé de votre tranquillité.
            </p>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-6 text-xs font-bold text-slate-400">
            <li><Link href="/loodgieter-grimbergen" className="hover:text-blue-400 transition-colors">Loodgieter Grimbergen (NL)</Link></li>
            <li><Link href="/zones-de-services/plomberie/grimbergen" className="hover:text-blue-400 transition-colors">Plombier Grimbergen Zone</Link></li>
            <li><Link href="/plomberie" className="hover:text-blue-400 transition-colors">Plomberie Belgique</Link></li>
            <li><Link href="/debouchage-canalisation" className="hover:text-blue-400 transition-colors">Débouchage urgent</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Demander un Devis</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Besoin d&apos;une aide immédiate ?</h2>
          <p className="text-slate-300 font-medium">Remplissez notre formulaire ou joignez-nous directement par téléphone pour un dépannage en moins de 30 minutes.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
