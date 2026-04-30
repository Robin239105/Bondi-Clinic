import TreatmentList from "../components/sections/injectables/TreatmentList";
import ServiceHero from "../components/sections/shared/ServiceHero";
import PaymentMethods from "../components/sections/shared/PaymentMethods";

import { images } from "../data/images";

import SEO from "../components/layout/SEO";

export default function InjectablesPage() {
  return (
    <>
      <SEO 
        title="Cosmetic Injectables"
        description="Premium cosmetic injectables in Bondi. Specialized anti-wrinkle injections and dermal fillers for natural-looking, clinical results."
        url="/injectables"
        keywords="dermal fillers bondi, anti wrinkle injections bondi, lip fillers bondi, cosmetic injectables bondi"
      />
      <ServiceHero 
        eyebrow="Injectables" 
        title="Cosmetic Injectables" 
        copy="Subtle enhancements and clinical precision. Our expert injectors focus on natural results that refresh and restore." 
        image={images.injectables} 
      />
      <TreatmentList />
      <PaymentMethods />
    </>
  );
}
