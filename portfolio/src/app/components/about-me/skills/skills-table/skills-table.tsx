import { Cloud, Code, Database, Globe, Wrench } from "lucide-react";
import styles from "./skills-table.module.css";
import { h1 } from "motion/react-client";
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
export default function SkillsTable() {
  return (
    <div className={`${styles.skillsTable} animatedBg`}>
      <h1 className={styles.title}>Technical Stack</h1>
      <h2 className={styles.subtitle}>
        Technologies and tools I use to build innovative solutions
      </h2>
      <div className={styles.categoriesContainer}>
        {categories.map((c) => (
          <div className={styles.categoriesItem} key={c.id}>
            {c.icon}
            {c.name}
          </div>
        ))}
      </div>
    </div>
  );
}
