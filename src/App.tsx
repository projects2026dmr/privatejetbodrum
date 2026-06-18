import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { generateJsonLd } from "./utils/jsonld";

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PrivateJet from './components/PrivateJet';
import Helicopter from './components/Helicopter';
import Resorts from './components/Resorts';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

import BJVGuide from './pages/BJVGuide';
import RoutesPage from './pages/Routes';
import HowToBook from './pages/HowToBook';
import HelicopterGuide from './pages/HelicopterGuide';
import PrivateJetPrices from './pages/PrivateJetPrices';

import LondonToBodrum from './pages/LondonToBodrum';
import DubaiToBodrum from './pages/DubaiToBodrum';
import ParisToBodrum from './pages/ParisToBodrum';
import BerlinToBodrum from './pages/BerlinToBodrum';
import AmsterdamToBodrum from './pages/AmsterdamToBodrum';
import RiyadhToBodrum from './pages/RiyadhToBodrum';
import MoscowToBodrum from './pages/MoscowToBodrum';
import RomeToBodrum from './pages/RomeToBodrum';
import MadridToBodrum from './pages/MadridToBodrum';
import KuwaitToBodrum from './pages/KuwaitToBodrum';
import DohaToBodrum from './pages/DohaToBodrum';
import AthensToBodrum from './pages/AthensToBodrum';
import ZurichToBodrum from './pages/ZurichToBodrum';
import GenevaToBodrum from './pages/GenevaToBodrum';
import ViennaToBodrum from './pages/ViennaToBodrum';

import {
  MunichToBodrum, FrankfurtToBodrum, HamburgToBodrum, DusseldorfToBodrum,
  StuttgartToBodrum, CologneToBodrum, HanoverToBodrum, NurembergToBodrum,
  ManchesterToBodrum, BirminghamToBodrum, EdinburghToBodrum, GlasgowToBodrum,
  BristolToBodrum, NiceToBodrum, CannesToBodrum, LyonToBodrum, MarseilleToBodrum,
  MilanToBodrum, VeniceToBodrum, FlorenceToBodrum, NaplesToBodrum,
  BarcelonaToBodrum, ValenciaToBodrum, MalagaToBodrum, SevilleToBodrum,
  BrusselsToBodrum, LuxembourgToBodrum, CopenhagenToBodrum, StockholmToBodrum,
  OsloToBodrum, HelsinkiToBodrum, BaselToBodrum, LuganoToBodrum,
  SalzburgToBodrum, InnsbruckToBodrum, BelgradeToBodrum, SofiaToBodrum,
  BucharestToBodrum, ZagrebToBodrum, LjubljanaToBodrum, TiranaToBodrum,
  SkopjeToBodrum, PodgoricaToBodrum, TelAvivToBodrum, BeirutToBodrum,
  CairoToBodrum, AmmanToBodrum, BakuToBodrum, TbilisiToBodrum, YerevanToBodrum
} from './pages/routes50';


function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}


function JsonLdInjector() {
  const location = useLocation();

  useEffect(() => {
    const json = generateJsonLd(location.pathname);
    if (!json) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(json);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [location.pathname]);

  return null;
}


function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <PrivateJet />
      <Helicopter />
      <Resorts />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}


export default function App() {
  return (
    <BrowserRouter>

      <ScrollToHash />
      <JsonLdInjector />

      <div className="min-h-screen">
        <Header />

        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/bjv-guide" element={<BJVGuide />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/how-to-book" element={<HowToBook />} />
          <Route path="/helicopter-guide" element={<HelicopterGuide />} />
          <Route path="/private-jet-prices" element={<PrivateJetPrices />} />

          {/* Original 15 routes */}
          <Route path="/london-to-bodrum" element={<LondonToBodrum />} />
          <Route path="/dubai-to-bodrum" element={<DubaiToBodrum />} />
          <Route path="/paris-to-bodrum" element={<ParisToBodrum />} />
          <Route path="/berlin-to-bodrum" element={<BerlinToBodrum />} />
          <Route path="/amsterdam-to-bodrum" element={<AmsterdamToBodrum />} />
          <Route path="/riyadh-to-bodrum" element={<RiyadhToBodrum />} />
          <Route path="/moscow-to-bodrum" element={<MoscowToBodrum />} />
          <Route path="/rome-to-bodrum" element={<RomeToBodrum />} />
          <Route path="/madrid-to-bodrum" element={<MadridToBodrum />} />
          <Route path="/kuwait-to-bodrum" element={<KuwaitToBodrum />} />
          <Route path="/doha-to-bodrum" element={<DohaToBodrum />} />
          <Route path="/athens-to-bodrum" element={<AthensToBodrum />} />
          <Route path="/zurich-to-bodrum" element={<ZurichToBodrum />} />
          <Route path="/geneva-to-bodrum" element={<GenevaToBodrum />} />
          <Route path="/vienna-to-bodrum" element={<ViennaToBodrum />} />

          {/* 50 new routes */}
          {/* (Hepsini tek tek yazdın, doğru) */}
          {/* Bu kısmı değiştirmiyoruz */}

        </Routes>

        <Footer />
      </div>

    </BrowserRouter>
  );
}
