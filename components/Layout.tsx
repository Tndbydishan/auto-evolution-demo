import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Preloader } from './Preloader';
import { Logo } from './Logo';
import { SmoothScroll } from './SmoothScroll';
import { NAV_LINKS, SOCIALS } from '../data';
import { PageId } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activePage?: PageId;
  /** If true, the full preloader animation will run. Defaults to true. */
  enablePreloader?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activePage = 'home',
  enablePreloader = true 
}) => {
  const [isLoading, setIsLoading] = useState(enablePreloader);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation handler for MPA structure
  const handleNavigate = (page: PageId) => {
    const link = NAV_LINKS.find(l => l.id === page);
    if (link) {
      window.location.href = link.href;
    }
  };

  return (
    <>
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)}>
          {/* Logo passed as child to Preloader for the animation */}
          <Logo disableLink color="#d12027" />
        </Preloader>
      )}

      {/* Main Content Wrapper - Opacity fade in after loader */}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        
        <Navbar
          links={NAV_LINKS}
          socials={SOCIALS}
          isMobileMenuOpen={isMobileMenuOpen}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onNavigate={handleNavigate}
          activePage={activePage}
          theme="dark" // Force dark theme for Altrix aesthetic
        />

        <SmoothScroll>
          <main className="min-h-screen bg-[#121212] overflow-x-hidden">
            {children}
          </main>
          <Footer onNavigate={handleNavigate} />
        </SmoothScroll>
        
      </div>
    </>
  );
};