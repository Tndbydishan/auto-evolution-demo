import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { Map } from './components/Map';
import { SOS } from './components/SOS';
import { PageHero } from './components/PageHero';
import { ContactInfoSection } from './components/ContactInfoSection';
import './index.css';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen fade-in-page">
      
      {/* 1. Cinematic Page Hero */}
      <PageHero 
        title="Contact."
        subtitle="Get In Touch"
        mediaType="image"
        // Using a high-quality dark automotive aesthetic image
        mediaSource="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2800&auto=format&fit=crop"
        className="mb-12 md:mb-24 lg:mb-32"
      />
      
      {/* 
         Updated Container Sizing:
         - Capped max-width at 1440px to prevent 4K stretching
         - Adjusted padding for mobile (px-4) vs desktop (px-12)
         - Reduced gaps for mobile compactness
      */}
      <div className="px-4 sm:px-8 md:px-12 w-full max-w-[1440px] mx-auto flex flex-col gap-16 md:gap-24 lg:gap-32 pb-24 lg:pb-40">
        
        {/* New Infinite Scroll & Contact Info Component */}
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

const ContactPage: React.FC = () => {
  return (
    <Layout activePage="contact">
      <Contact />
    </Layout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ContactPage />
    </React.StrictMode>
  );
}