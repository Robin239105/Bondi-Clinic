import { useMemo, useState } from "react";
import { products } from "../../../data/products";
import ProductCard from "../../ui/ProductCard";

export default function ProductGrid() {
  const [filter, setFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ["All", ...Array.from(cats).sort()];
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? products : products.filter((product) => product.category === filter)),
    [filter],
  );

  return (
    <section className="section-pad bg-cream">
      <div className="container-wide">
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-8 py-3 label-text transition-all ${
                filter === item 
                  ? "bg-primary text-white shadow-lg" 
                  : "bg-white text-primary hover:bg-white/80"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xl text-primary/70 italic font-display">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
