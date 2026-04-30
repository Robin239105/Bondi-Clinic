import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function AnnouncementBar({ onVisibleChange }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const next = localStorage.getItem("bondi-announcement-dismissed") !== "true";
    setVisible(next);
    onVisibleChange?.(next);
  }, [onVisibleChange]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-9 items-center overflow-hidden bg-primary text-white">
      {/* Marquee Content */}
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-20 pr-20"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="label-text text-[0.65rem] tracking-[0.3em] font-bold uppercase">
              Free shipping on orders over $100 — Bondi Skin Clinic Clinical Cosmeceuticals
            </span>
          ))}
        </motion.div>
      </div>

      {/* Dismiss Button - Floating right with background blur for legibility */}
      <div className="absolute right-0 top-0 bottom-0 flex items-center px-4 bg-primary/80 backdrop-blur-sm">
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => {
            localStorage.setItem("bondi-announcement-dismissed", "true");
            setVisible(false);
            onVisibleChange?.(false);
          }}
          className="hover:text-gold transition-colors"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
}
