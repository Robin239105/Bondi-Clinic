import { useMemo, useState } from "react";
import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../../ui/ProductCard";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function ProductGrid() {
  const [filter, setFilter] = useState("All");
  const { products: apiProducts, loading, error } = useProducts();

  // Map API products to component format
  const products = useMemo(() => {
    return apiProducts.map(p => ({
      id: p.id,
      name: p.name,
      category: p.brand || p.category,
      price: `$${parseFloat(p.price).toFixed(2)}`,
      image: p.image_url ? `${API_URL}${p.image_url}` : null,
      description: p.description,
    }));
  }, [apiProducts]);

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category));
    return ["All", ...Array.from(cats).sort()];
  }, [products]);

  const filtered = useMemo(
    () => (filter === "All" ? products : products.filter((product) => product.category === filter)),
    [filter, products],
  );

  if (loading) {
    return (
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 animate-pulse">
                <div className="bg-stone-200 h-48 rounded-xl mb-4"></div>
                <div className="bg-stone-200 h-4 rounded w-3/4 mb-2"></div>
                <div className="bg-stone-200 h-4 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-pad bg-cream">
        <div className="container-wide text-center">
          <p className="text-red-600">Failed to load products. Please try again.</p>
        </div>
      </section>
    );
  }

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
