import React from 'react';
import { ShieldCheck, HardHat, BadgePercent, Award } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      icon: ShieldCheck,
      label: 'Agréé & Assuré'
    },
    {
      icon: HardHat,
      label: 'Certifié Constructeur'
    },
    {
      icon: BadgePercent,
      label: 'Financement Disponible'
    },
    {
      icon: Award,
      label: "+15 Ans d'Expérience"
    }
  ];

  return (
    <div className="w-full bg-[#fbf8f5] border-b border-[#ece6de]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium text-[#2d2c2a]"
              >
                <div className="text-[#c85a32] shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                </div>
                <span className="whitespace-nowrap">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
