import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Plus, Minus, ArrowRight, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function FloatingCart() {
  const { cartCount, cartTotal, isOpen, setIsOpen, items, updateQuantity, removeFromCart } = useCart();

  useEffect(() => {
    if (cartCount === 0) {
      setIsOpen(false);
    }
  }, [cartCount, setIsOpen]);

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      {/* Floating Button */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -10, 0]
            }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex h-20 w-20 items-center justify-center rounded-full shadow-[0_20px_50px_rgba(26,20,16,0.3)] border border-white/10 transition-colors duration-500 ${
              isOpen ? "bg-gold text-white" : "bg-primary text-white"
            }`}
          >
            {isOpen ? <X size={28} /> : <ShoppingBag size={28} />}
            <motion.div
              key={cartCount}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[10px] font-bold shadow-lg border-2 border-white"
            >
              {cartCount}
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Popover Cart (Small Portion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originX: 0, originY: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute bottom-24 left-0 w-[380px] overflow-hidden rounded-[2.5rem] bg-white shadow-[0_30px_80px_rgba(26,20,16,0.2)] border border-primary/5"
          >
            <div className="flex flex-col max-h-[500px]">
              {/* Header */}
              <div className="flex items-center justify-between bg-stone-50 p-6">
                <h3 className="font-display text-xl text-primary italic">Boutique Selection</h3>
                <span className="text-[10px] uppercase tracking-widest text-primary/70 font-bold">{cartCount} Items</span>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
                {items.length === 0 ? (
                  <div className="py-10 text-center opacity-70">
                    <p className="font-display italic">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 group">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cream">
                          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="flex items-start justify-between">
                            <h4 className="text-sm font-display text-primary leading-tight line-clamp-1">{item.name}</h4>
                            <button onClick={() => removeFromCart(item.id)} className="text-primary/10 hover:text-red-400 transition-colors">
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-gold">{item.price}</span>
                            <div className="flex items-center gap-3 rounded-full bg-cream px-2 py-1">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-primary/70 hover:text-primary"><Minus size={10} /></button>
                              <span className="text-[10px] font-bold w-4 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-primary/70 hover:text-primary"><Plus size={10} /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-primary/5 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-primary/70 font-bold">Subtotal</span>
                  <span className="font-display text-xl text-primary font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <Link 
                  to="/checkout" 
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-center gap-3 rounded-full bg-primary py-5 text-xs font-bold uppercase tracking-widest text-white shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Checkout Now <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <p className="text-[8px] text-center text-primary/60 uppercase tracking-[0.2em]">
                  Secure Clinical Payment
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
