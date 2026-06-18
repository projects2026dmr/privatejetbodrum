import { useEffect } from 'react';

function useMeta(city: string, path: string) {
  useEffect(() => {
    document.title = `${city} to Bodrum Private Jet Route | Private Jet Bodrum`;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', `Flight time, aircraft options, and route details for private jet flights from ${city} to Bodrum.`);
    const ca = document.querySelector('link[rel="canonical"]');
    if (ca) ca.setAttribute('href', `https://privatejetbodrum.com/${path}`);
    window.scrollTo(0, 0);
    return () => {
      document.title = 'Private Jet Bodrum | Jet & Helicopter Charter';
      if (md) md.setAttribute('content', 'Private jet flights and helicopter scenic tours in Bodrum. Premium charter services with Airbus H130 and luxury jet options. Contact our concierge team 24/7.');
      if (ca) ca.setAttribute('href', 'https://privatejetbodrum.com');
    };
  }, [city, path]);
}

const svgIcon = <svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>;

interface AC { category: string; suitability: string; desc: string }
interface AP { name: string; desc: string }

function PremiumPage({ city, path, time, distance, aircraft, airports }: { city: string; path: string; time: string; distance: string; aircraft: AC[]; airports: AP[] }) {
  useMeta(city, path);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${city} to Bodrum Private Jet Route`,
    "url": `https://privatejetbodrum.com/${path}`,
    "description": `Private jet flight time, aircraft options, and airport details for flights from ${city} to Bodrum.`,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://privatejetbodrum.com" },
        { "@type": "ListItem", "position": 2, "name": `${city} to Bodrum`, "item": `https://privatejetbodrum.com/${path}` }
      ]
    },
    "flight": {
      "@type": "Flight",
      "name": `${city} to Bodrum Private Jet Flight`,
      "departureAirport": { "@type": "Airport", "name": airports[0]?.name || `${city} Airport` },
      "arrivalAirport": { "@type": "Airport", "name": "Milas-Bodrum Airport (BJV)" },
      "flightDistance": distance + " km",
      "estimatedFlightDuration": time
    },
    "faq": {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": `How long is the private jet flight from ${city} to Bodrum?`, "acceptedAnswer": { "@type": "Answer", "text": `The private jet flight from ${city} to Bodrum takes approximately ${time}.` } },
        { "@type": "Question", "name": `Which aircraft are recommended for the ${city} to Bodrum route?`, "acceptedAnswer": { "@type": "Answer", "text": `Recommended aircraft for this route include ${aircraft.map(a => a.category).join(", ")}.` } },
        { "@type": "Question", "name": `Which airports can I depart from in ${city}?`, "acceptedAnswer": { "@type": "Answer", "text": `Private jet departures from ${city} typically operate from ${airports.map(a => a.name).join(", ")}.` } }
      ]
    }
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <main>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-navy"><div className="max-w-6xl mx-auto px-5 text-center"><div className="w-16 h-px bg-gold mx-auto mb-8" /><h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight mb-6">{city} to Bodrum <span className="text-gold">Private Jet Route</span></h1><p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">A complete guide to flying privately from {city} to Bodrum.</p><div className="w-16 h-px bg-gold/40 mx-auto mt-10" /></div></section>

      <section className="py-20 md:py-28 bg-white"><div className="max-w-6xl mx-auto px-5"><div className="text-center mb-14"><span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Duration</span><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Flight Time</h2><div className="w-20 h-px bg-gold mx-auto" /></div><div className="max-w-2xl mx-auto"><div className="bg-sand p-10 text-center border-t-4 border-gold"><p className="text-navy font-semibold text-xl mb-2">{city} → Bodrum</p><p className="font-serif text-5xl md:text-6xl text-gold font-bold">{time}</p><p className="text-navy/60 mt-4 text-base">Approximate flight time • Direct route</p></div><p className="text-center text-navy/70 text-lg leading-relaxed mt-8">The flight from {city} to Bodrum covers approximately {distance} kilometers. All private jet flights arrive at Milas-Bodrum Airport (BJV) with full VIP handling.</p></div></div></section>

      <section className="py-20 md:py-28 bg-sand"><div className="max-w-6xl mx-auto px-5"><div className="text-center mb-14"><span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Aircraft Selection</span><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Recommended Aircraft</h2><div className="w-20 h-px bg-gold mx-auto" /></div><div className={`grid gap-6 max-w-5xl mx-auto ${aircraft.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 max-w-4xl'}`}>{aircraft.map((item, i) => (<div key={i} className="bg-white p-8 shadow-sm border-t-2 border-gold"><span className={`text-sm font-semibold uppercase tracking-wide ${item.suitability === 'Ideal' || item.suitability === 'Maximum Comfort' || item.suitability === 'Best Balance' || item.suitability === 'Premium' ? 'text-gold' : 'text-navy/60'}`}>{item.suitability}</span><h3 className="font-serif text-xl text-navy font-semibold mt-2 mb-3">{item.category}</h3><p className="text-navy/70 text-base leading-relaxed">{item.desc}</p></div>))}</div></div></section>

      <section className="py-20 md:py-28 bg-white"><div className="max-w-6xl mx-auto px-5"><div className="text-center mb-14"><span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">{city} Departures</span><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Departure Airports</h2><div className="w-20 h-px bg-gold mx-auto" /></div><div className={`grid gap-8 max-w-3xl mx-auto ${airports.length > 1 ? 'md:grid-cols-2' : ''}`}>{airports.map((a, i) => (<div key={i} className="bg-sand p-8 text-center"><span className="text-gold">{svgIcon}</span><h3 className="font-serif text-lg text-navy font-semibold mt-4 mb-2">{a.name}</h3><p className="text-navy/70 text-sm leading-relaxed">{a.desc}</p></div>))}</div></div></section>

      <section className="py-20 md:py-28 bg-sand"><div className="max-w-6xl mx-auto px-5"><div className="text-center mb-14"><span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">Bodrum Arrival</span><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">Arrival Airport</h2><div className="w-20 h-px bg-gold mx-auto" /></div><div className="max-w-3xl mx-auto"><div className="bg-white p-10 shadow-sm border-t-4 border-gold text-center"><h3 className="font-serif text-2xl md:text-3xl text-navy font-semibold mb-2">Milas-Bodrum Airport (BJV)</h3><p className="text-navy/70 text-lg leading-relaxed mt-4">All private jet arrivals from {city} land at Milas-Bodrum Airport. Private Jet Bodrum coordinates GAT access, apron-side transfers, and direct onward transportation.</p></div></div></div></section>

      <section className="py-20 md:py-28 bg-navy"><div className="max-w-4xl mx-auto px-5 text-center"><div className="w-16 h-px bg-gold mx-auto mb-8" /><h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">Fly from {city} to <span className="text-gold">Bodrum</span></h2><p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">Share your travel dates and passenger count. Our concierge team will prepare tailored aircraft options for your {city} to Bodrum journey.</p><a href="/#contact" aria-label={`Request Your ${city} to Bodrum Quote`} className="inline-block bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 text-sm md:text-base uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">Request Your {city} → Bodrum Quote</a><div className="w-16 h-px bg-gold/40 mx-auto mt-12" /></div></section>
    </main>
    </>
  );
}

// Light + Midsize aircraft set
const acLM: AC[] = [{category:'Light Jets',suitability:'Ideal',desc:'Light jets are perfectly suited for this short route, offering efficiency and comfort.'},{category:'Midsize Jets',suitability:'Maximum Comfort',desc:'Midsize jets provide extra cabin space for a more relaxed journey.'}];
// Light + Midsize + Super-Mid
const acLMS: AC[] = [{category:'Light Jets',suitability:'Suitable',desc:'Light jets can complete this route non-stop, ideal for smaller groups.'},{category:'Midsize Jets',suitability:'Ideal',desc:'Midsize jets offer the best balance of cabin comfort and efficiency.'},{category:'Super-Midsize Jets',suitability:'Maximum Comfort',desc:'Super-midsize jets provide stand-up cabins and premium amenities.'}];
// Midsize + Super-Mid
const acMS: AC[] = [{category:'Midsize Jets',suitability:'Ideal',desc:'Midsize jets offer excellent range and comfort for this route.'},{category:'Super-Midsize Jets',suitability:'Maximum Comfort',desc:'Super-midsize jets provide premium cabin space and faster speeds.'}];
// Midsize + Super-Mid + Heavy
const acMSH: AC[] = [{category:'Midsize Jets',suitability:'Suitable',desc:'Midsize jets can handle this route with good cabin comfort.'},{category:'Super-Midsize Jets',suitability:'Ideal',desc:'Super-midsize jets offer the best balance of range and comfort.'},{category:'Heavy Jets',suitability:'Maximum Comfort',desc:'Heavy jets provide full stand-up cabins and premium amenities.'}];
// Super-Mid + Heavy
const acSH: AC[] = [{category:'Super-Midsize Jets',suitability:'Ideal',desc:'Super-midsize jets offer the best range and comfort for this route.'},{category:'Heavy Jets',suitability:'Maximum Comfort',desc:'Heavy jets provide premium cabin amenities and spacious seating.'}];

// Germany
export function MunichToBodrum(){return <PremiumPage city="Munich" path="munich-to-bodrum" time="2h 40m" distance="1,900" aircraft={acLMS} airports={[{name:'Munich Airport (MUC)',desc:"Bavaria's main international airport with dedicated business aviation facilities."},{name:'Oberpfaffenhofen (OBF)',desc:'A popular executive airport near Munich offering efficient private jet handling.'}]} />;}
export function FrankfurtToBodrum(){return <PremiumPage city="Frankfurt" path="frankfurt-to-bodrum" time="3h 00m" distance="2,100" aircraft={acLMS} airports={[{name:'Frankfurt Airport (FRA)',desc:"Germany's busiest airport with excellent executive aviation terminals."},{name:'Frankfurt Egelsbach (QEF)',desc:'A dedicated general aviation airport ideal for private jet departures.'}]} />;}
export function HamburgToBodrum(){return <PremiumPage city="Hamburg" path="hamburg-to-bodrum" time="3h 10m" distance="2,200" aircraft={acLMS} airports={[{name:'Hamburg Airport (HAM)',desc:"Hamburg's main airport with dedicated executive aviation facilities."}]} />;}
export function DusseldorfToBodrum(){return <PremiumPage city="Düsseldorf" path="dusseldorf-to-bodrum" time="3h 05m" distance="2,200" aircraft={acLMS} airports={[{name:'Düsseldorf Airport (DUS)',desc:'A major international airport with dedicated business aviation terminals.'},{name:'Mönchengladbach (MGL)',desc:'A general aviation airport near Düsseldorf offering efficient private jet handling.'}]} />;}
export function StuttgartToBodrum(){return <PremiumPage city="Stuttgart" path="stuttgart-to-bodrum" time="2h 45m" distance="1,900" aircraft={acLMS} airports={[{name:'Stuttgart Airport (STR)',desc:"Stuttgart's main airport with business aviation facilities and VIP handling."}]} />;}
export function CologneToBodrum(){return <PremiumPage city="Cologne" path="cologne-to-bodrum" time="3h 00m" distance="2,100" aircraft={acLMS} airports={[{name:'Cologne Bonn Airport (CGN)',desc:'A major airport serving the Rhineland with dedicated private jet facilities.'}]} />;}
export function HanoverToBodrum(){return <PremiumPage city="Hanover" path="hanover-to-bodrum" time="3h 05m" distance="2,200" aircraft={acLMS} airports={[{name:'Hanover Airport (HAJ)',desc:"Hanover's main airport with business aviation services and executive handling."}]} />;}
export function NurembergToBodrum(){return <PremiumPage city="Nuremberg" path="nuremberg-to-bodrum" time="2h 35m" distance="1,800" aircraft={acLM} airports={[{name:'Nuremberg Airport (NUE)',desc:"Nuremberg's airport with dedicated private aviation handling and VIP services."}]} />;}

// UK
export function ManchesterToBodrum(){return <PremiumPage city="Manchester" path="manchester-to-bodrum" time="4h 00m" distance="2,800" aircraft={acMSH} airports={[{name:'Manchester Airport (MAN)',desc:'The main airport for Northern England with private jet handling facilities.'},{name:'Liverpool John Lennon (LPL)',desc:'An alternative departure point with efficient business aviation services.'}]} />;}
export function BirminghamToBodrum(){return <PremiumPage city="Birmingham" path="birmingham-to-bodrum" time="3h 50m" distance="2,600" aircraft={[{category:'Midsize Jets',suitability:'Ideal',desc:'Midsize jets offer excellent range and comfort for this route.'},{category:'Super-Midsize Jets',suitability:'Maximum Comfort',desc:'Super-midsize jets provide premium cabin space and faster speeds.'},{category:'Heavy Jets',suitability:'Premium',desc:'Heavy jets deliver the ultimate comfort with stand-up cabins.'}]} airports={[{name:'Birmingham Airport (BHX)',desc:"Birmingham's main airport with dedicated executive aviation facilities."}]} />;}
export function EdinburghToBodrum(){return <PremiumPage city="Edinburgh" path="edinburgh-to-bodrum" time="4h 15m" distance="2,900" aircraft={acMSH} airports={[{name:'Edinburgh Airport (EDI)',desc:"Scotland's main airport with private jet handling and VIP services."}]} />;}
export function GlasgowToBodrum(){return <PremiumPage city="Glasgow" path="glasgow-to-bodrum" time="4h 20m" distance="3,000" aircraft={acSH} airports={[{name:'Glasgow Airport (GLA)',desc:"Glasgow's main international airport with executive aviation facilities."}]} />;}
export function BristolToBodrum(){return <PremiumPage city="Bristol" path="bristol-to-bodrum" time="3h 55m" distance="2,700" aircraft={acMS} airports={[{name:'Bristol Airport (BRS)',desc:"Bristol's airport with private aviation handling and executive services."}]} />;}

// France
export function NiceToBodrum(){return <PremiumPage city="Nice" path="nice-to-bodrum" time="2h 30m" distance="1,800" aircraft={acLM} airports={[{name:"Nice Côte d'Azur (NCE)",desc:"The French Riviera's main airport with world-class private jet terminals."}]} />;}
export function CannesToBodrum(){return <PremiumPage city="Cannes" path="cannes-to-bodrum" time="2h 25m" distance="1,750" aircraft={acLM} airports={[{name:'Cannes-Mandelieu (CEQ)',desc:'A dedicated general aviation airport on the French Riviera, ideal for private jets.'}]} />;}
export function LyonToBodrum(){return <PremiumPage city="Lyon" path="lyon-to-bodrum" time="2h 50m" distance="2,000" aircraft={acLMS} airports={[{name:'Lyon-Saint Exupéry (LYS)',desc:"Lyon's main international airport with private jet facilities."},{name:'Lyon-Bron (LYN)',desc:'A dedicated business aviation airport offering efficient handling.'}]} />;}
export function MarseilleToBodrum(){return <PremiumPage city="Marseille" path="marseille-to-bodrum" time="2h 25m" distance="1,700" aircraft={acLM} airports={[{name:'Marseille Provence (MRS)',desc:'The main airport for Southern France with business aviation services.'}]} />;}

// Italy
export function MilanToBodrum(){return <PremiumPage city="Milan" path="milan-to-bodrum" time="2h 20m" distance="1,700" aircraft={acLM} airports={[{name:'Milan Linate (LIN)',desc:'The preferred city airport for private jet departures from Milan.'},{name:'Milan Malpensa (MXP)',desc:"Milan's largest airport with dedicated executive aviation terminals."}]} />;}
export function VeniceToBodrum(){return <PremiumPage city="Venice" path="venice-to-bodrum" time="2h 05m" distance="1,500" aircraft={acLM} airports={[{name:'Venice Marco Polo (VCE)',desc:"Venice's main airport with private jet handling and VIP services."}]} />;}
export function FlorenceToBodrum(){return <PremiumPage city="Florence" path="florence-to-bodrum" time="2h 10m" distance="1,500" aircraft={acLM} airports={[{name:'Florence Airport (FLR)',desc:"Florence's Amerigo Vespucci Airport with executive aviation services."}]} />;}
export function NaplesToBodrum(){return <PremiumPage city="Naples" path="naples-to-bodrum" time="1h 50m" distance="1,300" aircraft={acLM} airports={[{name:'Naples Airport (NAP)',desc:"Naples' Capodichino Airport with dedicated private aviation handling."}]} />;}

// Spain
export function BarcelonaToBodrum(){return <PremiumPage city="Barcelona" path="barcelona-to-bodrum" time="3h 15m" distance="2,400" aircraft={[{category:'Midsize Jets',suitability:'Ideal',desc:'Midsize jets offer excellent range and comfort for this Mediterranean route.'},{category:'Super-Midsize Jets',suitability:'Maximum Comfort',desc:'Super-midsize jets provide premium cabin space and faster speeds.'},{category:'Heavy Jets',suitability:'Premium',desc:'Heavy jets deliver the ultimate comfort for larger groups.'}]} airports={[{name:'Barcelona El Prat (BCN)',desc:"Barcelona's main airport with executive aviation terminals."},{name:'Sabadell Airport (QSA)',desc:'A dedicated general aviation airport near Barcelona.'}]} />;}
export function ValenciaToBodrum(){return <PremiumPage city="Valencia" path="valencia-to-bodrum" time="3h 20m" distance="2,500" aircraft={acMS} airports={[{name:'Valencia Airport (VLC)',desc:"Valencia's main airport with private aviation facilities."}]} />;}
export function MalagaToBodrum(){return <PremiumPage city="Malaga" path="malaga-to-bodrum" time="3h 30m" distance="2,700" aircraft={acMS} airports={[{name:'Málaga-Costa del Sol (AGP)',desc:'The main airport for the Costa del Sol with executive aviation services.'}]} />;}
export function SevilleToBodrum(){return <PremiumPage city="Seville" path="seville-to-bodrum" time="3h 40m" distance="2,800" aircraft={acMS} airports={[{name:'Seville Airport (SVQ)',desc:"Seville's main airport with private jet handling facilities."}]} />;}

// Benelux
export function BrusselsToBodrum(){return <PremiumPage city="Brussels" path="brussels-to-bodrum" time="3h 15m" distance="2,300" aircraft={acLMS} airports={[{name:'Brussels Airport (BRU)',desc:"Belgium's main international airport with executive aviation terminals."},{name:'Brussels South Charleroi (CRL)',desc:'An alternative airport with efficient private jet handling.'}]} />;}
export function LuxembourgToBodrum(){return <PremiumPage city="Luxembourg" path="luxembourg-to-bodrum" time="3h 00m" distance="2,100" aircraft={acLMS} airports={[{name:'Luxembourg Airport (LUX)',desc:"Luxembourg's international airport with excellent private jet facilities."}]} />;}

// Scandinavia
export function CopenhagenToBodrum(){return <PremiumPage city="Copenhagen" path="copenhagen-to-bodrum" time="3h 20m" distance="2,400" aircraft={acMS} airports={[{name:'Copenhagen Airport (CPH)',desc:"Denmark's main airport with dedicated executive aviation facilities."},{name:'Roskilde Airport (RKE)',desc:'A general aviation airport near Copenhagen for efficient private departures.'}]} />;}
export function StockholmToBodrum(){return <PremiumPage city="Stockholm" path="stockholm-to-bodrum" time="3h 35m" distance="2,600" aircraft={acMS} airports={[{name:'Stockholm Arlanda (ARN)',desc:"Sweden's largest airport with dedicated business aviation terminals."},{name:'Stockholm Bromma (BMA)',desc:'A city airport popular for private jet departures.'}]} />;}
export function OsloToBodrum(){return <PremiumPage city="Oslo" path="oslo-to-bodrum" time="3h 45m" distance="2,700" aircraft={acMS} airports={[{name:'Oslo Gardermoen (OSL)',desc:"Norway's main international airport with executive aviation services."}]} />;}
export function HelsinkiToBodrum(){return <PremiumPage city="Helsinki" path="helsinki-to-bodrum" time="3h 30m" distance="2,500" aircraft={acMS} airports={[{name:'Helsinki-Vantaa Airport (HEL)',desc:"Finland's main airport with dedicated private jet handling facilities."}]} />;}

// Switzerland
export function BaselToBodrum(){return <PremiumPage city="Basel" path="basel-to-bodrum" time="2h 45m" distance="1,900" aircraft={[{category:'Light Jets',suitability:'Suitable',desc:'Light jets handle this route well for smaller groups.'},{category:'Midsize Jets',suitability:'Ideal',desc:'Midsize jets provide the best balance of comfort and efficiency.'}]} airports={[{name:'EuroAirport Basel-Mulhouse (BSL)',desc:'The tri-national airport serving Basel with excellent private jet facilities.'}]} />;}
export function LuganoToBodrum(){return <PremiumPage city="Lugano" path="lugano-to-bodrum" time="2h 20m" distance="1,700" aircraft={acLM} airports={[{name:'Lugano Airport (LUG)',desc:'A charming airport in Ticino with private aviation handling services.'}]} />;}

// Austria
export function SalzburgToBodrum(){return <PremiumPage city="Salzburg" path="salzburg-to-bodrum" time="2h 25m" distance="1,700" aircraft={acLM} airports={[{name:'Salzburg Airport (SZG)',desc:"Salzburg's W.A. Mozart Airport with dedicated executive aviation services."}]} />;}
export function InnsbruckToBodrum(){return <PremiumPage city="Innsbruck" path="innsbruck-to-bodrum" time="2h 30m" distance="1,800" aircraft={acLM} airports={[{name:'Innsbruck Airport (INN)',desc:"Innsbruck's Kranebitten Airport with private aviation handling."}]} />;}

// Balkans
export function BelgradeToBodrum(){return <PremiumPage city="Belgrade" path="belgrade-to-bodrum" time="1h 45m" distance="1,200" aircraft={acLM} airports={[{name:'Belgrade Nikola Tesla (BEG)',desc:"Serbia's main airport with dedicated private jet facilities."}]} />;}
export function SofiaToBodrum(){return <PremiumPage city="Sofia" path="sofia-to-bodrum" time="1h 25m" distance="900" aircraft={acLM} airports={[{name:'Sofia Airport (SOF)',desc:"Bulgaria's main international airport with executive aviation services."}]} />;}
export function BucharestToBodrum(){return <PremiumPage city="Bucharest" path="bucharest-to-bodrum" time="1h 40m" distance="1,100" aircraft={acLM} airports={[{name:'Bucharest Henri Coandă (OTP)',desc:"Romania's main international airport with private aviation facilities."},{name:'Bucharest Băneasa (BBU)',desc:'A smaller airport near the city center popular for business aviation.'}]} />;}
export function ZagrebToBodrum(){return <PremiumPage city="Zagreb" path="zagreb-to-bodrum" time="1h 50m" distance="1,300" aircraft={acLM} airports={[{name:'Zagreb Airport (ZAG)',desc:"Croatia's main airport with dedicated private aviation handling."}]} />;}
export function LjubljanaToBodrum(){return <PremiumPage city="Ljubljana" path="ljubljana-to-bodrum" time="2h 00m" distance="1,400" aircraft={acLM} airports={[{name:'Ljubljana Jože Pučnik (LJU)',desc:"Slovenia's main airport with private jet handling services."}]} />;}
export function TiranaToBodrum(){return <PremiumPage city="Tirana" path="tirana-to-bodrum" time="1h 20m" distance="800" aircraft={acLM} airports={[{name:'Tirana International Airport (TIA)',desc:"Albania's main airport with private aviation handling."}]} />;}
export function SkopjeToBodrum(){return <PremiumPage city="Skopje" path="skopje-to-bodrum" time="1h 15m" distance="750" aircraft={acLM} airports={[{name:'Skopje International Airport (SKP)',desc:"North Macedonia's main airport with private jet services."}]} />;}
export function PodgoricaToBodrum(){return <PremiumPage city="Podgorica" path="podgorica-to-bodrum" time="1h 30m" distance="900" aircraft={acLM} airports={[{name:'Podgorica Airport (TGD)',desc:"Montenegro's capital airport with private aviation handling."}]} />;}

// Middle East & North Africa
export function TelAvivToBodrum(){return <PremiumPage city="Tel Aviv" path="tel-aviv-to-bodrum" time="1h 30m" distance="900" aircraft={acLM} airports={[{name:'Ben Gurion Airport (TLV)',desc:"Israel's main international airport with dedicated private jet facilities and VIP handling."}]} />;}
export function BeirutToBodrum(){return <PremiumPage city="Beirut" path="beirut-to-bodrum" time="1h 40m" distance="1,000" aircraft={acLM} airports={[{name:'Beirut–Rafic Hariri Airport (BEY)',desc:"Lebanon's main international airport with private jet handling services."}]} />;}
export function CairoToBodrum(){return <PremiumPage city="Cairo" path="cairo-to-bodrum" time="2h 00m" distance="1,200" aircraft={acLMS} airports={[{name:'Cairo International Airport (CAI)',desc:"Egypt's main airport with dedicated private aviation terminals and VIP handling."}]} />;}
export function AmmanToBodrum(){return <PremiumPage city="Amman" path="amman-to-bodrum" time="1h 50m" distance="1,100" aircraft={acLM} airports={[{name:'Queen Alia International Airport (AMM)',desc:"Jordan's main international airport with dedicated private jet facilities."}]} />;}

// Caucasus
export function BakuToBodrum(){return <PremiumPage city="Baku" path="baku-to-bodrum" time="2h 45m" distance="1,800" aircraft={acMS} airports={[{name:'Heydar Aliyev International Airport (GYD)',desc:"Azerbaijan's main international airport with VIP private jet handling."}]} />;}
export function TbilisiToBodrum(){return <PremiumPage city="Tbilisi" path="tbilisi-to-bodrum" time="2h 30m" distance="1,600" aircraft={acLMS} airports={[{name:'Tbilisi International Airport (TBS)',desc:"Georgia's main airport with dedicated private aviation handling."}]} />;}
export function YerevanToBodrum(){return <PremiumPage city="Yerevan" path="yerevan-to-bodrum" time="2h 35m" distance="1,700" aircraft={acMS} airports={[{name:'Zvartnots International Airport (EVN)',desc:"Armenia's main international airport with private jet handling services."}]} />;}
