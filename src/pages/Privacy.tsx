import { PageHeader } from '../components/PageHeader';
import { ASSETS, getImageUrl } from '../assets';
import { SEO } from '../components/SEO';

export function Privacy() {
  return (
    <div className="bg-white">
      <SEO 
        title="Privacy Policy - OMCS"
        description="Read the Ottawa Muslim Community Services privacy policy to learn how we protect your information."
        canonicalUrl="/privacy"
      />
      <PageHeader 
        title="Privacy Policy" 
        description="How OMCS collects, uses, and safeguards information shared through this website."
        image={getImageUrl(ASSETS.communityGathering, 2000)}
      />
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-brand-light/30 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 space-y-10">
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">Information We Collect</h2>
              <p className="text-gray-600 font-light leading-relaxed">We may collect contact details, form submissions, and limited website analytics information when you contact OMCS, request services, donate, or sign up for updates.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">How We Use Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">Information is used to respond to inquiries, coordinate services, process donations, improve the website experience, and communicate about OMCS programs and updates.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">Confidentiality</h2>
              <p className="text-gray-600 font-light leading-relaxed">OMCS treats personal information with care and limits access to authorized team members and service providers who need it to support our operations and programs.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">Third-Party Services</h2>
              <p className="text-gray-600 font-light leading-relaxed">This website may link to third-party platforms such as email, scheduling, maps, and social media tools. Their privacy practices are governed by their own policies.</p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-brand-darker mb-4">Contact</h2>
              <p className="text-gray-600 font-light leading-relaxed">Questions about privacy can be directed to <a href="mailto:info@omcs.ca" className="text-brand-secondary font-medium hover:underline">info@omcs.ca</a> or by phone at <a href="tel:6131234567" className="text-brand-secondary font-medium hover:underline">613-123-4567</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
