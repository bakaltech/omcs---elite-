import { PageHeader } from '../components/PageHeader';
import { ASSETS, getImageUrl } from '../assets';
import { MapPin, Phone, Mail, ArrowRight, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Contact & Admin" 
        description="Reach out for general inquiries, community partnerships, media requests, or to learn more about supporting our mission."
        image={getImageUrl(ASSETS.communityGathering, 2000)}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Support Redirect Banner */}
          <div className="bg-brand-light/50 border border-brand-secondary/20 rounded-2xl p-8 md:p-10 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <HeartHandshake className="text-brand-secondary" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-brand-darker mb-2">Are you looking for support?</h3>
                <p className="text-gray-600 font-light max-w-2xl">
                  If you are seeking clinical counselling, food security, or community programs for yourself or a loved one, please use our dedicated, confidential intake process.
                </p>
              </div>
            </div>
            <Link to="/get-help" className="shrink-0 bg-brand-darker text-white hover:bg-brand-secondary hover:text-brand-darker px-8 py-4 rounded-full font-medium transition-colors flex items-center gap-2">
              Get Help Now <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Information & Map */}
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-brand-secondary"></div>
                  <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
                    General Inquiries
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">
                  Let's work together.
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  For administrative questions, donation inquiries, or community partnerships, our administrative team is ready to connect.
                </p>
              </div>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/50 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-brand-darker mb-1">Admin Office</h4>
                    <p className="text-gray-600 font-light">613-123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/50 flex items-center justify-center shrink-0">
                    <Mail className="text-brand-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-brand-darker mb-1">Email</h4>
                    <p className="text-gray-600 font-light">info@omcs.ca</p>
                    <p className="text-sm text-gray-500 mt-1">We aim to respond within 2-3 business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-light/50 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-brand-darker mb-1">Headquarters</h4>
                    <p className="text-gray-600 font-light">Ottawa, ON</p>
                    <p className="text-sm text-gray-500 mt-1">Administrative office only. No walk-in clinical services.</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[300px] relative bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180026.06915003612!2d-75.89868779010313!3d45.25015659871147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON!5e0!3m2!1sen!2sca!4v1713045000000!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OMCS Location in Ottawa"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-light/30 p-8 md:p-12 rounded-[2rem] border border-gray-100 h-fit">
              <h3 className="font-serif text-3xl text-brand-darker mb-8">Send an inquiry</h3>
              <p className="mb-6 text-gray-600 font-light leading-relaxed">
                Direct outreach works best while our online inquiry form is being finalized. Share your details below if you would like to see the intended experience, or email our team directly to start the conversation today.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-brand-darker">First Name <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName"
                      required
                      aria-required="true"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-darker focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-brand-darker">Last Name <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName"
                      required
                      aria-required="true"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-darker focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-brand-darker">Email Address <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    aria-required="true"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-darker focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-brand-darker">Subject <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                  <select 
                    id="subject" 
                    name="subject"
                    required
                    aria-required="true"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-darker focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a topic...</option>
                    <option value="partnership">Community Partnership</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="media">Media/Press</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="other">General Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-brand-darker">Message <span aria-hidden="true" className="text-brand-secondary">*</span></label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-brand-darker focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-colors resize-none"
                    placeholder="How can we collaborate?"
                  ></textarea>
                </div>

                <a
                  href="mailto:info@omcs.ca?subject=General%20Inquiry"
                  className="flex w-full items-center justify-center rounded-xl bg-brand-darker py-4 font-medium text-white transition-colors duration-300 hover:bg-brand-primary hover:text-brand-darker focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-secondary/50"
                >
                  Email Our Team
                </a>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
