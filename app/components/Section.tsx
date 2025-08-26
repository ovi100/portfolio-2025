import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-10 snap-start min-h-screen py-24 sm:py-28" aria-label={title}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white/90 mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
