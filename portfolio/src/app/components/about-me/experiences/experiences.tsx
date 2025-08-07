import styles from "./experiences.module.css";
import { WorkInfo } from "./work-info/work-info";
export function Experiences() {
  return (
    <div className={styles.experiences}>
      <WorkInfo
        companieName={"IFMS"}
        model={"Presencial"}
        period={"JAN 2025 - Present"}
        local={"Corumbá - MS"}
      />
      
    </div>
  );
}
