import SectionLabel from "../../ui/SectionLabel";

export default function BrandIntro({ brand, copy }) {
  return (
    <section className="bg-surface py-14">
      <div className="container-wide">
        <SectionLabel>{brand}</SectionLabel>
        <p className="max-w-3xl font-display text-4xl leading-tight text-primary md:text-5xl">{copy}</p>
      </div>
    </section>
  );
}
