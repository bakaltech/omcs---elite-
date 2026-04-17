import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'motion/react';
import { Heart, ArrowRight, Shield, Globe, Users } from 'lucide-react';
import { ASSETS, getImageUrl } from '../assets';

function DonationWidget() {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState<number | 'custom'>(100);
  const [customAmount, setCustomAmount] = useState<string>("");

  const amounts = [50, 100, 250, 500];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to Stripe/PayPal
    alert("This would redirect to the payment processor.");
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h3 className="font-serif text-3xl text-brand-darker mb-8">Make a Donation</h3>
        
        <form onSubmit={handleDonate}>
          {/* Frequency Toggle */}
          <div className="flex p-1 bg-gray-100 rounded-full mb-8">
            <button
              type="button"
              onClick={() => setFrequency('one-time')}
              className={`flex-1 py-3 rounded-full text-sm font-medium transition-all ${frequency === 'one-time' ? 'bg-white text-brand-darker shadow-sm' : 'text-gray-500 hover:text-brand-darker'}`}
            >
              One-time
            </button>
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`flex-1 py-3 rounded-full text-sm font-medium transition-all ${frequency === 'monthly' ? 'bg-white text-brand-darker shadow-sm' : 'text-gray-500 hover:text-brand-darker'}`}
            >
              Monthly
            </button>
          </div>

          {/* Amount Selection */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {amounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => { setAmount(amt); setCustomAmount(""); }}
                className={`py-4 rounded-2xl border-2 font-serif text-2xl transition-all ${amount === amt ? 'border-brand-secondary bg-brand-secondary/5 text-brand-darker' : 'border-gray-200 text-gray-500 hover:border-brand-secondary/50'}`}
              >
                ${amt}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setAmount('custom')}
              className={`py-4 rounded-2xl border-2 font-medium text-lg transition-all ${amount === 'custom' ? 'border-brand-secondary bg-brand-secondary/5 text-brand-darker' : 'border-gray-200 text-gray-500 hover:border-brand-secondary/50'}`}
            >
              Custom
            </button>
          </div>

          {/* Custom Amount Input */}
          {amount === 'custom' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8 relative"
            >
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-serif text-gray-400">$</span>
              <input 
                type="number" 
                min="1"
                placeholder="Enter amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-6 text-2xl font-serif text-brand-darker focus:outline-none focus:border-brand-secondary focus:bg-white transition-colors"
              />
            </motion.div>
          )}

          {/* Impact Text */}
          <div className="mb-8 p-4 bg-brand-light/50 rounded-xl border border-brand-secondary/20">
            <p className="text-brand-darker text-sm font-medium flex items-center gap-2">
              <Heart size={16} className="text-brand-secondary" />
              {frequency === 'monthly' ? "Your monthly gift sustains our programs year-round." : "Your gift provides immediate support to those in need."}
            </p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-brand-darker text-white hover:bg-brand-secondary hover:text-brand-darker py-5 rounded-full font-medium text-lg transition-colors flex items-center justify-center gap-2 group"
          >
            Donate Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-1">
            <Shield size={12} /> Secure payment processing. Tax receipts issued instantly.
          </p>
        </form>
      </div>
    </div>
  );
}

function ImpactMetrics() {
  return (
    <section className="py-24 bg-brand-darker text-white overflow-hidden relative">
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Where your money goes.</h2>
          <p className="text-xl text-white/70 font-light max-w-2xl mx-auto">
            We operate with radical transparency. Every dollar is an investment in the resilience and well-being of our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8"
          >
            <div className="text-brand-secondary font-serif text-6xl mb-4">85%</div>
            <h3 className="text-xl font-medium mb-2">Direct Programs</h3>
            <p className="text-white/60 font-light">Counselling, food security, and youth mentorship initiatives.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8"
          >
            <div className="text-brand-secondary font-serif text-6xl mb-4">10%</div>
            <h3 className="text-xl font-medium mb-2">Operations</h3>
            <p className="text-white/60 font-light">Keeping the lights on at our drop-in center and maintaining our infrastructure.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8"
          >
            <div className="text-brand-secondary font-serif text-6xl mb-4">5%</div>
            <h3 className="text-xl font-medium mb-2">Fundraising</h3>
            <p className="text-white/60 font-light">Community outreach and organizing events to sustain our mission.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Donate() {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImageUrl(ASSETS.communityGathering, 2000)} 
            alt="Community" 
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-darker/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-brand-secondary"></div>
                <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
                  Support Our Mission
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                Invest in <br/><span className="text-brand-secondary italic">healing.</span>
              </h1>
              <p className="text-xl text-white/80 font-light leading-relaxed mb-10 max-w-lg">
                Your generosity allows us to provide free counselling, food security, and safe spaces for those who need it most. You are not just giving money; you are saving lives.
              </p>
              
              <div className="flex items-center gap-6 text-sm font-medium text-white/60">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-brand-secondary" /> Registered Charity
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-brand-secondary" /> Tax Deductible
                </div>
              </div>
            </div>
            
            <div>
              <DonationWidget />
            </div>
          </div>
        </div>
      </section>

      <ImpactMetrics />

      {/* Other Ways to Give */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-4 mb-16 justify-center">
            <div className="w-8 h-[1px] bg-brand-secondary"></div>
            <span className="text-brand-secondary font-medium tracking-[0.2em] uppercase text-xs">
              More Options
            </span>
            <div className="w-8 h-[1px] bg-brand-secondary"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2rem] bg-brand-light/30 border border-brand-secondary/10 hover:border-brand-secondary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Users className="text-brand-darker" size={20} />
              </div>
              <h3 className="font-serif text-2xl text-brand-darker mb-4">Corporate Matching</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Double your impact. Many employers will match your charitable contributions. Check with your HR department.
              </p>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-brand-light/30 border border-brand-secondary/10 hover:border-brand-secondary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Heart className="text-brand-darker" size={20} />
              </div>
              <h3 className="font-serif text-2xl text-brand-darker mb-4">Legacy Giving</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Leave a lasting mark on the community by including OMCS in your will or estate planning.
              </p>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-brand-light/30 border border-brand-secondary/10 hover:border-brand-secondary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Globe className="text-brand-darker" size={20} />
              </div>
              <h3 className="font-serif text-2xl text-brand-darker mb-4">Wire Transfers</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                For large donations, stocks, or international wire transfers, please contact our finance team directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
