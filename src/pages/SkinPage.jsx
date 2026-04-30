import TreatmentList from "../components/sections/skin/TreatmentList";
import ServiceHero from "../components/sections/shared/ServiceHero";
import PaymentMethods from "../components/sections/shared/PaymentMethods";
import { images } from "../data/images";

import SEO from "../components/layout/SEO";

export default function SkinPage() {
  return (
    <>
      <SEO 
        title="Skin Treatments"
        description="Expert skin rejuvenation treatments in Bondi. From Tixel to Jet Plasma, our advanced clinical treatments deliver visible results for tone, texture, and clarity."
        url="/skin"
        keywords="skin treatments bondi, skin rejuvenation bondi, clinical facials bondi, tixel skin bondi"
      />
      <ServiceHero 
        eyebrow="Skin" 
        title="Skin Rejuvenation Treatments" 
        copy="Texture, tone, clarity and glow with a tailored treatment plan designed by Bondi's leading skin experts." 
        image={images.facial} 
      />
      <TreatmentList />
      <PaymentMethods />
    </>
  );
}
