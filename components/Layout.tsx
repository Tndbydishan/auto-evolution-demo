import React, { useState, useEffect } from 'react';
// Explicitly importing from /index to bypass duplicate flat files (Navbar.tsx vs Navbar/index.tsx)
import { Navbar } from './Navbar/index';
import { Logo } from './Logo/index';
import { Footer } from './Footer/index';
import { Preloader } from './Preloader/index';
import { SmoothScroll } from './SmoothScroll/index';
import { NAV_LINKS, SOCIALS } from '../data';
import { PageId } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: PageId;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // PRELOADER: Defaults to true if we are on the 'home' page AND it hasn't been shown yet in this session.
  const [isLoading, setIsLoading] = useState(() => {
    if (activePage !== 'home') return false;
    // Check if user has already seen the preloader in this session
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    return !hasSeenPreloader;
  });

  // Manage Body Scroll Lock when Mobile Menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMobileMenuOpen]);

  // Navigation Handler
  const handleNavigate = (page: PageId, url?: string) => {
    const targetUrl = url || (page === 'home' ? 'index.html' : `${page}.html`);

    if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 600);
    } else {
        window.location.href = targetUrl;
    }
  };

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Mark as seen so it doesn't show again in this session
    sessionStorage.setItem('hasSeenPreloader', 'true');
  };

  return (
    <div className="bg-[#F7F7F5] text-[#121212] min-h-screen relative">
      
      {/* PRELOADER - Only renders if isLoading is true (Home page only) */}
      {isLoading && (
        <Preloader onComplete={handlePreloaderComplete}>
          <Logo disableLink className="w-full text-[#141414]" />
        </Preloader>
      )}

      {/* FIXED LOGO */}
      <div className="fixed top-8 left-6 lg:left-12 z-[110] pointer-events-auto text-[#121212]">
        <a href="index.html" className="cursor-pointer block">
          <Logo color="#121212" />
        </a>
      </div>

      {/* DESKTOP ACTION BUTTON */}
      <div className="fixed top-8 right-12 z-[110] hidden min-[1440px]:block pointer-events-auto">
        <a 
          href="booking.html"
          className="bg-[#D12027] text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-[0.15em] shadow-md flex items-center justify-center border border-[#D12027] hover:bg-white hover:text-[#D12027] transition-colors duration-300 no-underline"
          style={{ fontFamily: '"Akira Expanded", sans-serif' }}
        >
          Inquire
        </a>
      </div>

      {/* NAVBAR */}
      <Navbar 
        links={NAV_LINKS} 
        socials={SOCIALS} 
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onNavigate={handleNavigate}
        activePage={activePage}
      />

      {/* MAIN CONTENT - Native Flow with Fade In */}
      <main className="w-full relative z-10 fade-in-page">
        <SmoothScroll>
          <div className="min-h-screen flex flex-col">
            
            {/* Content Grows to fill space */}
            <div className="flex-grow">
              {children}
            </div>
            
            {/* Global Footer */}
            <Footer onNavigate={handleNavigate} />
            
          </div>
        </SmoothScroll>
      </main>

    </div>
  );
};