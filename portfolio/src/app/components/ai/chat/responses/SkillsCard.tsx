import Image from "next/image";
import skills from "data/skillsData";
import styles from "./SkillsCard.module.css";

const CATEGORY_LABELS: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend & APIs",
  cloud: "Cloud & DevOps",
  tools: "Development Tools",
};

const CATEGORY_ORDER = ["frontend", "backend", "cloud", "tools"];

export function SkillsCard() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    label: CATEGORY_LABELS[cat],
    items: skills.filter((s) => s.category === cat),
  }));

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>My Skills</h3>
      {grouped.map(({ label, items }) => (
        <div key={label} className={styles.category}>
          <h4 className={styles.categoryTitle}>{label}</h4>
          <div className={styles.chips}>
            {items.map((skill) => (
              <span key={skill.name} className={styles.chip}>
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={16}
                  height={16}
                  className={styles.chipIcon}
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
