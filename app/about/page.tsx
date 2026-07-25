import { ShieldCheck, History, Award } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "🚨 À Propos de Nous — Entreprise Agréée ⚡",
  description:
    "Découvrez votre expert belge en plomberie, chauffage, et débouchage avec plus de 15 ans d'expérience. Entreprise familiale agréée intervenant 24/7.",
  keywords:
    "entreprise plomberie Belgique, plombier Bruxelles expert, chauffagiste Wallonie certifié, histoire",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "🚨 Qui sommes-nous ? — Expertise & Confiance ⚡",
    description:
      "Expertise, transparence et réactivité depuis plus de 15 ans partout en Belgique.",
    url: "https://debservices.canalrose.be/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 relative z-10 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://debservices.canalrose.be/#organization",
                name: "Deb Pro Service",
                image: "https://debservices.canalrose.be/logo.png",
                aggregateRating: {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "6854",
                  "bestRating": "5"
                },
                url: "https://debservices.canalrose.be",
                telephone: "+32492479201",
                vatID: "BE 1034.012.476",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Grimbergen",
                  addressRegion: "Vlaams-Brabant",
                  postalCode: "1850",
                  streetAddress: "Madeliefjesstraat 1/B006",
                  addressCountry: "BE",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id": "https://debservices.canalrose.be/about#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://debservices.canalrose.be",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "À Propos",
                    item: "https://debservices.canalrose.be/about",
                  },
                ],
              },
            ],
          }),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              L'Artisanat au service de votre sérénité
            </h1>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              DEB PRO SERVICES est une entreprise belge spécialisée dans la
              plomberie, le débouchage, le chauffage, le gaz, l'électricité et
              la vidange de fosses septiques. Fondée par des professionnels
              expérimentés, notre équipe intervient dans toute la Belgique avec
              réactivité, professionnalisme et transparence.
            </p>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Notre mission : résoudre vos problèmes rapidement, à des tarifs
              justes, avec des techniciens agréés et du matériel professionnel.
              Plus de 5000 clients nous font confiance chaque année.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2 font-bold text-blue-400 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full uppercase tracking-widest text-xs">
                <History className="w-5 h-5" /> 15 Ans Expérience
              </div>
              <div className="flex items-center gap-2 font-bold text-green-400 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full uppercase tracking-widest text-xs">
                <Award className="w-5 h-5" /> Entreprise Agréée
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop"
                fill
                alt="Notre équipe en intervention"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 flex items-center gap-4">
              <div className="bg-blue-500/20 text-blue-400 border border-blue-500/30 p-3 rounded-xl">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-sm text-white">
                  Garantie 1 An
                </p>
                <p className="text-xs text-slate-400">
                  Sur toutes nos interventions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
