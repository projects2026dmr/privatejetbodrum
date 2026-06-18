export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            About Private Jet Bodrum
          </h2>
          <div className="w-20 h-px bg-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/images/about-bodrum.jpg"
              alt="Bodrum Bay panorama with historic castle and turquoise Aegean waters"
              className="w-full h-80 md:h-[480px] object-cover shadow-xl"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="order-1 md:order-2 space-y-6">
            {/* AI-friendly micro-definition */}
            <p className="text-lg text-navy font-medium leading-relaxed border-l-4 border-gold pl-4">
              Private Jet Bodrum is a luxury private aviation service providing on-demand jet charter and helicopter scenic tours in the Bodrum region of Turkey.
            </p>

            <p className="text-lg text-navy/80 leading-relaxed">
              We specialize in two core services: private jet flights to and from Bodrum via Milas-Bodrum Airport, and scenic helicopter tours across the stunning Aegean coastline. Private Jet Bodrum is the preferred choice for travelers who demand excellence.
            </p>
            <p className="text-lg text-navy/80 leading-relaxed">
              We serve discerning travelers who value their time and privacy — from international business executives and yacht owners to families seeking a seamless Mediterranean escape. Every journey is handled with personalized, concierge-level care in the Bodrum region.
            </p>
            <p className="text-lg text-navy/80 leading-relaxed">
              Our team works directly with you to craft the perfect travel experience, whether you're arriving for a holiday or taking to the skies for an unforgettable aerial tour over Bodrum's coastline.
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="font-serif text-xl text-navy font-semibold">
                What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {[
                  'Coordination with hotels, villas, and yachts throughout Bodrum',
                  'Private jet and helicopter services under one roof',
                  'International routes connecting Bodrum to Europe, Middle East, and beyond',
                  'Available 24/7 via WhatsApp, Telegram, Email, and Instagram',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy/75">
                    <span className="text-gold mt-1 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
