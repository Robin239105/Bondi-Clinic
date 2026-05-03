import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "";

export function useProducts(category = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const url = new URL(`${API_URL}/api/products`, window.location.origin);
        if (category) url.searchParams.append("category", category);
        
        const res = await fetch(url.toString());
        
        let data;
        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          data = await res.json();
        } else {
          throw new Error("Invalid response from server");
        }
        
        if (!res.ok) throw new Error(data?.error || "Failed to fetch products");
        
        setProducts(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  return { products, loading, error };
}
