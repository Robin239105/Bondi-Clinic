import Button from "../../ui/Button";

export default function PromoBanner() {
  return (
    <section className="bg-primary py-14 text-white">
      <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <p className="label-text text-gold-light">Limited treatment offer</p>
          <h2 className="mt-3 font-display text-5xl">PRP 3 Pack Rejuvenation</h2>
        </div>
        <Button href="/prp" variant="outline">View PRP</Button>
      </div>
    </section>
  );
}
