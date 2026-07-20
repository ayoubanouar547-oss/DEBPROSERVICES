import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Flame, Building, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chauffagiste Grimbergen : Dépannage Chaudière & Entretien | Deb Pro",
  description: "Dépannage chaudière d'urgence à Grimbergen, Strombeek-Bever & environs. Chauffagiste agréé pour entretien annuel, réparation de radiateur et fuite de gaz. Devis gratuit.",
  alternates: {
    canonical: "/chauffagiste-grimbergen",
  },
};

export default function ChauffagisteGrimbergenPage() {
  const faqs = [
    {
      question: "Combien de temps faut-il pour qu'un chauffagiste arrive à Grimbergen ?",
      answer: "Grâce à notre équipe locale mobile en permanence autour de Grimbergen et Strombeek-Bever, nous intervenons sous 30 à 45 minutes pour tout dépannage de chaudière urgent comme une panne totale de chauffage ou d'eau chaude."
    },
    {
      question: "Quelles marques de chaudières dépannez-vous ?",
      answer: "Nos chauffagistes qualifiés sont agréés pour intervenir sur toutes les grandes marques belges et européennes : Vaillant, Bulex, Viessmann, Bosch, Junkers, Buderus, Weishaupt, ACV, Riello, Ariston et De Dietrich."
    },
    {
      question: "L'entretien annuel de la chaudière est-il obligatoire à Grimbergen ?",
      answer: "Oui, la réglementation en Région flamande impose un entretien périodique pour toutes les chaudières : tous les 2 ans pour les systèmes de chauffage au gaz et tous les ans pour les chaudières au mazout, avec délivrance d'une attestation de conformité."
    },
    {
      question: "Proposez-vous un service de détection et réparation de fuite de gaz ?",
      answer: "Absolument. En tant que techniciens habilités, nous disposons d'appareils de mesure électroniques permettant de localiser et de sécuriser instantanément n'importe quelle fuite sur votre tuyauterie de gaz."
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
                "description": "Artisan chauffagiste agréé à Grimbergen pour entretien, installation et dépannage chaudière d'urgence 24/7.",
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
      <section className="relative pt-36 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[#000814]">
          <Image
            src="https://debouchageexpress24hh.odoo.com/web/image/4149-39dd8a88/regenerated_image_1777315741847.png?height=600"
            alt="Chauffagiste Grimbergen - Deb Pro Services"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-orange-500/10 backdrop-blur-md rounded-full text-xs font-extrabold border border-orange-500/30 mb-6 uppercase tracking-widest text-orange-400">
              <MapPin className="w-3.5 h-3.5" /> Grimbergen, Strombeek & Humbeek
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl">
              Chauffagiste à Grimbergen : Urgence & Entretien 24/7
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
              Votre chaudière est tombée en panne ? Pas d&apos;eau chaude ni de chauffage ? Nos techniciens chauffagistes certifiés se déplacent à Grimbergen sous 30 minutes pour tout type de dépannage, d&apos;entretien périodique ou de remplacement d&apos;appareils.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="group bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] active:scale-95"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" /> Appeler un Chauffagiste : 0496 32 57 33
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
              Prestations Chauffage Complètes à Grimbergen
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Toutes nos interventions de chauffage et de gaz respectent la législation et les normes de sécurité en vigueur.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-rep-chaudiere">
              <Flame className="w-10 h-10 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-orange-400">Dépannage Chaudière Gaz / Mazout</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Résolution rapide de pannes de brûleur, baisse de pression constante, circulateur bloqué ou défaut d&apos;allumage. Votre confort thermique restauré en un temps record.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-entretien">
              <Wrench className="w-10 h-10 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-orange-400">Entretien Obligatoire</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Nettoyage du corps de chauffe, réglage précis du brûleur, analyse des fumées de combustion et délivrance systématique des attestations légales pour vos assurances.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-radiateur">
              <Building className="w-10 h-10 text-orange-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-orange-400">Remplacement & Raccordements</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Conseil personnalisé et installation de chaudières à condensation haute performance (Vaillant, Bulex), purge de radiateurs et équilibrage thermique de vos réseaux.
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
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-orange-400">Déroulement de l&apos;intervention</h2>
              <div className="space-y-8">
                {[
                  { title: "Prise de contact rapide", desc: "Analyse sommaire des symptômes par notre service technique de garde pour dépolluer les options et chiffrer l&apos;intervention." },
                  { title: "Déplacement ultra-rapide", desc: "Un dépanneur qualifié proche de Strombeek-Bever ou de Grimbergen centre se rend sur place en moins de 30-45 minutes." },
                  { title: "Mise en sécurité & diagnostic", desc: "Recherche méthodique de la pièce défectueuse (thermostat, carte mère, pompe de charge) avec devis écrit gratuit sur place." },
                  { title: "Réparation certifiée", desc: "Changement de la pièce défectueuse avec du matériel d&apos;origine en stock constant dans nos camionnettes de service." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/20 border border-orange-500/30 text-orange-400 flex items-center justify-center font-black flex-shrink-0">
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
              <h3 className="text-2xl font-black mb-6 uppercase text-white tracking-tight">Le Chauffage en toute sécurité</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">
                Notre structure d&apos;artisans chauffagistes belges garantit une conformité légale totale pour vos assurances et syndics.
              </p>
              <ul className="space-y-5">
                {[
                  "Agrément légal régional pour la Wallonie, Bruxelles et la Flandre (agrément CERGA inclus).",
                  "Attestations oficielles de combustion et nettoyage chaudière remises immédiatement à chaque visite.",
                  "Conseils objectifs de réduction des factures d&apos;énergie et d&apos;efficacité thermique.",
                  "Dépannages d&apos;urgence joignables 24h/24 et 7j/7, même durant la période hivernale."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Regional context */}
      <section className="py-20 bg-slate-950/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Couverture Locale à Grimbergen</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Notre équipe de chauffagistes d&apos;urgence se déploie sans délai sur la totalité de l&apos;entité communale de **Grimbergen**, incluant les communes associées de **Strombeek-Bever**, **Beigem** et **Humbeek**, ainsi que les zones industrielles et résidentielles périphériques.
            </p>
          </div>
        </div>
      </section>

      {/* Links internal */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-6 text-xs font-bold text-slate-400">
            <li><Link href="/loodgieter-grimbergen" className="hover:text-orange-400 transition-colors">Loodgieter Grimbergen (NL)</Link></li>
            <li><Link href="/plombier-grimbergen" className="hover:text-orange-400 transition-colors">Plombier Grimbergen (FR)</Link></li>
            <li><Link href="/chauffage" className="hover:text-orange-400 transition-colors">Nos Services Chauffage</Link></li>
            <li><Link href="/debouchage-canalisation" className="hover:text-orange-400 transition-colors">Débouchage de Canalisation</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Votre chaudière face à un dysfonctionnement ?</h2>
          <p className="text-slate-300 font-medium">Pour toute intervention immédiate ou planification de maintenance d&apos;entretien périodique, contactez nos chauffagistes.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
