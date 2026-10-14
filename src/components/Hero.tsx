import React, { useEffect, useRef } from 'react';
import { ArrowRight, Phone, Star, ShieldCheck, Clock } from 'lucide-react';
import { companyInfo } from '../data/roofingData';
import { Button } from './ui/Button';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const bgImageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect strict accessibility settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      // Parallaxe active tant que le hero est visible
      if (scrollY <= 1000) {
        if (bgImageRef.current) {
          // Parallaxe pure vers le haut (sans zoom) en harmonie avec le contenu qui remonte
          const translateY = -scrollY * 0.38;
          bgImageRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
        }
        if (contentRef.current) {
          // Le texte remonte vers le haut (avec décalage initial de -30px) et s'estompe
          const translateY = -30 - scrollY * 0.22;
          const opacity = Math.max(0, 1 - scrollY / 480);
          contentRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
          contentRef.current.style.opacity = `${opacity}`;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="sticky top-20 z-0 w-full min-h-[580px] lg:min-h-[700px] flex items-center overflow-hidden bg-neutral-900 will-change-transform">
      {/* Background Photography with Parallax & Contrast Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          ref={bgImageRef}
          src="/hero-roof.webp"
          alt="Artisan couvreur professionnel en plein travail d'installation de toiture en Gironde"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1080"
          className="w-full h-[145%] top-0 absolute object-cover object-[center_25%] will-change-transform pointer-events-none"
        />
        {/* Deep cinematic gradient scrim positioned to keep text on left ultra crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-neutral-950/30" />
      </div>

      {/* Hero Content - Flush left at exactly 30px from screen edge */}
      <div
        ref={contentRef}
        className="relative z-10 w-full px-[30px] py-16 sm:py-24 lg:py-28 -translate-y-[30px] will-change-transform"
      >
        <div className="max-w-2xl text-left">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-300">
              COUVERTURE AGRÉÉE & ASSURÉE EN GIRONDE
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] text-balance mb-5">
            Votre toiture mérite l'expertise d'artisans qualifiés
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed mb-8 max-w-xl">
            Une couverture de qualité conçue pour protéger durablement votre maison pendant des décennies.
          </p>

          {/* Action CTAs avec états hover et focus soignés */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Button
              onClick={onOpenContact}
              variant="primary"
              size="lg"
              className="group transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-xl hover:shadow-[#c85a32]/35 focus-visible:ring-4 focus-visible:ring-[#c85a32]/50"
            >
              <span>Obtenir mon inspection gratuite</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Button>

            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="px-5 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-white/40 text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center sm:items-start text-center sm:text-left justify-center cursor-pointer group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white"
            >
              <div className="flex items-center gap-2 text-sm font-semibold group-hover:text-neutral-100">
                <Phone className="w-4 h-4 text-[#c85a32] group-hover:scale-110 transition-transform duration-300" />
                <span>Appeler le {companyInfo.phone}</span>
              </div>
              <span className="text-[11px] text-neutral-300 font-normal">
                Appel d'urgence disponible !
              </span>
            </a>
          </div>

          {/* Social Proof & Warranty Indicators */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-neutral-200">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#c85a32] fill-[#c85a32] shrink-0" />
              <span>4.9 d'évaluation, +2 800 toits</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c85a32] shrink-0" />
              <span>Garantie de main-d'œuvre</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#c85a32] shrink-0" />
              <span>15 ans au service de la Gironde</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
