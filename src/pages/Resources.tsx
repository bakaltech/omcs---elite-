import { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ASSETS, getImageUrl } from '../assets';
import { Phone, Mail, MapPin, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Resources() {
  const [activeCategory, setActiveCategory] = useState("All");

  const partners = [
    { name: "City of Ottawa", logo: "/logos/Logos/City%20of%20Ottawa.jpg" },
    { name: "BGC Ottawa", logo: "/logos/Logos/bgc-ottawa.png" },
    { name: "NZF Canada", logo: "/logos/Logos/National%20Zakat%20Foundation.png" },
    { name: "CAS Ottawa", logo: "/logos/Logos/The-children-and%20Society-of-Ottwa.jpg" },
    { name: "Tarbiyah Learning", logo: "/logos/Logos/Tarbuyah.Learning..png" },
    { name: "Human Concern", logo: "/logos/Logos/Human-Concern-Internationa.png" },
    { name: "PQCHC", logo: "/logos/Logos/pinerest-queensway.jpg" },
    { name: "Islamic Relief", logo: "/logos/Logos/Islamic-Relief.jpg" },
    { name: "Muslim Link", logo: "/logos/Logos/Muslim-Link.png" }
  ];

  const categories = ["All", "Mental Health", "Food & Basic Needs", "Housing", "Mosques & Community", "Crisis Support"];

  const resourcesList = [
    {
      name: "RUH CARE",
      category: "Mental Health",
      desc: "Connect with a Muslim therapist aligned with your needs and values.",
      email: "hello@ruhcare.com",
      phone: "+1 416-639-5993",
    },
    {
      name: "Canadian Mental Health Association",
      category: "Mental Health",
      desc: "Ottawa branch",
      address: "311 McArthur Ave. 2nd floor, Ottawa",
      phone: "613-737-7791",
    },
    {
      name: "Islam Care Centre",
      category: "Mosques & Community",
      desc: "Temporary location",
      address: "375 Somerset St. W, Ottawa",
      email: "info@islamcare.ca",
    },
    {
      name: "Masjid Bilal",
      category: "Mosques & Community",
      desc: "Muslim Association",
      phone: "613-524-1222",
      email: "info@masjidbilal.ca",
    },
    {
      name: "SAMAA Food Bank",
      category: "Food & Basic Needs",
      desc: "Feed the Hungry – Share the Bounty®",
    },
    {
      name: "SADAQA Food Bank",
      category: "Food & Basic Needs",
      desc: "Food bank services",
    },
    {
      name: "The LifeLine Canada Foundation",
      category: "Crisis Support",
      desc: "Crisis Services Canada",
      address: "174 Colonnade Road Unit 34, Ottawa",
      phone: "613-225-0909",
      alert: "If you are in crisis, call 9-1-1."
    },
    {
      name: "Sakeenah Homes",
      category: "Housing",
      desc: "Transitional housing and support services.",
      email: "ottawa@sakeenahhomes.com",
      phone: "1-888-671-3446",
    },
    {
      name: "National Zakat Foundation",
      category: "Food & Basic Needs",
      desc: "Zakat distribution and support.",
      email: "info@nzfcanada.com",
      phone: "1-888-693-2203",
    },
    {
      name: "SNMC – Jami Omar",
      category: "Mosques & Community",
      desc: "Community mosque and services.",
      phone: "613-428-2222",
      email: "jamiomar@gmail.com",
    },
    {
      name: "Ottawa Muslim Association",
      category: "Mosques & Community",
      desc: "Community mosque and services.",
      address: "1216 Hunt Club Rd., Ottawa",
      phone: "613-523-9977",
      email: "info@mymasjid.ca",
    },
    {
      name: "Assalam Mosque Corporation",
      category: "Mosques & Community",
      desc: "Community mosque and services.",
      address: "100-2335 St. Laurent Blvd, Ottawa",
      phone: "613-725-3739",
      email: "contact@assalamosque.com",
    },
    {
      name: "The Muslim Link",
      category: "Mosques & Community",
      desc: "Covers issues and events relevant to Muslims in the local area as well as on the national scene.",
    },
    {
      name: "Islamic Relief Canada",
      category: "Food & Basic Needs",
      desc: "International and local relief efforts.",
      phone: "613-728-8763",
      email: "info@ottawamusque.ca",
    }
  ];

  const filteredResources = activeCategory === "All" 
    ? resourcesList 
    : resourcesList.filter(r => r.category === activeCategory);

  return (
    <div className="bg-white">
      <SEO 
        title="Community Resources & Partners - OMCS"
        description="A directory of trusted partner organizations in Ottawa offering mental health, food, housing, and crisis support services."
        canonicalUrl="/resources"
      />
      <PageHeader 
        title="Partners & Resources" 
        description="Our partners and community resources form a vibrant ecosystem of support. Explore the organizations that make our work possible."
        image={getImageUrl(ASSETS.communityGathering, 2000)}
      />

      {/* Infinite Scrolling Partner Logos */}
      <section className="py-16 bg-brand-light/30 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
          <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-brand-secondary">Our Trusted Partners</h3>
        </div>
        <div className="relative w-full flex items-center">
          {/* Gradient Masks for smooth fading on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-brand-light/30 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-brand-light/30 to-transparent z-10"></div>
          
          <motion.div
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {/* Double the array for seamless looping */}
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="mx-8 md:mx-16 flex items-center justify-center w-32 md:w-40 h-20">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-14 max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('ui-avatars')) {
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=F3F4F6&color=0B4D3C&font-size=0.33&size=128&rounded=true`;
                    } else {
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }
                  }}
                />
                <span className="hidden font-serif text-xl text-gray-400 text-center whitespace-normal leading-tight">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resource Directory with Filters */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-darker mb-6">Community Directory</h2>
            <p className="text-lg text-gray-600 font-light">
              Trusted organizations offering various services in Ottawa. We're grateful for every partnership listed below. Each one plays a unique role in building a stronger, more connected community.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-secondary text-brand-darker shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filtered Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={resource.name} 
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-brand-secondary/50 transition-all duration-300 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-brand-light/50 rounded-full flex items-center justify-center text-brand-secondary">
                      <Heart size={24} />
                    </div>
                    <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-brand-darker mb-2">{resource.name}</h3>
                  <p className="text-gray-600 font-light mb-6 flex-grow">{resource.desc}</p>
                  
                  <div className="space-y-3 text-sm text-gray-500 border-t border-gray-100 pt-6 mt-auto">
                    {resource.address && (
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                        <span>{resource.address}</span>
                      </div>
                    )}
                    {resource.phone && (
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-brand-secondary shrink-0" />
                        <a href={`tel:${resource.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-brand-darker transition-colors">{resource.phone}</a>
                      </div>
                    )}
                    {resource.email && (
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-brand-secondary shrink-0" />
                        <a href={`mailto:${resource.email}`} className="hover:text-brand-darker transition-colors">{resource.email}</a>
                      </div>
                    )}
                    {resource.alert && (
                      <p className="text-red-500 font-medium mt-2">{resource.alert}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredResources.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No resources found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Suggest a Resource CTA */}
      <section className="py-24 bg-brand-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity">
          <img src={getImageUrl(ASSETS.communityEvent, 2000)} alt="Background" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Know someone we should add?</h2>
          <p className="text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto">
            Help us grow this network. If you know of a trusted community organization or resource, let us know so we can connect them with those in need.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-secondary text-brand-darker hover:bg-white px-10 py-4 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl">
            Suggest a Partner <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
