import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowUp, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { AnimatePresence, motion } from 'motion/react';
import { ErrorBoundary } from './ErrorBoundary';

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
          transition={{ duration: 0.3, ease: 'easeOut' }}
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
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navBgClass = isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6';
  const textClass = isScrolled ? 'text-brand-dark' : 'text-white';
  const linkClass = isScrolled ? 'text-gray-600 hover:text-brand-primary' : 'text-gray-200 hover:text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass} ${textClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="w-12 h-12" />
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-wider leading-none">OMCS</h1>
            <p className={`text-[0.5rem] tracking-[0.2em] uppercase mt-1 ${!isScrolled ? 'text-gray-300' : 'text-gray-500'}`}>
              Ottawa Muslim Community Services
            </p>
          </div>
        </Link>

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
  const footerLinks = [
    { to: '/about', label: 'About Us' },
    { to: '/counselling', label: 'Clinical Counselling' },
    { to: '/get-help', label: 'Food Security' },
    { to: '/programs', label: 'Community Programs' },
    { to: '/stories', label: 'Impact Stories' },
    { to: '/events', label: 'Events' },
    { to: '/volunteer', label: 'Volunteer' },
    { to: '/resources', label: 'Partners & Resources' },
  ];

  return (
    <footer className="bg-brand-darker text-white px-6 md:px-12 pt-20 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14 shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-brand-secondary/8 blur-3xl" />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Link to="/" className="inline-flex items-center gap-4 mb-7">
                <div className="rounded-2xl border border-white/10 bg-white/95 p-2 shadow-lg shadow-black/10">
                  <Logo className="w-11 h-11" />
                </div>
                <div>
                  <h2 className="font-serif text-[2rem] leading-none tracking-[0.03em]">OMCS</h2>
                  <p className="mt-2 text-[0.6rem] uppercase tracking-[0.32em] text-gray-400">
                    Ottawa Muslim Community Services
                  </p>
                </div>
              </Link>

              <p className="max-w-md text-[1.02rem] leading-8 text-gray-300">
                Counselling, support, and belonging for Ottawa&apos;s Muslim community, delivered with compassion, dignity, and clinical excellence.
              </p>

              <div className="mt-8 inline-flex flex-col rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
                <span className="text-[0.68rem] uppercase tracking-[0.28em] text-gray-500">Registered Charity</span>
                <span className="mt-2 font-mono text-lg tracking-[0.08em] text-white">12345 6789 RR0001</span>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gray-500">Explore</p>
              <ul className="grid grid-cols-1 gap-3 text-[1.05rem] text-gray-300">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="group inline-flex items-center gap-3 transition-colors hover:text-white">
                      <span className="h-px w-0 bg-brand-secondary transition-all duration-300 group-hover:w-4" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gray-500">Contact</p>
              <div className="space-y-4">
                <a href="tel:6131234567" className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/10 px-4 py-4 text-gray-300 transition-colors hover:text-white">
                  <Phone size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                  <span className="leading-7">613-123-4567</span>
                </a>
                <a href="mailto:info@omcs.ca" className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/10 px-4 py-4 text-gray-300 transition-colors hover:text-white">
                  <Mail size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                  <span className="leading-7">info@omcs.ca</span>
                </a>
                <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/10 px-4 py-4 text-gray-300">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-brand-secondary" />
                  <span className="leading-7">Ottawa, ON<br />(Appointments required)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-black/15 p-6">
                <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-gray-500">Stay Connected</p>
                <h4 className="mt-4 font-serif text-2xl text-white">Community updates, thoughtfully delivered.</h4>
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Join our newsletter for program highlights, upcoming events, and stories of impact across Ottawa.
                </p>

                <form className="mt-6 relative" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-full border border-white/10 bg-white/5 py-3.5 pl-5 pr-14 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-secondary transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 aspect-square rounded-full bg-brand-secondary text-brand-darker flex items-center justify-center transition-colors hover:bg-brand-secondary-hover"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>

                <div className="mt-6 flex gap-3">
                  <a href="#" aria-label="Facebook" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 transition-all hover:bg-brand-secondary hover:text-brand-darker hover:border-brand-secondary">
                    <Facebook size={18} />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 transition-all hover:bg-brand-secondary hover:text-brand-darker hover:border-brand-secondary">
                    <Instagram size={18} />
                  </a>
                  <a href="#" aria-label="YouTube" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 transition-all hover:bg-brand-secondary hover:text-brand-darker hover:border-brand-secondary">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-950/20 px-5 py-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-red-300">In Crisis?</p>
                <p className="mt-2 text-sm leading-7 text-gray-300">
                  If you are in immediate danger, please call <strong className="text-white">911</strong> or go to your nearest emergency room.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
            <span>© {new Date().getFullYear()} OMCS. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
              <span className="text-white/15">/</span>
              <Link to="/terms" className="transition-colors hover:text-white">Terms of Use</Link>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span>Design & Development by</span>{' '}
            <a href="https://bakaltech.github.io/bakal-digital/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 underline-offset-4 transition-colors hover:text-white hover:decoration-white">
              Bakal Digital
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTopOnMount() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
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
