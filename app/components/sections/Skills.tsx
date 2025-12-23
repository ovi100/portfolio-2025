import { SkillItem, Skills } from "@/app/types";
import Section from "./Section";
import SkillCard from "../SkillCard";

export default function Skill({ items }: { items: Skills }) {
  const skills = items;
  const groups: string[] = Object.keys(skills);
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-10">
        {groups.map((group) => (
          <SkillCard
            key={group}
            title={group}
            items={(skills as Record<string, SkillItem[]>)[group] ?? []}
          />
        ))}
      </div>
    </Section>
  );
}
