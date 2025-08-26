import { useCallback } from "react";
import type { Edu } from "../lib/person";
import Section from "./Section";

export default function Education({ items }: { items: Edu[] }) {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }, []);

  return (
    <Section id="education" title="Education">
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((ed) => (
          <div
            key={ed.institute + ed.year}
            onMouseMove={onMouseMove}
            className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden card-gradient transition will-change-transform p-5"
          >
            <h3 className="font-semibold text-white/90">{ed.title}</h3>
            <p className="text-sm text-brand-200">{ed.institute}</p>
            <p className="text-xs text-neutral-400 mt-1">{ed.year}</p>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
              style={{ pointerEvents: "none" }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
