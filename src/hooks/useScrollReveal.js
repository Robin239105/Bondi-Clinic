import { fadeUp } from "../lib/motion";

export function useScrollReveal(amount = 0.15) {
  return {
    variants: fadeUp,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount },
  };
}
