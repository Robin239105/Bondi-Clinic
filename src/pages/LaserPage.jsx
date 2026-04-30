import TreatmentList from "../components/sections/laser/TreatmentList";
import ServiceHero from "../components/sections/shared/ServiceHero";
import PaymentMethods from "../components/sections/shared/PaymentMethods";

import { images } from "../data/images";

import SEO from "../components/layout/SEO";

export default function LaserPage() {
  return (
    <>
      <SEO 
        title="Laser Treatments"
        description="State-of-the-art laser treatments in Bondi. From tattoo removal to skin rejuvenation, our advanced laser technology delivers exceptional results."
        url="/laser"
        keywords="laser clinic bondi, laser tattoo removal bondi, pico laser bondi, laser skin rejuvenation"
      />
      <ServiceHero 
        eyebrow="Laser" 
        title="Advanced Laser Treatments" 
        copy="Precision results with clinical excellence. We use the gold standard in laser technology to target pigment, redness, and texture." 
        image={images.laser} 
      />
      <TreatmentList />
      <PaymentMethods />
    </>
  );
}
