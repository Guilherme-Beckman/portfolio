import Image from "next/image";
import styles from "./job-description.module.css";
import { useTranslations } from "next-intl";

interface SkillsProps {
  name: string;
  pathIcon: string;
}

interface JobDescriptionProps {
  roleKey: string;
  descriptionKey: string;
  usedSkills: SkillsProps[];
}

export function JobDescription({ roleKey, descriptionKey, usedSkills }: JobDescriptionProps) {
  const t = useTranslations("Experience");

  return (
    <div className={styles.jobDescription}>
      <h1 className={styles.role}>{t(roleKey)}</h1>
      <p className={styles.description}>{t(descriptionKey)}</p>
      <ul>
        {usedSkills.map((skill, index) => (
          <li key={index}>
            <Image src={skill.pathIcon} alt={skill.name} loading="lazy" />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
