import TreatmentCard from "../../ui/TreatmentCard";
import { prpTreatments } from "../../../data/prpTreatments";

export default function TreatmentList() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        {prpTreatments.map((treatment, index) => (
          <TreatmentCard key={treatment.id} {...treatment} index={index} />
        ))}
      </div>
    </section>
  );
}
