import TreatmentList from "../components/sections/prp/TreatmentList";
import ServiceHero from "../components/sections/shared/ServiceHero";
import PaymentMethods from "../components/sections/shared/PaymentMethods";
import { images } from "../data/images";

import SEO from "../components/layout/SEO";

export default function PrpPage() {
  return (
    <>
      <SEO 
        title="PRP Therapy"
        description="Platelet Rich Plasma (PRP) therapy in Bondi. Natural skin rejuvenation and hair loss treatments using your own healing factors."
        url="/prp"
        keywords="prp therapy bondi, platelet rich plasma bondi, prp for hair loss, prp skin rejuvenation"
      />
      <ServiceHero 
        eyebrow="PRP" 
        title="Platelet-Rich Plasma (PRP)" 
        copy="PRP is a treatment where blood is drawn from the patient's arm, spun in a centrifuge to separate the plasma, and then applied or injected back into the target area to stimulate collagen production and cell renewal." 
        image={images.prp} 
      />
      <TreatmentList />
      <PaymentMethods />
    </>
  );
}
