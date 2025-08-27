import Section from "./Section";
import type { Exp } from "@/app/lib/person";
import Card from "../Card";
import TiltCard from "../TiltCard";

const Experience = ({ items }: { items: Exp[] }) => {
  return (
    <Section id="experience" title="Experience">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((experience, index) => (
            <TiltCard key={index}>
              <Card item={experience} />
            </TiltCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
