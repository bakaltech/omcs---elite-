import { PageHeader } from '../components/PageHeader';
import { ASSETS, getImageUrl } from '../assets';
import { SEO } from '../components/SEO';

export function Terms() {
  return (
    <div className="bg-white">
      <SEO 
        title="Terms of Use - OMCS"
        description="Terms and conditions for using the Ottawa Muslim Community Services website."
        canonicalUrl="/terms"
      />
      <PageHeader 
        title="Terms of Use" 
        description="Ground rules for using the OMCS website and linked information."
        image={getImageUrl(ASSETS.communityGathering, 2000)}
      />
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-brand-light/30 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">Website Use</h2>
              <p className="text-gray-600 font-light leading-relaxed">This website is provided for general information, community support, and service access. It must not be used for unlawful, harmful, or misleading purposes.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">Service Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">OMCS works to keep website content accurate and current, but program details, dates, and service availability may change. Please contact OMCS directly to confirm time-sensitive information.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">External Links</h2>
              <p className="text-gray-600 font-light leading-relaxed">External websites are provided for convenience and community connection. OMCS is not responsible for the content, policies, or security of third-party websites.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">Intellectual Property</h2>
              <p className="text-gray-600 font-light leading-relaxed">Website copy, branding, and original assets remain the property of OMCS or their respective owners unless otherwise stated.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">Contact</h2>
              <p className="text-gray-600 font-light leading-relaxed">Questions about these terms can be directed to <a href="mailto:info@omcs.ca" className="text-brand-secondary font-medium hover:underline">info@omcs.ca</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
