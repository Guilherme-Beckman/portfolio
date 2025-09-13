import Image from "next/image";
import styles from "./work-info.module.css";
import suitcaseIcon from "public/icons/suitcase-svgrepo-com.svg";
import localIcon from "public/icons/location-pin-alt-1-svgrepo-com.svg";
import { useTranslations } from "next-intl";

interface WorkInfoProps {
  period: string;
  companieNameKey: string;
  local: string;
  modelKey: string;
}

export function WorkInfo({ period, companieNameKey, local, modelKey }: WorkInfoProps) {
  const t = useTranslations("Experience");

  return (
    <div className={styles.workInfo}>
      <h2 className={styles.period}>{period}</h2>
      <h1 className={styles.companieName}>{t(companieNameKey)}</h1>
      <h2 className={styles.local}>
        <Image src={localIcon} alt="local" />
        {local}
      </h2>
      <h2 className={styles.model}>
        <Image src={suitcaseIcon} alt="suitcase" />
        {t(modelKey)}
      </h2>
    </div>
  );
}
