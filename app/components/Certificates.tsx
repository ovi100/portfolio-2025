import { useCallback } from "react";
import type { Certificate } from "../lib/person";
import Section from "./Section";

export default function Certificates({ items }: { items: Certificate[] }) {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }, []);

  return (
    <Section id="certifications" title="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c) => (
          <a
            key={c.title}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            onMouseMove={onMouseMove}
            className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden card-gradient transition will-change-transform p-5"
          >
            <div className="text-sm text-white/90 group-hover:text-brand-200 transition">
              {c.date} · {c.institute}
            </div>
            <div className="mt-2 font-semibold group-hover:text-brand-200">
              {c.title}
            </div>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
              style={{ pointerEvents: "none" }}
            />
          </a>
        ))}
      </div>
    </Section>
  );
}
