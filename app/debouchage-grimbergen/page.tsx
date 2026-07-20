import { Metadata } from "next";
import { PhoneCall, CheckCircle, Wrench, Droplet, Building, MapPin } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Débouchage Grimbergen : WC, Évier & Égout Bouché | Deb Pro",
  description: "Canalisation bouchée ou refoulement d'égout à Grimbergen, Strombeek-Bever & environs ? Nos techniciens interviennent d'urgence 24h/24 en 30 min. Devis gratuit.",
  alternates: {
    canonical: "/debouchage-grimbergen",
  },
};

export default function DebouchageGrimbergenPage() {
  const faqs = [
    {
      question: "Combien coûte une intervention de débouchage à Grimbergen ?",
      answer: "Un débouchage standard mécanique (au furet électrique professionnel) coûte généralement entre 90€ et 150€. Pour les engorgements sévères nécessitant un hydrocurage haute pression ou une inspection vidéo par caméra, nous réalisons systématiquement un devis gratuit avant toute intervention."
    },
    {
      question: "Combien de temps faut-il pour déboucher un WC récalcitrant ?",
      answer: "Dans la majorité des cas, nos déboucheurs de garde basés à Grimbergen règlent le problème en moins de 30 à 45 minutes après leur arrivée grâce à des outils professionnels adaptés."
    },
    {
      question: "Qui doit régler la facture du débouchage : le propriétaire ou le locataire ?",
      answer: "Selon la loi belge, le locataire est responsable de l'entretien courant et doit régler les débouchages liés à l'usage quotidien (accumulation de cheveux, graisses, objets). Si le problème provient d'une cassure de canalisation extérieure ou d'un affaissement de terrain, les frais incombent alors au propriétaire."
    },
    {
      question: "Intervenez-vous également le week-end et la nuit à Strombeek-Bever ?",
      answer: "Oui, notre centre d'appel d'urgence est joignable 24 heures sur 24 et 7 jours sur 7. Nos camions pompes circulent en permanence y compris les dimanches et jours fériés sans surcoût abusif."
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
                "description": "Dépannage débouchage canalisation, WC et égout urgent à Grimbergen par des experts agréés.",
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Grimbergen"
                  }
                ],
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
      <section className="relative pt-36 pb-24 overflow-hidden text-white border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[#000814]">
          <Image
            src="https://debouchageexpress24hh.odoo.com/web/image/4126-df5892ca/regenerated_image_1777411808057.png?height=600"
            alt="Débouchage Grimbergen - Deb Pro Services"
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000814] via-[#000814]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-500/10 backdrop-blur-md rounded-full text-xs font-extrabold border border-cyan-500/30 mb-6 uppercase tracking-widest text-cyan-400">
              <MapPin className="w-3.5 h-3.5" /> Province du Brabant Flamand
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight drop-shadow-xl font-oswald text-white">
              Débouchage à Grimbergen : Intervention 30 Min
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed font-medium">
              Votre évier déborde ? Vos toilettes sont condamnées ou des odeurs nauséabondes remontent de vos égouts ? Nos déboucheurs professionnels agréés à Grimbergen se déplacent en urgence 24h/24 pour libérer vos canalisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0496325733"
                className="group bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-black px-8 py-4 rounded-2xl flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] active:scale-95"
              >
                <PhoneCall className="w-5 h-5 animate-pulse" /> Urgence Débouchage : 0496 32 57 33
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
              Prestations Débouchage Professionnel à Grimbergen
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto font-medium">
              Nous disposons d&apos;outils de pointe pour résoudre n&apos;importe quel cas d&apos;engorgement de canalisation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-deb-wc">
              <Droplet className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-cyan-400">Débouchage WC & Toilettes</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Toilettes bouchées ou refoulement d&apos;eau ? Nous intervenons avec des furets électriques et des hydro-propulseurs de sécurité pour pulvériser le bouchon instantanément sans rayer vos céramiques.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-egouts">
              <Wrench className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-cyan-400">Curage Égouts & Chambres de Visite</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Nettoyage à haute pression (jusqu&apos;à 400 bars) à l&apos;aide d&apos;un camion hydrocureur pour décaper les dépôts de calcaire, graisses solidifiées et racines bloquant vos tuyauteries principales.
              </p>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col group" id="serv-evier">
              <Building className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3 leading-tight uppercase tracking-tight group-hover:text-cyan-400">Débouchage Évier & Douche</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Écoulement extrêmement lent dans la cuisine ou la douche ? Notre équipe nettoie vos siphons, canalisations d&apos;évacuation secondaires et élimine définitivement les graisses accumulées.
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
              <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tight text-cyan-400">Déroulement du dépannage</h2>
              <div className="space-y-8">
                {[
                  { title: "Appel & Conseil gratuit", desc: "Prise en charge téléphonique immédiate de votre problème avec tarification de base communiquée en toute honnêteté." },
                  { title: "Déplacement ultra-rapide", desc: "Un déboucheur de garde mobile à Grimbergen ou Strombeek est dépêché en moins de 30-45 minutes chez vous." },
                  { title: "Inspection & Diagnostic vidéo", desc: "Analyse interne des canalisations par caméra endoscopique HD si l&apos;origine du bouchon est difficile à cerner." },
                  { title: "Débouchage & test de débit", desc: "Pulvérisation complète du bouchon au furet ou à la pression, suivi d&apos;un rinçage abondant et d&apos;un test de mise en eau." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center font-black flex-shrink-0">
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
              <h3 className="text-2xl font-black mb-6 uppercase text-white tracking-tight">Un assainissement de confiance</h3>
              <p className="text-slate-300 text-sm mb-8 leading-relaxed font-medium font-medium">
                Notre entreprise d&apos;assainissement intervient dans le respect des règles environnementales belges les plus strictes.
              </p>
              <ul className="space-y-5">
                {[
                  "Déboucheurs qualifiés utilisant des outils de pointe (furets ROTHENBERGER, caméra RIDGID).",
                  "Pas d&apos;usage de produits chimiques nocifs pour vos tuyaux ou la faune aquatique.",
                  "Transparence tarifaire absolue : devis écrit approuvé par vos soins avant intervention.",
                  "Service joignable 24h/24 et 7j/7, pour particuliers, commerces et copropriétés."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
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
            <h4 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">Couverture Locale d&apos;urgence</h4>
            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              Nos camions pompes hydrocureurs circulent de jour comme de nuit à **Grimbergen**, **Strombeek-Bever**, **Humbeek**, **Beigem** ainsi que dans les communes voisines de Vilvorde, Wemmel, Meise et le nord de Bruxelles pour un assainissement rapide.
            </p>
          </div>
        </div>
      </section>

      {/* Links internal */}
      <section className="py-8 bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap lg:justify-center gap-6 text-xs font-bold text-slate-400">
            <li><Link href="/loodgieter-grimbergen" className="hover:text-cyan-400 transition-colors">Loodgieter Grimbergen (NL)</Link></li>
            <li><Link href="/plombier-grimbergen" className="hover:text-cyan-400 transition-colors">Plombier Grimbergen (FR)</Link></li>
            <li><Link href="/chauffagiste-grimbergen" className="hover:text-cyan-400 transition-colors">Chauffagiste Grimbergen</Link></li>
            <li><Link href="/debouchage-canalisation" className="hover:text-cyan-400 transition-colors">Nos Services Débouchage</Link></li>
            <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <FAQ customFaqs={faqs} />

      {/* Contact Section Form */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight font-oswald text-white">Vos canalisations font face à un bouchon ?</h2>
          <p className="text-slate-300 font-medium font-medium">N&apos;attendez pas que le problème s&apos;aggrave et cause des dégâts des eaux. Appelez-nous ou laissez un message.</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
