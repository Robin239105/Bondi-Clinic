import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "";

export function useTreatments(category = null) {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTreatments() {
      try {
        setLoading(true);
        const url = new URL(`${API_URL}/api/treatments`, window.location.origin);
        if (category) url.searchParams.append("category", category);
        
        const res = await fetch(url.toString());
        
        let data;
        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          data = await res.json();
        } else {
          throw new Error("Invalid response from server");
        }
        
        if (!res.ok) throw new Error(data?.error || "Failed to fetch treatments");
        
        setTreatments(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTreatments();
  }, [category]);

  return { treatments, loading, error };
}

export function useTreatmentBySlug(slug) {
  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTreatment() {
      if (!slug) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const url = new URL(`${API_URL}/api/treatments`, window.location.origin);
        url.searchParams.append("slug", slug);
        
        const res = await fetch(url.toString());
        
        let data;
        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          data = await res.json();
        } else {
          throw new Error("Invalid response from server");
        }
        
        if (!res.ok) throw new Error(data?.error || "Failed to fetch treatment");
        
        // Return first match since slug is unique
        setTreatment(data.data?.[0] || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTreatment();
  }, [slug]);

  return { treatment, loading, error };
}
