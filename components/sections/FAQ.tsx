"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quels sont les services proposés par DEB PRO SERVICES ?",
    answer:
      "Nous sommes une entreprise multiservice intervenant dans toute la Belgique. Nos experts couvrent : le débouchage de canalisations, la plomberie générale, le chauffage (gaz et mazout), l'électricité, la climatisation, et la vidange de fosse septique. Nous réalisons également des rénovations complètes.",
  },
  {
    question: "Quel est le délai d'intervention pour une urgence ?",
    answer:
      "Pour toute urgence (fuite d'eau, WC bouché, panne de chauffage ou panne de courant), nos techniciens se déplacent partout en Belgique avec un délai d'intervention moyen de 30 à 60 minutes, 24h/24 et 7j/7.",
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer:
      "Oui, la transparence est notre priorité. Nous proposons un devis gratuit et sans engagement avant chaque intervention. Vous connaissez le prix exact avant le début de tout travail.",
  },
  {
    question: "Intervenez-vous la nuit, le week-end et les jours fériés ?",
    answer:
      "Absolument. DEB PRO SERVICES dispose d'équipes de garde disponibles de jour comme de nuit, y compris les week-ends et tous les jours fériés pour assurer votre confort et votre sécurité.",
  },
  {
    question: "Vos techniciens sont-ils agréés ?",
    answer:
      "Oui, notre équipe est composée de professionnels certifiés et agréés dans leurs domaines respectifs (plombiers, chauffagistes, électriciens AREI, techniciens gaz CERGA, frigoristes F-Gas).",
  },
];

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({
  city,
  customFaqs,
}: {
  city?: string;
  customFaqs?: FAQItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const baseFaqs = customFaqs || faqs;

  const personalizedFaqs = baseFaqs.map((faq) => {
    if (!city) return faq;
    return {
      question: faq.question.replace(/Belgique/g, city),
      answer: faq.answer.replace(/Belgique/g, city),
    };
  });

  return (
    <section className="py-24 relative z-10 border-y border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-sm">
            Foire Aux Questions {city && `à ${city}`}
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white">
            {city
              ? `Expertise locale à ${city}`
              : "Vous avez une question ? Nous avons les réponses."}
          </h3>
        </div>

        <div className="space-y-4">
          {personalizedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-200 overflow-hidden backdrop-blur-xl ${isOpen ? "border-blue-500/50 bg-blue-600/10" : "border-white/10 bg-white/5 hover:bg-white/10"}`}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between font-bold text-left text-white transition-colors focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-400" : "text-slate-400"}`}
                  />
                </button>
                <div
                  className={`px-6 pb-4 text-slate-300 transition-all duration-300 overflow-hidden text-sm leading-relaxed ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pb-0"}`}
                  aria-hidden={!isOpen}
                >
                  <p className="pt-2 border-t border-white/10">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
