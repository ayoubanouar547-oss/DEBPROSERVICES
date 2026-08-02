import { ensureTitleLength, ensureDescriptionLength } from "@/lib/utils/seo-content-generator";
import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Zap, Building, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: ensureTitleLength("Électricien à Grimbergen — Dépannage & Conformité 24/7"),
  description: ensureDescriptionLength("Panne de courant ou mise en conformité AREI à Grimbergen. Électricien agréé disponible 24/7. Intervention rapide."),
  alternates: {
    canonical: "/electricien-grimbergen",
  },
};

export default function ElectricienGrimbergenPage() {
  const faqs = [
    {
      question: "Combien de temps prend un électricien pour arriver à Grimbergen ?",
      answer: "Pour les pannes de courant totales ou les courts-circuits mettant en danger vos appareils, un électricien de garde intervient à Grimbergen et Strombeek-Bever en moins de 30 à 45 minutes."
    },
    {
      question: "Pourquoi faire une mise en conformité électrique (RGIE/AREI) à Grimbergen ?",
      answer: "La mise en conformité est obligatoire lors de la vente d'une habitation (si l'installation date d'avant 1981 ou si le PV de contrôle est périmé). Elle assure également votre propre sécurité en évitant les risques d'incendie électrique."
    },
    {
      question: "Vos électriciens sont-ils qualifiés pour le remplacement de tableau électrique ?",
      answer: "Absolument. Nous sommes experts dans la rénovation complète d'anciennes installations : remplacement de vieux tableaux par des coffrets modernes équipés de disjoncteurs différentiels de sécurité et réalisation de schémas électriques unifilaires conformes."
    },
    {
      question: "Que faire en cas d'odeur de brûlé suspecte émanant d'une prise ou du tableau ?",
      answer: "Coupez immédiatement le disjoncteur général au niveau du compteur d'électricité et appelez directement notre service d'urgence 24h/24. N'essayez en aucun cas de manipuler vous-même les fils dénudés."
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
                "name": "Électricien Grimbergen",
                "serviceType": "Électricité",
                "description": "Dépannage électricité urgent, mise en conformité AREI et tableau électrique à Grimbergen par un électricien certifié.",
                "areaServed": {
                  "@type": "City",
                  "name": "Grimbergen"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/electricien-grimbergen"
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
            src="https://debouchageexpress24hh.odoo.com/web/image/4150-691b84a7/regenerated_image_1777316385571.png?height=600"
            alt="Électricien Grimbergen - Pro Services"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-500/10 backdrop-blur-md rounded-full text-xs font-extrabold border border-yellow-500/30 mb-6 uppercase tracking-widest text-yellow-400">
              <MapPin className="w-3.5 h-3.5" /> Grimbergen & Strombeek-Bever
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl font-oswald text-white">
              Électricien à Grimbergen : Dépannage Urgent 24h/24
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
              Panne d&apos;électricité générale, court-circuit intempestif ou besoin urgent de mise en conformité AREI ? Nos électriciens d&apos;urgence interviennent à Grimbergen, Strombeek et Humbeek en moins de 30 minutes, 7 jours sur 7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0498 35 25 88"
                className="group bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] active:scale-95"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" /> Urgence Électricité : 0498 35 25 88
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
              Prestations Électriques à Grimbergen
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Nous réalisons tout type de dépannage, de mise aux normes et d&apos;installations électriques avec garantie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-dep-panne">
              <Zap className="w-10 h-10 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-yellow-400">Dépannage Panne & Court-circuit</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Recherche de panne instantanée, isolation des lignes défectueuses, remplacement de fusibles ou disjoncteurs usagés pour rétablir le courant en toute sécurité.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-rgie">
              <Wrench className="w-10 h-10 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-yellow-400">Conformité RGIE / AREI</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Correction complète de vos défauts d&apos;isolement, réfection de la prise de terre, ajout d&apos;interrupteurs différentiels et réalisation de vos schémas unifilaires légaux.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-tableau">
              <Building className="w-10 h-10 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-yellow-400">Remplacement de Tableau</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Démontage d&apos;anciens coffrets d&apos;électricité dangereux en amiante ou bois, pose de tableaux électriques modernes étanches pré-câblés conformes aux standards RGIE.
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
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-yellow-400">Le processus d&apos;intervention</h2>
              <div className="space-y-8">
                {[
                  { title: "Prise de contact immédiate", desc: "Diagnostic préliminaire du problème d&apos;électricité par notre équipe technique de garde." },
                  { title: "Envoi de l&apos;électricien de garde", desc: "Un électricien qualifié résidant près de Grimbergen ou Strombeek est mobilisé sur-le-champ." },
                  { title: "Détection & Devis sur place", desc: "Localisation exacte de l&apos;anomalie (appareil en défaut, prise fuyarde) et proposition d&apos;intervention claire." },
                  { title: "Remise en service", desc: "Réparations soignées, tests complets d&apos;isolement et nettoyage de la zone d&apos;intervention." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 flex items-center justify-center font-black flex-shrink-0">
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
              <h3 className="text-2xl font-black mb-6 uppercase text-white tracking-tight">Une Électricité Sûre et Certifiée</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">
                La manipulation des réseaux électriques requiert des compétences professionnelles confirmées et agréées en Belgique.
              </p>
              <ul className="space-y-5">
                {[
                  "Électriciens d&apos;urgence qualifiés disposant de certifications nécessaires.",
                  "Respect rigoureux du RGIE (Règlement Général sur les Installations Électriques) belge.",
                  "Utilisation exclusive de disjoncteurs et composants de grandes marques (Vynckier, Schneider, Legrand).",
                  "Garantie professionnelle solide sur la totalité des travaux thermiques et de dépannage."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
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
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Couverture Communale à Grimbergen</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Nos techniciens circulent quotidiennement dans l&apos;intégralité de la commune : du pôle commercial et résidentiel dynamique de **Strombeek-Bever**, aux quartiers plus calmes de **Beigem** et **Humbeek**, sans oublier le centre historique de **Grimbergen** et l&apos;ensemble de la région de la périphérie bruxelloise.
            </p>
          </div>
        </div>
      </section>

      {/* Links internal */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-6 text-xs font-bold text-slate-400">
            <li><Link href="/loodgieter-grimbergen" className="hover:text-yellow-400 transition-colors">Loodgieter Grimbergen (NL)</Link></li>
            <li><Link href="/plombier-grimbergen" className="hover:text-yellow-400 transition-colors">Plombier Grimbergen (FR)</Link></li>
            <li><Link href="/chauffagiste-grimbergen" className="hover:text-yellow-400 transition-colors">Chauffagiste Grimbergen</Link></li>
            <li><Link href="/electricite" className="hover:text-yellow-400 transition-colors">Nos Services Électricité</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Section Form */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-oswald text-white">Une panne ou un projet d&apos;électricité ?</h2>
          <p className="text-slate-300 font-medium">Pour tout besoin de mise en sécurité ou de mise aux normes, remplissez notre formulaire ou joignez-nous directement.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
