import React from 'react';
import { EduLogo } from './EduLogo';
import './TrainingHeader.css';

interface TrainingHeaderProps {
  imageSrc?: string;
  className?: string;
}

export const TrainingHeader: React.FC<TrainingHeaderProps> = ({ 
  imageSrc = "https://images.unsplash.com/photo-1530046339160-711535b94977?q=80&w=2940&auto=format&fit=crop",
  className = ""
}) => {
  return (
    <div className={`th-container ${className}`}>
      <div className="th-grid">
        
        {/* Content Column */}
        <div className="th-content-col">
          
          {/* Brand Row */}
          <div className="th-brand-row">
            <EduLogo className="th-edu-logo" />
            <div className="th-brand-line"></div>
            <span className="th-brand-text">Academy Division</span>
          </div>

          {/* Headlines */}
          <h1 className="th-headline">
            Most Advanced <br/>
            <span className="th-headline-highlight">Automotive Learning Hub</span>
          </h1>

          {/* Description */}
          <p className="th-description">
            Bridging the gap between <strong>theoretical engineering</strong> and <strong>practical mastery</strong>. 
            Our facility offers OEM-certified training environments equipped with the latest diagnostic infrastructure.
          </p>

          {/* Stats / Proof */}
          <div className="th-stats-row">
             <div className="th-stat-item">
               <span className="th-stat-value">500+</span>
               <span className="th-stat-label">Graduates</span>
             </div>
             <div className="th-stat-item">
               <span className="th-stat-value">20+</span>
               <span className="th-stat-label">Courses</span>
             </div>
             <div className="th-stat-item">
               <span className="th-stat-value">100%</span>
               <span className="th-stat-label">Hands-On</span>
             </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="th-image-col">
          <img 
            src={imageSrc} 
            alt="Automotive Training Facility" 
            className="th-hero-image" 
          />
          <div className="th-image-overlay"></div>
          
          {/* Floating Badge */}
          <div className="th-badge">
             <span className="th-badge-text">Admissions Open</span>
             <span className="th-badge-sub">Fall 2024 Batch</span>
          </div>
        </div>

      </div>
    </div>
  );
};