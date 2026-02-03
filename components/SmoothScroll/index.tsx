import React, { useRef, useState, useLayoutEffect, useEffect } from 'react';
import './smooth.css';

interface SmoothScrollProps {
  children: React.ReactNode;
  ease?: number; 
  enableSkew?: boolean;
  className?: string;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ 
  children, 
  ease = 0.1, 
  enableSkew = false,
  className = ''
}) => {
  // Container for the visible content (Fixed + Transformed)
  const contentRef = useRef<HTMLDivElement>(null);
  // Ghost element to force document height (In Flow)
  const spacerRef = useRef<HTMLDivElement>(null);
  
  const [isMobile, setIsMobile] = useState(false);

  // 1. Feature Detection
  useLayoutEffect(() => {
    const checkMobile = () => {
      // Robust mobile detection: Touch capability or small width
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      const isSmall = window.innerWidth < 1024;
      setIsMobile(isTouch || isSmall);
    };
    checkMobile();
    
    // Debounced resize handler could be added here if needed, 
    // but lightweight check is usually fine.
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Scroll State
  const scrollRef = useRef({
    current: 0,
    target: 0
  });
  const rafId = useRef<number | null>(null);
  const resizeObserver = useRef<ResizeObserver | null>(null);

  // 3. Height Synchronization (Desktop Only)
  useLayoutEffect(() => {
    if (isMobile) {
      // Cleanup desktop styles if switching to mobile
      if (spacerRef.current) spacerRef.current.style.height = '';
      if (contentRef.current) contentRef.current.style.transform = '';
      document.body.style.height = '';
      return;
    }

    // Initialize Observer
    resizeObserver.current = new ResizeObserver((entries) => {
      // Use requestAnimationFrame to avoid "ResizeObserver loop limit exceeded"
      // by deferring the DOM write to the next frame
      requestAnimationFrame(() => {
        for (const entry of entries) {
          if (!entry || !spacerRef.current) continue;
          
          // Get precise height
          const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
          
          if (height > 0) {
            spacerRef.current.style.height = `${height}px`;
            // Redundant check: sometimes body height needs explicit set in some frameworks, 
            // but the spacer usually handles it naturally in standard flow.
          }
        }
      });
    });

    if (contentRef.current) {
      resizeObserver.current.observe(contentRef.current);
    }

    return () => {
      resizeObserver.current?.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile, children]);

  // 4. Scroll Loop (Desktop Only)
  useEffect(() => {
    if (isMobile) return;

    const loop = () => {
      // 1. Read Input
      scrollRef.current.target = window.scrollY;

      // 2. Interpolate
      const diff = scrollRef.current.target - scrollRef.current.current;
      const delta = Math.abs(diff);

      if (delta < 0.1) {
        scrollRef.current.current = scrollRef.current.target;
      } else {
        scrollRef.current.current += diff * ease;
      }

      // 3. Render
      if (contentRef.current) {
        const y = scrollRef.current.current;
        
        // Optional Skew Effect
        let skew = 0;
        if (enableSkew) {
          skew = diff * 0.003;
          skew = Math.max(Math.min(skew, 2), -2); // Clamp skew
        }

        // Apply Transform
        // Note: We use translate3d for GPU acceleration
        contentRef.current.style.transform = `translate3d(0, -${y}px, 0) skewY(${skew}deg)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isMobile, ease, enableSkew]);

  // 5. Render
  // Mobile: Native flow
  if (isMobile) {
    return (
      <div className={`smooth-scroll-native ${className}`}>
        {children}
      </div>
    );
  }

  // Desktop: Virtual Scroller
  return (
    <>
      <div className={`smooth-scroll-content ${className}`} ref={contentRef}>
        {children}
      </div>
      {/* Ghost Spacer to provide physical scroll height */}
      <div className="smooth-scroll-spacer" ref={spacerRef} />
    </>
  );
};