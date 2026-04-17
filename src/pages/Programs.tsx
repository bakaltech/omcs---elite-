import { useState } from 'react';
import { ArrowRight, Heart, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS, getImageUrl } from '../assets';
import { motion, AnimatePresence } from 'motion/react';
import { programsData } from '../data/programs';

function ProgramsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={getImageUrl(ASSETS.youthMentorship, 2000)} 
          alt="Youth Mentorship" 
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-darker/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-6 block">
            What We Do
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-6">
            Comprehensive care for the whole community.
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl">
            From clinical therapy to food security, our programs are designed to support you at every stage of life, honoring your faith and cultural identity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ProgramList() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="space-y-32">
          {programsData.map((prog, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div 
                key={prog.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl group bg-gray-200">
                    <img 
                      src={prog.img} 
                      alt={prog.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-brand-darker/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-[1px] bg-brand-secondary"></div>
                    <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
                      {prog.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6">
                    {prog.title}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {prog.shortDesc}
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {prog.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/programs/${prog.id}`} 
                    className="inline-flex items-center justify-center gap-3 bg-brand-darker hover:bg-brand-primary text-white px-8 py-4 rounded-full font-medium transition-colors group w-full sm:w-auto"
                  >
                    Learn More
                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function EcosystemOfCare() {
  const [activeTab, setActiveTab] = useState(0);

  const connections = [
    {
      title: "Food Security",
      synergy: "The Gateway to Care",
      description: "A family arrives for a food hamper. During a dignified intake process, our team identifies that the parents need Newcomer Settlement support, and their teenagers are enrolled in Youth Mentorship. Food is often the first step to holistic healing."
    },
    {
      title: "Clinical Counselling",
      synergy: "Healing the Foundation",
      description: "While a mother receives trauma-informed therapy, her children are engaged in our Youth Mentorship programs. By treating the individual, we stabilize the entire family unit, ensuring long-term resilience."
    },
    {
      title: "Youth Mentorship",
      synergy: "Breaking the Cycle",
      description: "Youth who find belonging in our mentorship programs often bring their families into our ecosystem. A struggling teen might reveal food insecurity at home, allowing us to discreetly provide a food hamper to their parents."
    },
    {
      title: "Newcomer Settlement",
      synergy: "Building a New Home",
      description: "Navigating a new country is traumatic. Our settlement workers don't just help with paperwork; they seamlessly connect refugees to our clinical therapists who speak their language and understand their cultural context."
    }
  ];

  return (
    <section className="py-24 bg-brand-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">The OMCS Safety Net</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-darker mb-6">
            An Ecosystem of Care
          </h2>
          <p className="text-lg text-gray-600 font-light">
            We don't just treat symptoms. We support the whole person. See how our programs connect to catch families before they fall.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Interactive Tabs */}
          <div className="lg:col-span-5 space-y-4">
            {connections.map((conn, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                  activeTab === index 
                    ? 'bg-white shadow-xl border-l-4 border-brand-primary scale-105 z-10 relative' 
                    : 'bg-white/50 hover:bg-white hover:shadow-md text-gray-500'
                }`}
              >
                <span className={`text-lg font-medium ${activeTab === index ? 'text-brand-darker' : 'text-gray-500'}`}>
                  {conn.title}
                </span>
                {activeTab === index && (
                  <ArrowRight className="w-5 h-5 text-brand-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Right Side: Dynamic Content */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-3 mb-6 text-brand-secondary">
                    <Network className="w-6 h-6" />
                    <span className="font-medium tracking-[0.2em] uppercase text-xs">The Connection</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-brand-darker mb-6">
                    {connections[activeTab].synergy}
                  </h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed">
                    {connections[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClinicalOutcomes() {
  const stats = [
    {
      number: "92%",
      label: "Culturally Understood",
      desc: "Clients report feeling their faith and culture were deeply respected in therapy."
    },
    {
      number: "22,000+",
      label: "Halal Meals Delivered",
      desc: "Provided this year to families facing acute food insecurity in our community."
    },
    {
      number: "Zero",
      label: "Waitlist for Crisis",
      desc: "Immediate intake available for urgent, high-risk mental health situations."
    }
  ];

  return (
    <section className="py-24 bg-brand-darker text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Clinical Outcomes & Transparency
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Elite care requires rigorous measurement. We track our impact to ensure we are delivering the highest standard of support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="pt-8 md:pt-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0 flex flex-col items-center text-center"
            >
              <div className="w-12 h-1 bg-brand-secondary/30 mb-8 rounded-full"></div>
              <div className="text-5xl md:text-6xl font-serif text-brand-secondary mb-4">
                {stat.number}
              </div>
              <h3 className="text-xl font-medium mb-3">{stat.label}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UnspokenQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "Does going to therapy mean my faith is weak?",
      a: "Not at all. Seeking help is a prophetic tradition. Just as we seek a doctor for physical ailments, seeking a therapist for mental and emotional well-being is an act of Tawakkul (trust in God) and taking the necessary means to heal."
    },
    {
      q: "If I use the food bank, will people in the community find out?",
      a: "Absolutely not. We operate with the highest level of strict confidentiality. Our food distribution is designed to protect your dignity, with discreet pick-up options and delivery for those who need it."
    },
    {
      q: "What if I don't feel 'Muslim enough' to come here?",
      a: "OMCS is a judgment-free zone. We do not police faith, practice, or appearance. Whether you pray five times a day or are struggling with your relationship to Islam, you are welcome here, exactly as you are."
    },
    {
      q: "Are your services only for refugees or newcomers?",
      a: "No. While we have dedicated programs for newcomers, our clinical counselling, youth mentorship, and food security programs are open to anyone in the community who needs them, regardless of how long they have lived in Canada."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs mb-4 block">Breaking the Stigma</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-darker mb-6">
            The Unspoken Questions
          </h2>
          <p className="text-lg text-gray-600 font-light">
            We know that reaching out is hard. Here are the questions people often ask themselves before walking through our doors.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-100 rounded-2xl overflow-hidden bg-brand-light/30 hover:bg-brand-light transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none"
              >
                <span className="font-serif text-xl text-brand-darker pr-8">{item.q}</span>
                <div className={`w-8 h-8 rounded-full border border-brand-secondary/30 flex items-center justify-center text-brand-secondary transition-transform duration-500 shrink-0 ${openIndex === index ? 'rotate-180 bg-brand-secondary text-white' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-600 leading-relaxed font-light">
                      {item.a}
                    </div>
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

function CTASection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={getImageUrl(ASSETS.communityEvent, 2000)} 
          alt="Community Gathering" 
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-brand-darker/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-sm mb-6 block">
            The Next Step
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-8">
            Take the first step<br />towards healing.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you need someone to talk to, or you want to help us provide that space for others—you belong here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full">
            <Link 
              to="/get-help" 
              className="w-full sm:w-auto text-center bg-brand-secondary hover:bg-brand-secondary-hover text-brand-darker px-10 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-xl"
            >
              Get Help Now
            </Link>
            <Link 
              to="/donate" 
              className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full font-medium text-lg backdrop-blur-md transition-all hover:scale-105"
            >
              Support Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <div className="bg-brand-light/30">
      <ProgramsHero />
      <ProgramList />
      <EcosystemOfCare />
      <UnspokenQuestions />
      <ClinicalOutcomes />
      <CTASection />
    </div>
  );
}
