import Section from "./Section";
import TiltCard from "../TiltCard";
import Card from "../Card";
import { Education } from "@/app/types";

export default function Educations({ items }: { items: Education[] }) {
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
