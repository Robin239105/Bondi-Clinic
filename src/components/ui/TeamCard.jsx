import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function TeamCard({ member, reverse = false }) {
  return (
    <motion.article
      className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-24 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.25, 0, 0, 1] }}
    >
      {/* Image Container with Prestige Frame */}
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-transparent rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-stone-100 shadow-2xl">
          <motion.img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.25, 0, 0, 1] }}
          />
        </div>
        
        {/* Floating Expertise Badge */}
        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-white p-1 shadow-xl">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-primary/5 text-center">
            <div className="text-[8px] uppercase tracking-widest text-primary/70 font-bold">Expert</div>
            <div className="font-display text-sm italic text-gold">Bondi Clinic</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        {/* Ambient background glow */}
        <div className="absolute -left-20 -top-20 h-64 w-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
        
        <SectionLabel>{member.role}</SectionLabel>
        <h3 className="font-display mt-6 text-6xl leading-tight text-primary md:text-7xl">
          {member.name.split(' ').map((word, i) => (
            <span key={i} className={i === member.name.split(' ').length - 1 ? "font-display italic text-gold block md:inline" : ""}>
              {word}{' '}
            </span>
          ))}
        </h3>
        
        <div className="mt-4 flex items-center gap-4">
          <div className="h-px w-8 bg-gold" />
          <p className="label-text text-gold font-bold">{member.credential}</p>
        </div>

        <p className="mt-8 text-xl leading-relaxed text-primary/90 font-normal">
          {member.bio}
        </p>

        <div className="mt-12 flex gap-8">
          <div className="text-center">
            <p className="text-2xl font-display text-primary">{member.yearsExp}</p>
            <p className="text-[10px] uppercase tracking-widest text-primary/70 mt-1">Years Experience</p>
          </div>
          <div className="h-10 w-px bg-primary/10" />
          <div className="text-center">
            <p className="text-2xl font-display text-primary">{member.expertise}</p>
            <p className="text-[10px] uppercase tracking-widest text-primary/70 mt-1">Specialization</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
