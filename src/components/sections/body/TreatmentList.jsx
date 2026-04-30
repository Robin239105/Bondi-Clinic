import TreatmentCard from "../../ui/TreatmentCard";
import { bodyTreatments } from "../../../data/bodyTreatments";

export default function TreatmentList() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        {bodyTreatments.map((treatment, index) => (
          <TreatmentCard key={treatment.id} {...treatment} index={index} />
        ))}
      </div>
    </section>
  );
}
