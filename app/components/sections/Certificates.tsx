import Section from "./Section";
import Card from "../Card";
import TiltCard from "../TiltCard";
import { Certificate } from "@/app/types";

const Certificates = ({ items }: { items: Certificate[] }) => {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((certificate, index) => (
          <TiltCard key={index}>
            <Card item={certificate} />
          </TiltCard>
        ))}
      </div>
    </Section>
  );
};

export default Certificates;
