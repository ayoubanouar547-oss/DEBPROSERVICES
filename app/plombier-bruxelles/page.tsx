import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

import { DebouchageGallery } from "@/components/sections/DebouchageGallery";

export const metadata: Metadata = {
  title: "Le Meilleur Plombier à Bruxelles - Devis Gratuit 24/7 | Pro Services",
  description: "Urgence plomberie à Bruxelles-Capitale ? Pro Services intervient en 30 min pour fuites d'eau, sanitaires et débouchages. Devis gratuit ☎ 0498 35 25 88.",
  alternates: {
    canonical: "/plombier-bruxelles",
  },
};

export default function PlombierBruxellesPage() {
  const faqs = [
    {
      question: "Intervenez-vous pour une fuite touchant plusieurs appartements à Ixelles ?",
      answer: "Oui, les dégâts des eaux traversant les planchers sont fréquents. Nous identifions l'origine exacte de la fuite et pouvons coordonner notre intervention avec le syndic pour sécuriser la colonne d'eau de l'immeuble."
    },
    {
      question: "Pouvez-vous rénover la plomberie d'une maison ancienne à Uccle ?",
      answer: "Absolument. Les maisons de maître et les bâtiments anciens nécessitent une attention particulière, notamment lors du remplacement d'anciennes tuyauteries en plomb par des matériaux modernes, tout en préservant la structure du bâtiment."
    },
    {
      question: "Que faire en cas de problème sur la colonne d'évacuation commune à Schaerbeek ?",
      answer: "Si le refoulement ou la fuite provient de la colonne principale, avertissez vos voisins pour limiter l'utilisation de l'eau et contactez-nous immédiatement. Nous disposons des outils nécessaires pour intervenir sur les réseaux collectifs."
    },
    {
      question: "Comment gérez-vous le manque de pression d'eau récurrent à Anderlecht ?",
      answer: "Une pression d'eau irrégulière est souvent causée par un entartrage sévère ou un réducteur de pression défectueux. Notre technicien évalue le circuit complet pour rétablir un débit optimal et constant."
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
                "name": "Plombier Bruxelles",
                "serviceType": "Plomberie",
                "description": "Dépannage plomberie à Bruxelles : réparation de fuites d'eau, travaux sur colonnes communes et sanitaires.",
                "areaServed": {
                  "@type": "City",
                  "name": "Bruxelles"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/plombier-bruxelles",
                  "hasMap": "https://www.google.com/maps/place/Deb+Pro+Services/@50.9343749,4.3843725,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3e9f7ff0c3d79:0x54ce02342d4a8439!8m2!3d50.9343749!4d4.3869474!16s%2Fg%2F11z3pw860x",
                  "sameAs": [
                    "https://www.google.com/maps/place/Deb+Pro+Services/@50.9343749,4.3843725,17z/data=!3m1!4b1!4m6!3m5!1s0x47c3e9f7ff0c3d79:0x54ce02342d4a8439!8m2!3d50.9343749!4d4.3869474!16s%2Fg%2F11z3pw860x",
                    "https://www.facebook.com/debservices",
                    "https://www.instagram.com/debservices"
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "8942",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Michel V."
                    },
                    "datePublished": "2026-02-14",
                    "reviewBody": "Intervention ultra rapide pour fuite à Bruxelles. Plombier très professionnel.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5",
                      "worstRating": "1"
                    }
                  }
                ]
              },
              {
                "@type": "Product",
                "name": "Plombier Bruxelles - Dépannage Urgence",
                "description": "Service de plomberie d'urgence à Bruxelles-Capitale 24h/24.",
                "brand": {
                  "@type": "Brand",
                  "name": "Pro Service"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "8942",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "offers": {
                  "@type": "Offer",
                  "url": "https://debservices.canalrose.be/plombier-bruxelles",
                  "priceCurrency": "EUR",
                  "price": "50.00",
                  "priceValidUntil": "2027-12-31",
                  "availability": "https://schema.org/InStock"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Michel V."
                    },
                    "datePublished": "2026-02-14",
                    "reviewBody": "Excellent plombier à Bruxelles.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5",
                      "worstRating": "1"
                    }
                  }
                ]
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
      <section className="relative pt-32 pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 -z-10 bg-slate-900">
          <Image
            src="https://picsum.photos/seed/brussels-plumbing/1920/1080"
            alt="Plombier Bruxelles"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-xs font-bold border border-blue-500/30 mb-6 uppercase tracking-widest text-blue-400">
              <MapPin className="w-3 h-3" /> Région de Bruxelles-Capitale
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Plombier à Bruxelles : Dépannage Rapide et Intervention d'Urgence
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              À Bruxelles, les problèmes de plomberie exigent une intervention précise et immédiate. Qu'il s'agisse de fuites dans des appartements mitoyens, de colonnes communes défectueuses ou d'une pression d'eau irrégulière, Pro Services mobilise ses techniciens pour apporter des solutions durables aux infrastructures urbaines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0498 35 25 88"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-blue-600/20"
              >
                <PhoneCall className="w-5 h-5" /> Urgence Bruxelles : 0498 35 25 88
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
              Problématiques fréquentes à Bruxelles
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              L'architecture urbaine de la capitale engendre des situations de plomberie bien spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1">
              <Droplet className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Fuites en appartement</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Les dégâts des eaux se propagent rapidement entre les étages. Nous intervenons pour circonscrire la fuite et réparer les canalisations endommagées avant que l'humidité n'attaque les murs de vos voisins.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1">
              <Building className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Colonnes communes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Les immeubles anciens souffrent souvent d'engorgements ou de fissures sur les grands axes d'évacuation. Une action ciblée évite le remplacement total et onéreux de la tuyauterie de l'immeuble.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1">
              <Wrench className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Sanitaires anciens</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Variations brutales de pression ou robinetterie grippée : nous modernisons vos équipements vétustes tout en nous adaptant au réseau existant de votre logement bruxellois.
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
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-blue-400">Processus d'intervention en 4 étapes</h2>
              <div className="space-y-8">
                {[
                  { title: "Prise en charge téléphonique", desc: "Analyse immédiate de la situation pour qualifier l'urgence et vous conseiller sur les gestes de mise en sécurité (coupure d'eau)." },
                  { title: "Déplacement sur les lieux", desc: "Arrivée d'un technicien qualifié équipé pour le dépannage au cœur de Bruxelles, de jour comme de nuit." },
                  { title: "Diagnostic et tarification", desc: "Identification de la cause précise du problème et présentation d'une solution claire avant le commencement des travaux." },
                  { title: "Réparation professionnelle", desc: "Remplacement minutieux des pièces défectueuses, test de mise en eau et remise au propre de l'espace de travail." }
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

            {/* Local Bullets */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-black mb-6 uppercase">Une approche adaptée à la capitale</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Opérer à Bruxelles requiert une solide expérience du terrain et des contraintes spécifiques aux infrastructures urbaines.
              </p>
              <ul className="space-y-5">
                {[
                  "Connaissance pointue des architectures bruxelloises historiques et habitations traditionnelles.",
                  "Équipement d'intervention pensé pour les accès difficiles dans les immeubles de grande hauteur ou sans ascenseur.",
                  "Sens de la coordination avec les syndics de copropriété pour résoudre un problème sur un réseau partagé.",
                  "Gestion logistique optimisée pour réduire les délais malgré le trafic urbain de la petite ceinture."
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

      {/* Relatifs & Nearby Areas */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Nos Réalisations en Plomberie & Débouchage</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Interventions rapides et soignées pour tous vos problèmes de canalisations à Bruxelles.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DebouchageGallery initialType="all" isNl={false} />
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Zones de déplacement à Bruxelles</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nos plombiers couvrent l'intégralité de la région de <strong>Bruxelles-Capitale</strong>. Outre l'accompagnement dans le centre-ville (Bruxelles 1000), nous assurons des dépannages rapides dans les communes limitrophes telles qu'<strong>Ixelles</strong>, <strong>Schaerbeek</strong>, <strong>Anderlecht</strong>, <strong>Etterbeek</strong> ou <strong>Uccle</strong>. Peu importe votre localisation dans la capitale, une équipe technique est prête à agir.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Linking Links */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-4 text-xs font-bold text-slate-500">
            <li><Link href="/recherche-de-fuite-bruxelles" className="underline hover:text-blue-600">Recherche de Fuite Bruxelles</Link></li>
            <li><Link href="/plomberie/depannage" className="underline hover:text-blue-600">Dépannage Plomberie</Link></li>
            <li><Link href="/debouchage-canalisation" className="underline hover:text-blue-600">Débouchage de Canalisation</Link></li>
            <li><Link href="/chauffage" className="underline hover:text-blue-600">Chauffagiste Bruxelles</Link></li>
            <li><Link href="/devis" className="underline hover:text-blue-600">Demander un Devis</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Besoin d'un plombier maintenant ?</h2>
          <p className="text-slate-600">N'attendez pas que le dégât des eaux s'aggrave. Remplissez le formulaire ou appelez-nous directement.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
