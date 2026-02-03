import React from 'react';
import { Map } from '../components/Map';
import { SOS } from '../components/SOS';
import { PageHero } from '../components/PageHero';
import { ContactInfoSection } from '../components/ContactInfoSection';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen">
      
      {/* 1. Cinematic Page Hero */}
      <PageHero 
        title="Contact."
        subtitle="Get In Touch"
        mediaType="image"
        // Using a high-quality dark automotive aesthetic image
        mediaSource="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2800&auto=format&fit=crop"
        className="mb-12 md:mb-24"
      />
      
      {/* 
         Updated Container Sizing:
         - Expanded max-width for large screens (>1500px) to 1800px for wider visual impact
         - Base max-width matches other pages (1440px)
         - Removed horizontal padding on very large screens for a cleaner edge alignment
      */}
      <div className="w-full max-w-[1440px] min-[1500px]:max-w-[1800px] mx-auto px-4 md:px-12 min-[1800px]:px-0 pb-24 flex flex-col gap-24">
        
        {/* Contact Info Marquee & Cards */}
        <ContactInfoSection />

        {/* Map Section */}
        <Map 
          locationName={
            <>
              OUR <span>LOCATION</span>
            </>
          }
          address="125/1 West Agargaon, Dhaka 1207"
        />

        {/* SOS Emergency Section */}
        <SOS />

      </div>
    </div>
  );
};