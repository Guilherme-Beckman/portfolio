import styles from "./work-info.module.css";

interface WorkInfoProps{
  period: string;
  companieName: string;
  local: string;
  model: string;
}
export function WorkInfo(workInfoProps: WorkInfoProps ) {
  return (
    <div className={styles.workInfo}>
      <h2 className={styles.period}>{workInfoProps.period}</h2>
      <h1 className={styles.companieName}>{workInfoProps.companieName}</h1>
      <h2 className={styles.local}>{workInfoProps.local}</h2>
      <h2 className={styles.model}>{workInfoProps.model}</h2>
    </div>
  );
}
