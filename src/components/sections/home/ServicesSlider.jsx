import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { images } from "../../../data/images";
import SectionLabel from "../../ui/SectionLabel";

const services = [
  ["Skin", "/skin", images.facial, "Texture, tone, luminosity and barrier repair."],
  ["Laser", "/laser", images.laser, "Precision device-led work for pigment, redness and hair."],
  ["Injectables", "/injectables", images.injectables, "Consultation-led treatments for balanced results."],
];

const MotionLink = motion(Link);

export default function ServicesSlider() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <SectionLabel>Signature pathways</SectionLabel>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map(([title, href, image, copy]) => (
            <MotionLink
              key={title}
              to={href}
              className="group relative h-[500px] overflow-hidden bg-primary shadow-warm"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 360, damping: 30 }}
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                width="650"
                height="780"
                className="h-full w-full object-cover opacity-88 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,20,16,0.08)_0%,rgba(26,20,16,0.18)_38%,rgba(26,20,16,0.86)_100%)]" />
              <div className="absolute inset-x-4 bottom-4 bg-primary/72 p-5 text-white shadow-[0_18px_48px_rgba(26,20,16,0.22)] backdrop-blur-md">
                <p className="label-text text-gold-light">Treatment pathway</p>
                <h3 className="mt-2 font-display text-5xl">{title}</h3>
                <p className="mt-3 max-w-sm text-base leading-7 text-white">{copy}</p>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
