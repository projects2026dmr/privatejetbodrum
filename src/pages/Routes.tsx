import { useEffect } from 'react';

const popularRoutes = [
  { route: 'London → Bodrum', time: '4h 10m' },
  { route: 'Paris → Bodrum', time: '3h 35m' },
  { route: 'Dubai → Bodrum', time: '4h 45m' },
  { route: 'Moscow → Bodrum', time: '3h 50m' },
  { route: 'Berlin → Bodrum', time: '3h 05m' },
  { route: 'Amsterdam → Bodrum', time: '3h 25m' },
  { route: 'Riyadh → Bodrum', time: '3h 40m' },
];

const aircraftSuggestions = [
  {
    category: 'Short Routes',
    aircraft: 'Light Jets',
    examples: 'Citation, Phenom',
    desc: 'Ideal for routes under 3 hours. Efficient, fast, and cost-effective for nearby European cities.',
  },
  {
    category: 'Medium Routes',
    aircraft: 'Midsize Jets',
    examples: 'Hawker, Learjet',
    desc: 'Perfect for 3–4 hour flights. Greater cabin space and range for comfortable journeys.',
  },
  {
    category: 'Long Routes',
    aircraft: 'Super-Midsize & Heavy Jets',
    examples: 'Challenger, Falcon, Gulfstream',
    desc: 'Best for routes over 4 hours. Full stand-up cabins, sleeping arrangements, and intercontinental range.',
  },
];

const seasonalNotes = [
  'Summer peak months require early slot coordination',
  'Parking availability varies by season',
  'We handle all GAT and apron procedures',
];

export default function Routes() {
  useEffect(() => {
    // Update document title
    document.title = 'Private Jet Routes & Flight Times to Bodrum | Private Jet Bodrum';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Flight times and popular private jet routes to Bodrum from London, Paris, Dubai, Moscow, Berlin, and more.');
    }

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://privatejetbodrum.com/routes');
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
            Private Jet Routes &amp; Flight Times{' '}
            <span className="text-gold">to Bodrum</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Discover the most popular private jet routes to Bodrum, including flight durations, aircraft recommendations, and seasonal travel notes.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* Popular Routes Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Flight Times
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Popular Private Jet Routes
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
            {popularRoutes.map((flight) => (
              <div
                key={flight.route}
                className="bg-sand p-6 text-center border-t-2 border-gold"
              >
                <p className="text-navy font-semibold text-base mb-1">{flight.route}</p>
                <p className="text-gold font-serif text-2xl font-semibold">{flight.time}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            All private jet flights arrive via Milas‑Bodrum Airport (BJV), the region's primary gateway. Flight times are approximate and may vary based on aircraft type and routing.
          </p>
        </div>
      </section>

      {/* Aircraft Suggestions Section */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Aircraft Selection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Recommended Aircraft by Route
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {aircraftSuggestions.map((item) => (
              <div
                key={item.category}
                className="bg-white p-8 shadow-sm border-t-2 border-gold"
              >
                <span className="text-gold text-sm font-semibold uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="font-serif text-2xl text-navy font-semibold mt-2 mb-1">
                  {item.aircraft}
                </h3>
                <p className="text-gold text-sm mb-4">{item.examples}</p>
                <p className="text-navy/70 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Notes Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Planning Tips
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Seasonal Travel Notes
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {seasonalNotes.map((note, i) => (
                <div
                  key={i}
                  className="bg-sand p-6 flex items-center gap-4"
                >
                  <span className="text-gold flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-navy font-medium text-lg">{note}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed mt-10">
            Private Jet Bodrum handles all logistics including slot reservations, parking coordination, and VIP ground handling at Milas‑Bodrum Airport.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Plan Your Journey to <span className="text-gold">Bodrum</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Share your departure city and travel dates. Our concierge team will recommend the ideal aircraft and prepare a tailored flight plan.
          </p>
          <a
            href="/#contact"
            aria-label="Request Your Flight Plan"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Request Your Flight Plan
          </a>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
        </div>
      </section>
    </main>
  );
}
