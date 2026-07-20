import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Building, MapPin, Wind } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installateur VMC Belgique : Pose, Entretien & Ventilation | Deb Pro",
  description: "Besoin d'un installateur VMC en Belgique ? Nous installons et entretenons vos systèmes de ventilation double flux (système D) et simple flux (système C). Devis Gratuit.",
  alternates: {
    canonical: "/installateur-vmc",
  },
};

export default function InstallateurVmcPage() {
  const faqs = [
    {
      question: "Pourquoi faire installer une VMC (Ventilation Mécanique Contrôlée) ?",
      answer: "Une VMC garantit le renouvellement continu de l'air intérieur, évite l'humidité excessive, les moisissures et élimine les polluants intérieurs (CO2, COV, allergènes) pour assurer un environnement sain."
    },
    {
      question: "Quelle est la différence entre VMC Simple Flux (Système C) et Double Flux (Système D) ?",
      answer: "La VMC simple flux extrait l'air vicié des pièces humides et le remplace par de l'air frais venant de l'extérieur. La VMC double flux dispose en plus d'un échangeur thermique qui récupère les calories de l'air extrait pour préchauffer l'air neuf entrant, permettant de réelles économies d'énergie."
    },
    {
      question: "À quelle fréquence faut-il entretenir son système de ventilation ?",
      answer: "Il est conseillé de nettoyer ou de remplacer les filtres toutes les 6 mois à 1 an, et d'effectuer un entretien complet des gaines et moteurs par un professionnel tous les 3 à 5 ans pour garantir un rendement optimal."
    },
    {
      question: "Intervenez-vous dans toute la Belgique pour la ventilation ?",
      answer: "Oui, notre réseau d'installateurs couvre l'ensemble du territoire belge, de Bruxelles à la Wallonie (Liège, Charleroi, Namur) en passant par la Flandre."
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
                "name": "Installation VMC Belgique",
                "serviceType": "Ventilation",
                "description": "Société spécialisée dans l'installation, le remplacement et l'entretien de VMC simple flux et double flux en Belgique.",
                "areaServed": {
                  "@type": "Country",
                  "name": "Belgium"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Deb Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/installateur-vmc"
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
      <section className="relative pt-36 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[#000814]">
          <Image
            src="https://debouchageexpress24hh.odoo.com/web/image/4166-17ba685c/Technician_installing_VMC_system_202604301840.jpeg?height=600"
            alt="Installateur VMC Belgique - Deb Pro Services"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-500/10 backdrop-blur-md rounded-full text-xs font-extrabold border border-sky-500/30 mb-6 uppercase tracking-widest text-sky-400">
              <MapPin className="w-3.5 h-3.5" /> Ventilation de Qualité en Belgique
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl font-oswald text-white">
              Installateur VMC en Belgique : Pose, Entretien & Diagnostic
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
              Deb Pro Services est votre entreprise de référence pour l&apos;étude, l&apos;installation et l&apos;entretien complet de systèmes de ventilation mécanique contrôlée (VMC) simple et double flux, partout en Belgique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="group bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] active:scale-95"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" /> Offre de prix gratuite : 0496 32 57 33
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
              Prestations Ventilation & VMC en Belgique
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Nous concevons des installations de ventilation adaptées aux normes PEB belges en vigueur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="vmc-d">
              <Wind className="w-10 h-10 text-sky-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-sky-400 font-oswald text-white">VMC Double Flux (Système D)</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Le top de la technologie PEB : renouvellement complet de l&apos;air intérieur avec récupération jusqu&apos;à 90% des calories de l&apos;air extrait. Économisez sur vos factures de chauffage.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="vmc-c">
              <Wind className="w-10 h-10 text-sky-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-sky-400 font-oswald text-white">VMC Simple Flux (Système C)</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Installation économique et performante, idéale en rénovation résidentielle, assurant une extraction de l&apos;air vicié contrôlée mécaniquement dans les pièces humides.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="vmc-ent">
              <Wrench className="w-10 h-10 text-sky-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-sky-400 font-oswald text-white">Entretien & Nettoyage de Gaines</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Remplacement de filtres encrassés, nettoyage des bouches d&apos;extraction, désinfection bactérienne des gaines et mesure de débit pour préserver l&apos;hygiène de l&apos;air.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#000814]/60 backdrop-blur-md border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Steps list */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-sky-400">L&apos;installation de votre VMC</h2>
              <div className="space-y-8">
                {[
                  { title: "Étude et plan de dimensionnement", desc: "Calcul des débits d&apos;air requis pièce par pièce conformément à la réglementation PEB belge." },
                  { title: "Implantation et réseau de gainages", desc: "Passage minutieux de gaines d&apos;air isolées en faux-plafonds ou chapes pour minimiser l&apos;impact visuel." },
                  { title: "Pose du groupe ventilateur", desc: "Installation de l&apos;unité centrale VMC (Vasco, Zehnder, Renson) avec attaches acoustiques anti-vibratiles." },
                  { title: "Mise en service et réglages directs", desc: "Ajustement des anémomètres pour calibrer précisément l&apos;insufflation et l&apos;extraction théorique requise." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/30 text-sky-400 flex items-center justify-center font-black flex-shrink-0">
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

            {/* Quality details */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-black mb-6 uppercase text-white tracking-tight">Une expertise PEB reconnue</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">
                Notre société de ventilation applique rigoureusement les normes PEB belges ainsi que les recommandations ergonomiques de débit d&apos;air.
              </p>
              <ul className="space-y-5">
                {[
                  "Installateurs formés chez les plus grands constructeurs (Zehnder, Vasco, Renson).",
                  "Garantie d&apos;un débit équilibré pour un confort thermique et phonique absolu (moteurs ultra-silencieux).",
                  "Mise aux normes complète conforme aux inspections PEB réglementaires lors des ventes.",
                  "Offre de devis détaillée et gratuite avec calcul de déperdition calorifique."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Regional aspects */}
      <section className="py-20 bg-slate-950/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Activement présents partout en Belgique</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Que vous habitiez à <strong>Bruxelles</strong> (Ixelles, Uccle, Schaerbeek), en Wallonie (Liège, Namur, Charleroi, Brabant Wallon, Mons) ou en périphérie flamande (Vilvoorde, Grimbergen, Wemmel), nos équipes d&apos;installateurs VMC qualifiés interviennent rapidement pour l&apos;assainissement thermique et sanitaire de vos intérieurs.
            </p>
          </div>
        </div>
      </section>

      {/* Links internal */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-6 text-xs font-bold text-slate-400">
            <li><Link href="/zones-de-services/climatisation/installation-climatisation-pompe-a-chaleur" className="hover:text-sky-400 transition-colors">Installation Climatisation</Link></li>
            <li><Link href="/chauffage" className="hover:text-sky-400 transition-colors">Chauffagiste Belgique</Link></li>
            <li><Link href="/devis" className="hover:text-sky-400 transition-colors">Demander un Devis VMC</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-oswald text-white">Un projet de ventilation ou VMC ?</h2>
          <p className="text-slate-300 font-medium">Remplissez notre formulaire en quelques clics ou prenez rendez-vous pour une étude technique personnalisée.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
