import React from 'react';
import { PageHero } from '../components/PageHero';
import { SocialFeed } from '../components/SocialFeed';

export const Blogs: React.FC = () => {
  const articles = [
    { title: "The Rise of Electric Restomods", cat: "Trends", img: "https://images.unsplash.com/photo-1596706059152-466d71b40971?q=80&w=2600&auto=format&fit=crop" },
    { title: "Understanding Direct Injection", cat: "Technical", img: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2940&auto=format&fit=crop" },
    { title: "Winter Car Care Essentials", cat: "Maintenance", img: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=2831&auto=format&fit=crop" },
    { title: "Choosing the Right Oil Viscosity", cat: "Technical", img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2940&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen">
      
      {/* HERO */}
      <PageHero 
        title="Journal."
        subtitle="Insights & News"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1550523177-f20df5d68884?q=80&w=2940&auto=format&fit=crop"
        className="mb-12 md:mb-24"
      />

      {/* 
         NEW: Live Social Feed Section 
         Placed above main articles to highlight "Fresh/Live" content 
      */}
      <section className="bg-[#F7F7F5] pb-12">
        <SocialFeed />
      </section>

      {/* MAIN ARTICLES CONTENT */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 pb-24">
        
        <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold uppercase" style={{ fontFamily: 'Akira Expanded' }}>
              Latest <span className="text-[#D12027]">Articles</span>
            </h2>
            <div className="h-1 bg-gray-200 flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
          {articles.map((post, idx) => (
             <article key={idx} className="group cursor-pointer flex flex-col gap-4">
                <div className="aspect-[16/9] w-full overflow-hidden bg-gray-200 relative">
                   <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div>
                   <span className="text-[#D12027] text-xs font-bold uppercase tracking-widest mb-2 block">{post.cat}</span>
                   <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-[#D12027] transition-colors">
                     {post.title}
                   </h3>
                </div>
             </article>
          ))}
        </div>

      </div>
    </div>
  );
};