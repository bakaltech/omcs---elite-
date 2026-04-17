import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { SlideOver } from '../components/SlideOver';
import { IntakeForm } from '../components/IntakeForm';
import { ASSETS, getImageUrl } from '../assets';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const upcomingEvents = [
  {
    id: 'eid-hamper',
    title: 'Eid Hamper Packing',
    date: 'March 25, 2025',
    time: '10:00 AM – 2:00 PM',
    location: 'OMCS Office',
    desc: 'Help us assemble and deliver Eid hampers to families in need. Volunteers are needed for packing, wrapping, and delivery.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97e577daf2',
    actionText: 'Sign Up to Volunteer',
    actionType: 'volunteer'
  },
  {
    id: 'iftar',
    title: 'Community Iftar',
    date: 'April 10, 2025',
    time: '7:00 PM – 9:00 PM',
    location: 'Ottawa Mosque',
    desc: 'Join us for a community iftar open to all. Celebrate Ramadan together, enjoy a meal, and connect with neighbours. Volunteers are welcome to help with setup and serving.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97e577daf2',
    actionText: 'Sign Up to Volunteer',
    actionType: 'volunteer'
  },
  {
    id: 'youth-workshop',
    title: 'Youth Leadership Workshop',
    date: 'May 5, 2025',
    time: '1:00 PM – 4:00 PM',
    location: 'OMCS Office',
    desc: 'A free workshop for teens to develop leadership skills, build confidence, and connect with mentors. Snacks provided.',
    image: 'https://images.unsplash.com/photo-1529333320936-e2193f4e3b32',
    actionText: 'Register Now',
    actionType: 'rsvp'
  },
  {
    id: 'mental-health',
    title: 'Mental Health Awareness Session',
    date: 'June 12, 2025',
    time: '6:30 PM – 8:00 PM',
    location: 'Online (Zoom)',
    desc: 'Learn about common mental health challenges, coping strategies, and available resources. Led by OMCS therapists.',
    image: 'https://images.unsplash.com/photo-1594708767771-a4f9e5a1c6e0',
    actionText: 'Register Now',
    actionType: 'rsvp'
  }
];

const pastEvents = [
  {
    title: 'Ramadan Food Drive',
    date: 'April 2024',
    desc: 'Collected and distributed 500+ food hampers to families in need.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97e577daf2'
  },
  {
    title: 'Eid al-Adha Celebration',
    date: 'July 2024',
    desc: 'Community gathering with food, games, and activities for families.',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97e577daf2'
  },
  {
    title: 'Newcomer Settlement Workshop',
    date: 'September 2024',
    desc: 'Helped 50+ newcomers with housing, employment, and language resources.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca'
  }
];

export function Events() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<typeof upcomingEvents[0] | null>(null);

  const handleActionClick = (e: React.MouseEvent, evt: typeof upcomingEvents[0]) => {
    e.preventDefault();
    setSelectedEvent(evt);
    setIsFormOpen(true);
  };

  return (
    <div className="bg-brand-light">
      <PageHeader 
        title="Events" 
        description="Join us for community gatherings, workshops, and special celebrations. Everyone is welcome."
        image={getImageUrl(ASSETS.communityGathering, 2000)}
      />

      {/* Upcoming Events */}
      <section className="py-24 px-6 md:px-12 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-brand-secondary"></div>
            <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
              Upcoming Gatherings
            </span>
            <div className="w-8 h-[1px] bg-brand-secondary"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-darker text-center mb-16">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12">
            {upcomingEvents.map((evt, idx) => (
              <motion.div 
                key={evt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-white/70 backdrop-blur-md border border-brand-secondary/20 rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-brand-secondary transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-darker/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={getImageUrl(evt.image, 800)} alt={evt.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-brand-secondary text-white font-medium px-4 py-1.5 rounded-full text-sm shadow-md">
                      {evt.date}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-3xl text-brand-darker mb-3">{evt.title}</h3>
                  <p className="text-brand-secondary font-medium mb-4">{evt.time} &bull; {evt.location}</p>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">{evt.desc}</p>
                  
                  <button 
                    onClick={(e) => handleActionClick(e, evt as any)} 
                    className="inline-block bg-brand-darker text-white px-8 py-3 rounded-full font-medium hover:bg-brand-secondary transition-colors text-center w-full sm:w-auto cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-secondary/50"
                  >
                    {evt.actionText}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6">Past Events</h2>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">Relive some of our favourite moments and see the impact we made together.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((evt, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-brand-light/50 rounded-2xl overflow-hidden relative group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-darker/40 z-10"></div>
                  
                  {/* Sold Out Badge */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="border-2 border-white/80 text-white/90 bg-red-900/60 backdrop-blur-sm px-6 py-2 rounded-full font-bold tracking-widest uppercase text-sm transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      Sold Out
                    </div>
                  </div>

                  <img src={getImageUrl(evt.image, 600)} alt={evt.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-brand-secondary font-medium text-sm mb-2 block">{evt.date}</span>
                  <h3 className="font-serif text-2xl text-brand-darker mb-2">{evt.title}</h3>
                  <p className="text-gray-600 font-light text-sm">{evt.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-brand-light">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-brand-darker to-brand-primary rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover"></div>
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Support Our Events</h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Your donations and involvement make these gatherings possible. Help us bring the community together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/donate" className="bg-brand-secondary hover:bg-brand-secondary-hover text-brand-darker px-10 py-4 rounded-full font-medium transition-all shadow-lg text-lg">
                  Donate Now
                </Link>
                <Link to="/get-involved" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-darker px-10 py-4 rounded-full font-medium transition-all text-lg">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic SlideOver Form */}
      {selectedEvent && (
        <SlideOver 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
          title={selectedEvent.actionType === 'volunteer' ? 'Volunteer Sign-up' : 'Event RSVP'}
        >
          <IntakeForm
            contextName={selectedEvent.title}
            type={selectedEvent.actionType as 'volunteer' | 'rsvp'}
            onSuccess={() => setIsFormOpen(false)}
          />
        </SlideOver>
      )}
    </div>
  );
}
