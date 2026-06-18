const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Bodrum-Focused Expertise',
    desc: 'We specialize exclusively in Bodrum, knowing every bay, resort, and route in the region. Our local knowledge ensures seamless experiences.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    title: 'Jets & Helicopters in One Place',
    desc: 'Private jet charter and helicopter scenic tours — both services through a single concierge.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Real Human Concierge',
    desc: 'No generic booking engines. You speak directly with a dedicated flight concierge who handles everything.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Discreet, VIP-Level Handling',
    desc: 'Your privacy and comfort come first. Every detail is handled with complete discretion in Bodrum.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Tailored Quotes for Every Request',
    desc: 'Each journey is quoted individually based on your route, aircraft, and schedule.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'Hotel, Villa & Yacht Coordination',
    desc: 'We work directly with your accommodation to ensure arrivals, transfers, and tours are perfectly timed.',
  },
];

const faqs = [
  {
    question: 'How do I book a private jet to Bodrum?',
    answer: 'Contact our concierge team via WhatsApp, Telegram, Email, or Instagram with your route, dates, and passenger count. We will prepare tailored aircraft options within hours. Private Jet Bodrum handles the entire booking process from inquiry to arrival.',
  },
  {
    question: 'Which helicopter is used for Bodrum scenic tours?',
    answer: 'All scenic tours operate aboard the Airbus H130 — one of the quietest and most comfortable touring helicopters, with panoramic windows for exceptional views. The Airbus H130 seats up to 6 passengers and is ideal for aerial photography.',
  },
  {
    question: 'Do you offer resort pick-ups in Bodrum?',
    answer: 'Yes. We coordinate with luxury resorts including Rixos, Mandarin Oriental, Vogue, Titanic, and Lujo for seamless arrivals, transfers, and scenic tours. Airport transfers from Milas-Bodrum Airport are also available.',
  },
  {
    question: 'How long are the helicopter tours?',
    answer: 'We offer five tour durations: 15, 20, 30, 50, and 60 minutes. Each covers different areas of the Bodrum coastline, bays, and nearby islands. Custom durations and routes can also be arranged upon request.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.25em]">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-navy mt-3 mb-4">
            Why Choose Us
          </h2>
          <div className="w-20 h-px bg-gold mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="p-8 bg-sand hover:bg-sand-dark transition-colors duration-300 text-center group"
            >
              <div className="text-gold mb-5 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="font-serif text-xl text-navy font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-navy/70 text-base leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl text-navy text-center mb-10">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-sand p-6 md:p-8">
                <h4 className="font-semibold text-navy text-lg mb-2">{faq.question}</h4>
                <p className="text-navy/70 text-base leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
