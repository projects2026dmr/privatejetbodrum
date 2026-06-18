const tours = [
  {
    duration: '15 Minutes',
    title: 'Coastal Glimpse',
    desc: 'A swift introduction to Bodrum from the sky. Soar over the marina, Bodrum Castle, and the sparkling waterfront. Perfect for first-time flyers or a quick celebratory moment.',
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

export default function Helicopter() {
  return (
    <section id="helicopter" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
            Helicopter Scenic Tours
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Helicopter Scenic Tours
          </h2>
          <div className="w-20 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">
            See Bodrum as few ever will — from the sky. Our helicopter scenic tours operate aboard the Airbus H130, one of the quietest and most comfortable touring helicopters in the world. With panoramic windows and spacious seating, you'll experience the Bodrum coastline, bays, marinas, and nearby islands in breathtaking clarity.
          </p>
        </div>

        {/* Helicopter Image */}
        <div className="mb-16">
          <img
            src="/images/helicopter-tour.jpg"
            alt="Airbus H130 helicopter scenic tour over Bodrum bays"
            className="w-full h-64 md:h-96 object-cover shadow-xl"
            loading="lazy"
          />
        </div>

        {/* Aircraft Info */}
        <div className="bg-sand p-8 md:p-10 mb-12 text-center">
          <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
            Aircraft: Airbus H130
          </h3>
          <p className="text-navy/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            The Airbus H130 features exceptional visibility through its expansive windows, whisper-quiet operation, and smooth flight characteristics — making it the perfect choice for aerial sightseeing over Bodrum's stunning landscape. The Airbus H130 accommodates up to 6 passengers in comfort.
          </p>
        </div>

        {/* Tour Durations */}
        <h3 className="font-serif text-2xl md:text-3xl text-navy text-center mb-10">
          Tour Durations
        </h3>

        <div className="grid gap-6 mb-12">
          {tours.map((tour, i) => (
            <div
              key={i}
              className="bg-sand p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 border-l-4 border-gold"
            >
              <div className="flex-shrink-0">
                <span className="font-serif text-2xl md:text-3xl text-gold font-semibold whitespace-nowrap">
                  {tour.duration}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-navy text-lg mb-1">{tour.title}</h4>
                <p className="text-navy/70 text-base leading-relaxed">{tour.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Experiences */}
        <div className="bg-navy/5 p-8 md:p-10 mb-8 text-center">
          <h3 className="font-serif text-xl md:text-2xl text-navy mb-3">
            Custom Experiences Available
          </h3>
          <p className="text-navy/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            All helicopter tours over Bodrum can be customized for sunset flights, marriage proposals, professional photography and videography, special celebrations, or any occasion that calls for a view from above.
          </p>
        </div>

        {/* Booking CTA */}
        <div className="bg-navy text-white p-8 md:p-10 text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Tell us your preferred tour duration — our team will prepare a personalized itinerary and availability details for your chosen date.{' '}
            <a href="#contact" aria-label="Request a helicopter tour quote" className="text-gold hover:text-gold-light underline underline-offset-4">
              Request your quote →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
