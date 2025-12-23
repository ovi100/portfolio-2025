import { TechStack } from '@/app/types';
import React from 'react';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";

const TechStacks = () => {
  const techStacks: TechStack[] = [
    { name: 'React', icon: <SiReact size={24} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={24} /> },
    { name: 'TypeScript', icon: <SiTypescript size={24} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} /> },
    { name: 'Node.js', icon: <SiNodedotjs size={24} /> },
    { name: 'MongoDB', icon: <SiMongodb size={24} /> },
  ];
  return (
    <div className="relative min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center pt-28 pb-12">Tech Stack & Expertise</h2>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 py-12">
        {techStacks.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-3 p-3 rounded-md scale-100 hover:scale-105
          bg-black/10 hover:bg-white/10 border border-green-300 text-sm duration-300 transition-all">
            <div className="text-green-400">{tech.icon}</div>
            <span className="text-sm text-neutral-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStacks;