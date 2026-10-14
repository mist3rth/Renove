import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/roofingData';

interface LocalMapSectionProps {
  onOpenContact: () => void;
}

export const LocalMapSection: React.FC<LocalMapSectionProps> = ({ onOpenContact }) => {
  // Coordonnées Mérignac / Bordeaux
  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-0.6900%2C44.8100%2C-0.5900%2C44.8650&layer=mapnik&marker=${companyInfo.latitude}%2C${companyInfo.longitude}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${companyInfo.address}, ${companyInfo.postalCode} ${companyInfo.city}`)}`;

  return (
    <section id="localisation" className="scroll-mt-24 lg:scroll-mt-28 w-full py-20 lg:py-28 bg-[#f5efe6] border-t border-[#e4dfd7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#c85a32] uppercase mb-3 inline-block">
            PROXIMITÉ & ANCRAGE LOCAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#18181b] tracking-tight mb-4">
            Votre couvreur de proximité en Gironde (33)
          </h2>
          <p className="text-base sm:text-lg text-[#52525b] leading-relaxed">
            Basés à Mérignac, nos artisans interviennent rapidement dans toute la métropole bordelaise et jusqu'au Bassin d'Arcachon.
          </p>
        </div>

        {/* 2-Column Grid : Map on Left, Agency Card & Cities on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-[#d6cfc7] bg-white min-h-[380px] sm:min-h-[460px] relative flex flex-col">
            <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#ece6de] shadow-md flex items-center gap-2 text-xs sm:text-sm font-bold text-[#18181b]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Dépôt & Atelier : {companyInfo.city} (33)</span>
            </div>

            <iframe
              title={`Carte de localisation de ${companyInfo.name} à ${companyInfo.city}`}
              src={mapEmbedUrl}
              className="w-full h-full flex-1 border-0 min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            <div className="p-4 bg-white border-t border-[#ece6de] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
              <span className="text-[#52525b]">
                Rayon d'intervention d'urgence : <strong>{companyInfo.serviceRadiusKm} km</strong>
              </span>
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#c85a32] font-semibold hover:underline"
              >
                <Navigation className="w-4 h-4" />
                <span>Ouvrir dans Google Maps</span>
              </a>
            </div>
          </div>

          {/* Local Workshop Info & Covered Cities */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-7 sm:p-9 rounded-3xl border border-[#e4dfd7] shadow-lg">
            
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-medium text-[#18181b] tracking-tight">
                Atelier & Siège d'Exploitation
              </h3>

              {/* Address & Contacts */}
              <div className="space-y-3.5 text-sm sm:text-base text-[#4b4a49]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c85a32]/10 text-[#c85a32] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#18181b]">{companyInfo.address}</div>
                    <div>{companyInfo.postalCode} {companyInfo.city} (Bordeaux Métropole)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c85a32]/10 text-[#c85a32] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a href={`tel:${companyInfo.phoneRaw}`} className="font-semibold text-[#18181b] hover:text-[#c85a32] transition-colors">
                      {companyInfo.phone}
                    </a>
                    <span className="text-xs text-neutral-500 ml-2">(Ligne directe locale)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c85a32]/10 text-[#c85a32] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-medium text-[#18181b]">{companyInfo.hours}</div>
                  </div>
                </div>
              </div>

              {/* Covered Cities Badges for Local SEO */}
              <div className="pt-3 border-t border-[#ece6de]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#18181b] mb-3">
                  Communes desservies en priorité :
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {companyInfo.coveredCities.map((city, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#fbf8f5] text-[#27272a] border border-[#e4dfd7]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-[#ece6de] flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenContact}
                className="flex-1 px-5 py-3 rounded-xl bg-[#c85a32] hover:bg-[#b54f2a] text-white text-sm font-semibold transition-all cursor-pointer shadow-md text-center"
              >
                Demander un devis en Gironde
              </button>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="px-4 py-3 rounded-xl border border-[#d6cfc7] bg-white text-[#18181b] text-sm font-semibold hover:bg-neutral-50 transition-all text-center"
              >
                Appeler l'atelier
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
