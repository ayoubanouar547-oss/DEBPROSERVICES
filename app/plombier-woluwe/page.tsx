import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plombier Woluwe-Saint-Pierre & Woluwe-Saint-Lambert | Pro Services",
  description: "Urgence plomberie à Woluwe-Saint-Pierre et Woluwe-Saint-Lambert ? Pro Services intervient en 30 min pour fuite d'eau, débouchage urgent et sanitaire. Devis gratuit.",
  alternates: {
    canonical: "/plombier-woluwe",
  },
};

export default function PlombierWoluwePage() {
  const faqs = [
    {
      question: "Combien de temps prend un plombier pour arriver à Woluwe-Saint-Pierre ?",
      answer: "Nous disposons d'équipes de techniciens mobiles de garde réparties sur l'est de Bruxelles. Un plombier est à votre domicile à Woluwe-Saint-Pierre ou Woluwe-Saint-Lambert en moins de 30 à 45 minutes."
    },
    {
      question: "Débouchez-vous également les canalisations urgentes à Woluwe ?",
      answer: "Oui, nous sommes experts en débouchage express pour WC, éviers, douches, baignoires et chambres de visite bouchées à l'aide de furets professionnels et d'hydrocureurs haute pression."
    },
    {
      question: "Vos devis sont-ils gratuits à Woluwe-Saint-Lambert ?",
      answer: "Tout à fait. Nous effectuons une inspection et établissons pour vous un devis clair, gratuit et sans mauvaise surprise avant de procéder aux réparations."
    },
    {
      question: "Proposez-vous la réparation de chauffe-eau électrique (boiler) à Woluwe ?",
      answer: "Oui. Nous dépannons tous types et marques de boilers et de chauffe-eau électriques : détartrage, remplacement de résistance stéatite, thermostat défectueux ou pose de nouveau matériel."
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
                "name": "Plombier Woluwe-Saint-Pierre / Woluwe-Saint-Lambert",
                "serviceType": "Plomberie",
                "description": "Artisan plombier de confiance à Woluwe-Saint-Pierre et Woluwe-Saint-Lambert pour fuites d'eau, débouchage et dépannage urgence sanitaires.",
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Woluwe-Saint-Pierre"
                  },
                  {
                    "@type": "City",
                    "name": "Woluwe-Saint-Lambert"
                  }
                ],
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/plombier-woluwe"
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
            alt="Plombier Woluwe - Pro Services"
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
              <MapPin className="w-3.5 h-3.5" /> Woluwe-Saint-Pierre & Saint-Lambert
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl font-oswald text-white">
              Plombier de Confiance à Woluwe : Dépannage 24/7
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
              Besoin d&apos;un plombier réactif à Woluwe-Saint-Pierre ou Woluwe-Saint-Lambert ? Face à une fuite d&apos;eau brutale, un WC bouché ou un chauffe-eau en panne, nos artisans experts interviennent chez vous sous 30 minutes, jour et nuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0498 35 25 88"
                className="group bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] active:scale-95"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" /> Urgence Woluwe : 0498 35 25 88
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
              Prestations Plomberie à Woluwe (1150 - 1200)
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Nous gérons l&apos;intégralité de vos canalisations, robinetteries et équipements sanitaires.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="woluwe-fuite">
              <Droplet className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400 font-oswald text-white">Recherche & Colmatage de Fuite</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Intervention express pour stopper l&apos;écoulement, localiser précisément les infiltrations dissimulées et réparer durablement vos tuyaux défectueux en cuivre ou Alpex.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="woluwe-deb">
              <Building className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400 font-oswald text-white">Débouchage Toilettes (WC)</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                WC bloqué, évier bouché ou refoulement d&apos;égouts ? Nous mobilisons un équipement professionnel pour dégager instantanément l&apos;obstruction et restaurer l&apos;écoulement.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="woluwe-san">
              <Wrench className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400 font-oswald text-white">Robinetterie & Chaudières</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Remplacement de mitigeurs grohe défectueux, chasse d&apos;eau geberit fuyarde ou réparation urgente de boilers électriques défectueux.
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
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-blue-400">Processus de dépannage express</h2>
              <div className="space-y-8">
                {[
                  { title: "Appel de signalement", desc: "Notre répartiteur de garde analyse votre problème et vous conseille sur les mesures d&apos;attente (ex : couper l&apos;arrivée d&apos;eau)." },
                  { title: "Arrivée sous 30 minutes", desc: "Un de nos techniciens qualifiés basés près de l&apos;avenue de Tervueren est envoyé immédiatement à votre domicile." },
                  { title: "Diagnostic & Devis Gratuit", desc: "Recherche de l&apos;anomalie, explication de la méthode de réparation requise et proposition d&apos;un devis ferme et forfaitaire." },
                  { title: "Réparation soignée", desc: "Remplacement impeccable des pièces, vérification finale de test de mise en eau et assainissement du lieu." }
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

            {/* Quality Bullets & Real Image */}
            <div className="flex flex-col gap-8">
              <div className="relative h-72 md:h-80 w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="https://debouchageexpress24hh.odoo.com/web/image/4084-106136fe/regenerated_image_1777331518139.png?height=600"
                  alt="Plombier qualifié recherchant et réparant une fuite d'eau à Woluwe"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/80 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest text-white shadow-lg">
                  <CheckCircle className="w-3.5 h-3.5" /> Dépannage Sanitaire Garanti
                </span>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-black mb-6 uppercase text-white tracking-tight font-oswald">Un plombier local de confiance</h3>
                <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">
                  Profitez du professionnalisme d&apos;artisans belges certifiés résidant aux abords directs de Woluwe.
                </p>
                <ul className="space-y-5">
                  {[
                    "Disponibilité absolue : Service d&apos;urgence joignable 24/7 y compris le dimanche.",
                    "Connaissance des bâtiments et de la pression d&apos;eau dans les deux communes.",
                    "Efficacité redoutable : intervention de dépannage réalisée dès le premier passage dans 95% des cas.",
                    "Devis gratuit écrit remis avant toute intervention pour une sérénité totale."
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
        </div>
      </section>

      {/* Local contextual information */}
      <section className="py-20 bg-slate-950/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Vos plombiers de quartier à Woluwe</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Qu&apos;il s&apos;agisse de l&apos;environnement résidentiel verdoyant de **Woluwe-Saint-Pierre** (1150) ou des quartiers animés de **Woluwe-Saint-Lambert** (1200) à proximité de la station de métro Tomberg ou de l&apos;UCL, notre équipe mobile circule de manière permanente pour vous garantir une arrivée dans des temps record.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links links */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-6 text-xs font-bold text-slate-400">
            <li><Link href="/recherche-de-fuite-bruxelles" className="hover:text-blue-400 transition-colors">Recherche de Fuite Bruxelles</Link></li>
            <li><Link href="/plomberie" className="hover:text-blue-400 transition-colors">Plomberie Belgique</Link></li>
            <li><Link href="/debouchage-canalisation" className="hover:text-blue-400 transition-colors">Débouchage de Canalisation</Link></li>
            <li><Link href="/plombier-bruxelles" className="hover:text-blue-400 transition-colors">Plombier Bruxelles Centre</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Form section */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-oswald text-white">Des questions ou un dépannage ?</h2>
          <p className="text-slate-300 font-medium">N&apos;attendez pas qu&apos;une petite fuite d&apos;eau devienne une catastrophe. Appelez-nous maintenant ou remplissez le formulaire.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
