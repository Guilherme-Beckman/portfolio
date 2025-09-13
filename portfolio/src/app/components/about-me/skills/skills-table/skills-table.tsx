"use client";
import { Cloud, Code, Database, Wrench } from "lucide-react";
import styles from "./skills-table.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import skills from "@/app/data/skillsData";
import { useTranslations } from "next-intl";

const categories = [
  //{ id: 'ai', name: 'AI & Machine Learning', icon: <Blocks className="w-4 h-4" /> },
  {
    id: "frontend",
    name: "Frontend",
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

export default function SkillsTable() {
  const tSkillsTable = useTranslations("SkillsTable");
  const tSkillsData = useTranslations("SkillsData");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    "frontend"
  );
  const filteredSkills = skills.filter((s) => s.category === selectedCategory);
  return (
    <div className={`${styles.skillsTable} animatedBg`}>
      <h1 className={styles.title}>{tSkillsTable("stackTitle")}</h1>
      <h2 className={styles.subtitle}>{tSkillsTable("stackSubtitle")}</h2>

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
            <div className={styles.categorieName}>{c.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.skillsContainer}>
        {filteredSkills.map((skill) => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.iconName}>
              <Image src={skill.icon} width={0} height={0} alt="a" />
              <h1>{skill.name}</h1>
            </div>
            <p>{tSkillsData(skill.description)}</p>

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
