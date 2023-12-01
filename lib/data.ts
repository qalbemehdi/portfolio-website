import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology, CSE",
    location: "GL BAJAJ,Greater Noida",
    description:
      "With a B.Tech in Computer Science and Engineering, I've navigated a comprehensive exploration of cutting-edge technologies," +
        " laying a solid foundation for future endeavors in the field.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Cybernauts,Full-Stack Developer Intern",
    location: "Noida",
    description:
        "Developed Broomees' client platform in 20 days, reducing response time by 50% through API integration.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2022 - 11/2022",
  },
  {
    title: "HeartItOut,Front-End Developer",
    location: "Bengaluru",
    description:
        "Boosted customer interaction by 20% through Reactjs-based service pages and forms.",
    icon: React.createElement(CgWorkAlt),
    date: "03/2023 – 10/2023",
  },

  {
    title: "Full-Stack Developer",
    location:"",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Threads",
    description:
      "The frontend was built using NextJs,Tailwind and Shadcn, which included components like form for a post, feed\n" +
        "page,comment section.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: wordanalyticsImg,
    link:`https://threads-byqalbemehdi.vercel.app/`,
  },
  {
    title: "Authentication Page",
    description:
      "A reusable authentication page built with a clean UI,backed by JWT token and password hashing",
    tags: [ "Next.js", "TypeScript", "MongoDB", "token handling", "hashing"],
    imageUrl: corpcommentImg,
    link: `https://auth-tau-virid.vercel.app/login`
  },
  {
    title: "Saheli",
    description:
        "This is a prototype of having an online medical consultation and community for women to discuss there intimate issues.",
    tags: [ "HTML","CSS", "Bootstrap", "Javascript"],
    imageUrl: rmtdevImg,
    link:`https://tanyagupta1901.github.io/Saheli-1/`
  }

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
   "Java",
  "Framer Motion",
] as const;
