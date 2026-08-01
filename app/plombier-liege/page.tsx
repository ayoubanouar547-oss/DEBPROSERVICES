import { Metadata } from "next";
import { PhoneCall, CheckCircle, Clock, ShieldCheck, MapPin, ChevronRight } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le Meilleur Plombier à Liège - Devis Gratuit 24/7 | Pro Services",
  description: "Besoin d'un plombier à Liège ? Pro Services intervient en 30 minutes pour fuites, débouchages et sanitaires. Devis gratuit ☎ 0498 35 25 88.",
  alternates: {
    canonical: "/plombier-liege",
  },
};

export default function PlombierLiegePage() {
  const faqs = [
    {
      question: "Intervenez-vous dans le quartier de la Médiacité ?",
      answer: "Oui, nous couvrons le quartier Longdoz et tout le périmètre de la Médiacité pour les dépannages urgents de plomberie et de chauffage."
    },
    {
      question: "Quel est le délai moyen d'arrivée vers le Thier-à-Liège ?",
      answer: "Grâce à nos techniciens basés localement, nous arrivons généralement en moins de 35 minutes, même aux heures de pointe sur les quais."
    },
    {
      question: "Proposez-vous des contrats d'entretien pour les syndics à Liège ?",
      answer: "Absolument, nous collaborons avec de nombreux gestionnaires d'immeubles liégeois pour assurer la maintenance préventive des colonnes d'évacuation et des salles d'eau."
    },
    {
      question: "Que faire en cas d'odeur d'égout dans une cave en Outremeuse ?",
      answer: "En Outremeuse, les fondations sont sensibles à l'humidité. Contactez-nous pour une inspection par caméra afin de détecter toute fissure ou engorgement dans vos canalisations."
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
                "name": "Plombier Liège",
                "serviceType": "Plomberie",
                "description": "Dépannage plomberie urgent à Liège : fuites, débouchage, installation sanitaire.",
                "areaServed": {
                  "@type": "City",
                  "name": "Liège"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/plombier-liege"
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
      <section className="relative pt-32 pb-20 overflow-hidden text-white">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://picsum.photos/seed/liege-plumbing/1920/1080"
            alt="Plombier Liège - Pro Service"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-xs font-bold border border-blue-500/30 mb-6 uppercase tracking-widest text-blue-400">
              <MapPin className="w-3 h-3" /> Bruxelles & Wallonie (Liège Focus)
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6">
              Plombier à Liège : Expert en Dépannage 24h/24
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              À Liège, les problèmes de plomberie ne préviennent jamais. Qu'il s'agisse d'une vieille tuyauterie dans le quartier du Laveu ou d'un souci de pression dans le centre-ville, Pro Service mobilise ses artisans liégeois pour des interventions rapides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0498 35 25 88"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-red-600/30"
              >
                <PhoneCall className="w-5 h-5" /> Urgence Liège : 0498 35 25 88
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Gestion du calcaire à Liège</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                L'eau à Liège est réputée pour sa dureté. Nous installons des adoucisseurs et détartrons vos chauffe-eau pour prolonger la vie de vos équipements sanitaires et éviter l'obstruction des canalisations.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Modernisation des maisons anciennes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                De nombreux logements liégeois possèdent encore des segments de tuyauterie en plomb ou en fonte. Nous réalisons la mise en conformité et le remplacement par des matériaux modernes et durables.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">Urgences après orages</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                En bord de Meuse, les caves sont sensibles aux remontées. Nous installons et réparons vos pompes de relevage pour protéger vos fondations contre les infiltrations d'eau accidentelles.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase">Processus d'intervention en 4 étapes</h2>
              <div className="space-y-6">
                {[
                  { title: "Appel immédiat", desc: "Contactez notre ligne directe disponible 24h/24 pour une prise en charge instantanée." },
                  { title: "Diagnostic sur place", desc: "Arrivée de notre technicien local en moins de 40 minutes partout à Liège." },
                  { title: "Devis transparent", desc: "Explication claire des travaux nécessaires et validation du prix fixe avant de commencer." },
                  { title: "Réparation et nettoyage", desc: "Intervention propre, soignée, et vérification complète du circuit après travaux." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{step.title}</h4>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-10 text-white">
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Pourquoi choisir notre équipe liégeoise ?</h2>
              <ul className="space-y-4 mb-8">
                {[
                  "Artisans basés à Liège connaissant parfaitement les quartiers (St-Léonard, Coronmeuse, Grivegnée)",
                  "Experts en détartrage de circuits impactés par le calcaire de la Meuse",
                  "Intervention rapide sur les chantiers de rénovation du centre historique",
                  "Disponibilité totale pour les urgences résidentielles week-end et jours fériés"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
                <p className="text-xs text-slate-300 italic mb-4">
                  \"Nous intervenons également avec la même réactivité à Seraing, Herstal, Ans, Flémalle, Oupeye et Saint-Nicolas.\"
                </p>
                <a href="tel:0498 35 25 88" className="w-full bg-white text-slate-900 font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-100 transition">
                  <PhoneCall className="w-4 h-4" /> 0498 35 25 88
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Nos autres pôles d'expertise</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Dépannage Fuite", url: "/plomberie/depannage" },
              { label: "Installation Sanitaire", url: "/plomberie/installation-sanitaire" },
              { label: "Débouchage Liège", url: "/debouchage-canalisation" },
              { label: "Chauffagiste Liège", url: "/chauffage" },
              { label: "Urgence Gaz", url: "/gaz" }
            ].map((link, i) => (
              <Link key={i} href={link.url} className="px-5 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ customFaqs={faqs} />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Demander un Devis Gratuit à Liège</h2>
          <p className="text-slate-600">Remplissez le formulaire ci-dessous pour toute intervention non urgente ou demande de prix pour vos travaux de plomberie.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
