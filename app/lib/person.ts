import { Person } from "../types";

const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

export const person: Person = {
  name: 'Md. Abu Sayed',
  role: 'Software Engineer — Full Stack',
  location: 'Berlin, Germany',
  phone: '(+49) 17637729384',
  email: 'sayeed.abu02@gmail.com',
  social: [
    { name: 'GitHub', link: 'https://github.com/ovi100' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/sayed2017' },
    { name: 'Facebook', link: 'https://www.facebook.com/sayed2017' },
    { name: 'Instagram', link: 'https://www.instagram.com/ovi_2016' },
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
      title: 'Full Stack Developer',
      startDate: '2023-01-08',
      endDate: '2026-01-08'
    },
    {
      year: 'Dec 2017 — Dec 2022',
      institute: 'Storrea Ltd.',
      title: 'Frontend Developer(Mid Level)',
      startDate: '2017-12-02',
      endDate: '2022-12-31'
    },
    {
      year: 'Feb 2017 — Oct 2017',
      institute: 'Ennvisio Digital Private Ltd.',
      title: 'Frontend Developer',
      startDate: '2017-02-01',
      endDate: '2017-10-31'
    },
    {
      year: 'Mar 2015 — Dec 2015',
      institute: 'American International University—Bangladesh',
      title: 'Lab Assistant-Internship',
      startDate: '2015-03-01',
      endDate: '2015-12-31'
    }
  ],
  skills: {
    frontend: [
      { name: 'React', label: 'Expert', width: 'w-[90%]', startDate: '2022-10-01', endDate: `${year}-${month}-${day}` },
      { name: 'React Native', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'JavaScript', label: 'Expert', width: 'w-[90%]', startDate: '2017-01-01', endDate: `${year}-${month}-${day}` },
      { name: 'TypeScript', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Next.js', label: 'Intermediate', width: 'w-[60%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Tailwind CSS', label: 'Expert', width: 'w-[90%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
    ],
    backend: [
      { name: 'Node.js', label: 'Expert', width: 'w-[90%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Python', label: 'Intermediate', width: 'w-[60%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Express.js', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Firebase', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'SQL', label: 'Intermediate', width: 'w-[60%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'MongoDB', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
    ],
    tools: [
      { name: 'Git & GitHub', label: 'Expert', width: 'w-[90%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Figma', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Vercel', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Render', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Notion', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'AI Tools', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
    ],
    others: [
      { name: 'RESTful APIs', label: 'Expert', width: 'w-[90%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Chart.js', label: 'Expert', width: 'w-[90%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Three.js', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Maps API', label: 'Expert', width: 'w-[90%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'JWT', label: 'Expert', width: 'w-[90%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      { name: 'Supabase', label: 'Advance', width: 'w-[75%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
      // { name: 'HotUpdater', label: 'Expert', width: 'w-[90%]', startDate: '2023-01-08', endDate: `${year}-${month}-${day}` },
    ]
  },
  certificates: [
    {
      year: 'June 24, 2022',
      institute: 'freecodecamp.org',
      title: 'Responsive Web Design',
      url: 'https://www.freecodecamp.org/certification/abu-sayed/responsive-web-design'
    },
    {
      year: 'July 29, 2022',
      institute: 'freecodecamp.org',
      title: 'Front End Development Libraries',
      url: 'https://www.freecodecamp.org/certification/abu-sayed/front-end-development-libraries'
    },
    {
      year: 'July 17, 2022',
      institute: 'freecodecamp.org',
      title: 'JavaScript Algorithms and Data Structures',
      url: 'https://www.freecodecamp.org/certification/abu-sayed/javascript-algorithms-and-data-structures'
    },
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
  languages: [
    { name: "Bengali (Native)", label: "", percentage: "100%", width: "w-[100%]" },
    { name: "English", label: "B2", percentage: "70%", width: "w-[70%]" },
    { name: "German", label: "A1", percentage: "17%", width: "w-[17%]" },
  ],
};