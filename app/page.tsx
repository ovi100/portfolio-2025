"use client";
import { useEffect } from "react";
import {
  Certificates,
  Contact,
  Education,
  Experience,
  Nav,
  Projects,
  Skills,
} from "./components";
import About from "./components/About";
import { person } from "./lib/person";

export default function Page() {
  // Hydration fix for hash on initial load
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
      <Experience items={person.experiences} />
      <Education items={person.educations} />
      <Skills skills={person.skills} />
      <Certificates items={person.certificates} />
      <Projects items={person.projects} />
      <Contact person={person} />

      <footer className="py-12 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Abu Sayed. Built with Next.js, Three.js and
        Tailwind.
      </footer>
    </main>
  );
}
