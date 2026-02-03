import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer'; // Import Footer
import { Preloader } from './components/Preloader';
import { SmoothScroll } from './components/SmoothScroll';
import { NAV_LINKS, SOCIALS } from './data';
import { PageId } from './types';

// Page Imports
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Training } from './pages/Training';
import { Blogs } from './pages/Blogs';
import { Contact } from './pages/Contact';


export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  /**
   * Page Router
   * Renders the component corresponding to the current state
   */
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'training': return <Training />;
      case 'blogs': return <Blogs />;
      case 'contact': return <Contact />;
      case 'booking': return <Contact />;
      default: return <Home />;
    }
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    // Note: window.scrollTo is handled by SmoothScroll logic usually, 
    // but we can force a reset here if needed for the virtual scroll.
    window.scrollTo(0, 0); 
  };

  return (
    <div className="bg-[#F7F7F5] text-[#121212] min-h-screen">
      
      {/* PRELOADER */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)}>
          <Logo disableLink className="w-full text-[#141414]" />
        </Preloader>
      )}

      {/* FIXED LOGO */}
      <div className="fixed top-8 left-6 lg:left-12 z-[110] pointer-events-auto">
        <div onClick={() => setCurrentPage('home')} className="cursor-pointer">
          <Logo />
        </div>
      </div>

      {/* DESKTOP ACTION BUTTON */}
      <div className="fixed top-8 right-12 z-[110] hidden min-[1440px]:block pointer-events-auto">
        <button 
          onClick={() => setCurrentPage('booking')}
          className="bg-[#D12027] text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-[0.15em] shadow-md flex items-center justify-center border border-[#D12027] hover:bg-white hover:text-[#D12027] transition-colors duration-300"
          style={{ fontFamily: '"Akira Expanded", sans-serif', mixBlendMode: 'normal' }}
        >
          Inquire
        </button>
      </div>

      {/* NAVBAR */}
      <Navbar 
        links={NAV_LINKS} 
        socials={SOCIALS} 
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onNavigate={handleNavigate}
        activePage={currentPage}
      />

      {/* DYNAMIC PAGE CONTENT WITH SMOOTH SCROLL */}
      <main className="fade-in-page">
        {/* 
          Bugatti Configuration:
          ease: 0.12 (Precise, solid weight. No floatiness.)
          enableSkew: false (DISABLED to prevent the "wave" / flexible distortion)
        */}
        <SmoothScroll ease={0.12} enableSkew={false}>
          <div className="min-h-screen flex flex-col">
            {/* Content Grows to fill space */}
            <div className="flex-grow">
              {renderPage()}
            </div>
            
            {/* Global Footer */}
            <Footer onNavigate={handleNavigate} />
          </div>
        </SmoothScroll>
      </main>

    </div>
  );
}