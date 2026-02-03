import React from 'react';
import './ContactInfoSection.css';

export const ContactInfoSection: React.FC = () => {
  // Seamless loop configuration
  const repetitions = [1, 2, 3, 4]; 

  return (
    <div className="cis-container">
      
      {/* 1. Infinite Scroll Marquee */}
      <div className="cis-marquee-wrapper">
        <div className="cis-marquee-track">
          {/* First Set */}
          {repetitions.map((i) => (
             <React.Fragment key={`set1-${i}`}>
               <span className="cis-marquee-item">
                 THE PLACE YOU CAN <span className="cis-text-outline">TRUST</span>
               </span>
               <span className="cis-marquee-item">
                 <span className="cis-star">✦</span>
               </span>
             </React.Fragment>
          ))}
          {/* Duplicate Set (For seamless loop) */}
          {repetitions.map((i) => (
             <React.Fragment key={`set2-${i}`}>
               <span className="cis-marquee-item">
                 THE PLACE YOU CAN <span className="cis-text-outline">TRUST</span>
               </span>
               <span className="cis-marquee-item">
                 <span className="cis-star">✦</span>
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