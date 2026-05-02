import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative h-12 w-12">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/10"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="font-display text-sm text-primary/60 tracking-wide">
          Bondi Skin Clinic
        </span>
      </motion.div>
    </div>
  );
}
