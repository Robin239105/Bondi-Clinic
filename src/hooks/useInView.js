import { useInView as useFramerInView } from "framer-motion";

export function useInView(ref, options) {
  return useFramerInView(ref, { once: true, amount: 0.2, ...options });
}
