import React, { useCallback } from 'react';
import { IconsType, SkillItem } from '../types';
import { LuCode, LuDatabase } from "react-icons/lu";
import { TbBrandReactNative } from "react-icons/tb";
import { BsDatabaseUp } from "react-icons/bs";
import { GrDatabase } from "react-icons/gr";
import { FaChartLine } from "react-icons/fa";
import { MdSecurityUpdate } from "react-icons/md";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiVercel,
  SiNotion,
  SiGnometerminal,
  SiThreedotjs,
  SiGooglemaps,
  SiAuthelia,
  SiSupabase,
} from "react-icons/si";
import { getExactYears } from '../utils';
import ProgressBar from './ProgressBar';

const Icons: IconsType = {
  "code": <LuCode />,
  "react": <SiReact size={22} />,
  "react native": <TbBrandReactNative size={22} />,
  "javascript": <SiJavascript size={22} />,
  "typescript": <SiTypescript size={22} />,
  "next.js": <SiNextdotjs size={22} />,
  "tailwind css": <SiTailwindcss size={22} />,
  "node.js": <SiNodedotjs size={22} />,
  "mongodb": <SiMongodb size={22} />,
  "express.js": <SiExpress size={22} />,
  "python": <SiPython size={22} />,
  "firebase": <SiFirebase size={22} />,
  "sql": <LuDatabase size={22} />,
  "git & github": <SiGithub size={22} />,
  "figma": <SiFigma size={22} />,
  "vercel": <SiVercel size={22} />,
  "restful apis": <GrDatabase size={22} />,
  "render": <BsDatabaseUp size={22} />,
  "notion": <SiNotion size={22} />,
  "ai tools": <SiGnometerminal size={22} />,
  "chart.js": <FaChartLine size={22} />,
  "three.js": <SiThreedotjs size={22} />,
  "maps api": <SiGooglemaps size={22} />,
  "jwt": <SiAuthelia size={22} />,
  "supabase": <SiSupabase size={22} />,
  "hotupdater": <MdSecurityUpdate size={22} />,
};

const SkillCard = ({ title, items }: { title: string; items: SkillItem[] }) => {
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

  return (
    <div
      onMouseMove={onMouseMove}
      className="card-gradient group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-5 transition will-change-transform"
    >
      <h3 className="pb-2 font-semibold border-b border-white/10 text-white/90 group-hover:text-brand-200 transition capitalize">
        {title}
      </h3>
      <div className="mt-2">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="bg-white/10 text-green-400 rounded p-1.5">
                  {Icons[item.name.toLowerCase()]}
                </div>
                <div>
                  <p className="text-xs text-white">{item.name}</p>
                  <p className="text-xs text-white">{getExactYears(item.startDate || '', item.endDate || '')}</p>
                </div>
              </div>
              <span className={`text-xs bg-white/10 ${item.label === 'Expert' ? 'text-green-400'
                : item.label === 'Advance' ? 'text-orange-400' : 'text-cyan-400'} 
                rounded-full px-2 py-1`}>
                {item.label}
              </span>
            </div>
            <div className="mt-2 mb-4">
              <ProgressBar value={parseInt(item.width.replace('w-[', '').replace('%]', ''))}
                max={100}
                height="h-1"
                bgColor="bg-green-300"
                trackColor="bg-white/10"
                rounded="rounded-full"
                showLabel={false}
              />
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}

export default SkillCard;