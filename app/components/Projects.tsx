"use client";
import { useCallback } from "react";
import type { Project } from "../lib/person";
import Section from "./Section";

function ProjectCard({ p }: { p: Project }) {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }, []);

  return (
    <a
      href={p.url || "#"}
      target={p.url ? "_blank" : undefined}
      rel={p.url ? "noreferrer" : undefined}
      onMouseMove={onMouseMove}
      className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden card-gradient transition will-change-transform"
    >
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-semibold text-white/90 group-hover:text-brand-200 transition">
            {p.name}
          </h3>
          {p.url && <span className="text-xs text-brand-300">Visit ↗</span>}
        </div>
        <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs bg-brand-500/20 text-brand-200 ring-1 ring-brand-500/40"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ pointerEvents: "none" }}
      />
    </a>
  );
}

export default function Projects({ items }: { items: Project[] }) {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </Section>
  );
}
