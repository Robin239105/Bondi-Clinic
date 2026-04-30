import AboutSection from "../components/sections/home/AboutSection";
import BeforeAfterSection from "../components/sections/home/BeforeAfterSection";
import GalleryStrip from "../components/sections/home/GalleryStrip";
import HeroSection from "../components/sections/home/HeroSection";
import InstagramStrip from "../components/sections/home/InstagramStrip";
import LaserGrid from "../components/sections/home/LaserGrid";
import ProductCarousel from "../components/sections/home/ProductCarousel";
import PromoBanner from "../components/sections/home/PromoBanner";
import ServiceDescriptions from "../components/sections/home/ServiceDescriptions";
import ServicesSlider from "../components/sections/home/ServicesSlider";
import ShopFeature from "../components/sections/home/ShopFeature";
import TeamSection from "../components/sections/home/TeamSection";
import TreatmentsShowcase from "../components/sections/home/TreatmentsShowcase";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";

import SEO from "../components/layout/SEO";

export default function HomePage() {
  return (
    <>
      <SEO 
        url="/"
        description="Bondi's premier clinical cosmeceutical clinic. Advanced skin, body, laser, and injectable treatments in Bondi, Australia. Expert care for every layer of skin."
      />
      <HeroSection />
      <ServicesSlider />
      <AboutSection />
      <WhyChooseUs />
      <TeamSection />
      <LaserGrid />
      <TreatmentsShowcase />
      <BeforeAfterSection />
      <ServiceDescriptions />
      <ShopFeature />
      <ProductCarousel />
    </>
  );
}
