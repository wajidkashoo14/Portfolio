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
    title: "Completed Masters in Computer Science",
    location: "University of Kashmir",
    description:
      "I completed masters after 3 years of studying. I immediately started working as freelancer.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct-2022",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    description:
      "I worked as a front-end developer intern for 9 months at General Aeronautics.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan-2023-Sep-2023",
  },
  {
    title: "Frontend Developer",
    location: "Srinagar, Kashmir India",
    description:
      "I'm now a frontend developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Oct-2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Syed Tour and Travels",
    description:
      "I worked as a frontend developer on this project for three months. Users can go through various tour packages and filter them.",
    tags: ["React", "Next.js", "Chakra UI", "Swiper", "React Paginate", "React Slick"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Carpalar",
    description:
      "I worked as frontend developer on this project where user can rent a car or buy a car.",
    tags: ["React", "Next.js", "Chakra UI", "Framer Motion", "Axios"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Baba Handicrafts",
    description:
      "Developed a portfolio for Non profit organization to showcase their work and what they offer.",
    tags: ["HTML", "Css", "Bootstrap"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Chakra UI",
  "Git",
  "Tailwind",
  "Ant Design",
  "Framer Motion",
] as const;
