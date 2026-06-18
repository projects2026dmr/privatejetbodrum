import { useEffect } from 'react';

const aircraftOptions = [
  { category: 'Super-Midsize Jets', suitability: 'Ideal', desc: 'Super-midsize jets provide the optimal balance of range and cabin comfort for the Doha to Bodrum route.' },
  { category: 'Heavy Jets', suitability: 'Maximum Comfort', desc: 'Heavy jets offer full stand-up cabins, sleeping arrangements, and ample luggage space for families and VIP travelers.' },
  { category: 'Long-Range Jets', suitability: 'Optional', desc: 'Long-range jets like Gulfstream or Global are available but exceed the requirements for this route unless continuing beyond Bodrum.' },
];

export default function DohaToBodrum() {
  useEffect(() => {
    document.title = 'Doha to Bodrum Private Jet Route | Private Jet Bodrum';
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', 'Flight time, aircraft options, and route details for private jet flights from Doha to Bodrum.');
const c = document.querySelector('link[rel="canonical"]');
if (c) c.setAttribute('href', 'https://privatejetbodrum.vercel.app/doha-to-bodrum');

/* ⭐⭐ BURAYA EKLİYORSUN ⭐⭐ */

// OpenGraph
document.querySelector('meta[property="og:title"]')?.setAttribute(
  'content',
  'Private Jet Doha → Bodrum'
);

document.querySelector('meta[property="og:description"]')?.setAttribute(
  'content',
  'Flight time, aircraft options, and route details for private jet flights from Doha to Bodrum.'
);

document.querySelector('meta[property="og:url"]')?.setAttribute(
  'content',
  'https://privatejetbodrum.vercel.app/doha-to-bodrum'
);

document.querySelector('meta[property="og:image"]')?.setAttribute(
  'content',
  'https://privatejetbodrum.vercel.app/images/og/doha-bodrum.jpg'
);

// Twitter
document.querySelector('meta[name="twitter:title"]')?.setAttribute(
  'content',
  'Private Jet Doha → Bodrum'
);

document.querySelector('meta[name="twitter:description"]')?.setAttribute(
  'content',
  'Flight time, aircraft options, and route details for private jet flights from Doha to Bodrum.'
);

document.querySelector('meta[name="twitter:image"]')?.setAttribute(
  'content',
  'https://privatejetbodrum.vercel.app/images/og/doha-bodrum.jpg'
);

/* ⭐⭐ BURAYA KADAR ⭐⭐ */

window.scrollTo(0, 0);

    return () => { document.title = 'Private Jet Bodrum | Jet & Helicopter Charter'; if (md) md.setAttribute('content', 'Private jet flights and helicopter scenic tours in Bodrum. Premium charter services with Airbus H130 and luxury jet options. Contact our concierge team 24/7.'); if (c) c.setAttribute('href', 'https://privatejetbodrum.vercel.app'); };
  }, []);

  return (
    <main>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy"><div className="max-w-6xl mx-auto px-5 text-center"><div className="w-16 h-px bg-gold mx-auto mb-8" /><h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6">Doha to Bodrum <span className="text-gold">Private Jet Route</span></h1><p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">A complete guide to flying privately from Doha to Bodrum.</p><div className="w-16 h-px bg-gold/40 mx-auto mt-10" /></div></section>

      <section className="py-20 md:py-28 bg-white"><div className="max-w-6xl mx-auto px-5"><div className="text-center mb-14"><span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Duration</span><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Flight Time</h2><div className="w-20 h-px bg-gold mx-auto" /></div><div className="max-w-2xl mx-auto"><div className="bg-sand p-10 text-center border-t-4 border-gold"><p className="text-navy font-semibold text-xl mb-2">Doha → Bodrum</p><p className="font-serif text-5xl md:text-6xl text-gold font-bold">4h 20m</p><p className="text-navy/60 mt-4 text-base">Approximate flight time • Direct route</p></div><p className="text-center text-navy/70 text-lg leading-relaxed mt-8">The flight from Doha to Bodrum covers approximately 2,600 kilometers, connecting Qatar with Turkey's Aegean coast. This is one of the most popular Gulf routes during summer season.</p></div></div></section>

      <section className="py-20 md:py-28 bg-sand"><div className="max-w-6xl mx-auto px-5"><div className="text-center mb-14"><span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Aircraft Selection</span><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Recommended Aircraft</h2><div className="w-20 h-px bg-gold mx-auto" /></div><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">{aircraftOptions.map((item, i) => (<div key={i} className="bg-white p-8 shadow-sm border-t-2 border-gold"><span className={`text-sm font-semibold uppercase tracking-wide ${item.suitability === 'Optional' ? 'text-navy/60' : 'text-gold'}`}>{item.suitability}</span><h3 className="font-serif text-xl text-navy font-semibold mt-2 mb-3">{item.category}</h3><p className="text-navy/70 text-base leading-relaxed">{item.desc}</p></div>))}</div></div></section>

      <section className="py-20 md:py-28 bg-white"><div className="max-w-6xl mx-auto px-5"><div className="text-center mb-14"><span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Doha Departures</span><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Departure Airports</h2><div className="w-20 h-px bg-gold mx-auto" /></div><div className="max-w-3xl mx-auto"><div className="bg-sand p-8 text-center"><span className="text-gold"><svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg></span><h3 className="font-serif text-lg text-navy font-semibold mt-4 mb-2">Hamad International Airport (DOH)</h3><p className="text-navy/70 text-sm leading-relaxed">Qatar's world-class airport with dedicated VIP and private jet terminals offering premium departure services.</p></div></div></div></section>

      <section className="py-20 md:py-28 bg-sand"><div className="max-w-6xl mx-auto px-5"><div className="text-center mb-14"><span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Bodrum Arrival</span><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Arrival Airport</h2><div className="w-20 h-px bg-gold mx-auto" /></div><div className="max-w-3xl mx-auto"><div className="bg-white p-10 shadow-sm border-t-4 border-gold text-center"><h3 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-2">Milas-Bodrum Airport (BJV)</h3><p className="text-navy/70 text-lg leading-relaxed mt-4">All private jet arrivals from Doha land at Milas-Bodrum Airport. Private Jet Bodrum coordinates GAT access, apron-side transfers, and direct onward transportation.</p></div></div></div></section>

      <section className="py-20 md:py-28 bg-navy"><div className="max-w-4xl mx-auto px-5 text-center"><div className="w-16 h-px bg-gold mx-auto mb-8" /><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">Fly from Doha to <span className="text-gold">Bodrum</span></h2><p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">Share your travel dates and passenger count. Our concierge team will prepare tailored aircraft options for your Doha to Bodrum journey.</p><a href="/#contact" aria-label="Request Your Doha to Bodrum Quote" className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">Request Your Doha → Bodrum Quote</a><div className="w-16 h-px bg-gold/40 mx-auto mt-12" /></div></section>
    </main>
  );
}
