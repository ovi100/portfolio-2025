import Section from "./Section";
import type { SkillItem, Skills as SkillsType } from "../../lib/person";
import { useCallback } from "react";

export default function Skills({ skills }: { skills: SkillsType }) {
  const groups: { title: string; key: keyof SkillsType }[] = [
    { title: "Languages", key: "languages" },
    { title: "JS Frameworks", key: "js_frameworks" },
    { title: "CSS Libraries", key: "css_libraries" },
    { title: "Backend", key: "backend" },
    { title: "Platforms", key: "platforms" },
    { title: "Tools", key: "tools" },
    { title: "Others", key: "others" },
  ];

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--x", `${x}px`);
      e.currentTarget.style.setProperty("--y", `${y}px`);
    },
    []
  );

  const SkillCard = ({
    title,
    items,
  }: {
    title: string;
    items: SkillItem[];
  }) => (
    <div
      onMouseMove={onMouseMove}
      className="card-gradient group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-5 transition will-change-transform"
    >
      <h3 className="font-semibold text-white/90 group-hover:text-brand-200 transition">
        {title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item.name}
            className="px-2.5 py-1 rounded-full text-xs bg-brand-500/20 text-brand-200 ring-1 ring-brand-500/40"
          >
            {item.name}
          </span>
        ))}
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );

  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-10">
        {groups.map((group) => (
          <SkillCard
            key={group.key}
            title={group.title}
            items={skills[group.key] ?? []}
          />
        ))}
      </div>
    </Section>
  );
}
