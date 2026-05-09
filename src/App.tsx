/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { OurStory } from './components/OurStory';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

// Pages
import { AboutPage } from './pages/AboutPage';
import { DrywallPainting } from './pages/services/DrywallPainting';
import { MinorPlumbing } from './pages/services/MinorPlumbing';
import { FixtureInstallation } from './pages/services/FixtureInstallation';
import { CarpentryWoodwork } from './pages/services/CarpentryWoodwork';
import { RentalMakeReady } from './pages/services/RentalMakeReady';
import { WindowDoorRepair } from './pages/services/WindowDoorRepair';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <OurStory />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/drywall-painting" element={<DrywallPainting />} />
            <Route path="/services/minor-plumbing" element={<MinorPlumbing />} />
            <Route path="/services/fixture-installation" element={<FixtureInstallation />} />
            <Route path="/services/carpentry-woodwork" element={<CarpentryWoodwork />} />
            <Route path="/services/rental-make-ready" element={<RentalMakeReady />} />
            <Route path="/services/window-door-repair" element={<WindowDoorRepair />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
