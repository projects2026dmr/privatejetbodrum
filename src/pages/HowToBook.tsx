import { useEffect } from 'react';

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 48–72 hours in advance for optimal aircraft availability. However, we can arrange last-minute flights within hours when aircraft are available.',
  },
  {
    question: 'What information do I need to provide?',
    answer: 'Share your departure city, destination (Bodrum), preferred dates and times, number of passengers, and any special requests such as catering or ground transportation.',
  },
  {
    question: 'Can I change my flight after booking?',
    answer: 'Yes. Our concierge team can accommodate schedule changes, route modifications, and additional requests. Flexibility is one of the key benefits of private aviation.',
  },
  {
    question: 'Do you handle all airport procedures?',
    answer: 'Absolutely. We coordinate all GAT terminal access, passport control, apron procedures, and ground transfers at Milas-Bodrum Airport (BJV).',
  },
];

export default function HowToBook() {
  useEffect(() => {
    // Update document title
    document.title = 'How to Book a Private Jet to Bodrum | Private Jet Bodrum';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Step-by-step guide to booking a private jet to Bodrum, including route planning, aircraft selection, and concierge coordination.');
    }

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://privatejetbodrum.com/how-to-book');
    }

    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      // Reset on unmount
      document.title = 'Private Jet Bodrum | Jet & Helicopter Charter';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Private jet flights and helicopter scenic tours in Bodrum. Premium charter services with Airbus H130 and luxury jet options. Contact our concierge team 24/7.');
      }
      if (canonical) {
        canonical.setAttribute('href', 'https://privatejetbodrum.com');
      }
    };
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6">
            How to Book a Private Jet{' '}
            <span className="text-gold">to Bodrum</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A simple, step-by-step guide to booking a private jet to Bodrum with full concierge support.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* Step 1 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-serif text-6xl md:text-8xl text-gold/20 font-bold">01</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6">
                Share Your Route
              </h2>
              <p className="text-lg text-navy/70 leading-relaxed mb-6">
                Begin by contacting our flight concierge team via WhatsApp, Telegram, Email, or Instagram. Provide us with:
              </p>
              <ul className="space-y-3">
                {[
                  'Your departure city (e.g., London, Paris, Dubai)',
                  'Preferred travel dates and times',
                  'Number of passengers',
                  'Any special requests (catering, pets, luggage)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy/75">
                    <span className="text-gold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy/60 mt-6 text-base">
                This initial inquiry typically takes just a few minutes.
              </p>
            </div>
            <div className="bg-sand p-10 text-center">
              <span className="text-gold">
                <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              <p className="text-navy font-semibold mt-4">Contact us via</p>
              <p className="text-navy/60 text-sm mt-1">WhatsApp · Telegram · Email · Instagram</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white p-10 text-center">
              <span className="text-gold">
                <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <p className="text-navy font-semibold mt-4">Tailored Options</p>
              <p className="text-navy/60 text-sm mt-1">Aircraft specs · Pricing · Availability</p>
            </div>
            <div className="order-1 md:order-2">
              <span className="font-serif text-6xl md:text-8xl text-gold/20 font-bold">02</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6">
                Receive Tailored Aircraft Options
              </h2>
              <p className="text-lg text-navy/70 leading-relaxed mb-6">
                Based on your route, schedule, and preferences, our team prepares a curated selection of aircraft options. Each option includes:
              </p>
              <ul className="space-y-3">
                {[
                  'Aircraft type and specifications',
                  'Cabin configuration and amenities',
                  'Flight duration and schedule',
                  'Transparent pricing with no hidden fees',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy/75">
                    <span className="text-gold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy/60 mt-6 text-base">
                We typically respond with options within a few hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-serif text-6xl md:text-8xl text-gold/20 font-bold">03</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6">
                Confirm Your Preference
              </h2>
              <p className="text-lg text-navy/70 leading-relaxed mb-6">
                Once you select your preferred aircraft and schedule, we lock in your reservation. Here's what happens next:
              </p>
              <ul className="space-y-3">
                {[
                  'Confirmation of your booking details',
                  'Secure payment processing',
                  'Flight briefing with departure details',
                  'Coordination of any ground services',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy/75">
                    <span className="text-gold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy/60 mt-6 text-base">
                Your dedicated concierge remains available for any last-minute adjustments.
              </p>
            </div>
            <div className="bg-sand p-10 text-center">
              <span className="text-gold">
                <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <p className="text-navy font-semibold mt-4">Booking Confirmed</p>
              <p className="text-navy/60 text-sm mt-1">All details finalized · Ready to fly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white p-10 text-center">
              <span className="text-gold">
                <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
                </svg>
              </span>
              <p className="text-navy font-semibold mt-4">Seamless Arrival</p>
              <p className="text-navy/60 text-sm mt-1">GAT Terminal · VIP Handling · Resort Transfer</p>
            </div>
            <div className="order-1 md:order-2">
              <span className="font-serif text-6xl md:text-8xl text-gold/20 font-bold">04</span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-2 mb-6">
                Arrive Seamlessly in Bodrum
              </h2>
              <p className="text-lg text-navy/70 leading-relaxed mb-6">
                Upon landing at Milas-Bodrum Airport (BJV), everything is arranged for a swift, VIP arrival:
              </p>
              <ul className="space-y-3">
                {[
                  'Private GAT terminal access — no queues',
                  'Apron-side vehicle waiting for you',
                  'Fast-track passport and customs procedures',
                  'Direct transfer to your resort, villa, or yacht',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy/75">
                    <span className="text-gold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-navy/60 mt-6 text-base">
                From touchdown to your destination, we handle every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-sand p-6 md:p-8">
                <h3 className="font-semibold text-navy text-lg mb-2">{faq.question}</h3>
                <p className="text-navy/70 text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Book Your Flight to <span className="text-gold">Bodrum</span>?
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Contact our flight concierge team and start planning your seamless private jet journey to Bodrum.
          </p>
          <a
            href="/#contact"
            aria-label="Contact Flight Concierge"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Contact Flight Concierge
          </a>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
        </div>
      </section>
    </main>
  );
}
