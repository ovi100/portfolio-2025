import React, { useCallback } from "react";

type CardProps = {
  item: any;
};

const Card = ({ item }: CardProps) => {
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty("--x", `${x}px`);
      e.currentTarget.style.setProperty("--y", `${y}px`);
    },
    []
  );

  const keys = Object.keys(item);
  const normalCard = keys.includes("title") && !keys.includes("url");
  const normalLinkCard = keys.includes("title") && keys.includes("url");
  const projectCard =
    !keys.includes("title") && keys.includes("url") && keys.includes("tags");

  const Content = () => (
    <>
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
        <p className="text-sm text-neutral-300">{item.institute}</p>
        <p className="text-xs text-neutral-400">{item.year}</p>
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ pointerEvents: "none" }}
      />
    </>
  );

  const NormalCard = () => (
    <div
      onMouseMove={onMouseMove}
      className="card-gradient group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-5 transition will-change-transform"
    >
      <Content />
    </div>
  );

  const NormalLinkCard = () => (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMouseMove}
      className="card-gradient group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-5 transition will-change-transform"
    >
      <Content />
    </a>
  );

  const ProjectCard = () => (
    <a
      href={item.url || "#"}
      target={item.url ? "_blank" : undefined}
      rel={item.url ? "noreferrer" : undefined}
      onMouseMove={onMouseMove}
      className="card-gradient group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-5 transition will-change-transform"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-white/90 group-hover:text-brand-200 transition">
          {item.name}
        </h3>
        {item.url && <span className="text-xs text-brand-300">Visit ↗</span>}
      </div>
      <p className="mt-2 text-sm text-neutral-300">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags?.map((tag: string) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs bg-brand-500/20 text-brand-200 ring-1 ring-brand-500/40"
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ pointerEvents: "none" }}
      />
    </a>
  );

  return (
    <>
      {normalCard && <NormalCard />}
      {normalLinkCard && <NormalLinkCard />}
      {projectCard && <ProjectCard />}
    </>
  );
};

export default Card;
