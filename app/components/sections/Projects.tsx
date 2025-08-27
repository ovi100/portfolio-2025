"use client";
import type { Project } from "../../lib/person";
import Section from "./Section";
import Card from "../Card";

const Projects = ({ items }: { items: Project[] }) => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((project, index) => (
          <Card key={index} item={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
