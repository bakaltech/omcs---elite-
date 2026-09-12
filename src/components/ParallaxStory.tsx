import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { storiesData } from '../data/stories';

export function ParallaxStory({ story, index }: { story: typeof storiesData[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacityText = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const yText = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [50, 0, -50]);

  return (
    <div ref={ref} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: yImage }}
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <img 
          src={story.img} 
          alt={story.title} 
          loading={index === 0 ? "eager" : "lazy"}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-darker/60 mix-blend-multiply"></div>
        {/* Improved Gradient for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-brand-darker/40 to-brand-darker/90"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white"
      >
        <Quote size={48} className="text-brand-secondary mx-auto mb-8 opacity-50" />
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.2] mb-8 drop-shadow-lg">
          "{story.quote}"
        </h2>
        <div className="w-16 h-[1px] bg-brand-secondary mx-auto mb-8"></div>
        <h3 className="text-xl md:text-2xl font-medium tracking-widest uppercase text-brand-secondary mb-8 drop-shadow-md">
          {story.name}
        </h3>
        <Link 
          to={`/stories/${story.slug}`}
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-brand-secondary hover:text-brand-darker text-white border border-white/30 px-8 py-3 rounded-full font-medium transition-all backdrop-blur-sm"
        >
          Read Full Story <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  );
}
