import { ReactElement, ReactNode } from "react";

export type Social = {
  name: string;
  link: string
};
export type Education = {
  year: string;
  institute: string;
  title: string
};
export type Experience = {
  year: string;
  institute: string;
  title: string,
  startDate?: string;
  endDate?: string
};
export type SkillItem = {
  name: string;
  label?: string;
  percentage?: string;
  width: string;
  startDate?: string;
  endDate?: string;
};
export type Skills = {
  frontend: SkillItem[];
  backend: SkillItem[];
  tools: SkillItem[];
  others: SkillItem[];
};
export type Certificate = {
  year: string;
  institute: string;
  title: string;
  url: string;
};
export type Project = {
  name: string;
  description: string;
  url?: string;
  tags: string[]
};
export type Languages = {
  name: string;
  label: string;
  percentage: string;
  width: string
};
export type Person = {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  social: Social[];
  educations: Education[];
  experiences: Experience[];
  skills: Skills;
  certificates: Certificate[];
  projects: Project[];
  languages: Languages[];
};

export type TechStack = {
  name: string;
  icon: ReactElement;
};

export type IconsType = {
  [key: string]: React.ReactNode
};