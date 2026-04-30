import TreatmentList from "../components/sections/body/TreatmentList";
import ServiceHero from "../components/sections/shared/ServiceHero";
import PaymentMethods from "../components/sections/shared/PaymentMethods";
import { images } from "../data/images";

import SEO from "../components/layout/SEO";

export default function BodyPage() {
  return (
    <>
      <SEO 
        title="Body Treatments"
        description="Advanced body sculpting and contouring in Bondi. Non-invasive treatments for fat reduction, muscle toning, and skin tightening."
        url="/body"
        keywords="body sculpting bondi, fat reduction bondi, muscle toning bondi, skin tightening bondi"
      />
      <ServiceHero 
        eyebrow="Body" 
        title="Fat Reduction and Muscle Toning" 
        copy="Advanced body contouring and muscle sculpting solutions. We use clinically proven techniques to help you reach your body goals with confidence." 
        image={images.body} 
      />
      <TreatmentList />
      <PaymentMethods />
    </>
  );
}
