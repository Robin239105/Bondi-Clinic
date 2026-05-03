import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL || "";

export function useTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeam() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/team`);
        
        let data;
        const contentType = res.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          data = await res.json();
        } else {
          throw new Error("Invalid response from server");
        }
        
        if (!res.ok) throw new Error(data?.error || "Failed to fetch team members");
        
        setMembers(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, []);

  return { members, loading, error };
}
