import React from 'react';
import { PageHero } from '../components/PageHero';

export const Registration: React.FC = () => {
  return (
    <div className="min-h-screen">
      
      {/* HERO */}
      <PageHero 
        title="Booking."
        subtitle="Schedule Your Service"
        mediaType="image"
        // Reception / Handshake professional shot
        mediaSource="https://images.unsplash.com/photo-1556740758-90de63b6d280?q=80&w=2940&auto=format&fit=crop"
        className="mb-12 md:mb-24"
      />

      {/* CONTENT */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Side */}
          <div className="lg:col-span-8">
            <form className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm flex flex-col gap-10">
              
              {/* Personal Details */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-100 pb-4 text-[#D12027]">01. Client Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-gray-400">First Name</label>
                     <input type="text" className="bg-[#F7F7F5] border-none p-4 text-[#121212] focus:ring-1 focus:ring-[#D12027] outline-none transition-all placeholder-gray-300" placeholder="John" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Last Name</label>
                     <input type="text" className="bg-[#F7F7F5] border-none p-4 text-[#121212] focus:ring-1 focus:ring-[#D12027] outline-none transition-all placeholder-gray-300" placeholder="Doe" />
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Address</label>
                   <input type="email" className="bg-[#F7F7F5] border-none p-4 text-[#121212] focus:ring-1 focus:ring-[#D12027] outline-none transition-all placeholder-gray-300" placeholder="john@example.com" />
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold uppercase tracking-wide border-b border-gray-100 pb-4 text-[#D12027]">02. Vehicle Info</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Make</label>
                     <input type="text" className="bg-[#F7F7F5] border-none p-4 text-[#121212] focus:ring-1 focus:ring-[#D12027] outline-none transition-all placeholder-gray-300" placeholder="e.g. Toyota" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Model</label>
                     <input type="text" className="bg-[#F7F7F5] border-none p-4 text-[#121212] focus:ring-1 focus:ring-[#D12027] outline-none transition-all placeholder-gray-300" placeholder="e.g. Supra MK4" />
                   </div>
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Service Required</label>
                   <select className="bg-[#F7F7F5] border-none p-4 text-[#121212] focus:ring-1 focus:ring-[#D12027] outline-none transition-all">
                      <option>General Diagnostics</option>
                      <option>Periodic Maintenance</option>
                      <option>Performance Tuning</option>
                      <option>Suspension Work</option>
                      <option>Other</option>
                   </select>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button type="button" className="bg-[#121212] text-white px-8 py-4 w-full md:w-auto font-bold uppercase tracking-[0.15em] hover:bg-[#D12027] transition-colors duration-300">
                  Confirm Booking
                </button>
              </div>

            </form>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             <div className="bg-[#121212] text-white p-8 rounded-lg">
                <h4 className="text-[#D12027] font-bold uppercase mb-4 tracking-widest text-xs">Opening Hours</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                   <li className="flex justify-between"><span>Mon - Thu</span> <span>09:00 - 18:00</span></li>
                   <li className="flex justify-between"><span>Fri</span> <span>Closed</span></li>
                   <li className="flex justify-between"><span>Sat - Sun</span> <span>10:00 - 20:00</span></li>
                </ul>
             </div>

             <div className="p-8 border border-gray-200">
                <h4 className="text-[#121212] font-bold uppercase mb-4 tracking-widest text-xs">Need Immediate Help?</h4>
                <p className="text-gray-600 mb-6 text-sm">
                   For emergency breakdowns or urgent inquiries, please contact our QRT directly.
                </p>
                <a href="tel:+8801711278127" className="text-[#D12027] font-bold underline">Call Now</a>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
};