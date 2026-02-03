import React from 'react';
import './smooth.css';

interface SmoothScrollProps {
  children: React.ReactNode;
  ease?: number; 
  enableSkew?: boolean;
  className?: string;
}

/**
 * SmoothScroll (Native Stability Version)
 * 
 * The previous virtual scroll engine caused layout collapses and 
 * zero-height document bugs. We have switched to Native Scrolling 
 * with CSS 'scroll-behavior: smooth' to ensure:
 * 1. 100% Scrollability on all devices.
 * 2. No Z-Index/Stacking Context clashes.
 * 3. Perfect SEO and Accessibility.
 */
export const SmoothScroll: React.FC<SmoothScrollProps> = ({ 
  children, 
  className = ''
}) => {
  return (
    <div className={`smooth-scroll-native ${className}`}>
      {children}
    </div>
  );
};