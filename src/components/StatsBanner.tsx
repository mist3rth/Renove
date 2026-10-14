import React, { useEffect, useRef, useState } from 'react';
import { AnimatedCounter } from './ui/AnimatedCounter';

export const StatsBanner: React.FC = () => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      target: 2800,
      decimals: 0,
      suffix: '+',
      label: 'Toitures réalisées en Gironde'
    },
    {
      target: 15,
      decimals: 0,
      suffix: ' ans',
      label: 'D’expérience artisanale'
    },
    {
      target: 4.9,
      decimals: 1,
      suffix: '',
      label: 'Note Google vérifiée'
    },
    {
      target: 24,
      decimals: 0,
      suffix: 'h',
      label: "Délai d'astreinte urgence"
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 lg:py-24 bg-[#101726] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Architectural Image on Left */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl overflow-hidden aspect-16/10 shadow-xl border border-white/10 bg-neutral-800">
              <img
                src="/stats-roof.webp"
                alt="Architecture toiture et tuiles en terre cuite de Gironde"
                loading="lazy"
                decoding="async"
                width="600"
                height="375"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 4 Animated Stats on Right */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white tabular-nums">
                    <AnimatedCounter
                      target={stat.target}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      duration={1700}
                      startTrigger={hasTriggered}
                    />
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
