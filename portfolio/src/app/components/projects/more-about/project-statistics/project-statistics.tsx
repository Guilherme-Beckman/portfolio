import styles from "./project-statistics.module.css";
import { Star } from "lucide-react";
export interface ProjectStatisticsProps {
  statistics: {
    label: string;
    value: string;
  }[];
}

export function ProjectStatistics({ statistics }: ProjectStatisticsProps) {
  return (
    <div className={styles.projectStatistics}>
      <div className={styles.projectStatisticsTitle}>
        <Star color="yellow" />
        <h3>Project Statistics</h3>
      </div>

      <ul className={styles.statsList}>
        {statistics.map((stat, index) => (
          <li key={index} className={styles.statItem}>
            <span className={styles.statLabel}>{stat.label}</span>
            <span className={styles.statValue}>{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
