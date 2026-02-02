import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(({ children, className = '', ...props }, ref) => {
  return (
    <section 
      ref={ref}
      className={`relative w-full py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
      {...props}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";