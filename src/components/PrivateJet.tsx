const jetCategories = [
  {
    category: 'Light Jets',
    example: 'Cessna Citation',
    desc: 'Perfect for short European routes with 4–7 passengers. Efficient, fast, and ideal for quick Bodrum getaways from nearby cities.',
  },
  {
    category: 'Midsize Jets',
    example: 'Hawker',
    desc: 'Greater range and cabin comfort for routes across Europe and the Eastern Mediterranean. Popular with couples and small groups traveling to Bodrum.',
  },
  {
    category: 'Super-Midsize Jets',
    example: 'Challenger',
    desc: 'Extended range with spacious cabins, connecting Bodrum to London, Paris, Dubai, and beyond in complete comfort.',
  },
  {
    category: 'Heavy Jets',
    example: 'Falcon',
    desc: 'Full stand-up cabins with sleeping arrangements. Impressive range for long-haul journeys to Bodrum from virtually anywhere.',
  },
  {
    category: 'Long-Range Jets',
    example: 'Gulfstream · Global',
    desc: 'Ultra-long-range capability connecting Bodrum to destinations worldwide, including the Americas and Asia, non-stop.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Share Your Route & Dates',
    desc: "Tell us where you're flying from, your preferred travel dates, and the number of passengers.",
  },
  {
    num: '02',
    title: 'Receive Tailored Options',
    desc: 'We prepare a curated selection of aircraft suited to your route, with full specifications and availability.',
  },
  {
    num: '03',
    title: 'Confirm Your Preference',
    desc: 'Choose the aircraft and schedule that fits your needs. We handle every detail from there.',
  },
  {
    num: '04',
    title: 'Arrive in Bodrum Seamlessly',
    desc: 'We coordinate ground transfers from Milas-Bodrum Airport, resort arrivals, and everything in between for a flawless journey.',
  },
];

const useCases = [
  'International arrivals for holidays and getaways',
  'Yacht charter connections along the Turkish coast',
  'Last-minute business trips requiring flexibility',
  'Family vacations to the Mediterranean',
];

export default function PrivateJet() {
  return (
    <section id="private-jet" className="py-20 md:py-28 bg-sand">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
            Private Jet Charter
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Private Jet Charter
          </h2>
          <div className="w-20 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Private jet charter to Bodrum means flying on your schedule, with the aircraft of your choice, directly to Milas-Bodrum Airport in the heart of the Turkish Riviera. Skip the crowds, avoid layovers, and arrive refreshed at one of the Mediterranean's most coveted destinations.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <img
            src="/images/private-jet-tarmac.jpg"
            alt="Private jet on tarmac ready for departure to Bodrum"
            className="w-full h-64 md:h-96 object-cover shadow-xl"
            loading="lazy"
          />
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl md:text-3xl text-navy text-center mb-8">
            When to Charter a Private Jet to Bodrum
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {useCases.map((useCase, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 shadow-sm">
                <span className="text-gold flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-navy/80">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Categories */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl md:text-3xl text-navy text-center mb-10">
            Aircraft Categories Available
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jetCategories.map((jet) => (
              <div
                key={jet.category}
                className="bg-white p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-2 border-gold"
              >
                <h4 className="font-serif text-xl text-navy font-semibold mb-1">
                  {jet.category}
                </h4>
                <p className="text-gold text-sm font-medium mb-3 uppercase tracking-wide">
                  e.g. {jet.example}
                </p>
                <p className="text-navy/70 text-base leading-relaxed">{jet.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Concierge CTA */}
        <div className="bg-navy text-white p-8 md:p-10 mb-16 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            All flight requests are handled personally by our concierge team. Share your route and preferred travel date — we will prepare tailored aircraft options for you.{' '}
            <a href="#contact" aria-label="Request a private jet quote" className="text-gold hover:text-gold-light underline underline-offset-4">
              Request your quote →
            </a>
          </p>
        </div>

        {/* How It Works */}
        <div>
          <h3 className="font-serif text-2xl md:text-3xl text-navy text-center mb-10">
            How It Works
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <span className="font-serif text-5xl text-gold/30 font-bold block mb-2">
                  {step.num}
                </span>
                <h4 className="font-semibold text-navy text-lg mb-2">{step.title}</h4>
                <p className="text-navy/65 text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
