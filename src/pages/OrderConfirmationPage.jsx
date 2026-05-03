import { motion } from "framer-motion";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { CheckCircle2, Download, Printer, MapPin, Mail, Phone, Calendar, Clock, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../data/images";
import Button from "../components/ui/Button";

export default function OrderConfirmationPage() {
  const { lastOrder } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // If no order found, redirect back to shop
    if (!lastOrder) {
      navigate("/shop");
      return;
    }
  }, [lastOrder, navigate]);

  if (!lastOrder) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-cream min-h-screen pt-48 pb-32">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mx-auto mb-8 h-24 w-24 rounded-full bg-gold/10 flex items-center justify-center text-gold"
            >
              <CheckCircle2 size={48} />
            </motion.div>
            <h1 className="font-display text-6xl text-primary leading-tight">Thank You, <span className="italic text-gold">{lastOrder.customer.name.split(' ')[0]}</span></h1>
            <p className="mt-6 text-xl text-primary/80 font-normal">
              Your selection is confirmed. Order <span className="font-bold text-primary">#{lastOrder.orderId}</span> is being prepared.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Order Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[3rem] bg-white p-10 shadow-xl border border-primary/5 space-y-10"
            >
              <div>
                <h3 className="font-display text-2xl text-primary italic mb-6">Order Summary</h3>
                <div className="space-y-6">
                  {lastOrder.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-cream">
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex flex-1 flex-col justify-center">
                        <h4 className="text-sm font-display text-primary">{item.name}</h4>
                        <p className="text-xs text-primary/70">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-bold text-primary">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-primary/5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-primary/70 uppercase tracking-widest font-bold">Subtotal</span>
                  <span className="text-primary font-bold">${lastOrder.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-6 border-t border-primary/5">
                  <span className="font-display text-3xl text-primary">Total Paid</span>
                  <span className="font-display text-3xl text-primary font-bold">${lastOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>

            {/* Delivery/Pickup Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="rounded-[3rem] bg-primary p-10 text-white shadow-xl">
                <h3 className="font-display text-2xl italic mb-8">Delivery Information</h3>
                
                {lastOrder.method === "pickup" ? (
                  <div className="space-y-8">
                    <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                      <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest opacity-90">Pickup Location</p>
                        <p className="text-sm mt-1">108 Ebley St, Bondi Junction NSW 2022</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                      <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                        <Calendar size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest opacity-90">Clinical Collection Time</p>
                        <p className="text-sm mt-1">Ready for collection from 10:00am</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <MapPin className="text-gold" size={20} />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest opacity-90">Shipping to</p>
                        <p className="mt-1">{lastOrder.customer.address}</p>
                      </div>
                    </div>
                    <p className="text-sm italic opacity-90">Estimated arrival: 2-3 business days via Bondi Express.</p>
                  </div>
                )}
              </div>

              <div className="rounded-[3rem] bg-white p-10 shadow-sm border border-primary/5">
                <h3 className="font-display text-xl text-primary italic mb-6">Support & Inquiries</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-primary/90">
                    <Phone size={16} className="text-gold" />
                    <span>+61 2 9387 1171</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-primary/90">
                    <Mail size={16} className="text-gold" />
                    <span>info@bondiskinclinic.com.au</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handlePrint}
                  className="flex-1 flex items-center justify-center gap-3 rounded-full bg-white border border-primary/10 py-6 text-xs font-bold uppercase tracking-widest text-primary hover:bg-stone-50 transition-all shadow-sm"
                >
                  <Printer size={18} /> Print Invoice
                </button>
                <button 
                  onClick={handlePrint}
                  className="flex-1 flex items-center justify-center gap-3 rounded-full bg-gold py-6 text-xs font-bold uppercase tracking-widest text-white hover:opacity-90 transition-all shadow-lg"
                >
                  <Download size={18} /> Download PDF
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* HIDDEN PRINTABLE INVOICE */}
      <div className="hidden print:block print-content">
        <div className="p-10 bg-white text-primary max-w-[800px] mx-auto border border-stone-100 min-h-screen flex flex-col">
          <div className="flex justify-between items-start mb-10">
            <div className="flex items-center gap-6">
              <img src="/images/logo.jpg" alt="Bondi Skin Clinic" className="h-20 w-auto object-contain" />
              <div>
                <h1 className="font-display text-3xl">Bondi Skin Clinic</h1>
                <p className="text-[8px] uppercase tracking-widest text-primary/70 font-bold">Clinical Aesthetic Boutique</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="font-display text-2xl italic text-gold">TAX INVOICE</h2>
              <p className="mt-2 text-sm font-bold">Order #{lastOrder.orderId}</p>
              <p className="text-xs opacity-80">{lastOrder.date}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-10 border-y border-stone-100 py-6">
            <div>
              <p className="text-[8px] uppercase tracking-widest text-primary/70 font-bold mb-2">Patient Information</p>
              <p className="font-display text-xl">{lastOrder.customer.name}</p>
              <p className="text-xs opacity-90 mt-1">{lastOrder.customer.email}</p>
              <p className="text-xs opacity-90">{lastOrder.customer.address}</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] uppercase tracking-widest text-primary/70 font-bold mb-2">Clinic Location</p>
              <p className="font-display text-xl italic">Bondi Skin Clinic</p>
              <p className="text-xs opacity-90 mt-1">108 Ebley St, Bondi Junction NSW 2022</p>
              <p className="text-xs opacity-90">Tel: +61 2 9387 1171</p>
            </div>
          </div>

          <table className="w-full mb-10 flex-1">
            <thead>
              <tr className="border-b border-stone-100">
                <th className="text-left py-4 text-[8px] uppercase tracking-widest text-primary/70">Treatment / Product</th>
                <th className="text-center py-4 text-[8px] uppercase tracking-widest text-primary/70">Qty</th>
                <th className="text-right py-4 text-[8px] uppercase tracking-widest text-primary/70">Investment</th>
              </tr>
            </thead>
            <tbody>
              {lastOrder.items.map((item) => (
                <tr key={item.id} className="border-b border-stone-50">
                  <td className="py-4 font-display text-lg">{item.name}</td>
                  <td className="py-4 text-center">{item.quantity}</td>
                  <td className="py-4 text-right font-bold">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="max-w-[250px] ml-auto space-y-3 mb-10">
            <div className="flex justify-between text-xs opacity-90">
              <span>Subtotal</span>
              <span>${lastOrder.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs opacity-90">
              <span>GST (Included)</span>
              <span>${(lastOrder.total * 0.1).toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-4 border-t-2 border-primary text-xl font-display">
              <span>Total Paid</span>
              <span className="font-bold text-gold">${lastOrder.total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-auto text-center border-t border-stone-100 pt-6">
            <p className="font-display text-lg italic text-primary/60">Your journey to radiant skin continues here.</p>
            <p className="text-[8px] uppercase tracking-[0.4em] text-primary/50 mt-2 font-bold">Bondiskinclinic.com</p>
          </div>
        </div>
      </div>
      
      <style>{`
        @media print {
          @page { size: A4; margin: 10mm; }
          body { margin: 0; background: white; }
          .bg-cream { background: white !important; }
          body * {
            visibility: hidden;
          }
          .print-content, .print-content * {
            visibility: visible;
          }
          .print-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            min-height: 100%;
            overflow: visible;
          }
          .print-content table {
            page-break-inside: avoid;
          }
          .print-content tr {
            page-break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
