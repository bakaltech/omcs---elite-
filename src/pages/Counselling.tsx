import React, { useState } from 'react';
import { Calendar, MapPin, Languages, Users, BookOpen, HeartPulse, HeartHandshake, Globe, Shield, Minus, Plus } from 'lucide-react';
import { ASSETS, getImageUrl } from '../assets';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

// Hero Section
function CounsellingHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/Counselling%20image.jpg" 
          alt="Counselling session" 
          loading="eager"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex">
        {/* Vertical Text */}
        <div className="hidden md:flex flex-col items-center justify-center mr-12 opacity-50 text-white">
          <span className="writing-vertical-rl rotate-180 text-xs tracking-[0.3em] uppercase font-medium">
            HEALING &bull; FAITH &bull; GROWTH
          </span>
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-white">
            OMCS<br />Counselling
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
            Culturally‑responsive therapy for individuals, couples, and families. Trauma‑informed, faith‑sensitive, and multilingual.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full">
            <a href="#therapists" className="bg-brand-secondary hover:bg-brand-secondary-hover text-brand-darker px-8 py-4 rounded-full font-medium transition-colors text-center w-full sm:w-auto">
              Meet Our Therapists
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Therapists Section
const therapists = [
  {
    name: "Samoon Tasmim",
    title: "MA, PhD, RP · Program Advisor",
    image: "/assets/Samoon Tasmim.jpg",
    speaks: "English, Pashto, Dari/Farsi, Urdu/Hindi",
    worksWith: "teens, adults, individuals, couples, families",
    modalities: ["Narrative", "Psychodynamic", "Trauma-informed", "EFT", "Attachment-based", "Schema therapy"],
    areas: ["Trauma/PTSD", "Grief", "Anxiety", "Anger management", "Attachment issues", "Cultural/identity issues", "Depression", "Life transitions", "Men's issues", "Parenting", "Relationship issues", "Spirituality", "Stress"],
    bookOnline: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2fftmhIZjCq2NxeLIq42BgBc_2YM41fQmrBw-ztUstvA5lg8rkhV4gUNzGZgeRbyKZhbJr17w2",
    bookInPerson: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0tMXAaPsP_Oqx-IWOP-XRUSY4d6SN7HV6KODUJgjSgszVpCORCeI0gDZqO3BvcwgrRaFcZD1Ny"
  },
  {
    name: "Berak Hussain",
    title: "BA Honors, MEd, RP",
    image: "/assets/Berak Hussain.jpeg",
    speaks: "English, Arabic, French",
    worksWith: "Teens (17+), individuals, families, groups",
    modalities: ["CBT", "Attachment-based", "Culturally-sensitive", "Emotion-focused", "Existential", "Family systems", "Humanistic", "Integrative", "Motivational interviewing", "Multicultural", "Positive psychology", "Strength-based", "Trauma-focused"],
    areas: ["Anger management", "Anxiety", "Behavioral issues", "Depression", "Divorce", "Domestic violence", "Emotional disturbance", "Family conflict", "Grief", "Life transitions", "Marital/premarital", "NPD", "Parenting", "Personality disorders", "Racial identity", "Relationship issues", "School issues", "Self-esteem", "Self-harm", "Sexual abuse", "Spirituality", "Stress", "Suicidal ideation", "Trauma/PTSD", "Women's issues"],
    bookOnline: "https://docs.google.com/forms/d/e/1FAIpQLSc9FGDbrKfcUgavl9SrNFCVFE-wu3Fx8p47LwdAVHMKTNgIcw/viewform",
    bookInPerson: "https://docs.google.com/forms/d/e/1FAIpQLSc9FGDbrKfcUgavl9SrNFCVFE-wu3Fx8p47LwdAVHMKTNgIcw/viewform"
  },
  {
    name: "Buraidah Razack",
    title: "BA, MSW (in progress) · Social worker in training",
    image: "/assets/Buraidah Razack.jpg",
    speaks: "English, Thai, Arabic (beginner)",
    worksWith: "children, teens, adults, families",
    modalities: ["Transactional analysis", "Compassion-focused", "Culturally-sensitive", "Faith-centered", "Integrative", "Motivational interviewing", "Multicultural", "Narrative", "Person-centered", "Psychodynamic", "Strength-based", "Trauma-focused"],
    areas: ["Anxiety", "Addiction", "Career guidance", "Coping skills", "Anger management", "Peer relationships", "Academic/school issues", "PTSD", "Parenting", "Spirituality"],
    bookOnline: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BchDeRoipXPji2IVsZFk_Gkj53gEqZUuRoJxxClsV3gTxF_gh_7wCBQ2sSRCKVTbw1yy7m1Ql",
    bookInPerson: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1skN86X7N291fbRDOxUeDdtbfZkzxGRtJYYSTcWCdzFg9_9PnNnaiZOBzImCrkBBV_8gE_a-tc"
  }
];

function TherapistsSection() {
  return (
    <section id="therapists" className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 md:space-y-24">
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4">Clinical Excellence</span>
          <div className="w-12 h-[1px] bg-brand-primary/30 mb-6"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-darker">Meet Our Therapists</h2>
        </div>
        
        {therapists.map((therapist, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start border border-brand-dark/5">
            {/* Left: Large Image */}
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="aspect-[3/4] w-full rounded-2xl border-4 border-white shadow-lg overflow-hidden">
                <img 
                  src={therapist.image} 
                  alt={therapist.name} 
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            {/* Right: Details */}
            <div className="w-full lg:w-2/3 flex flex-col py-2">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-3xl font-serif text-brand-darker mb-1">{therapist.name}</h3>
                  <p className="text-brand-primary font-semibold text-sm tracking-wide">{therapist.title}</p>
                </div>
                <span className="bg-brand-secondary/20 text-brand-primary px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap">
                  Online & In‑person
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-sm text-brand-dark/80">
                <div>
                  <p className="font-semibold text-brand-primary mb-2 flex items-center gap-2 uppercase tracking-wider text-xs">
                    <Languages size={14} /> Speaks
                  </p>
                  <p className="text-base">{therapist.speaks}</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-primary mb-2 flex items-center gap-2 uppercase tracking-wider text-xs">
                    <Users size={14} /> Works with
                  </p>
                  <p className="text-base">{therapist.worksWith}</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="font-semibold text-brand-primary mb-3 flex items-center gap-2 uppercase tracking-wider text-xs">
                  <BookOpen size={14} /> Modalities
                </p>
                <div className="flex flex-wrap gap-2 max-h-24 overflow-y-auto pr-2 custom-scrollbar">
                  {therapist.modalities.map((mod, i) => (
                    <span key={i} className="bg-[#F9F8F6] border border-brand-dark/5 text-brand-dark/80 px-3 py-1 rounded-full text-xs font-medium">
                      {mod}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <p className="font-semibold text-brand-primary mb-3 flex items-center gap-2 uppercase tracking-wider text-xs">
                  <HeartPulse size={14} /> Areas of support
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm text-brand-dark/70 max-h-32 overflow-y-auto pr-2 custom-scrollbar">
                  {therapist.areas.map((area, i) => (
                    <span key={i} className="flex items-center gap-2 before:content-[''] before:w-1 before:h-1 before:bg-brand-secondary before:rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-brand-dark/5">
                <a href={therapist.bookOnline} target="_blank" rel="noopener noreferrer" className="bg-brand-darker text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-black transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Calendar size={16} /> Book Online
                </a>
                <a href={therapist.bookInPerson} target="_blank" rel="noopener noreferrer" className="bg-brand-secondary text-brand-darker px-8 py-4 rounded-full text-sm font-semibold hover:bg-brand-secondary-hover transition-colors shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto">
                  <MapPin size={16} /> Book In‑person
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4">The Process</span>
          <div className="w-12 h-[1px] bg-brand-primary/30 mb-6"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-darker">How It Works</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-brand-dark/10 z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#F9F8F6] rounded-full flex items-center justify-center mb-8 shadow-sm border border-brand-dark/5 transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-4xl text-brand-secondary font-serif">1</span>
            </div>
            <h3 className="text-2xl font-serif mb-4 text-brand-darker">Book a Session</h3>
            <p className="text-brand-dark/70 leading-relaxed max-w-xs">Choose a therapist and book online or in‑person using the calendar links above.</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#F9F8F6] rounded-full flex items-center justify-center mb-8 shadow-sm border border-brand-dark/5 transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-4xl text-brand-secondary font-serif">2</span>
            </div>
            <h3 className="text-2xl font-serif mb-4 text-brand-darker">Meet Your Therapist</h3>
            <p className="text-brand-dark/70 leading-relaxed max-w-xs">Connect in a safe, confidential space – virtually or at our Ottawa office.</p>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#F9F8F6] rounded-full flex items-center justify-center mb-8 shadow-sm border border-brand-dark/5 transition-transform duration-500 group-hover:-translate-y-2">
              <span className="text-4xl text-brand-secondary font-serif">3</span>
            </div>
            <h3 className="text-2xl font-serif mb-4 text-brand-darker">Begin Your Journey</h3>
            <p className="text-brand-dark/70 leading-relaxed max-w-xs">Work together on your goals with culturally‑sensitive, evidence‑based care.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TherapyUnderstands() {
  return (
    <section className="py-24 md:py-32 bg-brand-darker text-white relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity">
        <img src="/assets/Counselling image.jpg" alt="Background" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-darker/80 to-brand-darker"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">Therapy That Understands You</h2>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Our therapists are trained to integrate your cultural, spiritual, and personal values into every session. We believe healing happens when you feel truly seen and respected.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
          {/* Faith-sensitive */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-brand-secondary/40 bg-black/40 flex items-center justify-center mb-6 backdrop-blur-sm transition-colors duration-500 group-hover:border-brand-secondary">
              <HeartHandshake className="w-8 h-8 text-brand-secondary" />
            </div>
            <p className="font-serif text-lg sm:text-xl text-white">Faith-sensitive</p>
          </div>
          {/* Multilingual */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-brand-secondary/40 bg-black/40 flex items-center justify-center mb-6 backdrop-blur-sm transition-colors duration-500 group-hover:border-brand-secondary">
              <Globe className="w-8 h-8 text-brand-secondary" />
            </div>
            <p className="font-serif text-lg sm:text-xl text-white">Multilingual</p>
          </div>
          {/* Community-oriented */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-brand-secondary/40 bg-black/40 flex items-center justify-center mb-6 backdrop-blur-sm transition-colors duration-500 group-hover:border-brand-secondary">
              <Users className="w-8 h-8 text-brand-secondary" />
            </div>
            <p className="font-serif text-lg sm:text-xl text-white">Community-oriented</p>
          </div>
          {/* Trauma-informed */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full border border-brand-secondary/40 bg-black/40 flex items-center justify-center mb-6 backdrop-blur-sm transition-colors duration-500 group-hover:border-brand-secondary">
              <Shield className="w-8 h-8 text-brand-secondary" />
            </div>
            <p className="font-serif text-lg sm:text-xl text-white">Trauma-informed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-dark/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center py-6 text-left hover:text-brand-primary transition-colors group"
      >
        <h3 className="text-xl font-serif text-brand-darker group-hover:text-brand-primary transition-colors">{question}</h3>
        <span className={`text-2xl text-brand-secondary transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="pb-8 text-brand-dark/70 leading-relaxed max-w-2xl">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function MethodologySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      title: "Faith-Sensitive Care",
      content: "Our therapists integrate Islamic principles of healing, mindfulness (Muraqabah), and spiritual resilience into evidence-based clinical practices, ensuring your faith is treated as a strength, not a symptom."
    },
    {
      title: "Strictly Confidential",
      content: "We adhere to the highest standards of clinical privacy set by the CRPO and OCSWSSW. Your sessions are a completely safe, private space, entirely separate from community gossip or judgment."
    },
    {
      title: "Trauma-Informed",
      content: "We understand the unique intergenerational, migration, and systemic traumas faced by the Muslim community. Our approach centers safety, choice, and empowerment."
    },
    {
      title: "Culturally Competent",
      content: "You shouldn't have to explain your culture before you can start healing. Our diverse team understands the nuances of family dynamics, cultural expectations, and intersectional identities."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Approach</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-darker">How we combine faith & therapy.</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <span className={`font-serif text-xl md:text-2xl transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-brand-darker group-hover:text-brand-primary'}`}>
                  {faq.title}
                </span>
                <span className="text-brand-primary ml-4 shrink-0">
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 pb-6 pr-8 leading-relaxed">
                      {faq.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "What can I expect in my first session?", a: "Your first session is an opportunity to get to know your therapist and share what brings you to counselling. We'll discuss your goals, any concerns, and how we can best support you." },
    { q: "Is counselling confidential?", a: "Absolutely. All sessions are confidential within the limits of the law (e.g., risk of harm). We prioritise your privacy and safety." },
    { q: "Do you accept insurance?", a: "We provide receipts that you can submit to your insurance provider. Please check with your plan for coverage details." },
    { q: "How long are sessions?", a: "Typical sessions are 50 minutes, but we can discuss your needs and adjust accordingly." },
    { q: "Do you offer virtual sessions?", a: "Yes, all therapists offer online sessions via secure video. You can choose online or in‑person when booking." },
    { q: "How do I choose the right therapist?", a: "You can read our therapists' profiles above. Many offer a free 15‑minute consultation to help you decide who feels right for you." },
    { q: "What is the cost per session?", a: "Our fees are competitive and we offer a sliding scale based on financial need. Please contact us for more information." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4">Support</span>
          <div className="w-12 h-[1px] bg-brand-primary/30 mb-6"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-darker">Frequently Asked Questions</h2>
        </div>
        <div className="border-t border-brand-dark/10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivacyAndCTA() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F9F8F6] flex items-center justify-center mx-auto mb-8 shadow-sm border border-brand-dark/5">
          <Shield className="w-8 h-8 text-brand-secondary" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-brand-darker">Your privacy is our priority</h2>
        <p className="text-xl mb-12 text-brand-dark/70 font-light max-w-2xl mx-auto leading-relaxed">
          All sessions are confidential. We adhere to strict professional ethics and privacy laws. You can speak freely.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/get-help" 
            className="bg-brand-darker text-white px-10 py-4 rounded-full font-semibold hover:bg-black transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
          >
            Book a Session
          </Link>
          <a 
            href="mailto:counselling@omcs.ca" 
            className="bg-[#F9F8F6] text-brand-darker border border-brand-dark/10 px-10 py-4 rounded-full font-semibold hover:bg-brand-dark/5 transition-colors w-full sm:w-auto text-center"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

import { SEO } from '../components/SEO';

export function Counselling() {
  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Mental Health & Clinical Counselling - OMCS"
        description="Faith-based therapy, family counselling, and mental health support by accredited Muslim professionals in Ottawa."
        canonicalUrl="/counselling"
      />
      <CounsellingHero />
      <TherapistsSection />
      <HowItWorks />
      <TherapyUnderstands />
      <MethodologySection />
      <FAQSection />
      <PrivacyAndCTA />
    </div>
  );
}
