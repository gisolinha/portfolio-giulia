import { Project, Experience, Skill } from './types';

export const HERO_DATA = {
  name: "Giulia Aragão",
  username: "gisolinha",
  badge: "giso ♡",
  typingLines: [
    "I am from Brazil",
    "I'm a student of Digital Games and Computer Science",
    "I'm also love ducks",
    "Be welcome!"
  ],
  japanese: "プログラマ" // Programmer
};

export const TECH_STACK = [
  { name: "C#", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Vue", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Unity", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
  { name: "Godot", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" },
  { name: "Vite", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Replit", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/replit/replit-original.svg" },
  { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Canva", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" },
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
];

export const PROJECTS: Project[] = [
  {
    id: 'court-of-souls',
    title: "Court of Souls",
    role: "Unity Support Developer",
    description: "Academic TCC project. Implemented core gameplay mechanics including the dialogue system with scoring logic, energy bar UI and functionality, and interaction systems.",
    tags: ["Unity", "C#", "UI/UX", "Game Logic"],
    status: "In Development"
  },
  {
    id: 'pixel-game',
    title: "Pixel Art Project (PI)",
    role: "Product Owner & Scrum Master",
    description: "Leading an academic group project in the Project Integrator course. Responsible for backlog management, sprint planning, and ensuring the team delivers a cohesive pixel art game using Construct 2.",
    tags: ["Scrum", "Product Ownership", "Construct 2", "Management"],
    status: "In Development"
  },
  {
    id: 'gamejam-plus',
    title: "GameJam+ Entry",
    role: "GD, LD, PO & Support Dev",
    description: "Participated in GameJam+. Worked on Game Design, Level Design, and dialogue logic in Construct 2. Managed the product vision and scope during the jam constraints.",
    tags: ["Game Design", "Level Design", "Construct 2", "Itch.io"],
    link: "https://itch.io",
    status: "Completed"
  },
  {
    id: 'unity-app',
    title: "Software Eng. App",
    role: "Unity UI Developer",
    description: "Developed a non-game application using Unity engine for a Software Engineering course, focusing on UI implementation and screen navigation flow.",
    tags: ["Unity", "App Dev", "UI Implementation"],
    status: "Completed"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'patuve',
    company: "Patuve Studios",
    role: "Product Owner (Volunteer)",
    period: "Present",
    description: "Recently joined to help organize development processes and manage product vision for upcoming game titles.",
    type: "Volunteering"
  },
  {
    id: 'pet',
    company: "PET Informação e Saúde Digital",
    role: "Researcher & Developer",
    period: "Present",
    description: "Working on technology research and development focusing on digital health solutions.",
    type: "Work"
  },
  {
    id: 'panorama',
    company: "Colégio Panorama",
    role: "Teacher",
    period: "4 months",
    description: "Taught Programming and Creative Engineering, introducing students to logic and creative problem solving.",
    type: "Work"
  },
  {
    id: 'freelance',
    company: "Freelance",
    role: "Web Developer",
    period: "Past",
    description: "Developed WordPress websites for non-profit organizations (Third Sector).",
    type: "Work"
  }
];

export const SKILLS: Skill[] = [
  { name: "C#", category: "Language", level: 70 },
  { name: "JavaScript/TS", category: "Language", level: 75 },
  { name: "Unity", category: "Engine", level: 65 },
  { name: "Construct 2", category: "Engine", level: 60 },
  { name: "React", category: "Tool", level: 70 },
  { name: "Scrum/Agile", category: "Soft Skill", level: 85 },
  { name: "Product Ownership", category: "Soft Skill", level: 80 },
  { name: "HTML/CSS", category: "Language", level: 90 },
];