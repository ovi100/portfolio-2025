import Section from "./Section";
import type { Skills as SkillsType } from "../lib/person";
import Bar from "./Bar";

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

  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-10">
        {groups.map((g) => (
          <div key={g.key}>
            <h3 className="text-lg font-semibold mb-4 text-brand-200">
              {g.title}
            </h3>
            <div className="space-y-3">
              {skills[g.key]?.map((s) => (
                <Bar
                  key={s.name}
                  name={s.name}
                  label={s.label || s.percentage}
                  width={s.width}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
