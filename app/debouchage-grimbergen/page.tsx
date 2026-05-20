import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Débouchage Grimbergen : WC, Égout & Canalisation Bouchée | Deb Pro",
  description: "Canalisation bouchée à Grimbergen ou Strombeek-Bever ? Nos déboucheurs professionnels interviennent en 30 min pour WC, évier, égouts bouchés. Devis gratuit.",
  alternates: {
    canonical: "/debouchage-grimbergen",
  },
};

export default function DebouchageGrimbergenPage() {
  const faqs = [
    {
      question: "Quel est le prix d'un débouchage de canalisation à Grimbergen ?",
      answer: "Le tarif dépend de la complexité (furet mécanique ou hydrocurage haute pression). Nous établissons toujours un diagnostic précis et vous donnons une offre de prix claire et fixe avant de commencer les travaux de débouchage."
    },
    {
      question: "Combien de temps faut-il pour déboucher un WC ou une canalisation principale ?",
      answer: "La plupart des débouchages de WC ou d'éviers durent entre 30 et 60 minutes avec notre équipement professionnel."
    },
    {
      question: "Proposez-vous une inspection par caméra à Grimbergen ?",
      answer: "Oui, nous utilisons des caméras d'inspection étanches haute définition pour visualiser l'intérieur de vos canalisations, repérer l'origine des bouchons fréquents (racines, tartre, fissures) et vérifier leur intégrité."
    },
    {
      question: "Entretenez-vous également les fosses septiques à Grimbergen ?",
      answer: "Tout à fait. Nous prenons en charge la vidange de fosses septiques, le curage des chambres de visite et le nettoyage complet des réseaux d'égouttage à Grimbergen et Strombeek-Bever."
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
                "name": "Débouchage Grimbergen",
                "serviceType": "Débouchage",
                "description": "Service de débouchage urgent de canalisation, égouts, toilettes (WC) et inspection caméra à Grimbergen.",
                "areaServed": {
                  "@type": "City",
                  "name": "Grimbergen"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Deb Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/debouchage-grimbergen"
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
            src="https://picsum.photos/seed/grimbergen-unclogging/1920/1080"
            alt="Débouchage Grimbergen"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-xs font-bold border border-blue-500/30 mb-6 uppercase tracking-widest text-blue-400">
              <MapPin className="w-3 h-3" /> Débouchage & Égouttage Grimbergen / Strombeek
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Débouchage à Grimbergen : Toilettes, Vannes & Égouts Bouchés
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              Des mauvaises odeurs se dégagent de vos canalisations ou l&apos;eau stagne dans votre douche ? Deb Pro Services intervient en urgence 24/7 pour libérer vos sanitaires et égouts bouchés à Grimbergen et aux alentours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-blue-600/20"
              >
                <PhoneCall className="w-5 h-5" /> Urgence Débouchage : 0496 32 57 33
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interventions list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Nos services de débouchage à Grimbergen
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Équipement d&apos;égouttage professionnel pour briser tous les bouchons, même les plus coriaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="deb-wc">
              <Wrench className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Débouchage Toilettes & Éviers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Intervention rapide de débouchage de toilettes, siphon d&apos;évier, de douche ou de baignoire obstrués par le calcaire, les cheveux ou des objets ménagers insolites.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="deb-egout">
              <Building className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Curage d&apos;Égouts & Canalisations</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Utilisation d&apos;hydro-cureuses professionnelles pour nettoyer l&apos;intégralité de vos égouts et chambres de visite, supprimant définitivement graisses et tartre accumulés.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="deb-cam">
              <Droplet className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Inspection par Caméra</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Identification visuelle directe de la cause de refoulements répétés de vos eaux usées à l&apos;aide d&apos;un endoscope souple d&apos;égouttage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-slate-900 text-white rounded-t-[3rem] sm:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Steps */}
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-blue-400">Débouchage en 4 étapes clés</h2>
              <div className="space-y-8">
                {[
                  { title: "Prise d&apos;appel d&apos;urgence", desc: "Conseils immédiats de mise en sécurité pour éviter les refoulements et débordements destructeurs." },
                  { title: "Arrivée du camion hydrocureur", desc: "Notre spécialiste égouttier arrive sur place avec le groupe haute pression adapté de jour comme de nuit." },
                  { title: "Localisation du bouchon", desc: "Sondage des canalisations ou passage immédiat de la caméra d&apos;inspection si nécessaire." },
                  { title: "Débouchage & Curage", desc: "Nettoyage haute performance des tuyaux et rincage complet pour garantir un écoulement parfait à long terme." }
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
              <h3 className="text-2xl font-black mb-6 uppercase">Expert en débouchage de proximité</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Grâce à notre implantation géographique près de Bruxelles / Hal-Vilvorde, nous intervenons dans les meilleures conditions.
              </p>
              <ul className="space-y-5">
                {[
                  "Disponibilité totale : un service d&apos;urgence 24/7 performant.",
                  "Camions compacts d&apos;hydrocurage pensés pour tous types d&apos;accès résidentiels.",
                  "Transparance absolue des tarifs : devis approuvé avant toute intervention.",
                  "Utilisation de méthodes respectueuses de l&apos;environnement sans acides destructeurs."
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
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Zones habituelles d&apos;intervention</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nos ouvriers déboucheurs desservent en direct l&apos;agglomération de <strong>Grimbergen</strong>, avec des déplacements récurrents vers les communes de **Strombeek-Bever**, **Beigem** et **Humbeek**, ainsi que les raccordements principaux liant de Wemmel à Vilvorde. Proximité rime ici avec célérité.
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
            <li><Link href="/zones-de-services/debouchage-canalisation/grimbergen" className="underline hover:text-blue-600">Débouchage Grimbergen Zone</Link></li>
            <li><Link href="/debouchage-canalisation" className="underline hover:text-blue-600">Débouchage Belgique</Link></li>
            <li><Link href="/contact" className="underline hover:text-blue-600">Demander un Dévis Débouchage</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Canalisation bouchée ? Agissez maintenant !</h2>
          <p className="text-slate-600">N&apos;attendez pas que le refoulement provoque des inondations. Contactez nos déboucheurs ou remplissez le formulaire.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
