"use client";
import { Cloud, Code, Database, Globe, Wrench } from "lucide-react";
import styles from "./skills-table.module.css";
import { h1, li } from "motion/react-client";
import { useState } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
interface Project {
  name: string;
  link: string;
}
interface TechItem {
  name: string;
  projects: Project[];
  category: string;
  description: string;
}
const categories = [
  //{ id: 'ai', name: 'AI & Machine Learning', icon: <Blocks className="w-4 h-4" /> },
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Code className="w-4 h-4" />,
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: <Database className="w-4 h-4" />,
  },
  { id: "cloud", name: "Cloud & DevOps", icon: <Cloud className="w-4 h-4" /> },
  {
    id: "tools",
    name: "Development Tools",
    icon: <Wrench className="w-4 h-4" />,
  },
];
const skills: TechItem[] = [
  {
    name: "React",
    projects: [
      {
        name: "Portfolio Website",
        link: "https://github.com/Guilherme-Beckman/portfolio",
      },
      {
        name: "FocusBird Frontend",
        link: "https://github.com/Guilherme-Beckman/focusbird-frontend",
      },
    ],
    category: "frontend",
    description: "UI library for building interactive and reactive interfaces.",
  },
  {
    name: "Angular",
    projects: [
      {
        name: "E-commerce Dashboard",
        link: "https://github.com/Guilherme-Beckman/angular-dashboard",
      },
      {
        name: "FocusBird Mobile",
        link: "https://github.com/Guilherme-Beckman/focusbird-mobile",
      },
    ],
    category: "frontend",
    description: "Framework para aplicações web estruturadas com TypeScript.",
  },
  {
    name: "Next.js",
    projects: [
      {
        name: "Blog Platform",
        link: "https://github.com/Guilherme-Beckman/nextjs-blog",
      },
      {
        name: "Portfolio v2",
        link: "https://github.com/Guilherme-Beckman/next-portfolio",
      },
    ],
    category: "frontend",
    description:
      "Framework React com renderização híbrida e otimizações de performance.",
  },
  {
    name: "Svelte",
    projects: [
      {
        name: "Notes App",
        link: "https://github.com/Guilherme-Beckman/svelte-notes",
      },
      {
        name: "Finance Tracker",
        link: "https://github.com/Guilherme-Beckman/svelte-finance",
      },
    ],
    category: "frontend",
    description:
      "Framework leve que compila componentes em código altamente otimizado.",
  },
  {
    name: "Ionic",
    projects: [
      {
        name: "Hybrid App Starter",
        link: "https://github.com/Guilherme-Beckman/ionic-starter",
      },
      {
        name: "FocusBird App",
        link: "https://github.com/Guilherme-Beckman/focusbird-ionic",
      },
    ],
    category: "frontend",
    description:
      "SDK para criar apps híbridos e PWA com Angular, React ou Vue.",
  },
  {
    name: "Tailwind CSS",
    projects: [
      {
        name: "UI Components Kit",
        link: "https://github.com/Guilherme-Beckman/tailwind-kit",
      },
      {
        name: "Landing Page Template",
        link: "https://github.com/Guilherme-Beckman/tailwind-landing",
      },
    ],
    category: "frontend",
    description:
      "Framework utilitário CSS para construção rápida de interfaces responsivas.",
  },

  {
    name: "Spring Boot",
    projects: [
      {
        name: "User Authentication API",
        link: "https://github.com/Guilherme-Beckman/auth-api",
      },
      {
        name: "FocusBird Backend",
        link: "https://github.com/Guilherme-Beckman/focusbird-backend",
      },
    ],
    category: "backend",
    description:
      "Java framework for building production-ready APIs and microservices.",
  },
  {
    name: "Docker",
    projects: [
      {
        name: "Kong Gateway + Consul Setup",
        link: "https://github.com/Guilherme-Beckman/kong-consul-docker",
      },
      {
        name: "FocusBird Microservices",
        link: "https://github.com/Guilherme-Beckman/focusbird-microservices",
      },
    ],
    category: "cloud",
    description: "Containerization and environment standardization tool.",
  },
  {
    name: "GitHub Actions",
    projects: [
      {
        name: "CI/CD Pipeline",
        link: "https://github.com/Guilherme-Beckman/ci-cd-pipeline",
      },
    ],
    category: "tools",
    description: "Automation tool for CI/CD workflows directly in GitHub.",
  },
];
export default function SkillsTable() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "frontend"
  );
  const filteredSkills = skills.filter((s) => s.category === selectedCategory);
  return (
    <div className={`${styles.skillsTable} animatedBg`}>
      <h1 className={styles.title}>Technical Stack</h1>
      <h2 className={styles.subtitle}>
        Technologies and tools I use to build innovative solutions
      </h2>
      <br />
      <div className={styles.categoriesContainer}>
        {categories.map((c) => (
          <div
            className={`${styles.categoriesItem} ${
              selectedCategory === c.id ? styles.selected : ""
            }`}
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
          >
            <div>{c.icon}</div>
            <div>{c.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.skillsContainer}>
        {filteredSkills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <h1>{skill.name}</h1>
            <p>{skill.description}</p>

            <ul className={styles.skillItemProjects}>
              {skill.projects.map((project) => (
                <li key={project.name} className={styles.skillItemProjectsItem}>
                  <Link href={project.link}>
                    <h2>{project.name}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
