import Image from "next/image";
import styles from "./work-info.module.css";
import suitcaseIcon from "public/icons/suitcase-svgrepo-com.svg";
import localIcon from "public/icons/location-pin-alt-1-svgrepo-com.svg";
interface WorkInfoProps {
  period: string;
  companieName: string;
  local: string;
  model: string;
}
export function WorkInfo(workInfoProps: WorkInfoProps) {
  return (
    <div className={styles.workInfo}>
      <h2 className={styles.period}>{workInfoProps.period}</h2>
      <h1 className={styles.companieName}>{workInfoProps.companieName}</h1>
      <h2 className={styles.local}>
        <Image src={localIcon} alt="local" />
        {workInfoProps.local}
      </h2>
      <h2 className={styles.model}>
        <Image src={suitcaseIcon} alt="suitecase"  />
        {workInfoProps.model}
      </h2>
    </div>
  );
}
