import React from 'react';
import { processSteps } from '../data/roofingData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="w-full py-20 lg:py-28 bg-[#fbf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c85a32] uppercase mb-3 inline-block">
            SIMPLE & TRANSPARENT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18181b] tracking-tight mb-5">
            Notre méthode, du premier contact au dernier clou
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Découvrez pourquoi les propriétaires nous confient leurs travaux pour un résultat impeccable et durable.
          </p>
        </div>

        {/* 3 Process Steps Rows */}
        <div className="space-y-12 lg:space-y-16">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center ${
                index !== processSteps.length - 1 ? 'pb-12 lg:pb-16 border-b border-[#e4dfd7]' : ''
              }`}
            >
              {/* Step Number & Title */}
              <div className="md:col-span-3 flex items-center gap-4">
                <span className="text-xl sm:text-2xl font-bold text-[#c85a32] tabular-nums">
                  {step.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-medium text-[#18181b]">
                  {step.title}
                </h3>
              </div>

              {/* Step Image */}
              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden aspect-16/9 bg-neutral-200 shadow-sm border border-neutral-200/80">
                  <img
                    src={step.image}
                    alt={step.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Step Description */}
              <div className="md:col-span-4">
                <p className="text-[#52525b] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
