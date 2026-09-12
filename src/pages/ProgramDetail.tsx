import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { programsData } from '../data/programs';
import { PageHeader } from '../components/PageHeader';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SlideOver } from '../components/SlideOver';
import { IntakeForm } from '../components/IntakeForm';
import { SEO } from '../components/SEO';

export function ProgramDetail() {
  const { id } = useParams<{ id: string }>();
  const program = programsData.find(p => p.id === id);
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (!program) {
    return <Navigate to="/programs" replace />;
  }

  return (
    <div className="bg-brand-light/30 min-h-screen">
      <SEO 
        title={`${program.title} - OMCS Programs`}
        description={program.shortDesc}
        image={`https://omcs.ca${program.img}`}
        canonicalUrl={`/programs/${program.id}`}
      />
      <PageHeader 
        title={program.title} 
        description={program.shortDesc}
        image={program.img}
      />

      <section className="py-12 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-8">
            <Link 
              to="/programs" 
              className="inline-flex items-center gap-2 text-brand-darker hover:text-brand-primary font-medium transition-colors group"
              aria-label="Back to all programs"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back to Programs
            </Link>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="mb-8">
              <span className="inline-block bg-brand-secondary/20 text-brand-darker px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                {program.category}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-brand-darker mb-6">About the Program</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {program.fullDesc}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-serif text-2xl text-brand-darker mb-6">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-lighter rounded-2xl p-8 text-center border border-brand-secondary/20">
              <h3 className="font-serif text-2xl text-brand-darker mb-4">Ready to get started?</h3>
              <p className="text-gray-600 mb-8">Contact us to learn more about enrollment or to speak with a program coordinator.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => setIsFormOpen(true)}
                  className="bg-brand-darker text-white hover:bg-brand-primary px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-secondary/50"
                  aria-haspopup="dialog"
                  aria-expanded={isFormOpen}
                >
                  Register Now <ArrowRight size={18} aria-hidden="true" />
                </button>
                <Link 
                  to="/contact" 
                  className="bg-white text-brand-darker border border-gray-200 hover:border-brand-primary px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dynamic SlideOver Form for Program Registration */}
      <SlideOver 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        title="Program Registration"
      >
        <IntakeForm
          contextName={program.title}
          type="rsvp"
          onSuccess={() => setIsFormOpen(false)}
        />
      </SlideOver>
    </div>
  );
}
