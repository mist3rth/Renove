import React from 'react';
import { Home, Wrench, CloudLightning, Droplets, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../data/roofingData';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { SectionHeader } from './ui/SectionHeader';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#c85a32] stroke-[1.8]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#c85a32] stroke-[1.8]" />;
      case 'CloudRain':
        return <CloudLightning className="w-6 h-6 text-[#c85a32] stroke-[1.8]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#c85a32] stroke-[1.8]" />;
      default:
        return <Home className="w-6 h-6 text-[#c85a32] stroke-[1.8]" />;
    }
  };

  return (
    <section id="services" className="w-full py-20 lg:py-28 bg-[#fbf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header mutualisé */}
        <SectionHeader
          eyebrow="CE QUE NOUS FAISONS EN GIRONDE"
          title="Des services de toiture complets, de A à Z"
          description="Une équipe d'artisans certifiés pour chaque besoin : de la réparation ciblée de fuite à la réfection totale, avec la même rigueur."
        />

        {/* Services List with Stagger and Before/After Sliders */}
        <div className="space-y-16 lg:space-y-24">
          {servicesData.map((service, index) => {
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className={`scroll-mt-24 lg:scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  index !== servicesData.length - 1 ? 'pb-16 lg:pb-24 border-b border-[#e4dfd7]' : ''
                }`}
              >
                {/* Left Column: Details & Staggered Checklist */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Service Icon with subtle pulse */}
                  <div className="w-12 h-12 rounded-xl bg-[#c85a32]/10 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-110">
                    {getIcon(service.icon)}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-medium text-[#18181b] tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#52525b] text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist with 0.08s Stagger delay */}
                  <ul className="space-y-3.5 pt-2">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        style={{
                          transitionDelay: `${fIndex * 80}ms`
                        }}
                        className="flex items-center gap-3 text-sm sm:text-base font-medium text-[#27272a] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-1"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#c85a32] stroke-[1.8] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Interactive Before/After Slider */}
                <div className="lg:col-span-7 w-full">
                  <BeforeAfterSlider
                    beforeImage={service.beforeImage}
                    afterImage={service.afterImage}
                    beforeLabel={service.beforeLabel}
                    afterLabel={service.afterLabel}
                    title={service.title}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
