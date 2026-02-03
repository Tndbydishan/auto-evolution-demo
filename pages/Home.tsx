import React from 'react';
import { PageHero } from '../components/PageHero';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      
      {/* 1. HERO SECTION */}
      <PageHero 
        title={
          <>
            PRECISION.<br/>
            PERFORMANCE.<br/>
            PERFECTION.
          </>
        }
        subtitle="The Future of Automotive Engineering"
        mediaType="image"
        // Dynamic, high-tech automotive abstract
        mediaSource="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2940&auto=format&fit=crop"
        className="mb-0" // Flush with next section visually or standard gap
      />

      {/* 2. INTRODUCTION SECTION */}
      <section className="px-4 py-24 md:py-32 bg-[#F7F7F5] text-[#121212]">
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          <div className="lg:col-span-5">
            <span className="text-[#D12027] uppercase tracking-[0.2em] text-xs font-bold block mb-6">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-[0.9] tracking-tight" style={{ fontFamily: '"Akira Expanded", sans-serif' }}>
              Redefining <br/> The Standard
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-800">
              Auto Evolution Workshop is not just a garage; it is a laboratory of automotive excellence. 
              We combine legacy craftsmanship with cutting-edge diagnostics to push your vehicle beyond its factory limits.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div className="border-l-2 border-[#D12027] pl-6">
                <h4 className="font-bold text-lg uppercase mb-2">Advanced Diagnostics</h4>
                <p className="text-sm text-gray-600">OEM-level scanning and programming for European & JDM legends.</p>
              </div>
              <div className="border-l-2 border-[#D12027] pl-6">
                <h4 className="font-bold text-lg uppercase mb-2">Performance Tuning</h4>
                <p className="text-sm text-gray-600">Custom ECU mapping and hardware upgrades for peak output.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CINEMATIC BREAK (Dark Mode Contrast) */}
      <section className="relative py-32 md:py-48 bg-[#121212] text-[#F7F7F5] overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2940&auto=format&fit=crop" 
            alt="Engine Detail" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-8xl font-thin tracking-tighter mb-8 text-white">
            Engineering <br/> <span className="font-bold text-[#D12027]">Mastery</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Every bolt turned, every line of code written, is a testament to our obsession with automotive perfection.
          </p>
          <div className="mt-12">
             <a href="services.html" className="inline-block border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-widest font-bold">
               Explore Services
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};