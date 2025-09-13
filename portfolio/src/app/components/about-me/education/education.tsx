import styles from "./education.module.css";
import { useTranslations } from "next-intl";

interface EducationProps {
  certKey: string;
  courseKey: string;
  schoolKey: string;
  date: string;
}

interface Props {
  educationProps: EducationProps[];
}

export function Education({ educationProps }: Props) {
  const t = useTranslations("Education");

  return (
    <div className={`${styles.education} animatedBg`}>
      <h2 className={styles.title}>{t("educationTitle")}</h2>

      <div className={styles.section}>
        {educationProps.map((education, index) => (
          <div key={index} className={styles.educationItem}>
            <p className={styles.date}>{education.date}</p>
            <p className={styles.cert}>{t(education.certKey)}</p>
            <p className={styles.course}>{t(education.courseKey)}</p>
            <p className={styles.school}>{t(education.schoolKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
