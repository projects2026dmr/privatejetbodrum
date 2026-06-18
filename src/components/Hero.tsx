export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-jet.jpg"
          alt="Private jet flying over Bodrum coastline"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 text-center py-32">
        {/* Decorative line */}
        <div className="w-16 h-px bg-gold mx-auto mb-8" />

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6">
          Private Jet &amp; Helicopter{' '}
          <span className="text-gold">Charter</span> in Bodrum
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4 font-light">
          On-demand private jet flights and scenic helicopter tours tailored to
          Bodrum's most exclusive travelers.
        </p>

        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
          From international arrivals to coastal sky tours, we connect you with
          Bodrum in the most effortless way.
        </p>

        <a
          href="#contact"
          aria-label="Contact Flight Concierge"
          className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
        >
          Contact Flight Concierge
        </a>

        {/* Decorative line */}
        <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors">
          <span className="text-xs uppercase tracking-widest">Discover</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
