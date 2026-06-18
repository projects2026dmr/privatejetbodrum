import { useEffect } from 'react';

const aircraftOptions = [
  { category: 'Light Jets', suitability: 'Ideal', desc: 'Light jets are perfectly suited for the short Rome to Bodrum route, offering efficiency and comfort for up to 6 passengers.' },
  { category: 'Midsize Jets', suitability: 'Maximum Comfort', desc: 'Midsize jets provide extra cabin space and amenities, making the short flight even more enjoyable for families or groups.' },
];

export default function RomeToBodrum() {
  useEffect(() => {
    document.title = 'Rome to Bodrum Private Jet Route | Private Jet Bodrum';
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', 'Flight time, aircraft options, and route details for private jet flights from Rome to Bodrum.');
    const c = document.querySelector('link[rel="canonical"]');
    if (c) c.setAttribute('href', 'https://privatejetbodrum.vercel.app/rome-to-bodrum');
    window.scrollTo(0, 0);
    return () => {
      document.title = 'Private Jet Bodrum | Jet & Helicopter Charter';
      if (md) md.setAttribute('content', 'Private jet flights and helicopter scenic tours in Bodrum. Premium charter services with Airbus H130 and luxury jet options. Contact our concierge team 24/7.');
      if (c) c.setAttribute('href', 'https://privatejetbodrum.vercel.app');
    };
  }, []);

  return (
    <main>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6">
            Rome to Bodrum <span className="text-gold">Private Jet Route</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">A complete guide to flying privately from Rome to Bodrum.</p>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-10" />
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Duration</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Flight Time</h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-sand p-10 text-center border-t-4 border-gold">
              <p className="text-navy font-semibold text-xl mb-2">Rome → Bodrum</p>
              <p className="font-serif text-5xl md:text-6xl text-gold font-bold">1h 55m</p>
              <p className="text-navy/60 mt-4 text-base">Approximate flight time • Direct route</p>
            </div>
            <p className="text-center text-navy/70 text-lg leading-relaxed mt-8">The flight from Rome to Bodrum covers approximately 1,400 kilometers across the Eastern Mediterranean, making it one of the quickest private jet routes to Turkey's Aegean coast.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Aircraft Selection</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Recommended Aircraft</h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aircraftOptions.map((item, i) => (
              <div key={i} className="bg-white p-8 shadow-sm border-t-2 border-gold">
                <span className="text-gold text-sm font-semibold uppercase tracking-wide">{item.suitability}</span>
                <h3 className="font-serif text-xl text-navy font-semibold mt-2 mb-3">{item.category}</h3>
                <p className="text-navy/70 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Rome Departures</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Departure Airports</h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[{ name: 'Rome Ciampino (CIA)', desc: 'The preferred airport for private jet departures from Rome, with dedicated business aviation terminals and fast handling.' }, { name: 'Rome Fiumicino (FCO)', desc: 'Italy\'s largest airport also accommodates private jet operations with VIP facilities available.' }].map((a, i) => (
              <div key={i} className="bg-sand p-8 text-center">
                <span className="text-gold"><svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg></span>
                <h3 className="font-serif text-lg text-navy font-semibold mt-4 mb-2">{a.name}</h3>
                <p className="text-navy/70 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Bodrum Arrival</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Arrival Airport</h2>
            <div className="w-20 h-px bg-gold mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 shadow-sm border-t-4 border-gold text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-2">Milas-Bodrum Airport (BJV)</h3>
              <p className="text-navy/70 text-lg leading-relaxed mt-4">All private jet arrivals from Rome land at Milas-Bodrum Airport. Private Jet Bodrum coordinates GAT access, apron-side transfers, and direct onward transportation to your resort, villa, or yacht.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-navy">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">Fly from Rome to <span className="text-gold">Bodrum</span></h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">Share your travel dates and passenger count. Our concierge team will prepare tailored aircraft options for your Rome to Bodrum journey.</p>
          <a href="/#contact" aria-label="Request Your Rome to Bodrum Quote" className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">Request Your Rome → Bodrum Quote</a>
          <div className="w-16 h-px bg-gold/40 mx-auto mt-12" />
        </div>
      </section>
    </main>
  );
}
