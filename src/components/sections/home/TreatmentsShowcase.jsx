import { Link } from "react-router-dom";
import { images } from "../../../data/images";

const cards = [
  ["Skin Needling", "/skin", images.facial],
  ["Injectables", "/injectables", images.injectables],
  ["PRP", "/prp", images.prp],
  ["Body", "/body", images.body],
  ["Shop", "/shop", images.shop],
];

export default function TreatmentsShowcase() {
  return (
    <section className="bg-surface py-12 lg:py-20">
      <div className="flex gap-4 overflow-x-auto px-5 no-scrollbar pb-6 lg:gap-8 lg:px-12">
        {cards.map(([title, href, image]) => (
          <Link key={title} to={href} className="relative h-[400px] min-w-[280px] lg:h-[500px] lg:min-w-[400px] overflow-hidden rounded-[2rem] shadow-warm transition-transform hover:scale-[1.02]">
            <img src={image} alt={title} loading="lazy" width="620" height="820" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <h3 className="absolute bottom-8 left-8 font-display text-5xl text-white">{title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
