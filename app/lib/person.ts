export type Edu = { year: string; institute: string; title: string }
export type Exp = { year: string; institute: string; title: string }
export type SkillBar = { name: string; label?: string; percentage?: string; width: string; focusable?: boolean }
export type Skills = {
  languages: SkillBar[]; js_frameworks: SkillBar[]; css_libraries: SkillBar[];
  backend: SkillBar[]; platforms: SkillBar[]; tools: SkillBar[]; others: SkillBar[]; all?: SkillBar[]
}
export type Certificate = { date: string; institute: string; title: string; link: string }
export type Project = { name: string; description: string; url?: string; tags: string[] }
export type Person = {
  name: string; role: string; location: string; phone: string; email: string;
  social: { name: string; link: string }[];
  educations: Edu[]; experiences: Exp[]; skills: Skills; certificates: Certificate[]; projects: Project[];
}

export const person: Person = {
  name: 'Abu Sayed',
  role: 'Software Engineer — Full Stack',
  location: 'Dhaka, Bangladesh',
  phone: '(+880) 1675600270',
  email: 'sayeed.abu02@gmail.com',
  social: [
    { name: 'GitHub', link: 'https://github.com/ovi100' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/sayed2017' },
  ],
  educations: [
    { year: '2011 – 2015', institute: 'American International University‑Bangladesh', title: 'BSc. Computer Science' },
    { year: '2009 – 2011', institute: 'Govt. Adamjee Nagar M W College', title: 'HSC (Science)' },
    { year: '2007 – 2009', institute: 'M W High School', title: 'SSC (Science)' }
  ],
  experiences: [
    { year: 'Jan 2023 – Present', institute: 'ACI Logistics Ltd.', title: 'Software Engineer (Full Stack)' },
    { year: 'Dec 2017 – Dec 2022', institute: 'Storrea Ltd.', title: 'Software Engineer (Frontend)' },
    { year: 'Feb 2017 – Oct 2017', institute: 'Ennvisio Digital Private Ltd.', title: 'Software Engineer (Web Developer)' },
    { year: 'Mar 2015 – Dec 2015', institute: 'American International University‑Bangladesh', title: 'Lab Assistant' }
  ],
  skills: {
    languages: [
      { name: 'JavaScript', label: '90%', width: 'w-[90%]', focusable: true },
      { name: 'TypeScript', label: '80%', width: 'w-[80%]', focusable: true },
      { name: 'ES6+', label: '90%', width: 'w-[90%]', focusable: true },
      { name: 'Python (Basic)', label: '50%', width: 'w-[50%]' },
    ],
    js_frameworks: [
      { name: 'React', label: '85%', width: 'w-[85%]', focusable: true },
      { name: 'React Native', label: '70%', width: 'w-[70%]' },
      { name: 'Next.js', label: '65%', width: 'w-[65%]', focusable: true },
      { name: 'Knockout.js', label: '90%', width: 'w-[90%]' },
    ],
    css_libraries: [
      { name: 'Tailwind CSS', percentage: '90%', width: 'w-[90%]', focusable: true },
      { name: 'Bootstrap', percentage: '95%', width: 'w-[95%]' },
      { name: 'Material UI', percentage: '80%', width: 'w-[80%]', focusable: true },
      { name: 'NextUI', percentage: '85%', width: 'w-[85%]' },
    ],
    backend: [
      { name: 'Node.js', percentage: '75%', width: 'w-[75%]' },
      { name: 'Express.js', percentage: '75%', width: 'w-[75%]', focusable: true },
      { name: 'Firebase', percentage: '85%', width: 'w-[85%]' },
      { name: 'Mongoose', percentage: '80%', width: 'w-[80%]', focusable: true },
    ],
    platforms: [
      { name: 'Vercel', percentage: '95%', width: 'w-[95%]' },
      { name: 'Netlify', percentage: '95%', width: 'w-[95%]' },
      { name: 'Render', percentage: '90%', width: 'w-[90%]' },
      { name: 'App Center', percentage: '90%', width: 'w-[90%]' },
    ],
    tools: [
      { name: 'VS Code', percentage: '95%', width: 'w-[95%]' },
      { name: 'GitHub', percentage: '95%', width: 'w-[95%]', focusable: true },
      { name: 'Git', percentage: '95%', width: 'w-[95%]' },
      { name: 'Postman', percentage: '75%', width: 'w-[75%]' },
      { name: 'Figma', percentage: '65%', width: 'w-[65%]', focusable: true },
      { name: 'Zoho Sprint', percentage: '90%', width: 'w-[90%]', focusable: true },
      { name: 'Notion', percentage: '90%', width: 'w-[90%]' },
      { name: 'ChatGPT', percentage: '70%', width: 'w-[70%]', focusable: true },
    ],
    others: [
      { name: 'RESTful APIs', percentage: '95%', width: 'w-[95%]', focusable: true },
      { name: 'Chart.js', percentage: '90%', width: 'w-[90%]' },
      { name: 'Maps API', percentage: '90%', width: 'w-[90%]', focusable: true },
      { name: 'JSON', percentage: '90%', width: 'w-[90%]' },
      { name: 'JWT', percentage: '90%', width: 'w-[90%]', focusable: true },
      { name: 'jQuery', percentage: '90%', width: 'w-[90%]' },
      { name: 'AJAX', percentage: '90%', width: 'w-[90%]' },
      { name: 'Axios', percentage: '90%', width: 'w-[90%]' },
      { name: 'HTML5', percentage: '95%', width: 'w-[95%]' },
      { name: 'CSS3', percentage: '95%', width: 'w-[95%]' },
    ],
  },
  certificates: [
    { date: 'June 24, 2022', institute: 'freecodecamp.org', title: 'Responsive Web Design', link: 'https://www.freecodecamp.org/certification/abu-sayed/responsive-web-design' },
    { date: 'July 29, 2022', institute: 'freecodecamp.org', title: 'Front End Development Libraries', link: 'https://www.freecodecamp.org/certification/abu-sayed/front-end-development-libraries' },
    { date: 'July 17, 2022', institute: 'freecodecamp.org', title: 'JavaScript Algorithms and Data Structures', link: 'https://www.freecodecamp.org/certification/abu-sayed/javascript-algorithms-and-data-structures' },
  ],
  projects: [
    { name: 'Shwapno App Store', description: "Directory of internal apps used by the company.", url: 'https://apps.shwapno.net/', tags: ['React', 'Next.js', 'Tailwind'] },
    { name: 'B2B Admin Dashboard', description: 'Monitor B2B SR orders and deliveries.', url: 'https://b2badmin2023.netlify.app/', tags: ['React', 'Tailwind', 'Express', 'MongoDB'] },
    { name: 'Outlet Attendance System', description: 'Web app to track outlet employee attendance.', url: 'https://attendx.netlify.app/', tags: ['React', 'Tailwind', 'Express', 'MongoDB'] },
    { name: 'B2B SR Order (Web)', description: 'Web version of the SR order app.', url: 'https://b2b-web.netlify.app/', tags: ['React', 'Tailwind', 'Express', 'MongoDB'] },
    { name: 'Gadget Monkey BD', description: 'Trusted omni‑channel device retailer.', url: 'https://www.gadgetmonkeybd.com/', tags: ['Next.js', 'React', 'Bootstrap'] },
    { name: 'Apple Gadgets', description: 'One‑stop tech shop website.', url: 'https://www.applegadgetsbd.com/', tags: ['Next.js', 'React', 'Tailwind'] },
    { name: 'Grocery Store (Demo)', description: 'Demo eCommerce theme for Storrea.', url: 'https://grocery.storrea.com/', tags: ['jQuery', 'Bootstrap'] },
    { name: 'Gadgets Store (Demo)', description: 'Demo eCommerce theme for Storrea.', url: 'https://special.storrea.com/', tags: ['jQuery', 'Bootstrap'] },
    { name: 'The Vape Cafe', description: 'Industry leader in Bangladesh vaping community.', url: 'https://www.thevapecafe.com.bd/', tags: ['jQuery', 'Bootstrap'] },
  ],
}

// Convenience aggregate if needed later
person.skills.all = [
  ...person.skills.languages,
  ...person.skills.js_frameworks,
  ...person.skills.css_libraries,
  ...person.skills.backend,
  ...person.skills.platforms,
  ...person.skills.others,
  ...person.skills.tools,
]