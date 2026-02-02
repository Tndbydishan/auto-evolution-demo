import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import './smooth.css';

interface SmoothScrollProps {
  children: React.ReactNode;
  /**
   * The "Weight" of the scroll. 
   * Recommended: 0.1 - 0.12 for "Bugatti" solid feel.
   * Lower (0.05) = Floaty/Heavy.
   * Higher (0.2) = Snappy.
   */
  ease?: number; 
  /**
   * If true, adds a subtle skew effect.
   * WARNING: Can cause "wave/jelly" effect if not used carefully.
   */
  enableSkew?: boolean;
}

/**
 * SmoothScroll Component
 * 
 * - Desktop: Applies "Inertial/Virtual" scrolling.
 * - Mobile: NATIVE scrolling (Best performance).
 */
export const SmoothScroll: React.FC<SmoothScrollProps> = ({ 
  children, 
  ease = 0.1, 
  enableSkew = false 
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Mobile/Tablet Detection
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
  });

  useEffect(() => {
    const handleResize = () => {
      const mobileCheck = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
      setIsMobile(mobileCheck);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollRef = useRef({
    current: 0,
    target: 0
  });

  const rafId = useRef<number | null>(null);
  const resizeObserver = useRef<ResizeObserver | null>(null);

  // --- SETUP: SYNC HEIGHT (Desktop Only) ---
  useLayoutEffect(() => {
    if (isMobile) {
      document.body.style.height = '';
      if (contentRef.current) {
        contentRef.current.style.transform = '';
      }
      return;
    }

    const updateHeight = () => {
      if (contentRef.current) {
        document.body.style.height = `${contentRef.current.getBoundingClientRect().height}px`;
      }
    };

    updateHeight();

    // WRAP IN RAF: Fixes "ResizeObserver loop completed with undelivered notifications"
    resizeObserver.current = new ResizeObserver(() => {
      requestAnimationFrame(() => updateHeight());
    });
    
    if (contentRef.current) {
      resizeObserver.current.observe(contentRef.current);
    }

    return () => {
      if (resizeObserver.current) resizeObserver.current.disconnect();
      document.body.style.height = ''; 
    };
    // CRITICAL FIX: Removed 'children' from dependency array.
    // 'ResizeObserver' handles content changes automatically.
    // Including 'children' caused the cleanup (height='') to run on every re-render,
    // causing scroll position to jump to top when Mobile Menu state changed.
  }, [isMobile]);

  // --- PHYSICS ENGINE: DESKTOP ONLY ---
  useEffect(() => {
    if (isMobile) {
        if (rafId.current) cancelAnimationFrame(rafId.current);
        return;
    }

    const render = () => {
      if (!contentRef.current) return;

      scrollRef.current.target = window.scrollY;

      // 1. Get distance to target
      const distance = scrollRef.current.target - scrollRef.current.current;

      // 2. Snap to target if very close (Prevents micro-floating/drifting)
      if (Math.abs(distance) < 0.1) {
        scrollRef.current.current = scrollRef.current.target;
      } else {
        // 3. Linear Interpolation (The "Smoothness")
        scrollRef.current.current += distance * ease;
      }

      // 4. Precision Rounding (Solidity)
      const y = scrollRef.current.current; 
      
      // 5. Calculate Skew (Only if enabled)
      let skew = 0;
      if (enableSkew) {
         // Cap the skew to +/- 2 degrees to prevent "Wave/Jelly" effect
         skew = (scrollRef.current.target - y) * 0.003;
         skew = Math.max(Math.min(skew, 2), -2);
      }

      // 6. Apply Transform
      contentRef.current.style.transform = `translate3d(0, -${y}px, 0) ${enableSkew ? `skewY(${skew}deg)` : ''}`;

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [ease, enableSkew, isMobile]);

  return (
    <div 
      className={isMobile ? '' : 'smooth-scroll-content'} 
      ref={contentRef}
      style={isMobile ? { position: 'relative' } : {}}
    >
      {children}
    </div>
  );
};
