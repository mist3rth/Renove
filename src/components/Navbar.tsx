import React, { useState } from 'react';
import { Phone, ArrowRight, Menu, X, Home as HomeIcon } from 'lucide-react';
import { companyInfo } from '../data/roofingData';

interface NavbarProps {
  currentPage: 'home' | 'contact';
  onNavigate: (page: 'home' | 'contact', anchorId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    onNavigate('home', anchorId);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbf8f5]/95 backdrop-blur-md border-b border-[#ece6de] transition-colors w-full">
      <div className="w-full px-[30px] flex items-center justify-between h-20">
        
        {/* Logo Brand Zone - exactly 30px from the left edge */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-hidden text-left shrink-0"
          aria-label="Renove Accueil - Couvreur Gironde"
        >
          <div className="w-10 h-10 rounded-xl bg-[#c85a32] flex items-center justify-center text-white shadow-xs group-hover:bg-[#b54f2a] transition-colors">
            <HomeIcon className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold tracking-tight text-[#18181b] leading-none">
              Renove
            </span>
            <span className="text-[10px] tracking-wider font-semibold text-[#c85a32] uppercase mt-0.5">
              Gironde 33
            </span>
          </div>
        </button>

        {/* Center Navigation Links & Right Action Zone */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          <nav className="flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#4b4a49]">
            <button
              onClick={() => handleLinkClick('services')}
              className="hover:text-[#18181b] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleLinkClick('why-us')}
              className="hover:text-[#18181b] transition-colors cursor-pointer"
            >
              Pourquoi nous
            </button>
            <button
              onClick={() => handleLinkClick('process')}
              className="hover:text-[#18181b] transition-colors cursor-pointer"
            >
              Processus
            </button>
            <button
              onClick={() => handleLinkClick('reviews')}
              className="hover:text-[#18181b] transition-colors cursor-pointer"
            >
              Avis
            </button>
            <button
              onClick={() => handleLinkClick('localisation')}
              className="hover:text-[#c85a32] transition-colors cursor-pointer font-semibold"
            >
              Localisation
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="hover:text-[#18181b] transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          <div className="flex items-center gap-5 xl:gap-6">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex flex-col items-end text-right group"
              aria-label={`Appeler le ${companyInfo.phone}`}
            >
              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#18181b] group-hover:text-[#c85a32] transition-colors">
                <span>{companyInfo.phone}</span>
                <Phone className="w-4 h-4 text-[#4b4a49] group-hover:text-[#c85a32] transition-colors" />
              </div>
              <span className="text-[11px] text-[#6b6966] font-normal">
                Bordeaux & Mérignac
              </span>
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
                currentPage === 'contact'
                  ? 'bg-[#c85a32] text-white hover:bg-[#b54f2a]'
                  : 'bg-white border border-[#d6cfc7] text-[#18181b] hover:border-[#18181b] hover:bg-[#f6f2ec]'
              }`}
            >
              <span>Inspection gratuite</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile View Right Zone */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="p-2 text-[#c85a32]"
            aria-label="Appeler d'urgence"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#18181b] hover:bg-[#ece6de] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#ece6de] bg-[#fbf8f5] px-[30px] pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => handleLinkClick('services')}
              className="text-left px-3 py-2 text-base font-medium text-[#18181b] rounded-lg hover:bg-[#ece6de] cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => handleLinkClick('why-us')}
              className="text-left px-3 py-2 text-base font-medium text-[#18181b] rounded-lg hover:bg-[#ece6de] cursor-pointer"
            >
              Pourquoi nous
            </button>
            <button
              onClick={() => handleLinkClick('process')}
              className="text-left px-3 py-2 text-base font-medium text-[#18181b] rounded-lg hover:bg-[#ece6de] cursor-pointer"
            >
              Processus
            </button>
            <button
              onClick={() => handleLinkClick('reviews')}
              className="text-left px-3 py-2 text-base font-medium text-[#18181b] rounded-lg hover:bg-[#ece6de] cursor-pointer"
            >
              Avis clients
            </button>
            <button
              onClick={() => handleLinkClick('localisation')}
              className="text-left px-3 py-2 text-base font-medium text-[#c85a32] rounded-lg hover:bg-[#ece6de] cursor-pointer font-semibold"
            >
              Localisation & Carte
            </button>
            <button
              onClick={() => handleLinkClick('faq')}
              className="text-left px-3 py-2 text-base font-medium text-[#18181b] rounded-lg hover:bg-[#ece6de] cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          <div className="pt-3 border-t border-[#ece6de] space-y-3">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-[#18181b] bg-white rounded-lg border border-[#d6cfc7]"
            >
              <span>{companyInfo.phone} (Mérignac / Urgence)</span>
              <Phone className="w-4 h-4 text-[#c85a32]" />
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('contact');
              }}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-[#c85a32] text-white flex items-center justify-center gap-2 hover:bg-[#b54f2a] cursor-pointer"
            >
              <span>Demander une inspection gratuite</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
