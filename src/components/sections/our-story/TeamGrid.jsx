import { useTeam } from "../../../hooks/useTeam";
import TeamCard from "../../ui/TeamCard";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function TeamGrid() {
  const { members, loading, error } = useTeam();

  const mappedMembers = members.map(m => ({
    name: m.name,
    role: m.role,
    credential: m.credential,
    bio: m.bio,
    yearsExp: m.years_exp,
    expertise: m.expertise,
    image: m.image_url ? `${API_URL}${m.image_url}` : null,
  }));

  if (loading) {
    return (
      <section className="section-pad bg-cream">
        <div className="container-wide grid gap-16">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="grid lg:grid-cols-2 gap-12 animate-pulse">
              <div className="bg-stone-200 h-96 rounded-3xl"></div>
              <div className="space-y-4">
                <div className="bg-stone-200 h-4 rounded w-1/4"></div>
                <div className="bg-stone-200 h-12 rounded w-3/4"></div>
                <div className="bg-stone-200 h-4 rounded w-1/3"></div>
                <div className="bg-stone-200 h-32 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-pad bg-cream">
        <div className="container-wide text-center">
          <p className="text-red-600">Failed to load team members. Please try again.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-pad bg-cream">
      <div className="container-wide grid gap-16">
        {mappedMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
