import SectionLabel from "../../ui/SectionLabel";

const brands = [
  {
    name: "Aspect DR",
    copy: "High-performance formulas selected for visible skin support and daily routines.",
    bg: "bg-stone-50",
    color: "text-primary"
  },
  {
    name: "Cosmedix",
    copy: "Thoughtful cosmeceutical care for barrier support, radiance and treatment maintenance.",
    bg: "bg-gold/5",
    color: "text-gold"
  }
];

export default function BrandShowcase() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="grid gap-8 lg:grid-cols-2">
          {brands.map((brand) => (
            <div key={brand.name} className={`${brand.bg} rounded-[3rem] p-12 lg:p-20 transition-transform hover:-translate-y-1`}>
              <SectionLabel>{brand.name}</SectionLabel>
              <h2 className={`mt-8 font-display text-4xl leading-tight md:text-5xl ${brand.color}`}>
                {brand.copy}
              </h2>
              <div className="mt-12 h-1 w-20 bg-primary/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
