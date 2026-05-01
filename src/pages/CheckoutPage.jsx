import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { ChevronRight, ShoppingBag, Truck, Store, Calendar, Clock, Lock, CheckCircle2, Banknote, Loader2, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function CheckoutPage() {
  const { items, cartTotal, cartCount, setLastOrder, clearCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState("shipping");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitError("");
    setSubmitting(true);
    const fd = new FormData(e.target);
    try {
      const res = await fetch(`${API_URL}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: fd.get("name"),
          customer_email: fd.get("email"),
          customer_address: deliveryMethod === "shipping" ? fd.get("address") : "Clinic Pickup",
          delivery_method: deliveryMethod,
          payment_method: paymentMethod,
          total: cartTotal,
          items: items.map((item) => ({
            product_name: item.name,
            product_price: parseFloat(String(item.price).replace(/[^0-9.]/g, "")),
            quantity: item.quantity,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.errors?.[0]?.msg || data?.error || "Order failed");
      setLastOrder({
        orderId: data.order?.order_ref,
        date: new Date().toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" }),
        items: [...items],
        total: cartTotal,
        method: deliveryMethod,
        customer: { name: fd.get("name"), email: fd.get("email") },
      });
      clearCart();
      navigate("/order-confirmation");
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
                  onClick={() => setDeliveryMethod("shipping")}
                  className={`flex flex-col items-center gap-4 rounded-3xl border p-8 transition-all ${
                    deliveryMethod === "shipping" ? "border-primary bg-primary text-white shadow-xl" : "border-primary/5 bg-white text-primary hover:border-primary/20"
                  }`}
                >
                  <Truck size={32} />
                  <span className="font-display text-xl">Shipping</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryMethod("pickup")}
                  className={`flex flex-col items-center gap-4 rounded-3xl border p-8 transition-all ${
                    deliveryMethod === "pickup" ? "border-primary bg-primary text-white shadow-xl" : "border-primary/5 bg-white text-primary hover:border-primary/20"
                  }`}
                >
                  <Store size={32} />
                  <span className="font-display text-xl">Clinic Pickup</span>
                </button>
              </div>

              {deliveryMethod === "shipping" ? (
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
                  <p className="text-sm text-primary/90 italic text-center mb-6">Select a convenient time to collect from the clinic.</p>
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
                <h2 className="font-display text-3xl text-primary italic">Payment Method</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cash")}
                  className={`flex flex-col items-center gap-4 rounded-3xl border p-8 transition-all ${
                    paymentMethod === "cash" ? "border-primary bg-primary text-white shadow-xl" : "border-primary/5 bg-white text-primary hover:border-primary/20"
                  }`}
                >
                  <Banknote size={32} />
                  <span className="font-display text-xl">Cash</span>
                  <span className="text-xs opacity-70">Pay at clinic or on delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`flex flex-col items-center gap-4 rounded-3xl border p-8 transition-all ${
                    paymentMethod === "paypal" ? "border-primary bg-primary text-white shadow-xl" : "border-primary/5 bg-white text-primary hover:border-primary/20"
                  }`}
                >
                  <span className="text-3xl font-bold" style={{ fontFamily: "sans-serif" }}>P</span>
                  <span className="font-display text-xl">PayPal</span>
                  <span className="text-xs opacity-70">Pay securely via PayPal</span>
                </button>
              </div>

              {paymentMethod === "cash" && (
                <div className="rounded-2xl bg-stone-50 border border-primary/5 p-6 text-sm text-primary/70">
                  <p>You will pay <strong className="text-primary">${cartTotal.toFixed(2)}</strong> in cash {deliveryMethod === "pickup" ? "when you collect from the clinic" : "upon delivery"}. We will confirm your order by email.</p>
                </div>
              )}
              {paymentMethod === "paypal" && (
                <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 text-sm text-blue-800">
                  <p>After placing your order you will receive a PayPal payment link via email to complete the transaction of <strong>${cartTotal.toFixed(2)}</strong>.</p>
                </div>
              )}
            </section>

            {submitError && (
              <div className="flex items-center gap-3 rounded-2xl bg-red-50 border border-red-100 p-4 text-sm text-red-700">
                <AlertCircle size={16} className="shrink-0" /> {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || items.length === 0}
              className="w-full rounded-full bg-primary py-8 font-bold uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {submitting
                ? <><Loader2 size={20} className="animate-spin" /> Placing Order…</>
                : `Place Order — $${cartTotal.toFixed(2)}`}
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
                  <span className="text-gold italic">{deliveryMethod === "pickup" ? "Free" : "Calculated at next step"}</span>
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
