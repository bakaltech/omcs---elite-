import { useState, useEffect } from 'react';
import { ArrowRight, Heart, MessageSquare, Users, ChevronLeft, ChevronRight, Plus, Minus, Globe, Brain, Landmark, ShieldCheck, CircleDashed, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS, getImageUrl } from '../assets';
import { AnimatePresence, motion } from 'motion/react';
import { MethodologySection } from './Counselling';
import { SlideOver } from '../components/SlideOver';
import { IntakeForm } from '../components/IntakeForm';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getImageUrl("/assets/Muslim%20girls%20holding%20each%20other%20and%20smiling,%20hero%20image1.jpg", 2000)} 
          alt="Mother hugging child" 
          loading="eager"
          className="w-full h-full object-cover object-[75%_center] md:object-[85%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/95 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex">
        {/* Vertical Text */}
        <div className="hidden md:flex flex-col items-center justify-center mr-12 opacity-50 text-white">
          <span className="writing-vertical-rl rotate-180 text-xs tracking-[0.3em] uppercase font-medium">
            FAITH &bull; HEALING &bull; GOOD &bull; GROWTH &bull; COMMUNITY
          </span>
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-white">
            When life<br />feels heavy,<br />no family should<br />carry it alone.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
            Counselling, care, and practical support for Ottawa&apos;s Muslim community, delivered with compassion and dignity.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full">
            <Link to="/get-help" className="bg-brand-secondary hover:bg-brand-secondary-hover text-brand-darker px-8 py-4 rounded-full font-medium transition-colors text-center w-full sm:w-auto">
              Get Help Now
            </Link>
            <Link to="/programs" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-medium transition-colors backdrop-blur-sm text-center w-full sm:w-auto">
              Explore Programs
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Confidential support
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Faith-sensitive care
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              Community-rooted programs
            </span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <ArrowRight size={14} className="rotate-90" />
      </div>
    </section>
  );
}

function QuoteBanner() {
  const [fadeIndex, setFadeIndex] = useState(0);
  const crossfadeImages = [
    "/assets/eid.jpg",
    "/assets/eid2.jpg",
    "/assets/eid3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIndex((prev) => (prev + 1) % crossfadeImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const curatedImages = [
    "/assets/comunity2.jpeg",
    "/assets/Counselling%20image.jpg",
    "/assets/family%20under%20sunset.jpg",
    "/assets/Muslim%20girls%20holding%20each%20other%20and%20smiling,%20hero%20image1.jpg",
  ];

  return (
    <section className="pb-24 md:pb-32 relative text-white overflow-hidden bg-brand-darker">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img src={getImageUrl("/assets/comunity4.jpeg", 2000)} alt="Background" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-darker/80 to-brand-darker"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-24 md:pt-32">
        {/* Quote Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center opacity-30"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L16.41 11.596H11.963V0H21.963V11.596L19.57 18H14.017ZM4.017 18L6.41 11.596H1.963V0H11.963V11.596L9.57 18H4.017Z" />
            </svg>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
          >
            "No one should feel alone<br />
            <span className="italic font-light text-brand-secondary">in silence."</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-48 h-[2px] bg-gradient-to-r from-transparent via-brand-secondary to-transparent mx-auto mt-8"
          />
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Large Image - Spans 2x2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-2xl border border-white/10"
          >
            <img src={getImageUrl(curatedImages[2], 1000)} alt="Family Support" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            
            {/* Floating Badge - Legitimacy */}
            <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl z-10">
              <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></div>
              <span className="text-white text-xs font-medium tracking-wide uppercase">Active Community</span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/90 via-brand-darker/20 to-transparent flex items-end p-8">
               <div>
                 <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Healing Together</h3>
                 <p className="text-white/80 text-sm md:text-base">Wrap-around support for the whole family.</p>
               </div>
            </div>
          </motion.div>

          {/* Stat Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-1 rounded-3xl bg-brand-primary p-8 flex flex-col justify-center shadow-2xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-white/10">
              <Heart size={120} />
            </div>
            <span className="text-5xl font-serif mb-3 text-white relative z-10">850+</span>
            <span className="text-white/90 font-medium relative z-10">Families supported through our programs this year.</span>
          </motion.div>

          {/* Small Image 1 - Crossfading */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-1 rounded-3xl overflow-hidden relative group shadow-2xl border border-white/10 bg-brand-darker"
          >
            <AnimatePresence>
              <motion.img
                key={fadeIndex}
                src={getImageUrl(crossfadeImages[fadeIndex], 600)}
                alt="Community Programs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-4 bg-brand-darker/70 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10 z-10">
              <span className="text-white/90 text-xs font-medium">Holistic Support</span>
            </div>
          </motion.div>

          {/* Small Image 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-1 rounded-3xl overflow-hidden relative group shadow-2xl border border-white/10"
          >
            <img src={getImageUrl(curatedImages[1], 600)} alt="Counselling" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg z-10">
              <span className="text-brand-darker text-xs font-bold flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Licensed Therapists
              </span>
            </div>
          </motion.div>

          {/* Accent Text Box */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-1 rounded-3xl bg-brand-secondary p-8 flex flex-col justify-center shadow-2xl border border-white/10"
          >
            <h3 className="text-2xl font-serif mb-3 text-brand-darker">Faith-Sensitive</h3>
            <p className="text-brand-darker/80 font-medium">Therapy that respects and integrates your spiritual values.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EliteTrustSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const therapists = [
    {
      name: "Samoon Tasmim",
      credentials: "MA, PhD, RP",
      quote: "Healing starts sooner when care feels safe, steady, and grounded in real cultural understanding.",
      image: "/assets/Samoon Tasmim.jpg"
    },
    {
      name: "Berak Hussain",
      credentials: "MSW, RSW",
      quote: "We don't just treat symptoms; we honor your story, your faith, and your family's journey.",
      image: "/assets/Berak Hussain.jpeg"
    },
    {
      name: "Buraidah Razack",
      credentials: "MSc, CCC",
      quote: "True therapy provides a space where you don't have to translate your culture before you can start healing.",
      image: "/assets/Buraidah Razack.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % therapists.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4">Clinical Excellence</span>
          <div className="w-12 h-[1px] bg-brand-primary/30"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="grid md:grid-cols-12 gap-12 md:gap-20 items-center"
            >
              {/* Left: Portrait */}
              <div className="md:col-span-5 flex flex-col items-center md:items-end text-center md:text-right">
                <div className="aspect-[3/4] w-48 md:w-64 rounded-2xl overflow-hidden shadow-lg mb-6 border-4 border-white">
                  <img src={therapists[currentIndex].image} alt={therapists[currentIndex].name} loading="lazy" className="w-full h-full object-cover object-top" />
                </div>
                <h4 className="font-serif text-2xl text-brand-darker">{therapists[currentIndex].name}</h4>
                <p className="text-sm text-brand-primary font-medium tracking-widest uppercase mt-1">{therapists[currentIndex].credentials}</p>
              </div>

              {/* Right: Quote */}
              <div className="md:col-span-7 flex flex-col justify-center text-center md:text-left">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-brand-secondary/60 mb-6 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L16.41 11.596H11.963V0H21.963V11.596L19.57 18H14.017ZM4.017 18L6.41 11.596H1.963V0H11.963V11.596L9.57 18H4.017Z" />
                </svg>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.3] text-brand-darker">
                  "{therapists[currentIndex].quote}"
                </h2>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Elegant Navigation */}
        <div className="flex justify-center gap-4 mt-16 md:mt-24">
          {therapists.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="group py-4"
              aria-label={`View therapist ${idx + 1}`}
            >
              <div className={`h-[2px] transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-brand-primary' : 'w-6 bg-brand-primary/20 group-hover:bg-brand-primary/50'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

const featuredStories = [
  {
    id: 1,
    quote: "\"Ensuring No One Celebrates Eid Alone\"",
    text: "During the Eid al-Adha Food Hamper event, volunteers prepared food packages for families who might otherwise go without a proper celebration. Each hamper contained groceries to help families prepare festive meals at home.",
    linkText: "Read the Full Story",
    linkUrl: "/stories",
    image: "/assets/Eidkits.jpg",
    alt: "Volunteers preparing Eid food hampers for local families"
  },
  {
    id: 2,
    quote: "\"A Family's First Eid in Canada\"",
    text: "When Amina and her children arrived, celebrating Eid felt impossible. Then OMCS delivered a food hamper. 'When the hamper arrived, my kids were smiling again. It made us feel like we belonged here.'",
    linkText: "Read Amina's Story",
    linkUrl: "/stories",
    image: "https://images.pexels.com/photos/7249186/pexels-photo-7249186.jpeg",
    alt: "Family celebrating Eid"
  },
  {
    id: 3,
    quote: "\"Helping Youth Stay Connected\"",
    text: "For Muslim youth in foster care, staying connected to faith is hard. OMCS partnered with Children's Aid to provide activities explaining Hajj and Eid, helping youth feel proud of their identity.",
    linkText: "Read Their Story",
    linkUrl: "/stories",
    image: "https://images.pexels.com/photos/9127595/pexels-photo-9127595.jpeg",
    alt: "Youth with faith"
  },
  {
    id: 4,
    quote: "\"Delivering Hope During Ramadan\"",
    text: "During Ramadan, many families struggle with iftar costs. OMCS volunteers delivered essential groceries to families in need, lifting a heavy burden and allowing them to focus on faith and family.",
    linkText: "Read the Full Story",
    linkUrl: "/stories",
    image: "/assets/ramadan7.jpg",
    alt: "Food gift baskets"
  }
];

function StorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextStory = () => setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
  const prevStory = () => setCurrentIndex((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);

  const story = featuredStories[currentIndex];

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden flex items-center min-h-[700px]">
      {/* Left Bleed Image (Desktop) */}
      <div className="hidden md:block absolute top-12 bottom-12 left-0 w-[55%] lg:w-[60%] z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={story.id}
            src={getImageUrl(story.image, 1200)}
            alt={story.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover rounded-r-3xl shadow-2xl"
          />
        </AnimatePresence>
      </div>

      <div className="w-full max-w-7xl mx-auto px-0 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-end">
          {/* Mobile Image (Hidden on Desktop) */}
          <div className="w-full md:hidden px-6 mb-8 relative">
            <div className="aspect-[3/4] w-full rounded-2xl border-4 border-white shadow-lg overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={story.id}
                  src={getImageUrl(story.image, 800)}
                  alt={story.alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>
          
          {/* Card Side (Right, Overlapping) */}
          <div className="w-full md:w-[55%] lg:w-[50%] relative z-10 md:mt-0 px-6 md:px-0">
            <div className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl border border-white/50">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">A Real Story</p>
              
              <div className="min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={story.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-serif text-2xl md:text-4xl leading-[1.2] mb-4 text-brand-darker">
                      {story.quote}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                      {story.text}
                    </p>
                    <Link to={story.linkUrl} className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-brand-secondary transition-colors">
                      {story.linkText} <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-gray-200">
                <button onClick={prevStory} className="p-2 -ml-2 rounded-full hover:bg-white transition-colors" aria-label="Previous story">
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2 flex-1">
                  {featuredStories.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-primary w-6' : 'bg-gray-300 w-2'}`}
                      aria-label={`Go to story ${idx + 1}`}
                    />
                  ))}
                </div>
                <button onClick={nextStory} className="p-2 -mr-2 rounded-full hover:bg-white transition-colors" aria-label="Next story">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  return (
    <section className="py-32 bg-brand-darker text-center px-6 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-secondary via-brand-darker to-brand-darker"></div>
      <div className="relative z-10">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-8">Making Real Impact Every Day</p>
        <div className="font-serif text-7xl md:text-8xl lg:text-9xl text-brand-secondary mb-6 drop-shadow-lg">
          22,000<span className="text-5xl md:text-6xl align-top">+</span>
        </div>
        <p className="text-2xl md:text-3xl font-serif mb-4 text-white">meals delivered this year.</p>
        <p className="text-gray-400">Because relief should arrive before despair deepens.</p>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: <Brain size={18} className="text-brand-secondary" />,
      title: "Clinical Counselling",
      desc: "Faith-sensitive counselling that helps individuals, couples, and families move forward with clarity and support.",
      img: "/assets/Counselling image.jpg",
      link: "/counselling"
    },
    {
      icon: <Heart size={18} className="text-brand-secondary" />,
      title: "Food Security",
      desc: "Dignified food and emergency support that helps families regain stability without added stress.",
      img: "/assets/Food Security images.hero.jpg",
      link: "/get-help"
    },
    {
      icon: <Users size={18} className="text-brand-secondary" />,
      title: "Community Programs",
      desc: "Programs that strengthen belonging, connection, and practical support across generations.",
      img: "/assets/comunity1.jpeg",
      link: "/programs"
    }
  ];

  return (
    <section className="w-full bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Core Pillars</span>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-darker">How we support the community.</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
          Each service is designed to remove barriers, restore stability, and help families access the right support with confidence.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, idx) => (
            <Link to={service.link} key={idx} className="group relative overflow-hidden min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-10 md:p-14 cursor-pointer w-full border-r border-white/10 last:border-r-0">
              <img src={service.img} alt={service.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/80 to-transparent transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-brand-secondary/40 bg-black/40 flex items-center justify-center mb-8 backdrop-blur-sm transition-colors duration-500 group-hover:border-brand-secondary">
                  {service.icon}
                </div>
                <h3 className="font-serif text-4xl mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-[90%]">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* Gradient overlay to melt the bottom borders and images perfectly into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-darker to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getImageUrl("/assets/vulnteering%20team.jpg", 2000)} 
          alt="Community Support" 
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-darker/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-white">
              Support should<br />feel human again.
            </h2>
          </div>
          
          <div className="flex flex-col items-start md:pl-12">
            <p className="text-xl text-white/80 mb-10 font-light leading-relaxed">
              Your support brings hope, stability, and a sense of home to our community.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <Link 
                to="/get-help" 
                className="bg-brand-secondary hover:bg-brand-secondary-hover text-brand-darker px-8 py-3.5 rounded-full font-medium transition-colors shadow-xl text-center w-full sm:w-auto"
              >
                Get Help
              </Link>
              <Link 
                to="/donate" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-full font-medium backdrop-blur-md transition-colors text-center w-full sm:w-auto"
              >
                Support OMCS
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const partners = [
    { name: "City of Ottawa", img: "/logos/Logos/City of Ottawa.jpg", className: "mix-blend-multiply" },
    { name: "Islamic Relief", img: "/logos/Logos/Islamic-Relief.jpg", className: "mix-blend-multiply" },
    { name: "National Zakat Foundation", img: "/logos/Logos/National Zakat Foundation.png" },
    { name: "Human Concern International", img: "/logos/Logos/Human-Concern-Internationa.png" },
    { name: "Sadaqa Food Bank", img: "/logos/Logos/Sadaqa-food-bank.webp" },
    { name: "BGC Ottawa", img: "/logos/Logos/bgc-ottawa.png", className: "invert brightness-0" },
    { name: "Youth Services Bureau", img: "/logos/Logos/youth-services-Foundation.png" },
    { name: "Assunnah Muslims Association", img: "/logos/Logos/Assunnah Muslims Associatio.png.jpg", className: "mix-blend-multiply" },
    { name: "Britannia Woods", img: "/logos/Logos/Britiannia-Woods.webp" },
    { name: "Jami Oma", img: "/logos/Logos/Jami-Oma.webp" },
    { name: "Kanata Muslims Association", img: "/logos/Logos/Kanata-Muslims-Associatio.jpg", className: "mix-blend-multiply" },
    { name: "Masjid Bilal", img: "/logos/Logos/Masjid-Bilal.gif" },
    { name: "Muslim Link", img: "/logos/Logos/Muslim-Link.png" },
    { name: "Tarbiyah Learning", img: "/logos/Logos/Tarbuyah.Learning..png" },
    { name: "Children's Aid Society of Ottawa", img: "/logos/Logos/The-children-and Society-of-Ottwa.jpg", className: "mix-blend-multiply" },
    { name: "Islam Care Centre", img: "/logos/Logos/cropped-Islam-care-Centre.png" },
    { name: "Ottawa Muslim Association", img: "/logos/Logos/ottawa-muslim-association.jpg", className: "mix-blend-multiply" },
    { name: "Penny Appeal", img: "/logos/Logos/penny-appea.jpg", className: "mix-blend-multiply" },
    { name: "Pinecrest-Queensway", img: "/logos/Logos/pinerest-queensway.jpg", className: "mix-blend-multiply" },
    { name: "Qatar Foundation", img: "/logos/Logos/qatar-foundation.jpg", className: "mix-blend-multiply" }
  ];

  // Duplicate the array multiple times to create a seamless infinite loop
  const marqueeItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-8 border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400">Accredited & Supported By</p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        {/* Fade gradients for the edges to make the marquee look seamless */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex gap-12 md:gap-20 items-center min-w-max px-8"
          animate={{ x: ["0%", "-25%"] }} // Moves exactly one full set of partners
          transition={{ repeat: Infinity, ease: "linear", duration: 80 }}
        >
          {marqueeItems.map((partner, idx) => (
            <div key={idx} className="flex items-center justify-center opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="w-32 h-12 md:w-40 md:h-16 flex items-center justify-center shrink-0">
                <img 
                  src={partner.img} 
                  alt={`${partner.name} logo`}
                  className={`max-w-full max-h-full object-contain ${partner.className || ''}`}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      {/* 1. The Hook & Credibility */}
      <Hero />
      <TrustStrip />
      
      {/* 2. The Solution: What we do (Moved up so it's immediately visible) */}
      <ServicesSection />
      
      {/* 3. The Overview: Visual summary of the community and vibe */}
      <QuoteBanner />
      
      {/* 4. Deep Dive: Clinical Expertise & Approach */}
      <EliteTrustSection />
      <StorySection />
      
      {/* 5. Deep Dive: Real-world Impact & Human Stories */}
      <ImpactSection />
      <MethodologySection />
      
      {/* 6. The Ask: Call to Action */}
      <CTASection />
    </>
  );
}
