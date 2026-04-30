import { teamMembers } from "../../../data/teamMembers";
import TeamCard from "../../ui/TeamCard";

export default function TeamGrid() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide grid gap-16">
        {teamMembers.map((member, index) => (
          <TeamCard key={member.name} member={member} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
