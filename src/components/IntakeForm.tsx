import { useState } from 'react';

interface IntakeFormProps {
  contextName: string;
  type: 'volunteer' | 'rsvp';
  onSuccess: () => void;
}

export function IntakeForm({ contextName, type, onSuccess }: IntakeFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request for 1 second
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Close the modal automatically after showing success for 2 seconds
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4 h-full">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-6 shadow-sm">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-brand-darker mb-3">Thank You!</h3>
        <p className="text-gray-600 font-light leading-relaxed">
          Your {type === 'volunteer' ? 'volunteer application' : 'registration'} for <strong className="text-brand-primary">{contextName}</strong> has been successfully received. 
        </p>
        <p className="text-gray-500 text-sm mt-6">
          We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <p className="text-gray-600 font-light leading-relaxed mb-2 pb-6 border-b border-gray-100">
        Please fill out the form below to {type === 'volunteer' ? 'volunteer for' : 'RSVP for'} <strong>{contextName}</strong>. Our team will coordinate with you.
      </p>

      <div className="flex flex-col gap-2">
        <label htmlFor="intake-name" className="text-sm font-medium text-brand-darker tracking-wide">Full Name <span aria-hidden="true" className="text-brand-secondary">*</span></label>
        <input id="intake-name" name="name" required aria-required="true" type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/50 transition-all placeholder:text-gray-400" placeholder="Enter your full name" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="intake-email" className="text-sm font-medium text-brand-darker tracking-wide">Email Address <span aria-hidden="true" className="text-brand-secondary">*</span></label>
        <input id="intake-email" name="email" required aria-required="true" type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/50 transition-all placeholder:text-gray-400" placeholder="hello@example.com" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="intake-phone" className="text-sm font-medium text-brand-darker tracking-wide">Phone Number <span className="text-gray-400 font-normal text-xs ml-1">(Optional)</span></label>
        <input id="intake-phone" name="phone" type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/50 transition-all placeholder:text-gray-400" placeholder="(613) 555-0123" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="intake-notes" className="text-sm font-medium text-brand-darker tracking-wide">Additional Notes</label>
        <textarea id="intake-notes" name="notes" rows={4} className="w-full border border-gray-200 rounded-lg px-4 py-3.5 focus:outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/50 transition-all resize-none placeholder:text-gray-400" placeholder="Any questions or special requirements?" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-4 w-full bg-brand-darker text-white py-4 rounded-full text-lg font-medium transition-colors hover:bg-brand-secondary hover:text-brand-darker flex items-center justify-center shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-secondary/50 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Submit Application'
        )}
      </button>
    </form>
  );
}
