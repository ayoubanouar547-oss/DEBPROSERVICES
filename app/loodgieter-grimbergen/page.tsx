import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Loodgieter Grimbergen : Dringende Herstelling & Ontstopping | Deb Pro",
  description: "Dringende loodgieter nodig in Grimbergen of Strombeek-Bever? Deb Pro Services is binnen 30 minuten ter plaatse for lekken, sanitair en ontstoppingen. Bel ons!",
  alternates: {
    canonical: "/loodgieter-grimbergen",
  },
};

export default function LoodgieterGrimbergenPage() {
  const faqs = [
    {
      question: "Hoe snel is een loodgieter ter plaatse in Grimbergen?",
      answer: "Voor dringende gevallen zijn onze loodgieters meestal binnen 30 tot 45 minuten ter plaatse in Grimbergen, Strombeek-Bever, Beigem en Humbeek."
    },
    {
      question: "Wat kost een dringende loodgieter-interventie in Grimbergen?",
      answer: "We hanteren transparante tarieven. Op basis van uw probleem geven we vooraf een duidelijke prijsindicatie of een gratis offerte ter plaatse, zodat u nooit voor verrassingen komt te staan."
    },
    {
      question: "Voeren jullie ook ontstoppingen uit in Grimbergen?",
      answer: "Ja, wij lossen alle ontstoppingpijn op: van verstopte toiletten (WC) en gootstenen tot de volledige reiniging van uw hoofdriool met onze professionele hogedrukapparatuur."
    },
    {
      question: "Zijn jullie loodgieters gecertificeerd voor herstellingen?",
      answer: "Absoluut. Al onze technici zijn erkende, ervaren professionals die werken volgens de strengste Belgische normen en kwaliteitsvereisten."
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
                "name": "Loodgieter Grimbergen",
                "serviceType": "Loodgieterij",
                "description": "Erkende loodgieter in Grimbergen voor dringende herstellingen, lekdetectie en ontstoppingen.",
                "areaServed": {
                  "@type": "City",
                  "name": "Grimbergen"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Deb Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/loodgieter-grimbergen"
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
            alt="Loodgieter Grimbergen - Deb Pro Services"
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
              <MapPin className="w-3.5 h-3.5" /> Grimbergen & Strombeek-Bever
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl">
              Loodgieter in Grimbergen: Snel & Professioneel
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
              Dringende loodgieter nodig met snelle service in Grimbergen, Beigem of Humbeek? Of het nu gaat om een hardnekkig waterlek, een verstopping of de herstelling van uw boiler, Deb Pro Services staat 24/7 klaar om u te helpen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0498352588"
                className="group bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] active:scale-95"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" /> Bel ons direct: 0498 35 25 88
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
              Onze Loodgietersdiensten in Grimbergen
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Wij bieden een totaaloplossing voor al uw loodgieterij- en herstellingsproblemen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="dienst-lek">
              <Droplet className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400">Dringende lekdetectie</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Een lek in de keuken, badkamer of verborgen in de muur? Onze loodgieters identificeren snel de oorzaak en lossen het lek vakkundig op om extra waterschade te vermijden.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="dienst-verstop">
              <Wrench className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400">Sanitair herstel & Boiler</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Reparatie of vervanging van defecte kranen, toiletten (WC), douches of uw boiler. Wij installeren professionele onderdelen met garantie op perfecte werking.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="dienst-ontstop">
              <Building className="w-10 h-10 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-blue-400">Ontstoppingsdienst</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Water dat niet meer wegloopt of een WC die overstroomt? Wij beschikken over moderne camera&apos;s en hogedrukreinigers om elke verstopping snel en grondig te verhelpen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#000814]/60 backdrop-blur-md border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* 4 Steps */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-blue-400">Interventie in 4 stappen</h2>
              <div className="space-y-8">
                {[
                  { title: "Telefonisch contact", desc: "U belt ons met uw noodsituatie. Onze dispatcher geeft direct praktisch advies (bijv. de hoofdkraan sluiten)." },
                  { title: "Verzending van de loodgieter", desc: "De dichtstbijzijnde mobiele loodgieter in de regio Grimbergen wordt direct naar uw adres gestuurd." },
                  { title: "Analyse & Offerte", desc: "Na grondige inspectie stelt de technicus een duidelijke diagnose en krijgt u een eerlijke prijsopgave vooraf." },
                  { title: "Vakkundige herstelling", desc: "Het probleem wordt opgelost met kwalitatieve materialen, waarna we de werkplek netjes achterlaten." }
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

            {/* Local Bullets */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-black mb-6 uppercase text-white tracking-tight">Waarom kiezen voor Deb Pro Services?</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium">
                Onze lokale aanwezigheid in Vlaams-Brabant stelt ons in staat om de allerbeste service te bieden.
              </p>
              <ul className="space-y-5">
                {[
                  "Altijd stand-by: 24 uur per dag, 7 dagen per week bereikbaar.",
                  "Binnen 30-45 minuten ter plaatse in de hele gemeente Grimbergen.",
                  "Transparante tarieven: geen verborgen opstartkosten of onaangename verrassingen.",
                  "Echte vakkennis en gebruik van professionele gereedschappen."
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

      {/* Nearby Areas */}
      <section className="py-20 bg-slate-950/20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Actief in heel Grimbergen</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Onze ervaren loodgieters bestrijken de gehele regio. Of u nu woont in het rustige <strong>Beigem</strong>, het groene <strong>Humbeek</strong>, de residentiële wijken van <strong>Strombeek-Bever</strong> of dicht bij de abdij in het centrum van <strong>Grimbergen</strong>: wij zijn uw betrouwbare loodgieter in de buurt.
            </p>
          </div>
        </div>
      </section>

      {/* Internal Linking Links */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-6 text-xs font-bold text-slate-400">
            <li><Link href="/zones-de-services/plomberie/grimbergen" className="hover:text-blue-400 transition-colors">Loodgieter Grimbergen Zone</Link></li>
            <li><Link href="/plomberie" className="hover:text-blue-400 transition-colors">Plomberie Belgique</Link></li>
            <li><Link href="/debouchage-canalisation" className="hover:text-blue-400 transition-colors">Débouchage de Canalisation</Link></li>
            <li><Link href="/chauffage" className="hover:text-blue-400 transition-colors">Chauffagiste</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Section */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Direct een loodgieter nodig?</h2>
          <p className="text-slate-300 font-medium">Wacht niet tot de wateroverlast escaleert. Vul het formulier in of bel ons meteen.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
