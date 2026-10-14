import React from 'react';
import { Home as HomeIcon, Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../data/roofingData';

interface FooterProps {
  onNavigate: (page: 'home' | 'contact', anchorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#fbf8f5] border-t border-[#ece6de] text-[#18181b]">
      <div className="w-full px-[30px] py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2.5 text-left cursor-pointer focus:outline-hidden"
              aria-label="Renove Toiture Gironde"
            >
              <div className="w-9 h-9 rounded-xl bg-[#c85a32] flex items-center justify-center text-white shadow-xs">
                <HomeIcon className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#18181b] leading-none">
                  Renove
                </span>
                <span className="text-[10px] tracking-wider font-semibold text-[#c85a32] uppercase mt-0.5">
                  Gironde 33
                </span>
              </div>
            </button>
            <p className="text-sm text-[#52525b] leading-relaxed max-w-sm">
              Artisan couvreur zingueur certifié réalisant des diagnostics impartiaux et des poses de haute précision dans toute la métropole bordelaise et la Gironde depuis 2011.
            </p>
          </div>

          {/* Column 1: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#18181b]">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#52525b]">
              <li>
                <button
                  onClick={() => onNavigate('home', 'service-remplacement')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left"
                >
                  Remplacement de toiture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'service-reparation')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left"
                >
                  Réparation de toiture ciblée
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'service-intemperies')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left"
                >
                  Dégâts d'intempéries & grêle
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'service-fuite')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left"
                >
                  Détection & réparation de fuites
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Entreprise & Localisation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#18181b]">
              Entreprise
            </h4>
            <ul className="space-y-2.5 text-sm text-[#52525b]">
              <li>
                <button
                  onClick={() => onNavigate('home', 'why-us')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left"
                >
                  Pourquoi nous
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'process')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left"
                >
                  Notre méthode
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'reviews')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left"
                >
                  Avis clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'localisation')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left font-semibold"
                >
                  Carte & Zone 33
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'faq')}
                  className="hover:text-[#c85a32] transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contactez-nous */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#18181b]">
              Contact & Dépôt
            </h4>
            <ul className="space-y-2.5 text-sm text-[#52525b]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c85a32] shrink-0" />
                <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-[#c85a32] transition-colors font-medium">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c85a32] shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#c85a32] transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c85a32] shrink-0 mt-0.5" />
                <span>{companyInfo.address}, {companyInfo.postalCode} {companyInfo.city}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright bar */}
        <div className="mt-14 pt-8 border-t border-[#e4dfd7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <p>© 2026 {companyInfo.name}. Tous droits réservés. Gironde & Métropole Bordelaise.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('contact')} className="hover:text-[#18181b] transition-colors cursor-pointer">
              Demande de devis
            </button>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[#18181b] transition-colors cursor-pointer">
              Mentions Légales & RGPD
            </span>
            <span aria-hidden="true">·</span>
            <span className="hover:text-[#18181b] transition-colors cursor-pointer">
              Garantie Décennale SMA BTP
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
