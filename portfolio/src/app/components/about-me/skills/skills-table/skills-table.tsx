"use client";
import { Cloud, Code, Database, Globe, Wrench } from "lucide-react";
import styles from "./skills-table.module.css";
import { h1 } from "motion/react-client";
import { useState } from "react";
interface TechItem {
  name: string;
  projects: number;
  proficiency: number;
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
    projects: 5,
    proficiency: 80,
    category: "frontend",
    description: "UI library",
  },
  {
    name: "Spring Boot",
    projects: 3,
    proficiency: 70,
    category: "backend",
    description: "Java backend framework",
  },
  {
    name: "Docker",
    projects: 4,
    proficiency: 75,
    category: "cloud",
    description: "Containerization tool",
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
      <div className={styles.skills}>
        {filteredSkills.map((skill) => (
          <div key={skill.name}>
            <p>{skill.name}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}
