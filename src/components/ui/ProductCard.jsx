import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Plus } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [imgError, setImgError] = useState(false);
  const fallbackImg = "/images/Why_Cosmedix.webp";

  return (
    <article className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm transition-all hover:shadow-2xl hover:-translate-y-1 border border-primary/5">
      {/* Image Area */}
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-50">
        <motion.img
          src={imgError ? fallbackImg : product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
          onError={() => setImgError(true)}
        />
        
        {/* Subtle category badge on image */}
        <div className="absolute top-6 left-6">
          <span className="rounded-full bg-white/90 px-4 py-1.5 text-[9px] uppercase tracking-[0.2em] text-primary/90 backdrop-blur-sm font-bold border border-primary/5">
            {product.category}
          </span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex flex-1 flex-col p-10">
        <div className="flex items-center gap-2">
          <div className="h-px w-4 bg-gold/30" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-black">{product.brand || "Boutique"}</span>
        </div>
        
        <h3 className="mt-4 font-display text-2xl text-primary leading-tight line-clamp-2 min-h-[3.5rem] group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        
        {product.description && (
          <p className="mt-4 text-sm text-primary/70 line-clamp-2 leading-relaxed font-normal italic">
            {product.description}
          </p>
        )}
        
        <div className="mt-auto pt-10 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-primary/50 font-bold">Investment</span>
            <span className="font-bold text-3xl text-primary tracking-tighter">{product.price}</span>
          </div>
          
          <motion.button
            onClick={() => addToCart(product)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="h-16 w-16 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_15px_35px_rgba(26,20,16,0.2)] transition-all hover:bg-gold"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={28} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>
    </article>
  );
}
