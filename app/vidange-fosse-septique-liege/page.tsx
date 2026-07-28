import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vidange Fosse Septique Liège : Curage & Hydrocurage | Deb Pro",
  description: "Fosse septique pleine à Liège ou en Province de Liège ? Nos techniciens interviennent d'urgence 24h/24 pour la vidange et le curage de vos fosses et bacs à graisse. Devis gratuit.",
  alternates: {
    canonical: "/vidange-fosse-septique-liege",
  },
};

export default function VidangeFosseSeptiqueLiegePage() {
  const faqs = [
    {
      question: "Quand faut-il faire vidanger sa fosse septique à Liège ?",
      answer: "Il est généralement recommandé de réaliser la vidange d'une fosse septique tous les 3 à 5 ans, ou dès que la boue atteint 50 % du volume total de la fosse pour éviter les obstructions et les mauvaises odeurs."
    },
    {
      question: "Combien coûte une intervention de vidange de fosse septique à Liège ?",
      answer: "Nos tarifs sont calculés de manière transparente en fonction de la contenance de votre fosse (m3) et des contraintes d'accès. Appelez-nous pour une offre de prix claire et sans surprise avant déplacement."
    },
    {
      question: "Intervenez-vous également pour les bacs à graisse de restaurants à Liège ?",
      answer: "Oui, nous assurons l'entretien périodique, la vidange et le nettoyage complet des bacs à graisse ainsi que le curage des canalisations pour les professionnels de la restauration à Liège."
    },
    {
      question: "Que faire en cas d'odeurs intempestives remontant de la fosse ?",
      answer: "Les odeurs sont souvent dues à un déséquilibre de la flore bactérienne ou à un système de ventilation défectueux. Nos techniciens analysent l'état général et peuvent appliquer un traitement activateur ou curatif haute pression."
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
                "name": "Vidange Fosse Septique Liège",
                "serviceType": "Vidange",
                "description": "Dépannage vidange fosse septique et nettoyage bac à graisse urgent en Province de Liège par des experts agréés.",
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Liège"
                  }
                ],
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Deb Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/vidange-fosse-septique-liege"
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
            src="https://debouchageexpress24hh.odoo.com/web/image/4147-e633d2dc/regenerated_image_1777316387949%20%283%29.png?height=600"
            alt="Vidange Fosse Septique Liège - Deb Pro Services"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-500/10 backdrop-blur-md rounded-full text-xs font-extrabold border border-green-500/30 mb-6 uppercase tracking-widest text-green-400">
              <MapPin className="w-3.5 h-3.5" /> Province de Liège & Wallonie
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl font-oswald text-white">
              Vidange Fosse Septique à Liège : Qualité & Écologie
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
              Votre fosse septique déborde ou dégage des relents intolérables ? Deb Pro Services déploie ses camions pompe hydrocureurs à Liège, Seraing, Verviers et Herstal pour des vidanges et des nettoyages complets à des tarifs imbattables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0498352588"
                className="group bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] active:scale-95"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" /> Urgence Vidange Liège : 0498 35 25 88
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
              Nos services d&apos;assainissement à Liège
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium font-medium">
              Une expertise de pompage et de traitement certifié conforme aux réglementations environnementales régionales de Wallonie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="vid-fosse">
              <Droplet className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-green-400 font-oswald text-white">Vidange de Fosse Septique</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Aspiration complète des boues épaisses, traitement et acheminement vers des centres de retraitement biologique agréés. Des fosses vidées proprement, sans odeurs résiduelles.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="vid-bac">
              <Building className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-green-400 font-oswald text-white">Vidange de Bac à Graisse</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Service pour les cuisines professionnelles et restaurants : pompage, décapage des parois intérieures et désodorisation complète pour préserver vos égouts du colmatage.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="vid-cur">
              <Wrench className="w-10 h-10 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-green-400 font-oswald text-white">Curage & Hydrocurage</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Nettoyage à haute pression des tuyaux d&apos;égout menant à la fosse pour casser les accumulats calcaires et déboucher définitivement vos réseaux extérieurs.
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
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-green-400">Le déroulement de la vidange</h2>
              <div className="space-y-8">
                {[
                  { title: "Prise de contact", desc: "Analyse des caractéristiques de votre installation (fosse sous gazon, trappe accessible, m3 de boue) et tarification immédiate." },
                  { title: "Arrivée du camion pompe", desc: "Notre camion pompe hydrocureur se déplace chez vous à Liège et déroule jusqu&apos;à 50 mètres de tuyaux d&apos;aspiration." },
                  { title: "Aspiration & Nettoyage", desc: "Aspiration rapide des phases liquides et solides, suivi d&apos;un hydrocurage à l&apos;eau claire pour désinfecter les parois." },
                  { title: "Mise en conformité", desc: "Traitement biologique activateur après vidange et transport des effluents vers le centre de vidage agréé de la région." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-green-600/20 border border-green-500/30 text-green-400 flex items-center justify-center font-black flex-shrink-0">
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

            {/* Quality details & Real Image */}
            <div className="flex flex-col gap-8">
              <div className="relative h-72 md:h-80 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="https://debouchageexpress24hh.odoo.com/web/image/4117-0d69319e/regenerated_image_1777484930056.png?height=600"
                  alt="Évacuation et pompage de fosse septique à Liège"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-500/80 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg">
                  <CheckCircle className="w-3.5 h-3.5" /> Équipement Professionnel Agréé
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-black mb-6 uppercase text-white tracking-tight font-oswald">Un assainissement de confiance</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">
                  Opérer la vidange de votre système d&apos;assainissement requiert des autorisations officielles et un strict respect des règles écologiques en Province de Liège.
                </p>
                <ul className="space-y-5">
                  {[
                    "Agrément légal pour l&apos;aspiration et le déversement réglementé en centre de traitement.",
                    "Camions pompes de pointe disposant de puissants surpresseurs pour fosses profondes.",
                    "Offre commerciale ultra-claire et sans surprises : devis de vidange approuvé au préalable.",
                    "Service d&apos;urgence disponible 24 heures sur 24 pour les cas de débordements sévères."
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-300 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regional aspects */}
      <section className="py-20 bg-slate-950/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Zones d&apos;intervention en Province de Liège</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Nos camions d&apos;aspiration sillonnent continuellement l&apos;ensemble de l&apos;arrondissement de <strong>Liège</strong> : du centre-ville historique aux communes de **Seraing**, **Herstal**, **Verviers**, **Ans**, **Flémalle**, **Chênée** ou encore **Grivegnée**. Proximité et efficacité garanties.
            </p>
          </div>
        </div>
      </section>

      {/* Links internal */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-6 text-xs font-bold text-slate-400">
            <li><Link href="/zones-de-services/vidange-fosse-septique/liege" className="hover:text-green-400 transition-colors">Vidange Liège Zone</Link></li>
            <li><Link href="/debouchage-canalisation" className="hover:text-green-400 transition-colors">Débouchage de Canalisation</Link></li>
            <li><Link href="/plomberie" className="hover:text-green-400 transition-colors">Plomberie Belgique</Link></li>
            <li><Link href="/devis" className="hover:text-green-400 transition-colors">Demander un Devis Vidange</Link></li>
            <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Section Form */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-oswald text-white">Fosse pleine ou bouchée ? Contactez-nous !</h2>
          <p className="text-slate-300 font-medium font-medium font-medium">Remplissez notre formulaire ou joignez-nous par téléphone pour la planification d&apos;un nettoyage de fosse septique sous 24h.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
