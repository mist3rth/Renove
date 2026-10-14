import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface FinalCtaProps {
  onOpenContact: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenContact }) => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-neutral-900 flex items-center justify-center">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/final-cta-roof.webp"
          alt="Artisans couvreurs fixant des panneaux de toiture sur un chantier en Gironde"
          loading="lazy"
          decoding="async"
          width="1600"
          height="900"
          className="w-full h-full object-cover object-center brightness-85"
        />
        {/* Lighter mask overlay for much better image visibility */}
        <div className="absolute inset-0 bg-neutral-950/35" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.2] text-balance">
          Votre problème de toiture a une solution. Regardons cela ensemble.
        </h2>

        <p className="text-base sm:text-lg text-neutral-200 leading-relaxed max-w-2xl mx-auto font-normal">
          Réservez votre inspection gratuite et sans engagement aujourd'hui ou échangez avec un artisan couvreur local de Mérignac dès maintenant. Nous ferons un état des lieux précis, sans aucune pression commerciale.
        </p>

        <div className="pt-4">
          <Button
            onClick={onOpenContact}
            variant="primary"
            size="lg"
            className="group shadow-xl shadow-black/40"
          >
            <span>Obtenir mon inspection gratuite</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
