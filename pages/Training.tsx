import React from 'react';
import { TrainingHeader } from '../components/TrainingHeader';
import { PartnerMarquee, Partner } from '../components/PartnerMarquee';

// Direct Asset Integration (Imports)
// These imports resolve to the file URL in Vite/Webpack
import logoTexa from '../resources/logo-TEXA.jpg';
import logoBosch from '../resources/bosch.svg';
import logoTexaEdu from '../resources/texaedu.png';
import logoImi from '../resources/imi-logo-min-original.png';
import logoElectude from '../resources/electude-logo-png-transparent.png';
import logoAse from '../resources/ase-logo.png';
import logoAutoEvo from '../resources/auto-evolution.png';

export const Training: React.FC = () => {
  
  // Define Partner Data here in the page component
  const partners: Partner[] = [
    { 
      name: "Texa", 
      logo: logoTexa, 
      href: "https://www.bosch.com", 
      customWidth: "75px" 
    },
    { 
      name: "Bosch", 
      logo: logoBosch, 
      href: "https://www.bosch.com", 
      customWidth: "140px" 
    },
    { 
      name: "Texa Edu", 
      logo: logoTexaEdu, 
      href: "#", 
      customWidth: "135px" 
    },
    { 
      name: "IMI", 
      logo: logoImi, 
      href: "https://www.motul.com", 
      customWidth: "190px" 
    },
    { 
      name: "Electude", 
      logo: logoElectude, 
      href: "https://www.denso.com", 
      customWidth: "190px" 
    },
    { 
      name: "ASE", 
      logo: logoAse, 
      href: "https://www.brembo.com", 
      customWidth: "80px" 
    },
    { 
      name: "Auto Evolution", 
      logo: logoAutoEvo, 
      href: "https://www.brembo.com", 
      customWidth: "180px" 
    },
  ];

  return (
    <div className="min-h-screen">
      
      {/* Specialized Training Header */}
      <TrainingHeader 
        imageSrc="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2940&auto=format&fit=crop"
      />

      {/* Reusable Partner Marquee with Passed Data */}
      <PartnerMarquee partners={partners} />

      {/* CONTENT */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Sidebar Info */}
          <div className="lg:col-span-1">
             <h2 className="text-3xl font-bold uppercase mb-6 leading-tight">Industry Leading <br/> Education</h2>
             <p className="text-gray-600 mb-8">
               Our academy provides hands-on training for the next generation of automotive technicians. Learn from certified master mechanics using the latest diagnostic tools.
             </p>
             <div className="p-6 bg-[#f0f0f0] rounded-lg border-l-4 border-[#00257d]">
                <h4 className="font-bold mb-2 uppercase text-sm tracking-wider">Next Batch Starts:</h4>
                <p className="text-[#00257d] font-bold text-xl">October 15, 2024</p>
             </div>
          </div>

          {/* Course List */}
          <div className="lg:col-span-2 flex flex-col gap-6">
             {[
               { name: "Fundamentals of Hybrid Systems", duration: "2 Weeks", level: "Intermediate" },
               { name: "Advanced ECU Mapping & Tuning", duration: "4 Weeks", level: "Expert" },
               { name: "Modern Chassis & Suspension", duration: "1 Week", level: "Beginner" }
             ].map((course, idx) => (
               <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-gray-200 bg-white hover:border-[#00257d] hover:shadow-lg transition-all duration-300 gap-6 group">
                  <div>
                    <span className="text-xs font-bold bg-[#121212] text-white px-2 py-1 rounded mb-2 inline-block uppercase group-hover:bg-[#00257d] transition-colors">{course.level}</span>
                    <h3 className="text-xl font-bold">{course.name}</h3>
                  </div>
                  <div className="flex items-center gap-8">
                     <div className="text-right">
                        <span className="block text-xs text-gray-400 uppercase tracking-wider">Duration</span>
                        <span className="font-bold">{course.duration}</span>
                     </div>
                     <button className="bg-[#f7f7f5] text-[#121212] w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#00257d] group-hover:text-white transition-colors duration-300">
                        <i className="ri-arrow-right-up-line text-xl"></i>
                     </button>
                  </div>
               </div>
             ))}
          </div>

        </div>

      </div>
    </div>
  );
};