import { images } from "../../../data/images";
import SectionLabel from "../../ui/SectionLabel";
import Button from "../../ui/Button";

export default function AboutSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <div className="grid grid-cols-[1fr_0.72fr] gap-4 lg:gap-6">
          <img src={images.clinic} alt="Bondi Skin Clinic treatment room" loading="lazy" width="900" height="1100" className="aspect-[4/5] w-full object-cover shadow-warm rounded-[2rem] lg:rounded-[3rem]" />
          <img src={images.treatmentRoom} alt="Clinical treatment preparation" loading="lazy" width="650" height="900" className="mt-10 lg:mt-14 aspect-[3/5] w-full object-cover shadow-warm rounded-[1.5rem] lg:rounded-[2.5rem]" />
        </div>
        <div className="max-w-xl">
          <SectionLabel>About Bondi Skin Clinic</SectionLabel>
          <h2 className="display-heading text-[3.5rem] leading-[1.1] text-primary sm:text-6xl lg:text-[7.5rem]">Clinical care with a <span className="italic text-gold">softer</span> touch.</h2>
          <p className="mt-8 text-lg leading-relaxed text-primary/90 font-normal">We pair advanced treatment technology with measured consultation, gentle communication and treatment plans that respect the face, skin and person in front of us.</p>
          <div className="mt-10">
            <Button href="/our-story" variant="outline">Read Our Story</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
