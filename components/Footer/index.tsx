import React from 'react';
import { Logo } from '../Logo';
import { NAV_LINKS, LEGAL_LINKS, SOCIALS } from '../../data/index';
import { PageId } from '../../types';
import './footer.css';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // If it's a page anchor link like "#contact", we try to use the onNavigate handler
    if (href.startsWith('#') && onNavigate) {
      const id = href.replace('#', '') as PageId;
      // Simple check if the id is roughly valid (optional)
      if (['home', 'about', 'services', 'training', 'blogs', 'contact', 'booking'].includes(id)) {
        e.preventDefault();
        onNavigate(id);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* TOP: Brand & Links */}
        <div className="footer-top">
          
          {/* Brand Column */}
          <div className="footer-brand">
            {/* Changed Logo color to dark for light background */}
            <Logo color="#121212" />
            <p className="footer-tagline">
              Performance. Precision. Perfection.<br/>
              Defining the future of automotive engineering.
            </p>

            {/* SOS Emergency Button */}
            <a href="tel:+15550123456" className="footer-sos-btn" aria-label="Call Emergency Services">
              <i className="ri-alarm-warning-fill"></i>
              <span>SOS Emergency</span>
            </a>
          </div>

          {/* Links Columns Grid */}
          <div className="footer-links-wrapper">
            
            {/* Col 1: Main Menu */}
            <div className="footer-col">
              <h4 className="footer-col-title">Menu</h4>
              <ul className="footer-link-list">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <a 
                      href={link.href} 
                      className="footer-link"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2: Company (Subset of Legal or specific items) */}
            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-link-list">
                <li><a href="#about" className="footer-link" onClick={(e) => handleNavClick(e, '#about')}>About Us</a></li>
                {LEGAL_LINKS.slice(0, 2).map((link, idx) => (
                   <li key={idx}><a href={link.href} className="footer-link">{link.label}</a></li>
                ))}
                <li><a href="#booking" className="footer-link" onClick={(e) => handleNavClick(e, '#booking')}>Inquire</a></li>
              </ul>
            </div>

            {/* Col 3: Legal */}
            <div className="footer-col">
              <h4 className="footer-col-title">Legal</h4>
              <ul className="footer-link-list">
                {LEGAL_LINKS.slice(2).map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM: Copyright & Socials */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <div>&copy; 2026 Auto Evolution Workshop. All Rights Reserved.</div>
            <div className="footer-dev-credit">Developed by Merces Tech</div>
          </div>

          <div className="footer-socials">
            {SOCIALS.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="Social Link"
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};