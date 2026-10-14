import React, { useEffect, useRef, useState } from 'react';
import { DollarSign, ShieldCheck, UserCheck, Layers, Sparkles, Award, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { AnimatedCounter } from './ui/AnimatedCounter';

interface WhyUsSectionProps {
  onOpenContact: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onOpenContact }) => {
  const [isVisible, setIsVisible] = useState(true);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect accessibility settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Reset initially on client side to trigger when scrolled into full view
    setIsVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const points = [
    {
      icon: DollarSign,
      title: 'Tarifs écrits et transparents, aucune facture surprise'
    },
    {
      icon: ShieldCheck,
      title: 'Equipes girondines certifiées, assurées et agréées'
    },
    {
      icon: UserCheck,
      title: 'Un artisan chef de chantier dédié sur chaque intervention'
    },
    {
      icon: Layers,
      title: 'Matériaux régionaux certifiés NF, zéro compromis sur la longévité'
    },
    {
      icon: Sparkles,
      title: 'Nettoyage quotidien du chantier avec ramasse-clous magnétique'
    },
    {
      icon: Award,
      title: "Couvert par notre garantie décennale écrite SMA BTP"
    }
  ];

  return (
    <section id="why-us" className="w-full py-20 lg:py-28 bg-[#101726] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Guarantees & Commitments */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c85a32] uppercase mb-3 inline-block">
                POURQUOI LES PROPRIÉTAIRES NOUS FONT CONFIANCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.15]">
                Un artisan couvreur sur lequel vous pouvez vraiment compter
              </h2>
            </div>

            {/* List observed directly with noticeable delay & stagger */}
            <div ref={listRef} className="space-y-5 pt-2">
              {points.map((pt, index) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={index}
                    style={{
                      transitionDelay: `${250 + index * 120}ms`
                    }}
                    className={`flex items-center gap-4 transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-8'
                    }`}
                  >
                    {/* Icon Centered at Middle of Text Height */}
                    <div className="w-9 h-9 rounded-lg bg-[#c85a32]/15 text-[#c85a32] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    {/* Text vertically aligned with icon center */}
                    <span className="text-base sm:text-lg text-neutral-200 font-medium leading-snug">
                      {pt.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Button
                onClick={onOpenContact}
                variant="primary"
                size="lg"
                className="group"
              >
                <span>Obtenir votre devis gratuit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column: Worker Photo with Floating Stats Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 shadow-2xl border border-white/10 bg-neutral-800">
              <img
                src="/why-us-trust.webp"
                alt="Artisan couvreur serrant la main d'un client propriétaire en Gironde"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Stat Card with Animated Counters */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:min-w-[280px] bg-white rounded-2xl p-5 shadow-2xl text-neutral-900 border border-neutral-100">
                <div className="grid grid-cols-2 divide-x divide-neutral-200 text-center sm:text-left">
                  <div className="pr-4">
                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight tabular-nums">
                      <AnimatedCounter
                        target={2800}
                        prefix="+"
                        duration={1600}
                        startTrigger={isVisible}
                      />
                    </div>
                    <div className="text-xs text-neutral-500 font-medium mt-0.5">
                      Toitures réalisées
                    </div>
                  </div>
                  <div className="pl-4">
                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight tabular-nums">
                      <AnimatedCounter
                        target={15}
                        suffix=" ans"
                        duration={1400}
                        startTrigger={isVisible}
                      />
                    </div>
                    <div className="text-xs text-neutral-500 font-medium mt-0.5">
                      En Gironde
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
