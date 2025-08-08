import styles from "./job-description.module.css";
interface SkillsProps {
  name: string;
  pathIcon: string;
}
interface JobDescriptionProps {
  role: string;
  description: String;
  usedSkills: SkillsProps[];
}
export function JobDescription(props: JobDescriptionProps) {
  return (
    <div className={styles.jobDescription}>
      <h1 className={styles.role}> {props.role}</h1>
      <p className={styles.description}>{props.description}</p>
      <ul>
        {props.usedSkills.map((skill, index) => (
          <li key={index}>
            <img src={skill.pathIcon} alt={skill.name} />
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
