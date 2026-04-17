import { useState, useEffect, useRef } from 'react';
import { PageHeader } from '../components/PageHeader';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Download } from 'lucide-react';

const growthData = [
  { year: '2019', families: 120, meals: 3000 },
  { year: '2020', families: 250, meals: 8000 },
  { year: '2021', families: 400, meals: 12000 },
  { year: '2022', families: 550, meals: 15000 },
  { year: '2023', families: 700, meals: 18000 },
  { year: '2024', families: 850, meals: 22000 },
];

function AnimatedCounter({ value, duration = 2, suffix = '' }: { value: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = Math.round(duration * 60);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.round(end * easeProgress);
        
        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(end);
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const milestones = [
    { year: '2000', title: 'Foundation', desc: 'OMCS begins its mission to support immigrant families and vulnerable communities in Ottawa.' },
    { year: '2003', title: 'First Community Center', desc: 'Opened our first dedicated space to host community events and support groups.' },
    { year: '2008', title: 'Community Programs', desc: 'Launch of youth mentorship and settlement programs, reaching hundreds of families.' },
    { year: '2010', title: 'Food Security Initiative', desc: 'Started the Halal Meals program, delivering nutritious food to families in need.' },
    { year: '2015', title: 'Mental Health Expansion', desc: 'Expanded counselling and mental wellness services, adding trauma-informed care.' },
    { year: '2018', title: 'Refugee Support Network', desc: 'Created specialized programs to assist newly arrived refugees with settlement and integration.' },
    { year: '2020', title: 'Virtual Services', desc: 'Rapidly adapted to offer online counselling and workshops during the pandemic.' },
    { year: '2022', title: 'Senior Care Program', desc: 'Launched dedicated support services and social groups for isolated seniors.' },
    { year: '2023', title: 'Growing Impact', desc: 'Thousands of families supported across Ontario; new partnership with local health networks.' },
    { year: '2025', title: '25th Anniversary', desc: 'Celebrating 25 years of service with expanded programs and new community centre.' },
  ];

  return (
    <section className="py-24 bg-brand-light/30 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-brand-darker">Our Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Background Vertical line */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>
          
          {/* Animated Vertical line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-brand-secondary to-brand-primary rounded-full origin-top"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0; // Right side on desktop
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className={`relative flex items-center w-full md:w-1/2 ${isEven ? 'md:ml-auto md:pl-12 pl-16' : 'md:mr-auto md:pr-12 pl-16 md:pl-0'}`}
                >
                  {/* Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 + idx * 0.1 }}
                    className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-brand-secondary border-4 border-white shadow-md z-10 left-6 -translate-x-1/2 ${isEven ? 'md:left-0' : 'md:left-auto md:right-0 md:translate-x-1/2'}`}
                  />
                  
                  <div className={`bg-white/80 backdrop-blur-md border border-brand-secondary/20 rounded-2xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-brand-secondary transition-all duration-500 w-full group relative overflow-hidden ${!isEven ? 'md:text-right' : ''}`}>
                    {/* Subtle background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-brand-light text-brand-secondary font-bold text-sm tracking-widest rounded-full mb-3">{item.year}</span>
                      <h3 className="text-2xl font-serif mt-2 text-brand-darker group-hover:text-brand-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-600 mt-3 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceDelivery() {
  const stats = [
    { label: 'Counselling sessions', value: '1,500+', percent: 95 },
    { label: 'Workshops delivered', value: '85', percent: 85 },
    { label: 'Youth mentorship matches', value: '120', percent: 90 },
    { label: 'Senior support participants', value: '300+', percent: 80 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-brand-darker">Service Delivery (2025)</h2>
        <div className="bg-brand-light/30 border border-brand-secondary/20 rounded-3xl p-8 md:p-10 shadow-sm space-y-8">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-3">
                <span className="font-medium text-gray-700">{stat.label}</span>
                <span className="text-brand-primary font-bold">{stat.value}</span>
              </div>
              <div className="w-full bg-[#E2D9CE] rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-brand-secondary to-brand-primary rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-500 text-center mt-6">* Based on 2025 projected data</p>
      </div>
    </section>
  );
}

function CommunityVoices() {
  const testimonials = [
    { quote: "The counselling I received at OMCS changed my life. For the first time, I felt truly understood by someone who shared my cultural background.", author: "Amina, client" },
    { quote: "As a newcomer, the settlement program helped me find housing and a job within months. I'm now able to support my family thanks to OMCS.", author: "Khalid, newcomer" },
    { quote: "The youth mentorship program gave my son confidence and a positive role model. He's now applying for university!", author: "Fatima, parent" },
    { quote: "Volunteering at OMCS has been the most rewarding experience. I've made friends and helped my community.", author: "Sami, volunteer" },
    { quote: "The parenting workshops gave me tools I use every day. My relationship with my children has never been better.", author: "Layla, mother" },
    { quote: "I came to Canada with nothing. OMCS helped me find a job, a home, and a community. I am forever grateful.", author: "Ahmed, newcomer" },
    { quote: "The senior support group has become my second family. I look forward to our weekly gatherings.", author: "Mariam, senior" },
    { quote: "After struggling with anxiety for years, the culturally sensitive therapy at OMCS helped me find peace.", author: "Omar, client" },
    { quote: "The addiction support group saved my life. I'm now two years sober and mentoring others.", author: "Yusuf, client" },
    { quote: "OMCS's community events made me feel welcome in Ottawa. I've met lifelong friends.", author: "Nadia, attendee" },
    { quote: "As a volunteer, I've seen firsthand how OMCS changes lives. Proud to be part of this team.", author: "Zaynab, volunteer" },
    { quote: "The family counselling helped us communicate better and heal old wounds. Thank you, OMCS.", author: "The Hassan family" },
  ];

  return (
    <section className="py-24 bg-brand-light/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-brand-darker">Community Voices</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-6 py-4 whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className="w-[300px] md:w-[350px] flex-shrink-0 whitespace-normal bg-white rounded-2xl p-8 shadow-sm border border-brand-secondary/20 hover:border-brand-secondary hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="text-brand-secondary text-5xl font-serif leading-none mb-2">"</div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">{t.quote}</p>
              <p className="font-semibold text-brand-darker">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Impact" 
        description="Transparency and accountability are at the heart of what we do. See how your support translates into real change."
        image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2000&auto=format&fit=crop"
      />
      
      {/* Animated Stats Section (Old visual style, new data) */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-brand-secondary font-bold tracking-widest uppercase text-xs mb-4 block">
            By The Numbers
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-darker">
            The scale of our care.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { number: 25000, label: "Individuals Served", suffix: "+" },
            { number: 15000, label: "Counselling Sessions", suffix: "+" },
            { number: 500, label: "Workshops & Events", suffix: "+" },
            { number: 40, label: "Community Partners", suffix: "+" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="p-8 rounded-[2rem] bg-brand-light/30 border border-brand-secondary/10 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-secondary/10 rounded-full blur-2xl group-hover:bg-brand-secondary/20 transition-colors"></div>
              <div className="font-serif text-5xl md:text-6xl text-brand-darker mb-4 relative z-10 flex items-baseline">
                <AnimatedCounter value={stat.number} />
                <span className="text-brand-secondary text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-gray-500 uppercase tracking-widest text-xs font-bold relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Data as Art - Chart Section (Old feature) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-3xl md:text-4xl text-brand-darker mb-6">
              A growing community of support.
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Over the past five years, the need for culturally competent care has grown exponentially. We have scaled our operations to meet this demand, ensuring that no family is turned away when they need us most.
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-brand-darker">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-secondary"></div>
                Meals Delivered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                Families Supported
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 h-[400px] w-full bg-white rounded-[2rem] p-6 border border-gray-100 shadow-xl min-h-0 min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMeals" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFamilies" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2C3E50" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2C3E50" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dx={-10} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dx={10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ fontWeight: 500 }}
                />
                <Area yAxisId="left" type="monotone" dataKey="meals" stroke="#D4AF37" strokeWidth={3} fillOpacity={1} fill="url(#colorMeals)" />
                <Area yAxisId="right" type="monotone" dataKey="families" stroke="#2C3E50" strokeWidth={3} fillOpacity={1} fill="url(#colorFamilies)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <JourneyTimeline />
      <ServiceDelivery />
      <CommunityVoices />

      {/* Annual Report CTA (Old visual style) */}
      <section className="py-24 bg-brand-darker text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577415124269-b9140d53d2e5?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">2024 Annual Report</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed font-light">
            Despite unprecedented challenges, our community came together to ensure no one was left behind. Read our full annual report for detailed financial breakdowns and stories of resilience.
          </p>
          <button className="bg-brand-secondary hover:bg-brand-secondary-hover text-brand-darker px-10 py-4 rounded-full font-medium transition-colors shadow-lg inline-flex items-center justify-center gap-3 w-full sm:w-auto">
            <Download size={20} /> Download Full Report (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}
