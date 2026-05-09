/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { OurStory } from './components/OurStory';
import { Testimonials } from './components/Testimonials';
import { ReviewBanner } from './components/ReviewBanner';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';
import { SplashScreen } from './components/SplashScreen';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { GalleryPage } from './pages/GalleryPage';
import { DrywallPainting } from './pages/services/DrywallPainting';
import { MinorPlumbing } from './pages/services/MinorPlumbing';
import { FixtureInstallation } from './pages/services/FixtureInstallation';
import { CarpentryWoodwork } from './pages/services/CarpentryWoodwork';
import { RentalMakeReady } from './pages/services/RentalMakeReady';
import { WindowDoorRepair } from './pages/services/WindowDoorRepair';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Animated page wrapper
function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  return (
    <PageTransition>
      <Hero />
      <ReviewBanner />
      <Services />
      <OurStory />
      <Testimonials />
    </PageTransition>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/reviews" element={<PageTransition><ReviewsPage /></PageTransition>} />
        <Route path="/services/drywall-painting" element={<PageTransition><DrywallPainting /></PageTransition>} />
        <Route path="/services/minor-plumbing" element={<PageTransition><MinorPlumbing /></PageTransition>} />
        <Route path="/services/fixture-installation" element={<PageTransition><FixtureInstallation /></PageTransition>} />
        <Route path="/services/carpentry-woodwork" element={<PageTransition><CarpentryWoodwork /></PageTransition>} />
        <Route path="/services/rental-make-ready" element={<PageTransition><RentalMakeReady /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
        <Route path="/services/window-door-repair" element={<PageTransition><WindowDoorRepair /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [splashReady, setSplashReady] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Cursor />
      <SplashScreen onComplete={() => setSplashReady(true)} />
      <div className="min-h-screen flex flex-col">
        {/* Hide navbar until splash finishes so logo doesn't appear in two places */}
        <div style={{ visibility: splashReady ? 'visible' : 'hidden' }}>
          <Navbar />
        </div>
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
