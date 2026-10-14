import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TrustBar } from './components/TrustBar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { StatsBanner } from './components/StatsBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { LocalMapSection } from './components/LocalMapSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ContactPage } from './pages/ContactPage';
import { JsonLd } from './components/seo/JsonLd';
import { useLenis } from './hooks/useLenis';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');
  const lenisRef = useLenis();

  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo(0, 0);
        lenisRef.current?.scrollTo(0, { immediate: true });
      } else {
        setCurrentPage('home');
        const anchor = hash.replace('#', '');
        if (anchor) {
          setTimeout(() => {
            lenisRef.current?.resize();
            const el = document.getElementById(anchor);
            if (el) {
              if (lenisRef.current) {
                lenisRef.current.scrollTo(el, { offset: -80, duration: 1.0 });
              } else {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }, 100);
        }
      }
    };

    // Synchronisation au chargement initial
    if (window.location.hash === '#contact') {
      setCurrentPage('contact');
    }

    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, [lenisRef]);

  const handleNavigate = (page: 'home' | 'contact', anchorId?: string) => {
    const isPageChanging = currentPage !== page;
    setCurrentPage(page);

    if (typeof window !== 'undefined') {
      const targetHash = page === 'contact' ? '#contact' : (anchorId ? `#${anchorId}` : '');
      if (window.location.hash !== targetHash) {
        window.history.pushState(null, '', targetHash || window.location.pathname);
      }

      if (page === 'contact') {
        // En arrivant sur la page formulaire, se positionner en haut
        window.scrollTo(0, 0);
        lenisRef.current?.scrollTo(0, { immediate: true });
        lenisRef.current?.resize();
      } else if (page === 'home') {
        if (anchorId) {
          const performScroll = () => {
            lenisRef.current?.resize();
            const element = document.getElementById(anchorId);
            if (element) {
              if (lenisRef.current) {
                lenisRef.current.scrollTo(element, { offset: -80, duration: 1.1 });
              } else {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          };

          if (isPageChanging) {
            // Remise à zéro pour stabiliser l'affichage avant le défilement vers l'ancre
            window.scrollTo(0, 0);
            lenisRef.current?.scrollTo(0, { immediate: true });
            setTimeout(performScroll, 150);
          } else {
            requestAnimationFrame(performScroll);
          }
        } else {
          // Retour en haut de la page d'accueil (ex: clic sur le logo)
          if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { duration: 1.0 });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          lenisRef.current?.resize();
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8f5] flex flex-col font-sans text-[#18181b]">
      {/* Schema.org Structured Data */}
      <JsonLd />

      {/* Demo Disclaimer Banner (Projet portfolio, entreprise fictive, plage ARCEP) */}
      <aside aria-label="Avertissement site de démonstration" className="bg-[#18181b] text-neutral-300 text-xs py-2 px-4 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#c85a32] text-white">
              Démo Portfolio
            </span>
            <span className="text-[11px] sm:text-xs">
              Site de démonstration — Entreprise et avis fictifs à des fins de présentation technique.
            </span>
          </div>
          <span className="text-[11px] text-neutral-400 font-mono">
            Numéro fiction ARCEP : 05 36 49 12 34
          </span>
        </div>
      </aside>

      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {currentPage === 'home' ? (
        <main className="flex-1 relative">
          {/* Hero Section (Sticky Parallax Background) */}
          <Hero onOpenContact={() => handleNavigate('contact')} />

          {/* Content Wrapper that slides over the Hero */}
          <div className="relative z-10 bg-[#fbf8f5] shadow-[0_-25px_60px_rgba(0,0,0,0.25)] rounded-t-[32px] sm:rounded-t-[44px] -mt-6 sm:-mt-10 overflow-hidden">
            {/* Trust Certifications Bar */}
            <TrustBar />

            {/* Complete Roofing Services with Interactive Before/After Sliders */}
            <ServicesSection />

            {/* Why Homeowners Trust Us (Dark Section with Floating Stat Card) */}
            <WhyUsSection onOpenContact={() => handleNavigate('contact')} />

            {/* How It Works - 3 Step Process */}
            <ProcessSection />

            {/* Numbers / Key Metrics Banner */}
            <StatsBanner />

            {/* Reviews & Social Proof (2x2 Grid with Terracotta Borders) */}
            <ReviewsSection />

            {/* Local Geo & Google Map Section (SEO Local Gironde 33) */}
            <LocalMapSection onOpenContact={() => handleNavigate('contact')} />

            {/* Questions Answered - FAQ Accordion */}
            <FaqSection onOpenContact={() => handleNavigate('contact')} />

            {/* Final Call To Action Banner */}
            <FinalCta onOpenContact={() => handleNavigate('contact')} />
          </div>
        </main>
      ) : (
        <main className="flex-1">
          {/* Full Page Contact & Free Inspection Request Form */}
          <ContactPage onBackToHome={() => handleNavigate('home')} />
        </main>
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
