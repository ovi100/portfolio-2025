export type Edu = { year: string; institute: string; title: string }
export type Exp = { year: string; institute: string; title: string, startDate?: string; endDate?: string }
export type SkillItem = { name: string; label?: string; percentage?: string; width: string; focusable?: boolean }
export type Skills = {
  languages: SkillItem[]; js_frameworks: SkillItem[]; css_libraries: SkillItem[];
  backend: SkillItem[]; platforms: SkillItem[]; tools: SkillItem[]; others: SkillItem[]; all?: SkillItem[]
}
export type Certificate = { year: string; institute: string; title: string; url: string }
export type Project = { name: string; description: string; url?: string; tags: string[] }
export type Person = {
  name: string; role: string; location: string; phone: string; email: string;
  social: { icon: string, name: string; link: string }[];
  educations: Edu[]; experiences: Exp[]; skills: Skills; certificates: Certificate[]; projects: Project[];
}

export const person: Person = {
  name: 'Abu Sayed',
  role: 'Software Engineer — Full Stack',
  location: 'Dhaka, Bangladesh',
  phone: '(+880) 1675600270',
  email: 'sayeed.abu02@gmail.com',
  social: [
    { icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-github-icon lucide-github\"><path d=\"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4\"/><path d=\"M9 18c-4.51 2-5-2-7-2\"/></svg>", name: 'GitHub', link: 'https://github.com/ovi100' },
    { icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-linkedin-icon lucide-linkedin\"><path d=\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\"/><rect width=\"4\" height=\"12\" x=\"2\" y=\"9\"/><circle cx=\"4\" cy=\"4\" r=\"2\"/></svg>", name: 'LinkedIn', link: 'https://www.linkedin.com/in/sayed2017' },
    { icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>', name: 'Instagram', link: 'https://www.instagram.com/ovi_2016' },
  ],
  educations: [
    { year: '2011 — 2015', institute: 'American International University—Bangladesh', title: 'BSc. Computer Science' },
    { year: '2009 — 2011', institute: 'Govt. Adamjee Nagar M W College', title: 'HSC (Science)' },
    { year: '2007 — 2009', institute: 'M W High School', title: 'SSC (Science)' }
  ],
  experiences: [
    {
      year: 'Jan 2023 — Jan 2026',
      institute: 'ACI Logistics Ltd.',
      title: 'Software Engineer (Full Stack)',
      startDate: '2023-01-08',
      endDate: '2026-01-08'
    },
    {
      year: 'Dec 2017 — Dec 2022',
      institute: 'Storrea Ltd.',
      title: 'Software Engineer (Frontend)',
      startDate: '2017-12-02',
      endDate: '2022-12-31'
    },
    {
      year: 'Feb 2017 — Oct 2017',
      institute: 'Ennvisio Digital Private Ltd.',
      title: 'Software Engineer (Web Developer)',
      startDate: '2017-02-01',
      endDate: '2017-10-31'
    },
    {
      year: 'Mar 2015 — Dec 2015',
      institute: 'American International University—Bangladesh',
      title: 'Lab Assistant',
      startDate: '2015-03-01',
      endDate: '2015-12-31'
    }
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
    { year: 'June 24, 2022', institute: 'freecodecamp.org', title: 'Responsive Web Design', url: 'https://www.freecodecamp.org/certification/abu-sayed/responsive-web-design' },
    { year: 'July 29, 2022', institute: 'freecodecamp.org', title: 'Front End Development Libraries', url: 'https://www.freecodecamp.org/certification/abu-sayed/front-end-development-libraries' },
    { year: 'July 17, 2022', institute: 'freecodecamp.org', title: 'JavaScript Algorithms and Data Structures', url: 'https://www.freecodecamp.org/certification/abu-sayed/javascript-algorithms-and-data-structures' },
  ],
  projects: [
    {
      name: 'Apple Gadgets',
      description: 'Apple Gadgets is a one-stop tech shop that offers tech enthusiasts authentic smartphones, gadgets, and accessories from renowned brands so they can have a first-hand experience with the real thing',
      url: 'https://www.applegadgetsbd.com/',
      tags: ['Next.js', 'React', 'Tailwind', 'Node.js', 'Express', 'MongoDB']
    },
    {
      name: 'Gadget Monkey BD',
      description: 'Gadget Monkey BD is currently one of the most trusted online and offline Mobile and Gadget stores in our country. Here you will find all the authentic devices and accessories at affordable prices. We have been providing the best services all over the country since 2016.',
      url: 'https://www.gadgetmonkeybd.com/',
      tags: ['Next.js', 'React', 'Bootstrap', 'Node.js', 'Express', 'MongoDB']
    },
    {
      name: "Operations App (Android)",
      description: "Product receiving from PO & DN using app in DC, outlet, dark store with product shelving. Real-time stock update, order picking, packing & dispatching from DC & dark store.",
      url: "",
      tags: ["React Native", "Tailwind CSS", 'Custom UI', "Express Js", "MongoDB", 'Firebase', 'Sunmi SDK'],
    },
    {
      name: 'Shwapno App Store',
      description: "Shwapno app store contains a list of all current available applications that's used by the company employees.",
      url: 'https://apps.shwapno.net/',
      tags: ['React', 'Next.js', 'Tailwind']
    },
    {
      name: 'B2B Admin Dashboard',
      description: 'It’s a combination of B2B SR order and order delivery applications. It has many features that help admins or higher authorities monitor B2B SR orders and order delivery.',
      url: 'https://b2badmin2023.netlify.app/',
      tags: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB']
    },
    {
      name: 'Outlet Attendance System',
      description: 'A web and mobile application that takes the attendance of the outlet employees. Admin can monitor the attendance of the outlet employees',
      url: 'https://attendx.netlify.app/',
      tags: ['React', 'Tailwind', 'Express', 'MongoDB']
    },
    {
      name: 'B2B SR Order (Web)',
      description: 'A platform that quickly onboard and take orders from new shops and generates daily and weekly reports of sales that measure SR sales performance. Also a handful of sales tracking systems for SR and higher authority',
      url: 'https://b2b-web.netlify.app/',
      tags: ['React', 'Tailwind', 'Express', 'MongoDB']
    },
    {
      name: "AttendX",
      description: "It's the basically the android version of the outlet attendance system. All app features are same but the platform is different",
      url: "",
      tags: ["React js", "Tailwind CSS", "Express Js", "MongoDB"],
    },
    {
      name: "Storrea Ltd.",
      description: "Storrea Limited is a technology company that enables multi-channel commerce for businesses.",
      url: "https://www.storrea.com/",
      tags: [
        "Ruby on Rails",
        "JavaScript",
        "JQuery",
        "Bootstrap",
        "HTML5",
        "CSS3",
      ],
    },
    {
      name: 'Gadgets Store (Demo)',
      description: 'Demo eCommerce theme for Storrea theme store.',
      url: 'https://special.storrea.com/',
      tags: ['JavaScript', 'Knockout.js', 'Liquid template', 'jQuery', 'Bootstrap']
    },
    {
      name: 'The Vape Cafe',
      description: "Established in 2015, The Vape Cafe stands as an industry leader in Bangladesh's vaping community of Bangladesh",
      url: 'https://www.thevapecafe.com.bd/',
      tags: ['JavaScript', 'Knockout.js', 'Liquid template', 'jQuery', 'Bootstrap']
    },
    {
      name: 'Grocery Store (Demo)',
      description: 'Demo eCommerce theme for Storrea theme store.',
      url: 'https://grocery.storrea.com/',
      tags: ['JavaScript', 'Knockout.js', 'Liquid template', 'jQuery', 'Bootstrap']
    },
    {
      name: "Kraos Bangladesh",
      description: "KRAOS Bangladesh started its journey back in 2016 through the inception of our dream project Kraftz, with the aim of creating in-demand products that are unique, yet not readily available in our country; be it boardgames, collectibles, or bookmarks. Kraftz was followed by TOP, a brand specialized in customized packaging solution and brand development.",
      url: "https://www.kraosbangladesh.com/",
      tags: [
        "JavaScript",
        "JQuery",
        "Alpine.js",
        "Bootstrap",
        "HTML5",
        "CSS3",
      ],
    },
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