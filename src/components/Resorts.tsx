const resorts = [
  { name: 'Rixos Premium Bodrum', type: 'Ultra All-Inclusive Resort' },
  { name: 'Vogue Hotel Supreme Bodrum', type: 'Luxury Beach Resort' },
  { name: 'Mandarin Oriental Bodrum', type: 'Five-Star Luxury Resort' },
  { name: 'Titanic Deluxe Bodrum', type: 'Premium Resort & Spa' },
  { name: 'Lujo Hotel Bodrum', type: 'Ultra-Luxury Concept Hotel' },
];

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Airport to Resort Transfers',
    desc: 'Seamless ground or helicopter transfers from Milas-Bodrum Airport directly to your resort entrance.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'Scenic Flights from Resort Areas',
    desc: 'Helicopter scenic tours departing from convenient points near your Bodrum resort or villa.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'Custom Experiences',
    desc: 'Bespoke arrangements including sunset flights over Bodrum, proposal packages, and multi-stop itineraries.',
  },
];

export default function Resorts() {
  return (
    <section id="resorts" className="py-20 md:py-28 bg-sand">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
            Resorts &amp; Pick-Up Points
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Bodrum Resorts &amp; Pick-Up Points
          </h2>
          <div className="w-20 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">
            Private Jet Bodrum coordinates arrivals, departures, and scenic tours for guests staying at Bodrum's most prestigious resorts. Whether you need a private jet flight arranged to coincide with your check-in, or a helicopter tour during your stay, we bring the experience directly to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Resort Image */}
          <div>
            <img
              src="/images/resort-bodrum.jpg"
              alt="Luxury resort in Bodrum with Mediterranean sea view"
              className="w-full h-72 md:h-96 object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Resort List */}
          <div>
            <h3 className="font-serif text-2xl text-navy mb-6">
              Featured Partner Resorts
            </h3>
            <div className="space-y-4">
              {resorts.map((resort) => (
                <div
                  key={resort.name}
                  className="bg-white p-5 flex items-center gap-4 border-l-4 border-gold shadow-sm"
                >
                  <div className="text-gold flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-base">{resort.name}</h4>
                    <p className="text-navy/60 text-sm">{resort.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-navy/60 text-sm mt-4 italic">
              We also serve guests at private villas, boutique hotels, and yacht berths throughout the Bodrum Peninsula.
            </p>
          </div>
        </div>

        {/* Services */}
        <h3 className="font-serif text-2xl md:text-3xl text-navy text-center mb-10">
          What We Arrange for Resort Guests
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-gold mb-4 flex justify-center">{service.icon}</div>
              <h4 className="font-semibold text-navy text-lg mb-2">{service.title}</h4>
              <p className="text-navy/70 text-base leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
