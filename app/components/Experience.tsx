import { motion } from "framer-motion";
import type { Exp } from "../lib/person";
import Section from "./Section";
import { useCallback } from "react";

export default function Experience({ items }: { items: Exp[] }) {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }, []);

  return (
    <Section id="experience" title="Experience">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((experience, index) => (
            <div
              key={index}
              onMouseMove={onMouseMove}
              className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden card-gradient flex flex-col justify-between shadow-xl transition will-change-transform p-5"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-sm text-neutral-300">
                  {experience.institute}
                </p>
                <p className="text-xs text-neutral-400">{experience.year}</p>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                style={{ pointerEvents: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
