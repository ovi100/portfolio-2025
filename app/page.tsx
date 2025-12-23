"use client";
import { useEffect } from "react";
import {
  About,
  Certificates,
  Contact,
  Educations,
  Experience,
  Nav,
  Projects,
  Skills,
  TechStacks,
} from "./components";
import { person } from "./lib/person";

export default function Page() {
  useEffect(() => {
    if (location.hash)
      document
        .querySelector(location.hash)
        ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <main>
      <Nav />
      <About person={person} />
      <Skills items={person.skills} />
      <Experience items={person.experiences} />
      <Educations items={person.educations} />
      <TechStacks />
      <Certificates items={person.certificates} />
      <Projects items={person.projects} />
      <Contact person={person} />

      <footer className="py-12 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Abu Sayed. Built with Next.js, Three.js and Tailwind.
      </footer>
    </main>
  );
}
