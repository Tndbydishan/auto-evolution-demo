import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Logo } from './Logo';
import { Footer } from './Footer';
import { Preloader } from './Preloader';
import { SmoothScroll } from './SmoothScroll';
import { NAV_LINKS, SOCIALS } from '../data';
import { PageId } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage: PageId;
}

export const Layout: React.FC<LayoutProps> = ({ children, activePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Only show Preloader on the Home page
  const [isLoading, setIsLoading] = useState(activePage === 'home');

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

  return (
    <div className="bg-[#F7F7F5] text-[#121212] min-h-screen relative">
      
      {/* PRELOADER - Only renders if isLoading is true (Home page only) */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)}>
          <Logo disableLink className="w-full text-[#141414]" />
        </Preloader>
      )}

      {/* FIXED LOGO - Removed mix-blend, set to dark color */}
      <div className="fixed top-8 left-6 lg:left-12 z-[110] pointer-events-auto text-[#121212]">
        <a href="index.html" className="cursor-pointer block">
          <Logo />
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

      {/* MAIN CONTENT - Native Flow */}
      {/* fade-in-page applied here to ensure content animates in, but doesn't break fixed nav */}
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