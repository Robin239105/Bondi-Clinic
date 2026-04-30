import { images } from "../../../data/images";
import SectionLabel from "../../ui/SectionLabel";
import { Sparkles, Zap, Droplets, Target, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const treatments = [
  {
    title: "Laser Genesis",
    description: "Gentle heat to stimulate collagen.",
    Icon: Sparkles,
    bg: "bg-gold/10",
    span: "col-span-1 row-span-1",
    to: "/laser"
  },
  {
    title: "Pigment Correction",
    image: images.laser,
    span: "col-span-1 row-span-2",
    to: "/laser"
  },
  {
    title: "PicoSure Pro",
    description: "The gold standard in laser technology.",
    Icon: Zap,
    bg: "bg-gold/10",
    span: "col-span-1 row-span-1",
    to: "/laser"
  },
  {
    title: "Redness Removal",
    image: images.facial,
    span: "col-span-1 row-span-1",
    to: "/laser"
  },
  {
    title: "Skin Texture",
    description: "Smooth and refine your complexion.",
    Icon: Droplets,
    bg: "bg-primary/5",
    span: "col-span-1 row-span-1",
    to: "/skin"
  },
  {
    title: "Hair Reduction",
    description: "Long-lasting smooth results.",
    Icon: Target,
    bg: "bg-cream",
    span: "col-span-2 row-span-1",
    to: "/laser"
  },
];

export default function LaserGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel>Technology & Innovation</SectionLabel>
          <h2 className="display-heading mt-6 max-w-2xl text-4xl leading-tight text-primary md:text-5xl">
            Where Care Meets <span className="font-display italic text-gold">Innovation</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-primary/90">
            At Bondi Skin Clinic, we use cutting-edge technology to deliver precise results with clinical excellence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {treatments.map((t, i) => (
            <Link
              key={i}
              to={t.to}
              className={`group relative overflow-hidden rounded-[2.5rem] transition-all hover:scale-[1.02] shadow-sm hover:shadow-xl ${t.bg || "bg-stone-100"} ${
                t.span?.includes('col-span-2') ? 'md:col-span-2' : ''
              } ${
                t.span?.includes('row-span-2') ? 'lg:row-span-2' : ''
              }`}
            >
              {t.image ? (
                <div className="h-64 md:h-full w-full relative">
                  <img src={t.image} alt={t.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-display text-3xl text-white">{t.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col p-10 min-h-[320px]">
                  <div className={`${t.bg === 'bg-gold/10' ? 'bg-white/50' : 'bg-primary/5'} flex h-14 w-14 items-center justify-center rounded-2xl text-primary`}>
                    <t.Icon size={26} />
                  </div>
                  <h3 className="mt-8 font-display text-4xl font-bold text-primary leading-none">{t.title}</h3>
                  <p className="mt-6 text-primary/90 leading-relaxed font-normal">{t.description}</p>
                  <div className="mt-auto pt-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-all group-hover:translate-x-2 group-hover:bg-gold">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
