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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative z-10 border-y border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold tracking-widest uppercase mb-2 text-sm">Foire Aux Questions</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white">
            Vous avez une question ? Nous avons les réponses.
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-200 overflow-hidden backdrop-blur-xl ${isOpen ? 'border-blue-500/50 bg-blue-600/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between font-bold text-left text-white transition-colors focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'}`} />
                </button>
                <div 
                  className={`px-6 pb-4 text-slate-300 transition-all duration-300 overflow-hidden text-sm leading-relaxed ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pb-0'}`}
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
