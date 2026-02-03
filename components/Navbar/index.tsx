import React, { useState, useEffect } from 'react';
import { NavItem, SocialItem, NavTheme, PageId } from '../../types';
import './navbar.css';

interface NavbarProps {
  links: NavItem[];
  socials?: SocialItem[]; 
  theme?: NavTheme;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onNavigate: (page: PageId) => void;
  activePage: PageId;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  links, 
  theme = 'light',
  isMobileMenuOpen,
  onToggleMobileMenu,
  onNavigate,
  activePage
}) => {
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  // Responsive Check
  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1440;
      setIsDesktop(isLargeScreen);
      
      if (isLargeScreen && isMobileMenuOpen) {
        onToggleMobileMenu();
        setActiveMobileSubmenu(null);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, onToggleMobileMenu]);

  // Handlers
  const handleToggle = () => {
    if (isMobileMenuOpen) {
      setTimeout(() => setActiveMobileSubmenu(null), 300);
    }
    onToggleMobileMenu();
  };

  const handleLinkClick = (e: React.MouseEvent, id: PageId) => {
    e.preventDefault(); // Prevent default anchor jump
    onNavigate(id);
    if (!isDesktop && isMobileMenuOpen) {
      onToggleMobileMenu();
      setTimeout(() => setActiveMobileSubmenu(null), 300);
    }
  };

  return (
    <>
      {/* =========================================
          🖥️ DESKTOP NAVBAR 
      ========================================= */}
      {isDesktop && (
        <nav className={`nav-navbar ${theme}`}>
          <ul className="nav-list">
            {links.map((link) => {
              const isActive = activePage === link.id;
              
              return (
                <li key={link.id} className="nav-item">
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                  </a>

                  {/* Dropdown */}
                  {link.subItems && (
                    <div className="nav-dropdown">
                       <div className="nav-dropdown-content">
                         {link.subItems.map((sub, sIdx) => (
                           <a 
                            key={sIdx} 
                            href={sub.href} 
                            className="nav-dropdown-link"
                           >
                             {sub.label}
                           </a>
                         ))}
                       </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* =========================================
          📱 MOBILE NAVBAR 
      ========================================= */}
      {!isDesktop && (
        <>
          {/* Hamburger Button */}
          <button
            onClick={handleToggle}
            className={`nav-hamburger ${theme}`}
            aria-label="Toggle Menu"
          >
             {/* Open Icon (Hamburger) */}
             <i className={`ri-menu-4-line nav-icon nav-icon-open ${isMobileMenuOpen ? 'hidden' : 'visible'}`}></i>
             
             {/* Close Icon (X) */}
             <i className={`ri-close-line nav-icon nav-icon-close ${isMobileMenuOpen ? 'visible' : 'hidden'}`}></i>
          </button>

          {/* Full Screen Overlay */}
          <div className={`nav-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
             <div className="nav-mobile-content-wrapper">
                
                {/* Main Menu Layer */}
                <div className={`nav-mobile-menu-container ${activeMobileSubmenu ? 'shifted' : ''}`}>
                   <ul className="nav-mobile-list">
                     {links.map((link, idx) => {
                        const isActive = activePage === link.id;
                        // Stagger delay for entry animation
                        const delayStyle = { transitionDelay: isMobileMenuOpen ? `${0.2 + (idx * 0.05)}s` : '0s' };

                        return (
                          <li key={link.id} className="nav-mobile-anim-item" style={delayStyle}>
                             {link.subItems ? (
                                <button 
                                  onClick={() => setActiveMobileSubmenu(link.id)}
                                  className={`nav-mobile-link-btn ${isActive ? 'active' : ''}`}
                                >
                                  {link.label}
                                  <i className="ri-arrow-right-line" style={{ fontSize: '20px', opacity: 0.5 }}></i>
                                </button>
                             ) : (
                                <a 
                                  href={link.href}
                                  onClick={(e) => handleLinkClick(e, link.id)}
                                  className={`nav-mobile-link ${isActive ? 'active' : ''}`}
                                >
                                  {link.label}
                                </a>
                             )}
                          </li>
                        );
                     })}

                     {/* Inquire Button (Mobile Only) */}
                     <li className="nav-mobile-anim-item" style={{ transitionDelay: isMobileMenuOpen ? `${0.2 + (links.length * 0.05)}s` : '0s' }}>
                       <div style={{ marginTop: '1rem' }}>
                         <button 
                           onClick={() => {
                             onNavigate('booking');
                             if (isMobileMenuOpen) onToggleMobileMenu();
                           }}
                           className="nav-mobile-inquire"
                         >
                           Inquire
                         </button>
                       </div>
                     </li>
                   </ul>
                </div>

                {/* Submenu Layers */}
                {links.map(link => link.subItems && (
                  <div 
                    key={link.id}
                    className={`nav-mobile-submenu-container ${activeMobileSubmenu === link.id ? 'active' : ''}`}
                  >
                    <button 
                      onClick={() => setActiveMobileSubmenu(null)}
                      className="nav-mobile-back"
                    >
                      <i className="ri-arrow-left-line"></i> 
                      <span>Back</span>
                    </button>
                    
                    <h3 className="nav-mobile-submenu-title">
                      {link.label}
                    </h3>

                    <ul className="nav-mobile-submenu-list">
                      {link.subItems.map((sub, sIdx) => (
                        <li key={sIdx} style={{ 
                            opacity: activeMobileSubmenu === link.id ? 1 : 0,
                            transform: activeMobileSubmenu === link.id ? 'translateX(0)' : 'translateX(30px)',
                            transition: `all 0.6s cubic-bezier(0.65, 0, 0.35, 1) ${0.1 + (sIdx * 0.05)}s`
                        }}>
                          <a href={sub.href} className="nav-mobile-submenu-link">
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
             </div>
          </div>
        </>
      )}
    </>
  );
};