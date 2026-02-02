import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Auto Evolution Workshop Logo
 * Updated to use 'Akira Expanded' font.
 * grouped text for specific animation requirements.
 */
export const AutoEvoLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 417.18 72.17"
      className={className}
      aria-label="Auto Evolution Workshop Logo"
    >
      {/* Text Group - "AUTO EVOLUTION WORKSHOP" */}
      <g className="logo-text-group" style={{ fontFamily: 'Akira Expanded, sans-serif', fontWeight: 700 }}>
        
        {/* Row 1: AUTO EVOLUTION (Grouped for animation) */}
        <g className="logo-text-row-1">
          {/* AUTO - Original Pos: 124.23, 31.08 */}
          <text 
            className="fill-[#141414] text-[22.58px] uppercase" 
            x="124.23" 
            y="31.08"
          >
            AUTO
          </text>

          {/* EVOLUTION - Original Pos: 228.98, 30.89 */}
          <text 
            className="fill-[#141414] text-[22.58px] uppercase" 
            x="222.98" 
            y="31.08" 
          >
            EVOLUTION
          </text>
        </g>

        {/* Row 2: WORKSHOP (Separate for animation) */}
        <g className="logo-text-row-2">
          {/* WORKSHOP - Original Pos: 123.82, 54.87 */}
          <text 
            className="fill-[#141414] text-[22.58px] uppercase" 
            x="123.82" 
            y="54.87"
          >
            WORKSHOP
          </text>
        </g>
      </g>

      {/* Graphic Elements - Geometric Shapes */}
      <g className="logo-shapes-group">
        {/* Red Polygon Bottom Left */}
        <polygon className="fill-[#d02029]" points="36.68 72.17 52.89 72.17 72.65 25.54 56.44 25.55 36.68 72.17"/>
        {/* Black Polygon Top Left */}
        <polygon className="fill-[#141414]" points="42.26 58.99 58.48 58.99 78.24 12.36 62.03 12.37 42.26 58.99"/>
        
        {/* Red Polygon Right */}
        <polygon className="fill-[#d02029]" points="88.12 46.63 104.34 46.63 124.1 0 107.89 0 88.12 46.63"/>
        
        {/* Black Polygon Center Right */}
        <polygon className="fill-[#141414]" points="82.89 58.98 99.11 58.98 118.87 12.35 102.65 12.35 82.89 58.98"/>
        
        {/* Complex Black Path Left */}
        <path className="fill-[#141414]" d="M22.04,59.02h16.03S57.83,12.4,57.83,12.4l-26.33-.27c-7.07-.07-13.48,4.14-16.23,10.66L0,59.03h16.15l14.91-35.12c.36-.85.92-1.59,1.64-2.17l6.02-4.61h1.08s-17.76,41.89-17.76,41.89Z"/>
        
        {/* Red Polygon Center */}
        <polygon className="fill-[#d02029]" points="76.98 25.06 93.2 25.05 78.83 58.98 62.61 58.98 76.98 25.06"/>
      </g>
    </svg>
  );
};