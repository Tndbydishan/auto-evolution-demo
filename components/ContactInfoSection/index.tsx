import React from 'react';
import './ContactInfoSection.css';

export const ContactInfoSection: React.FC = () => {
  // We duplicate the text array to ensure the scroll is seamless.
  // The CSS animation translates -50%, so we need enough content to cover 200% width.
  const baseText = "THE PLACE YOU CAN TRUST";
  const repetitions = [1, 2, 3, 4]; // Repeat 4 times to be safe on wide screens

  return (
    <div className="cis-container">
      
      {/* 1. Infinite Scroll Marquee */}
      <div className="cis-marquee-wrapper">
        <div className="cis-marquee-track">
          {/* First Set */}
          {repetitions.map((i) => (
             <React.Fragment key={`set1-${i}`}>
               <span className="cis-marquee-item">
                 THE PLACE YOU CAN <span style={{ color: 'transparent', WebkitTextStroke: '2px #D12027' }}>TRUST</span>
               </span>
               <span className="cis-marquee-item" style={{ fontSize: '2rem', verticalAlign: 'middle', color: '#D12027' }}>
                 ✦
               </span>
             </React.Fragment>
          ))}
          {/* Duplicate Set (For seamless loop) */}
          {repetitions.map((i) => (
             <React.Fragment key={`set2-${i}`}>
               <span className="cis-marquee-item">
                 THE PLACE YOU CAN <span style={{ color: 'transparent', WebkitTextStroke: '2px #D12027' }}>TRUST</span>
               </span>
               <span className="cis-marquee-item" style={{ fontSize: '2rem', verticalAlign: 'middle', color: '#D12027' }}>
                 ✦
               </span>
             </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Content & Contact Details */}
      <div className="cis-content-wrapper">
        
        {/* Description Text */}
        <p className="cis-description">
          Need a quote? or want to contact us? Feel free to Connect. 
          We are open for <strong>Collaboration</strong> and committed to provide the best service.
        </p>

        {/* Contact Grid */}
        <div className="cis-details-grid">
          
          {/* Email Card */}
          <a href="mailto:auto.evolution.workshop@gmail.com" className="cis-detail-card">
            <div className="cis-icon-box">
              <i className="ri-mail-send-fill"></i>
            </div>
            <div className="cis-detail-info">
              <span className="cis-detail-label">Email Us</span>
              <span className="cis-detail-value">auto.evolution.workshop@gmail.com</span>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:+8801711278127" className="cis-detail-card">
            <div className="cis-icon-box">
              <i className="ri-phone-fill"></i>
            </div>
            <div className="cis-detail-info">
              <span className="cis-detail-label">Call Us</span>
              <span className="cis-detail-value">+8801711-278127</span>
            </div>
          </a>

        </div>

      </div>

    </div>
  );
};
