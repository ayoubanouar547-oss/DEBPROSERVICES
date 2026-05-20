import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plombier Woluwe-Saint-Pierre & Woluwe-Saint-Lambert | Deb Pro",
  description: "Urgence plomberie à Woluwe-Saint-Pierre et Woluwe-Saint-Lambert ? Deb Pro Services intervient en 30 min pour fuite d'eau, débouchage urgente et sanitaire. Devis gratuit.",
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
      question: "Proosez-vous la réparation de chauffe-eau électrique (boiler) à Woluwe ?",
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
                  "name": "Deb Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/plombier-woluwe"
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
            src="https://picsum.photos/seed/woluwe-plumber/1920/1080"
            alt="Plombier Woluwe"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-xs font-bold border border-blue-500/30 mb-6 uppercase tracking-widest text-blue-400">
              <MapPin className="w-3 h-3" /> Woluwe-Saint-Pierre & Saint-Lambert
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Plombier de Confiance à Woluwe : Dépannage Rapide 24/7
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              Besoin d&apos;un plombier réactif à Woluwe-Saint-Pierre ou Woluwe-Saint-Lambert ? Face à une fuite d&apos;eau brutale, un WC bouché ou un chauffe-eau en panne, nos artisans experts interviennent chez vous sous 30 minutes, jour et nuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-blue-600/20"
              >
                <PhoneCall className="w-5 h-5" /> Urgence Woluwe : 0496 32 57 33
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
              Prestations Plomberie à Woluwe (1150 - 1200)
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Nous gérons l&apos;intégralité de vos canalisations, robinetteries et équipements sanitaires.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="woluwe-fuite">
              <Droplet className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Recherche & Colmatage de Fuite</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Intervention express pour stopper l&apos;écoulement, localiser précisément les infiltrations dissimulées et réparer durablement vos tuyaux défectueux en cuivre ou Alpex.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="woluwe-deb">
              <Building className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Débouchage Toilettes (WC)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                WC bloqué, évier bouché ou refoulement d&apos;égouts ? Nous mobilisons un équipement professionnel pour dégager instantanément l&apos;obstruction et restaurer l&apos;écoulement.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="woluwe-san">
              <Wrench className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Robinetterie & Chaudières</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Remplacement de mitigeurs grohe défectueux, chasse d&apos;eau geberit fuyarde ou réparation urgente de boilers électriques défectueux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps List */}
      <section className="py-20 bg-slate-900 text-white rounded-t-[3rem] sm:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Steps list */}
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-blue-400">Processus de dépannage express</h2>
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
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Bullets */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-black mb-6 uppercase">Un plombier local de confiance</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
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
      </section>

      {/* Local contextual information */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Vos plombiers de quartier à Woluwe</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Qu&apos;il s&apos;agisse de l&apos;environnement résidentiel verdoyant de **Woluwe-Saint-Pierre** (1150) ou des quartiers animés de **Woluwe-Saint-Lambert** (1200) à proximité de la station de métro Tomberg ou de l&apos;UCL, notre équipe mobile circule de manière permanente pour vous garantir une arrivée dans des temps record.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Links links */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-4 text-xs font-bold text-slate-500">
            <li><Link href="/recherche-de-fuite-bruxelles" className="underline hover:text-blue-600">Recherche de Fuite Bruxelles</Link></li>
            <li><Link href="/plomberie" className="underline hover:text-blue-600">Plomberie Belgique</Link></li>
            <li><Link href="/debouchage-canalisation" className="underline hover:text-blue-600">Débouchage de Canalisation</Link></li>
            <li><Link href="/plombier-bruxelles" className="underline hover:text-blue-600">Plombier Bruxelles Centre</Link></li>
            <li><Link href="/contact" className="underline hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Form section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Des questions ou un dépannage ?</h2>
          <p className="text-slate-600">N&apos;attendez pas qu&apos;une petite fuite d&apos;eau devienne une catastrophe. Appelez-nous maintenant ou remplissez le formulaire.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
