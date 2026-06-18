import { useEffect } from 'react';

const flightTimes = [
  { route: 'London → Bodrum', time: '4h 10m' },
  { route: 'Paris → Bodrum', time: '3h 35m' },
  { route: 'Dubai → Bodrum', time: '4h 45m' },
  { route: 'Moscow → Bodrum', time: '3h 50m' },
  { route: 'Berlin → Bodrum', time: '3h 05m' },
];

const gatFeatures = [
  'Dedicated VIP entrance',
  'Passport control with no queues',
  'Apron-side vehicle access',
  '24/7 operations',
  'Discreet handling',
];

const aircraftTypes = [
  'Light jets',
  'Midsize jets',
  'Super-midsize',
  'Heavy jets',
  'Long-range jets',
];

const transferOptions = [
  'VIP vehicles',
  'Helicopter transfers',
  'Yacht tender connections',
];

export default function BJVGuide() {
  useEffect(() => {
    // Update document title
    document.title = 'Milas-Bodrum Airport (BJV) Private Jet Guide | Private Jet Bodrum';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Private jet arrivals, GAT terminal, apron access, flight times, and VIP handling at Milas-Bodrum Airport (BJV).');
    }

    // Update canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://privatejetbodrum.vercel.app/bjv-guide');
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
            Milas‑Bodrum Airport (BJV){' '}
            <span className="text-gold">Private Jet Guide</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Milas‑Bodrum Airport (BJV) is the primary gateway for private jet arrivals to the Bodrum Peninsula. This guide covers flight times, apron access, GAT terminal details, and VIP handling for seamless arrivals.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* Flight Times Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Flight Times
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Popular Private Jet Routes to Bodrum
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {flightTimes.map((flight) => (
              <div
                key={flight.route}
                className="bg-sand p-6 text-center border-t-2 border-gold"
              >
                <p className="text-navy font-semibold text-lg mb-1">{flight.route}</p>
                <p className="text-gold font-serif text-2xl font-semibold">{flight.time}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            All private jet flights to Milas‑Bodrum Airport are direct and handled via VIP procedures. No commercial queues, no delays — just seamless arrivals.
          </p>
        </div>
      </section>

      {/* GAT Terminal Section */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              VIP Terminal
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Private Jet Terminal (GAT)
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {gatFeatures.map((feature) => (
              <div
                key={feature}
                className="bg-white p-6 flex items-center gap-4 shadow-sm"
              >
                <span className="text-gold flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-navy font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Private Jet Bodrum coordinates all GAT procedures for seamless arrivals. From landing to your vehicle, every step is handled with precision.
          </p>
        </div>
      </section>

      {/* Apron & Parking Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Aircraft Parking
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Apron Access &amp; Aircraft Parking
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {aircraftTypes.map((type) => (
              <div
                key={type}
                className="bg-sand p-6 flex items-center gap-4"
              >
                <span className="text-gold flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </span>
                <span className="text-navy font-medium">{type}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Parking availability at Milas‑Bodrum Airport varies by season. We arrange all slot coordination and ensure your aircraft is positioned for a swift departure.
          </p>
        </div>
      </section>

      {/* Transfers Section */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Ground Services
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Transfers to Bodrum Resorts
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            {transferOptions.map((option) => (
              <div
                key={option}
                className="bg-white p-6 text-center shadow-sm"
              >
                <span className="text-gold mb-3 flex justify-center">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </span>
                <span className="text-navy font-semibold">{option}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-navy/70 text-lg max-w-2xl mx-auto leading-relaxed">
            We coordinate direct transfers to all major Bodrum resorts including Rixos, Mandarin Oriental, Lujo, Titanic, and Vogue. Your vehicle waits apron-side.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Ready to Arrive in <span className="text-gold">Bodrum</span>?
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Private Jet Bodrum provides full coordination for all private jet arrivals at Milas‑Bodrum Airport (BJV).
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
