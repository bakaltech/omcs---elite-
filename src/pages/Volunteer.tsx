import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ASSETS, getImageUrl } from '../assets';
import { Calendar, ArrowRight } from 'lucide-react';
import { SlideOver } from '../components/SlideOver';
import { IntakeForm } from '../components/IntakeForm';

export function Volunteer() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleApplyClick = (e: React.MouseEvent, roleTitle: string) => {
    e.preventDefault();
    setSelectedRole(roleTitle);
    setIsFormOpen(true);
  };

  const opportunities = [
    {
      title: "Eid Hamper Packing",
      badge: "Seasonal",
      date: "March – April (before Eid)",
      desc: "Help assemble and deliver food hampers to families in need. Flexible shifts available."
    },
    {
      title: "Community Iftar",
      badge: "Ramadan",
      date: "Evenings during Ramadan",
      desc: "Assist with setup, serving, and cleanup at our community iftars. Volunteer slots are 3–4 hours."
    },
    {
      title: "Youth Mentor",
      badge: "Ongoing",
      date: "Weekly, flexible timing",
      desc: "Support a teen through our mentorship program. Commitment of 1 hour per week for 12 weeks."
    },
    {
      title: "Event Setup Team",
      badge: "As needed",
      date: "Various dates",
      desc: "Help with setting up and tearing down for community events, workshops, and gatherings."
    },
    {
      title: "Food Sorting Assistant",
      badge: "Weekly",
      date: "Tuesday mornings",
      desc: "Sort and pack donated food items for distribution. Light lifting required."
    },
    {
      title: "Admin Support",
      badge: "Flexible",
      date: "Remote or in-office",
      desc: "Help with data entry, phone calls, and general office tasks. Training provided."
    }
  ];

  return (
    <div className="bg-white">
      <PageHeader 
        title="Volunteer With Us" 
        description="Join a community of compassionate individuals dedicated to making a difference in Ottawa's Muslim community."
        image={getImageUrl(ASSETS.communityEvent, 2000)}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6">Current Opportunities</h2>
            <p className="text-lg text-gray-600 font-light">
              Volunteers are the heart of OMCS. Whether you're packing food hampers, mentoring youth, or helping at events, your time and skills create lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="bg-brand-light/30 border border-gray-100 rounded-3xl p-8 hover:border-brand-secondary/50 transition-colors group focus-within:ring-2 focus-within:ring-brand-secondary focus-within:border-transparent">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-serif text-2xl text-brand-darker">{opp.title}</h3>
                  <span className="bg-brand-secondary/10 text-brand-darker text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">{opp.badge}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="text-brand-secondary" aria-hidden="true" />
                  <span>{opp.date}</span>
                </div>
                <p className="text-gray-600 font-light mb-8 leading-relaxed">{opp.desc}</p>
                <button 
                  onClick={(e) => handleApplyClick(e, opp.title)}
                  className="inline-flex items-center gap-2 text-brand-darker font-medium hover:text-brand-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-darker focus-visible:ring-offset-2 rounded-md cursor-pointer w-full sm:w-auto"
                  aria-label={`Apply Now for ${opp.title}`}
                >
                  Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>

          {/* Application Form */}
          <div id="apply" aria-labelledby="apply-heading" className="max-w-3xl mx-auto bg-brand-darker text-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <h3 id="apply-heading" className="font-serif text-3xl md:text-4xl mb-4">Express Your Interest</h3>
                <p className="text-gray-300 font-light">Not sure which role fits? Fill out this quick form and we'll get back to you within 2 business days.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                    <input id="firstName" name="firstName" type="text" required aria-required="true" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                    <input id="lastName" name="lastName" type="text" required aria-required="true" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="emailAddress" className="text-sm font-medium text-gray-300">Email Address <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                  <input id="emailAddress" name="email" type="email" required aria-required="true" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="areaOfInterest" className="text-sm font-medium text-gray-300">Area of Interest <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                  <select id="areaOfInterest" name="interest" required aria-required="true" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-secondary transition-colors appearance-none" defaultValue="">
                    <option value="" disabled className="text-brand-darker">Select an option...</option>
                    <option value="eid" className="text-brand-darker">Eid Hamper Packing</option>
                    <option value="iftar" className="text-brand-darker">Community Iftar</option>
                    <option value="mentor" className="text-brand-darker">Youth Mentor</option>
                    <option value="setup" className="text-brand-darker">Event Setup</option>
                    <option value="sorting" className="text-brand-darker">Food Sorting</option>
                    <option value="admin" className="text-brand-darker">Administrative Support</option>
                    <option value="unsure" className="text-brand-darker">Not sure / Tell me more</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-brand-secondary text-brand-darker hover:bg-white px-8 py-4 rounded-xl font-medium transition-colors mt-4 focus:outline-none focus-visible:ring-4 focus-visible:ring-white">
                  Submit Application
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic SlideOver Form for Specific Roles */}
      {selectedRole && (
        <SlideOver 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
          title="Volunteer Application"
        >
          <IntakeForm
            contextName={selectedRole}
            type="volunteer"
            onSuccess={() => setIsFormOpen(false)}
          />
        </SlideOver>
      )}
    </div>
  );
}
