import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { transition } from "../../lib/motion";

const variants = {
  primary: "bg-primary text-white border border-primary hover:bg-gold hover:border-gold",
  secondary: "bg-gold text-white border border-gold hover:bg-sand hover:border-sand",
  outline: "bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
  "outline-white": "bg-transparent text-white border border-white hover:bg-white hover:text-primary",
  white: "bg-white text-primary border border-white hover:bg-gold hover:text-white hover:border-gold",
  ghost: "bg-transparent text-primary border border-transparent",
};

const sizes = {
  sm: "px-6 py-3 text-[10px] font-bold tracking-[0.2em]",
  md: "px-8 py-4 text-[11px] font-bold tracking-[0.25em]",
  lg: "px-12 py-5 text-[13px] font-bold tracking-[0.3em]",
  xl: "px-14 py-6 text-[14px] font-bold tracking-[0.35em]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon = true,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-4 rounded-full label-text whitespace-nowrap transition-colors ${variants[variant]} ${sizes[size]} ${className}`;
  const isInternal = href?.startsWith("/");
  const MotionTag = href ? motion(isInternal ? Link : "a") : motion.button;

  return (
    <MotionTag
      {...(href ? (isInternal ? { to: href } : { href }) : {})}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={transition.spring}
      {...props}
    >
      {children}
      {icon && <ArrowRight size={16} aria-hidden="true" />}
    </MotionTag>
  );
}
