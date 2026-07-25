import { PhoneCall, MapPin, Clock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🚨 Spoed Loodgieter 24U/24 — Snelle Interventie 30 Min ⚡",
  description:
    "Dringende loodgieter, verwarmingsmonteur en ontstopping 24/7 overal in België. Lokale interventie binnen 30-60 minuten. Erkende technicus direct beschikbaar.",
  keywords:
    "spoed loodgieter België, SOS ontstopping leiding, reparatie verwarmingsketel nacht, elektricien spoed 24u/24",
  alternates: {
    canonical: "/nl/urgence",
  },
  openGraph: {
    title: "🚨 Spoedinterventie 24/7 — Snelle Service ⚡",
    description:
      "Een lek? Een storing? Een verstopping? Onze experts van wacht komen binnen een uur ter plaatse in heel België.",
    url: "https://debservices.canalrose.be/nl/urgence",
    type: "website",
  },
};

export default function UrgencePage() {
  return (
    <div className="pt-24 h-event">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Deb Pro Service - Spoed 24u/24",
            image: "https://debservices.canalrose.be/technician.png",
            "@id": "https://debservices.canalrose.be/nl/urgence",
            url: "https://debservices.canalrose.be/nl/urgence",
            telephone: "+32492479201",
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "6854",
              "bestRating": "5"
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Brussel Centrum",
              addressLocality: "Brussel",
              postalCode: "1000",
              addressCountry: "BE",
            },
            description:
              "Dringende loodgieter, verwarmingsmonteur en ontstopping 24/7 overal in België. Lokale interventie binnen 30-60 minuten.",
          }),
        }}
      />
      
      <section className="bg-gradient-to-br from-red-600 to-red-900 text-white py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 animate-pulse border border-white/10">
            Wachtdienst Actief
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
            Dringende Noodsituatie?
          </h1>
          <p className="text-xl mb-10 text-red-100 max-w-2xl mx-auto leading-relaxed">
            Onze wachttechnici zijn binnen 30 tot 60 minuten ter plaatse. Verlies geen tijd, bel ons direct voor onmiddellijke assistentie.
          </p>
          <div className="flex justify-center">
            <a
              href="tel:0492479201"
              className="flex items-center gap-3 bg-white text-red-700 hover:bg-gray-100 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-black text-xl md:text-2xl transition shadow-2xl active:scale-95"
            >
              <PhoneCall className="w-6 h-6 md:w-8 md:h-8 animate-pulse" /> 0492 47 92 01
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
              <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-white uppercase tracking-tight">
                24u/24 & 7j/7
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Volledige beschikbaarheid, inclusief weekenden, zondagen en wettelijke feestdagen voor al uw noodgevallen.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
              <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-white uppercase tracking-tight">
                Overal in België
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Onze vloot voertuigen rijdt door heel het land om een extreem snelle interventietijd te garanderen.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-md">
              <PhoneCall className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-white uppercase tracking-tight">
                Directe Assistentie
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Een expert staat u telefonisch te woord en adviseert u over de eerste handelingen om de schade te beperken.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        customFaqs={[
          {
            question: "Hoe snel is een technicus ter plaatse bij een noodgeval?",
            answer:
              "Wij doen er alles aan om binnen 30 tot 60 minuten ter plaatse te zijn, afhankelijk van het verkeer en de dichtstbijzijnde beschikbare technicus in uw regio.",
          },
          {
            question: "Kost een spoedinterventie meer geld?",
            answer:
              "Voor interventies 's nachts, in het weekend of op feestdagen kan een toeslag gelden. Wij communiceren dit echter altijd transparant vooraf via de telefoon voordat de technicus vertrekt.",
          },
          {
            question: "Welke noodgevallen behandelen jullie?",
            answer:
              "Grote waterlekken, volledig verstopte toiletten en hoofdleidingen, uitval van de verwarming in de winter, stroomstoringen en kortsluitingen.",
          },
          {
            question: "Wat moet ik doen in afwachting van de technicus?",
            answer:
              "Afhankelijk van de situatie raden we aan om de hoofdwaterkraan, gaskraan of de hoofdschakelaar van de elektriciteit dicht te draaien om de veiligheid te waarborgen.",
          },
        ]}
      />

      <ContactForm />
    </div>
  );
}
