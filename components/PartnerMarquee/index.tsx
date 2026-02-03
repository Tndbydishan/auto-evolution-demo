import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './PartnerMarquee.css';

interface Partner {
  name: string;
  icon?: string;         
  logo?: string;         
  href?: string;         
  customWidth?: string;  
}

export const PartnerMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const partners: Partner[] = [
    { name: "Texa", logo: "/resources/logo-TEXA.jpg", href: "https://www.bosch.com", customWidth: "75px" },
    { name: "Bosch", logo: "/resources/bosch.svg", href: "https://www.bosch.com", customWidth: "140px" },
    { name: "Texa Edu", logo: "/resources/texaedu.png", href: "#", customWidth: "135px" },
    { name: "IMI", logo: "/resources/imi-logo-min-original.png", href: "https://www.motul.com", customWidth: "190px" },
    { name: "Electude", logo: "/resources/electude-logo-png-transparent.png", href: "https://www.denso.com", customWidth: "190px" },
    { name: "ASE", logo: "/resources/ase-logo.png", href: "https://www.brembo.com", customWidth: "80px" },
    { name: "Auto Evolution", logo: "/resources/auto-evolution.png", href: "https://www.brembo.com", customWidth: "180px" },
  ];

  // We duplicate the partners list to create the seamless loop effect.
  // [Set 1] [Set 2 (Clone)]
  // We ensure there are enough items to fill widespread monitors by repeating the source list first.
  const baseList = [...partners, ...partners]; // Ensure base is wide enough
  const renderList = [...baseList, ...baseList]; // Double it for the seamless animation logic

  const renderPartner = (p: Partner, index: number) => {
    const content = (
      <>
        {p.logo ? (
          <img 
            src={p.logo} 
            alt={`${p.name} Logo`} 
            className="pm-partner-logo"
            // Important: prevent dragging to not interfere with scroll events
            draggable={false}
            style={p.customWidth ? { width: p.customWidth } : {}}
          />
        ) : (
          <>
            {p.icon && <i className={`${p.icon} pm-partner-icon`}></i>}
            <span className="pm-partner-text">{p.name}</span>
          </>
        )}
      </>
    );

    const key = `partner-${index}-${p.name}`;
    if (p.href) {
      return <a key={key} href={p.href} target="_blank" rel="noopener noreferrer" className="pm-partner-item">{content}</a>;
    }
    return <div key={key} className="pm-partner-item">{content}</div>;
  };

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      // 1. Setup the Infinite Animation
      // We animate x from 0 to -50% (because the track contains exactly 2 copies of the base list)
      // When it reaches -50%, it wraps back to 0. Since the halves are identical, it's seamless.
      // Removed Observer control for constant unidirectional flow.
      gsap.to(track, { 
        xPercent: -50, 
        duration: 80, // Slower speed (increased from 30)
        ease: "none",
        repeat: -1
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pm-section" ref={containerRef}>
      
      <div className="pm-header">
        <h3 className="pm-title">Official Education Partners</h3>
        <div className="pm-line"></div>
      </div>
      
      <div className="pm-marquee-wrapper">
        <div className="pm-track" ref={trackRef}>
          {renderList.map((p, i) => renderPartner(p, i))}
        </div>
      </div>

    </section>
  );
};
