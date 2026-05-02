"use client";

import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="py-24 relative z-10 border-t border-white/5 bg-[#00040A] overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-cyan-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
            <MessageSquare className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-blue-400 font-black tracking-widest uppercase mb-3 text-sm flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500"></span>
            Foire Aux Questions {city && `à ${city}`}
            <span className="w-8 h-[2px] bg-blue-500"></span>
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            {city
              ? `Expertise locale à ${city}`
              : "Vous avez une question ?"}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Nous avons les réponses.</span>
          </h3>
        </motion.div>

        <div className="space-y-4">
          {personalizedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden backdrop-blur-xl ${isOpen ? "border-blue-500/30 bg-[#010918]/90 shadow-[0_10px_40px_-15px_rgba(37,99,235,0.2)]" : "border-white/5 bg-[#010918]/60 hover:bg-[#010918]/80 hover:border-white/10"}`}
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between font-bold text-left text-white transition-colors focus:outline-none group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg transition-colors duration-300 pr-8 ${isOpen ? "text-blue-300" : "group-hover:text-blue-100"}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${isOpen ? "bg-blue-500/20 border-blue-500/50" : "bg-white/5 border-white/10 group-hover:bg-white/10"}`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-500 ${isOpen ? "rotate-180 text-blue-400" : "text-slate-400"}`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-slate-400 text-base leading-relaxed">
                        <div className="pt-6 border-t border-white/5">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
