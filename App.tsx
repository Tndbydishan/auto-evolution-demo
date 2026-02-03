import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Logo } from './components/Logo';
import { Footer } from './components/Footer';
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
import { Registration } from './pages/Registration';


export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'training': return <Training />;
      case 'blogs': return <Blogs />;
      case 'contact': return <Contact />;
      case 'booking': return <Registration />;
      default: return <Home />;
    }
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); 
    if(isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#F7F7F5] text-[#121212] min-h-screen relative">
      
      {/* PRELOADER */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)}>
          <Logo disableLink className="w-full text-[#141414]" />
        </Preloader>
      )}

      {/* FIXED LOGO */}
      <div className="fixed top-8 left-6 lg:left-12 z-[110] pointer-events-auto mix-blend-difference text-[#F7F7F5]">
        <div onClick={() => setCurrentPage('home')} className="cursor-pointer">
          <Logo />
        </div>
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

      {/* CONTENT */}
      <main className="w-full relative z-10 fade-in-page">
        <SmoothScroll>
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
              {renderPage()}
            </div>
            <Footer onNavigate={handleNavigate} />
          </div>
        </SmoothScroll>
      </main>

    </div>
  );
}