import Section from "./Section";
import type { Person } from "../lib/person";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { useCallback } from "react";

export default function Contact({ person }: { person: Person }) {
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  }, []);
  
  return (
    <Section id="contact" title="Contact">
      <div className="grid sm:grid-cols-3 gap-6">
        <div
          onMouseMove={onMouseMove}
          className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden card-gradient transition will-change-transform"
        >
          <div className="p-5">
            <FiPhone className="text-brand-300" />
            <div className="mt-2 text-sm text-neutral-400">Phone</div>
            <div className="font-semibold text-white/90 group-hover:text-brand-200 transition">
              {person.phone}
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div
          onMouseMove={onMouseMove}
          className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden card-gradient transition will-change-transform"
        >
          <div className="p-6">
            <FiMapPin className="text-brand-300" />
            <div className="mt-2 text-sm text-neutral-400">Location</div>
            <div className="font-semibold text-white/90 group-hover:text-brand-200 transition">
              {person.location}
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
            style={{ pointerEvents: "none" }}
          />
        </div>
        <div
          onMouseMove={onMouseMove}
          className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden card-gradient transition will-change-transform"
        >
          <div className="p-6">
            <FiMail className="text-brand-300" />
            <div className="mt-2 text-sm text-neutral-400">Email</div>
            <div className="font-semibold text-white/90 group-hover:text-brand-200 transition">
              {person.email}
            </div>
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
            style={{ pointerEvents: "none" }}
          />
        </div>
      </div>
    </Section>
  );
}
