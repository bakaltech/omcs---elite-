import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowUp, ArrowRight, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { AnimatePresence, motion } from 'motion/react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-brand-darker/90 hover:bg-brand-primary text-white shadow-xl backdrop-blur-sm transition-colors border border-white/10"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on the home page to determine initial text color
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navBgClass = isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6';
  const textClass = isScrolled ? 'text-brand-dark' : 'text-white';
  const linkClass = isScrolled ? 'text-gray-600 hover:text-brand-primary' : 'text-gray-200 hover:text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass} ${textClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
           <Logo className="w-12 h-12" />
           <div>
             <h1 className="font-serif text-2xl font-bold tracking-wider leading-none">OMCS</h1>
             <p className={`text-[0.5rem] tracking-[0.2em] uppercase mt-1 ${!isScrolled ? 'text-gray-300' : 'text-gray-500'}`}>
               Ottawa Muslim Community Services
             </p>
           </div>
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden lg:flex items-center gap-4 xl:gap-8 text-sm font-medium ${linkClass}`}>
          <Link to="/about" className="transition-colors whitespace-nowrap">About</Link>
          <Link to="/get-help" className="transition-colors whitespace-nowrap">Get Help</Link>
          <Link to="/programs" className="transition-colors whitespace-nowrap">Programs</Link>
          <Link to="/counselling" className="transition-colors whitespace-nowrap">Counselling</Link>
          <Link to="/impact" className="transition-colors whitespace-nowrap">Impact</Link>
          <Link to="/stories" className="transition-colors whitespace-nowrap">Stories</Link>
          <Link to="/get-involved" className="transition-colors whitespace-nowrap">Get Involved</Link>
          <Link to="/resources" className="transition-colors whitespace-nowrap">Resources</Link>
          <Link to="/contact" className="transition-colors whitespace-nowrap">Contact</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/donate" className="hidden md:block bg-brand-secondary hover:bg-brand-secondary-hover text-brand-darker px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm whitespace-nowrap">
            Donate
          </Link>
          <button 
            className={`p-2 rounded-full transition-colors lg:hidden ${!isScrolled ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-gray-100 hover:bg-gray-200 text-brand-dark'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-2xl text-brand-dark overflow-y-auto max-h-[80vh]">
          <Link to="/about" className="text-lg font-medium">About</Link>
          <Link to="/get-help" className="text-lg font-medium">Get Help</Link>
          <Link to="/programs" className="text-lg font-medium">Programs</Link>
          <Link to="/counselling" className="text-lg font-medium">Counselling</Link>
          <Link to="/impact" className="text-lg font-medium">Impact</Link>
          <Link to="/stories" className="text-lg font-medium">Stories</Link>
          <Link to="/get-involved" className="text-lg font-medium">Get Involved</Link>
          <Link to="/resources" className="text-lg font-medium">Resources</Link>
          <Link to="/contact" className="text-lg font-medium">Contact</Link>
          <Link to="/donate" className="bg-brand-secondary text-brand-darker px-6 py-3 rounded-full font-medium mt-4 w-full text-center shadow-sm">
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-darker text-white pt-24 pb-10 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        {/* Brand & Mission (Spans 4 columns on large screens) */}
        <div className="lg:col-span-4 pr-0 lg:pr-8">
          <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
             <div className="bg-white p-1 rounded-lg">
               <Logo className="w-10 h-10" />
             </div>
             <div>
               <h2 className="font-serif text-2xl font-bold tracking-wider leading-none">OMCS</h2>
               <p className="text-[0.5rem] tracking-[0.2em] uppercase text-gray-400 mt-1">Ottawa Muslim Community Services</p>
             </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Counselling, support, and belonging for Ottawa's Muslim community — delivered with compassion, dignity, and clinical excellence.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 inline-block">
            <p className="text-xs text-gray-400 font-mono">Registered Charity No.</p>
            <p className="text-sm font-medium text-white tracking-wider">12345 6789 RR0001</p>
          </div>
        </div>

        {/* Quick Links (Spans 2 columns) */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-lg mb-6 text-white">Explore</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link to="/about" className="hover:text-brand-secondary transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100"></span>About Us</Link></li>
            <li><Link to="/counselling" className="hover:text-brand-secondary transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100"></span>Clinical Counselling</Link></li>
            <li><Link to="/get-help" className="hover:text-brand-secondary transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100"></span>Food Security</Link></li>
            <li><Link to="/programs" className="hover:text-brand-secondary transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100"></span>Community Programs</Link></li>
            <li><Link to="/stories" className="hover:text-brand-secondary transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100"></span>Impact Stories</Link></li>
            <li><Link to="/events" className="hover:text-brand-secondary transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100"></span>Events</Link></li>
            <li><Link to="/volunteer" className="hover:text-brand-secondary transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100"></span>Volunteer</Link></li>
            <li><Link to="/resources" className="hover:text-brand-secondary transition-colors inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-brand-secondary opacity-0 transition-opacity group-hover:opacity-100"></span>Partners & Resources</Link></li>
          </ul>
        </div>

        {/* Contact & Crisis (Spans 3 columns) */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-lg mb-6 text-white">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm mb-8">
            <li>
              <a href="tel:6131234567" className="flex items-start gap-3 group hover:text-white transition-colors">
                <Phone size={18} className="shrink-0 mt-0.5 text-brand-secondary group-hover:scale-110 transition-transform" />
                <span>613-123-4567</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@omcs.ca" className="flex items-start gap-3 group hover:text-white transition-colors">
                <Mail size={18} className="shrink-0 mt-0.5 text-brand-secondary group-hover:scale-110 transition-transform" />
                <span>info@omcs.ca</span>
              </a>
            </li>
            <li className="flex items-start gap-3 group">
              <MapPin size={18} className="shrink-0 mt-0.5 text-brand-secondary group-hover:scale-110 transition-transform" />
              <span>Ottawa, ON<br/>(Appointments required)</span>
            </li>
          </ul>
          
          <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-4">
            <p className="text-xs text-red-300 font-bold uppercase tracking-wider mb-1">In Crisis?</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              If you are in immediate danger, please call <strong className="text-white">911</strong> or go to your nearest emergency room.
            </p>
          </div>
        </div>

        {/* Newsletter & Social (Spans 3 columns) */}
        <div className="lg:col-span-3">
          <h4 className="font-serif text-lg mb-6 text-white">Stay Connected</h4>
          <p className="text-gray-400 text-sm mb-4">Join our newsletter for updates on programs, events, and community impact.</p>
          <form className="mb-8 relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-secondary transition-colors"
              required
            />
            <button 
              type="submit" 
              className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square bg-brand-primary hover:bg-brand-secondary text-brand-darker rounded-full flex items-center justify-center transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-brand-darker hover:border-brand-primary transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-brand-darker hover:border-brand-primary transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-brand-primary hover:text-brand-darker hover:border-brand-primary transition-all">
              <Youtube size={18} />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500 gap-4">
        <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
          <span>© {new Date().getFullYear()} OMCS. All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span className="hidden md:inline">|</span>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
        <div className="flex items-center gap-1">
          Design & Development by <a href="https://bakaltech.github.io/bakal-digital/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-gray-500 hover:decoration-white underline-offset-2">Bakal Digital</a>
        </div>
      </div>
    </footer>
  );
}

import { ErrorBoundary } from './ErrorBoundary';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen font-sans selection:bg-brand-secondary selection:text-brand-darker flex flex-col bg-white">
      <ScrollToTopOnMount />
      <Navbar />
      <main className="flex-grow flex flex-col relative">
        <ErrorBoundary>
          <div className="flex-grow flex flex-col relative">
            <Outlet />
          </div>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
