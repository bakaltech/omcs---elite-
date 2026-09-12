import { PageHeader } from '../components/PageHeader';
import { ASSETS, getImageUrl } from '../assets';
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Heart, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SlideOver } from '../components/SlideOver';
import { IntakeForm } from '../components/IntakeForm';

function InvolvementPhilosophy() {
  return (
    <section className="py-24 md:py-32 bg-brand-light/30 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-[1px] bg-brand-secondary"></div>
          <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
            Our Philosophy
          </span>
          <div className="w-8 h-[1px] bg-brand-secondary"></div>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-8 leading-tight">
          It takes a village to build a safety net.
        </h2>
        <p className="text-xl text-gray-600 font-light leading-relaxed">
          OMCS was born from the grassroots efforts of individuals who refused to let their neighbors fall through the cracks. Today, that same spirit of collective responsibility drives everything we do. Whether you give your time, your expertise, or your financial support, you are building the foundation of a healthier community.
        </p>
      </div>
    </section>
  );
}

function EditorialMarquee() {
  return (
    <div className="w-full overflow-hidden bg-brand-darker py-8 md:py-12 flex items-center border-y border-white/5">
      <motion.div
        className="flex whitespace-nowrap text-brand-secondary/30 font-serif text-5xl md:text-7xl italic tracking-wide"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        <span className="mx-12">Empowering Community</span> <span className="text-brand-secondary/20">•</span>
        <span className="mx-12">Fostering Hope</span> <span className="text-brand-secondary/20">•</span>
        <span className="mx-12">Building Resilience</span> <span className="text-brand-secondary/20">•</span>
        <span className="mx-12">Empowering Community</span> <span className="text-brand-secondary/20">•</span>
        <span className="mx-12">Fostering Hope</span> <span className="text-brand-secondary/20">•</span>
        <span className="mx-12">Building Resilience</span> <span className="text-brand-secondary/20">•</span>
      </motion.div>
    </div>
  );
}

function DonateSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    getImageUrl(ASSETS.donateImpact1, 1200), // Food Security (Donations)
    getImageUrl(ASSETS.donateImpact2, 1200), // Youth Volunteers (Volunteering)
    getImageUrl(ASSETS.donateImpact3, 1200), // Family under sunset (Trust/Community)
    getImageUrl(ASSETS.donateImpact4, 1200), // Diverse Volunteers (Partnerships)
    getImageUrl(ASSETS.donateImpact5, 1200)  // Eid Kits (Tangible Impact)
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-secondary/5 rounded-[3rem] transform -rotate-3"></div>
            <div ref={ref} className="relative rounded-[2.5rem] shadow-2xl overflow-hidden h-[600px] w-full">
              <div className="absolute inset-0 bg-brand-secondary/10 z-10 mix-blend-multiply"></div>
              <AnimatePresence initial={false}>
                <motion.img 
                  key={currentIndex}
                  style={{ y }}
                  src={images[currentIndex]} 
                  alt="Financial Support Impact" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 w-full h-[130%] object-cover -top-[15%]"
                />
              </AnimatePresence>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-brand-secondary"></div>
              <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
                Financial Support
              </span>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">
              Invest in healing and resilience.
            </h3>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
              Your financial support fuels our programs—from food hampers to counselling. Every dollar makes a difference in strengthening Ottawa's Muslim community and ensuring our services remain accessible to all.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center shrink-0 mt-1">
                  <Heart className="text-brand-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-darker mb-1">Monthly Giving</h4>
                  <p className="text-gray-500 font-light">Become a sustaining member to provide reliable, ongoing support for our core programs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center shrink-0 mt-1">
                  <Heart className="text-brand-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-brand-darker mb-1">One-Time Donation</h4>
                  <p className="text-gray-500 font-light">Make an immediate impact where it is needed most right now.</p>
                </div>
              </div>
            </div>
            
            <Link to="/donate" className="inline-block bg-brand-darker text-white hover:bg-brand-secondary px-10 py-4 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto text-center">
              Make a Donation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OpportunitiesSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const opportunities = [
    {
      title: "Volunteer",
      desc: "Join our dedicated team. Help pack food hampers, mentor youth, or assist with administration and events.",
      action: "Apply to Volunteer",
      actionType: "volunteer"
    },
    {
      title: "Partner",
      desc: "Are you a business or organization? Partner with us to sponsor events, run campaigns, or provide in-kind services.",
      action: "Become a Partner",
      link: "/contact"
    },
    {
      title: "Careers",
      desc: "Join our staff of dedicated professionals. We are always looking for passionate clinicians and social workers.",
      action: "View Openings",
      link: "/contact"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-light/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-brand-secondary"></div>
            <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
              Join Our Team
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">
            Bring your unique skills to the table.
          </h2>
        </div>

        <div className="space-y-12">
          {opportunities.map((opp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-gray-200 pb-12 last:border-0 last:pb-0"
            >
              <div className="md:w-1/3">
                <h3 className="font-serif text-3xl text-brand-darker">{opp.title}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                <p className="text-gray-600 font-light leading-relaxed max-w-md">
                  {opp.desc}
                </p>
                {opp.actionType === 'volunteer' ? (
                  <div className="flex flex-col gap-3 items-start md:items-start pt-2 md:pt-0">
                    <button 
                      onClick={() => setIsFormOpen(true)}
                      className="text-brand-secondary font-medium hover:text-brand-primary transition-colors flex items-center gap-2 whitespace-nowrap group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-2 py-1 -ml-2 cursor-pointer"
                      aria-haspopup="dialog"
                      aria-expanded={isFormOpen}
                    >
                      {opp.action} 
                      <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true"/>
                    </button>
                    <Link to="/volunteer" className="text-sm border border-gray-200 hover:border-brand-secondary text-gray-500 hover:text-brand-secondary px-4 py-1.5 rounded-full transition-colors flex items-center justify-center gap-2 whitespace-nowrap w-full sm:w-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2">
                      See Open Roles
                    </Link>
                  </div>
                ) : (
                  <Link to={opp.link as string} className="text-brand-secondary font-medium hover:text-brand-primary transition-colors flex items-center gap-2 whitespace-nowrap group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-2 py-1 -ml-2 cursor-pointer">
                    {opp.action} 
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true"/>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideOver 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        title="Volunteer with OMCS"
      >
        <IntakeForm
          contextName="OMCS General Volunteering"
          type="volunteer"
          onSuccess={() => setIsFormOpen(false)}
        />
      </SlideOver>
    </section>
  );
}

function MoreWaysSection() {
  const ways = [
    {
      title: "Start a Fundraiser",
      desc: "Create your own campaign and rally friends and family to support OMCS."
    },
    {
      title: "In-Kind Donations",
      desc: "Provide goods like food, hygiene products, or professional services. Contact us to learn more."
    },
    {
      title: "Advocate",
      desc: "Speak up for our community. Share our mission, attend events, and help raise awareness."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">Other Ways to Give</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {ways.map((way, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="text-brand-secondary/10 font-serif text-8xl absolute -top-10 -left-6 z-0 select-none">
                0{idx + 1}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="font-serif text-2xl text-brand-darker mb-4">{way.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{way.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UpcomingEventsSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<{title: string, actionType: 'volunteer'|'rsvp'} | null>(null);

  const handleActionClick = (e: React.MouseEvent, evt: {title: string, actionType: 'volunteer'|'rsvp'}) => {
    e.preventDefault();
    setSelectedEvent(evt);
    setIsFormOpen(true);
  };

  const events = [
    {
      title: "Eid Hamper Packing",
      date: "March 25, 2025",
      time: "10:00 AM",
      desc: "Help us assemble and deliver Eid hampers to families in need.",
      actionType: 'volunteer' as const
    },
    {
      title: "Community Iftar",
      date: "April 10, 2025",
      time: "7:00 PM",
      desc: "Join us for a community iftar – open to all. Volunteers needed.",
      actionType: 'volunteer' as const
    }
  ];

  return (
    <section className="py-24 bg-brand-light/30 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">Upcoming Opportunities</h2>
          <p className="text-lg text-gray-600 font-light">Join us at our next community gathering.</p>
        </div>
        
        <div className="space-y-0 border-t border-gray-200 mb-12">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-gray-200 group hover:bg-white/50 transition-colors px-6 -mx-6 rounded-2xl"
            >
              <div className="md:w-1/4">
                <p className="text-brand-secondary font-medium text-lg">{event.date}</p>
                <p className="text-gray-500 text-sm mt-1">{event.time}</p>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-serif text-2xl text-brand-darker mb-3 group-hover:text-brand-secondary transition-colors">{event.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{event.desc}</p>
              </div>
              <div className="md:w-1/4 flex items-center md:justify-end mt-4 md:mt-0">
                <button 
                  onClick={(e) => handleActionClick(e, event)}
                  className="inline-flex items-center text-brand-primary font-medium group-hover:text-brand-secondary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 rounded-md px-2 py-1"
                >
                  Sign up <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center md:text-left">
          <Link to="/events" className="inline-block border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-8 py-3 rounded-full font-medium transition-colors w-full sm:w-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2">
            See All Events
          </Link>
        </div>
      </div>

      {selectedEvent && (
        <SlideOver 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
          title="Volunteer Sign-up"
        >
          <IntakeForm
            contextName={selectedEvent.title}
            type="volunteer"
            onSuccess={() => setIsFormOpen(false)}
          />
        </SlideOver>
      )}
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-6">
          <Mail size={32} className="text-brand-secondary" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">Stay Connected</h2>
        <p className="text-lg text-gray-600 font-light mb-10">
          Sign up for our newsletter to receive updates on events, volunteer opportunities, and impact stories.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
          />
          <button 
            type="submit"
            className="bg-brand-secondary text-brand-darker hover:bg-brand-primary hover:text-white px-8 py-4 rounded-full font-medium transition-colors whitespace-nowrap w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getImageUrl(ASSETS.communityGathering, 2000)} 
          alt="Community Gathering" 
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
            Get In Touch
          </span>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-8">
            Have Questions?
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            We'd love to hear from you. Reach out to our team for more information on how to get involved and make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto text-center bg-brand-secondary hover:bg-brand-secondary-hover text-brand-darker px-10 py-4 rounded-full font-medium text-lg transition-all hover:scale-105 shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { SEO } from '../components/SEO';

export function GetInvolved() {
  return (
    <div className="bg-white">
      <SEO 
        title="Get Involved - Volunteer & Support OMCS in Ottawa"
        description="Join Ottawa Muslim Community Services as a volunteer, partner, or supporter. Help us build a stronger, healthier community together."
        canonicalUrl="/get-involved"
      />
      <PageHeader 
        title="Get Involved" 
        description="Your time, talent, and generosity help us strengthen Ottawa's Muslim community. Join us in making a difference."
        image={getImageUrl(ASSETS.getInvolvedHero, 2000)}
      />
      <InvolvementPhilosophy />
      <EditorialMarquee />
      <DonateSection />
      <OpportunitiesSection />
      <MoreWaysSection />
      <UpcomingEventsSection />
      <NewsletterSection />
      <ContactCTA />
    </div>
  );
}
