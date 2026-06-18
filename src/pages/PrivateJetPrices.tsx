import { useEffect } from 'react';

const pricingFactors = [
  {
    factor: 'Aircraft Type',
    desc: 'Light jets are more economical for short routes, while heavy and long-range jets command higher rates due to their size, range, and cabin amenities.',
  },
  {
    factor: 'Route Distance',
    desc: 'Longer flights require more fuel, flight crew hours, and potentially positioning flights, all of which affect the total cost.',
  },
  {
    factor: 'Season & Demand',
    desc: 'Peak summer months in Bodrum see higher demand, which can affect aircraft availability and pricing. Booking early helps secure better options.',
  },
  {
    factor: 'Airport Fees',
    desc: 'Landing fees, handling charges, and terminal fees at both departure and arrival airports are factored into your quote.',
  },
  {
    factor: 'Overnight Parking',
    desc: 'If your aircraft remains at Milas-Bodrum Airport during your stay, parking fees apply. These vary by duration and aircraft size.',
  },
  {
    factor: 'Fuel Costs',
    desc: 'Jet fuel prices fluctuate based on global markets and local availability. Fuel is typically one of the largest cost components.',
  },
  {
    factor: 'Availability',
    desc: 'Last-minute bookings may have limited aircraft options. Flexible dates often allow access to better-positioned aircraft and pricing.',
  },
];

const aircraftCategories = [
  {
    category: 'Light Jets',
    route: 'Short European Routes',
    examples: 'Citation, Phenom',
    desc: 'Ideal for flights under 3 hours with 4-7 passengers. Cost-effective for nearby cities like Athens, Istanbul, or Tel Aviv.',
  },
  {
    category: 'Midsize Jets',
    route: 'Europe & Middle East',
    examples: 'Hawker, Learjet',
    desc: 'Greater range and cabin comfort for 3-4 hour routes. Popular for London, Paris, and Dubai connections.',
  },
  {
    category: 'Super-Midsize Jets',
    route: 'Longer Routes',
    examples: 'Challenger, Citation Latitude',
    desc: 'Extended range with spacious cabins. Connects Bodrum to most European capitals and Gulf cities non-stop.',
  },
  {
    category: 'Heavy Jets',
    route: 'Long-Haul Flights',
    examples: 'Falcon, Legacy',
    desc: 'Full stand-up cabins with sleeping arrangements. Suitable for transatlantic positioning or large groups.',
  },
  {
    category: 'Long-Range Jets',
    route: 'Intercontinental',
    examples: 'Gulfstream, Global',
    desc: 'Ultra-long-range capability for non-stop flights from the Americas, Asia, or anywhere in the world.',
  },
];

const exampleScenarios = [
  {
    title: 'Weekend Getaway from London',
    scenario: 'A couple flying from London to Bodrum on a Friday, returning Sunday evening.',
    factors: 'Light or midsize jet recommended. Weekend timing is popular, so early booking is advised. Round-trip pricing includes positioning and parking.',
  },
  {
    title: 'Family Vacation from Dubai',
    scenario: 'A family of 5 with luggage flying from Dubai for a two-week summer holiday.',
    factors: 'Midsize or super-midsize jet for comfort and luggage capacity. Peak season affects availability. Extended parking fees apply for the duration of stay.',
  },
  {
    title: 'Last-Minute Business Trip from Paris',
    scenario: 'An executive needing to reach Bodrum within 24 hours for an urgent meeting.',
    factors: 'Aircraft availability is the key factor. Light jets offer the fastest turnaround. Premium rates may apply for short-notice bookings.',
  },
];

export default function PrivateJetPrices() {
  useEffect(() => {
    // Update document title
    document.title = 'Private Jet Prices to Bodrum – What Affects the Cost? | Private Jet Bodrum';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn what affects private jet pricing to Bodrum, including aircraft type, route, season, and availability.');
    }

    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://privatejetbodrum.vercel.app/private-jet-prices');
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
            Private Jet Prices{' '}
            <span className="text-gold">to Bodrum</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A clear explanation of what affects private jet pricing to Bodrum. Every flight is unique, and your quote is tailored to your specific route, aircraft, and schedule.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* Pricing Factors Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Pricing Factors
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              What Affects the Price?
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingFactors.map((item, i) => (
              <div
                key={i}
                className="bg-sand p-6 border-t-2 border-gold"
              >
                <h3 className="font-semibold text-navy text-lg mb-2">{item.factor}</h3>
                <p className="text-navy/70 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy/5 p-8 text-center max-w-3xl mx-auto">
            <p className="text-navy/80 text-lg leading-relaxed">
              We do not publish fixed prices because every flight is different. Our concierge team provides transparent, all-inclusive quotes tailored to your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Aircraft Categories Section */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Aircraft Options
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Aircraft Categories
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aircraftCategories.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 shadow-sm border-t-2 border-gold"
              >
                <span className="text-gold text-sm font-semibold uppercase tracking-wide">
                  {item.route}
                </span>
                <h3 className="font-serif text-2xl text-navy font-semibold mt-2 mb-1">
                  {item.category}
                </h3>
                <p className="text-gold text-sm mb-4">{item.examples}</p>
                <p className="text-navy/70 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed mt-10">
            Aircraft category significantly impacts pricing. Our team recommends the most suitable option based on your route, passenger count, and preferences.
          </p>
        </div>
      </section>

      {/* Example Scenarios Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Real-World Examples
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Example Scenarios
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {exampleScenarios.map((item, i) => (
              <div
                key={i}
                className="bg-sand p-8"
              >
                <span className="font-serif text-4xl text-gold/20 font-bold">0{i + 1}</span>
                <h3 className="font-serif text-xl text-navy font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-navy/80 text-base leading-relaxed mb-4">{item.scenario}</p>
                <p className="text-navy/60 text-sm leading-relaxed border-t border-navy/10 pt-4">
                  <strong className="text-navy/80">Pricing factors:</strong> {item.factors}
                </p>
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
            Get Your <span className="text-gold">Tailored Quote</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Share your route, dates, and passenger count. Our concierge team will prepare a transparent, all-inclusive quote within hours.
          </p>
          <a
            href="/#contact"
            aria-label="Request Your Tailored Quote"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Request Your Tailored Quote
          </a>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
        </div>
      </section>
    </main>
  );
}
