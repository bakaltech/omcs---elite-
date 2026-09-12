import { useParams, Link } from 'react-router-dom';
import { storiesData } from '../data/stories';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { SEO } from '../components/SEO';

export function StoryDetail() {
  const { slug } = useParams();
  const story = storiesData.find(s => s.slug === slug);

  // Scroll to top when loading a new story
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-light">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4 text-brand-darker">Story not found</h1>
          <Link to="/stories" className="text-brand-primary hover:underline font-medium">Return to Stories</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pb-24">
      <SEO 
        title={`${story.title} - OMCS Community Stories`}
        description={story.quote}
        image={`https://omcs.ca${story.img}`}
        canonicalUrl={`/stories/${story.slug}`}
      />
      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-4xl mx-auto">
          <Link to="/stories" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm uppercase tracking-widest font-bold">
            <ArrowLeft size={16} /> Back to Stories
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center gap-4 text-brand-secondary mb-4 text-sm font-medium">
              <span className="flex items-center gap-1.5"><Tag size={14} /> {story.category}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {story.date}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
              {story.title}
            </h1>
            <p className="text-xl text-white/90 font-light italic">
              {story.name}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-brand-primary mb-12 leading-relaxed text-center border-y border-gray-100 py-10">
            "{story.quote}"
          </h2>
          
          <div className="prose prose-lg md:prose-xl prose-stone max-w-none">
            {story.fullText.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-8 font-light">
                {idx === 0 ? (
                  <span className="float-left text-7xl font-serif text-brand-darker mr-4 mt-2 leading-none">
                    {paragraph.charAt(0)}
                  </span>
                ) : null}
                {idx === 0 ? paragraph.substring(1) : paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Next Steps CTA */}
      <div className="max-w-3xl mx-auto px-6 mt-20">
        <div className="bg-brand-light/50 border border-brand-secondary/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-brand-darker mb-4">Inspired by {story.name.split(' ')[0]}'s journey?</h3>
          <p className="text-gray-600 mb-8">Your support makes stories like this possible every single day.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <Link to="/donate" className="bg-brand-darker text-white hover:bg-brand-secondary hover:text-brand-darker px-8 py-3 rounded-full font-medium transition-colors text-center w-full sm:w-auto">
              Make a Donation
            </Link>
            <Link to="/get-help" className="bg-white text-brand-darker border border-gray-200 hover:border-brand-primary px-8 py-3 rounded-full font-medium transition-colors text-center w-full sm:w-auto">
              Get Help Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
