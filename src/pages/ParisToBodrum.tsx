import { useEffect } from 'react';

const aircraftOptions = [
  {
    category: 'Light Jets',
    suitability: 'Possible',
    desc: 'Light jets can complete the Paris to Bodrum route non-stop, making them a cost-effective option for couples or small groups of up to 4-6 passengers.',
  },
  {
    category: 'Midsize Jets',
    suitability: 'Ideal',
    desc: 'Midsize jets offer the perfect balance of comfort, speed, and efficiency for this route. Spacious cabins and ample range make them our most recommended choice.',
  },
  {
    category: 'Super-Midsize Jets',
    suitability: 'Maximum Comfort',
    desc: 'Super-midsize jets provide extra cabin space, stand-up headroom, and premium amenities. Perfect for families or travelers seeking enhanced comfort.',
  },
];

const departureAirports = [
  {
    name: 'Paris Le Bourget (LFPB)',
    desc: 'Europe\'s premier business aviation airport, offering world-class FBO facilities, dedicated private terminals, and seamless departures.',
  },
  {
    name: 'Paris Orly (LFPO)',
    desc: 'Convenient for South Paris with excellent private aviation facilities and efficient handling for business jet departures.',
  },
];

export default function ParisToBodrum() {
  useEffect(() => {
    // Update document title
    document.title = 'Paris to Bodrum Private Jet Route | Private Jet Bodrum';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Flight time, aircraft options, and route details for private jet flights from Paris to Bodrum.');
    }

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://privatejetbodrum.com/paris-to-bodrum');
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
            Paris to Bodrum{' '}
            <span className="text-gold">Private Jet Route</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A complete guide to flying privately from Paris to Bodrum, including flight time, aircraft recommendations, and departure options.
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
              <p className="text-navy font-semibold text-xl mb-2">Paris → Bodrum</p>
              <p className="font-serif text-5xl md:text-6xl text-gold font-bold">3h 35m</p>
              <p className="text-navy/60 mt-4 text-base">Approximate flight time • Direct route</p>
            </div>

            <p className="text-center text-navy/70 text-lg leading-relaxed mt-8">
              The flight from Paris to Bodrum covers approximately 2,300 kilometers across Europe and the Aegean. This convenient route connects France with Turkey's premier coastal destination in under four hours. Flight time may vary slightly based on aircraft type and weather conditions.
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

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            The Paris to Bodrum route is well-suited to a range of aircraft types. Our concierge team will recommend the best option based on your party size, luggage requirements, and comfort preferences.
          </p>
        </div>
      </section>

      {/* Departure Airports Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Paris Departures
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
            Paris Le Bourget is Europe's busiest business aviation airport and our most recommended departure point. Both airports offer dedicated private jet terminals with VIP lounges, fast-track security, and premium ground handling.
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
              Upon arrival at Milas-Bodrum Airport, you'll be escorted through the dedicated GAT terminal with full VIP handling. Your luxury vehicle, helicopter transfer, or yacht tender will be waiting apron-side for immediate departure to your resort or villa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Fly from Paris to <span className="text-gold">Bodrum</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Share your travel dates and passenger count. Our concierge team will prepare tailored aircraft options for your Paris to Bodrum journey.
          </p>
          <a
            href="/#contact"
            aria-label="Request Your Paris to Bodrum Quote"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Request Your Paris → Bodrum Quote
          </a>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
        </div>
      </section>
    </main>
  );
}
