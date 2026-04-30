import { motion } from "framer-motion";
import SectionLabel from "../../ui/SectionLabel";

export default function PageHero({ eyebrow, title, copy, image }) {
  return (
    <section className="relative min-h-[62vh] overflow-hidden bg-primary text-white">
      <img
        src={image}
        alt=""
        loading="eager"
        width="1600"
        height="900"
        className="absolute inset-0 h-full w-full object-cover opacity-62"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/82 via-primary/38 to-primary/5" />
      <motion.div
        className="container-wide relative z-10 flex min-h-[62vh] flex-col justify-end pb-16 pt-28"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0, 0, 1] }}
      >
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="display-heading max-w-4xl text-6xl md:text-8xl">{title}</h1>
        {copy && <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">{copy}</p>}
      </motion.div>
    </section>
  );
}
