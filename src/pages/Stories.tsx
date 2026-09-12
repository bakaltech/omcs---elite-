import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, Quote } from 'lucide-react';
import { ASSETS, getImageUrl } from '../assets';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { storiesData } from '../data/stories';
import { ParallaxStory } from '../components/ParallaxStory';
import { EventGallery } from '../components/EventGallery';
import { SEO } from '../components/SEO';

export function Stories() {
  const featuredStories = storiesData.slice(0, 2);
  const archiveStories = storiesData.slice(2);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get('category') || 'All';
  
  const categories = ['All', 'Counselling', 'Youth', 'Family', 'Food Programs', 'Settlement', 'Volunteer', 'Community'];

  const filteredStories = activeFilter === 'All' 
    ? archiveStories 
    : archiveStories.filter(s => s.category === activeFilter);

  const handleFilterChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="bg-brand-darker">
      <SEO 
        title="Community Stories & Testimonials - OMCS"
        description="Read real stories from the Ottawa Muslim community about the life-changing impact of culturally informed mental health and family support."
        canonicalUrl="/stories"
      />
      <PageHeader 
        title="Community Stories" 
        description="Real stories of resilience, healing, and hope from the individuals and families we serve."
        image={getImageUrl(ASSETS.familySupport, 2000)}
      />
      
      {/* Featured Stories with Parallax Effect */}
      <div className="relative z-10">
        {featuredStories.map((story, index) => (
          <ParallaxStory key={story.id} story={story} index={index} />
        ))}
      </div>

      {/* Story Archive Grid */}
      <section className="py-24 md:py-32 bg-white rounded-t-[3rem] -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div>
              <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Archive</span>
              <h2 className="font-serif text-4xl text-brand-darker">More Stories of Hope</h2>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2" role="tablist">
              {categories.map(category => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={activeFilter === category}
                  onClick={() => handleFilterChange(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-colors ${
                    activeFilter === category 
                      ? 'bg-brand-secondary text-brand-darker' 
                      : 'bg-brand-light text-brand-darker/60 hover:bg-brand-secondary/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={story.id}
                >
                  <Link to={`/stories/${story.slug}`} className="group block h-full">
                    <div className="rounded-3xl overflow-hidden aspect-[4/5] mb-6 relative bg-gray-100">
                      <img 
                        src={story.img} 
                        alt={story.title} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-brand-secondary text-xs font-bold tracking-widest uppercase mb-2 block">
                          {story.category}
                        </span>
                        <h3 className="font-serif text-2xl text-white leading-tight">
                          {story.title}
                        </h3>
                      </div>
                    </div>
                    <h4 className="font-medium text-brand-darker mb-2">{story.name}</h4>
                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">
                      "{story.quote}"
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-primary font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Read Full Story <ArrowRight size={16} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No stories found in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Interactive Event Gallery */}
      <EventGallery />

      {/* Share Your Story CTA */}
      <section className="py-32 bg-brand-secondary text-brand-darker text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Your story matters.</h2>
          <p className="text-xl font-medium mb-10 opacity-80">
            Have you found healing or support through OMCS? Sharing your journey can inspire others to take the first step.
          </p>
          <button className="bg-brand-darker text-white hover:bg-brand-primary px-10 py-4 rounded-full font-medium transition-colors shadow-xl inline-flex items-center justify-center gap-2 w-full sm:w-auto">
            Share Your Experience <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
