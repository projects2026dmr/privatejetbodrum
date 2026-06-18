import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Private Jet', href: '/#private-jet' },
  { label: 'Helicopter Tours', href: '/#helicopter' },
  { label: 'Resorts', href: '/#resorts' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleClick = () => setMobileOpen(false);

  // Determine header background: always solid on non-home pages
  const headerBg = !isHomePage || scrolled
    ? 'bg-navy/95 backdrop-blur-md shadow-lg py-3'
    : 'bg-transparent py-5';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex flex-col" onClick={handleClick}>
            <span className="font-serif text-white text-xl md:text-2xl font-semibold tracking-wide">
              Private Jet Bodrum
            </span>
            <span className="text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase mt-0.5">
              Private Jet &amp; Helicopter Charter
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu — rendered outside header to avoid backdrop-filter containing block */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] bg-navy/98 backdrop-blur-md transition-all duration-500 flex flex-col items-center justify-center ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-5 text-white p-2"
          aria-label="Close navigation menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="text-white/90 hover:text-gold text-2xl font-medium tracking-widest uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-12 w-16 h-px bg-gold/40" />
        <span className="mt-6 text-gold/50 text-xs tracking-[0.25em] uppercase">Private Jet Bodrum</span>
      </div>
    </>
  );
}
