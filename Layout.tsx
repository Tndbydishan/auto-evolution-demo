import React, { useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  // NAVIGATION HANDLER
  // Removed hardcoded routeMap to support infinite sub-paths/hashes passed via 'url'
  const handleNavigate = (page: PageId, url?: string) => {
    // Default fallback if URL is missing (should not happen with updated Navbar)
    const targetUrl = url || '/';

    if (isMobileMenuOpen) {
        // 1. Visually close the menu first
        setIsMobileMenuOpen(false);
        
        // 2. Wait for the closing animation to finish (approx 600ms)
        // This prevents the menu from getting stuck on screen while the new page loads.
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 600);
    } else {
        // Desktop or Footer navigation - standard immediate redirect
        window.location.href = targetUrl;
    }
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
        <a href="/" className="cursor-pointer block">
          <Logo />
        </a>
      </div>

      {/* DESKTOP ACTION BUTTON */}
      <div className="fixed top-8 right-12 z-[110] hidden min-[1440px]:block pointer-events-auto">
        <a 
          href="/booking/"
          className="bg-[#D12027] text-white px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-[0.15em] shadow-md flex items-center justify-center border border-[#D12027] hover:bg-white hover:text-[#D12027] transition-colors duration-300 no-underline"
          style={{ fontFamily: '"Akira Expanded", sans-serif', mixBlendMode: 'normal' }}
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

      {/* DYNAMIC PAGE CONTENT WITH SMOOTH SCROLL */}
      <main className="fade-in-page">
        <SmoothScroll ease={0.12} enableSkew={false}>
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