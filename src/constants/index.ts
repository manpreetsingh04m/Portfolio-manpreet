import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  josys,
  kalvium,
  medable,
  uniquest,
  dockerX,
  schoolManagement,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MERN Stack Specialist",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Enthusiast",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Student",
    companyName: "Kalvium X LPU",
    icon: kalvium,
    iconBg: "#383E56",
    date: "August 2023 - August 2027",
    points: [
      "Kalvium's UG program in CS (Software Product Engineering) Campus: Jalandhar.",
      "Bachelor’s enrollment: B.Tech, Lovely Professional University.",
      "Acquired comprehensive skills in Full Stack Development, Data Structures, and Algorithms.",
      "Participated in various hackathons and collaborative projects.",
    ],
  },
  {
    title: "Software Developer Intern",
    companyName: "Josys",
    icon: josys,
    iconBg: "#E6DEDD",
    date: "August 2024 – August 2025",
    points: [
      "Developed and maintained backend services using Node.js, TypeScript, and Java to improve API performance and reliability.",
      "Worked with AWS Lambda, DynamoDB, and SQL databases to build and manage cloud-based backend systems.",
      "Helped reduce manual work by automating key workflows and improving overall system stability.",
      "Contributed to internal tools like the User Management System and Release Management Tool that were actively used by teams.",
      "Improved skills in backend development, API integration, and team collaboration in a real-world project environment.",
    ],
  },
  {
    title: "Software Developer",
    companyName: "Medable",
    icon: medable,
    iconBg: "#383E56",
    date: "December 2025 - Present",
    points: [
      "Contributing to the development of decentralized clinical trial technologies.",
      "Collaborating with cross-functional teams to deliver high-quality software solutions.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I had the opportunity to mentor Manpreet during his internship at Josys. He contributed significantly to our release management tool... What I appreciated most was the way he designed these solutions thoughtfully, keeping scalability and clarity in mind.",
    name: "Harjeet Singh Chhabada",
    designation: "Engineering Management",
    company: "Josys",
    image: "",
  },
  {
    testimonial:
      "He worked on several critical features, including the planned releases module, slot locking, and a robust notifications module. What stood out was the way he designed the notifications system... This demonstrated not just strong technical skills but also thoughtful design.",
    name: "Puneet Agarwal",
    designation: "Product Engineer",
    company: "Josys",
    image: "",
  },
];

const projects: TProject[] = [
  {
    name: "Uniquest",
    description:
      "A full-stack platform helping students discover universities based on exams, eligibility, and prerequisites. Simplified the complex process of finding suitable universities by exam and eligibility filters.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: uniquest,
    sourceCodeLink: "https://github.com/kalviumcommunity/S54_Manpreet_Singh_Capstone_UniQuest",
  },
  {
    name: "DockerX",
    description:
      "Collaborated on a tool to manage Docker containers—enabling operations like start, stop, and memory monitoring. Simplified Docker container management with integrated AI assistance.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini AI API",
        color: "green-text-gradient",
      },
      {
        name: "Dockerode",
        color: "pink-text-gradient",
      },
    ],
    image: dockerX,
    sourceCodeLink: "https://github.com/Dwij13/DockerX",
  },
  {
    name: "School Management",
    description:
      "A comprehensive school management system with separate portals for teachers, students, and admins. Features include attendance tracking, homework management, grade management, exam scheduling, and leave approval system.",
    tags: [
      {
        name: "MERN Stack",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: schoolManagement,
    sourceCodeLink: "https://github.com/manpreetsingh04m/School_Managment",
  },
];

export { services, technologies, experiences, testimonials, projects };
