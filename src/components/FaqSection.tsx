import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { faqData } from '../data/roofingData';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-20 lg:py-28 bg-[#fbf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c85a32] uppercase mb-3 inline-block">
                QUESTIONS FRÉQUENTES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18181b] tracking-tight leading-[1.15]">
                Pas de mauvaises surprises, des réponses claires
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
              Les interrogations que les propriétaires de Gironde nous posent le plus, avant même de décrocher leur téléphone.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-5 py-3 rounded-xl border border-[#d6cfc7] bg-white text-[#18181b] hover:border-[#18181b] hover:bg-[#f6f2ec] transition-all font-semibold text-sm inline-flex items-center gap-2 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#c85a32]"
              >
                <span>Posez-nous vos questions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion with smooth height animation on open & close */}
          <div className="lg:col-span-7 divide-y divide-[#e4dfd7]">
            {faqData.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id} className="py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#c85a32] rounded-lg p-1 -m-1"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-lg sm:text-xl font-medium text-[#18181b] group-hover:text-[#c85a32] transition-colors leading-snug">
                      {faq.question}
                    </h3>
                    <div
                      className={`text-neutral-600 group-hover:text-[#c85a32] shrink-0 p-1 rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'rotate-180 text-[#c85a32]' : 'rotate-0'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[2]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[2]" />
                      )}
                    </div>
                  </button>

                  {/* Smooth animated accordion drawer for open AND close */}
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pt-4'
                        : 'grid-rows-[0fr] opacity-0 pt-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base text-[#52525b] leading-relaxed pb-1">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
