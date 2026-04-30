export const transition = {
  fast: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  medium: { duration: 0.35, ease: [0.25, 0, 0, 1] },
  spring: { type: "spring", stiffness: 400, damping: 30 },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transition.medium },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.fast },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
