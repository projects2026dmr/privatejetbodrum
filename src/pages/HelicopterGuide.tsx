import { useEffect } from 'react';

const aircraftFeatures = [
  'Panoramic windows for unobstructed views',
  'Whisper-quiet operation for a comfortable experience',
  '6-passenger configuration with spacious seating',
  'Perfect for sightseeing, photography, and special occasions',
];

const tourDurations = [
  {
    duration: '15 Minutes',
    title: 'Coastal Glimpse',
    desc: 'A swift introduction to Bodrum from the sky. Soar over the marina, Bodrum Castle, and the sparkling waterfront. Perfect for first-time flyers or a quick celebratory experience.',
  },
  {
    duration: '20 Minutes',
    title: 'Bay Discovery',
    desc: 'Extend your view beyond the town center to nearby bays and coves. Spot luxury yachts, hidden beaches, and the stunning contrast of turquoise waters against rocky coastline.',
  },
  {
    duration: '30 Minutes',
    title: 'Peninsula Panorama',
    desc: 'A comprehensive tour of the Bodrum Peninsula, covering multiple bays, luxury resort clusters, and traditional fishing villages. The ideal balance of time and scenery.',
  },
  {
    duration: '50 Minutes',
    title: 'Grand Aegean Tour',
    desc: 'Explore the wider Bodrum coastline and nearby Greek islands from above. Take in sweeping views of the Aegean Sea, ancient ruins, and secluded island shores.',
  },
  {
    duration: '60 Minutes',
    title: 'Ultimate Bodrum Experience',
    desc: 'The most immersive aerial tour available. Cover the full Bodrum peninsula, surrounding islands, and open Aegean waters. Ideal for sunset flights, proposals, or professional photography.',
  },
];

const highlights = [
  'Bodrum Castle (Castle of St. Peter)',
  'Bodrum Marina and harbor',
  'Luxury resorts along the coastline',
  'Hidden coves and secluded beaches',
  'Greek islands on the horizon',
  'Dramatic Aegean coastline and cliffs',
];

const customExperiences = [
  {
    title: 'Sunset Flights',
    desc: 'Experience the golden hour over the Aegean Sea with a perfectly timed departure.',
  },
  {
    title: 'Marriage Proposals',
    desc: 'Create an unforgettable moment with a private helicopter proposal over Bodrum.',
  },
  {
    title: 'Photography & Videography',
    desc: 'Professional aerial shoots with doors-off options and custom routes available.',
  },
  {
    title: 'Multi-Stop Itineraries',
    desc: 'Combine multiple destinations or land at exclusive locations along the coast.',
  },
];

const faqs = [
  {
    question: 'How many passengers can the helicopter accommodate?',
    answer: 'The Airbus H130 accommodates up to 6 passengers comfortably. All seats offer excellent visibility through the panoramic windows.',
  },
  {
    question: 'What should I wear for a helicopter tour?',
    answer: 'Wear comfortable clothing and flat shoes. Avoid loose items like scarves or hats that could be affected by rotor wash. Sunglasses are recommended.',
  },
  {
    question: 'Can I take photos and videos during the flight?',
    answer: 'Absolutely. Photography and videography are encouraged. The Airbus H130\'s panoramic windows provide excellent conditions for capturing stunning aerial footage.',
  },
  {
    question: 'What happens if the weather is bad on my scheduled date?',
    answer: 'Safety is our priority. If weather conditions are unsuitable for flying, we will reschedule your tour at no additional cost to the next available date.',
  },
];

export default function HelicopterGuide() {
  useEffect(() => {
    // Update document title
    document.title = 'Bodrum Helicopter Scenic Tours – Full Guide | Private Jet Bodrum';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Full guide to helicopter scenic tours in Bodrum, including Airbus H130 details, tour durations, routes, and custom experiences.');
    }

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://privatejetbodrum.com/helicopter-guide');
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
            Bodrum Helicopter Scenic Tours{' '}
            <span className="text-gold">– Full Guide</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A complete guide to helicopter scenic flights in Bodrum, including tour durations, aircraft details, routes, and custom experiences.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* Aircraft Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Our Aircraft
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Aircraft Used — Airbus H130
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/helicopter-tour.jpg"
                alt="Airbus H130 helicopter used for Bodrum scenic tours"
                className="w-full h-72 md:h-96 object-cover shadow-xl"
                loading="lazy"
              />
            </div>
            <div>
              <div className="space-y-4 mb-8">
                {aircraftFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-navy/80 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              <p className="text-navy/70 text-lg leading-relaxed">
                The Airbus H130 is the primary helicopter used for all scenic tours in Bodrum. Its exceptional visibility, quiet cabin, and smooth flight characteristics make it the ideal choice for aerial sightseeing over the stunning Aegean coastline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Durations Section */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Tour Options
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Scenic Tour Durations
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid gap-6">
            {tourDurations.map((tour, i) => (
              <div
                key={i}
                className="bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-l-4 border-gold shadow-sm"
              >
                <div className="flex-shrink-0">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-semibold whitespace-nowrap">
                    {tour.duration}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-lg mb-1">{tour.title}</h3>
                  <p className="text-navy/70 text-base leading-relaxed">{tour.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes / What You'll See Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Aerial Highlights
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              What You'll See
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {highlights.map((highlight, i) => (
              <div key={i} className="bg-sand p-6 flex items-center gap-4">
                <span className="text-gold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-navy font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Each tour covers different highlights depending on duration. Longer tours offer more extensive coverage of the Bodrum Peninsula and surrounding islands.
          </p>
        </div>
      </section>

      {/* Custom Experiences Section */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Special Occasions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Custom Experiences
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customExperiences.map((exp, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border-t-2 border-gold">
                <h3 className="font-serif text-xl text-navy font-semibold mb-2">{exp.title}</h3>
                <p className="text-navy/70 text-base leading-relaxed">{exp.desc}</p>
              </div>
            ))}
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
            Ready to Fly Over <span className="text-gold">Bodrum</span>?
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Contact our team to book your helicopter scenic tour. Share your preferred duration and date, and we'll prepare a personalized experience.
          </p>
          <a
            href="/#contact"
            aria-label="Request Your Helicopter Tour"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Request Your Helicopter Tour
          </a>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
        </div>
      </section>
    </main>
  );
}
