import { motion } from "framer-motion";

export default function ServiceHero({ eyebrow, title, copy }) {
  return (
    <section className="relative bg-cream pt-40 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
      
      <div className="container-wide relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold mb-4 block">
              {eyebrow}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-primary leading-tight tracking-tight">
              {title.split(' ').map((word, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "italic text-gold" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-px bg-gold/30 mx-auto mt-8 mb-8"
            />
            <p className="text-lg md:text-xl text-primary/80 font-normal italic max-w-2xl mx-auto">
              {copy}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
