import React, { useEffect, useRef } from 'react';
import { Layout } from './components/Layout';
import { ThreeBackground } from './components/ThreeBackground';
import { Section } from './components/Section';
import { ContactInfoSection } from './components/ContactInfoSection';
import { Map } from './components/Map';
import { SOS } from './components/SOS';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import gsap from 'gsap';

const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Hero Animation
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 2.2 // Wait for Preloader
      });
      
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 2.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Layout activePage="home">
      <ThreeBackground />
      
      {/* Hero Section - Custom for Home */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="hero-text text-altrix-red font-mono tracking-[0.2em] mb-4 text-sm md:text-base uppercase">
            Est. 2024 — Global Tech Collective
          </p>
          <h1 ref={titleRef} className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-altrix-white leading-[0.9] tracking-tighter mb-8">
            ALTRIX
            <br />
            <span className="text-stroke-white text-transparent opacity-30">SYSTEMS</span>
          </h1>
          <p className="hero-text text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light mb-12">
            The architect's forum for the digital age. Where innovation meets infrastructure.
          </p>
          <div className="hero-text flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="/registration.html" className="group relative px-8 py-4 bg-altrix-red text-white font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:bg-altrix-redHover">
              <span className="relative z-10 flex items-center gap-2">
                Join Network <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a href="/about.html" className="group px-8 py-4 border border-gray-700 text-altrix-white font-bold uppercase tracking-widest text-sm hover:border-altrix-white transition-colors">
              Explore Mission
            </a>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <Section className="py-24 bg-[#121212] relative z-10">
        <div className="grid md:grid-cols-3 gap-px bg-gray-900 border border-gray-900">
          <FeatureCard 
            icon={<Globe className="w-8 h-8 text-altrix-red" />}
            title="Global Protocol"
            description="Connecting 500+ top-tier executives across 30 countries in a decentralized discourse network."
          />
          <FeatureCard 
            icon={<Zap className="w-8 h-8 text-altrix-red" />}
            title="Accelerated Growth"
            description="Proprietary insights and early-access research enabling rapid scaling of tech infrastructure."
          />
          <FeatureCard 
            icon={<Shield className="w-8 h-8 text-altrix-red" />}
            title="Secure Nexus"
            description="Encrypted channels and vetted membership ensuring high-trust collaboration."
          />
        </div>
      </Section>

      {/* Editorial Section */}
      <Section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-altrix-white leading-tight">
              We are building the <span className="text-altrix-red">foundation</span> for what comes next.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Altrix is not just a community; it is an operating system for leadership. We strip away the noise of the mainstream tech cycle to focus on signals that matter.
            </p>
            <a href="/about.html" className="inline-block text-altrix-white border-b border-altrix-red pb-1 hover:text-altrix-red transition-colors">
              Read our full manifesto
            </a>
          </div>
          <div className="relative h-[600px] w-full bg-altrix-surface overflow-hidden group">
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Technology Abstract" 
              className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-altrix-black to-transparent"></div>
          </div>
        </div>
      </Section>

      {/* New Components Integration */}
      <Section className="py-12 bg-altrix-surface">
        <ContactInfoSection />
      </Section>

      <Section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
           <Map className="w-full" />
           <SOS className="w-full" />
        </div>
      </Section>
    </Layout>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#121212] p-10 hover:bg-[#181818] transition-colors duration-300">
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-display font-bold text-altrix-white mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

export default App;