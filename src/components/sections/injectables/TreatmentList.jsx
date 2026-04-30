import TreatmentCard from "../../ui/TreatmentCard";
import { injectablesTreatments } from "../../../data/injectablesTreatments";

export default function TreatmentList() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        {injectablesTreatments.map((treatment, index) => (
          <TreatmentCard key={treatment.id} {...treatment} index={index} />
        ))}
      </div>
    </section>
  );
}
