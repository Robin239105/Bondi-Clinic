import TreatmentCard from "../../ui/TreatmentCard";
import { useTreatments } from "../../../hooks/useTreatments";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function TreatmentList() {
  const { treatments, loading, error } = useTreatments("laser");

  const mappedTreatments = treatments.map(t => ({
    id: t.id,
    slug: t.slug,
    name: t.name,
    description: t.description,
    risks: t.risks,
    image: t.image_url ? `${API_URL}${t.image_url}` : null,
    prices: t.prices?.map(p => ({ label: p.label, amount: p.amount, note: p.note })) || [],
    faqs: t.faqs?.map(f => ({ q: f.question, a: f.answer })) || []
  }));

  if (loading) {
    return (
      <section className="section-pad bg-cream">
        <div className="container-wide space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 animate-pulse">
              <div className="bg-stone-200 h-64 rounded-2xl mb-4"></div>
              <div className="bg-stone-200 h-8 rounded w-1/2 mb-4"></div>
              <div className="bg-stone-200 h-4 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-pad bg-cream">
        <div className="container-wide text-center">
          <p className="text-red-600">Failed to load treatments. Please try again.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        {mappedTreatments.map((treatment, index) => (
          <TreatmentCard key={treatment.id} {...treatment} index={index} />
        ))}
      </div>
    </section>
  );
}
