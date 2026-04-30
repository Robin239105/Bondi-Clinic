import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { ChevronRight, CreditCard, ShoppingBag, Truck, Store, Calendar, Clock, Lock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { items, cartTotal, cartCount, setLastOrder, clearCart } = useCart();
  const [method, setMethod] = useState("shipping"); // shipping or pickup
  const [cardData, setCardData] = useState({ number: "", expiry: "", cvc: "" });
  const navigate = useNavigate();

  const getCardType = (number) => {
    const cleanNumber = number.replace(/\s/g, "");
    if (/^4/.test(cleanNumber)) return "visa";
    if (/^5[1-5]/.test(cleanNumber)) return "mastercard";
    if (/^3[47]/.test(cleanNumber)) return "amex";
    return null;
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    const formatted = value.match(/.{1,4}/g)?.join(" ") || "";
    setCardData({ ...cardData, number: formatted });
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length > 2) {
      value = value.slice(0, 2) + " / " + value.slice(2);
    }
    setCardData({ ...cardData, expiry: value });
  };

  const handleCvcChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    const limit = getCardType(cardData.number) === "amex" ? 4 : 3;
    if (value.length > limit) value = value.slice(0, limit);
    setCardData({ ...cardData, cvc: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderData = {
      orderId: `BSC-${Math.floor(Math.random() * 90000) + 10000}`,
      date: new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }),
      items: [...items],
      total: cartTotal,
      method,
      customer: {
        name: formData.get("name"),
        email: formData.get("email"),
        address: method === "shipping" ? formData.get("address") : "Clinic Pickup",
      }
    };
    
    setLastOrder(orderData);
    clearCart();
    navigate("/order-confirmation");
  };

  return (
    <div className="bg-cream min-h-screen pt-48 pb-32">
      <div className="container-wide">
        <div className="mb-16">
          <h1 className="display-heading text-6xl text-primary">Secure <span className="italic text-gold">Checkout</span></h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-primary/70 font-bold uppercase tracking-widest">
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <ChevronRight size={14} />
            <span className="text-primary">Checkout</span>
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
          {/* Main Checkout Form */}
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* 1. Contact Information */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-display text-lg">1</div>
                <h2 className="font-display text-3xl text-primary italic">Contact Information</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Full Name</label>
                  <input required name="name" type="text" placeholder="Sarah Jenkins" className="w-full rounded-2xl border border-primary/5 bg-white p-6 focus:border-primary transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Email Address</label>
                  <input required name="email" type="email" placeholder="sarah@example.com" className="w-full rounded-2xl border border-primary/5 bg-white p-6 focus:border-primary transition-all outline-none" />
                </div>
              </div>
            </section>

            {/* 2. Delivery Method */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-display text-lg">2</div>
                <h2 className="font-display text-3xl text-primary italic">Delivery Method</h2>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setMethod("shipping")}
                  className={`flex flex-col items-center gap-4 rounded-3xl border p-8 transition-all ${
                    method === "shipping" ? "border-primary bg-primary text-white shadow-xl" : "border-primary/5 bg-white text-primary hover:border-primary/20"
                  }`}
                >
                  <Truck size={32} />
                  <span className="font-display text-xl">Shipping</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMethod("pickup")}
                  className={`flex flex-col items-center gap-4 rounded-3xl border p-8 transition-all ${
                    method === "pickup" ? "border-primary bg-primary text-white shadow-xl" : "border-primary/5 bg-white text-primary hover:border-primary/20"
                  }`}
                >
                  <Store size={32} />
                  <span className="font-display text-xl">Clinic Pickup</span>
                </button>
              </div>

              {method === "shipping" ? (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Shipping Address</label>
                    <input required name="address" type="text" placeholder="123 Bondi Rd" className="w-full rounded-2xl border border-primary/5 bg-white p-6 focus:border-primary transition-all outline-none" />
                  </div>
                  <div className="grid gap-6 md:grid-cols-3">
                    <input required type="text" placeholder="Suburb" className="w-full rounded-2xl border border-primary/5 bg-white p-6 focus:border-primary transition-all outline-none" />
                    <input required type="text" placeholder="State" className="w-full rounded-2xl border border-primary/5 bg-white p-6 focus:border-primary transition-all outline-none" />
                    <input required type="text" placeholder="Postcode" className="w-full rounded-2xl border border-primary/5 bg-white p-6 focus:border-primary transition-all outline-none" />
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500 rounded-[2.5rem] bg-stone-100 p-8">
                  <p className="text-sm text-primary/90 italic text-center mb-6">Select a convenient clinical time for collection.</p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70 flex items-center gap-2"><Calendar size={12} /> Preferred Date</label>
                      <input required type="date" className="w-full rounded-2xl border border-primary/5 bg-white p-6 focus:border-primary transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70 flex items-center gap-2"><Clock size={12} /> Preferred Time</label>
                      <input required type="time" className="w-full rounded-2xl border border-primary/5 bg-white p-6 focus:border-primary transition-all outline-none" />
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* 3. Payment */}
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-display text-lg">3</div>
                <h2 className="font-display text-3xl text-primary italic">Secure Payment</h2>
              </div>
              
              <div className="rounded-[2.5rem] bg-white p-8 shadow-sm border border-primary/5 space-y-8">
                <div className="flex items-center justify-between border-b border-primary/5 pb-6">
                  <div className="flex items-center gap-4">
                    <CreditCard className="text-gold" size={24} />
                    <span className="font-display text-xl">Credit or Debit Card</span>
                  </div>
                  <div className="flex gap-3">
                    <div className={`px-2 py-1 rounded border text-[10px] font-bold transition-all ${getCardType(cardData.number) === "visa" ? "border-blue-600 text-blue-600 bg-blue-50" : "border-stone-100 text-stone-300"}`}>VISA</div>
                    <div className={`px-2 py-1 rounded border text-[10px] font-bold transition-all ${getCardType(cardData.number) === "mastercard" ? "border-red-500 text-red-500 bg-red-50" : "border-stone-100 text-stone-300"}`}>MC</div>
                    <div className={`px-2 py-1 rounded border text-[10px] font-bold transition-all ${getCardType(cardData.number) === "amex" ? "border-blue-400 text-blue-400 bg-blue-50" : "border-stone-100 text-stone-300"}`}>AMEX</div>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Card Number</label>
                    <div className="relative">
                      <input 
                        required 
                        type="text" 
                        value={cardData.number}
                        onChange={handleCardNumberChange}
                        placeholder="0000 0000 0000 0000" 
                        className="w-full rounded-2xl border border-primary/5 bg-cream/20 p-6 pr-14 focus:border-primary transition-all outline-none font-mono" 
                      />
                      <Lock className="absolute right-6 top-1/2 -translate-y-1/2 text-primary/50" size={18} />
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Expiry Date</label>
                      <input 
                        required 
                        type="text" 
                        value={cardData.expiry}
                        onChange={handleExpiryChange}
                        placeholder="MM / YY" 
                        className="w-full rounded-2xl border border-primary/5 bg-cream/20 p-6 focus:border-primary transition-all outline-none font-mono" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">CVC Code</label>
                      <input 
                        required 
                        type="text" 
                        value={cardData.cvc}
                        onChange={handleCvcChange}
                        placeholder="123" 
                        className="w-full rounded-2xl border border-primary/5 bg-cream/20 p-6 focus:border-primary transition-all outline-none font-mono" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <button type="submit" className="w-full rounded-full bg-primary py-8 font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
              Complete Selection — ${cartTotal.toFixed(2)}
            </button>
          </form>

          {/* Order Summary Sidebar */}
          <aside className="space-y-8">
            <div className="sticky top-48 rounded-[2.5rem] bg-white p-10 shadow-xl border border-primary/5">
              <h3 className="font-display text-2xl text-primary italic mb-10 flex items-center justify-between">
                Order Summary
                <span className="text-xs uppercase tracking-widest text-primary/70 font-bold">{cartCount} Items</span>
              </h3>

              <div className="space-y-6 max-h-[300px] overflow-y-auto no-scrollbar mb-10">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cream">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <h4 className="text-sm font-display text-primary truncate max-w-[150px]">{item.name}</h4>
                      <p className="text-xs text-primary/70">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-primary">{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-10 border-t border-primary/5">
                <div className="flex justify-between text-sm">
                  <span className="text-primary/70 uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="text-primary font-bold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-primary/70 uppercase tracking-widest font-bold">Shipping</span>
                  <span className="text-gold italic">{method === "pickup" ? "Free" : "Calculated at next step"}</span>
                </div>
                <div className="flex justify-between pt-6 border-t border-primary/5">
                  <span className="font-display text-2xl text-primary">Total</span>
                  <span className="font-display text-2xl text-primary font-bold">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mt-10 p-6 rounded-2xl bg-stone-50 border border-primary/5 flex items-center gap-4">
                <Lock size={18} className="text-green-600" />
                <p className="text-[10px] uppercase tracking-widest text-primary/70 font-bold leading-relaxed">
                  Secure checkout powered by Bondi Clinical Systems
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
