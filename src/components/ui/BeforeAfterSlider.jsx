import { MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";

export default function BeforeAfterSlider({ before, after }) {
  const ref = useRef(null);
  const [position, setPosition] = useState(50);

  function updatePosition(event) {
    const bounds = ref.current.getBoundingClientRect();
    const pointer = event.touches ? event.touches[0].clientX : event.clientX;
    const next = ((pointer - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] overflow-hidden bg-surface shadow-warm"
      onMouseMove={(event) => event.buttons === 1 && updatePosition(event)}
      onTouchMove={updatePosition}
    >
      <img
        src={after}
        alt="After treatment"
        loading="lazy"
        width="700"
        height="875"
        className="h-full w-full object-cover"
      />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={before}
          alt="Before treatment"
          loading="lazy"
          width="700"
          height="875"
          className="h-full w-[min(80vw,700px)] max-w-none object-cover"
        />
      </div>
      <span className="absolute left-4 top-4 bg-white/85 px-3 py-2 label-text text-primary">Before</span>
      <span className="absolute right-4 top-4 bg-white/85 px-3 py-2 label-text text-primary">After</span>
      <button
        type="button"
        className="absolute top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold text-white shadow-warm"
        style={{ left: `${position}%` }}
        onMouseDown={updatePosition}
        onTouchStart={updatePosition}
        aria-label="Drag before and after comparison"
      >
        <MoveHorizontal className="mx-auto" size={21} aria-hidden="true" />
      </button>
      <div
        className="absolute inset-y-0 w-px -translate-x-1/2 bg-white"
        style={{ left: `${position}%` }}
      />
    </div>
  );
}
