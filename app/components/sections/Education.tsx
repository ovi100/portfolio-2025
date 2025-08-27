import type { Edu } from "../../lib/person";
import Section from "./Section";
import TiltCard from "../TiltCard";
import Card from "../Card";

export default function Education({ items }: { items: Edu[] }) {
  return (
    <Section id="education" title="Education">
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((education, index) => (
          <TiltCard key={index}>
            <Card item={education} />
          </TiltCard>
        ))}
      </div>
    </Section>
  );
}
