import React from 'react';
import './SOS.css';

interface SOSProps {
  phoneNumber?: string;
  className?: string;
}

export const SOS: React.FC<SOSProps> = ({
  phoneNumber = "+8801716815647", // Default emergency line
  className = ""
}) => {
  return (
    <div className={`sos-container ${className}`}>
      
      {/* Background Icon Watermark */}
      <div className="sos-watermark">
        <i className="ri-alarm-warning-fill sos-watermark-icon"></i>
      </div>

      <div className="sos-grid">
        
        {/* LEFT COLUMN: ACTION */}
        <div className="sos-action-col">
            <div className="sos-header-group">
                <div className="sos-icon-pulse">
                   <i className="ri-alarm-warning-fill"></i>
                </div>
                <h2 className="sos-title">
                    SOS <span>EMERGENCY</span>
                </h2>
            </div>
            
            <p className="sos-description">
                Critical vehicle failure? Stranded in an unsafe location? 
                Our Quick Response Team (QRT) is on standby 24/7.
            </p>

            {/* BUTTON */}
            <a href={`tel:${phoneNumber}`} className="sos-btn group">
                <div className="sos-btn-icon-wrapper">
                     <i className="ri-phone-fill text-lg"></i>
                </div>
                
                <div className="sos-btn-text-col">
                    <span className="sos-btn-label-sm">
                        24/7 Priority
                    </span>
                    <span className="sos-btn-label-lg">
                        Call SOS Now
                    </span>
                </div>
            </a>
            
            <p className="sos-disclaimer">
                * By clicking, you will be connected to our priority dispatch line.
            </p>
        </div>

        {/* RIGHT COLUMN: INFORMATION */}
        <div className="sos-info-col">
            
            {/* Usage Scenarios */}
            <div>
                <h3 className="sos-section-heading">
                    <i className="ri-question-fill"></i> When to use SOS?
                </h3>
                <ul className="sos-list-grid">
                    {[
                        "Severe Engine Failure",
                        "Accident Recovery",
                        "Tyre Blowout on Highway",
                        "Dead Battery in Remote Area",
                        "Critical Overheating",
                        "Suspension Collapse"
                    ].map((item, i) => (
                        <li key={i} className="sos-list-item">
                             <span className="sos-bullet"></span>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Implementation & Instructions */}
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="sos-section-heading">
                        Implementation & Coverage
                    </h3>
                    <p className="sos-text">
                        Implemented exclusively for the <strong>Greater Dhaka Metropolitan Area</strong>. 
                        Our recovery units are stationed at strategic points to ensure a <strong>maximum 30-minute response time</strong> within city limits.
                    </p>
                </div>

                <div>
                    <h3 className="sos-section-heading">
                        Directions for Use
                    </h3>
                    <ol className="sos-ordered-list">
                        <li>Ensure you and your passengers are in a safe position.</li>
                        <li>Press the SOS button to contact our dispatcher.</li>
                        <li>Share your live GPS location via WhatsApp/SMS when prompted.</li>
                    </ol>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};
