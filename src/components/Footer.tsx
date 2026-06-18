import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-serif text-white text-xl font-semibold tracking-wide block">
              Private Jet Bodrum
            </span>
            <span className="text-gold/70 text-sm tracking-wide">
              Private Jet &amp; Helicopter Experiences in Bodrum
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="https://t.me/privatejetbodrum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/privatejetbodrum"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="mailto:info@privatejetbodrum.com"
              aria-label="Email"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        {/* Guides & Information */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h4 className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Guides &amp; Information
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <Link to="/how-to-book" className="text-white/40 hover:text-gold text-sm transition-colors">How to Book</Link>
            <Link to="/private-jet-prices" className="text-white/40 hover:text-gold text-sm transition-colors">Jet Prices</Link>
            <Link to="/routes" className="text-white/40 hover:text-gold text-sm transition-colors">Routes</Link>
            <Link to="/helicopter-guide" className="text-white/40 hover:text-gold text-sm transition-colors">Helicopter Guide</Link>
            <Link to="/bjv-guide" className="text-white/40 hover:text-gold text-sm transition-colors">Airport Guide</Link>
          </div>
        </div>

        {/* Popular Routes */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h4 className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Popular Routes
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <a href="/london-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">London → Bodrum</a>
            <a href="/dubai-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Dubai → Bodrum</a>
            <a href="/paris-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Paris → Bodrum</a>
            <a href="/berlin-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Berlin → Bodrum</a>
            <a href="/amsterdam-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Amsterdam → Bodrum</a>
            <a href="/riyadh-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Riyadh → Bodrum</a>
            <a href="/moscow-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Moscow → Bodrum</a>
            <a href="/rome-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Rome → Bodrum</a>
            <a href="/madrid-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Madrid → Bodrum</a>
            <a href="/kuwait-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Kuwait → Bodrum</a>
            <a href="/doha-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Doha → Bodrum</a>
            <a href="/athens-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Athens → Bodrum</a>
            <a href="/zurich-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Zurich → Bodrum</a>
            <a href="/geneva-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Geneva → Bodrum</a>
            <a href="/vienna-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Vienna → Bodrum</a>
            <a href="/munich-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Munich → Bodrum</a>
            <a href="/frankfurt-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Frankfurt → Bodrum</a>
            <a href="/hamburg-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Hamburg → Bodrum</a>
            <a href="/dusseldorf-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Düsseldorf → Bodrum</a>
            <a href="/stuttgart-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Stuttgart → Bodrum</a>
            <a href="/cologne-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Cologne → Bodrum</a>
            <a href="/hanover-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Hanover → Bodrum</a>
            <a href="/nuremberg-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Nuremberg → Bodrum</a>
            <a href="/manchester-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Manchester → Bodrum</a>
            <a href="/birmingham-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Birmingham → Bodrum</a>
            <a href="/edinburgh-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Edinburgh → Bodrum</a>
            <a href="/glasgow-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Glasgow → Bodrum</a>
            <a href="/bristol-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Bristol → Bodrum</a>
            <a href="/nice-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Nice → Bodrum</a>
            <a href="/cannes-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Cannes → Bodrum</a>
            <a href="/lyon-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Lyon → Bodrum</a>
            <a href="/marseille-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Marseille → Bodrum</a>
            <a href="/milan-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Milan → Bodrum</a>
            <a href="/venice-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Venice → Bodrum</a>
            <a href="/florence-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Florence → Bodrum</a>
            <a href="/naples-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Naples → Bodrum</a>
            <a href="/barcelona-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Barcelona → Bodrum</a>
            <a href="/valencia-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Valencia → Bodrum</a>
            <a href="/malaga-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Malaga → Bodrum</a>
            <a href="/seville-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Seville → Bodrum</a>
            <a href="/brussels-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Brussels → Bodrum</a>
            <a href="/luxembourg-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Luxembourg → Bodrum</a>
            <a href="/copenhagen-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Copenhagen → Bodrum</a>
            <a href="/stockholm-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Stockholm → Bodrum</a>
            <a href="/oslo-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Oslo → Bodrum</a>
            <a href="/helsinki-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Helsinki → Bodrum</a>
            <a href="/basel-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Basel → Bodrum</a>
            <a href="/lugano-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Lugano → Bodrum</a>
            <a href="/salzburg-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Salzburg → Bodrum</a>
            <a href="/innsbruck-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Innsbruck → Bodrum</a>
            <a href="/belgrade-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Belgrade → Bodrum</a>
            <a href="/sofia-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Sofia → Bodrum</a>
            <a href="/bucharest-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Bucharest → Bodrum</a>
            <a href="/zagreb-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Zagreb → Bodrum</a>
            <a href="/ljubljana-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Ljubljana → Bodrum</a>
            <a href="/tirana-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Tirana → Bodrum</a>
            <a href="/skopje-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Skopje → Bodrum</a>
            <a href="/podgorica-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Podgorica → Bodrum</a>
            <a href="/tel-aviv-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Tel Aviv → Bodrum</a>
            <a href="/beirut-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Beirut → Bodrum</a>
            <a href="/cairo-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Cairo → Bodrum</a>
            <a href="/amman-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Amman → Bodrum</a>
            <a href="/baku-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Baku → Bodrum</a>
            <a href="/tbilisi-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Tbilisi → Bodrum</a>
            <a href="/yerevan-to-bodrum" className="text-white/40 hover:text-gold text-sm transition-colors">Yerevan → Bodrum</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Private Jet Bodrum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
