import { useEffect } from 'react';

const aircraftOptions = [
  {
    category: 'Midsize Jets',
    suitability: 'Minimum',
    desc: 'Midsize jets can complete the Dubai to Bodrum route but may operate near their range limits. Best for smaller groups prioritizing efficiency.',
  },
  {
    category: 'Super-Midsize Jets',
    suitability: 'Ideal',
    desc: 'Super-midsize jets offer the perfect balance of range, cabin space, and comfort for the Dubai to Bodrum route. Our most recommended option.',
  },
  {
    category: 'Heavy Jets',
    suitability: 'Maximum Comfort',
    desc: 'Heavy jets provide spacious stand-up cabins, sleeping arrangements, and premium amenities. Ideal for families or travelers seeking the highest comfort.',
  },
  {
    category: 'Long-Range Jets',
    suitability: 'Optional',
    desc: 'Long-range jets like Gulfstream G650 or Global 7500 offer exceptional comfort but exceed the requirements for this route. Best for continuing journeys.',
  },
];

const departureAirports = [
  {
    name: 'Dubai International (DXB)',
    desc: 'The main international airport with dedicated private jet facilities and FBO services for seamless departures.',
  },
  {
    name: 'Al Maktoum International (DWC)',
    desc: 'Dubai World Central offers excellent private aviation infrastructure with less congestion and efficient handling.',
  },
];

export default function DubaiToBodrum() {
  useEffect(() => {
    // Update document title
    document.title = 'Dubai to Bodrum Private Jet Route | Private Jet Bodrum';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Flight time, aircraft options, and route details for private jet flights from Dubai to Bodrum.');
    }

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://privatejetbodrum.vercel.app/dubai-to-bodrum');
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
        canonical.setAttribute('href', 'https://privatejetbodrum.vercel.app');
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
            Dubai to Bodrum{' '}
            <span className="text-gold">Private Jet Route</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A complete guide to flying privately from Dubai to Bodrum, including flight time, aircraft recommendations, and departure options.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* Flight Time Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Duration
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Flight Time
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-sand p-10 text-center border-t-4 border-gold">
              <p className="text-navy font-semibold text-xl mb-2">Dubai → Bodrum</p>
              <p className="font-serif text-5xl md:text-6xl text-gold font-bold">4h 45m</p>
              <p className="text-navy/60 mt-4 text-base">Approximate flight time • Direct route</p>
            </div>

            <p className="text-center text-navy/70 text-lg leading-relaxed mt-8">
              The flight from Dubai to Bodrum covers approximately 2,800 kilometers across the Arabian Peninsula and Eastern Mediterranean. This popular route connects Gulf travelers with Turkey's premier Aegean destination. Flight time may vary based on aircraft type and wind conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Aircraft Options Section */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Aircraft Selection
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Recommended Aircraft
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aircraftOptions.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 shadow-sm border-t-2 border-gold"
              >
                <span className={`text-sm font-semibold uppercase tracking-wide ${
                  item.suitability === 'Ideal' ? 'text-gold' : 
                  item.suitability === 'Maximum Comfort' ? 'text-gold' :
                  'text-navy/60'
                }`}>
                  {item.suitability}
                </span>
                <h3 className="font-serif text-xl text-navy font-semibold mt-2 mb-3">
                  {item.category}
                </h3>
                <p className="text-navy/70 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed mt-10">
            For the Dubai to Bodrum route, we typically recommend super-midsize or heavy jets for optimal comfort and range. Our concierge team will match the aircraft to your group size and preferences.
          </p>
        </div>
      </section>

      {/* Departure Airports Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Dubai Departures
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Departure Airports
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {departureAirports.map((airport, i) => (
              <div key={i} className="bg-sand p-8 text-center">
                <span className="text-gold">
                  <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </span>
                <h3 className="font-serif text-lg text-navy font-semibold mt-4 mb-2">{airport.name}</h3>
                <p className="text-navy/70 text-sm leading-relaxed">{airport.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed mt-10">
            Both Dubai airports offer premium private jet facilities with VIP lounges, fast-track immigration, and dedicated handling. We recommend the airport closest to your location for maximum convenience.
          </p>
        </div>
      </section>

      {/* Arrival Airport Section */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Bodrum Arrival
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Arrival Airport
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 shadow-sm border-t-4 border-gold text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-2">
                Milas-Bodrum Airport
              </h3>
              <p className="text-gold text-lg font-medium mb-4">ICAO: LTFE • IATA: BJV</p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6 text-left">
                {[
                  'Dedicated GAT (General Aviation Terminal)',
                  'VIP passport control with no queues',
                  'Apron-side vehicle access',
                  '24/7 private jet operations',
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-navy/80 text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-navy/70 text-lg leading-relaxed mt-8">
              Upon arrival at Milas-Bodrum Airport, you'll experience seamless VIP handling through the dedicated GAT terminal. Your ground transportation — whether a luxury vehicle, helicopter, or yacht tender — will be waiting apron-side for immediate transfer to your destination.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Fly from Dubai to <span className="text-gold">Bodrum</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Share your travel dates and passenger count. Our concierge team will prepare tailored aircraft options for your Dubai to Bodrum journey.
          </p>
          <a
            href="/#contact"
            aria-label="Request Your Dubai to Bodrum Quote"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Request Your Dubai → Bodrum Quote
          </a>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
        </div>
      </section>
    </main>
  );
}
