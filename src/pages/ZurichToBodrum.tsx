import { useEffect } from 'react';

const aircraftOptions = [
  {
    category: 'Light Jets',
    suitability: 'Suitable',
    desc: 'Light jets can complete the Zurich to Bodrum route non-stop, offering a cost-effective option for smaller groups.',
  },
  {
    category: 'Midsize Jets',
    suitability: 'Ideal',
    desc: 'Midsize jets provide the best combination of cabin comfort, range, and speed for this popular Central European route.',
  },
  {
    category: 'Super-Midsize Jets',
    suitability: 'Maximum Comfort',
    desc: 'Super-midsize jets offer enhanced cabin space, stand-up headroom, and premium amenities for the most discerning travelers.',
  },
];

export default function ZurichToBodrum() {
  useEffect(() => {
    /* -------------------------------
       PAGE TITLE + DESCRIPTION
    --------------------------------*/
    document.title = 'Zurich to Bodrum Private Jet Route | Private Jet Bodrum';

    const metaDescription =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement('meta');
        m.setAttribute('name', 'description');
        document.head.appendChild(m);
        return m;
      })();

    metaDescription.setAttribute(
      'content',
      'Flight time, aircraft options, and route details for private jet flights from Zurich to Bodrum.'
    );

    /* -------------------------------
       CANONICAL (FALLBACK INCLUDED)
    --------------------------------*/
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      'href',
      'https://privatejetbodrum.vercel.app/zurich-to-bodrum'
    );

    /* -------------------------------
       OPEN GRAPH META
    --------------------------------*/
    const ogTags = [
      ['meta[property="og:title"]', 'Private Jet Zurich → Bodrum'],
      [
        'meta[property="og:description"]',
        'Flight time, aircraft options, and route details for private jet flights from Zurich to Bodrum.',
      ],
      [
        'meta[property="og:url"]',
        'https://privatejetbodrum.vercel.app/zurich-to-bodrum',
      ],
      [
        'meta[property="og:image"]',
        'https://privatejetbodrum.vercel.app/images/og/zurich-bodrum.jpg',
      ],
    ];

    ogTags.forEach(([selector, content]) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        const property = selector.match(/"(.*?)"/)?.[1];
        if (property)
          tag.setAttribute(
            property.includes('og') ? 'property' : 'name',
            property
          );
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    /* -------------------------------
       TWITTER META
    --------------------------------*/
    const twitterTags = [
      ['meta[name="twitter:title"]', 'Private Jet Zurich → Bodrum'],
      [
        'meta[name="twitter:description"]',
        'Flight time, aircraft options, and route details for private jet flights from Zurich to Bodrum.',
      ],
      [
        'meta[name="twitter:image"]',
        'https://privatejetbodrum.vercel.app/images/og/zurich-bodrum.jpg',
      ],
    ];

    twitterTags.forEach(([selector, content]) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        const name = selector.match(/"(.*?)"/)?.[1];
        if (name) tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    /* -------------------------------
       SCROLL TO TOP
    --------------------------------*/
    window.scrollTo(0, 0);

    /* -------------------------------
       CLEANUP ON UNMOUNT
    --------------------------------*/
    return () => {
      document.title = 'Private Jet Bodrum | Jet & Helicopter Charter';

      metaDescription.setAttribute(
        'content',
        'Private jet flights and helicopter scenic tours in Bodrum. Premium charter services with Airbus H130 and luxury jet options. Contact our concierge team 24/7.'
      );

      canonical?.setAttribute('href', 'https://privatejetbodrum.vercel.app');
    };
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6">
            Zurich to Bodrum <span className="text-gold">Private Jet Route</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A complete guide to flying privately from Zurich to Bodrum.
          </p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      {/* FLIGHT TIME */}
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
              <p className="text-navy font-semibold text-xl mb-2">
                Zurich → Bodrum
              </p>
              <p className="font-serif text-5xl md:text-6xl text-gold font-bold">
                2h 50m
              </p>
              <p className="text-navy/60 mt-4 text-base">
                Approximate flight time • Direct route
              </p>
            </div>

            <p className="text-center text-navy/70 text-lg leading-relaxed mt-8">
              The flight from Zurich to Bodrum covers approximately 2,000 kilometers across Central Europe and the Eastern Mediterranean. A swift and convenient connection from Switzerland to the Turkish Riviera.
            </p>
          </div>
        </div>
      </section>

      {/* AIRCRAFT OPTIONS */}
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
              <div key={i} className="bg-white p-8 shadow-sm border-t-2 border-gold">
                <span
                  className={`text-sm font-semibold uppercase tracking-wide ${
                    item.suitability === 'Suitable'
                      ? 'text-navy/60'
                      : 'text-gold'
                  }`}
                >
                  {item.suitability}
                </span>
                <h3 className="font-serif text-xl text-navy font-semibold mt-2 mb-3">
                  {item.category}
                </h3>
                <p className="text-navy/70 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTURE AIRPORT */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
              Zurich Departures
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
              Departure Airports
            </h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-sand p-8 text-center">
              <span className="text-gold">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </span>

              <h3 className="font-serif text-lg text-navy font-semibold mt-4 mb-2">
                Zurich Airport (ZRH)
              </h3>

              <p className="text-navy/70 text-sm leading-relaxed">
                Zurich Airport is one of Europe's leading business aviation hubs with excellent private jet facilities, executive lounges, and efficient handling services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARRIVAL */}
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
                Milas-Bodrum Airport (BJV)
              </h3>

              <p className="text-navy/70 text-lg leading-relaxed mt-4">
                All private jet arrivals from Zurich land at Milas-Bodrum Airport. Private Jet Bodrum coordinates GAT access, apron-side transfers, and direct onward transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Fly from Zurich to <span className="text-gold">Bodrum</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            Share your travel dates and passenger count. Our concierge team will prepare tailored aircraft options for your Zurich to Bodrum journey.
          </p>

          <a
            href="/#contact"
            aria-label="Request Your Zurich to Bodrum Quote"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
          >
            Request Your Zurich → Bodrum Quote
          </a>

          <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
        </div>
      </section>
    </main>
  );
}
