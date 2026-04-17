import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Phone, Mail, MapPin, Clock, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function AnatomyOfACall() {
  const steps = [
    {
      numeral: "01",
      title: "The Reach Out",
      desc: "You send a simple, confidential message or make a call. No pressure, no long explanations needed."
    },
    {
      numeral: "02",
      title: "The Safe Space",
      desc: "Our intake coordinator listens without judgment. We assess your needs with deep cultural empathy."
    },
    {
      numeral: "03",
      title: "The Match",
      desc: "We pair you with the exact right program, therapist, or resource tailored to your specific situation."
    },
    {
      numeral: "04",
      title: "The Journey",
      desc: "You begin receiving support. We check in regularly to ensure you are getting the care you deserve."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-light/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-brand-secondary"></div>
            <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
              What Happens Next
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6 leading-tight">
            The anatomy of reaching out.
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl">
            Anxiety thrives in the unknown. Here is exactly what happens when you press "Submit" or pick up the phone.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-gray-200 pb-12 last:border-0 last:pb-0 relative"
            >
              <div className="md:w-1/4 relative">
                <div className="text-brand-secondary/20 font-serif text-7xl md:text-8xl absolute -top-6 -left-4 z-0 select-none">
                  {step.numeral}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-brand-darker relative z-10 pt-4">{step.title}</h3>
              </div>
              <div className="md:w-3/4 flex items-center">
                <p className="text-gray-600 font-light leading-relaxed text-lg md:text-xl max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConversationalForm() {
  const [step, setStep] = useState(1);
  const [supportType, setSupportType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Honeypot state for spam protection
  const [honeypot, setHoneypot] = useState("");

  const empathyMessages: Record<string, string> = {
    "Counselling & Mental Health": "Taking this step takes courage. Our therapists are here to provide a safe, non-judgmental space for you.",
    "Food Bank & Essentials": "No one should have to worry about their next meal. We have hampers ready and will ensure you get what you need.",
    "Financial Assistance": "Financial stress is overwhelming. We will work with you to find the right resources and ease the burden.",
    "Housing Support": "Safe housing is a fundamental right. Let's explore the options available to secure your living situation.",
    "Other": "Whatever you're facing, you don't have to face it alone. We are here to listen."
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // SPAM PROTECTION: If the honeypot field is filled out, it's a bot.
    // We silently pretend the submission was successful so the bot moves on,
    // but we wouldn't actually send this data to the server.
    if (honeypot) {
      console.warn("Bot detected via honeypot. Silently rejecting.");
      setIsSubmitted(true);
      return;
    }

    // Here is where you would normally send the data to your backend
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-xl p-12 rounded-[2.5rem] shadow-2xl border border-white/50 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent"></div>
        <div className="relative z-10">
          <div className="w-20 h-20 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="text-brand-secondary w-10 h-10" />
          </div>
          <h3 className="font-serif text-3xl text-brand-darker mb-4">You are not alone.</h3>
          <p className="text-gray-600 font-light text-lg mb-8 max-w-md mx-auto">
            We have received your message. Our intake coordinator will reach out to you within 24 hours. Take a deep breath—you've taken the hardest step.
          </p>
          <button 
            onClick={() => { setIsSubmitted(false); setStep(1); setSupportType(""); }}
            className="text-brand-secondary font-medium hover:text-brand-primary transition-colors"
          >
            Submit another request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/50 relative overflow-hidden min-h-[500px] flex flex-col">
      {/* Ambient Background inside form */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="relative z-10 flex-grow flex flex-col">
        {/* Progress Indicator */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3].map((i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${step >= i ? 'bg-brand-secondary' : 'bg-gray-200'}`}
            ></div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex-grow flex flex-col">
          {/* SPAM PROTECTION: Honeypot Field */}
          {/* This field is hidden from real users but visible to screen readers/bots. 
              If a bot fills it out, the form submission is silently rejected. */}
          <div aria-hidden="true" className="absolute opacity-0 -z-10 pointer-events-none">
            <label htmlFor="website-url">Website</label>
            <input 
              type="text" 
              id="website-url" 
              name="website-url" 
              tabIndex={-1} 
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                <h2 className="font-serif text-3xl text-brand-darker mb-3">Let's start with the basics.</h2>
                <p className="text-gray-500 font-light mb-10">This information is strictly confidential.</p>
                
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <input type="text" id="firstName" required className="peer w-full bg-transparent border-b border-gray-300 py-3 text-brand-darker focus:outline-none focus:border-brand-secondary placeholder-transparent" placeholder="First Name" />
                      <label htmlFor="firstName" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-secondary">First Name</label>
                    </div>
                    <div className="relative">
                      <input type="text" id="lastName" required className="peer w-full bg-transparent border-b border-gray-300 py-3 text-brand-darker focus:outline-none focus:border-brand-secondary placeholder-transparent" placeholder="Last Name" />
                      <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-secondary">Last Name</label>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input type="tel" id="phone" required className="peer w-full bg-transparent border-b border-gray-300 py-3 text-brand-darker focus:outline-none focus:border-brand-secondary placeholder-transparent" placeholder="Phone Number" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-brand-secondary">Phone Number</label>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                <h2 className="font-serif text-3xl text-brand-darker mb-3">How can we support you?</h2>
                <p className="text-gray-500 font-light mb-10">Select the area where you need the most help right now.</p>
                
                <div className="space-y-4">
                  {Object.keys(empathyMessages).map((type) => (
                    <label 
                      key={type} 
                      className={`block p-4 rounded-xl border cursor-pointer transition-all duration-300 ${supportType === type ? 'border-brand-secondary bg-brand-secondary/5 shadow-sm' : 'border-gray-200 hover:border-brand-secondary/50'}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${supportType === type ? 'border-brand-secondary' : 'border-gray-300'}`}>
                          {supportType === type && <div className="w-2.5 h-2.5 rounded-full bg-brand-secondary"></div>}
                        </div>
                        <input 
                          type="radio" 
                          name="supportType" 
                          value={type} 
                          className="hidden"
                          onChange={(e) => setSupportType(e.target.value)}
                        />
                        <span className="text-brand-darker font-medium">{type}</span>
                      </div>
                    </label>
                  ))}
                </div>

                <AnimatePresence>
                  {supportType && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-brand-primary/5 border-l-2 border-brand-primary rounded-r-xl">
                        <p className="text-brand-darker font-light italic">
                          "{empathyMessages[supportType]}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex-grow"
              >
                <h2 className="font-serif text-3xl text-brand-darker mb-3">Is there anything else we should know?</h2>
                <p className="text-gray-500 font-light mb-10">Share as much or as little as you feel comfortable with.</p>
                
                <div className="relative">
                  <textarea 
                    rows={6} 
                    className="w-full bg-transparent border border-gray-300 rounded-xl p-4 text-brand-darker focus:outline-none focus:border-brand-secondary resize-none"
                    placeholder="Briefly describe your situation (Optional)"
                  ></textarea>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-12 pt-6 border-t border-gray-100">
            {step > 1 ? (
              <button 
                type="button" 
                onClick={prevStep}
                className="flex items-center justify-center gap-2 text-gray-500 hover:text-brand-darker transition-colors font-medium w-full sm:w-auto py-3 sm:py-0 order-2 sm:order-1"
              >
                <ArrowLeft size={18} /> Back
              </button>
            ) : <div className="hidden sm:block order-2 sm:order-1"></div>}

            {step < 3 ? (
              <button 
                type="button" 
                onClick={nextStep}
                disabled={step === 2 && !supportType}
                className="flex items-center justify-center gap-2 bg-brand-darker text-white hover:bg-brand-secondary px-8 py-3 rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto order-1 sm:order-2"
              >
                Next <ArrowRight size={18} />
              </button>
            ) : (
              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 bg-brand-secondary text-brand-darker hover:bg-brand-primary hover:text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg w-full sm:w-auto order-1 sm:order-2"
              >
                Submit Request <ArrowRight size={18} />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export function GetHelp() {
  return (
    <div className="bg-brand-light/30">
      <PageHeader 
        title="Get Help" 
        description="You don't have to face your struggles alone. We are here to provide immediate support, guidance, and resources."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2000&auto=format&fit=crop"
      />
      
      <AnatomyOfACall />

      <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
        {/* Global Ambient Background for the section */}
        <div className="absolute inset-0 z-0 bg-brand-light/50"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-secondary/10 rounded-full blur-[120px]"
          ></motion.div>
          <motion.div 
            animate={{ 
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-brand-primary/5 rounded-full blur-[120px]"
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-brand-secondary"></div>
                  <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
                    Reach Out Today
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-8 leading-tight">
                  We are ready to listen.
                </h2>
                <p className="text-lg text-gray-600 font-light mb-12">
                  Whether you are in crisis or just looking for guidance, our team is here to provide a safe, confidential space.
                </p>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 group-hover:border-brand-secondary transition-colors shadow-sm">
                      <Phone className="text-brand-darker group-hover:text-brand-secondary transition-colors" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-1">Crisis Helpline</h3>
                      <a href="tel:6131234567" className="text-2xl font-serif text-brand-darker hover:text-brand-secondary transition-colors">613-123-4567</a>
                      <p className="text-gray-500 font-light text-sm mt-2">Available 24/7 for immediate support.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 group-hover:border-brand-secondary transition-colors shadow-sm">
                      <Mail className="text-brand-darker group-hover:text-brand-secondary transition-colors" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-1">General Inquiries</h3>
                      <a href="mailto:help@omcs.ca" className="text-xl text-brand-darker hover:text-brand-secondary transition-colors">help@omcs.ca</a>
                      <p className="text-gray-500 font-light text-sm mt-2">For non-urgent support and info.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center shrink-0 group-hover:border-brand-secondary transition-colors shadow-sm">
                      <MapPin className="text-brand-darker group-hover:text-brand-secondary transition-colors" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-1">Drop-in Center</h3>
                      <p className="text-xl text-brand-darker">123 Community Way<br/>Ottawa, ON K1A 0B1</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 font-light">
                        <Clock size={14} />
                        <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Intake Form */}
            <div className="lg:col-span-7">
              <ConversationalForm />
            </div>

          </div>
        </div>
      </section>

      {/* External Resources Banner */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h3 className="font-serif text-3xl text-brand-darker mb-4">Need other community services?</h3>
          <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
            We work closely with a network of trusted organizations across Ottawa, including food banks, shelters, and specialized mental health services.
          </p>
          <a href="/resources" className="inline-flex items-center gap-2 text-brand-darker font-medium hover:text-brand-secondary transition-colors border border-gray-200 hover:border-brand-secondary px-8 py-4 rounded-full shadow-sm hover:shadow-md">
            Explore Partners & Resources <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
