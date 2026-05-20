import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin, ArrowRight, Zap } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Électricien Grimbergen : Dépannage Panne & Conformité | Deb Pro",
  description: "Besoin d'un électricien qualifié à Grimbergen, Strombeek-Bever ou Vilvorde ? Dépannage électricité urgent 24/7, mise en conformité AREI, électricien agréé.",
  alternates: {
    canonical: "/electricien-grimbergen",
  },
};

export default function ElectricienGrimbergenPage() {
  const faqs = [
    {
      question: "Intervenez-vous pour une panne de courant totale à Grimbergen ?",
      answer: "Oui, un court-circuit ou une coupure de courant générale nécessite une action rapide. Notre électricien d'urgence est chez vous sous 30 à 45 minutes pour diagnostiquer le tableau et rétablir le courant."
    },
    {
      question: "Réalisez-vous la mise en conformité électrique AREI ?",
      answer: "Absolument. Nous mettons aux normes votre tableau, vos prises et vos circuits électriques, réalisons votre schéma unifilaire et coordonnons le contrôle pour l'obtention de votre certificat officiel de conformité."
    },
    {
      question: "Combien coûte le passage d'un électricien d'urgence à Grimbergen ?",
      answer: "Nous établissons un diagnostic précis dès notre arrivée et vous communiquons un prix transparent et sans surprises pour la recherche de défaut et la réparation."
    },
    {
      question: "Hulp in het Nederlands (Elektricien Grimbergen) ?",
      answer: "Ja, onze technici spreken ook Nederlands en kunnen u perfect helpen met al uw elektriciteitswerken, storingen en AREI-keuringen in Grimbergen."
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
                "name": "Électricien Grimbergen / Elektricien Grimbergen",
                "serviceType": "Électricité",
                "description": "Artisan électricien à Grimbergen pour dépannage de tableaux électriques, coupure de courant, AREI et nouvelles installations.",
                "areaServed": {
                  "@type": "City",
                  "name": "Grimbergen"
                },
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Deb Pro Service",
                  "telephone": "+32496325733",
                  "url": "https://debservices.canalrose.be/electricien-grimbergen"
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
            src="https://picsum.photos/seed/grimbergen-electricity/1920/1080"
            alt="Électricien Grimbergen"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-xs font-bold border border-blue-500/30 mb-6 uppercase tracking-widest text-blue-400">
              <MapPin className="w-3 h-3" /> Électricité & Urgence Grimbergen / Vilvorde
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Électricien Grimbergen : Dépannage Panne 24h/24 & AREI
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-light">
              Deb Pro Services met à votre disposition des électriciens professionnels pour tout dépannage électrique d&apos;urgence, courts-circuits, surcharge, mise aux normes AREI ou installation électrique à Grimbergen, Strombeek-Bever et Vilvorde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xl shadow-blue-600/20"
              >
                <PhoneCall className="w-5 h-5" /> Urgence Électricité : 0496 32 57 33
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Prestations Électricité à Grimbergen
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Chantiers de rénovation, mise aux normes obligatoires et pannes d&apos;électricité complexes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="elec-pann">
              <Zap className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Dépannage Panne & Court-circuit</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Recherche de surcharges, disjoncteur défectueux, câblage brûlé ou courts-circuits. Nous isolons la panne sous 30 min pour sécuriser votre installation.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="elec-conf">
              <CheckCircle className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Mise en Conformité AREI</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mise en conformité complète de votre tableau électrique, des mises à la terre et schémas nécessaires pour réussir le passage obligatoire à la vente.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-lg transition-transform hover:-translate-y-1 w-full" id="elec-inst">
              <Wrench className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">Nouveaux Circuits & Prises</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ajout de disjoncteurs différentiels pour pièces d&apos;eau, pose d&apos;interrupteurs modernes, luminaires ou alimentation électrique pour électroménagers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-slate-900 text-white rounded-t-[3rem] sm:rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Steps list */}
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight text-blue-400">Intervention rapide en électricité</h2>
              <div className="space-y-8">
                {[
                  { title: "Appel de signalement", desc: "Notre spécialiste évalue l&apos;urgence (odeur de brûlé, étincelle, coupure complète) pour vous guider instantanément." },
                  { title: "Arrivée d&apos;un électricien", desc: "Un électricien qualifié résidant près de Grimbergen se déplace rapidement équipé de matériel professionnel." },
                  { title: "Recherche de la cause", desc: "Diagnostic rigoureux des lignes, du différentiel et des composants pour identifier l&apos;origine exacte." },
                  { title: "Zéro risque, tout en sécurité", desc: "Résolution définitive, test des circuits au multimètre et s&apos;assurer que la tension est parfaitement stable." }
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
              <h3 className="text-2xl font-black mb-6 uppercase">La sécurité d&apos;un électricien de métier</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Les travaux d&apos;électricité mal réalisés représentent des risques majeurs d&apos;incendie (NBN C 15-101). Pour votre domicile en Province du Brabant Flamand, travaillez avec un vrai professionnel.
              </p>
              <ul className="space-y-5">
                {[
                  "Électriciens certifiés et d&apos;une grande maîtrise technique.",
                  "Prise de rendez-vous rapide pour vos chantiers de mise en conformité électrique.",
                  "Dépannage d&apos;urgence continu 24h/24 et 7j/7.",
                  "Schémas unifilaires et de position tracés selon les règles de l&apos;art."
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

      {/* Local Regional Segment */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Secteurs réguliers d&apos;intervention</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nos techniciens électriciens sillonnent activement la commune de <strong>Grimbergen</strong>, avec des déplacements habituels sur **Strombeek-Bever**, **Vilvoorde**, **Beigem** et **Humbeek**. Grâce à une organisation optimale, nous assurons des temps d&apos;attente écrasés pour toutes vos pannes ou chantiers électriques.
            </p>
          </div>
        </div>
      </section>

      {/* Link list */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-4 text-xs font-bold text-slate-500">
            <li><Link href="/loodgieter-grimbergen" className="underline hover:text-blue-600">Loodgieter Grimbergen (NL)</Link></li>
            <li><Link href="/plombier-grimbergen" className="underline hover:text-blue-600">Plombier Grimbergen</Link></li>
            <li><Link href="/zones-de-services/electricite/grimbergen" className="underline hover:text-blue-600">Electricité Grimbergen Zone</Link></li>
            <li><Link href="/electricite" className="underline hover:text-blue-600">Electricité Belgique</Link></li>
            <li><Link href="/contact" className="underline hover:text-blue-600">Demander un Électricien</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Form section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Contacter un électricien maintenant ?</h2>
          <p className="text-slate-600">Panne ou mise en conformité ? Remplissez notre formulaire ou téléphonez-nous pour une intervention rapide.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
