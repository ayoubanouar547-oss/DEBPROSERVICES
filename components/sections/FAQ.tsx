'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Combien coûte un débouchage en Belgique ?",
    answer: "Le tarif d'un débouchage varie selon la complexité de l'intervention et l'heure. En journée, comptez entre 80€ et 200€. Pour une intervention d'urgence la nuit ou le week-end, les tarifs peuvent être majorés. Contactez-nous pour un devis gratuit."
  },
  {
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer: "Oui, DEB PRO SERVICES est disponible 24h/24, 7j/7, y compris les week-ends et jours fériés, partout en Belgique. Notre équipe d'urgence est toujours prête à intervenir."
  },
  {
    question: "Quels types de canalisations pouvez-vous déboucher ?",
    answer: "Nous débouchons tous types de canalisations : WC, éviers, baignoires, douches, colonnes montantes, égouts et canalisations extérieures. Nous utilisons le furet électrique, la haute pression et la caméra d'inspection pour les cas complexes."
  },
  {
    question: "Proposez-vous des devis gratuits ?",
    answer: "Oui, nous proposons des devis gratuits et sans engagement pour tous nos services. Contactez-nous par téléphone ou via notre formulaire en ligne. Un technicien vous rappelle dans l'heure."
  },
  {
    question: "Dans quelles villes intervenez-vous en Belgique ?",
    answer: "DEB PRO SERVICES intervient dans toute la Belgique : Bruxelles et toute la région, Liège, Mons, Charleroi, Namur, Louvain, Anvers, Gand et toutes les communes environnantes. Consultez notre page zones de services pour plus de détails."
  }
];

export function FAQ({ city }: { city?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const personalizedFaqs = faqs.map(faq => {
    if (!city) return faq;
    return {
      question: faq.question.replace(/Belgique/g, city),
      answer: faq.answer.replace(/Belgique/g, city)
    };
  });

  return (
    <section className="py-32 relative z-10 border-y border-white/5 bg-[#00040a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-blue-500 font-black tracking-[0.4em] uppercase mb-6 text-xs italic">Guide Pratique</h2>
          <h3 className="text-4xl md:text-7xl font-black text-white font-oswald uppercase tracking-tighter leading-none">
            {city ? `Expertise à ${city}` : "Questions <br/><span className='text-blue-500'>Fréquentes</span>"}
          </h3>
        </div>

        <div className="space-y-6">
          {personalizedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`rounded-[2rem] transition-all duration-500 overflow-hidden backdrop-blur-3xl border ${isOpen ? 'border-blue-500/30 bg-blue-600/[0.03] shadow-[0_20px_50px_rgba(59,130,246,0.1)]' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'}`}
              >
                <button
                  className="w-full px-10 py-8 flex items-center justify-between font-black text-left text-white transition-all focus:outline-none uppercase tracking-widest text-sm md:text-base font-oswald"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <div className={`p-3 rounded-xl transition-all duration-500 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-slate-500'}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                <div 
                  className={`px-10 pb-8 text-slate-400 transition-all duration-500 overflow-hidden text-lg font-medium leading-relaxed ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={!isOpen}
                >
                  <p className="pt-8 border-t border-white/10">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
