import React from 'react';
import { PageHero } from '../components/PageHero';

export const Services: React.FC = () => {
  const services = [
    { title: "ECU Tuning & Remapping", desc: "Unlock hidden horsepower and fuel efficiency with our custom dyno-tested maps." },
    { title: "Hybrid Battery Repair", desc: "Complete cell-level diagnostics and regeneration for Toyota, Honda, and Nissan hybrids." },
    { title: "Advanced Diagnostics", desc: "Dealer-level scanning for check engine lights, ABS modules, and transmission logic." },
    { title: "Precision Detailing", desc: "Ceramic coating, paint correction, and interior restoration to showroom standards." },
    { title: "Suspension & Handling", desc: "Coilover installation, air suspension troubleshooting, and 3D laser alignment." },
    { title: "Periodic Maintenance", desc: "Fluid flushes, filter changes, and comprehensive multi-point inspections." }
  ];

  return (
    <div className="min-h-screen">
      
      {/* HERO */}
      <PageHero 
        title="Services."
        subtitle="Expertise Without Compromise"
        mediaType="image"
        // Detailed mechanical shot
        mediaSource="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2864&auto=format&fit=crop"
        className="mb-12 md:mb-24"
      />

      {/* CONTENT */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 pb-24">
        
        <div className="mb-16 max-w-2xl">
           <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-6">Comprehensive Care</h2>
           <p className="text-gray-600 text-lg">
             From routine oil changes to complex engine rebuilds, our facility is equipped to handle every aspect of your vehicle's needs with clinical precision.
           </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div key={idx} className="group p-8 md:p-10 border border-gray-200 bg-white hover:bg-[#121212] hover:text-white transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
              <div>
                <span className="text-[#D12027] font-mono text-xs mb-4 block">0{idx + 1} / SERVICE</span>
                <h3 className="text-2xl font-bold mb-4 uppercase leading-tight tracking-wide">{item.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                 <span className="text-xs font-bold uppercase tracking-widest text-[#D12027]">Learn More <i className="ri-arrow-right-line ml-2"></i></span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};