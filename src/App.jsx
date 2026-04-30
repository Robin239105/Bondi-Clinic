import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AnnouncementBar from "./components/layout/AnnouncementBar";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import FloatingCart from "./components/shop/FloatingCart";
import BodyPage from "./pages/BodyPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import HomePage from "./pages/HomePage";
import InjectablesPage from "./pages/InjectablesPage";
import LaserPage from "./pages/LaserPage";
import OurStoryPage from "./pages/OurStoryPage";
import PrpPage from "./pages/PrpPage";
import PricesPage from "./pages/PricesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ShopPage from "./pages/ShopPage";
import SkinPage from "./pages/SkinPage";
import TermsPage from "./pages/TermsPage";
import PreFooterCTA from "./components/layout/PreFooterCTA";
import TreatmentDetailsPage from "./pages/TreatmentDetailsPage";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function PageShell({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  return (
    <>
      <ScrollToTop />
      <AnnouncementBar onVisibleChange={setAnnouncementVisible} />
      <Navbar announcementVisible={announcementVisible} />
      <FloatingCart />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageShell><HomePage /></PageShell>} />
          <Route path="/our-story" element={<PageShell><OurStoryPage /></PageShell>} />
          <Route path="/skin" element={<PageShell><SkinPage /></PageShell>} />
          <Route path="/body" element={<PageShell><BodyPage /></PageShell>} />
          <Route path="/checkout" element={<PageShell><CheckoutPage /></PageShell>} />
          <Route path="/order-confirmation" element={<PageShell><OrderConfirmationPage /></PageShell>} />
          <Route path="/laser" element={<PageShell><LaserPage /></PageShell>} />
          <Route path="/injectables" element={<PageShell><InjectablesPage /></PageShell>} />
          <Route path="/prp" element={<PageShell><PrpPage /></PageShell>} />
          <Route path="/prices" element={<PageShell><PricesPage /></PageShell>} />
          <Route path="/contact" element={<PageShell><ContactPage /></PageShell>} />
          <Route path="/booking" element={<PageShell><BookingPage /></PageShell>} />
          <Route path="/privacy" element={<PageShell><PrivacyPolicyPage /></PageShell>} />
          <Route path="/terms" element={<PageShell><TermsPage /></PageShell>} />
          <Route path="/shop" element={<PageShell><ShopPage /></PageShell>} />
          <Route path="/treatments/:id" element={<PageShell><TreatmentDetailsPage /></PageShell>} />
        </Routes>
      </AnimatePresence>
      <PreFooterCTA />
      <Footer />
    </>
  );
}
