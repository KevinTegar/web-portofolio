// lib/data.ts
import weldingImg from "@/public/image.png";
import portofolioImg from "@/public/webporto.png";
import profileImg from "@/public/profileImg.jpg";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandPython,
  TbBrandPhp,
  TbBrandLaravel,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2022;

export const profile = {
  avatar: profileImg,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Kevin Tegar",
  title: "Software Engineer",
  experience: `${experienceInYears} years`,
  likes: "building web apps and machine learning models",
  resumeLink: `https://www.linkedin.com/in/kevin-tegar-aa45b9206`,
  linkedInLink: "https://www.linkedin.com/in/kevin-tegar-aa45b9206",
  githubLink: "https://github.com/KevinTegar",
} as const;

export const links = [
  {
    name: "home",
    hash: "#home",
  },
  {
    name: "about",
    hash: "#about",
  },
  {
    name: "skills",
    hash: "#skills",
  },
  {
    name: "experience",
    hash: "#experience",
  },
  {
    name: "projects",
    hash: "#projects",
  },
  {
    name: "contact",
    hash: "#contact",
  },
] as const;

// Data pengalaman dalam berbagai bahasa
export const experiencesData = {
  en: [
    {
      title: "ESCAPE Organization Member",
      location: "University Campus",
      description:
        "Actively involved in ESCAPE, a student organization in my university. Through this experience, I have developed teamwork, leadership, and problem-solving skills while contributing to various events and collaborative projects.",
      icon: React.createElement(CgWorkAlt),
      date: "2022 - Present",
    }
  ],
  id: [
    {
      title: "Anggota Organisasi ESCAPE",
      location: "Kampus Universitas",
      description:
        "Aktif terlibat dalam ESCAPE, organisasi mahasiswa di universitas saya. Melalui pengalaman ini, saya telah mengembangkan keterampilan kerja tim, kepemimpinan, dan pemecahan masalah sambil berkontribusi dalam berbagai acara dan proyek kolaboratif.",
      icon: React.createElement(CgWorkAlt),
      date: "2022 - Sekarang",
    }
  ],
} as const;

// Data proyek dalam berbagai bahasa
export const projectsData = {
  en: [
    {
      title: "Welding Defect Detection",
      description:
        "A welding app, user can upload a welding image, and the app will detect the defects in the welding image.",
      tags: ["Python", "Flask", "OpenCV", "YOLOv8"],
      imageUrl: weldingImg,
      url: "",
    },
    {
      title: "Portfolio Website",
      description:
        "A portfolio website, user can see my projects and my skills.",
      tags: ["React", "Next.js", "Tailwind", "TypeScript"],
      imageUrl: portofolioImg,
      url: "",
    },
  ],
  id: [
    {
      title: "Deteksi Cacat Pengelasan",
      description:
        "Aplikasi pengelasan, pengguna dapat mengunggah gambar pengelasan, dan aplikasi akan mendeteksi cacat pada gambar pengelasan.",
      tags: ["Python", "Flask", "OpenCV", "YOLOv8"],
      imageUrl: weldingImg,
      url: "",
    },
    {
      title: "Website Portofolio",
      description:
        "Website portofolio, pengguna dapat melihat proyek dan keterampilan saya.",
      tags: ["React", "Next.js", "Tailwind", "TypeScript"],
      imageUrl: portofolioImg,
      url: "",
    },
  ],
} as const;

export const skillsData = [
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "React", icon: RiReactjsLine },
  { name: "Git", icon: RiGitBranchLine },
  { name: "Tailwind", icon: RiTailwindCssLine },
  { name: "Laravel", icon: TbBrandLaravel },
  { name: "MySQL", icon: RiDatabase2Line },
  { name: "PHP", icon: TbBrandPhp },
  { name: "Python", icon: TbBrandPython },
] as const;
