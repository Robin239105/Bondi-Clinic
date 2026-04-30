const descriptions = ["Skin resurfacing", "Laser rejuvenation", "PRP support", "Body treatments", "Cosmetic injectables", "Clinical skincare"];

export default function ServiceDescriptions() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-wide grid gap-6 md:grid-cols-3">
        {descriptions.map((item) => (
          <div key={item}>
            <h3 className="font-display text-4xl text-primary">{item}</h3>
            <p className="mt-3 leading-7 text-text">A consultation-led pathway shaped around skin history, goals and appropriate treatment cadence.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
