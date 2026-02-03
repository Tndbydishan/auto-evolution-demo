import React from 'react';
import { PageHero } from '../components/PageHero';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      
      {/* HERO */}
      <PageHero 
        title="Our Legacy."
        subtitle="Built on Trust & Speed"
        mediaType="image"
        // Clean workshop/team shot
        mediaSource="https://images.unsplash.com/photo-1530046339160-711535b94977?q=80&w=2940&auto=format&fit=crop"
        className="mb-12 md:mb-24"
      />

      {/* CONTENT CONTAINER */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 pb-24 flex flex-col gap-24">
        
        {/* MISSION STATEMENT */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-[#121212] mb-8">
               We Are <br/> <span className="font-bold">Auto Evolution.</span>
             </h2>
           </div>
           <div>
             <p className="text-xl leading-relaxed text-gray-600">
               Founded with a singular vision: to bridge the gap between traditional mechanical repair and modern digital diagnostics. 
               We believe that caring for a vehicle requires both the hands of a craftsman and the mind of an engineer.
             </p>
           </div>
        </section>

        {/* VALUES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Transparency", desc: "No hidden costs. Detailed digital reports with every service." },
             { title: "Technology", desc: "State-of-the-art diagnostic bays equipped for 2024+ models." },
             { title: "Talent", desc: "Technicians trained directly by manufacturers and industry leaders." }
           ].map((item, idx) => (
             <div key={idx} className="bg-white p-8 border border-gray-200 shadow-sm hover:border-[#D12027] transition-colors duration-300">
                <span className="text-[#D12027] text-4xl mb-4 block">0{idx + 1}</span>
                <h3 className="text-xl font-bold uppercase mb-4 tracking-wide">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </section>

        {/* TEAM IMAGE BLOCK */}
        <section className="relative w-full aspect-video md:aspect-[2.35/1] overflow-hidden rounded-xl bg-gray-900">
           <img 
             src="https://images.unsplash.com/photo-1504222490245-4367b8b79d68?q=80&w=2940&auto=format&fit=crop" 
             alt="Workshop Team" 
             className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-widest text-center drop-shadow-lg" style={{ fontFamily: '"Akira Expanded", sans-serif' }}>
                 Driven By Passion
              </h3>
           </div>
        </section>

      </div>
    </div>
  );
};