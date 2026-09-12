import { useState, useEffect } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ASSETS, getImageUrl } from '../assets';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';

function MissionVision() {
  return (
    <section className="py-24 md:py-32 bg-brand-light/30 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="space-y-20">
          {/* Mission */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-brand-secondary"></div>
              <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
                Our Mission
              </span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">
              To reduce poverty and increase accessibility to essential services.
            </h3>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Ottawa Muslim Community Services (OMCS) is a registered charitable organization dedicated to reducing poverty and increasing accessibility to essential services through mobile social services, education, and collaboration. We strive to build a stronger and healthier community by meeting people where they are.
            </p>
          </div>
          
          {/* Vision */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-brand-secondary"></div>
              <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
                Our Vision
              </span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">
              A future where no one is left behind.
            </h3>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              To foster a safe and healthy community where everyone is able to access culturally and spiritually appropriate services that meet their needs. We envision a future where no one is left behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorialStory() {
  const timeline = [
    {
      year: "2000",
      title: "The Grassroots Beginning",
      desc: "Ottawa Muslim Community Services (OMCS) began as a grassroots initiative to help immigrant families navigate the complex challenges of settlement. For years, members of our community faced an impossible choice: seek clinical help from providers who didn't understand their faith, or seek spiritual counsel for issues that required clinical intervention.",
      image: getImageUrl(ASSETS.communityGathering, 800)
    },
    {
      year: "2008",
      title: "Focusing on the Future",
      desc: "As our community's needs evolved, so did we. We launched our first dedicated youth programs, recognizing that supporting the next generation was essential for long-term community health and resilience.",
      image: getImageUrl(ASSETS.communityEvent, 800)
    },
    {
      year: "2015",
      title: "The Clinical Shift",
      desc: "Recognizing a critical gap in culturally competent care, mental health services became our core pillar. We realized that true healing cannot happen in fragments, and began integrating clinical excellence with faith-based understanding.",
      image: getImageUrl(ASSETS.communityGathering, 800)
    },
    {
      year: "Today",
      title: "An Ecosystem of Care",
      desc: "As a registered charitable organization, we serve thousands of individuals each year. Through partnerships with local mosques, schools, and health networks, we provide an elite ecosystem of care—always guided by faith, compassion, and social justice.",
      image: getImageUrl(ASSETS.communityEvent, 800)
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-brand-secondary"></div>
            <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
              Our History
            </span>
            <div className="w-8 h-[1px] bg-brand-secondary"></div>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-brand-darker leading-[1.1]">
            We built the safety net we wished we had.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative mb-12">
          <div className="space-y-24 md:space-y-32">
            {timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="relative flex flex-col md:flex-row items-center group"
                >
                  {/* Image Side */}
                  <div className={`w-full md:w-2/3 ${isEven ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                     <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[16/9]">
                       <div className="absolute inset-0 bg-brand-darker/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                       <img 
                         src={item.image} 
                         alt={item.title} 
                         loading="lazy"
                         className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                       />
                     </div>
                  </div>

                  {/* Overlapping Text Card */}
                  <div className={`w-[90%] mx-auto md:w-1/2 bg-white/95 backdrop-blur-sm p-6 md:p-12 lg:p-16 rounded-2xl md:rounded-[2rem] shadow-xl border border-gray-100 relative -mt-16 md:mt-0 z-20 flex flex-col h-[280px] md:h-[400px] ${isEven ? 'md:-ml-32' : 'md:order-1 md:-mr-32'}`}>
                    <span className="block font-serif text-4xl md:text-7xl text-brand-secondary mb-2 md:mb-4 font-light tracking-tighter shrink-0">{item.year}</span>
                    <h4 className="text-xl md:text-4xl font-serif text-brand-darker mb-3 md:mb-4 shrink-0 leading-tight">{item.title}</h4>
                    <div className="overflow-y-auto pr-2 md:pr-4 flex-grow custom-scrollbar">
                      <p className="text-sm md:text-lg text-gray-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const values = [
    {
      numeral: "01",
      title: "Community",
      desc: "We believe in collaborating and partnering with other organizations to complement what's already out there."
    },
    {
      numeral: "02",
      title: "Innovation",
      desc: "We embrace continuous improvement and creativity by being resourceful and open to change."
    },
    {
      numeral: "03",
      title: "Excellence",
      desc: "It is our intention to deliver the highest quality of service through our ideals and actions."
    },
    {
      numeral: "04",
      title: "Diversity",
      desc: "It takes people with different backgrounds, strengths and interests to build a stronger community."
    }
  ];

  return (
    <section className="py-32 bg-brand-darker text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-[1px] bg-brand-secondary"></div>
          <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
            Our Values
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-20">
          {values.map((value, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="text-brand-secondary/20 font-serif text-6xl md:text-8xl absolute -top-6 md:-top-10 left-0 md:-left-6 select-none">
                {value.numeral}
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-serif mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-lg">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClinicalStandard() {
  return (
    <section className="py-24 md:py-32 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-gray-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-brand-secondary"></div>
                <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
                  The OMCS Standard
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-8 leading-tight">
                Culturally competent care is not a luxury. It is a necessity.
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                When a client has to spend half their therapy session explaining their culture, their family dynamics, or their faith to a practitioner, they are losing valuable time for actual healing. 
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Our practitioners speak your language—both literally and culturally. We provide a space where your identity is understood implicitly, allowing us to get straight to the heart of the work.
              </p>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="border-t border-gray-200 py-6">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-2xl text-brand-secondary w-8">I.</span>
                  <div>
                    <h4 className="font-serif text-2xl text-brand-darker mb-2">Safe Space</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Strictly confidential and trauma-informed.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 py-6">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-2xl text-brand-secondary w-8">II.</span>
                  <div>
                    <h4 className="font-serif text-2xl text-brand-darker mb-2">Evidence Based</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Rooted in modern clinical psychology.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 py-6">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-2xl text-brand-secondary w-8">III.</span>
                  <div>
                    <h4 className="font-serif text-2xl text-brand-darker mb-2">Faith Aligned</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Integrating Islamic principles of healing.</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-b border-gray-200 py-6">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-2xl text-brand-secondary w-8">IV.</span>
                  <div>
                    <h4 className="font-serif text-2xl text-brand-darker mb-2">Multilingual</h4>
                    <p className="text-gray-500 font-light leading-relaxed">Services in English, Arabic, Dari, and more.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "OMCS provided a space where I didn't have to explain my faith before explaining my pain. That made all the difference.",
      name: "Aisha M.",
      role: "Counselling Client",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The youth mentorship program gave my son a sense of belonging and confidence he was struggling to find elsewhere.",
      name: "Omar T.",
      role: "Community Member",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "When we faced food insecurity, OMCS stepped in with dignity and absolute discretion. They truly care.",
      name: "Fatima S.",
      role: "Program Participant",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Finding a therapist who understood my cultural background without judgment was a turning point in my healing journey.",
      name: "Zainab R.",
      role: "Counselling Client",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-32 md:py-40 relative text-white overflow-hidden bg-brand-darker">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity">
        <img src={getImageUrl(ASSETS.communityEvent, 2000)} alt="Background" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-darker/90 to-brand-darker"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-8 h-[1px] bg-brand-secondary"></div>
          <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
            Voices of the Community
          </span>
          <div className="w-8 h-[1px] bg-brand-secondary"></div>
        </div>

        {/* The Quote */}
        <div className="min-h-[320px] md:min-h-[280px] flex flex-col items-center justify-center w-full mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <svg className="w-10 h-10 text-brand-secondary/40 mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 18L16.41 11.596H11.963V0H21.963V11.596L19.57 18H14.017ZM4.017 18L6.41 11.596H1.963V0H11.963V11.596L9.57 18H4.017Z" />
              </svg>
              <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-white mb-10 max-w-4xl">
                "{testimonials[activeIndex].quote}"
              </h3>
              <div>
                <h4 className="font-medium text-lg text-white tracking-wide">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-brand-secondary uppercase tracking-widest mt-2">{testimonials[activeIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Avatars */}
        <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
          {testimonials.map((testimonial, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-full overflow-hidden transition-all duration-500 ${
                activeIndex === idx 
                  ? 'w-16 h-16 md:w-20 md:h-20 ring-2 ring-brand-secondary ring-offset-4 ring-offset-brand-darker opacity-100 grayscale-0 shadow-xl shadow-brand-secondary/20' 
                  : 'w-12 h-12 md:w-14 md:h-14 opacity-40 grayscale hover:opacity-80 hover:grayscale-0'
              }`}
              aria-label={`View testimonial from ${testimonial.name}`}
            >
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamDirectory() {
  const therapists = [
    {
      name: "Samoon Tasnim",
      credentials: "MA, PhD, RP",
      role: "Program Advisor & Therapist",
      focus: "Trauma, narrative therapy, and culturally-sensitive care."
    },
    {
      name: "Berak Hussain",
      credentials: "BA Honors, MEd, RP",
      role: "Registered Psychotherapist",
      focus: "CBT, attachment-based therapy, and multicultural counselling."
    },
    {
      name: "Buraidah Razack",
      credentials: "BA, MSW (in progress)",
      role: "Social Worker in Training",
      focus: "Compassion-focused, narrative, and trauma-informed therapy."
    }
  ];

  const board = [
    {
      name: "Shawana Shah",
      role: "Co-Founder & Board Member",
      bio: "Canadian Certified Counsellor with over 15 years of experience working with vulnerable populations. Certified Mental Health First Aid instructor."
    },
    {
      name: "Ali Beshir",
      role: "Board Member",
      bio: "Over 15 years of experience in social services, working with youth, homeless populations, and the Shared Journey pilot project."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-[1px] bg-brand-secondary"></div>
          <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
            Our People
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Therapists */}
          <div className="lg:col-span-7">
            <h3 className="font-serif text-4xl text-brand-darker mb-10">Clinical Team</h3>
            <div className="space-y-8">
              {therapists.map((person, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-8 last:border-0">
                  <h4 className="font-serif text-3xl text-brand-darker mb-2">{person.name}</h4>
                  <div className="text-brand-secondary text-sm font-medium tracking-wider uppercase mb-4">
                    {person.credentials} <span className="text-gray-300 mx-2">|</span> {person.role}
                  </div>
                  <p className="text-gray-500 font-light text-lg">Specialization: {person.focus}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Board */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-4xl text-brand-darker mb-10">Board of Directors</h3>
            <div className="space-y-6">
              {board.map((person, idx) => (
                <div key={idx} className="bg-brand-light/50 p-8 rounded-3xl">
                  <h4 className="font-serif text-2xl text-brand-darker mb-1">{person.name}</h4>
                  <div className="text-brand-secondary text-xs font-medium tracking-wider uppercase mb-4">
                    {person.role}
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <div className="bg-white">
      <SEO 
        title="About Us - Ottawa Muslim Community Services"
        description="Learn about the mission, values, and clinical expertise driving OMCS. We serve the Ottawa community with culturally responsive therapy and essential social impact programs."
        canonicalUrl="/about"
      />
      <PageHeader 
        title="Our Story" 
        description="Born from a need for culturally competent care, OMCS is a sanctuary where faith and clinical excellence meet."
        image={getImageUrl(ASSETS.communityGathering, 2000)}
      />
      <MissionVision />
      <EditorialStory />
      <CoreValues />
      <ClinicalStandard />
      <TestimonialsSection />
      <TeamDirectory />
    </div>
  );
}
