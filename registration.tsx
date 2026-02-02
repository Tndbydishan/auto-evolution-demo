import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/Layout';
import { Section } from './components/Section';
import { PageHero } from './components/PageHero';

const RegistrationPage: React.FC = () => {
  return (
    <Layout activePage="contact">
      
      <PageHero 
        title="Join The Collective"
        subtitle="Membership Application"
        mediaType="image"
        mediaSource="https://picsum.photos/1920/1081"
      />

      <div className="relative pt-20 pb-20 px-6 max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <p className="text-gray-400">
            Membership is selective. Apply to access exclusive events and networks.
          </p>
        </header>

        <Section className="bg-altrix-surface p-8 md:p-12 rounded-sm border border-gray-800">
          <form className="space-y-8">
            
            {/* Personal Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-altrix-white border-b border-gray-700 pb-2">Personal Identity</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold" htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" className="w-full bg-altrix-black border border-gray-700 p-3 text-altrix-white focus:border-altrix-red focus:outline-none transition-colors" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold" htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" className="w-full bg-altrix-black border border-gray-700 p-3 text-altrix-white focus:border-altrix-red focus:outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold" htmlFor="email">Professional Email</label>
                <input type="email" id="email" className="w-full bg-altrix-black border border-gray-700 p-3 text-altrix-white focus:border-altrix-red focus:outline-none transition-colors" />
              </div>
            </div>

            {/* Professional Profile */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-altrix-white border-b border-gray-700 pb-2">Professional Profile</h2>
              <div className="space-y-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold" htmlFor="role">Current Role</label>
                <input type="text" id="role" className="w-full bg-altrix-black border border-gray-700 p-3 text-altrix-white focus:border-altrix-red focus:outline-none transition-colors" placeholder="e.g. CTO, Lead Architect" />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold" htmlFor="organization">Organization</label>
                <input type="text" id="organization" className="w-full bg-altrix-black border border-gray-700 p-3 text-altrix-white focus:border-altrix-red focus:outline-none transition-colors" />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-gray-500 uppercase tracking-widest font-semibold" htmlFor="interests">Areas of Interest</label>
                <select id="interests" className="w-full bg-altrix-black border border-gray-700 p-3 text-altrix-white focus:border-altrix-red focus:outline-none transition-colors">
                  <option>Artificial Intelligence</option>
                  <option>Blockchain & Web3</option>
                  <option>Quantum Computing</option>
                  <option>Biotechnology</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button type="button" className="w-full bg-altrix-red hover:bg-altrix-redHover text-white font-bold py-4 px-8 uppercase tracking-widest transition-all duration-300">
                Submit Application
              </button>
              <p className="text-center text-xs text-gray-600 mt-4">
                By submitting, you agree to our Code of Conduct. Applications are reviewed manually.
              </p>
            </div>

          </form>
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
      <RegistrationPage />
    </React.StrictMode>
  );
}