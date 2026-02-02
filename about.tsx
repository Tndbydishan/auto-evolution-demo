import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { Section } from './components/Section';
import { PageHero } from './components/PageHero';
import { ContactInfoSection } from './components/ContactInfoSection';
import { Map } from './components/Map';

const AboutPage: React.FC = () => {
  return (
    <Layout activePage="about">
      
      <PageHero 
        title="About Altrix"
        subtitle="Our Mission & Vision"
        mediaType="image"
        mediaSource="https://picsum.photos/1920/1080"
      />

      <div className="relative pt-20 pb-20 px-6 max-w-7xl mx-auto">
        
        <header className="mb-16">
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We are architects of the future. A collective of visionaries, engineers, and executives dedicated to shaping the next era of technology.
          </p>
        </header>

        <Section className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="bg-altrix-surface p-8 border-l-4 border-altrix-red">
            <h2 className="text-2xl font-display font-bold mb-4 text-altrix-white">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To empower the global tech community by fostering connection, facilitating high-level discourse, and accelerating the adoption of transformative technologies.
            </p>
          </div>
          <div className="bg-altrix-surface p-8 border-l-4 border-gray-700">
            <h2 className="text-2xl font-display font-bold mb-4 text-altrix-white">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              A world where technology serves as the ultimate equalizer, driving sustainable progress and human potential through open collaboration.
            </p>
          </div>
        </Section>

        <Section className="mb-24">
          <h2 className="text-3xl font-display font-bold mb-12 text-altrix-white border-b border-gray-800 pb-4">
            Executive Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden bg-altrix-surface">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={`https://picsum.photos/400/500?random=${i}`} 
                    alt="Executive Team Member"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-altrix-white">Alexei Vorn</h3>
                  <p className="text-altrix-red text-sm font-mono mt-1">CHIEF STRATEGY OFFICER</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section className="mb-24">
           <ContactInfoSection />
        </Section>

        <Section>
           <Map />
        </Section>

      </div>
    </Layout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AboutPage />
    </React.StrictMode>
  );
}