import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PageHeader({ title, description, image, images }: { title: string, description: string, image?: string, images?: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayImages = images && images.length > 0 ? images : (image ? [image] : []);

  useEffect(() => {
    if (displayImages.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayImages.length]);

  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {displayImages.length > 0 ? (
        <div className="absolute inset-0 z-0 bg-brand-darker">
          <AnimatePresence initial={false}>
            <motion.img
              key={currentIndex}
              src={displayImages[currentIndex]}
              alt={`${title} background`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-brand-darker/70 z-10"></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-brand-primary"></div>
      )}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 text-white">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6">{title}</h1>
        <p className="text-xl text-white/90 max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
